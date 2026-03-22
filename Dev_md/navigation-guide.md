# 네비게이션 구현 가이드

## 개요
v3.0.0에서 Navbar를 전면 재구성했습니다.
기존 4개 드롭다운(기초/중급/고급/웹개발)을 2개 메가 드롭다운 + 1개 일반 드롭다운으로 변경.

## Navbar 구조
```
[로고] [자바학습하기▼] [서블릿▼] [스프링▼] [실무▼] [프로젝트▼] [커리큘럼] [퀴즈] [도장깨기] [가이드] [마이페이지] [진도] [테마] [로그인]
```

### 1. 메가 드롭다운: 자바학습하기
4개 섹션으로 구성된 메가 드롭다운:

| 섹션 | 헤더 색상 | 레슨 |
|------|----------|------|
| 기초 | `#10B981` (Success 초록) | 01~04 (Java 소개, 변수, 제어문, 배열) |
| 중급 | `#3B82F6` (Info 파랑) | 05~08 (클래스, 상속, 인터페이스, 컬렉션) |
| 고급 | `#E76F00` (Accent 주황) | 09~12 (제네릭, 람다, 멀티스레드, I/O) |
| 웹 개발 | `#EF4444` (Error 빨강) | 13~17 (서블릿, JSP, Spring, Boot, MVC) |

### 2. 일반 드롭다운: 서블릿
- 10개 항목 (S01~S10)
- `max-height: 70vh; overflow-y: auto` (스크롤 지원)

### 3. 메가 드롭다운: 스프링
2개 섹션으로 구성된 메가 드롭다운:

| 섹션 | 헤더 색상 | 레슨 |
|------|----------|------|
| Framework | `#10B981` (Success 초록) | SP01~SP08 (소개, IoC/DI, Bean, AOP, MVC, 바인딩, MyBatis, Security) |
| Boot | `#3B82F6` (Info 파랑) | SP09~SP16 (Boot 시작, REST API, JPA, 예외처리, JWT, 테스트, Swagger, 배포) |

### 4. 메가 드롭다운: 실무
4개 섹션으로 구성된 메가 드롭다운:

| 섹션 | 헤더 색상 | 레슨 |
|------|----------|------|
| 도구 | `#8B5CF6` (보라) | PR01~PR03 (IntelliJ, Git, Maven/Gradle) |
| 데이터 | `#EC4899` (핑크) | PR04~PR06 (SQL, JDBC, JSON) |
| 품질 | `#F59E0B` (황색) | PR07~PR08 (클린코드, 로깅) |
| 인프라 | `#06B6D4` (시안) | PR09~PR10 (날짜/시간, Linux) |

### 5. 메가 드롭다운: 프로젝트
4개 섹션으로 구성된 메가 드롭다운:

| 섹션 | 헤더 색상 | 프로젝트 |
|------|----------|----------|
| 기초 | `#10B981` (Success 초록) | PJ01~PJ02 (콘솔 주소록, 성적 관리) |
| 심화 | `#3B82F6` (Info 파랑) | PJ03~PJ04 (도서 관리, 채팅 앱) |
| 웹 | `#E76F00` (Accent 주황) | PJ05~PJ06 (서블릿 게시판, 쇼핑몰) |
| Spring | `#6DB33F` (Spring 초록) | PJ07~PJ08 (REST 블로그, E-Commerce) |

### 6. 평문 메뉴
- 커리큘럼 (`/java-learning`)
- 퀴즈 (`/quiz`)
- 도장깨기 (`/badges`)
- 가이드 (`/guide`)
- 마이페이지 (`/my`)

## CSS 클래스

### 메가 드롭다운
```css
.dropdown-mega {
  display: flex;
  gap: 8px;
  min-width: 480px;
  padding: 16px;
}

.dropdown-mega-section {
  flex: 1;
  min-width: 0;
}

.dropdown-section-header {
  padding: 6px 12px;
  border-radius: 6px;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 6px;
}

/* 섹션별 헤더 색상 */
.dropdown-section-header.beginner    { background: #10B981; }
.dropdown-section-header.intermediate { background: #3B82F6; }
.dropdown-section-header.advanced    { background: #E76F00; }
```

### 일반 드롭다운 (긴 목록)
```css
.dropdown-menu {
  max-height: 70vh;
  overflow-y: auto;
}
```

## 모바일 대응 (≤1100px)

### 변경 사항
- 메가 드롭다운 → 세로 레이아웃 (flex-direction: column)
- 모든 드롭다운 → 아코디언 형태
- 햄버거 메뉴 (`.menu-toggle`) 표시

### CSS
```css
@media (max-width: 1100px) {
  .dropdown-mega {
    flex-direction: column;
    min-width: auto;
  }
}
```

## 다크모드 대응
```css
[data-theme="dark"] .dropdown-mega {
  background: #1F2937;
  border-color: #374151;
}

[data-theme="dark"] .dropdown-mega-section ul a {
  color: #D1D5DB;
}

[data-theme="dark"] .dropdown-mega-section ul a:hover {
  background: rgba(83, 130, 161, 0.15);
}
```

## 파일 구조
| 파일 | 역할 |
|------|------|
| `src/components/layout/Navbar.jsx` | 네비게이션 컴포넌트 (JSX) |
| `src/styles/navbar.css` | 네비게이션 스타일 |
| `src/styles/dark-mode.css` | 다크모드 오버라이드 |
| `src/styles/responsive.css` | 반응형 오버라이드 |

## 진도 원형 그래프
- SVG 기반 원형 진도 표시
- `ProgressContext.getTotalProgress()` 사용 (53개 레슨 기준)
- 0%일 때 숨김, 100%일 때 체크 아이콘

## 변경 이력
| 버전 | 변경 내용 |
|------|----------|
| v1.0.0 | 기초/중급/고급/웹개발 4개 드롭다운 |
| v2.0.0 | 퀴즈/도장깨기/가이드/마이페이지 추가, 진도 원형 |
| v3.0.0 | 메가 드롭다운 통합, 서블릿/스프링 드롭다운 추가 |
| v3.1.0 | 스프링 메뉴를 메가 드롭다운으로 변경 (Framework/Boot 2섹션) |
| v3.3.0 | 자바학습하기 메가 드롭다운에 "웹 개발" 섹션 추가 (3→4섹션) |
| v3.5.0 | "실무" 메가 드롭다운 추가 (4섹션: 도구/데이터/품질/인프라) |
| v3.6.0 | "프로젝트" 메가 드롭다운 추가 (4섹션: 기초/심화/웹/Spring) |
