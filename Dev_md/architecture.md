# JavaMaster 아키텍처 문서

## 기술 스택
- **프론트엔드**: React 19, React Router DOM 7
- **빌드 도구**: Vite 7
- **스타일링**: CSS Modules (17개 CSS 파일)
- **코드 하이라이팅**: PrismJS
- **데이터베이스**: Supabase (PostgreSQL)
- **배포**: GitHub Pages (gh-pages)

## 디렉토리 구조
```
java-study/
├── index.html
├── package.json
├── vite.config.js
├── .env                    # Supabase 키 (gitignore)
├── supabase-setup.sql      # DB 테이블 생성 SQL
├── Dev_md/                 # 프로젝트 문서
│   ├── project-plan.md
│   └── architecture.md
├── public/
│   ├── favicon.svg
│   ├── 404.html            # SPA 리다이렉트
│   ├── og-image.svg
│   └── og-image-generator.html
└── src/
    ├── main.jsx
    ├── App.jsx             # 라우터 & Provider
    ├── index.css           # CSS 임포트
    ├── styles/             # 17개 CSS 파일
    │   ├── base.css        # 변수, 리셋, 버튼
    │   ├── navbar.css
    │   ├── hero.css
    │   ├── footer.css
    │   ├── course.css
    │   ├── java-learning.css
    │   ├── quiz.css
    │   ├── editor.css
    │   ├── badge.css
    │   ├── auth.css
    │   ├── mypage.css
    │   ├── practice.css
    │   ├── community.css
    │   ├── animations.css
    │   ├── dark-mode.css
    │   └── responsive.css
    ├── contexts/
    │   ├── ThemeContext.jsx     # 다크모드
    │   └── ProgressContext.jsx  # 학습 진도
    ├── config/
    │   └── supabase.js
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   └── ErrorBoundary.jsx
    ├── data/
    │   ├── lessons.js      # 레슨 메타데이터
    │   └── badges.js       # 배지 정의
    └── pages/
        ├── Home.jsx
        ├── JavaLearning.jsx
        └── java-learning/
            ├── JavaLesson01.jsx ~ JavaLesson17.jsx
```

## 라우팅
| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/` | Home | 랜딩 페이지 |
| `/java-learning` | JavaLearning | 전체 커리큘럼 |
| `/java-learning/01~17` | JavaLesson01~17 | 개별 레슨 |

## 상태 관리
- **ThemeContext**: 라이트/다크 모드 (localStorage)
- **ProgressContext**: 레슨 완료, 퀴즈 점수, 코드 실행 횟수 (localStorage)

## Supabase 테이블 (접두사: javamaster_)
- `javamaster_users` - 사용자
- `javamaster_progress` - 학습 진도
- `javamaster_quiz_scores` - 퀴즈 점수
- `javamaster_badges` - 배지
- `javamaster_community_posts` - 게시글
- `javamaster_community_comments` - 댓글
- `javamaster_community_likes` - 좋아요
