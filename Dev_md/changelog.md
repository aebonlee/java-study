# Changelog

## v2.2.0 (2026-03-23)

### 개선
- 타이틀 디자인 python-study와 동일하게 변경
  - Navbar: J 아이콘 박스 제거 → `<h1>` 텍스트 로고
  - "Java" = Primary 블루, "Master" = Accent Dark 주황
  - font-size: 26px, font-weight: 800
  - Footer: logo-icon 제거 → footer-logo 텍스트 (Java=주황, Master=흰색)

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
