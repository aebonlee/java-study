import{u as n,r as t,j as e,L as r}from"./index-dMfRMsyn.js";import{J as c}from"./JavaCodeRunner-CH9PTPJs.js";function d(){const{completeLesson:s,isLessonCompleted:i}=n();return t.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 04"})]}),e.jsx("h1",{children:"Lesson 04. AOP (관점지향)"}),e.jsx("p",{children:"AOP의 개념과 용어를 이해하고, 로깅, 트랜잭션 등 횡단 관심사를 분리하는 방법을 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. AOP란?"}),e.jsxs("p",{children:["AOP(Aspect-Oriented Programming)는 ",e.jsx("strong",{children:"횡단 관심사(Cross-Cutting Concerns)"}),"를 분리하여 모듈화하는 프로그래밍 패러다임입니다. 로깅, 보안, 트랜잭션, 성능 측정 등 여러 모듈에 공통으로 적용되는 기능을 핵심 비즈니스 로직과 분리합니다."]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 횡단 관심사란?"]}),e.jsx("p",{children:"비즈니스 로직과 직접 관련 없지만 여러 모듈에 걸쳐 공통으로 필요한 기능입니다. 예: 모든 서비스 메서드에 로깅 추가, 모든 DB 작업에 트랜잭션 적용 등. AOP 없이는 각 메서드에 동일한 코드를 반복 작성해야 합니다."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," WithoutAOP.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ AOP 없이: 모든 메서드에 로깅/트랜잭션 코드 중복
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
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," WithAOP.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ✅ AOP 적용 후: 핵심 로직만 깔끔하게 작성
@Service
@Transactional  // AOP로 트랜잭션 자동 처리
public class OrderService {
    public void createOrder(Order order) {
        // 핵심 비즈니스 로직만 집중!
        orderRepository.save(order);
    }
}
// 로깅, 트랜잭션은 Aspect가 자동 처리`})})]}),e.jsx("h2",{children:"2. AOP 핵심 용어"}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"용어"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Aspect"})}),e.jsx("td",{children:"횡단 관심사를 모듈화한 것"}),e.jsx("td",{children:"LoggingAspect 클래스"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Advice"})}),e.jsx("td",{children:"실제 수행할 동작 (메서드)"}),e.jsx("td",{children:"로그를 출력하는 메서드"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"JoinPoint"})}),e.jsx("td",{children:"Advice가 적용될 수 있는 지점"}),e.jsx("td",{children:"메서드 호출 시점"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Pointcut"})}),e.jsx("td",{children:"JoinPoint 중 Advice가 적용될 대상 선별"}),e.jsx("td",{children:"execution(* com.example.service.*.*(..))"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Target"})}),e.jsx("td",{children:"Advice가 적용되는 대상 객체"}),e.jsx("td",{children:"OrderService"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Proxy"})}),e.jsx("td",{children:"AOP가 적용된 대리 객체"}),e.jsx("td",{children:"Spring이 생성하는 프록시"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Weaving"})}),e.jsx("td",{children:"Aspect를 Target에 적용하는 과정"}),e.jsx("td",{children:"런타임 프록시 생성"})]})]})]}),e.jsx("h2",{children:"3. Advice 종류"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AdviceTypes.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Aspect
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
}`})})]}),e.jsx("h2",{children:"4. Pointcut 표현식"}),e.jsx("p",{children:"Pointcut은 어떤 메서드에 Advice를 적용할지 지정하는 표현식입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PointcutExpressions.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Aspect
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
}`})})]}),e.jsx("h2",{children:"5. 실전: 로깅 AOP 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ExecutionTimeAspect.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Aspect
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
}`})})]}),e.jsx("h2",{children:"6. 실전: 트랜잭션 AOP"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," TransactionalExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Spring의 @Transactional은 AOP로 동작합니다
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
}`})})]}),e.jsx("h2",{children:"7. AOP vs 인터셉터 비교"}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"Spring AOP"}),e.jsx("th",{children:"HandlerInterceptor"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"적용 범위"})}),e.jsx("td",{children:"모든 Spring Bean 메서드"}),e.jsx("td",{children:"Controller의 요청 처리만"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"적용 대상"})}),e.jsx("td",{children:"Service, Repository 등"}),e.jsx("td",{children:"HTTP 요청/응답"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"파라미터 접근"})}),e.jsx("td",{children:"메서드 파라미터"}),e.jsx("td",{children:"HttpServletRequest/Response"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"구현 방식"})}),e.jsx("td",{children:"프록시 기반"}),e.jsx("td",{children:"Servlet Filter Chain"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"적합한 용도"})}),e.jsx("td",{children:"로깅, 트랜잭션, 보안"}),e.jsx("td",{children:"인증, 로깅, CORS"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요."})]}),e.jsx("h3",{children:"프록시 패턴 개념 체험"}),e.jsx("p",{children:"Spring AOP는 프록시 패턴을 기반으로 동작합니다. 아래에서 그 원리를 확인해보세요."}),e.jsx(c,{defaultCode:`// AOP의 핵심: 프록시 패턴을 이용한 횡단 관심사 분리

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
}`,title:"프록시 패턴으로 이해하는 AOP 원리"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"AOP의 핵심 용어(Aspect, Advice, Pointcut, JoinPoint)를 각각 설명하세요."}),e.jsxs("li",{children:["@Around Advice에서 ",e.jsx("code",{children:"ProceedingJoinPoint.proceed()"}),"를 호출하지 않으면 어떻게 되나요?"]}),e.jsxs("li",{children:["다음 Pointcut 표현식의 의미를 설명하세요: ",e.jsx("code",{children:"execution(* com.example..*Service.find*(..))"})]}),e.jsx("li",{children:"@Transactional이 AOP로 동작하기 때문에 같은 클래스 내부 호출에서 동작하지 않는 이유를 설명하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${i("SP04")?"btn-primary":"btn-accent"}`,onClick:()=>s("SP04"),children:i("SP04")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/spring/03",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Spring Bean과 컨테이너"]}),e.jsxs(r,{to:"/spring/05",children:["다음: Spring MVC 기초 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
