import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson03() {
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
            <span>Lesson 03</span>
          </div>
          <h1>Lesson 03. Spring Bean과 컨테이너</h1>
          <p>ApplicationContext, Bean 등록 방법, 스코프, 생명주기, 컴포넌트 스캔을 상세히 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. ApplicationContext</h2>
          <p>
            Spring IoC 컨테이너는 Bean의 생성, 설정, 관리를 담당합니다. 핵심 인터페이스는
            <code>BeanFactory</code>와 <code>ApplicationContext</code>입니다.
          </p>

          <table className="comparison-table">
            <thead>
              <tr><th>구분</th><th>BeanFactory</th><th>ApplicationContext</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Bean 로딩</strong></td><td>Lazy Loading (요청 시 생성)</td><td>Eager Loading (시작 시 생성)</td></tr>
              <tr><td><strong>국제화(i18n)</strong></td><td>미지원</td><td>지원 (MessageSource)</td></tr>
              <tr><td><strong>이벤트 발행</strong></td><td>미지원</td><td>지원 (ApplicationEvent)</td></tr>
              <tr><td><strong>AOP 지원</strong></td><td>제한적</td><td>완전 지원</td></tr>
              <tr><td><strong>사용 권장</strong></td><td>리소스 제한 환경</td><td>일반적인 애플리케이션 (권장)</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ApplicationContextExample.java</span></div>
            <pre><code>{`// ApplicationContext 생성 방법들
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
UserService namedBean = context.getBean("userService", UserService.class);`}</code></pre>
          </div>

          <h2>2. Bean 등록 방법</h2>

          <h3>@Component 스캔 방식</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ComponentScanRegistration.java</span></div>
            <pre><code>{`// @Component 계열 어노테이션 사용
@Component       // 범용 컴포넌트
public class UtilHelper { }

@Service         // 비즈니스 로직 계층
public class OrderService { }

@Repository      // 데이터 접근 계층 (예외 변환 기능 추가)
public class OrderRepository { }

@Controller      // 웹 MVC 컨트롤러
public class OrderController { }`}</code></pre>
          </div>

          <h3>@Bean 메서드 방식 (Java Config)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> AppConfig.java</span></div>
            <pre><code>{`@Configuration
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
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p><strong>@Component</strong>는 개발자가 작성한 클래스에, <strong>@Bean</strong>은 외부 라이브러리 클래스를
            Bean으로 등록할 때 사용합니다. 외부 라이브러리 클래스에는 어노테이션을 붙일 수 없으므로 @Bean을 사용합니다.</p>
          </div>

          <h2>3. Bean 스코프</h2>
          <p>Bean 스코프는 Spring 컨테이너가 Bean 인스턴스를 생성하고 관리하는 범위를 정의합니다.</p>

          <table className="comparison-table">
            <thead>
              <tr><th>스코프</th><th>설명</th><th>생성 시점</th><th>사용 예</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>singleton</strong></td><td>컨테이너당 1개 (기본값)</td><td>컨테이너 시작 시</td><td>서비스, 리포지토리</td></tr>
              <tr><td><strong>prototype</strong></td><td>요청마다 새 인스턴스</td><td>getBean() 호출 시</td><td>상태를 가진 Bean</td></tr>
              <tr><td><strong>request</strong></td><td>HTTP 요청마다 1개</td><td>요청 시작 시</td><td>요청별 데이터</td></tr>
              <tr><td><strong>session</strong></td><td>HTTP 세션마다 1개</td><td>세션 생성 시</td><td>로그인 사용자 정보</td></tr>
              <tr><td><strong>application</strong></td><td>ServletContext당 1개</td><td>앱 시작 시</td><td>전역 설정</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> BeanScopes.java</span></div>
            <pre><code>{`// Singleton (기본값) - 가장 많이 사용
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
}`}</code></pre>
          </div>

          <h2>4. Bean 생명주기</h2>
          <p>Spring Bean은 다음 순서로 생명주기가 관리됩니다:</p>
          <ol>
            <li><strong>인스턴스 생성</strong> - 컨테이너가 Bean 객체를 생성</li>
            <li><strong>의존성 주입</strong> - @Autowired 등으로 의존 객체 주입</li>
            <li><strong>초기화 콜백</strong> - @PostConstruct 메서드 실행</li>
            <li><strong>사용</strong> - 애플리케이션에서 Bean 사용</li>
            <li><strong>소멸 콜백</strong> - @PreDestroy 메서드 실행</li>
            <li><strong>스프링 종료</strong> - 컨테이너 종료</li>
          </ol>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> BeanLifecycle.java</span></div>
            <pre><code>{`@Component
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
}`}</code></pre>
          </div>

          <h2>5. 컴포넌트 스캔 (@ComponentScan)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ComponentScanConfig.java</span></div>
            <pre><code>{`@Configuration
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
}`}</code></pre>
          </div>

          <h2>6. Bean 충돌 해결</h2>
          <p>같은 타입의 Bean이 여러 개 등록되면 충돌이 발생합니다. 이를 해결하는 방법:</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> BeanConflictResolution.java</span></div>
            <pre><code>{`// 인터페이스
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
}`}</code></pre>
          </div>

          <h2>7. 프로파일 (@Profile)</h2>
          <p>환경(개발, 테스트, 운영)에 따라 다른 Bean을 등록할 수 있습니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ProfileConfig.java</span></div>
            <pre><code>{`// 개발 환경용 DataSource
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
// spring.profiles.active=dev`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <h3>Singleton vs Prototype 개념 체험</h3>
          <JavaCodeRunner defaultCode={`// Bean 스코프: Singleton vs Prototype 개념 체험

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
}`} title="Singleton vs Prototype 스코프 비교" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>BeanFactory와 ApplicationContext의 차이점 3가지를 설명하세요.</li>
              <li>@Component와 @Bean의 사용 시점을 비교하세요.</li>
              <li>singleton 스코프에서 주의해야 할 상태 관리 문제를 설명하세요.</li>
              <li>@PostConstruct와 @PreDestroy의 실행 시점을 생명주기 순서에서 설명하세요.</li>
              <li>같은 타입의 Bean이 2개 등록되었을 때 충돌을 해결하는 3가지 방법을 쓰세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP03') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP03')}>
              {isLessonCompleted('SP03') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/02"><i className="fas fa-arrow-left"></i> 이전: IoC와 DI</Link>
            <Link to="/spring/04">다음: AOP (관점지향) <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
