# JavaMaster - Java 학습 플랫폼 프로젝트 계획서

## 프로젝트 개요
- **프로젝트명**: JavaMaster (java-study)
- **도메인**: java-study.dreamitbiz.com
- **GitHub**: https://github.com/aebonlee/java-study
- **기술 스택**: React 19 + Vite 7 + Supabase
- **배포**: GitHub Pages

## 학습 커리큘럼 (3개 과정, 43개 레슨)

### Java 기초 (Chapter 01-04)
| Ch | 제목 | 주요 내용 |
|----|------|----------|
| 01 | Java 소개 및 환경설정 | JDK/JRE/JVM, Hello World, IDE |
| 02 | 변수와 자료형 | 8가지 기본형, 형변환, final, var |
| 03 | 연산자와 제어문 | if/switch, for/while, break/continue |
| 04 | 배열과 문자열 | 배열, Arrays, String, StringBuilder |

### Java 객체지향 (Chapter 05-08)
| Ch | 제목 | 주요 내용 |
|----|------|----------|
| 05 | 클래스와 객체 | 생성자, 접근제어자, static, 캡슐화 |
| 06 | 상속과 다형성 | extends, Override, 업/다운캐스팅 |
| 07 | 인터페이스와 추상클래스 | abstract, interface, default method |
| 08 | 예외처리와 컬렉션 | try-catch, List, Set, Map |

### Java 고급 (Chapter 09-12)
| Ch | 제목 | 주요 내용 |
|----|------|----------|
| 09 | 제네릭과 열거형 | Generic, Wildcard, enum |
| 10 | 람다와 스트림 | Lambda, Stream API, Optional |
| 11 | 멀티스레드 | Thread, synchronized, CompletableFuture |
| 12 | 파일 I/O | NIO.2, Serialization, HttpClient |

### Java 기초~고급 통합 (Chapter 13-17)
| Ch | 제목 | 주요 내용 |
|----|------|----------|
| 13 | 서블릿 기초 | HttpServlet, Session, Cookie, Filter |
| 14 | JSP와 MVC | JSP, EL, JSTL, MVC 패턴 |
| 15 | Spring Framework | IoC, DI, AOP, Bean |
| 16 | Spring Boot와 REST API | @RestController, REST 설계, 예외처리 |
| 17 | Spring MVC와 데이터 접근 | Thymeleaf, JPA, MyBatis, @Transactional |

### Course 2: 서블릿 과정 (10개 레슨)
| ID | 제목 | 주요 내용 |
|----|------|----------|
| S01 | 서블릿 개요와 환경설정 | 웹 역사, 서블릿 컨테이너, Tomcat 설치 |
| S02 | HTTP 프로토콜과 요청/응답 | HTTP 메서드, 헤더, 상태코드 |
| S03 | 서블릿 생명주기 | init, service, destroy, 스레드 |
| S04 | 폼 처리와 파라미터 | GET/POST, 한글 인코딩 |
| S05 | 세션과 쿠키 | HttpSession, Cookie, 로그인 구현 |
| S06 | 필터와 리스너 | Filter, Listener, 인코딩 필터 |
| S07 | JSP 기초와 EL/JSTL | JSP, EL 표현식, JSTL 태그 |
| S08 | MVC 패턴 구현 | Front Controller, DAO/VO |
| S09 | 파일 업로드와 DB 연동 | MultipartConfig, JDBC, CRUD |
| S10 | 미니 프로젝트: CRUD 게시판 | 게시판 풀스택 구현 |

### Course 3: 스프링 과정 (16개 레슨)
| ID | 제목 | 주요 내용 |
|----|------|----------|
| SP01 | Spring Framework 소개 | Spring 역사, 모듈, Maven/Gradle |
| SP02 | IoC와 DI | 제어의 역전, 의존성 주입 |
| SP03 | Spring Bean과 컨테이너 | Bean 등록, 스코프, 라이프사이클 |
| SP04 | AOP (관점지향 프로그래밍) | Advice, Pointcut, 트랜잭션 |
| SP05 | Spring MVC 기초 | DispatcherServlet, Controller |
| SP06 | 데이터 바인딩과 검증 | @ModelAttribute, Validation |
| SP07 | MyBatis 연동 | SqlSession, Mapper, 동적 SQL |
| SP08 | Spring Security 기초 | 인증/인가, Form Login |
| SP09 | Spring Boot 시작하기 | Auto Configuration, Starter |
| SP10 | REST API 설계와 구현 | @RestController, ResponseEntity |
| SP11 | Spring Data JPA | Entity, Repository, 쿼리 메서드 |
| SP12 | 예외처리와 응답 표준화 | @ExceptionHandler, ErrorResponse |
| SP13 | Spring Security + JWT | JWT, 토큰 인증, CORS |
| SP14 | 테스트 (JUnit5, MockMvc) | 단위/통합 테스트 |
| SP15 | Swagger/OpenAPI 문서화 | API 문서 자동생성 |
| SP16 | 배포 (Docker, CI/CD) | Dockerfile, GitHub Actions |

## 기능 목록
- [x] 43개 학습 레슨 (Java 17 + 서블릿 10 + 스프링 16)
- [x] 학습 진도 추적 (localStorage)
- [x] 다크 모드
- [x] 반응형 디자인
- [x] OG 메타 태그 (카카오/SNS 공유)
- [x] Supabase 연동 준비
- [x] 퀴즈 센터 (4단계 × 10문제, 타이머, 셔플)
- [x] 도장깨기 (24개 배지, 4등급)
- [x] 마이페이지 (통계, 수료증, 성적표)
- [x] 이용 가이드 (10개 가이드, FAQ)
- [x] Navbar 진도 원형 그래프
- [x] 배지 획득 실시간 알림 팝업
- [x] 로그인 시스템 (Google/Kakao OAuth)
- [x] 세션 관리 (30분 자동 만료, 경고 배너)
- [x] OG 이미지 자동 생성 (sharp 스크립트)
- [x] 타이틀 디자인 (PyMaster 동일 텍스트 로고)
- [x] 서블릿 과정 (10개 레슨, 전용 허브 페이지)
- [x] 스프링 과정 (16개 레슨, 전용 허브 페이지)
- [x] Java 코드 실행기 (Piston API, react-simple-code-editor)
- [x] 메가 드롭다운 네비게이션 (자바학습하기 3섹션 + 스프링 2섹션)

## 디자인 시스템
- **Primary**: #5382A1 (Java Blue)
- **Accent**: #E76F00 (Java Orange) - 버튼, 로고에만 사용
- **배경**: 다크블루 그라데이션 (주황색 제외)
- **폰트**: Noto Sans KR + JetBrains Mono
- **아이콘**: Font Awesome 6

## Supabase 설정
- 테이블 접두사: `javamaster_`
- SQL 스크립트: `/supabase-setup.sql`
