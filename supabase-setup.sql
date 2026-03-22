-- ============================================
-- JavaMaster Supabase 테이블 설정
-- 접두사: javamaster_
-- Supabase SQL Editor에서 실행하세요
-- ============================================

-- 1. 사용자 테이블
CREATE TABLE IF NOT EXISTS javamaster_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  provider TEXT DEFAULT 'email',
  role TEXT DEFAULT 'student' CHECK (role IN ('student', 'teacher', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 학습 진도 테이블
CREATE TABLE IF NOT EXISTS javamaster_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES javamaster_users(id) ON DELETE CASCADE,
  completed_lessons TEXT[] DEFAULT '{}',
  code_runs INTEGER DEFAULT 0,
  streak_days INTEGER DEFAULT 0,
  last_activity_date DATE DEFAULT CURRENT_DATE,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 3. 퀴즈 점수 테이블
CREATE TABLE IF NOT EXISTS javamaster_quiz_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES javamaster_users(id) ON DELETE CASCADE,
  quiz_id TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. 배지 테이블
CREATE TABLE IF NOT EXISTS javamaster_badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES javamaster_users(id) ON DELETE CASCADE,
  badge_id TEXT NOT NULL,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

-- 5. 커뮤니티 게시글
CREATE TABLE IF NOT EXISTS javamaster_community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES javamaster_users(id) ON DELETE SET NULL,
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

-- 6. 커뮤니티 댓글
CREATE TABLE IF NOT EXISTS javamaster_community_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES javamaster_community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES javamaster_users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  author_avatar TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. 좋아요
CREATE TABLE IF NOT EXISTS javamaster_community_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES javamaster_community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES javamaster_users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_jm_progress_user ON javamaster_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_jm_quiz_user ON javamaster_quiz_scores(user_id);
CREATE INDEX IF NOT EXISTS idx_jm_badges_user ON javamaster_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_jm_posts_category ON javamaster_community_posts(category);
CREATE INDEX IF NOT EXISTS idx_jm_posts_created ON javamaster_community_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_jm_comments_post ON javamaster_community_comments(post_id);

-- RLS
ALTER TABLE javamaster_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view all" ON javamaster_users FOR SELECT USING (true);
CREATE POLICY "Users can update own" ON javamaster_users FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own" ON javamaster_users FOR INSERT WITH CHECK (auth.uid() = id);

ALTER TABLE javamaster_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "View own progress" ON javamaster_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Update own progress" ON javamaster_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Insert own progress" ON javamaster_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE javamaster_quiz_scores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "View own scores" ON javamaster_quiz_scores FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Insert own scores" ON javamaster_quiz_scores FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE javamaster_badges ENABLE ROW LEVEL SECURITY;
CREATE POLICY "View own badges" ON javamaster_badges FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Insert own badges" ON javamaster_badges FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE javamaster_community_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view posts" ON javamaster_community_posts FOR SELECT USING (true);
CREATE POLICY "Auth users create posts" ON javamaster_community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own posts update" ON javamaster_community_posts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Own posts delete" ON javamaster_community_posts FOR DELETE USING (auth.uid() = user_id);

ALTER TABLE javamaster_community_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view comments" ON javamaster_community_comments FOR SELECT USING (true);
CREATE POLICY "Auth users create comments" ON javamaster_community_comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own comments delete" ON javamaster_community_comments FOR DELETE USING (auth.uid() = user_id);

ALTER TABLE javamaster_community_likes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view likes" ON javamaster_community_likes FOR SELECT USING (true);
CREATE POLICY "Auth users like" ON javamaster_community_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own likes delete" ON javamaster_community_likes FOR DELETE USING (auth.uid() = user_id);

-- updated_at 트리거
CREATE OR REPLACE FUNCTION javamaster_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_jm_users_updated BEFORE UPDATE ON javamaster_users
  FOR EACH ROW EXECUTE FUNCTION javamaster_update_timestamp();
CREATE TRIGGER tr_jm_progress_updated BEFORE UPDATE ON javamaster_progress
  FOR EACH ROW EXECUTE FUNCTION javamaster_update_timestamp();
CREATE TRIGGER tr_jm_posts_updated BEFORE UPDATE ON javamaster_community_posts
  FOR EACH ROW EXECUTE FUNCTION javamaster_update_timestamp();
