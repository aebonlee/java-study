# JavaMaster 아키텍처 문서

## 기술 스택
- **프론트엔드**: React 19, React Router DOM 7
- **빌드 도구**: Vite 7
- **스타일링**: CSS Custom Properties (18개 CSS 파일)
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
│   ├── architecture.md
│   ├── features-guide.md
│   ├── design-system.md
│   ├── auth-guide.md
│   ├── supabase-setup.md
│   ├── deployment-guide.md
│   ├── og-meta-guide.md
│   └── changelog.md
├── scripts/
│   └── generate-og-image.mjs  # OG 이미지 생성 (sharp)
├── public/
│   ├── CNAME               # 커스텀 도메인
│   ├── favicon.svg
│   ├── 404.html            # SPA 리다이렉트
│   ├── og-image.png        # OG 이미지 (1200x630)
│   └── og-image-generator.html
└── src/
    ├── main.jsx
    ├── App.jsx             # 라우터 & Provider
    ├── index.css           # CSS 임포트
    ├── styles/             # 18개 CSS 파일
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
    │   ├── guide.css
    │   ├── animations.css
    │   ├── dark-mode.css
    │   └── responsive.css
    ├── contexts/
    │   ├── ThemeContext.jsx     # 다크모드
    │   ├── ProgressContext.jsx  # 학습 진도, 퀴즈 점수
    │   ├── BadgeContext.jsx     # 배지 평가 엔진
    │   └── AuthContext.jsx      # 인증 (Google/Kakao OAuth, 세션 관리)
    ├── config/
    │   └── supabase.js
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx       # 텍스트 로고, 메가 드롭다운, 진도 원형, 로그인 메뉴
    │   │   └── Footer.jsx       # 텍스트 로고, 연락처, 패밀리사이트
    │   ├── BadgeCard.jsx        # 배지 카드 컴포넌트
    │   ├── QuizComponent.jsx    # 퀴즈 엔진 (타이머, 셔플)
    │   ├── JavaCodeRunner.jsx   # Java 코드 실행기 (Piston API)
    │   └── ErrorBoundary.jsx
    ├── data/
    │   ├── lessons.js      # Java 레슨 메타데이터 (3단계 17과)
    │   ├── servletLessons.js  # 서블릿 레슨 메타데이터 (10과)
    │   ├── springLessons.js   # 스프링 레슨 메타데이터 (16과)
    │   ├── badges.js       # 24개 배지 정의 (4등급)
    │   └── quizzes.js      # 4개 퀴즈 (총 40문제)
    └── pages/
        ├── Home.jsx             # 랜딩 페이지
        ├── JavaLearning.jsx     # 전체 커리큘럼
        ├── QuizCenter.jsx       # 퀴즈 센터
        ├── BadgeCollection.jsx  # 도장깨기
        ├── MyPage.jsx           # 마이페이지
        ├── Guide.jsx            # 이용 가이드
        ├── Login.jsx            # 로그인 페이지
        ├── ServletLearning.jsx  # 서블릿 허브
        ├── SpringLearning.jsx   # 스프링 허브
        ├── java-learning/
        │   ├── JavaLesson01.jsx ~ JavaLesson17.jsx
        ├── servlet/
        │   ├── ServletLesson01.jsx ~ ServletLesson10.jsx
        └── spring/
            ├── SpringLesson01.jsx ~ SpringLesson16.jsx
```

## 라우팅
| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/` | Home | 랜딩 페이지 |
| `/java-learning` | JavaLearning | 전체 커리큘럼 |
| `/java-learning/01~17` | JavaLesson01~17 | 개별 레슨 |
| `/quiz` | QuizCenter | 퀴즈 센터 |
| `/badges` | BadgeCollection | 도장깨기 (배지) |
| `/my` | MyPage | 마이페이지 |
| `/guide` | Guide | 이용 가이드 |
| `/servlet` | ServletLearning | 서블릿 과정 허브 |
| `/spring` | SpringLearning | 스프링 과정 허브 |
| `/servlet/01~10` | ServletLesson01~10 | 서블릿 레슨 (10개) |
| `/spring/01~16` | SpringLesson01~16 | 스프링 레슨 (16개) |
| `/login` | Login | 로그인 (Google/Kakao OAuth) |

## 상태 관리
- **ThemeContext**: 라이트/다크 모드 (localStorage: `javamaster-theme`)
- **ProgressContext**: 레슨 완료 (Java/서블릿/스프링), 퀴즈 점수, 코드 실행 횟수 (localStorage: `javamaster-progress`)
  - `getJavaProgress` / `getServletProgress` / `getSpringProgress` 함수 제공
- **BadgeContext**: 배지 획득 평가, 알림 팝업 (localStorage: `javamaster-badges`)
- **AuthContext**: Google/Kakao OAuth 인증, 세션 30분 자동 만료, 로그인 모달 (Supabase Auth)

## 배지 시스템 (24개)
| 등급 | 개수 | 조건 유형 |
|------|------|-----------|
| 브론즈 | 6 | 첫 레슨, Hello World, 코드 실행 10회, 5개 레슨 등 |
| 실버 | 7 | 기초 마스터, 10개 레슨, 코드 50회, OOP 퀴즈 등 |
| 골드 | 8 | OOP/고급/웹 마스터, 만점 퀴즈, 15개 레슨, 코드 100회 |
| 플래티넘 | 4 | ALL CLEAR, 퀴즈 챔피언, 완벽주의자, Java Master |

### 배지 조건 유형
- `lessons_completed` - N개 레슨 완료
- `level_completed` - 특정 단계 완료
- `quiz_passed` - 특정 퀴즈 N점 이상
- `quiz_perfect` - 특정 퀴즈 만점
- `all_quizzes_passed` - 모든 퀴즈 통과
- `all_quizzes_perfect` - 모든 퀴즈 만점
- `code_runs` - 코드 실행 N회
- `all_completed` - 43개 레슨 모두 완료
- `specific_lessons` - 특정 레슨 완료
- `java_master` - 43개 레슨+퀴즈 모두 완료

## 퀴즈 시스템
| 퀴즈 ID | 제목 | 문제 수 | 제한시간 | 합격점 |
|---------|------|---------|---------|--------|
| basics | Java 기초 퀴즈 | 10 | 10분 | 70 |
| intermediate | Java 중급 퀴즈 (OOP) | 10 | 10분 | 70 |
| advanced | Java 고급 퀴즈 | 10 | 12분 | 70 |
| web | 웹 개발 퀴즈 | 10 | 12분 | 70 |

## 수료증 시스템
| 등급 | 조건 |
|------|------|
| 기초 수료증 (🥉) | 기초 레슨 완료 + 기초 퀴즈 통과 |
| 중급 수료증 (🥈) | 기초+중급 레슨 + 기초+중급 퀴즈 |
| 고급 수료증 (🥇) | 기초+중급+고급 레슨 + 3개 퀴즈 |
| Java Master (🏆) | 모든 레슨 + 모든 퀴즈 |

> **참고**: 서블릿/스프링 과정 추가에 따라 수료 기준이 확장될 수 있음

## Supabase 테이블 (접두사: javamaster_)
- `javamaster_users` - 사용자
- `javamaster_progress` - 학습 진도
- `javamaster_quiz_scores` - 퀴즈 점수
- `javamaster_badges` - 배지
- `javamaster_community_posts` - 게시글
- `javamaster_community_comments` - 댓글
- `javamaster_community_likes` - 좋아요

## 디자인 시스템
- **Primary**: #5382A1 (Java Blue)
- **Accent**: #E76F00 (Java Orange) - 버튼, 로고에만 사용
- **배경 그라데이션**: 다크블루 계열 (#0f1f2e ~ #3a6d94)
- **폰트**: Noto Sans KR + JetBrains Mono
- **아이콘**: Font Awesome 6
