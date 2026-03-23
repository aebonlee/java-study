import{u as a,r as i,j as e,L as r}from"./index-CEQBFVPE.js";import{J as l}from"./JavaCodeRunner-z6hgL2aI.js";function n(){const{completeLesson:t,isLessonCompleted:s}=a();return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 05"})]}),e.jsx("h1",{children:"Lesson 05. Spring MVC 기초"}),e.jsx("p",{children:"MVC 아키텍처의 동작 원리를 이해하고, Controller, 요청 매핑, 파라미터 처리를 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. MVC 아키텍처와 DispatcherServlet"}),e.jsxs("p",{children:["Spring MVC는 ",e.jsx("strong",{children:"DispatcherServlet"}),"을 중심으로 요청을 처리합니다. 모든 HTTP 요청이 DispatcherServlet을 거쳐 적절한 컨트롤러로 전달됩니다."]}),e.jsx("h3",{children:"DispatcherServlet 동작 흐름"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"클라이언트 요청"})," - 브라우저에서 HTTP 요청 전송"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DispatcherServlet"})," - 모든 요청을 받는 프론트 컨트롤러"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HandlerMapping"})," - 요청 URL에 맞는 Controller를 찾음"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HandlerAdapter"})," - Controller 메서드를 실행"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Controller"})," - 비즈니스 로직 처리, Model에 데이터 담기"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ViewResolver"})," - 논리적 뷰 이름을 실제 뷰로 변환"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"View"})," - 최종 HTML 응답 렌더링"]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," DispatcherServlet의 역할"]}),e.jsxs("p",{children:["DispatcherServlet은 ",e.jsx("strong",{children:"Front Controller 패턴"}),"을 구현한 것입니다. 모든 요청의 진입점 역할을 하며, 요청 분배, 예외 처리, 뷰 렌더링 등을 중앙에서 관리합니다. Spring Boot에서는 자동으로 등록됩니다."]})]}),e.jsx("h2",{children:"2. @Controller와 @RequestMapping"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," HomeController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller  // 이 클래스가 웹 컨트롤러임을 선언
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
}`})})]}),e.jsx("h2",{children:"3. 요청 매핑 어노테이션"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ProductController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@RestController
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
}`})})]}),e.jsx("h2",{children:"4. 요청 파라미터 처리"}),e.jsx("h3",{children:"@RequestParam - 쿼리 파라미터"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SearchController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@RestController
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
}`})})]}),e.jsx("h3",{children:"@PathVariable - 경로 변수"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PathVariableExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@RestController
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
}`})})]}),e.jsx("h3",{children:"@ModelAttribute - 폼 데이터 바인딩"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserFormController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller
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
}`})})]}),e.jsx("h2",{children:"5. ViewResolver와 View 반환"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," application.yml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# Thymeleaf 뷰 리졸버 설정 (Spring Boot 자동 설정)
spring:
  thymeleaf:
    prefix: classpath:/templates/    # 뷰 파일 위치
    suffix: .html                     # 뷰 파일 확장자
    cache: false                      # 개발 시 캐시 비활성화`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ViewController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller
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
}`})})]}),e.jsx("h2",{children:"6. Model과 ModelAndView"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ModelExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller
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
}`})})]}),e.jsx("h2",{children:"7. 실전: 간단한 CRUD 컨트롤러"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BoardController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller
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
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsxs("p",{children:["REST API 개발 시에는 ",e.jsx("code",{children:"@RestController"}),"를 사용하고, 전통적인 서버 사이드 렌더링(SSR)에서는",e.jsx("code",{children:"@Controller"}),"를 사용합니다. 최근에는 프론트엔드 분리형 구조에서 @RestController가 더 많이 사용됩니다."]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요."})]}),e.jsx("h3",{children:"Controller 개념 체험"}),e.jsx(l,{defaultCode:`// Spring MVC Controller 동작 원리를 순수 Java로 시뮬레이션

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
}`,title:"Spring MVC Controller 동작 원리 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"DispatcherServlet의 요청 처리 흐름을 7단계로 설명하세요."}),e.jsx("li",{children:"@Controller와 @RestController의 차이점을 설명하세요."}),e.jsx("li",{children:"@RequestParam과 @PathVariable의 차이점과 사용 시점을 비교하세요."}),e.jsx("li",{children:"게시판 CRUD API를 @RestController로 설계해보세요. (URL, HTTP 메서드, 반환 타입)"})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("SP05")?"btn-primary":"btn-accent"}`,onClick:()=>t("SP05"),children:s("SP05")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/spring/04",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: AOP (관점지향)"]}),e.jsxs(r,{to:"/spring/06",children:["다음: 데이터 바인딩과 검증 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{n as default};
