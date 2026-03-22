import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson16() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 16</span>
          </div>
          <h1>Chapter 16. Spring Boot와 REST API</h1>
          <p>Spring Boot로 REST API를 빠르게 구축하는 방법을 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. Spring Boot란?</h2>
          <p>Spring Boot는 Spring 기반 애플리케이션을 <strong>최소한의 설정</strong>으로 빠르게 만들 수 있게 해주는 프레임워크입니다.</p>
          <ul>
            <li><strong>자동 설정</strong> (Auto Configuration) - 의존성에 따라 자동으로 설정</li>
            <li><strong>내장 서버</strong> - Tomcat 내장, 별도 설치 불필요</li>
            <li><strong>스타터 의존성</strong> - spring-boot-starter-* 로 간편하게 추가</li>
            <li><strong>프로덕션 준비</strong> - 모니터링, 헬스 체크 기본 제공</li>
          </ul>

          <h2>2. 프로젝트 생성</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> build.gradle</span></div>
            <pre><code>{`plugins {
    id 'java'
    id 'org.springframework.boot' version '3.2.0'
    id 'io.spring.dependency-management' version '1.1.4'
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    runtimeOnly 'com.h2database:h2'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}`}</code></pre>
          </div>

          <h2>3. REST API 구축</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Application.java</span></div>
            <pre><code>{`@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserController.java</span></div>
            <pre><code>{`@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // GET /api/users
    @GetMapping
    public List<UserDto> getAll() {
        return userService.findAll();
    }

    // GET /api/users/1
    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getById(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // POST /api/users
    @PostMapping
    public ResponseEntity<UserDto> create(@RequestBody @Valid CreateUserRequest req) {
        UserDto created = userService.create(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // PUT /api/users/1
    @PutMapping("/{id}")
    public ResponseEntity<UserDto> update(@PathVariable Long id,
                                          @RequestBody @Valid UpdateUserRequest req) {
        return ResponseEntity.ok(userService.update(id, req));
    }

    // DELETE /api/users/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // GET /api/users?name=홍&page=0&size=10
    @GetMapping(params = "name")
    public Page<UserDto> search(@RequestParam String name, Pageable pageable) {
        return userService.searchByName(name, pageable);
    }
}`}</code></pre>
          </div>

          <h2>4. REST API 설계 원칙</h2>
          <table>
            <thead><tr><th>HTTP 메서드</th><th>URI</th><th>동작</th><th>응답 코드</th></tr></thead>
            <tbody>
              <tr><td>GET</td><td>/api/users</td><td>전체 조회</td><td>200 OK</td></tr>
              <tr><td>GET</td><td>/api/users/1</td><td>단건 조회</td><td>200 OK / 404</td></tr>
              <tr><td>POST</td><td>/api/users</td><td>생성</td><td>201 Created</td></tr>
              <tr><td>PUT</td><td>/api/users/1</td><td>수정</td><td>200 OK</td></tr>
              <tr><td>DELETE</td><td>/api/users/1</td><td>삭제</td><td>204 No Content</td></tr>
            </tbody>
          </table>

          <h2>5. 설정 파일</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> application.yml</span></div>
            <pre><code>{`server:
  port: 8080

spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
  h2:
    console:
      enabled: true`}</code></pre>
          </div>

          <h2>6. 예외 처리</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> GlobalExceptionHandler.java</span></div>
            <pre><code>{`@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(EntityNotFoundException e) {
        ErrorResponse error = new ErrorResponse("NOT_FOUND", e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException e) {
        String message = e.getBindingResult().getFieldErrors().stream()
            .map(fe -> fe.getField() + ": " + fe.getDefaultMessage())
            .collect(Collectors.joining(", "));
        return ResponseEntity.badRequest()
            .body(new ErrorResponse("VALIDATION_ERROR", message));
    }
}

record ErrorResponse(String code, String message) {}`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>Spring Boot로 TODO 목록 REST API(CRUD)를 구현하세요.</li>
              <li>@Valid를 사용하여 입력값 검증을 추가하세요.</li>
              <li>@ControllerAdvice로 전역 예외 처리를 구현하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('16') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('16')}>
              {isLessonCompleted('16') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/15"><i className="fas fa-arrow-left"></i> 이전: Spring Framework</Link>
            <Link to="/java-learning/17">다음: Spring MVC와 데이터 접근 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
