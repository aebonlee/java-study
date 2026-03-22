# Changelog

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
