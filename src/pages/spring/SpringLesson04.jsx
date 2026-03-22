import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson04() {
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
            <span>Lesson 04</span>
          </div>
          <h1>Lesson 04. AOP (관점지향)</h1>
          <p>AOP의 개념과 용어를 이해하고, 로깅, 트랜잭션 등 횡단 관심사를 분리하는 방법을 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. AOP란?</h2>
          <p>
            AOP(Aspect-Oriented Programming)는 <strong>횡단 관심사(Cross-Cutting Concerns)</strong>를 분리하여
            모듈화하는 프로그래밍 패러다임입니다. 로깅, 보안, 트랜잭션, 성능 측정 등 여러 모듈에 공통으로 적용되는
            기능을 핵심 비즈니스 로직과 분리합니다.
          </p>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 횡단 관심사란?</div>
            <p>비즈니스 로직과 직접 관련 없지만 여러 모듈에 걸쳐 공통으로 필요한 기능입니다.
            예: 모든 서비스 메서드에 로깅 추가, 모든 DB 작업에 트랜잭션 적용 등.
            AOP 없이는 각 메서드에 동일한 코드를 반복 작성해야 합니다.</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> WithoutAOP.java</span></div>
            <pre><code>{`// ❌ AOP 없이: 모든 메서드에 로깅/트랜잭션 코드 중복
public class OrderService {
    public void createOrder(Order order) {
        long start = System.currentTimeMillis();    // 중복!
        log.info("createOrder 시작");               // 중복!
        try {
            transaction.begin();                     // 중복!

            // === 핵심 비즈니스 로직 ===
            orderRepository.save(order);

            transaction.commit();                    // 중복!
        } catch (Exception e) {
            transaction.rollback();                  // 중복!
            throw e;
        } finally {
            long elapsed = System.currentTimeMillis() - start;
            log.info("createOrder 종료: " + elapsed + "ms");  // 중복!
        }
    }
    // cancelOrder, updateOrder도 같은 패턴 반복...
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> WithAOP.java</span></div>
            <pre><code>{`// ✅ AOP 적용 후: 핵심 로직만 깔끔하게 작성
@Service
@Transactional  // AOP로 트랜잭션 자동 처리
public class OrderService {
    public void createOrder(Order order) {
        // 핵심 비즈니스 로직만 집중!
        orderRepository.save(order);
    }
}
// 로깅, 트랜잭션은 Aspect가 자동 처리`}</code></pre>
          </div>

          <h2>2. AOP 핵심 용어</h2>
          <table className="comparison-table">
            <thead>
              <tr><th>용어</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Aspect</strong></td><td>횡단 관심사를 모듈화한 것</td><td>LoggingAspect 클래스</td></tr>
              <tr><td><strong>Advice</strong></td><td>실제 수행할 동작 (메서드)</td><td>로그를 출력하는 메서드</td></tr>
              <tr><td><strong>JoinPoint</strong></td><td>Advice가 적용될 수 있는 지점</td><td>메서드 호출 시점</td></tr>
              <tr><td><strong>Pointcut</strong></td><td>JoinPoint 중 Advice가 적용될 대상 선별</td><td>execution(* com.example.service.*.*(..))</td></tr>
              <tr><td><strong>Target</strong></td><td>Advice가 적용되는 대상 객체</td><td>OrderService</td></tr>
              <tr><td><strong>Proxy</strong></td><td>AOP가 적용된 대리 객체</td><td>Spring이 생성하는 프록시</td></tr>
              <tr><td><strong>Weaving</strong></td><td>Aspect를 Target에 적용하는 과정</td><td>런타임 프록시 생성</td></tr>
            </tbody>
          </table>

          <h2>3. Advice 종류</h2>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> AdviceTypes.java</span></div>
            <pre><code>{`@Aspect
@Component
public class LoggingAspect {

    // 1) @Before: 메서드 실행 전
    @Before("execution(* com.example.service.*.*(..))")
    public void beforeAdvice(JoinPoint joinPoint) {
        log.info("[Before] {} 호출", joinPoint.getSignature().getName());
    }

    // 2) @After: 메서드 실행 후 (성공/실패 무관)
    @After("execution(* com.example.service.*.*(..))")
    public void afterAdvice(JoinPoint joinPoint) {
        log.info("[After] {} 완료", joinPoint.getSignature().getName());
    }

    // 3) @AfterReturning: 정상 반환 후
    @AfterReturning(pointcut = "execution(* com.example.service.*.*(..))",
                    returning = "result")
    public void afterReturningAdvice(JoinPoint joinPoint, Object result) {
        log.info("[AfterReturning] {} 반환값: {}",
            joinPoint.getSignature().getName(), result);
    }

    // 4) @AfterThrowing: 예외 발생 후
    @AfterThrowing(pointcut = "execution(* com.example.service.*.*(..))",
                   throwing = "ex")
    public void afterThrowingAdvice(JoinPoint joinPoint, Exception ex) {
        log.error("[AfterThrowing] {} 예외: {}",
            joinPoint.getSignature().getName(), ex.getMessage());
    }

    // 5) @Around: 메서드 전/후 모두 제어 (가장 강력)
    @Around("execution(* com.example.service.*.*(..))")
    public Object aroundAdvice(ProceedingJoinPoint pjp) throws Throwable {
        long start = System.currentTimeMillis();
        log.info("[Around] {} 시작", pjp.getSignature().getName());
        try {
            Object result = pjp.proceed();  // 실제 메서드 실행
            return result;
        } finally {
            long elapsed = System.currentTimeMillis() - start;
            log.info("[Around] {} 종료 ({}ms)",
                pjp.getSignature().getName(), elapsed);
        }
    }
}`}</code></pre>
          </div>

          <h2>4. Pointcut 표현식</h2>
          <p>Pointcut은 어떤 메서드에 Advice를 적용할지 지정하는 표현식입니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PointcutExpressions.java</span></div>
            <pre><code>{`@Aspect
@Component
public class PointcutExamples {

    // execution: 메서드 실행 시점 매칭
    // 패턴: execution(접근제어자 반환타입 패키지.클래스.메서드(파라미터))

    // 모든 public 메서드
    @Pointcut("execution(public * *(..))")
    public void allPublicMethods() {}

    // service 패키지의 모든 메서드
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void serviceLayer() {}

    // Service로 끝나는 클래스의 모든 메서드
    @Pointcut("execution(* com.example..*Service.*(..))")
    public void allServices() {}

    // 특정 어노테이션이 붙은 메서드
    @Pointcut("@annotation(com.example.annotation.Loggable)")
    public void loggableMethods() {}

    // 특정 어노테이션이 붙은 클래스의 모든 메서드
    @Pointcut("@within(org.springframework.stereotype.Service)")
    public void withinServices() {}

    // Pointcut 조합 (AND, OR, NOT)
    @Around("serviceLayer() && !execution(* *.get*(..))")
    public Object aroundNonGetters(ProceedingJoinPoint pjp) throws Throwable {
        // service 계층의 get으로 시작하지 않는 메서드에만 적용
        return pjp.proceed();
    }
}`}</code></pre>
          </div>

          <h2>5. 실전: 로깅 AOP 구현</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ExecutionTimeAspect.java</span></div>
            <pre><code>{`@Aspect
@Component
@Slf4j
public class ExecutionTimeAspect {

    @Around("@annotation(com.example.annotation.MeasureTime)")
    public Object measureExecutionTime(ProceedingJoinPoint pjp)
            throws Throwable {
        String methodName = pjp.getSignature().toShortString();
        Object[] args = pjp.getArgs();

        log.info("▶ {} 실행 시작 | 파라미터: {}", methodName, Arrays.toString(args));
        long startTime = System.nanoTime();

        try {
            Object result = pjp.proceed();
            long elapsed = (System.nanoTime() - startTime) / 1_000_000;
            log.info("◀ {} 실행 완료 | 소요시간: {}ms | 결과: {}",
                methodName, elapsed, result);
            return result;
        } catch (Exception e) {
            long elapsed = (System.nanoTime() - startTime) / 1_000_000;
            log.error("✖ {} 실행 실패 | 소요시간: {}ms | 예외: {}",
                methodName, elapsed, e.getMessage());
            throw e;
        }
    }
}

// 커스텀 어노테이션 정의
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface MeasureTime {}

// 사용 예
@Service
public class ProductService {
    @MeasureTime  // 이 어노테이션만 붙이면 실행시간 자동 측정!
    public Product findProduct(Long id) {
        return productRepository.findById(id).orElseThrow();
    }
}`}</code></pre>
          </div>

          <h2>6. 실전: 트랜잭션 AOP</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> TransactionalExample.java</span></div>
            <pre><code>{`// Spring의 @Transactional은 AOP로 동작합니다
@Service
public class TransferService {

    @Transactional  // AOP 프록시가 트랜잭션 관리
    public void transfer(Long fromId, Long toId, int amount) {
        Account from = accountRepository.findById(fromId);
        Account to = accountRepository.findById(toId);

        from.withdraw(amount);   // 출금
        to.deposit(amount);      // 입금

        accountRepository.save(from);
        accountRepository.save(to);
        // 예외 발생 시 자동으로 rollback!
    }

    @Transactional(readOnly = true)  // 읽기 전용 최적화
    public Account getAccount(Long id) {
        return accountRepository.findById(id);
    }

    @Transactional(
        propagation = Propagation.REQUIRES_NEW,  // 새 트랜잭션 생성
        isolation = Isolation.SERIALIZABLE,       // 격리 수준
        timeout = 30,                             // 30초 타임아웃
        rollbackFor = BusinessException.class     // 특정 예외에 롤백
    )
    public void criticalOperation() {
        // 중요한 작업...
    }
}`}</code></pre>
          </div>

          <h2>7. AOP vs 인터셉터 비교</h2>
          <table className="comparison-table">
            <thead>
              <tr><th>구분</th><th>Spring AOP</th><th>HandlerInterceptor</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>적용 범위</strong></td><td>모든 Spring Bean 메서드</td><td>Controller의 요청 처리만</td></tr>
              <tr><td><strong>적용 대상</strong></td><td>Service, Repository 등</td><td>HTTP 요청/응답</td></tr>
              <tr><td><strong>파라미터 접근</strong></td><td>메서드 파라미터</td><td>HttpServletRequest/Response</td></tr>
              <tr><td><strong>구현 방식</strong></td><td>프록시 기반</td><td>Servlet Filter Chain</td></tr>
              <tr><td><strong>적합한 용도</strong></td><td>로깅, 트랜잭션, 보안</td><td>인증, 로깅, CORS</td></tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <h3>프록시 패턴 개념 체험</h3>
          <p>Spring AOP는 프록시 패턴을 기반으로 동작합니다. 아래에서 그 원리를 확인해보세요.</p>

          <JavaCodeRunner defaultCode={`// AOP의 핵심: 프록시 패턴을 이용한 횡단 관심사 분리

interface OrderService {
    void createOrder(String item);
    String getOrder(int id);
}

// 실제 비즈니스 로직 (Target)
class RealOrderService implements OrderService {
    public void createOrder(String item) {
        System.out.println("  주문 생성: " + item);
    }
    public String getOrder(int id) {
        System.out.println("  주문 조회: #" + id);
        return "주문-" + id;
    }
}

// AOP 프록시 (로깅 + 실행시간 측정)
class OrderServiceProxy implements OrderService {
    private final OrderService target;

    public OrderServiceProxy(OrderService target) {
        this.target = target;
    }

    public void createOrder(String item) {
        long start = System.nanoTime();
        System.out.println("[Before] createOrder 호출");
        try {
            target.createOrder(item);  // 실제 메서드 실행
            System.out.println("[AfterReturning] 정상 완료");
        } catch (Exception e) {
            System.out.println("[AfterThrowing] 예외: " + e.getMessage());
            throw e;
        } finally {
            long ms = (System.nanoTime() - start) / 1000000;
            System.out.println("[After] 소요시간: " + ms + "ms");
        }
    }

    public String getOrder(int id) {
        System.out.println("[Before] getOrder 호출");
        String result = target.getOrder(id);
        System.out.println("[AfterReturning] 반환값: " + result);
        return result;
    }
}

public class Main {
    public static void main(String[] args) {
        // Spring이 자동으로 프록시를 생성해줌
        OrderService service = new OrderServiceProxy(new RealOrderService());

        System.out.println("=== 주문 생성 ===");
        service.createOrder("노트북");

        System.out.println("\\n=== 주문 조회 ===");
        service.getOrder(42);

        System.out.println("\\n→ Spring AOP는 이 프록시를 자동 생성합니다!");
    }
}`} title="프록시 패턴으로 이해하는 AOP 원리" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>AOP의 핵심 용어(Aspect, Advice, Pointcut, JoinPoint)를 각각 설명하세요.</li>
              <li>@Around Advice에서 <code>ProceedingJoinPoint.proceed()</code>를 호출하지 않으면 어떻게 되나요?</li>
              <li>다음 Pointcut 표현식의 의미를 설명하세요: <code>execution(* com.example..*Service.find*(..))</code></li>
              <li>@Transactional이 AOP로 동작하기 때문에 같은 클래스 내부 호출에서 동작하지 않는 이유를 설명하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP04') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP04')}>
              {isLessonCompleted('SP04') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/03"><i className="fas fa-arrow-left"></i> 이전: Spring Bean과 컨테이너</Link>
            <Link to="/spring/05">다음: Spring MVC 기초 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
