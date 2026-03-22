import{u as a,r as o,j as e,L as s}from"./index-C8q_r35B.js";import{J as c}from"./JavaCodeRunner-BFY2gyci.js";function n(){const{completeLesson:i,isLessonCompleted:t}=a();return o.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 14"})]}),e.jsx("h1",{children:"Lesson 14. 테스트 (JUnit5, MockMvc)"}),e.jsx("p",{children:"JUnit5와 Mockito를 사용한 단위 테스트부터 MockMvc를 활용한 통합 테스트까지 배웁니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 테스트 피라미드"}),e.jsx("p",{children:"테스트는 범위에 따라 세 가지 수준으로 나뉩니다. 아래로 갈수록 빠르고 많아야 합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 테스트 피라미드"]})}),e.jsx("pre",{children:e.jsx("code",{children:`        /\\
       /  \\        E2E 테스트 (느림, 적게)
      / E2E\\       - 전체 시스템을 브라우저로 테스트
     /------\\      - Selenium, Cypress
    /        \\
   / 통합 테스트 \\   Integration 테스트 (중간)
  /   (API)    \\   - 여러 계층을 함께 테스트
 /--------------\\  - @SpringBootTest, MockMvc
/                \\
/   단위 테스트    \\  Unit 테스트 (빠름, 많이)
/   (비즈니스)     \\ - 클래스/메서드 단위 테스트
/------------------\\ - JUnit5, Mockito`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 테스트 비율 권장"]}),e.jsx("p",{children:"단위 테스트 70% : 통합 테스트 20% : E2E 테스트 10% 비율을 권장합니다. 단위 테스트가 가장 빠르고 유지보수가 쉬우므로 가장 많이 작성해야 합니다."})]}),e.jsx("h2",{children:"2. JUnit5 기본"}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CalculatorTest.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Calculator 테스트")
class CalculatorTest {

    private Calculator calculator;

    @BeforeEach  // 각 테스트 전에 실행
    void setUp() {
        calculator = new Calculator();
    }

    @Test
    @DisplayName("두 수를 더할 수 있다")
    void addTest() {
        // Given (준비)
        int a = 10, b = 20;

        // When (실행)
        int result = calculator.add(a, b);

        // Then (검증)
        assertEquals(30, result);
    }

    @Test
    @DisplayName("0으로 나누면 예외가 발생한다")
    void divideByZeroTest() {
        assertThrows(ArithmeticException.class, () -> {
            calculator.divide(10, 0);
        });
    }

    @Test
    @DisplayName("여러 검증을 한번에 실행한다")
    void multipleAssertions() {
        assertAll(
            () -> assertEquals(4, calculator.add(2, 2)),
            () -> assertEquals(0, calculator.subtract(2, 2)),
            () -> assertEquals(4, calculator.multiply(2, 2)),
            () -> assertNotNull(calculator)
        );
    }

    @ParameterizedTest  // 매개변수화 테스트
    @ValueSource(ints = {1, 2, 3, 4, 5})
    @DisplayName("양수 여부를 확인한다")
    void isPositiveTest(int number) {
        assertTrue(calculator.isPositive(number));
    }

    @AfterEach  // 각 테스트 후에 실행
    void tearDown() {
        calculator = null;
    }
}`})})]}),e.jsx("h3",{children:"주요 Assertion 메서드"}),e.jsxs("table",{className:"info-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"메서드"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"assertEquals(expected, actual)"})}),e.jsx("td",{children:"값이 같은지 확인"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"assertNotEquals(a, b)"})}),e.jsx("td",{children:"값이 다른지 확인"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"assertTrue(condition)"})}),e.jsx("td",{children:"조건이 참인지 확인"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"assertFalse(condition)"})}),e.jsx("td",{children:"조건이 거짓인지 확인"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"assertNull(object)"})}),e.jsx("td",{children:"null인지 확인"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"assertNotNull(object)"})}),e.jsx("td",{children:"null이 아닌지 확인"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"assertThrows(Exception.class, executable)"})}),e.jsx("td",{children:"예외 발생 확인"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"assertAll(executables...)"})}),e.jsx("td",{children:"모든 검증을 실행"})]})]})]}),e.jsx("h2",{children:"3. Mockito"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Mockito 기본 사용법"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.*;

@ExtendWith(MockitoExtension.class)
class PostServiceTest {

    @Mock                    // 가짜 객체 생성
    private PostRepository postRepository;

    @InjectMocks             // Mock을 주입받는 실제 객체
    private PostService postService;

    @Test
    @DisplayName("게시글을 ID로 조회할 수 있다")
    void findByIdTest() {
        // Given - Mock 행동 정의
        Post mockPost = new Post(1L, "테스트 제목", "테스트 내용", "작성자");
        when(postRepository.findById(1L)).thenReturn(Optional.of(mockPost));

        // When
        PostDto result = postService.findById(1L);

        // Then
        assertNotNull(result);
        assertEquals("테스트 제목", result.getTitle());
        verify(postRepository, times(1)).findById(1L);  // 호출 검증
    }

    @Test
    @DisplayName("존재하지 않는 게시글 조회 시 예외 발생")
    void findByIdNotFoundTest() {
        // Given
        when(postRepository.findById(anyLong())).thenReturn(Optional.empty());

        // When & Then
        assertThrows(ResourceNotFoundException.class, () -> {
            postService.findById(999L);
        });
    }
}`})})]}),e.jsx("h2",{children:"4. 서비스 계층 단위 테스트"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PostServiceTest.java (전체)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@ExtendWith(MockitoExtension.class)
class PostServiceTest {

    @Mock
    private PostRepository postRepository;

    @InjectMocks
    private PostService postService;

    @Test
    @DisplayName("게시글을 생성할 수 있다")
    void createPostTest() {
        // Given
        CreatePostRequest request = new CreatePostRequest("제목", "내용", "작성자");
        Post savedPost = new Post(1L, "제목", "내용", "작성자");
        when(postRepository.save(any(Post.class))).thenReturn(savedPost);

        // When
        PostDto result = postService.create(request);

        // Then
        assertNotNull(result);
        assertEquals("제목", result.getTitle());
        verify(postRepository).save(any(Post.class));
    }

    @Test
    @DisplayName("게시글을 삭제할 수 있다")
    void deletePostTest() {
        // Given
        when(postRepository.existsById(1L)).thenReturn(true);
        doNothing().when(postRepository).deleteById(1L);

        // When
        postService.delete(1L);

        // Then
        verify(postRepository).existsById(1L);
        verify(postRepository).deleteById(1L);
    }
}`})})]}),e.jsx("h2",{children:"5. MockMvc로 컨트롤러 테스트"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PostControllerTest.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebMvcTest(PostController.class)  // 컨트롤러만 로드
class PostControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean  // Spring Context에 Mock 등록
    private PostService postService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @DisplayName("GET /api/posts/{id} - 게시글 조회 성공")
    void getPostTest() throws Exception {
        // Given
        PostDto post = new PostDto(1L, "제목", "내용", "작성자");
        when(postService.findById(1L)).thenReturn(post);

        // When & Then
        mockMvc.perform(get("/api/posts/1")
                .contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.title").value("제목"))
            .andExpect(jsonPath("$.author").value("작성자"))
            .andDo(print());  // 요청/응답 출력
    }

    @Test
    @DisplayName("POST /api/posts - 게시글 생성 성공")
    void createPostTest() throws Exception {
        // Given
        CreatePostRequest request = new CreatePostRequest("제목", "내용", "작성자");
        PostDto created = new PostDto(1L, "제목", "내용", "작성자");
        when(postService.create(any())).thenReturn(created);

        // When & Then
        mockMvc.perform(post("/api/posts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.id").value(1));
    }

    @Test
    @DisplayName("GET /api/posts/999 - 존재하지 않는 게시글")
    void getPostNotFoundTest() throws Exception {
        when(postService.findById(999L))
            .thenThrow(new ResourceNotFoundException("Post", 999L));

        mockMvc.perform(get("/api/posts/999"))
            .andExpect(status().isNotFound());
    }
}`})})]}),e.jsx("h2",{children:"6. @SpringBootTest 통합 테스트"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PostIntegrationTest.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@Transactional  // 각 테스트 후 롤백
class PostIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        postRepository.save(new Post("통합테스트 제목", "내용", "작성자"));
    }

    @Test
    @DisplayName("통합 테스트 - 게시글 CRUD 전체 흐름")
    void crudFlowTest() throws Exception {
        // Create
        String json = objectMapper.writeValueAsString(
            new CreatePostRequest("새 글", "새 내용", "테스터"));
        mockMvc.perform(post("/api/posts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
            .andExpect(status().isCreated());

        // Read
        mockMvc.perform(get("/api/posts"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.length()").value(2));
    }
}`})})]}),e.jsx("h2",{children:"7. 테스트 커버리지 (JaCoCo)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle (JaCoCo 설정)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`plugins {
    id 'jacoco'
}

jacoco {
    toolVersion = "0.8.11"
}

jacocoTestReport {
    reports {
        xml.required = true
        html.required = true   // build/reports/jacoco/test/html/index.html
    }
    afterEvaluate {
        classDirectories.setFrom(files(classDirectories.files.collect {
            fileTree(dir: it, exclude: [
                '**/dto/**',     // DTO 제외
                '**/config/**',  // 설정 클래스 제외
            ])
        }))
    }
}

jacocoTestCoverageVerification {
    violationRules {
        rule {
            limit {
                minimum = 0.80  // 최소 80% 커버리지
            }
        }
    }
}

// 실행: ./gradlew test jacocoTestReport`})})]}),e.jsx(c,{defaultCode:`// JUnit5 스타일 테스트 개념 이해하기
// (실제 JUnit 없이 순수 Java로 테스트 패턴을 실습합니다)

public class Main {

    // 테스트 대상 클래스
    static class Calculator {
        public int add(int a, int b) { return a + b; }
        public int subtract(int a, int b) { return a - b; }
        public int multiply(int a, int b) { return a * b; }
        public int divide(int a, int b) {
            if (b == 0) throw new ArithmeticException("0으로 나눌 수 없습니다");
            return a / b;
        }
    }

    // 간단한 테스트 프레임워크 시뮬레이션
    static int passed = 0, failed = 0;

    static void assertEquals(Object expected, Object actual, String testName) {
        if (expected.equals(actual)) {
            System.out.println("  PASS: " + testName);
            passed++;
        } else {
            System.out.println("  FAIL: " + testName + " (기대: " + expected + ", 실제: " + actual + ")");
            failed++;
        }
    }

    static void assertThrows(Class<?> exType, Runnable code, String testName) {
        try {
            code.run();
            System.out.println("  FAIL: " + testName + " (예외가 발생하지 않음)");
            failed++;
        } catch (Exception e) {
            if (exType.isInstance(e)) {
                System.out.println("  PASS: " + testName);
                passed++;
            } else {
                System.out.println("  FAIL: " + testName + " (다른 예외: " + e.getClass().getSimpleName() + ")");
                failed++;
            }
        }
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println("=== Calculator 테스트 ===\\n");

        System.out.println("[@Test] 덧셈 테스트");
        assertEquals(30, calc.add(10, 20), "10 + 20 = 30");
        assertEquals(0, calc.add(-5, 5), "-5 + 5 = 0");

        System.out.println("\\n[@Test] 뺄셈 테스트");
        assertEquals(5, calc.subtract(10, 5), "10 - 5 = 5");

        System.out.println("\\n[@Test] 곱셈 테스트");
        assertEquals(50, calc.multiply(10, 5), "10 * 5 = 50");

        System.out.println("\\n[@Test] 나눗셈 테스트");
        assertEquals(2, calc.divide(10, 5), "10 / 5 = 2");

        System.out.println("\\n[@Test] 0으로 나누기 예외 테스트");
        assertThrows(ArithmeticException.class,
            () -> calc.divide(10, 0),
            "0으로 나누면 ArithmeticException 발생");

        System.out.println("\\n=== 테스트 결과 ===");
        System.out.println("통과: " + passed + ", 실패: " + failed);
        System.out.println("커버리지: " + (passed * 100 / (passed + failed)) + "%");
    }
}`,title:"JUnit5 테스트 패턴 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"서비스 클래스에 대해 Mockito를 활용한 단위 테스트를 3개 이상 작성해 보세요."}),e.jsx("li",{children:"MockMvc를 사용하여 GET, POST, PUT, DELETE API를 각각 테스트해 보세요."}),e.jsx("li",{children:"@ParameterizedTest를 사용하여 여러 입력값으로 동일한 테스트를 실행해 보세요."}),e.jsx("li",{children:"JaCoCo를 설정하고 테스트 커버리지 80% 이상을 달성해 보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${t("SP14")?"btn-primary":"btn-accent"}`,onClick:()=>i("SP14"),children:t("SP14")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/spring/13",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Spring Security + JWT"]}),e.jsxs(s,{to:"/spring/15",children:["다음: Swagger/OpenAPI 문서화 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{n as default};
