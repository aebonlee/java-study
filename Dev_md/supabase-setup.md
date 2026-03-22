# Supabase 설정 가이드

## 접속 정보
- **Project URL**: https://hcmgdztsgjvzcyxyayaj.supabase.co
- **테이블 접두사**: `javamaster_`
- **SQL 스크립트**: `/supabase-setup.sql`

## 테이블 생성 방법
1. Supabase 대시보드 접속 → SQL Editor
2. `/supabase-setup.sql` 파일 내용을 복사하여 실행
3. 스크립트는 `DROP POLICY/TRIGGER IF EXISTS` 포함 → 안전하게 재실행 가능

## 테이블 목록 (7개)
| 테이블 | PK | 설명 |
|--------|-----|------|
| `javamaster_users` | `auth.users(id)` 참조 | 사용자 프로필 (이메일, 이름, 아바타, 역할) |
| `javamaster_progress` | UUID | 학습 진도 (완료 레슨 배열, 코드 실행 수, 연속 학습일) |
| `javamaster_quiz_scores` | UUID | 퀴즈 점수 (quiz_id, score, max_score) |
| `javamaster_badges` | UUID | 획득 배지 (badge_id, earned_at) |
| `javamaster_community_posts` | UUID | 커뮤니티 게시글 (제목, 내용, 카테고리, 태그) |
| `javamaster_community_comments` | UUID | 게시글 댓글 |
| `javamaster_community_likes` | UUID | 좋아요 (post_id + user_id 유니크) |

## 외래키 참조
- 모든 `user_id`는 `auth.users(id)` 직접 참조 (Supabase Auth 연동)
- `javamaster_users.id`도 `auth.users(id)` 참조 (CASCADE DELETE)
- 커뮤니티 게시글/댓글의 `user_id`는 `ON DELETE SET NULL`

## 인덱스 (8개)
| 인덱스 | 대상 |
|--------|------|
| `idx_jm_progress_user` | progress(user_id) |
| `idx_jm_quiz_user` | quiz_scores(user_id) |
| `idx_jm_quiz_id` | quiz_scores(quiz_id) |
| `idx_jm_badges_user` | badges(user_id) |
| `idx_jm_posts_category` | posts(category) |
| `idx_jm_posts_created` | posts(created_at DESC) |
| `idx_jm_comments_post` | comments(post_id) |
| `idx_jm_likes_post` | likes(post_id) |

## RLS (Row Level Security)
- 모든 테이블에 RLS 활성화
- 사용자는 자신의 데이터만 CRUD 가능
- 관리자(`aebon@kakao.com`)는 users, quiz_scores 전체 조회 가능
- 커뮤니티 게시글/댓글/좋아요는 누구나 읽기 가능
- `DROP POLICY IF EXISTS`로 재실행 시 충돌 방지

## 자동 트리거
- `javamaster_update_timestamp()` 함수로 `updated_at` 자동 갱신
- 적용 테이블: users, progress, quiz_scores, community_posts
- `DROP TRIGGER IF EXISTS`로 재실행 안전

## 환경변수 (.env)
```
VITE_SUPABASE_URL=https://hcmgdztsgjvzcyxyayaj.supabase.co
VITE_SUPABASE_ANON_KEY=<anon key>
```

## OAuth 설정

### Google OAuth
1. Supabase Dashboard → Authentication → Providers → Google
2. Google Cloud Console에서 OAuth 2.0 Client ID 생성
3. Authorized redirect URI: `https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback`
4. Supabase에 Client ID / Client Secret 입력

### Kakao OAuth
1. Supabase Dashboard → Authentication → Providers → Kakao
2. Kakao Developers에서 앱 생성 → REST API 키 복사
3. Redirect URI: `https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback`
4. Supabase에 Client ID / Client Secret 입력

### 이메일 인증 (v3.4.0)
1. Supabase Dashboard → Authentication → Providers → Email
2. "Enable Email provider" 활성화
3. "Confirm email" 설정 (권장: 활성화)
4. 이메일 템플릿 커스터마이즈 (선택)

### Redirect URL 설정
- Supabase Dashboard → Authentication → URL Configuration
- Site URL: `https://java-study.dreamitbiz.com`
- Redirect URLs: `https://java-study.dreamitbiz.com`, `http://localhost:5173`

## 동기화 가이드
- 진도/배지 Supabase 동기화 상세: `Dev_md/sync-guide.md` 참고
