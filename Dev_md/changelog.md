# Changelog

## v3.6.2 (2026-03-23)

### 수정 (모바일 메뉴 점검)
- **body 스크롤 잠금**: 모바일 메뉴 열릴 때 배경 페이지 스크롤 방지 (`document.body.style.overflow = 'hidden'`)
- **hover/touch 이벤트 분리**: `onMouseEnter`/`onMouseLeave`가 모바일 터치에서 드롭다운 간섭하던 버그 수정
  - 데스크톱(>1100px): hover로 드롭다운 열기/닫기
  - 모바일(≤1100px): onClick만으로 드롭다운 토글
- **모바일 배경 오버레이 추가**: 메뉴 열릴 때 반투명 배경(`rgba(0,0,0,0.4)`) 표시, 탭하면 메뉴 닫힘
- **모바일 메뉴 z-index 명시**: `.nav-menu` z-index: 999, `.mobile-backdrop` z-index: 998

### 수정 파일
- `src/components/layout/Navbar.jsx`: body 스크롤 잠금 useEffect, isMobile() 헬퍼, handleMouseEnter/Leave, mobile-backdrop
- `src/styles/navbar.css`: .mobile-backdrop 스타일, 모바일 .nav-menu z-index 추가

### 문서
- `Dev_md/changelog.md`: v3.6.2 기록
- `Dev_md/navigation-guide.md`: 모바일 메뉴 개선 사항 반영
- `Dev_md/project-plan.md`: 기능 목록 업데이트

---

## v3.6.1 (2026-03-23)

### 신규 기능
- **코드 실행기 복사 버튼** 추가
  - 제목 옆에 "복사" 버튼 배치
  - 클릭 시 코드 클립보드 복사, 2초간 "복사됨" 피드백 (체크 아이콘)

### 개선
- **메뉴 구분 컬러 농도 강화** (20% 짙게)
  - 라이트모드: `rgba(83,130,161, 0.1 → 0.18)`
  - 다크모드: `rgba(83,130,161, 0.2 → 0.3)`

### 수정 파일
- `src/components/JavaCodeRunner.jsx`: 복사 버튼 기능 추가
- `src/styles/editor.css`: editor-title-area, editor-copy-btn 스타일
- `src/styles/navbar.css`: 섹션 헤더 배경 농도 조정
- `src/styles/dark-mode.css`: 다크모드 섹션 헤더 농도 조정

---

## v3.6.0 (2026-03-23)

### 신규 기능
- **프로젝트 섹션** 추가 (8개 프로젝트, 4레벨)
  - Level 1 - Java 기초 프로젝트 (project-basic): 콘솔 주소록, 학생 성적 관리
  - Level 2 - Java 심화 프로젝트 (project-advanced): 도서 관리, 멀티스레드 채팅
  - Level 3 - 웹 프로젝트 (project-web): 서블릿 게시판, 서블릿 쇼핑몰
  - Level 4 - Spring 프로젝트 (project-spring): REST 블로그, E-Commerce
  - 프로젝트 허브 페이지 (`/projects`)
  - 각 프로젝트: 선수 과목, 필요 도구, 난이도, 구현 기능 안내
- **프로젝트 배지 5개** 추가 → 총 44개 (Bronze 9 / Silver 13 / Gold 15 / Platinum 5)
  - Bronze: `project-starter` (프로젝트 입문)
  - Silver: `project-basic-master` (기초 프로젝트 마스터)
  - Gold: `project-advanced-master` (심화 프로젝트 마스터), `project-web-master` (웹 프로젝트 마스터)
  - Platinum: `project-all-master` (프로젝트 올클리어)

### 개선
- **Navbar**: "프로젝트" 메가 드롭다운 추가 (기초/심화/웹/Spring 4섹션, 2x2 그리드)
- **메가 드롭다운 2x2 레이아웃**: 자바학습하기, 실무, 프로젝트 메뉴 가로 4열 → 2열 2행
- **컬러 통일**: 메가 드롭다운 섹션 헤더 개별 색상 제거 → primary 투명도(`rgba(83,130,161,0.1)`)
- **퀴즈 카드 컬러 통일**: 개별 배경색 제거 → `linear-gradient(135deg, var(--primary-dark), var(--primary))`
- **MyPage**: projectLevels 추가 → 단계별 진도에 프로젝트 4레벨 표시 (16단계)
- **Guide**: 프로젝트 가이드 섹션 추가, 배지 44개 업데이트
- **Home**: 프로젝트 feature 카드, 통계 44배지
- **Footer**: 프로젝트 링크 추가
- **다크모드**: 드롭다운 섹션 헤더 대응
- **프로젝트 페이지 간격 수정**: page-header와 본문 사이 `padding-top: 40px` 추가

### 신규 파일 (11개)
- `src/data/projects.js`: 프로젝트 데이터 (4레벨, 8프로젝트)
- `src/pages/ProjectHub.jsx`: 프로젝트 허브 페이지
- `src/pages/projects/ProjectLesson01~08.jsx`: 프로젝트 8개

### 수정 파일 (10개)
- `src/App.jsx`: lazy import 9개 + Route 9개
- `src/components/layout/Navbar.jsx`: 프로젝트 메가 드롭다운, 2x2 그리드, 컬러 통일
- `src/styles/navbar.css`: 2x2 그리드 CSS, 섹션 헤더 컬러 통일
- `src/styles/quiz.css`: 퀴즈 카드 헤더 통일
- `src/styles/dark-mode.css`: 드롭다운 섹션 헤더 다크모드
- `src/styles/java-learning.css`: 프로젝트 페이지 간격
- `src/contexts/ProgressContext.jsx`: project 4레벨 추가
- `src/data/badges.js`: 프로젝트 배지 5개
- `src/contexts/BadgeContext.jsx`: 프로젝트 배지 조건
- `src/pages/MyPage.jsx`: projectLevels, levelLabels 추가
- `src/pages/Guide.jsx`: 프로젝트 섹션, 배지 수 업데이트
- `src/pages/QuizCenter.jsx`: quizMeta 컬러 제거
- `src/pages/Home.jsx`: 프로젝트 feature 카드
- `src/components/layout/Footer.jsx`: 프로젝트 링크

### 문서
- `Dev_md/project-section-guide.md`: 프로젝트 섹션 가이드 (신규)
- `Dev_md/changelog.md`: v3.6.0 기록
- `Dev_md/features-guide.md`: 프로젝트 반영
- `Dev_md/architecture.md`: 프로젝트 반영
- `Dev_md/project-plan.md`: 프로젝트 반영

---

## v3.5.0 (2026-03-23)

### 신규 기능
- **실무 Java 과정** 추가 (10개 레슨, PR01~PR10, 4개 레벨)
  - Level 1 - 개발 환경과 도구 (practical-tools): IntelliJ IDEA, Git/GitHub, Maven/Gradle
  - Level 2 - 데이터와 SQL (practical-data): SQL 기초, JDBC 심화/트랜잭션, JSON 처리
  - Level 3 - 코드 품질과 실무 기법 (practical-quality): 클린 코드/리팩토링, 로깅/디버깅
  - Level 4 - 인프라와 날짜/시간 (practical-infra): Java 날짜/시간 API, Linux/서버 환경
  - 전용 허브 페이지 (`/practical`)
- **실무 Java 퀴즈** 추가 (10문제, 12분, 합격 70점)
  - IntelliJ, Git, Maven, SQL, JDBC, Jackson, SOLID, SLF4J, java.time, Linux
- **신규 배지 6개** 추가 → 총 39개 (Bronze 8 / Silver 12 / Gold 13 / Platinum 4)
  - Bronze: `practical-starter` (실무 입문)
  - Silver: `practical-tools-master` (도구 마스터), `practical-data-master` (데이터 마스터), `practical-quiz` (실무 퀴즈 통과)
  - Gold: `practical-quality-master` (품질 마스터), `practical-all-master` (실무 마스터)
- **실무 수료증** 추가 (마이페이지)
  - 실무 4레벨 완료 + 실무 퀴즈 70점 이상

### 개선
- **전체 통계 업데이트**: 43 → 53 레슨, 3 → 4 과정, 6 → 7 퀴즈, 33 → 39 배지
- **Navbar**: "실무" 메가 드롭다운 추가 (도구/데이터/품질/인프라 4섹션)
- **ProgressContext**: practical 레벨 4개 추가, `getPracticalProgress()`, total 43→53
- **BadgeContext**: `all_completed`/`java_master`에 practical 레벨 추가, `all_quizzes`에 practical 추가
- **Home**: 통계 53레슨/4과정/7퀴즈/39배지, 실무 Java 기능 카드, Course 4 로드맵 카드
- **MyPage**: practicalLevels import, 실무 수료증, Master 조건 확장 (12레벨+7퀴즈), levelLabels 4개 추가
- **Guide**: 배지 39개, 수료증 7종류
- **Footer**: 실무 과정 링크 추가
- **QuizCenter**: practical quizMeta 추가

### 신규 파일 (12개)
- `src/data/practicalLessons.js`: 실무 레슨 데이터 (4레벨, 10레슨, 헬퍼함수)
- `src/pages/PracticalLearning.jsx`: 실무 허브 페이지
- `src/pages/practical/PracticalLesson01~10.jsx`: 실무 레슨 10개

### 수정 파일 (10개)
- `src/App.jsx`: lazy import 11개, Route 11개
- `src/components/layout/Navbar.jsx`: 실무 메가 드롭다운
- `src/contexts/ProgressContext.jsx`: practical 레벨, getPracticalProgress, total 53
- `src/contexts/BadgeContext.jsx`: 조건 업데이트
- `src/data/badges.js`: 실무 배지 6개
- `src/data/quizzes.js`: 실무 퀴즈 10문제
- `src/pages/QuizCenter.jsx`: practical quizMeta
- `src/pages/Home.jsx`: 통계, 로드맵, 기능 카드
- `src/pages/MyPage.jsx`: practicalLevels, 수료증, levelLabels
- `src/pages/Guide.jsx`: 수치 업데이트
- `src/components/layout/Footer.jsx`: 실무 링크

### 문서
- `Dev_md/changelog.md`: v3.5.0 기록
- `Dev_md/practical-course-guide.md`: 실무 과정 가이드 (신규)
- `Dev_md/project-plan.md`: 커리큘럼 업데이트

---

## v3.4.0 (2026-03-23)

### 신규 기능
- **이메일 로그인/회원가입** 추가
  - 이메일+비밀번호 회원가입 (Supabase Auth signUp)
  - 이메일+비밀번호 로그인 (Supabase Auth signInWithPassword)
  - Login 페이지: 로그인/회원가입 탭 전환 UI
  - LoginModal: 이메일 폼 + "또는" 구분선 + OAuth 버튼
- **Supabase 진도 동기화**
  - ProgressContext: 로그인 시 Supabase에서 진도 로드 → localStorage와 병합 (합집합)
  - 레슨 완료/취소, 퀴즈 점수, 코드 실행 횟수 → Supabase 실시간 저장
  - 비로그인 시 기존 localStorage 전용 동작 100% 유지
- **Supabase 배지 동기화**
  - BadgeContext: 로그인 시 Supabase에서 배지 로드 → localStorage와 병합
  - 배지 획득 시 Supabase `javamaster_badges` 테이블에 저장

### 개선
- **프로바이더 순서 변경**: `ThemeProvider > AuthProvider > ProgressProvider > BadgeProvider`
  - ProgressContext/BadgeContext에서 useAuth() 접근 가능
- **이메일 로그인 스타일**: `.login-tabs`, `.login-form`, `.login-input`, `.login-submit-btn`, `.login-divider` + 다크모드 대응
- **수료증 그리드 3x2 레이아웃**: `cert-grid` auto-fill → `repeat(3, 1fr)` 고정 3열
  - 6개 수료증이 3열×2행으로 깔끔하게 배치
  - 반응형: 768px↓ 2열, 480px↓ 1열

### 수정 파일
- JSX 4개: App.jsx, AuthContext.jsx, ProgressContext.jsx, BadgeContext.jsx
- JSX 1개: Login.jsx
- CSS 2개: auth.css, mypage.css
- MD 7개: changelog, sync-guide(신규), architecture, auth-guide, features-guide, project-plan, supabase-setup

---

## v3.3.0 (2026-03-23)

### 수정
- **페이지 헤더 텍스트 컬러 수정** (전체 페이지)
  - 원인: `.java-lesson h1/p { color: var(--text-primary) }`가 `.page-header`의 `color: white` 상속을 덮어씀
  - course.css: `.page-header h1`에 `color: white` 명시, `.page-header .breadcrumb` 컬러 명시
  - java-learning.css: `.java-lesson .page-header h1/p` 셀렉터 추가 (높은 우선순위로 white 적용)
  - 개별 레슨 43개 + 허브 3개 모두 흰색 텍스트 보장
- **퀴즈 페이지 CSS 충돌 수정**
  - quiz.css에서 `.quiz-header`가 2번 정의되어 페이지 헤더와 퀴즈 컴포넌트 내부 헤더가 충돌
  - 퀴즈 컴포넌트 내부: `.quiz-header` → `.quiz-container .quiz-header`로 스코핑
- **다크모드 헤더 셀렉터 보완**
  - `.quiz-header`를 다크모드 헤더 그라데이션 셀렉터에 추가

### 개선
- **자바학습하기 메가 드롭다운 확장**
  - "웹 개발" 섹션 추가 (Ch.13~17, 빨강 `#EF4444`)
  - 기존 3섹션(기초/중급/고급) → 4섹션(기초/중급/고급/웹 개발)

### 수정 파일
- CSS 4개: course.css, java-learning.css, quiz.css, dark-mode.css
- JSX 1개: Navbar.jsx
- MD 2개: navigation-guide.md, changelog.md

---

## v3.2.1 (2026-03-23)

### 개선
- **페이지 헤더 디자인 통일**
  - 퀴즈 센터, 도장깨기, 이용 가이드, 마이페이지 헤더를 다크 그라데이션(`#1a3a52 → #5382A1`)으로 통일
  - 기존: 흰 배경 + 검은 글씨 → 변경: 다크 그라데이션 + 흰 글씨 (레슨 페이지와 동일)
  - 마이페이지: 헤더 섹션 신규 추가 (아이콘 + 타이틀 + 설명)
  - 다크모드: 헤더 그라데이션 `#0f1f2e → #1a3a52`로 통일
- **학습완료 버튼 컬러 통일** (43개 레슨 전체)
  - 완료 상태: `btn-secondary`(무채색/회색) → `btn-primary`(Java 블루)로 변경
  - 미완료 상태: `btn-accent`(주황색) 유지
  - 이제 모든 레슨에서 완료/미완료 모두 컬러 버튼으로 표시

### 수정 파일
- CSS 5개: quiz.css, badge.css, guide.css, mypage.css, dark-mode.css
- JSX 44개: MyPage.jsx + 43개 레슨 파일 (Java 17 + 서블릿 10 + 스프링 16)

---

## v3.2.0 (2026-03-23)

### 신규 기능
- **서블릿 퀴즈** 추가 (10문제, 12분, 합격 70점)
  - 서블릿 컨테이너/Tomcat, HTTP 상태코드, 생명주기, 한글 인코딩
  - 세션/쿠키, Filter/FilterChain, JSP EL/JSTL, MVC/PRG 패턴
  - @MultipartConfig/PreparedStatement, DAO/커넥션 풀
- **Spring 퀴즈** 추가 (10문제, 12분, 합격 70점)
  - Spring 모듈 구조, DI 생성자 주입, Bean 스코프/@Component vs @Bean
  - AOP @Around, DispatcherServlet, MyBatis #{} vs ${}
  - Spring Security 인증/인가, @SpringBootApplication/ResponseEntity
  - JPA/@ExceptionHandler, JWT/Swagger/Dockerfile
- **신규 배지 8개** 추가 → 총 33개 (Bronze 7 / Silver 9 / Gold 13 / Platinum 4)
  - Bronze: `servlet-starter` (서블릿 입문)
  - Silver: `servlet-quiz` (서블릿 퀴즈 통과), `twenty-lessons` (스무 고개)
  - Gold: `spring-quiz` (Spring 퀴즈 통과), `servlet-master` (서블릿 마스터), `spring-fw-master` (Framework 마스터), `spring-boot-master` (Boot 마스터), `forty-lessons` (40개 돌파!)

### 개선
- **기존 배지 7개 수정**
  - `spring-starter`: Ch.15 → SP01 대응
  - `servlet-warrior`: Ch.13-14 → S01-S03 대응
  - `half-way`: 9개 → 22개 (전체 43개의 절반)
  - `spring-boot-pro`: Ch.16-17 → SP09-SP10 대응
  - `fifteen-lessons`: 15개 → 30개, 타이틀 "30개 돌파!"
  - `all-clear`: 설명 "모든 레슨(43개)"
  - `quiz-champion`: 설명 "모든 퀴즈(6개)"
- **BadgeContext 평가 로직 확장**
  - `multi_level_completed` 조건 유형 추가
  - `all_quizzes_passed/perfect` → 6개 퀴즈 ID
  - `all_completed` → 8개 레벨 ID
  - `java_master` → 8개 레벨 + 6개 퀴즈
- **QuizCenter**: servlet/spring quizMeta 추가
- **MyPage 확장**
  - 서블릿/스프링 레벨 import, totalLessons 43개
  - levelLabels 4개 추가 (servlet-basic, servlet-advanced, spring-framework, spring-boot)
  - certTypes: 서블릿 수료증, Spring 수료증 추가, master 조건 확장
  - 단계별 진도: 8단계 표시
- **Home**: 퀴즈 4 → 6, 배지 24 → 33
- **Guide**: 배지 24 → 33

---

## v3.1.0 (2026-03-23)

### 개선
- **스프링 메가 드롭다운**: 스프링 메뉴를 일반 드롭다운에서 메가 드롭다운으로 변경
  - Framework 섹션 (SP01~SP08, 초록 `#10B981`)
  - Boot 섹션 (SP09~SP16, 파랑 `#3B82F6`)
  - 자바학습하기 메뉴와 동일한 메가 드롭다운 패턴 적용

### 문서
- Dev_md 신규 문서 4개 추가
  - `servlet-course-guide.md`: 서블릿 과정 가이드
  - `spring-course-guide.md`: 스프링 과정 가이드
  - `code-runner-guide.md`: JavaCodeRunner 기술 가이드
  - `navigation-guide.md`: 네비게이션 구현 가이드

---

## v3.0.0 (2026-03-23)

### 신규 기능
- **서블릿 과정** (10개 레슨, S01~S10)
  - 서블릿 개요, HTTP, 생명주기, 폼 처리, 세션/쿠키
  - 필터/리스너, JSP/EL/JSTL, MVC 패턴, DB 연동
  - 미니 프로젝트: CRUD 게시판
  - 전용 허브 페이지 (`/servlet`)
- **스프링 과정** (16개 레슨, SP01~SP16)
  - Spring Framework: IoC/DI, Bean, AOP, MVC, MyBatis, Security
  - Spring Boot: REST API, JPA, JWT, 테스트, Swagger, 배포
  - 전용 허브 페이지 (`/spring`)
- **Java 코드 실행기** (JavaCodeRunner 컴포넌트)
  - react-simple-code-editor + PrismJS 구문 강조
  - Piston API로 브라우저에서 Java 코드 실행 (무료, 인증 불필요)
  - 모든 레슨에 내장 (실행, 초기화, 출력 표시)
- **메가 드롭다운 네비게이션**
  - 기초/중급/고급 3개 드롭다운 → "자바학습하기" 메가 드롭다운 통합
  - 섹션별 컬러 헤더 (기초=초록, 중급=파랑, 고급=주황)
  - "서블릿" 드롭다운 (10개 레슨)
  - "스프링" 드롭다운 (16개 레슨)

### 개선
- Navbar 재구성: 웹개발 드롭다운 제거, 메가 드롭다운 적용
- ProgressContext 확장: getJavaProgress, getServletProgress, getSpringProgress 함수 추가
- 전체 레슨 수: 17개 → 43개 (Java 17 + 서블릿 10 + 스프링 16)
- Home 페이지: 통계 수치 업데이트 (43 레슨, 3 과정), 학습 로드맵 3단계
- Footer: 서블릿/스프링 과정 링크 추가
- 다크모드: 메가 드롭다운 대응
- hero.css: path-grid auto-fit 반응형 개선

### 데이터
- servletLessons.js: 서블릿 10개 레슨 메타데이터 (2레벨)
- springLessons.js: 스프링 16개 레슨 메타데이터 (2레벨)

### 라우팅
- 47개 라우트 (기존 21개 → 47개)
- `/servlet`, `/spring` 허브 페이지
- `/servlet/01~10`, `/spring/01~16` 개별 레슨

---

## v2.2.0 (2026-03-23)

### 개선
- 타이틀 디자인 python-study와 동일하게 변경
  - Navbar: J 아이콘 박스 제거 → `<h1>` 텍스트 로고
  - "Java" = Primary 블루, "Master" = Accent Dark 주황
  - font-size: 26px, font-weight: 800
  - Footer: logo-icon 제거 → footer-logo 텍스트 (Java=주황, Master=흰색)
- Supabase SQL 스크립트 개선
  - users PK → `auth.users(id)` 참조 (Supabase Auth 연동)
  - 모든 FK → `auth.users(id)` 직접 참조
  - `DROP POLICY/TRIGGER IF EXISTS` 추가 (안전한 재실행)
  - 관리자(`aebon@kakao.com`) 전체 조회 RLS 정책
  - quiz_scores에 `max_score`, `updated_at` 추가
  - 추가 인덱스 (`quiz_id`, `likes_post`)

---

## v2.1.0 (2026-03-22)

### 신규 기능
- 로그인 시스템 구현
  - Google OAuth 로그인
  - Kakao OAuth 로그인
  - AuthContext: 세션 관리 (30분 자동 만료, 연장 가능)
  - 로그인 모달 (requireAuth 패턴)
  - Navbar 사용자 메뉴 (아바타, 프로필, 로그아웃)
  - Login 페이지 (`/login`)
- OG 이미지 PNG 자동 생성 (sharp 기반 스크립트)
  - `scripts/generate-og-image.mjs`

### 개선
- 파비콘: 그라데이션 제거 → 순수 주황색 (#E76F00)
- 타이틀 컬러: "Java" = Primary 블루, "Master" = Accent 주황
- Supabase 클라이언트 설정 개선 (auth 옵션 추가)

---

## v2.0.0 (2026-03-22)

### 신규 기능
- 퀴즈 센터 (`/quiz`)
  - 4단계별 퀴즈 (기초/중급/고급/웹)
  - 단계당 10문제, 제한시간 10-12분
  - 보기 셔플, 정답/오답 표시, 해설
  - 퀴즈 이력 테이블
- 도장깨기 (`/badges`)
  - 24개 배지 (브론즈 6 / 실버 7 / 골드 8 / 플래티넘 4)
  - 실시간 배지 획득 알림 팝업
  - BadgeContext 배지 평가 엔진
- 마이페이지 (`/my`)
  - 학습 통계 (레슨, 퀴즈 평균, 코드 실행, 배지)
  - 수료증 현황 (기초/중급/고급/Master)
  - 단계별 진도 그래프
  - 획득 배지 목록
  - 퀴즈 성적표 (3회 시도, 합격/불합격)
- 이용 가이드 (`/guide`)
  - 10개 기능 가이드 카드
  - 자주 묻는 질문 (FAQ) 4개

### 개선
- Navbar 전면 리디자인
  - 진도 원형 그래프 표시
  - 마우스 호버 드롭다운 메뉴
  - 퀴즈, 도장깨기, 가이드, 마이페이지 링크 추가
- Footer 개선
  - GitHub 아이콘/링크 제거
  - 연락처 섹션 추가
  - Family Site 셀렉트 박스 추가
- 컬러 시스템 개선
  - 그라데이션에서 주황색 제거
  - 다크블루 기반 배경 (#0f1f2e ~ #3a6d94)
  - 주황색은 버튼과 로고에만 사용
- 다크모드: 모든 새 컴포넌트 대응
- Home 페이지: 퀴즈/배지 기능 소개 추가, 진도 바 표시

### 데이터
- quizzes.js: Java 퀴즈 40문제 (단계별 10문제)
- badges.js: 24개 배지 (10→24개 확장, 10개 조건 유형)
- ProgressContext: getQuizBestScore, getQuizAttempts, isLevelCompleted 추가

---

## v1.0.0 (2026-03-22)

### 신규
- JavaMaster 학습 플랫폼 초기 구축
- React 19 + Vite 7 기반 SPA
- 17개 학습 챕터 콘텐츠 작성
  - 기초 (Ch.01-04): Java 소개, 변수, 제어문, 배열
  - OOP (Ch.05-08): 클래스, 상속, 인터페이스, 컬렉션
  - 고급 (Ch.09-12): 제네릭, 람다/스트림, 멀티스레드, I/O
  - 웹 (Ch.13-17): 서블릿, JSP, Spring, Boot, JPA
- 다크 모드 지원
- 반응형 디자인 (모바일/태블릿/데스크톱)
- 학습 진도 추적 (localStorage)
- 학습 완료 버튼 및 진도 표시
- OG 메타 태그 (카카오/SNS 공유)
- Supabase 연동 준비 (javamaster_ 접두사)
- GitHub Pages 배포 (java-study.dreamitbiz.com)
- Dev_md 프로젝트 문서
