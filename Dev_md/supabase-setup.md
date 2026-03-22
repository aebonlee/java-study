# Supabase 설정 가이드

## 접속 정보
- **Project URL**: https://hcmgdztsgjvzcyxyayaj.supabase.co
- **테이블 접두사**: `javamaster_`

## 테이블 생성 방법
1. Supabase 대시보드 접속 → SQL Editor
2. `/supabase-setup.sql` 파일 내용을 복사하여 실행

## 테이블 목록
| 테이블 | 설명 |
|--------|------|
| `javamaster_users` | 사용자 정보 (이메일, 이름, 역할) |
| `javamaster_progress` | 학습 진도 (완료 레슨, 코드 실행 수) |
| `javamaster_quiz_scores` | 퀴즈 점수 기록 |
| `javamaster_badges` | 획득 배지 |
| `javamaster_community_posts` | 커뮤니티 게시글 |
| `javamaster_community_comments` | 게시글 댓글 |
| `javamaster_community_likes` | 좋아요 |

## RLS (Row Level Security)
- 모든 테이블에 RLS 활성화
- 사용자는 자신의 데이터만 수정 가능
- 커뮤니티 게시글/댓글은 누구나 읽기 가능

## 환경변수 (.env)
```
VITE_SUPABASE_URL=https://hcmgdztsgjvzcyxyayaj.supabase.co
VITE_SUPABASE_ANON_KEY=<anon key>
```

## OAuth 설정 (선택)
- Supabase Authentication → Providers에서 Google/Kakao 활성화
- Redirect URL: `https://java-study.dreamitbiz.com`
