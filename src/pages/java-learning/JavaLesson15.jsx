import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson15() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 15</span>
          </div>
          <h1>Chapter 15. Spring Framework 기초</h1>
          <p>IoC, DI, AOP 등 Spring의 핵심 개념을 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. Spring Framework란?</h2>
          <p>Spring은 Java 엔터프라이즈 애플리케이션 개발을 위한 <strong>경량 프레임워크</strong>입니다. 복잡한 Java EE를 대체하여, 간결하고 테스트 가능한 코드 작성을 돕습니다.</p>

          <h2>2. IoC (제어의 역전)</h2>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> IoC 컨테이너</div>
            <p>객체의 생성과 의존성 관리를 개발자가 아닌 <strong>프레임워크(컨테이너)</strong>가 담당합니다. 객체 간 결합도를 낮추어 유연한 설계가 가능합니다.</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> IoC 비교</span></div>
            <pre><code>{`// IoC 없이 (직접 생성 - 강한 결합)
public class OrderService {
    private PaymentService payment = new CreditCardPayment(); // 직접 생성
}

// IoC 적용 (컨테이너가 주입 - 느슨한 결합)
public class OrderService {
    private final PaymentService payment;  // 인터페이스에 의존

    public OrderService(PaymentService payment) {  // 외부에서 주입
        this.payment = payment;
    }
}`}</code></pre>
          </div>

          <h2>3. DI (의존성 주입)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> DependencyInjection.java</span></div>
            <pre><code>{`// 1. 생성자 주입 (추천!)
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
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 생성자 주입을 추천하는 이유</div>
            <p>불변성 보장(final), 순환 참조 방지, 테스트 용이성, 필수 의존성 명시</p>
          </div>

          <h2>4. 스테레오타입 어노테이션</h2>
          <table>
            <thead><tr><th>어노테이션</th><th>용도</th><th>레이어</th></tr></thead>
            <tbody>
              <tr><td><code>@Component</code></td><td>일반 Bean 등록</td><td>공통</td></tr>
              <tr><td><code>@Controller</code></td><td>웹 요청 처리</td><td>프레젠테이션</td></tr>
              <tr><td><code>@Service</code></td><td>비즈니스 로직</td><td>서비스</td></tr>
              <tr><td><code>@Repository</code></td><td>데이터 접근</td><td>데이터</td></tr>
              <tr><td><code>@Configuration</code></td><td>설정 클래스</td><td>설정</td></tr>
            </tbody>
          </table>

          <h2>5. Bean 스코프</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> BeanScope.java</span></div>
            <pre><code>{`@Component
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
public class SessionBean { }`}</code></pre>
          </div>

          <h2>6. AOP (관점 지향 프로그래밍)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> LoggingAspect.java</span></div>
            <pre><code>{`@Aspect
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
}`}</code></pre>
          </div>

          <h2>7. Java Config</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> AppConfig.java</span></div>
            <pre><code>{`@Configuration
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
UserService userService = ctx.getBean(UserService.class);`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>인터페이스와 DI를 활용하여 알림 서비스(Email, SMS)를 구현하세요.</li>
              <li>AOP로 모든 서비스 메서드의 실행 시간을 측정하는 Aspect를 작성하세요.</li>
              <li>@Configuration과 @Bean으로 직접 빈을 등록하는 설정 클래스를 만드세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('15') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('15')}>
              {isLessonCompleted('15') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/14"><i className="fas fa-arrow-left"></i> 이전: JSP와 MVC</Link>
            <Link to="/java-learning/16">다음: Spring Boot <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
