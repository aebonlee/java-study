import{u as n,r as a,j as e,L as s}from"./index-DE-ywqhK.js";function l(){const{completeLesson:i,isLessonCompleted:r}=n();return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 16"})]}),e.jsx("h1",{children:"Chapter 16. Spring Boot와 REST API"}),e.jsx("p",{children:"Spring Boot로 REST API를 빠르게 구축하는 방법을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. Spring Boot란?"}),e.jsxs("p",{children:["Spring Boot는 Spring 기반 애플리케이션을 ",e.jsx("strong",{children:"최소한의 설정"}),"으로 빠르게 만들 수 있게 해주는 프레임워크입니다."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"자동 설정"})," (Auto Configuration) - 의존성에 따라 자동으로 설정"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"내장 서버"})," - Tomcat 내장, 별도 설치 불필요"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"스타터 의존성"})," - spring-boot-starter-* 로 간편하게 추가"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"프로덕션 준비"})," - 모니터링, 헬스 체크 기본 제공"]})]}),e.jsx("h2",{children:"2. 프로젝트 생성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle"]})}),e.jsx("pre",{children:e.jsx("code",{children:`plugins {
    id 'java'
    id 'org.springframework.boot' version '3.2.0'
    id 'io.spring.dependency-management' version '1.1.4'
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    runtimeOnly 'com.h2database:h2'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}`})})]}),e.jsx("h2",{children:"3. REST API 구축"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Application.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@RestController
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
}`})})]}),e.jsx("h2",{children:"4. REST API 설계 원칙"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"HTTP 메서드"}),e.jsx("th",{children:"URI"}),e.jsx("th",{children:"동작"}),e.jsx("th",{children:"응답 코드"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"GET"}),e.jsx("td",{children:"/api/users"}),e.jsx("td",{children:"전체 조회"}),e.jsx("td",{children:"200 OK"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"GET"}),e.jsx("td",{children:"/api/users/1"}),e.jsx("td",{children:"단건 조회"}),e.jsx("td",{children:"200 OK / 404"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"POST"}),e.jsx("td",{children:"/api/users"}),e.jsx("td",{children:"생성"}),e.jsx("td",{children:"201 Created"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"PUT"}),e.jsx("td",{children:"/api/users/1"}),e.jsx("td",{children:"수정"}),e.jsx("td",{children:"200 OK"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"DELETE"}),e.jsx("td",{children:"/api/users/1"}),e.jsx("td",{children:"삭제"}),e.jsx("td",{children:"204 No Content"})]})]})]}),e.jsx("h2",{children:"5. 설정 파일"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," application.yml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`server:
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
      enabled: true`})})]}),e.jsx("h2",{children:"6. 예외 처리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," GlobalExceptionHandler.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@RestControllerAdvice
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

record ErrorResponse(String code, String message) {}`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Spring Boot로 TODO 목록 REST API(CRUD)를 구현하세요."}),e.jsx("li",{children:"@Valid를 사용하여 입력값 검증을 추가하세요."}),e.jsx("li",{children:"@ControllerAdvice로 전역 예외 처리를 구현하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${r("16")?"btn-primary":"btn-accent"}`,onClick:()=>i("16"),children:r("16")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/15",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Spring Framework"]}),e.jsxs(s,{to:"/java-learning/17",children:["다음: Spring MVC와 데이터 접근 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
