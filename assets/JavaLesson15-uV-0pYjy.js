import{u as r,r as n,j as e,L as s}from"./index-CZdGIHtB.js";function l(){const{completeLesson:c,isLessonCompleted:i}=r();return n.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 15"})]}),e.jsx("h1",{children:"Chapter 15. Spring Framework 기초"}),e.jsx("p",{children:"IoC, DI, AOP 등 Spring의 핵심 개념을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. Spring Framework란?"}),e.jsxs("p",{children:["Spring은 Java 엔터프라이즈 애플리케이션 개발을 위한 ",e.jsx("strong",{children:"경량 프레임워크"}),"입니다. 복잡한 Java EE를 대체하여, 간결하고 테스트 가능한 코드 작성을 돕습니다."]}),e.jsx("h2",{children:"2. IoC (제어의 역전)"}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," IoC 컨테이너"]}),e.jsxs("p",{children:["객체의 생성과 의존성 관리를 개발자가 아닌 ",e.jsx("strong",{children:"프레임워크(컨테이너)"}),"가 담당합니다. 객체 간 결합도를 낮추어 유연한 설계가 가능합니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," IoC 비교"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// IoC 없이 (직접 생성 - 강한 결합)
public class OrderService {
    private PaymentService payment = new CreditCardPayment(); // 직접 생성
}

// IoC 적용 (컨테이너가 주입 - 느슨한 결합)
public class OrderService {
    private final PaymentService payment;  // 인터페이스에 의존

    public OrderService(PaymentService payment) {  // 외부에서 주입
        this.payment = payment;
    }
}`})})]}),e.jsx("h2",{children:"3. DI (의존성 주입)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DependencyInjection.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 1. 생성자 주입 (추천!)
@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired  // Spring 4.3+ 에서는 생략 가능 (단일 생성자)
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// 2. 세터 주입
@Service
public class OrderService {
    private PaymentService paymentService;

    @Autowired
    public void setPaymentService(PaymentService ps) {
        this.paymentService = ps;
    }
}

// 3. 필드 주입 (비추천 - 테스트 어려움)
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 생성자 주입을 추천하는 이유"]}),e.jsx("p",{children:"불변성 보장(final), 순환 참조 방지, 테스트 용이성, 필수 의존성 명시"})]}),e.jsx("h2",{children:"4. 스테레오타입 어노테이션"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"어노테이션"}),e.jsx("th",{children:"용도"}),e.jsx("th",{children:"레이어"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@Component"})}),e.jsx("td",{children:"일반 Bean 등록"}),e.jsx("td",{children:"공통"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@Controller"})}),e.jsx("td",{children:"웹 요청 처리"}),e.jsx("td",{children:"프레젠테이션"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@Service"})}),e.jsx("td",{children:"비즈니스 로직"}),e.jsx("td",{children:"서비스"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@Repository"})}),e.jsx("td",{children:"데이터 접근"}),e.jsx("td",{children:"데이터"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"@Configuration"})}),e.jsx("td",{children:"설정 클래스"}),e.jsx("td",{children:"설정"})]})]})]}),e.jsx("h2",{children:"5. Bean 스코프"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BeanScope.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Component
@Scope("singleton")    // 기본값: 애플리케이션에서 하나
public class SingletonBean { }

@Component
@Scope("prototype")    // 요청할 때마다 새 인스턴스
public class PrototypeBean { }

@Component
@Scope("request")      // HTTP 요청당 하나
public class RequestBean { }

@Component
@Scope("session")      // HTTP 세션당 하나
public class SessionBean { }`})})]}),e.jsx("h2",{children:"6. AOP (관점 지향 프로그래밍)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," LoggingAspect.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Aspect
@Component
public class LoggingAspect {

    // 모든 Service의 메서드 실행 전
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint jp) {
        System.out.println("실행 전: " + jp.getSignature().getName());
    }

    // 메서드 실행 후
    @After("execution(* com.example.service.*.*(..))")
    public void logAfter(JoinPoint jp) {
        System.out.println("실행 후: " + jp.getSignature().getName());
    }

    // 전후 제어 (가장 강력)
    @Around("execution(* com.example.service.*.*(..))")
    public Object logAround(ProceedingJoinPoint pjp) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = pjp.proceed();  // 실제 메서드 실행
        long elapsed = System.currentTimeMillis() - start;
        System.out.println(pjp.getSignature() + " 실행시간: " + elapsed + "ms");
        return result;
    }
}`})})]}),e.jsx("h2",{children:"7. Java Config"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AppConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Configuration
@ComponentScan("com.example")
public class AppConfig {

    @Bean
    public DataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        ds.setUsername("root");
        ds.setPassword("password");
        return ds;
    }
}

// ApplicationContext 사용
ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);
UserService userService = ctx.getBean(UserService.class);`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"인터페이스와 DI를 활용하여 알림 서비스(Email, SMS)를 구현하세요."}),e.jsx("li",{children:"AOP로 모든 서비스 메서드의 실행 시간을 측정하는 Aspect를 작성하세요."}),e.jsx("li",{children:"@Configuration과 @Bean으로 직접 빈을 등록하는 설정 클래스를 만드세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${i("15")?"btn-secondary":"btn-accent"}`,onClick:()=>c("15"),children:i("15")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/14",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: JSP와 MVC"]}),e.jsxs(s,{to:"/java-learning/16",children:["다음: Spring Boot ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
