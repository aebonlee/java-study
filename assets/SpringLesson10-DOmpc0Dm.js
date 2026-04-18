import{u as r,r as n,j as e,L as t}from"./index-67ilme4E.js";import{J as l}from"./JavaCodeRunner-BJJGdSVR.js";function d(){const{completeLesson:i,isLessonCompleted:s}=r();return n.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 10"})]}),e.jsx("h1",{children:"Lesson 10. REST API 설계와 구현"}),e.jsx("p",{children:"RESTful API의 원칙을 이해하고 Spring Boot로 CRUD API를 구현합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. REST 아키텍처 원칙"}),e.jsx("p",{children:"REST(Representational State Transfer)는 Roy Fielding이 2000년 박사 논문에서 정의한 아키텍처 스타일입니다."}),e.jsxs("table",{className:"info-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"제약 조건"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Client-Server"})}),e.jsx("td",{children:"클라이언트와 서버를 분리하여 독립적으로 진화 가능"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Stateless"})}),e.jsx("td",{children:"서버는 클라이언트 상태를 저장하지 않음. 각 요청은 독립적"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Cacheable"})}),e.jsx("td",{children:"응답은 캐시 가능 여부를 명시해야 함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Uniform Interface"})}),e.jsx("td",{children:"일관된 인터페이스로 리소스를 식별하고 조작"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Layered System"})}),e.jsx("td",{children:"계층적 구조를 통해 로드밸런싱, 보안 등을 적용"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Code on Demand (선택)"})}),e.jsx("td",{children:"필요시 서버에서 클라이언트로 코드를 전송하여 실행"})]})]})]}),e.jsx("h2",{children:"2. RESTful URL 설계"}),e.jsxs("p",{children:["리소스 중심으로 URL을 설계하며, 동사 대신 ",e.jsx("strong",{children:"명사"}),"를 사용합니다."]}),e.jsxs("table",{className:"info-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"HTTP 메서드"}),e.jsx("th",{children:"URL"}),e.jsx("th",{children:"동작"}),e.jsx("th",{children:"응답 코드"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GET"})}),e.jsx("td",{children:"/api/posts"}),e.jsx("td",{children:"게시글 목록 조회"}),e.jsx("td",{children:"200 OK"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GET"})}),e.jsxs("td",{children:["/api/posts/","{id}"]}),e.jsx("td",{children:"게시글 단건 조회"}),e.jsx("td",{children:"200 OK"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"POST"})}),e.jsx("td",{children:"/api/posts"}),e.jsx("td",{children:"게시글 생성"}),e.jsx("td",{children:"201 Created"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"PUT"})}),e.jsxs("td",{children:["/api/posts/","{id}"]}),e.jsx("td",{children:"게시글 전체 수정"}),e.jsx("td",{children:"200 OK"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"PATCH"})}),e.jsxs("td",{children:["/api/posts/","{id}"]}),e.jsx("td",{children:"게시글 부분 수정"}),e.jsx("td",{children:"200 OK"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DELETE"})}),e.jsxs("td",{children:["/api/posts/","{id}"]}),e.jsx("td",{children:"게시글 삭제"}),e.jsx("td",{children:"204 No Content"})]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsxs("p",{children:["URL 설계 시 복수형 명사를 사용하세요: /users (O), /user (X). 계층 관계는 /users/","{userId}","/posts처럼 표현합니다. 동사 사용은 피하세요: /getUser (X), /users/","{id}"," (O)."]})]}),e.jsx("h2",{children:"3. @RestController vs @Controller"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 비교 예제"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// @Controller: View(HTML)를 반환 - MVC 패턴
@Controller
public class ViewController {
    @GetMapping("/home")
    public String home(Model model) {
        model.addAttribute("name", "홍길동");
        return "home"; // templates/home.html 렌더링
    }
}

// @RestController: 데이터(JSON)를 반환 - REST API
// = @Controller + @ResponseBody
@RestController
@RequestMapping("/api")
public class ApiController {
    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.findAll(); // JSON으로 직렬화
    }
}`})})]}),e.jsx("h2",{children:"4. HTTP 메서드 매핑"}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PostController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    // 목록 조회: GET /api/posts?page=0&size=10
    @GetMapping
    public List<PostDto> getAllPosts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return postService.findAll(page, size);
    }

    // 단건 조회: GET /api/posts/1
    @GetMapping("/{id}")
    public PostDto getPost(@PathVariable Long id) {
        return postService.findById(id);
    }

    // 생성: POST /api/posts
    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody CreatePostRequest request) {
        PostDto created = postService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    // 수정: PUT /api/posts/1
    @PutMapping("/{id}")
    public PostDto updatePost(@PathVariable Long id,
                              @RequestBody UpdatePostRequest request) {
        return postService.update(id, request);
    }

    // 삭제: DELETE /api/posts/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.noContent().build();
    }
}`})})]}),e.jsx("h2",{children:"5. @RequestBody와 @ResponseBody"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DTO 클래스"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 요청 DTO
public class CreatePostRequest {
    private String title;
    private String content;
    private String author;

    // 기본 생성자 필수 (Jackson 역직렬화용)
    public CreatePostRequest() {}

    // Getter, Setter
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
}

// 응답 DTO
public class PostDto {
    private Long id;
    private String title;
    private String content;
    private String author;
    private LocalDateTime createdAt;

    // @ResponseBody에 의해 자동으로 JSON 직렬화됨
    // {"id":1, "title":"제목", "content":"내용", ...}
}`})})]}),e.jsx("h2",{children:"6. ResponseEntity 활용"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ResponseEntity 다양한 활용법"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@RestController
@RequestMapping("/api/users")
public class UserController {

    // 상태 코드 + 헤더 + 본문 제어
    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody CreateUserRequest req) {
        UserDto user = userService.create(req);
        URI location = URI.create("/api/users/" + user.getId());

        return ResponseEntity
                .created(location)                    // 201 Created
                .header("X-Custom-Header", "value")   // 커스텀 헤더
                .body(user);                          // 응답 본문
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUser(@PathVariable Long id) {
        return userService.findById(id)
                .map(ResponseEntity::ok)              // 200 OK
                .orElse(ResponseEntity.notFound().build()); // 404
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();    // 204 No Content
    }
}`})})]}),e.jsx("h2",{children:"7. 실전: 게시판 REST API CRUD"}),e.jsx(l,{defaultCode:`// REST API의 DTO 패턴 이해하기
// Spring Boot 없이 DTO 변환 개념을 실습합니다.

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Main {

    // Entity (DB 테이블과 매핑)
    static class Post {
        private Long id;
        private String title;
        private String content;
        private String author;
        private LocalDateTime createdAt;

        public Post(Long id, String title, String content, String author) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.author = author;
            this.createdAt = LocalDateTime.now();
        }

        public Long getId() { return id; }
        public String getTitle() { return title; }
        public String getContent() { return content; }
        public String getAuthor() { return author; }
        public LocalDateTime getCreatedAt() { return createdAt; }
    }

    // Response DTO (클라이언트에 반환할 데이터)
    static class PostResponse {
        private Long id;
        private String title;
        private String author;

        // Entity -> DTO 변환 메서드
        public static PostResponse from(Post post) {
            PostResponse dto = new PostResponse();
            dto.id = post.getId();
            dto.title = post.getTitle();
            dto.author = post.getAuthor();
            return dto;
        }

        @Override
        public String toString() {
            return String.format("{id: %d, title: \\"%s\\", author: \\"%s\\"}", id, title, author);
        }
    }

    public static void main(String[] args) {
        // 가상의 데이터베이스
        List<Post> posts = new ArrayList<>();
        posts.add(new Post(1L, "Spring Boot 시작하기", "Spring Boot 내용...", "홍길동"));
        posts.add(new Post(2L, "REST API 설계", "REST API 내용...", "김영희"));
        posts.add(new Post(3L, "JPA 활용법", "JPA 내용...", "이철수"));

        // Entity -> DTO 변환 (민감한 정보 제외)
        System.out.println("=== GET /api/posts 응답 ===");
        List<PostResponse> response = new ArrayList<>();
        for (Post post : posts) {
            response.add(PostResponse.from(post));
        }
        System.out.println(response);

        System.out.println("\\n=== DTO를 사용하는 이유 ===");
        System.out.println("1. 필요한 데이터만 노출 (보안)");
        System.out.println("2. API 스펙과 DB 스키마 분리");
        System.out.println("3. 계층 간 의존성 최소화");
    }
}`,title:"REST API DTO 패턴 실습"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"도서(Book) 관리 REST API의 URL을 설계하세요. (CRUD + 검색)"}),e.jsx("li",{children:"@PathVariable, @RequestParam, @RequestBody의 차이를 정리하고, 각각 활용 예제를 작성하세요."}),e.jsx("li",{children:"ResponseEntity를 사용하여 성공/실패에 따라 다른 HTTP 상태 코드를 반환하는 API를 구현하세요."}),e.jsx("li",{children:"POST와 PUT의 차이를 설명하고, 각각 어떤 상황에서 사용하는지 예를 들어 보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("SP10")?"btn-primary":"btn-accent"}`,onClick:()=>i("SP10"),children:s("SP10")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/spring/09",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Spring Boot 시작하기"]}),e.jsxs(t,{to:"/spring/11",children:["다음: Spring Data JPA ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
