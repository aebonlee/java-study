# JavaMaster - Java 학습 플랫폼 프로젝트 계획서

## 프로젝트 개요
- **프로젝트명**: JavaMaster (java-study)
- **도메인**: java-study.dreamitbiz.com
- **GitHub**: https://github.com/aebonlee/java-study
- **기술 스택**: React 19 + Vite + Supabase
- **배포**: GitHub Pages

## 학습 커리큘럼 (17개 챕터)

### Step 1: 기초 (Chapter 01-04)
| Ch | 제목 | 주요 내용 |
|----|------|----------|
| 01 | Java 소개 및 환경설정 | JDK/JRE/JVM, Hello World, IDE |
| 02 | 변수와 자료형 | 8가지 기본형, 형변환, final, var |
| 03 | 연산자와 제어문 | if/switch, for/while, break/continue |
| 04 | 배열과 문자열 | 배열, Arrays, String, StringBuilder |

### Step 2: 객체지향 (Chapter 05-08)
| Ch | 제목 | 주요 내용 |
|----|------|----------|
| 05 | 클래스와 객체 | 생성자, 접근제어자, static, 캡슐화 |
| 06 | 상속과 다형성 | extends, Override, 업/다운캐스팅 |
| 07 | 인터페이스와 추상클래스 | abstract, interface, default method |
| 08 | 예외처리와 컬렉션 | try-catch, List, Set, Map |

### Step 3: 고급 Java (Chapter 09-12)
| Ch | 제목 | 주요 내용 |
|----|------|----------|
| 09 | 제네릭과 열거형 | Generic, Wildcard, enum |
| 10 | 람다와 스트림 | Lambda, Stream API, Optional |
| 11 | 멀티스레드 | Thread, synchronized, CompletableFuture |
| 12 | 파일 I/O | NIO.2, Serialization, HttpClient |

### Step 4: 웹 개발 (Chapter 13-17)
| Ch | 제목 | 주요 내용 |
|----|------|----------|
| 13 | 서블릿 기초 | HttpServlet, Session, Cookie, Filter |
| 14 | JSP와 MVC | JSP, EL, JSTL, MVC 패턴 |
| 15 | Spring Framework | IoC, DI, AOP, Bean |
| 16 | Spring Boot와 REST API | @RestController, REST 설계, 예외처리 |
| 17 | Spring MVC와 데이터 접근 | Thymeleaf, JPA, MyBatis, @Transactional |

## 기능 목록
- [x] 17개 학습 챕터 (실제 Java 코드 예제 포함)
- [x] 학습 진도 추적 (localStorage)
- [x] 다크 모드
- [x] 반응형 디자인
- [x] OG 메타 태그 (카카오/SNS 공유)
- [x] Supabase 연동 준비

## 디자인 시스템
- **Primary**: #5382A1 (Java Blue)
- **Accent**: #E76F00 (Java Orange)
- **폰트**: Noto Sans KR + JetBrains Mono
- **아이콘**: Font Awesome 6

## Supabase 설정
- 테이블 접두사: `javamaster_`
- SQL 스크립트: `/supabase-setup.sql`
