# 실무 Java 과정 가이드

## 개요
- **과정명**: 실무 Java
- **레슨 수**: 10개 (PR01~PR10)
- **레벨**: 4개
- **퀴즈**: 1개 (10문제, 12분, 합격 70점)
- **배지**: 6개 (Bronze 1, Silver 3, Gold 2)
- **수료증**: 1개 (실무 수료증)

## 레슨 구성

### Level 1: 개발 환경과 도구 (practical-tools)
| ID | 제목 | 핵심 내용 | 난이도 |
|----|------|-----------|--------|
| PR01 | IntelliJ IDEA 완벽 가이드 | 설치, 프로젝트 생성, 디버깅, 단축키, 플러그인 | beginner |
| PR02 | Git과 GitHub 버전 관리 | git 명령어, 브랜치, merge/rebase, GitHub PR, 협업 | beginner |
| PR03 | Maven과 Gradle 빌드 도구 | pom.xml/build.gradle, 의존성, 라이프사이클, 멀티모듈 | intermediate |

### Level 2: 데이터와 SQL (practical-data)
| ID | 제목 | 핵심 내용 | 난이도 |
|----|------|-----------|--------|
| PR04 | SQL 기초 | DDL/DML, JOIN 5종, 서브쿼리, 인덱스, 제약조건 | beginner |
| PR05 | JDBC 심화와 트랜잭션 | ACID, 격리수준, HikariCP, DAO/Repository 패턴 | intermediate |
| PR06 | JSON 처리 (Jackson, Gson) | ObjectMapper, 어노테이션, DTO 변환, REST 연동 | intermediate |

### Level 3: 코드 품질과 실무 기법 (practical-quality)
| ID | 제목 | 핵심 내용 | 난이도 |
|----|------|-----------|--------|
| PR07 | 클린 코드와 리팩토링 | 네이밍, SOLID 5원칙, 리팩토링 기법, 코드 스멜 | intermediate |
| PR08 | 로깅과 디버깅 | SLF4J, Logback, 로그 레벨/패턴, MDC, 디버깅 전략 | intermediate |

### Level 4: 인프라와 날짜/시간 (practical-infra)
| ID | 제목 | 핵심 내용 | 난이도 |
|----|------|-----------|--------|
| PR09 | Java 날짜/시간 API | LocalDate/Time, Duration, Period, DateTimeFormatter | intermediate |
| PR10 | Linux와 서버 환경 | Linux 명령어, Tomcat/WAS, JAR/WAR, 환경변수, 클라우드 | advanced |

## 라우팅
| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/practical` | PracticalLearning | 허브 페이지 |
| `/practical/01` ~ `/practical/10` | PracticalLesson01~10 | 개별 레슨 |

## 데이터 파일
- `src/data/practicalLessons.js`
  - `practicalLevels`: 4개 레벨 배열
  - `allPracticalLessons`: 플랫 배열
  - `getPracticalLessonById(id)`: ID로 레슨 검색
  - `getAdjacentPracticalLessons(id)`: 이전/다음 레슨

## 레슨 ID 패턴
- 형식: `PR01` ~ `PR10` (접두사 `PR`)
- 라우트에서는 숫자만: `/practical/01` ~ `/practical/10`
- ProgressContext에서 ID 패턴: `/^PR\d{2}$/`

## 네비게이션 (메가 드롭다운)
```
[자바학습하기▼] [서블릿▼] [스프링▼] [실무▼] 커리큘럼 퀴즈 ...

실무 메가 드롭다운:
┌──────────┬──────────┬──────────┬──────────┐
│ 도구      │ 데이터    │ 품질      │ 인프라    │
│ #8B5CF6  │ #EC4899  │ #F59E0B  │ #06B6D4  │
├──────────┼──────────┼──────────┼──────────┤
│ IntelliJ │ SQL 기초  │ 클린코드  │ 날짜/시간 │
│ Git      │ JDBC심화  │ 로깅     │ Linux    │
│ Maven    │ JSON     │          │          │
└──────────┴──────────┴──────────┴──────────┘
```

## 배지
| ID | 이름 | 등급 | 조건 |
|----|------|------|------|
| practical-starter | 실무 입문 | Bronze | PR01 완료 |
| practical-tools-master | 도구 마스터 | Silver | practical-tools 레벨 완료 |
| practical-data-master | 데이터 마스터 | Silver | practical-data 레벨 완료 |
| practical-quiz | 실무 퀴즈 통과 | Silver | practical 퀴즈 70점+ |
| practical-quality-master | 품질 마스터 | Gold | practical-quality 레벨 완료 |
| practical-all-master | 실무 마스터 | Gold | 4레벨 모두 완료 |

## 수료증
- **실무 수료증**: 4레벨 완료 + 실무 퀴즈 70점 이상

## 전체 플랫폼 통계 (v3.6.0)
- 콘텐츠: 61개 (53레슨 + 8프로젝트)
- 과정: 5개 (Java, 서블릿, 스프링, 실무, 프로젝트)
- 퀴즈: 7개 (70문제)
- 배지: 44개 (브론즈9, 실버13, 골드17, 플래티넘5)
- 수료증: 7종
