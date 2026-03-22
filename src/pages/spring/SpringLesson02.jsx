import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson02() {
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
            <span>Lesson 02</span>
          </div>
          <h1>Lesson 02. IoC와 DI</h1>
          <p>제어의 역전(IoC)과 의존성 주입(DI)의 원리를 이해하고 다양한 주입 방식을 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 제어의 역전 (IoC, Inversion of Control)</h2>
          <p>
            전통적인 프로그래밍에서는 개발자가 직접 객체를 생성하고 흐름을 제어합니다.
            IoC는 이 제어권을 프레임워크(Spring 컨테이너)에 넘기는 설계 원칙입니다.
          </p>

          <h3>전통적인 방식 vs IoC</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> TraditionalWay.java</span></div>
            <pre><code>{`// ❌ 전통적인 방식: 개발자가 직접 객체 생성
public class OrderService {
    // 직접 구체 클래스에 의존 → 강한 결합
    private MySQLOrderRepository repository = new MySQLOrderRepository();

    public void createOrder(Order order) {
        repository.save(order);
    }
}
// 문제점: DB를 PostgreSQL로 바꾸려면 코드 수정 필요!`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> IoCWay.java</span></div>
            <pre><code>{`// ✅ IoC 방식: Spring이 객체 생성 및 주입
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
// DB 변경 시 구현체만 교체하면 됨!`}</code></pre>
          </div>

          <h2>2. 의존성 주입 (DI, Dependency Injection)</h2>
          <p>DI는 IoC를 구현하는 대표적인 패턴으로, 객체가 필요한 의존성을 외부에서 주입받는 방식입니다.</p>

          <h3>생성자 주입 (Constructor Injection) - 권장</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ConstructorInjection.java</span></div>
            <pre><code>{`@Service
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
}`}</code></pre>
          </div>

          <h3>Setter 주입 (Setter Injection)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SetterInjection.java</span></div>
            <pre><code>{`@Service
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
}`}</code></pre>
          </div>

          <h3>필드 주입 (Field Injection) - 비권장</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> FieldInjection.java</span></div>
            <pre><code>{`@Service
public class ReportService {
    // 필드 주입: 간단하지만 테스트 어려움
    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private DataFormatter dataFormatter;

    // 문제점: final 선언 불가, 리플렉션 의존, 순환 참조 감지 어려움
}`}</code></pre>
          </div>

          <h2>3. XML 설정 방식</h2>
          <p>Spring 초기에 많이 사용하던 방식으로, 현재는 레거시 프로젝트에서 주로 볼 수 있습니다.</p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> applicationContext.xml</span></div>
            <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
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
</beans>`}</code></pre>
          </div>

          <h2>4. 어노테이션 기반 DI</h2>
          <p>현재 가장 많이 사용하는 방식으로, 코드에 어노테이션을 부착하여 Bean을 등록하고 주입합니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> AnnotationDI.java</span></div>
            <pre><code>{`// 1) @Component 계열 어노테이션으로 Bean 등록
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
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> @Component 계열 어노테이션</div>
            <p><strong>@Component</strong>는 범용, <strong>@Service</strong>는 비즈니스 로직,
            <strong>@Repository</strong>는 데이터 접근, <strong>@Controller</strong>는 웹 컨트롤러에 사용합니다.
            기능적 차이보다 의미적 구분을 위한 것입니다.</p>
          </div>

          <h2>5. 주입 방식 비교</h2>
          <table className="comparison-table">
            <thead>
              <tr><th>구분</th><th>생성자 주입</th><th>Setter 주입</th><th>필드 주입</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>불변성(final)</strong></td><td>O (보장)</td><td>X</td><td>X</td></tr>
              <tr><td><strong>필수 의존성</strong></td><td>컴파일 타임 체크</td><td>런타임 체크</td><td>런타임 체크</td></tr>
              <tr><td><strong>순환 참조 감지</strong></td><td>애플리케이션 시작 시</td><td>런타임 시</td><td>런타임 시</td></tr>
              <tr><td><strong>테스트 용이성</strong></td><td>높음 (new로 생성 가능)</td><td>보통</td><td>낮음 (리플렉션 필요)</td></tr>
              <tr><td><strong>코드량</strong></td><td>많음</td><td>보통</td><td>적음</td></tr>
              <tr><td><strong>Spring 권장</strong></td><td>권장 (Best Practice)</td><td>선택적 의존성에 사용</td><td>비권장</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>Lombok의 <code>@RequiredArgsConstructor</code>를 사용하면 생성자 주입 코드를 간결하게 작성할 수 있습니다.
            final 필드에 대한 생성자를 자동 생성해줍니다.</p>
          </div>

          <h2>6. DI의 장점</h2>
          <h3>테스트 용이성</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserServiceTest.java</span></div>
            <pre><code>{`// DI 덕분에 Mock 객체로 쉽게 테스트 가능
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
}`}</code></pre>
          </div>

          <h2>7. 실전 예제: 서비스 계층 DI</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ShoppingService.java</span></div>
            <pre><code>{`@Service
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
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <h3>DI 개념 체험하기</h3>
          <JavaCodeRunner defaultCode={`// DI(의존성 주입)의 핵심 개념을 순수 Java로 체험합니다

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
}`} title="DI(의존성 주입) 개념 체험" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>IoC와 DI의 관계를 설명하세요. IoC는 원칙이고 DI는 ___입니다.</li>
              <li>생성자 주입이 필드 주입보다 권장되는 이유 3가지를 설명하세요.</li>
              <li>위 코드 실행기에서 <code>KakaoSender</code> 구현체를 추가하고 테스트해보세요.</li>
              <li><code>@Autowired</code>가 생성자에서 생략 가능한 조건은 무엇인가요?</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP02') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP02')}>
              {isLessonCompleted('SP02') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/01"><i className="fas fa-arrow-left"></i> 이전: Spring Framework 소개</Link>
            <Link to="/spring/03">다음: Spring Bean과 컨테이너 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
