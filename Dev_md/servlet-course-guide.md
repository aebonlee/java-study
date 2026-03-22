# 서블릿 과정 가이드

## 과정 개요
- **과정명**: 서블릿 (Servlet)
- **레슨 수**: 10개 (S01~S10)
- **레벨**: 기초 (S01-S05), 심화 (S06-S10)
- **허브 페이지**: `/servlet` (ServletLearning.jsx)
- **데이터 파일**: `src/data/servletLessons.js`

## 레슨 목록

### 기초 (servlet-basic)
| ID | 제목 | 핵심 내용 | 경로 |
|----|------|----------|------|
| S01 | 서블릿 개요와 환경설정 | 웹 역사, 서블릿 컨테이너, Tomcat 설치, 첫 서블릿 | `/servlet/01` |
| S02 | HTTP 프로토콜과 요청/응답 | HTTP 메서드, 헤더, 상태코드, HttpServletRequest/Response | `/servlet/02` |
| S03 | 서블릿 생명주기 | init, service, destroy, 스레드, @WebServlet vs web.xml | `/servlet/03` |
| S04 | 폼 처리와 파라미터 | GET/POST, 한글 인코딩, 파라미터 검증 | `/servlet/04` |
| S05 | 세션과 쿠키 | HttpSession, Cookie, 로그인/로그아웃 구현 | `/servlet/05` |

### 심화 (servlet-advanced)
| ID | 제목 | 핵심 내용 | 경로 |
|----|------|----------|------|
| S06 | 필터와 리스너 | Filter 체인, Listener, 인코딩 필터, 세션 카운터 | `/servlet/06` |
| S07 | JSP 기초와 EL/JSTL | JSP 문법, EL 표현식, JSTL 태그, JSP-Servlet 연동 | `/servlet/07` |
| S08 | MVC 패턴 구현 | Front Controller, VO/DAO, Model 1 vs Model 2, PRG 패턴 | `/servlet/08` |
| S09 | 파일 업로드와 DB 연동 | MultipartConfig, JDBC CRUD, Connection Pool, SQL Injection 방지 | `/servlet/09` |
| S10 | 미니 프로젝트: CRUD 게시판 | 게시판 풀스택 구현, 페이징, 배포 체크리스트 | `/servlet/10` |

## 레슨 구조
각 서블릿 레슨은 다음 구조를 따릅니다:

```
1. 페이지 헤더 (breadcrumb: 홈 > 서블릿 과정 > Lesson XX)
2. 개념 설명 (h2/h3 섹션, 비교 표, 다이어그램)
3. 코드 예제 (code-block + file-name 헤더)
4. Tomcat 실습 안내 (callout-info)
5. JavaCodeRunner 실습 (순수 Java 코드 실행)
6. 연습문제 (exercise-box, 4개)
7. 학습 완료 버튼 (lessonId: S01~S10)
8. 이전/다음 네비게이션
```

## 진도 추적
- 레슨 ID: `S01` ~ `S10`
- `ProgressContext.getServletProgress()` 함수로 진도율 계산
- 허브 페이지에서 과정 전체 진도 바 표시
- 레벨별 완료 여부: `isLevelCompleted('servlet-basic')`, `isLevelCompleted('servlet-advanced')`

## 데이터 구조 (servletLessons.js)
```javascript
export const servletLevels = [
  {
    id: 'servlet-basic',
    title: '서블릿 기초',
    lessons: [
      { id: 'S01', title: '서블릿 개요와 환경설정', path: '/servlet/01' },
      // ...S02~S05
    ]
  },
  {
    id: 'servlet-advanced',
    title: '서블릿 심화',
    lessons: [
      { id: 'S06', title: '필터와 리스너', path: '/servlet/06' },
      // ...S07~S10
    ]
  }
]

// 유틸리티 함수
export function getServletLessonById(id) { ... }
export function getAdjacentServletLessons(id) { ... }
```

## 학습 권장 순서
1. Java 학습하기 과정 (특히 Ch.01-08 기초/OOP) 먼저 완료
2. S01~S05 기초 순서대로 학습
3. S06~S10 심화 순서대로 학습
4. S10 미니 프로젝트로 종합 실습
5. 스프링 과정으로 이동
