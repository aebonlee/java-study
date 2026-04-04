import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson05() {
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
            <span>Lesson 05</span>
          </div>
          <h1>Lesson 05. Spring MVC 기초</h1>
          <p>MVC 아키텍처의 동작 원리를 이해하고, Controller, 요청 매핑, 파라미터 처리를 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. MVC 아키텍처와 DispatcherServlet</h2>
          <p>
            Spring MVC는 <strong>DispatcherServlet</strong>을 중심으로 요청을 처리합니다.
            모든 HTTP 요청이 DispatcherServlet을 거쳐 적절한 컨트롤러로 전달됩니다.
          </p>

          <h3>DispatcherServlet 동작 흐름</h3>
          <ol>
            <li><strong>클라이언트 요청</strong> - 브라우저에서 HTTP 요청 전송</li>
            <li><strong>DispatcherServlet</strong> - 모든 요청을 받는 프론트 컨트롤러</li>
            <li><strong>HandlerMapping</strong> - 요청 URL에 맞는 Controller를 찾음</li>
            <li><strong>HandlerAdapter</strong> - Controller 메서드를 실행</li>
            <li><strong>Controller</strong> - 비즈니스 로직 처리, Model에 데이터 담기</li>
            <li><strong>ViewResolver</strong> - 논리적 뷰 이름을 실제 뷰로 변환</li>
            <li><strong>View</strong> - 최종 HTML 응답 렌더링</li>
          </ol>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> DispatcherServlet의 역할</div>
            <p>DispatcherServlet은 <strong>Front Controller 패턴</strong>을 구현한 것입니다.
            모든 요청의 진입점 역할을 하며, 요청 분배, 예외 처리, 뷰 렌더링 등을 중앙에서 관리합니다.
            Spring Boot에서는 자동으로 등록됩니다.</p>
          </div>

          <h2>2. @Controller와 @RequestMapping</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> HomeController.java</span></div>
            <pre><code>{`@Controller  // 이 클래스가 웹 컨트롤러임을 선언
@RequestMapping("/")  // 기본 URL 경로 매핑
public class HomeController {

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String home(Model model) {
        model.addAttribute("message", "Spring MVC에 오신 것을 환영합니다!");
        return "home";  // ViewResolver가 "home" → /WEB-INF/views/home.jsp
    }
}

// @RestController = @Controller + @ResponseBody
@RestController  // JSON 응답용 (REST API)
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        // 자동으로 JSON으로 변환됨
        return Map.of("message", "Hello Spring!");
    }
}`}</code></pre>
          </div>

          <h2>3. 요청 매핑 어노테이션</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ProductController.java</span></div>
            <pre><code>{`@RestController
@RequestMapping("/api/products")
public class ProductController {

    // GET 요청: 상품 목록 조회
    @GetMapping
    public List<Product> list() {
        return productService.findAll();
    }

    // GET 요청: 단건 조회 (경로 변수)
    @GetMapping("/{id}")
    public Product detail(@PathVariable Long id) {
        return productService.findById(id);
    }

    // POST 요청: 상품 생성
    @PostMapping
    public Product create(@RequestBody ProductDto dto) {
        return productService.create(dto);
    }

    // PUT 요청: 상품 수정
    @PutMapping("/{id}")
    public Product update(@PathVariable Long id,
                          @RequestBody ProductDto dto) {
        return productService.update(id, dto);
    }

    // DELETE 요청: 상품 삭제
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        productService.delete(id);
    }

    // PATCH 요청: 부분 수정
    @PatchMapping("/{id}/price")
    public Product updatePrice(@PathVariable Long id,
                               @RequestParam int newPrice) {
        return productService.updatePrice(id, newPrice);
    }
}`}</code></pre>
          </div>

          <h2>4. 요청 파라미터 처리</h2>

          <h3>@RequestParam - 쿼리 파라미터</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SearchController.java</span></div>
            <pre><code>{`@RestController
@RequestMapping("/api/search")
public class SearchController {

    // GET /api/search?keyword=스프링&page=1&size=10
    @GetMapping
    public Page<Product> search(
            @RequestParam String keyword,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String category) {
        return productService.search(keyword, page, size, category);
    }

    // 여러 값 받기: /api/search/multi?ids=1&ids=2&ids=3
    @GetMapping("/multi")
    public List<Product> findMultiple(
            @RequestParam List<Long> ids) {
        return productService.findByIds(ids);
    }
}`}</code></pre>
          </div>

          <h3>@PathVariable - 경로 변수</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PathVariableExample.java</span></div>
            <pre><code>{`@RestController
@RequestMapping("/api")
public class PathVariableController {

    // /api/users/42
    @GetMapping("/users/{userId}")
    public User getUser(@PathVariable Long userId) {
        return userService.findById(userId);
    }

    // /api/users/42/orders/100
    @GetMapping("/users/{userId}/orders/{orderId}")
    public Order getUserOrder(
            @PathVariable Long userId,
            @PathVariable Long orderId) {
        return orderService.findByUserAndId(userId, orderId);
    }

    // /api/files/docs/2024/report.pdf
    @GetMapping("/files/{*filePath}")  // 나머지 경로 전체 매칭
    public Resource getFile(@PathVariable String filePath) {
        return fileService.getFile(filePath);
    }
}`}</code></pre>
          </div>

          <h3>@ModelAttribute - 폼 데이터 바인딩</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserFormController.java</span></div>
            <pre><code>{`@Controller
@RequestMapping("/users")
public class UserFormController {

    @GetMapping("/register")
    public String registerForm(Model model) {
        model.addAttribute("user", new UserForm());
        return "register";  // register.html 폼 화면
    }

    // 폼 데이터를 UserForm 객체로 자동 바인딩
    @PostMapping("/register")
    public String register(@ModelAttribute UserForm userForm,
                           Model model) {
        userService.register(userForm);
        model.addAttribute("message", "회원가입 완료!");
        return "success";
    }
}

// 폼 데이터를 담을 DTO
public class UserForm {
    private String name;
    private String email;
    private String password;
    private int age;
    // getter, setter 생략
}`}</code></pre>
          </div>

          <h2>5. ViewResolver와 View 반환</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> application.yml</span></div>
            <pre><code>{`# Thymeleaf 뷰 리졸버 설정 (Spring Boot 자동 설정)
spring:
  thymeleaf:
    prefix: classpath:/templates/    # 뷰 파일 위치
    suffix: .html                     # 뷰 파일 확장자
    cache: false                      # 개발 시 캐시 비활성화`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ViewController.java</span></div>
            <pre><code>{`@Controller
public class ViewController {

    // 문자열 반환: ViewResolver가 뷰 이름으로 해석
    @GetMapping("/welcome")
    public String welcome(Model model) {
        model.addAttribute("name", "Spring 학습자");
        return "welcome";  // → templates/welcome.html
    }

    // 리다이렉트
    @PostMapping("/login")
    public String login() {
        return "redirect:/dashboard";
    }

    // 포워드
    @GetMapping("/old-page")
    public String forwardPage() {
        return "forward:/new-page";
    }
}`}</code></pre>
          </div>

          <h2>6. Model과 ModelAndView</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ModelExample.java</span></div>
            <pre><code>{`@Controller
public class DashboardController {

    // 방법 1: Model 사용 (권장)
    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        model.addAttribute("username", "홍길동");
        model.addAttribute("orderCount", 5);
        model.addAttribute("recentOrders", orderService.getRecent());
        return "dashboard";
    }

    // 방법 2: ModelAndView 사용
    @GetMapping("/report")
    public ModelAndView report() {
        ModelAndView mav = new ModelAndView("report");
        mav.addObject("title", "월간 리포트");
        mav.addObject("data", reportService.getMonthly());
        return mav;
    }

    // 방법 3: @ResponseBody로 JSON 반환 (REST API)
    @GetMapping("/api/dashboard")
    @ResponseBody
    public DashboardDto apiDashboard() {
        return new DashboardDto("홍길동", 5, orderService.getRecent());
    }
}`}</code></pre>
          </div>

          <h2>7. 실전: 간단한 CRUD 컨트롤러</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> BoardController.java</span></div>
            <pre><code>{`@Controller
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    // 목록 조회
    @GetMapping
    public String list(@RequestParam(defaultValue = "1") int page,
                       Model model) {
        Page<Board> boards = boardService.findAll(page);
        model.addAttribute("boards", boards);
        return "board/list";
    }

    // 상세 조회
    @GetMapping("/{id}")
    public String detail(@PathVariable Long id, Model model) {
        Board board = boardService.findById(id);
        model.addAttribute("board", board);
        return "board/detail";
    }

    // 작성 폼
    @GetMapping("/new")
    public String createForm(Model model) {
        model.addAttribute("board", new BoardForm());
        return "board/form";
    }

    // 작성 처리
    @PostMapping
    public String create(@ModelAttribute BoardForm form) {
        Long id = boardService.create(form);
        return "redirect:/board/" + id;
    }

    // 수정 폼
    @GetMapping("/{id}/edit")
    public String editForm(@PathVariable Long id, Model model) {
        Board board = boardService.findById(id);
        model.addAttribute("board", board);
        return "board/form";
    }

    // 수정 처리
    @PostMapping("/{id}")
    public String update(@PathVariable Long id,
                         @ModelAttribute BoardForm form) {
        boardService.update(id, form);
        return "redirect:/board/" + id;
    }

    // 삭제 처리
    @PostMapping("/{id}/delete")
    public String delete(@PathVariable Long id) {
        boardService.delete(id);
        return "redirect:/board";
    }
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>REST API 개발 시에는 <code>@RestController</code>를 사용하고, 전통적인 서버 사이드 렌더링(SSR)에서는
            <code>@Controller</code>를 사용합니다. 최근에는 프론트엔드 분리형 구조에서 @RestController가 더 많이 사용됩니다.</p>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <h3>Controller 개념 체험</h3>
          <JavaCodeRunner defaultCode={`// Spring MVC Controller 동작 원리를 순수 Java로 시뮬레이션

import java.util.*;

// 간단한 요청 객체
class HttpRequest {
    String method;
    String path;
    Map<String, String> params;

    HttpRequest(String method, String path, Map<String, String> params) {
        this.method = method;
        this.path = path;
        this.params = params != null ? params : new HashMap<>();
    }
}

// 간단한 응답 객체
class HttpResponse {
    int status;
    String body;

    HttpResponse(int status, String body) {
        this.status = status;
        this.body = body;
    }
}

// Controller 역할 시뮬레이션
class ProductController {
    private Map<Integer, String> products = new HashMap<>();
    private int nextId = 1;

    public HttpResponse handleRequest(HttpRequest request) {
        if (request.method.equals("GET") && request.path.equals("/products")) {
            return listProducts();
        } else if (request.method.equals("POST") && request.path.equals("/products")) {
            return createProduct(request.params.get("name"));
        } else if (request.method.equals("GET") && request.path.startsWith("/products/")) {
            int id = Integer.parseInt(request.path.split("/")[2]);
            return getProduct(id);
        }
        return new HttpResponse(404, "Not Found");
    }

    private HttpResponse listProducts() {
        return new HttpResponse(200, "상품 목록: " + products);
    }

    private HttpResponse createProduct(String name) {
        products.put(nextId, name);
        return new HttpResponse(201, "상품 생성: [" + nextId++ + "] " + name);
    }

    private HttpResponse getProduct(int id) {
        String name = products.get(id);
        if (name == null) return new HttpResponse(404, "상품 없음");
        return new HttpResponse(200, "상품 상세: [" + id + "] " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        ProductController controller = new ProductController();

        // POST /products - 상품 생성
        HttpRequest req1 = new HttpRequest("POST", "/products",
            Map.of("name", "스프링 입문서"));
        HttpResponse res1 = controller.handleRequest(req1);
        System.out.println("[" + res1.status + "] " + res1.body);

        HttpRequest req2 = new HttpRequest("POST", "/products",
            Map.of("name", "자바 프로그래밍"));
        HttpResponse res2 = controller.handleRequest(req2);
        System.out.println("[" + res2.status + "] " + res2.body);

        // GET /products - 목록 조회
        HttpRequest req3 = new HttpRequest("GET", "/products", null);
        HttpResponse res3 = controller.handleRequest(req3);
        System.out.println("[" + res3.status + "] " + res3.body);

        // GET /products/1 - 단건 조회
        HttpRequest req4 = new HttpRequest("GET", "/products/1", null);
        HttpResponse res4 = controller.handleRequest(req4);
        System.out.println("[" + res4.status + "] " + res4.body);
    }
}`} title="Spring MVC Controller 동작 원리 시뮬레이션" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>DispatcherServlet의 요청 처리 흐름을 7단계로 설명하세요.</li>
              <li>@Controller와 @RestController의 차이점을 설명하세요.</li>
              <li>@RequestParam과 @PathVariable의 차이점과 사용 시점을 비교하세요.</li>
              <li>게시판 CRUD API를 @RestController로 설계해보세요. (URL, HTTP 메서드, 반환 타입)</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP05') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP05')}>
              {isLessonCompleted('SP05') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/04"><i className="fas fa-arrow-left"></i> 이전: AOP (관점지향)</Link>
            <Link to="/spring/06">다음: 데이터 바인딩과 검증 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
