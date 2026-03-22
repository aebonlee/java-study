# 프로젝트 섹션 가이드

## 개요

프로젝트 섹션은 학습한 내용을 실전 프로젝트로 적용하는 실습 공간입니다.
기존 53개 레슨과 별도로, 4개 레벨/8개 프로젝트로 구성되어 있습니다.

## 구조

### 파일 구조
```
src/
├── data/projects.js              # 프로젝트 데이터 (4레벨, 8프로젝트, 헬퍼함수)
├── pages/
│   ├── ProjectHub.jsx             # 허브 페이지 /projects
│   └── projects/
│       ├── ProjectLesson01.jsx    # PJ01 콘솔 주소록
│       ├── ProjectLesson02.jsx    # PJ02 학생 성적 관리
│       ├── ProjectLesson03.jsx    # PJ03 도서 관리 시스템
│       ├── ProjectLesson04.jsx    # PJ04 멀티스레드 채팅
│       ├── ProjectLesson05.jsx    # PJ05 서블릿 게시판
│       ├── ProjectLesson06.jsx    # PJ06 서블릿 쇼핑몰
│       ├── ProjectLesson07.jsx    # PJ07 Spring REST 블로그
│       └── ProjectLesson08.jsx    # PJ08 Spring E-Commerce
```

### 4개 레벨

| Level | ID | 색상 | 아이콘 | 프로젝트 |
|-------|-----|------|--------|---------|
| 1 | project-basic | #10B981 | fa-seedling | PJ01, PJ02 |
| 2 | project-advanced | #3B82F6 | fa-flask | PJ03, PJ04 |
| 3 | project-web | #E76F00 | fa-globe | PJ05, PJ06 |
| 4 | project-spring | #6DB33F | fa-leaf | PJ07, PJ08 |

### 8개 프로젝트

| ID | 제목 | 난이도 | 선수 과목 |
|----|------|--------|-----------|
| PJ01 | 콘솔 주소록 | beginner | Ch01-06, Ch08 |
| PJ02 | 학생 성적 관리 시스템 | beginner | Ch01-08 |
| PJ03 | 도서 관리 시스템 | intermediate | Ch01-12, PR01/03/04/05 |
| PJ04 | 멀티스레드 채팅 | intermediate | Ch01-12, PR01/07/08 |
| PJ05 | 서블릿 게시판 | advanced | S01-S10, PR04/05/06 |
| PJ06 | 서블릿 쇼핑몰 | advanced | S01-S10, PR04/05/06/07 |
| PJ07 | Spring REST 블로그 API | expert | SP01-SP15, PR02/03/04 |
| PJ08 | Spring E-Commerce 플랫폼 | expert | SP01-SP16, PR02/03/04/10 |

## 데이터 흐름

### projects.js
- `projectLevels`: 4개 레벨 배열, 각 레벨에 projects 배열 포함
- `allProjects`: 모든 프로젝트를 flatMap으로 평탄화
- `getProjectById(id)`: ID로 프로젝트 조회
- `getAdjacentProjects(id)`: 이전/다음 프로젝트 조회

### ProgressContext 연동
- 프로젝트 완료: `completeLesson('PJ01')` — 기존 메커니즘 재사용
- `isLevelCompleted('project-basic')` — 프로젝트 레벨 완료 체크
- `getProjectProgress()` — 프로젝트 전용 진도 (0~100%)
- `getTotalProgress()` — 기존 53개 레슨만 포함 (프로젝트 미포함)

### 배지 (5개)
| ID | 이름 | 등급 | 조건 |
|----|------|------|------|
| project-starter | 프로젝트 입문 | Bronze | PJ01 완료 |
| project-basic-master | 기초 프로젝트 마스터 | Silver | project-basic 완료 |
| project-advanced-master | 심화 프로젝트 마스터 | Gold | project-advanced 완료 |
| project-web-master | 웹 프로젝트 마스터 | Gold | project-web 완료 |
| project-all-master | 프로젝트 올클리어 | Platinum | 4레벨 모두 완료 |

## 네비게이션

### Navbar
- "실무" 메가 드롭다운 뒤, "커리큘럼" 앞에 "프로젝트" 메가 드롭다운 배치
- 4개 섹션: 기초, 심화, 웹, Spring

### 라우팅
```
/projects        → ProjectHub (허브 페이지)
/projects/01~08  → ProjectLesson01~08 (개별 프로젝트)
```

## 각 프로젝트 페이지 구조

1. page-header (breadcrumb + 제목 + 설명)
2. 프로젝트 정보 카드 (선수과목, 도구, 난이도, 기능 목록)
3. 본문 7~8 섹션 (h2/h3, code-block, callout, table, exercise-box)
4. 완료 버튼 (`completeLesson('PJxx')`)
5. lesson-nav (이전/다음 프로젝트)
