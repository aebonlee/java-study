import{u as c,r as n,j as e,L as s}from"./index-CvcBSWGG.js";import{J as a}from"./JavaCodeRunner-DLAJAnJe.js";function t(){const{completeLesson:r,isLessonCompleted:i}=c();return n.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 02"})]}),e.jsx("h1",{children:"Lesson 02. IoC와 DI"}),e.jsx("p",{children:"제어의 역전(IoC)과 의존성 주입(DI)의 원리를 이해하고 다양한 주입 방식을 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 제어의 역전 (IoC, Inversion of Control)"}),e.jsx("p",{children:"전통적인 프로그래밍에서는 개발자가 직접 객체를 생성하고 흐름을 제어합니다. IoC는 이 제어권을 프레임워크(Spring 컨테이너)에 넘기는 설계 원칙입니다."}),e.jsx("h3",{children:"전통적인 방식 vs IoC"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," TraditionalWay.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 전통적인 방식: 개발자가 직접 객체 생성
public class OrderService {
    // 직접 구체 클래스에 의존 → 강한 결합
    private MySQLOrderRepository repository = new MySQLOrderRepository();

    public void createOrder(Order order) {
        repository.save(order);
    }
}
// 문제점: DB를 PostgreSQL로 바꾸려면 코드 수정 필요!`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," IoCWay.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ✅ IoC 방식: Spring이 객체 생성 및 주입
@Service
public class OrderService {
    // 인터페이스에 의존 → 느슨한 결합
    private final OrderRepository repository;

    @Autowired
    public OrderService(OrderRepository repository) {
        this.repository = repository;  // Spring이 알아서 주입
    }

    public void createOrder(Order order) {
        repository.save(order);
    }
}
// DB 변경 시 구현체만 교체하면 됨!`})})]}),e.jsx("h2",{children:"2. 의존성 주입 (DI, Dependency Injection)"}),e.jsx("p",{children:"DI는 IoC를 구현하는 대표적인 패턴으로, 객체가 필요한 의존성을 외부에서 주입받는 방식입니다."}),e.jsx("h3",{children:"생성자 주입 (Constructor Injection) - 권장"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ConstructorInjection.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    // 생성자 주입: final 필드 + 불변성 보장
    // 생성자가 1개면 @Autowired 생략 가능 (Spring 4.3+)
    public ProductService(ProductRepository productRepository,
                          CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    public Product findProduct(Long id) {
        return productRepository.findById(id);
    }
}`})})]}),e.jsx("h3",{children:"Setter 주입 (Setter Injection)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SetterInjection.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Service
public class NotificationService {
    private EmailSender emailSender;

    // Setter 주입: 선택적 의존성에 적합
    @Autowired
    public void setEmailSender(EmailSender emailSender) {
        this.emailSender = emailSender;
    }

    public void notify(String message) {
        if (emailSender != null) {
            emailSender.send(message);
        }
    }
}`})})]}),e.jsx("h3",{children:"필드 주입 (Field Injection) - 비권장"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," FieldInjection.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Service
public class ReportService {
    // 필드 주입: 간단하지만 테스트 어려움
    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private DataFormatter dataFormatter;

    // 문제점: final 선언 불가, 리플렉션 의존, 순환 참조 감지 어려움
}`})})]}),e.jsx("h2",{children:"3. XML 설정 방식"}),e.jsx("p",{children:"Spring 초기에 많이 사용하던 방식으로, 현재는 레거시 프로젝트에서 주로 볼 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," applicationContext.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- Bean 등록 -->
    <bean id="userRepository" class="com.example.UserRepositoryImpl"/>

    <!-- 생성자 주입 -->
    <bean id="userService" class="com.example.UserService">
        <constructor-arg ref="userRepository"/>
    </bean>

    <!-- Setter 주입 -->
    <bean id="mailService" class="com.example.MailService">
        <property name="smtpHost" value="smtp.gmail.com"/>
        <property name="port" value="587"/>
    </bean>
</beans>`})})]}),e.jsx("h2",{children:"4. 어노테이션 기반 DI"}),e.jsx("p",{children:"현재 가장 많이 사용하는 방식으로, 코드에 어노테이션을 부착하여 Bean을 등록하고 주입합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AnnotationDI.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 1) @Component 계열 어노테이션으로 Bean 등록
@Repository  // 데이터 접근 계층
public class JpaUserRepository implements UserRepository {
    @Override
    public User findById(Long id) {
        // JPA로 사용자 조회
        return entityManager.find(User.class, id);
    }
}

@Service  // 서비스(비즈니스 로직) 계층
public class UserService {
    private final UserRepository userRepository;

    @Autowired  // 의존성 주입
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

@Controller  // 웹 컨트롤러 계층
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," @Component 계열 어노테이션"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"@Component"}),"는 범용, ",e.jsx("strong",{children:"@Service"}),"는 비즈니스 로직,",e.jsx("strong",{children:"@Repository"}),"는 데이터 접근, ",e.jsx("strong",{children:"@Controller"}),"는 웹 컨트롤러에 사용합니다. 기능적 차이보다 의미적 구분을 위한 것입니다."]})]}),e.jsx("h2",{children:"5. 주입 방식 비교"}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"생성자 주입"}),e.jsx("th",{children:"Setter 주입"}),e.jsx("th",{children:"필드 주입"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"불변성(final)"})}),e.jsx("td",{children:"O (보장)"}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"필수 의존성"})}),e.jsx("td",{children:"컴파일 타임 체크"}),e.jsx("td",{children:"런타임 체크"}),e.jsx("td",{children:"런타임 체크"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"순환 참조 감지"})}),e.jsx("td",{children:"애플리케이션 시작 시"}),e.jsx("td",{children:"런타임 시"}),e.jsx("td",{children:"런타임 시"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"테스트 용이성"})}),e.jsx("td",{children:"높음 (new로 생성 가능)"}),e.jsx("td",{children:"보통"}),e.jsx("td",{children:"낮음 (리플렉션 필요)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"코드량"})}),e.jsx("td",{children:"많음"}),e.jsx("td",{children:"보통"}),e.jsx("td",{children:"적음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring 권장"})}),e.jsx("td",{children:"권장 (Best Practice)"}),e.jsx("td",{children:"선택적 의존성에 사용"}),e.jsx("td",{children:"비권장"})]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsxs("p",{children:["Lombok의 ",e.jsx("code",{children:"@RequiredArgsConstructor"}),"를 사용하면 생성자 주입 코드를 간결하게 작성할 수 있습니다. final 필드에 대한 생성자를 자동 생성해줍니다."]})]}),e.jsx("h2",{children:"6. DI의 장점"}),e.jsx("h3",{children:"테스트 용이성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserServiceTest.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// DI 덕분에 Mock 객체로 쉽게 테스트 가능
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void findUser_ShouldReturnUser() {
        // given
        User mockUser = new User(1L, "테스트");
        when(userRepository.findById(1L)).thenReturn(mockUser);

        // when
        User result = userService.findUser(1L);

        // then
        assertEquals("테스트", result.getName());
    }
}`})})]}),e.jsx("h2",{children:"7. 실전 예제: 서비스 계층 DI"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ShoppingService.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Service
public class ShoppingService {
    private final ProductRepository productRepository;
    private final DiscountPolicy discountPolicy;
    private final PaymentGateway paymentGateway;

    // 생성자 주입으로 모든 의존성 주입
    public ShoppingService(ProductRepository productRepository,
                           DiscountPolicy discountPolicy,
                           PaymentGateway paymentGateway) {
        this.productRepository = productRepository;
        this.discountPolicy = discountPolicy;
        this.paymentGateway = paymentGateway;
    }

    public OrderResult purchase(Long productId, int quantity) {
        Product product = productRepository.findById(productId);
        int finalPrice = discountPolicy.apply(product.getPrice(), quantity);
        return paymentGateway.process(finalPrice);
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요."})]}),e.jsx("h3",{children:"DI 개념 체험하기"}),e.jsx(a,{defaultCode:`// DI(의존성 주입)의 핵심 개념을 순수 Java로 체험합니다

// 인터페이스 정의 (추상화)
interface MessageSender {
    void send(String to, String message);
}

// 구현체 1: 이메일
class EmailSender implements MessageSender {
    public void send(String to, String message) {
        System.out.println("[EMAIL] " + to + "에게: " + message);
    }
}

// 구현체 2: SMS
class SmsSender implements MessageSender {
    public void send(String to, String message) {
        System.out.println("[SMS] " + to + "에게: " + message);
    }
}

// 서비스: 인터페이스에만 의존 (DI 핵심!)
class NotificationService {
    private final MessageSender sender;

    // 생성자 주입: 외부에서 구현체를 결정
    public NotificationService(MessageSender sender) {
        this.sender = sender;
    }

    public void notify(String to, String msg) {
        sender.send(to, msg);
    }
}

public class Main {
    public static void main(String[] args) {
        // Spring이라면 설정에 따라 자동 주입!
        // 여기서는 수동으로 DI 시연

        System.out.println("=== 이메일 발송 서비스 ===");
        NotificationService emailService =
            new NotificationService(new EmailSender());
        emailService.notify("user@test.com", "주문이 완료되었습니다");

        System.out.println("\\n=== SMS 발송 서비스 ===");
        NotificationService smsService =
            new NotificationService(new SmsSender());
        smsService.notify("010-1234-5678", "배송이 시작되었습니다");

        System.out.println("\\n→ 같은 서비스인데 주입하는 구현체만 바꾸면 됩니다!");
    }
}`,title:"DI(의존성 주입) 개념 체험"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"IoC와 DI의 관계를 설명하세요. IoC는 원칙이고 DI는 ___입니다."}),e.jsx("li",{children:"생성자 주입이 필드 주입보다 권장되는 이유 3가지를 설명하세요."}),e.jsxs("li",{children:["위 코드 실행기에서 ",e.jsx("code",{children:"KakaoSender"})," 구현체를 추가하고 테스트해보세요."]}),e.jsxs("li",{children:[e.jsx("code",{children:"@Autowired"}),"가 생성자에서 생략 가능한 조건은 무엇인가요?"]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${i("SP02")?"btn-primary":"btn-accent"}`,onClick:()=>r("SP02"),children:i("SP02")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/spring/01",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Spring Framework 소개"]}),e.jsxs(s,{to:"/spring/03",children:["다음: Spring Bean과 컨테이너 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{t as default};
