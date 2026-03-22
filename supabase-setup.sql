-- ============================================
-- JavaMaster Supabase 테이블 설정 스크립트
-- ============================================
-- 실행 방법: Supabase Dashboard > SQL Editor에서 실행
--
-- 이 스크립트는 회원 관리, 학습 진도, 퀴즈 점수,
-- 배지, 커뮤니티 기능에 필요한 테이블과 RLS 정책을 생성합니다.
--
-- 접두사: javamaster_
-- ============================================

-- ─────────────────────────────────────────────
-- 1. javamaster_users 테이블
-- ─────────────────────────────────────────────
-- 로그인한 사용자의 프로필 정보를 저장합니다.
-- AuthContext에서 로그인 시 자동으로 upsert됩니다.

CREATE TABLE IF NOT EXISTS javamaster_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  name TEXT,
  avatar_url TEXT,
  provider TEXT,
  role TEXT DEFAULT 'student' CHECK (role IN ('student', 'teacher', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- 2. javamaster_progress 테이블
-- ─────────────────────────────────────────────
-- 사용자별 학습 진도를 저장합니다.
-- 완료한 레슨 ID 배열, 코드 실행 횟수, 연속 학습일 등

CREATE TABLE IF NOT EXISTS javamaster_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  completed_lessons TEXT[] DEFAULT '{}',
  code_runs INTEGER DEFAULT 0,
  streak_days INTEGER DEFAULT 0,
  last_activity_date DATE DEFAULT CURRENT_DATE,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- ─────────────────────────────────────────────
-- 3. javamaster_quiz_scores 테이블
-- ─────────────────────────────────────────────
-- 사용자별 퀴즈 점수를 저장합니다.
-- ProgressContext에서 퀴즈 제출 시 자동으로 저장됩니다.

CREATE TABLE IF NOT EXISTS javamaster_quiz_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
  max_score INTEGER DEFAULT 100,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- 4. javamaster_badges 테이블
-- ─────────────────────────────────────────────
-- 사용자별 획득한 배지를 저장합니다.

CREATE TABLE IF NOT EXISTS javamaster_badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_id TEXT NOT NULL,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

-- ─────────────────────────────────────────────
-- 5. javamaster_community_posts 테이블
-- ─────────────────────────────────────────────
-- 커뮤니티 게시글을 저장합니다.

CREATE TABLE IF NOT EXISTS javamaster_community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  author_avatar TEXT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'free' CHECK (category IN ('qna', 'free', 'code', 'review')),
  tags TEXT[] DEFAULT '{}',
  is_solved BOOLEAN DEFAULT FALSE,
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- 6. javamaster_community_comments 테이블
-- ─────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS javamaster_community_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES javamaster_community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  author_avatar TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- 7. javamaster_community_likes 테이블
-- ─────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS javamaster_community_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES javamaster_community_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);

-- ─────────────────────────────────────────────
-- 인덱스
-- ─────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_jm_progress_user ON javamaster_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_jm_quiz_user ON javamaster_quiz_scores(user_id);
CREATE INDEX IF NOT EXISTS idx_jm_quiz_id ON javamaster_quiz_scores(quiz_id);
CREATE INDEX IF NOT EXISTS idx_jm_badges_user ON javamaster_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_jm_posts_category ON javamaster_community_posts(category);
CREATE INDEX IF NOT EXISTS idx_jm_posts_created ON javamaster_community_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_jm_comments_post ON javamaster_community_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_jm_likes_post ON javamaster_community_likes(post_id);

-- ─────────────────────────────────────────────
-- RLS (Row Level Security) 정책
-- ─────────────────────────────────────────────

-- === javamaster_users ===
ALTER TABLE javamaster_users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own data" ON javamaster_users;
DROP POLICY IF EXISTS "Admin can read all users" ON javamaster_users;
DROP POLICY IF EXISTS "Users can insert own data" ON javamaster_users;
DROP POLICY IF EXISTS "Users can update own data" ON javamaster_users;

CREATE POLICY "Users can read own data"
  ON javamaster_users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Admin can read all users"
  ON javamaster_users FOR SELECT
  USING (auth.jwt() ->> 'email' = 'aebon@kakao.com');

CREATE POLICY "Users can insert own data"
  ON javamaster_users FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON javamaster_users FOR UPDATE
  USING (auth.uid() = id);

-- === javamaster_progress ===
ALTER TABLE javamaster_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own progress" ON javamaster_progress;
DROP POLICY IF EXISTS "Users can insert own progress" ON javamaster_progress;
DROP POLICY IF EXISTS "Users can update own progress" ON javamaster_progress;

CREATE POLICY "Users can read own progress"
  ON javamaster_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON javamaster_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON javamaster_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- === javamaster_quiz_scores ===
ALTER TABLE javamaster_quiz_scores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own scores" ON javamaster_quiz_scores;
DROP POLICY IF EXISTS "Users can insert own scores" ON javamaster_quiz_scores;
DROP POLICY IF EXISTS "Users can update own scores" ON javamaster_quiz_scores;
DROP POLICY IF EXISTS "Admin can read all scores" ON javamaster_quiz_scores;

CREATE POLICY "Users can read own scores"
  ON javamaster_quiz_scores FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own scores"
  ON javamaster_quiz_scores FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own scores"
  ON javamaster_quiz_scores FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Admin can read all scores"
  ON javamaster_quiz_scores FOR SELECT
  USING (auth.jwt() ->> 'email' = 'aebon@kakao.com');

-- === javamaster_badges ===
ALTER TABLE javamaster_badges ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own badges" ON javamaster_badges;
DROP POLICY IF EXISTS "Users can insert own badges" ON javamaster_badges;

CREATE POLICY "Users can read own badges"
  ON javamaster_badges FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own badges"
  ON javamaster_badges FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- === javamaster_community_posts ===
ALTER TABLE javamaster_community_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view posts" ON javamaster_community_posts;
DROP POLICY IF EXISTS "Auth users create posts" ON javamaster_community_posts;
DROP POLICY IF EXISTS "Own posts update" ON javamaster_community_posts;
DROP POLICY IF EXISTS "Own posts delete" ON javamaster_community_posts;

CREATE POLICY "Anyone can view posts"
  ON javamaster_community_posts FOR SELECT
  USING (true);

CREATE POLICY "Auth users create posts"
  ON javamaster_community_posts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Own posts update"
  ON javamaster_community_posts FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Own posts delete"
  ON javamaster_community_posts FOR DELETE
  USING (auth.uid() = user_id);

-- === javamaster_community_comments ===
ALTER TABLE javamaster_community_comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view comments" ON javamaster_community_comments;
DROP POLICY IF EXISTS "Auth users create comments" ON javamaster_community_comments;
DROP POLICY IF EXISTS "Own comments delete" ON javamaster_community_comments;

CREATE POLICY "Anyone can view comments"
  ON javamaster_community_comments FOR SELECT
  USING (true);

CREATE POLICY "Auth users create comments"
  ON javamaster_community_comments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Own comments delete"
  ON javamaster_community_comments FOR DELETE
  USING (auth.uid() = user_id);

-- === javamaster_community_likes ===
ALTER TABLE javamaster_community_likes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view likes" ON javamaster_community_likes;
DROP POLICY IF EXISTS "Auth users like" ON javamaster_community_likes;
DROP POLICY IF EXISTS "Own likes delete" ON javamaster_community_likes;

CREATE POLICY "Anyone can view likes"
  ON javamaster_community_likes FOR SELECT
  USING (true);

CREATE POLICY "Auth users like"
  ON javamaster_community_likes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Own likes delete"
  ON javamaster_community_likes FOR DELETE
  USING (auth.uid() = user_id);

-- ─────────────────────────────────────────────
-- updated_at 자동 갱신 트리거
-- ─────────────────────────────────────────────

CREATE OR REPLACE FUNCTION javamaster_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_jm_users_updated ON javamaster_users;
CREATE TRIGGER tr_jm_users_updated
  BEFORE UPDATE ON javamaster_users
  FOR EACH ROW EXECUTE FUNCTION javamaster_update_timestamp();

DROP TRIGGER IF EXISTS tr_jm_progress_updated ON javamaster_progress;
CREATE TRIGGER tr_jm_progress_updated
  BEFORE UPDATE ON javamaster_progress
  FOR EACH ROW EXECUTE FUNCTION javamaster_update_timestamp();

DROP TRIGGER IF EXISTS tr_jm_quiz_updated ON javamaster_quiz_scores;
CREATE TRIGGER tr_jm_quiz_updated
  BEFORE UPDATE ON javamaster_quiz_scores
  FOR EACH ROW EXECUTE FUNCTION javamaster_update_timestamp();

DROP TRIGGER IF EXISTS tr_jm_posts_updated ON javamaster_community_posts;
CREATE TRIGGER tr_jm_posts_updated
  BEFORE UPDATE ON javamaster_community_posts
  FOR EACH ROW EXECUTE FUNCTION javamaster_update_timestamp();
