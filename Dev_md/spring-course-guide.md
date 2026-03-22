# 스프링 과정 가이드

## 과정 개요
- **과정명**: 스프링 (Spring)
- **레슨 수**: 16개 (SP01~SP16)
- **레벨**: Framework (SP01-SP08), Boot (SP09-SP16)
- **허브 페이지**: `/spring` (SpringLearning.jsx)
- **데이터 파일**: `src/data/springLessons.js`

## 레슨 목록

### Spring Framework (spring-framework)
| ID | 제목 | 핵심 내용 | 경로 |
|----|------|----------|------|
| SP01 | Spring Framework 소개 | Spring 역사, 모듈, Maven/Gradle, 첫 프로젝트 | `/spring/01` |
| SP02 | IoC와 DI | 제어의 역전, 생성자/세터/필드 주입, @Autowired | `/spring/02` |
| SP03 | Spring Bean과 컨테이너 | Bean 등록, 스코프(singleton/prototype), 라이프사이클 | `/spring/03` |
| SP04 | AOP (관점지향 프로그래밍) | Advice 5종, Pointcut, @Transactional, Proxy 패턴 | `/spring/04` |
| SP05 | Spring MVC 기초 | DispatcherServlet, @Controller, @RequestMapping | `/spring/05` |
| SP06 | 데이터 바인딩과 검증 | @ModelAttribute, Bean Validation, BindingResult | `/spring/06` |
| SP07 | MyBatis 연동 | SqlSession, Mapper XML/인터페이스, 동적 SQL | `/spring/07` |
| SP08 | Spring Security 기초 | 인증/인가, Form Login, PasswordEncoder, CSRF | `/spring/08` |

### Spring Boot (spring-boot)
| ID | 제목 | 핵심 내용 | 경로 |
|----|------|----------|------|
| SP09 | Spring Boot 시작하기 | Auto Configuration, Starter, DevTools, Initializr | `/spring/09` |
| SP10 | REST API 설계와 구현 | @RestController, ResponseEntity, DTO 패턴 | `/spring/10` |
| SP11 | Spring Data JPA | Entity, Repository, 쿼리 메서드, Pageable | `/spring/11` |
| SP12 | 예외처리와 응답 표준화 | @ExceptionHandler, @ControllerAdvice, ApiResponse | `/spring/12` |
| SP13 | Spring Security + JWT | JWT 토큰, JwtTokenProvider, 인증 필터 | `/spring/13` |
| SP14 | 테스트 (JUnit5, MockMvc) | 단위/통합 테스트, Mockito, JaCoCo | `/spring/14` |
| SP15 | Swagger/OpenAPI 문서화 | SpringDoc, @Operation, Swagger UI | `/spring/15` |
| SP16 | 배포 (Docker, CI/CD) | Dockerfile, Docker Compose, GitHub Actions | `/spring/16` |

## 레슨 구조
각 스프링 레슨은 다음 구조를 따릅니다:

```
1. 페이지 헤더 (breadcrumb: 홈 > 스프링 과정 > Lesson XX)
2. 개념 설명 (h2/h3 섹션, 비교 표, 아키텍처 다이어그램)
3. 코드 예제 (code-block + file-name 헤더)
4. Spring 프로젝트 실습 안내 (callout-info: start.spring.io)
5. JavaCodeRunner 실습 (순수 Java 코드로 개념 시뮬레이션)
6. 연습문제 (exercise-box, 4~5개)
7. 학습 완료 버튼 (lessonId: SP01~SP16)
8. 이전/다음 네비게이션
```

## 진도 추적
- 레슨 ID: `SP01` ~ `SP16`
- `ProgressContext.getSpringProgress()` 함수로 진도율 계산
- 허브 페이지에서 과정 전체 진도 바 표시
- 레벨별 완료 여부: `isLevelCompleted('spring-framework')`, `isLevelCompleted('spring-boot')`

## 데이터 구조 (springLessons.js)
```javascript
export const springLevels = [
  {
    id: 'spring-framework',
    title: 'Spring Framework',
    lessons: [
      { id: 'SP01', title: 'Spring Framework 소개', path: '/spring/01' },
      // ...SP02~SP08
    ]
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot',
    lessons: [
      { id: 'SP09', title: 'Spring Boot 시작하기', path: '/spring/09' },
      // ...SP10~SP16
    ]
  }
]

// 유틸리티 함수
export function getSpringLessonById(id) { ... }
export function getAdjacentSpringLessons(id) { ... }
```

## JavaCodeRunner 활용
스프링 과정의 코드 실행기는 순수 Java로 개념을 시뮬레이션합니다:

| 레슨 | 실습 내용 |
|------|----------|
| SP01 | POJO와 DI 기본 개념 |
| SP02 | 인터페이스 기반 DI (MessageSender) |
| SP03 | Singleton vs Prototype 스코프 |
| SP04 | Proxy 패턴으로 AOP 시뮬레이션 |
| SP05 | MVC Controller 요청/응답 처리 |
| SP06 | Validation 개념 시뮬레이션 |
| SP07 | Mapper 인터페이스 패턴 |
| SP08 | 인증/인가 개념 시뮬레이션 |
| SP09 | Service/Controller 패턴 |
| SP10 | Entity -> DTO 변환 패턴 |
| SP11 | Repository 패턴 (CRUD) |
| SP12 | Custom Exception + ApiResponse |
| SP13 | JWT Base64 인코딩/디코딩 |
| SP14 | assertEquals/assertThrows |
| SP15 | OpenAPI 어노테이션 메타데이터 |
| SP16 | Docker 이미지 비교, CI/CD 파이프라인 |

## 학습 권장 순서
1. Java 학습하기 과정 완료 (특히 Ch.05-08 OOP, Ch.13-17 웹개발)
2. 서블릿 과정 완료 (HTTP, 서블릿, JSP 기초)
3. SP01~SP08 Spring Framework 순서대로 학습
4. SP09~SP16 Spring Boot 순서대로 학습
5. SP16에서 실제 배포까지 실습
