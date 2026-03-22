import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson10() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/spring">스프링 과정</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Lesson 10</span>
          </div>
          <h1>Lesson 10. REST API 설계와 구현</h1>
          <p>RESTful API의 원칙을 이해하고 Spring Boot로 CRUD API를 구현합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. REST 아키텍처 원칙</h2>
          <p>REST(Representational State Transfer)는 Roy Fielding이 2000년 박사 논문에서 정의한 아키텍처 스타일입니다.</p>

          <table className="info-table">
            <thead><tr><th>제약 조건</th><th>설명</th></tr></thead>
            <tbody>
              <tr><td><strong>Client-Server</strong></td><td>클라이언트와 서버를 분리하여 독립적으로 진화 가능</td></tr>
              <tr><td><strong>Stateless</strong></td><td>서버는 클라이언트 상태를 저장하지 않음. 각 요청은 독립적</td></tr>
              <tr><td><strong>Cacheable</strong></td><td>응답은 캐시 가능 여부를 명시해야 함</td></tr>
              <tr><td><strong>Uniform Interface</strong></td><td>일관된 인터페이스로 리소스를 식별하고 조작</td></tr>
              <tr><td><strong>Layered System</strong></td><td>계층적 구조를 통해 로드밸런싱, 보안 등을 적용</td></tr>
              <tr><td><strong>Code on Demand (선택)</strong></td><td>필요시 서버에서 클라이언트로 코드를 전송하여 실행</td></tr>
            </tbody>
          </table>

          <h2>2. RESTful URL 설계</h2>
          <p>리소스 중심으로 URL을 설계하며, 동사 대신 <strong>명사</strong>를 사용합니다.</p>

          <table className="info-table">
            <thead><tr><th>HTTP 메서드</th><th>URL</th><th>동작</th><th>응답 코드</th></tr></thead>
            <tbody>
              <tr><td><strong>GET</strong></td><td>/api/posts</td><td>게시글 목록 조회</td><td>200 OK</td></tr>
              <tr><td><strong>GET</strong></td><td>/api/posts/{'{id}'}</td><td>게시글 단건 조회</td><td>200 OK</td></tr>
              <tr><td><strong>POST</strong></td><td>/api/posts</td><td>게시글 생성</td><td>201 Created</td></tr>
              <tr><td><strong>PUT</strong></td><td>/api/posts/{'{id}'}</td><td>게시글 전체 수정</td><td>200 OK</td></tr>
              <tr><td><strong>PATCH</strong></td><td>/api/posts/{'{id}'}</td><td>게시글 부분 수정</td><td>200 OK</td></tr>
              <tr><td><strong>DELETE</strong></td><td>/api/posts/{'{id}'}</td><td>게시글 삭제</td><td>204 No Content</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>URL 설계 시 복수형 명사를 사용하세요: /users (O), /user (X). 계층 관계는 /users/{'{userId}'}/posts처럼 표현합니다. 동사 사용은 피하세요: /getUser (X), /users/{'{id}'} (O).</p>
          </div>

          <h2>3. @RestController vs @Controller</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 비교 예제</span></div>
            <pre><code>{`// @Controller: View(HTML)를 반환 - MVC 패턴
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
}`}</code></pre>
          </div>

          <h2>4. HTTP 메서드 매핑</h2>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PostController.java</span></div>
            <pre><code>{`@RestController
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
}`}</code></pre>
          </div>

          <h2>5. @RequestBody와 @ResponseBody</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> DTO 클래스</span></div>
            <pre><code>{`// 요청 DTO
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
}`}</code></pre>
          </div>

          <h2>6. ResponseEntity 활용</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ResponseEntity 다양한 활용법</span></div>
            <pre><code>{`@RestController
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
}`}</code></pre>
          </div>

          <h2>7. 실전: 게시판 REST API CRUD</h2>

          <JavaCodeRunner defaultCode={`// REST API의 DTO 패턴 이해하기
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
}`} title="REST API DTO 패턴 실습" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>도서(Book) 관리 REST API의 URL을 설계하세요. (CRUD + 검색)</li>
              <li>@PathVariable, @RequestParam, @RequestBody의 차이를 정리하고, 각각 활용 예제를 작성하세요.</li>
              <li>ResponseEntity를 사용하여 성공/실패에 따라 다른 HTTP 상태 코드를 반환하는 API를 구현하세요.</li>
              <li>POST와 PUT의 차이를 설명하고, 각각 어떤 상황에서 사용하는지 예를 들어 보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP10') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP10')}>
              {isLessonCompleted('SP10') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/09"><i className="fas fa-arrow-left"></i> 이전: Spring Boot 시작하기</Link>
            <Link to="/spring/11">다음: Spring Data JPA <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
