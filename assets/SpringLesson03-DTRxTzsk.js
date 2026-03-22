import{u as a,r as t,j as e,L as n}from"./index-D5Sovzlw.js";import{J as c}from"./JavaCodeRunner-DXIJWgVy.js";function o(){const{completeLesson:i,isLessonCompleted:s}=a();return t.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(n,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(n,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 03"})]}),e.jsx("h1",{children:"Lesson 03. Spring Bean과 컨테이너"}),e.jsx("p",{children:"ApplicationContext, Bean 등록 방법, 스코프, 생명주기, 컴포넌트 스캔을 상세히 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. ApplicationContext"}),e.jsxs("p",{children:["Spring IoC 컨테이너는 Bean의 생성, 설정, 관리를 담당합니다. 핵심 인터페이스는",e.jsx("code",{children:"BeanFactory"}),"와 ",e.jsx("code",{children:"ApplicationContext"}),"입니다."]}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"BeanFactory"}),e.jsx("th",{children:"ApplicationContext"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Bean 로딩"})}),e.jsx("td",{children:"Lazy Loading (요청 시 생성)"}),e.jsx("td",{children:"Eager Loading (시작 시 생성)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"국제화(i18n)"})}),e.jsx("td",{children:"미지원"}),e.jsx("td",{children:"지원 (MessageSource)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"이벤트 발행"})}),e.jsx("td",{children:"미지원"}),e.jsx("td",{children:"지원 (ApplicationEvent)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"AOP 지원"})}),e.jsx("td",{children:"제한적"}),e.jsx("td",{children:"완전 지원"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"사용 권장"})}),e.jsx("td",{children:"리소스 제한 환경"}),e.jsx("td",{children:"일반적인 애플리케이션 (권장)"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ApplicationContextExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ApplicationContext 생성 방법들
// 1) 어노테이션 기반
ApplicationContext context =
    new AnnotationConfigApplicationContext(AppConfig.class);

// 2) XML 기반
ApplicationContext context =
    new ClassPathXmlApplicationContext("applicationContext.xml");

// 3) Spring Boot (자동)
ApplicationContext context =
    SpringApplication.run(Application.class, args);

// Bean 가져오기
UserService userService = context.getBean(UserService.class);
UserService namedBean = context.getBean("userService", UserService.class);`})})]}),e.jsx("h2",{children:"2. Bean 등록 방법"}),e.jsx("h3",{children:"@Component 스캔 방식"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ComponentScanRegistration.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// @Component 계열 어노테이션 사용
@Component       // 범용 컴포넌트
public class UtilHelper { }

@Service         // 비즈니스 로직 계층
public class OrderService { }

@Repository      // 데이터 접근 계층 (예외 변환 기능 추가)
public class OrderRepository { }

@Controller      // 웹 MVC 컨트롤러
public class OrderController { }`})})]}),e.jsx("h3",{children:"@Bean 메서드 방식 (Java Config)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AppConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Configuration
public class AppConfig {

    @Bean  // 메서드 이름이 Bean 이름이 됨
    public DataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        ds.setUsername("root");
        ds.setPassword("password");
        return ds;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        return mapper;
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"@Component"}),"는 개발자가 작성한 클래스에, ",e.jsx("strong",{children:"@Bean"}),"은 외부 라이브러리 클래스를 Bean으로 등록할 때 사용합니다. 외부 라이브러리 클래스에는 어노테이션을 붙일 수 없으므로 @Bean을 사용합니다."]})]}),e.jsx("h2",{children:"3. Bean 스코프"}),e.jsx("p",{children:"Bean 스코프는 Spring 컨테이너가 Bean 인스턴스를 생성하고 관리하는 범위를 정의합니다."}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"스코프"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"생성 시점"}),e.jsx("th",{children:"사용 예"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"singleton"})}),e.jsx("td",{children:"컨테이너당 1개 (기본값)"}),e.jsx("td",{children:"컨테이너 시작 시"}),e.jsx("td",{children:"서비스, 리포지토리"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"prototype"})}),e.jsx("td",{children:"요청마다 새 인스턴스"}),e.jsx("td",{children:"getBean() 호출 시"}),e.jsx("td",{children:"상태를 가진 Bean"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"request"})}),e.jsx("td",{children:"HTTP 요청마다 1개"}),e.jsx("td",{children:"요청 시작 시"}),e.jsx("td",{children:"요청별 데이터"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"session"})}),e.jsx("td",{children:"HTTP 세션마다 1개"}),e.jsx("td",{children:"세션 생성 시"}),e.jsx("td",{children:"로그인 사용자 정보"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"application"})}),e.jsx("td",{children:"ServletContext당 1개"}),e.jsx("td",{children:"앱 시작 시"}),e.jsx("td",{children:"전역 설정"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BeanScopes.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Singleton (기본값) - 가장 많이 사용
@Service
@Scope("singleton")  // 생략 가능 (기본값)
public class UserService {
    // 컨테이너에 딱 1개만 존재
}

// Prototype - 요청마다 새 인스턴스
@Component
@Scope("prototype")
public class ShoppingCart {
    private List<Item> items = new ArrayList<>();
    // 사용자마다 별도의 장바구니 필요
}

// Request 스코프 (웹 환경)
@Component
@Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestLog {
    private List<String> logs = new ArrayList<>();
}`})})]}),e.jsx("h2",{children:"4. Bean 생명주기"}),e.jsx("p",{children:"Spring Bean은 다음 순서로 생명주기가 관리됩니다:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"인스턴스 생성"})," - 컨테이너가 Bean 객체를 생성"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"의존성 주입"})," - @Autowired 등으로 의존 객체 주입"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"초기화 콜백"})," - @PostConstruct 메서드 실행"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"사용"})," - 애플리케이션에서 Bean 사용"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"소멸 콜백"})," - @PreDestroy 메서드 실행"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"스프링 종료"})," - 컨테이너 종료"]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BeanLifecycle.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Component
public class DatabaseConnectionPool {
    private Connection connection;

    @PostConstruct  // Bean 생성 후 초기화
    public void init() {
        System.out.println("DB 연결 풀 초기화...");
        this.connection = DriverManager.getConnection(url);
        System.out.println("DB 연결 완료!");
    }

    @PreDestroy  // Bean 소멸 전 정리
    public void cleanup() {
        System.out.println("DB 연결 풀 정리 중...");
        if (connection != null) {
            connection.close();
        }
        System.out.println("DB 연결 해제 완료!");
    }
}`})})]}),e.jsx("h2",{children:"5. 컴포넌트 스캔 (@ComponentScan)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ComponentScanConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Configuration
@ComponentScan(
    basePackages = "com.example.myapp",
    // 특정 패키지 제외
    excludeFilters = @ComponentScan.Filter(
        type = FilterType.REGEX,
        pattern = "com.example.myapp.test.*"
    )
)
public class AppConfig {
    // basePackages 하위의 @Component 계열 클래스를 자동 탐색
}

// Spring Boot에서는 @SpringBootApplication에 @ComponentScan 포함
@SpringBootApplication  // @ComponentScan 포함
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`})})]}),e.jsx("h2",{children:"6. Bean 충돌 해결"}),e.jsx("p",{children:"같은 타입의 Bean이 여러 개 등록되면 충돌이 발생합니다. 이를 해결하는 방법:"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BeanConflictResolution.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 인터페이스
public interface PaymentGateway {
    void pay(int amount);
}

// 구현체 1
@Component
@Primary  // 기본으로 선택될 Bean
public class KakaoPayGateway implements PaymentGateway {
    public void pay(int amount) {
        System.out.println("카카오페이 결제: " + amount + "원");
    }
}

// 구현체 2
@Component("naverPay")
public class NaverPayGateway implements PaymentGateway {
    public void pay(int amount) {
        System.out.println("네이버페이 결제: " + amount + "원");
    }
}

// 사용측
@Service
public class OrderService {
    // @Primary로 KakaoPayGateway가 주입됨
    private final PaymentGateway defaultGateway;

    // @Qualifier로 특정 Bean 지정
    private final PaymentGateway naverGateway;

    public OrderService(
            PaymentGateway defaultGateway,
            @Qualifier("naverPay") PaymentGateway naverGateway) {
        this.defaultGateway = defaultGateway;
        this.naverGateway = naverGateway;
    }
}`})})]}),e.jsx("h2",{children:"7. 프로파일 (@Profile)"}),e.jsx("p",{children:"환경(개발, 테스트, 운영)에 따라 다른 Bean을 등록할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ProfileConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 개발 환경용 DataSource
@Configuration
@Profile("dev")
public class DevConfig {
    @Bean
    public DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .build();
    }
}

// 운영 환경용 DataSource
@Configuration
@Profile("prod")
public class ProdConfig {
    @Bean
    public DataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:mysql://prod-server:3306/mydb");
        return ds;
    }
}

// application.yml에서 활성 프로파일 설정
// spring.profiles.active=dev`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요."})]}),e.jsx("h3",{children:"Singleton vs Prototype 개념 체험"}),e.jsx(c,{defaultCode:`// Bean 스코프: Singleton vs Prototype 개념 체험

class SingletonBean {
    private static SingletonBean instance;
    private int count = 0;

    private SingletonBean() {}

    public static SingletonBean getInstance() {
        if (instance == null) {
            instance = new SingletonBean();
        }
        return instance;
    }

    public void increment() { count++; }
    public int getCount() { return count; }
}

class PrototypeBean {
    private int count = 0;

    public PrototypeBean() {}  // 매번 새로 생성

    public void increment() { count++; }
    public int getCount() { return count; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Singleton 스코프 ===");
        SingletonBean s1 = SingletonBean.getInstance();
        SingletonBean s2 = SingletonBean.getInstance();
        s1.increment();
        s1.increment();
        System.out.println("s1 count: " + s1.getCount());
        System.out.println("s2 count: " + s2.getCount());
        System.out.println("같은 인스턴스? " + (s1 == s2));

        System.out.println("\\n=== Prototype 스코프 ===");
        PrototypeBean p1 = new PrototypeBean();
        PrototypeBean p2 = new PrototypeBean();
        p1.increment();
        p1.increment();
        System.out.println("p1 count: " + p1.getCount());
        System.out.println("p2 count: " + p2.getCount());
        System.out.println("같은 인스턴스? " + (p1 == p2));
    }
}`,title:"Singleton vs Prototype 스코프 비교"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"BeanFactory와 ApplicationContext의 차이점 3가지를 설명하세요."}),e.jsx("li",{children:"@Component와 @Bean의 사용 시점을 비교하세요."}),e.jsx("li",{children:"singleton 스코프에서 주의해야 할 상태 관리 문제를 설명하세요."}),e.jsx("li",{children:"@PostConstruct와 @PreDestroy의 실행 시점을 생명주기 순서에서 설명하세요."}),e.jsx("li",{children:"같은 타입의 Bean이 2개 등록되었을 때 충돌을 해결하는 3가지 방법을 쓰세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("SP03")?"btn-primary":"btn-accent"}`,onClick:()=>i("SP03"),children:s("SP03")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(n,{to:"/spring/02",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: IoC와 DI"]}),e.jsxs(n,{to:"/spring/04",children:["다음: AOP (관점지향) ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{o as default};
