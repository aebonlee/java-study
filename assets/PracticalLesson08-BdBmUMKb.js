import{u as i,r as c,j as e,L as r}from"./index-BAKqABqq.js";function t(){const{completeLesson:l,isLessonCompleted:s}=i();return c.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/practical",children:"실무 Java"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 08"})]}),e.jsx("h1",{children:"Lesson 08. 로깅과 디버깅"}),e.jsx("p",{children:"SLF4J, Logback, 로그 레벨/패턴, MDC, 디버깅 전략을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 로깅이란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"로깅(Logging)"}),"은 애플리케이션 실행 중 발생하는 이벤트, 상태 변화, 오류 등을 체계적으로 기록하는 행위입니다. 운영 환경에서 문제가 발생했을 때, 로그는 유일한 단서가 됩니다.",e.jsx("code",{children:"System.out.println"}),"만으로는 실무 환경의 요구사항을 충족할 수 없습니다."]}),e.jsx("h3",{children:"System.out.println vs 로깅 프레임워크"}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"System.out.println"}),e.jsx("th",{children:"로깅 프레임워크 (SLF4J + Logback)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"출력 대상"})}),e.jsx("td",{children:"콘솔(stdout)만 가능"}),e.jsx("td",{children:"콘솔, 파일, DB, 원격 서버 등 다양"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"레벨 구분"})}),e.jsx("td",{children:"없음 (모두 동일)"}),e.jsx("td",{children:"TRACE, DEBUG, INFO, WARN, ERROR"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"성능"})}),e.jsx("td",{children:"I/O 블로킹, 느림"}),e.jsx("td",{children:"비동기 로깅, 버퍼링 지원"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"포맷"})}),e.jsx("td",{children:"수동 포맷팅"}),e.jsx("td",{children:"타임스탬프, 스레드명, 클래스명 자동 포함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"제어"})}),e.jsx("td",{children:"코드 수정 필요"}),e.jsx("td",{children:"설정 파일로 동적 제어"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"파일 관리"})}),e.jsx("td",{children:"불가능"}),e.jsx("td",{children:"자동 롤링, 압축, 보관 기간 설정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"운영 환경"})}),e.jsx("td",{children:"절대 사용 금지"}),e.jsx("td",{children:"표준 방식"})]})]})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," 주의"]}),e.jsxs("p",{children:[e.jsx("code",{children:"System.out.println"}),"은 학습용으로만 사용하세요. 실무 프로젝트에서는 반드시 로깅 프레임워크를 사용해야 합니다. println은 성능 저하, 로그 레벨 미지원, 파일 출력 불가 등의 문제가 있습니다. 코드 리뷰에서 println이 발견되면 즉시 수정 대상입니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 로깅이 필요한 이유"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Bad: System.out.println
public class OrderService {
    public void createOrder(Order order) {
        System.out.println("주문 생성 시작");      // 언제? 누가? 어떤 주문?
        System.out.println("주문 ID: " + order.getId());
        System.out.println("주문 생성 완료");
        // 운영 서버에서는 이 출력을 볼 수 없음!
    }
}

// Good: 로깅 프레임워크 사용
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class OrderService {
    private static final Logger log = LoggerFactory.getLogger(OrderService.class);

    public void createOrder(Order order) {
        log.info("주문 생성 시작 - 고객: {}, 상품수: {}",
                 order.getCustomerName(), order.getItemCount());

        try {
            // 주문 처리 로직
            log.debug("재고 확인 중 - 상품ID: {}", order.getProductId());
            // ...
            log.info("주문 생성 완료 - 주문번호: {}", order.getId());
        } catch (Exception e) {
            log.error("주문 생성 실패 - 고객: {}", order.getCustomerName(), e);
            throw e;
        }
    }
}`})})]}),e.jsx("h2",{children:"2. SLF4J (Simple Logging Facade for Java)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"SLF4J"}),"는 다양한 로깅 프레임워크(Logback, Log4j2, java.util.logging 등)에 대한",e.jsx("strong",{children:"추상화 계층(Facade)"}),"을 제공합니다. 코드에서는 SLF4J API만 사용하고, 실제 로깅 구현체는 배포 시 선택할 수 있습니다."]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 파사드(Facade) 패턴"]}),e.jsxs("p",{children:["SLF4J는 GoF 디자인 패턴 중 ",e.jsx("strong",{children:"파사드 패턴"}),"의 대표적인 예입니다. 복잡한 로깅 구현체들의 인터페이스를 단순한 API 하나로 통일합니다. 이를 통해 로깅 구현체를 교체해도 애플리케이션 코드는 전혀 변경할 필요가 없습니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SLF4J 아키텍처"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// SLF4J 구조
//
//  애플리케이션 코드
//        ↓
//  SLF4J API (slf4j-api.jar)     ← 인터페이스 (코드에서 사용)
//        ↓
//  SLF4J 바인딩                   ← 브릿지
//        ↓
//  로깅 구현체                    ← 실제 로그 처리
//   - Logback (기본 권장)
//   - Log4j2
//   - java.util.logging

// Logger 선언 (가장 기본적인 사용법)
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class UserService {
    // 클래스당 하나의 Logger 선언 (관례)
    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    // Lombok 사용 시 어노테이션으로 간편하게
    // @Slf4j   ← 이 한 줄로 위 코드와 동일
    // public class UserService { ... }

    public User findUser(Long id) {
        log.debug("사용자 조회 시작 - ID: {}", id);

        User user = userRepository.findById(id)
            .orElseThrow(() -> {
                log.warn("사용자를 찾을 수 없음 - ID: {}", id);
                return new UserNotFoundException(id);
            });

        log.info("사용자 조회 완료 - ID: {}, 이름: {}", id, user.getName());
        return user;
    }
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle - 의존성 설정"]})}),e.jsx("pre",{children:e.jsx("code",{children:`dependencies {
    // Spring Boot Starter에 SLF4J + Logback이 기본 포함
    implementation 'org.springframework.boot:spring-boot-starter'

    // 또는 직접 추가 (Spring Boot 미사용 시)
    implementation 'org.slf4j:slf4j-api:2.0.9'
    implementation 'ch.qos.logback:logback-classic:1.4.11'

    // Lombok 사용 시 (@Slf4j 어노테이션)
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
}

// 다른 로깅 라이브러리 충돌 방지
configurations.all {
    exclude group: 'commons-logging', module: 'commons-logging'
    exclude group: 'log4j', module: 'log4j'
}`})})]}),e.jsx("h3",{children:"SLF4J 플레이스홀더"}),e.jsxs("p",{children:["SLF4J는 ",e.jsx("code",{children:"{}"})," 플레이스홀더를 사용하여 문자열 연결 비용을 최소화합니다. 로그 레벨에 의해 출력되지 않는 메시지는 문자열 연결 자체가 발생하지 않습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 플레이스홀더 사용법"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Bad: 문자열 연결 (로그 레벨 무관하게 항상 연결 비용 발생)
log.debug("사용자 조회 - ID: " + userId + ", 이름: " + userName);

// Good: 플레이스홀더 사용 (DEBUG가 비활성이면 연결하지 않음)
log.debug("사용자 조회 - ID: {}, 이름: {}", userId, userName);

// 3개 이상 파라미터는 배열 또는 가변인자
log.info("주문 처리 - 고객: {}, 상품: {}, 수량: {}, 금액: {}",
         customer, product, quantity, amount);

// 예외는 마지막 인자로 전달 (스택트레이스 자동 출력)
try {
    processPayment(order);
} catch (PaymentException e) {
    log.error("결제 실패 - 주문번호: {}, 금액: {}", orderId, amount, e);
    // {} 플레이스홀더가 2개이므로 orderId, amount가 매핑되고
    // 마지막 Exception e는 스택트레이스로 출력됨
}`})})]}),e.jsx("h2",{children:"3. 로그 레벨"}),e.jsx("p",{children:"로그 레벨은 메시지의 중요도를 나타냅니다. 설정된 레벨 이상의 로그만 출력되므로, 운영 환경에서는 INFO 이상만, 개발 환경에서는 DEBUG까지 출력하는 식으로 제어합니다."}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"레벨"}),e.jsx("th",{children:"우선순위"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"사용 시나리오"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{color:"#6c757d"},children:"TRACE"})}),e.jsx("td",{children:"가장 낮음"}),e.jsx("td",{children:"매우 상세한 디버깅 정보"}),e.jsx("td",{children:"메서드 진입/종료, 변수 상태, 루프 반복 추적"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{color:"#17a2b8"},children:"DEBUG"})}),e.jsx("td",{children:"낮음"}),e.jsx("td",{children:"개발 시 디버깅 정보"}),e.jsx("td",{children:"쿼리 파라미터, 중간 계산값, 분기 조건"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{color:"#28a745"},children:"INFO"})}),e.jsx("td",{children:"보통"}),e.jsx("td",{children:"주요 비즈니스 이벤트"}),e.jsx("td",{children:"서비스 시작/종료, 주문 완료, 배치 결과"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{color:"#ffc107"},children:"WARN"})}),e.jsx("td",{children:"높음"}),e.jsx("td",{children:"잠재적 문제 상황"}),e.jsx("td",{children:"재시도 발생, 사용 중단 API 호출, 임계치 근접"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{style:{color:"#dc3545"},children:"ERROR"})}),e.jsx("td",{children:"가장 높음"}),e.jsx("td",{children:"오류 발생 (즉시 대응 필요)"}),e.jsx("td",{children:"결제 실패, DB 연결 끊김, 필수 외부 API 오류"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 로그 레벨별 사용 예시"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Slf4j
@Service
public class PaymentService {

    public PaymentResult processPayment(PaymentRequest request) {
        // TRACE: 매우 상세한 흐름 추적 (운영에서는 거의 사용 안 함)
        log.trace("processPayment() 진입 - request: {}", request);

        // DEBUG: 개발 중 확인이 필요한 정보
        log.debug("결제 요청 상세 - 카드번호 뒷자리: {}, 할부: {}개월",
                  request.getCardLast4(), request.getInstallment());

        // INFO: 비즈니스적으로 의미 있는 이벤트
        log.info("결제 처리 시작 - 주문번호: {}, 금액: {}원",
                 request.getOrderId(), request.getAmount());

        try {
            PaymentResult result = paymentGateway.charge(request);

            if (result.isRetried()) {
                // WARN: 정상이지만 주의가 필요한 상황
                log.warn("결제 재시도 발생 - 주문번호: {}, 시도횟수: {}",
                         request.getOrderId(), result.getRetryCount());
            }

            log.info("결제 완료 - 주문번호: {}, 승인번호: {}",
                     request.getOrderId(), result.getApprovalNo());
            return result;

        } catch (PaymentTimeoutException e) {
            // ERROR: 즉시 대응이 필요한 오류
            log.error("결제 타임아웃 - 주문번호: {}, PG사: {}",
                      request.getOrderId(), request.getPgProvider(), e);
            throw e;
        } catch (InsufficientBalanceException e) {
            // WARN: 사용자 실수로 인한 실패 (시스템 오류 아님)
            log.warn("잔액 부족 - 주문번호: {}, 요청금액: {}",
                     request.getOrderId(), request.getAmount());
            throw e;
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 로그 레벨 선택 기준"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"ERROR"}),": 알림을 받고 즉시 대응해야 하는가? → ERROR",e.jsx("br",{}),e.jsx("strong",{children:"WARN"}),": 당장은 아니지만 주시해야 하는가? → WARN",e.jsx("br",{}),e.jsx("strong",{children:"INFO"}),": 운영 중 비즈니스 흐름을 파악하는 데 필요한가? → INFO",e.jsx("br",{}),e.jsx("strong",{children:"DEBUG"}),": 개발/디버깅 시에만 필요한가? → DEBUG",e.jsx("br",{}),e.jsx("strong",{children:"TRACE"}),": 코드 흐름을 한 줄 한 줄 추적해야 하는가? → TRACE"]})]}),e.jsx("h2",{children:"4. Logback 설정"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Logback"}),"은 SLF4J의 기본 구현체로, Spring Boot에 기본 포함되어 있습니다.",e.jsx("code",{children:"logback-spring.xml"})," 또는 ",e.jsx("code",{children:"logback.xml"})," 파일로 설정합니다."]}),e.jsx("h3",{children:"logback-spring.xml 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," src/main/resources/logback-spring.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
<configuration scan="true" scanPeriod="30 seconds">
    <!-- scan: 설정 파일 변경 시 자동 반영 -->

    <!-- ===== 프로퍼티 정의 ===== -->
    <property name="LOG_PATH" value="./logs"/>
    <property name="LOG_PATTERN"
              value="%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n"/>

    <!-- ===== 1) Console Appender ===== -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>\${LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- ===== 2) File Appender ===== -->
    <appender name="FILE" class="ch.qos.logback.core.FileAppender">
        <file>\${LOG_PATH}/application.log</file>
        <encoder>
            <pattern>\${LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- ===== 3) Rolling File Appender (실무 필수!) ===== -->
    <appender name="ROLLING_FILE"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>\${LOG_PATH}/app.log</file>

        <!-- 롤링 정책: 날짜 + 크기 기반 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!-- 파일명 패턴 (날짜별 + 인덱스) -->
            <fileNamePattern>\${LOG_PATH}/app.%d{yyyy-MM-dd}.%i.log.gz</fileNamePattern>
            <!-- 단일 파일 최대 크기 -->
            <maxFileSize>100MB</maxFileSize>
            <!-- 최대 보관 일수 -->
            <maxHistory>30</maxHistory>
            <!-- 전체 로그 최대 용량 -->
            <totalSizeCap>3GB</totalSizeCap>
        </rollingPolicy>

        <encoder>
            <pattern>\${LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- ===== 4) ERROR 전용 Appender ===== -->
    <appender name="ERROR_FILE"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>\${LOG_PATH}/error.log</file>

        <!-- ERROR 레벨만 필터링 -->
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>ERROR</level>
        </filter>

        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>\${LOG_PATH}/error.%d{yyyy-MM-dd}.%i.log.gz</fileNamePattern>
            <maxFileSize>50MB</maxFileSize>
            <maxHistory>90</maxHistory>
        </rollingPolicy>

        <encoder>
            <pattern>\${LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- ===== Logger 설정 ===== -->
    <!-- 특정 패키지 로그 레벨 -->
    <logger name="com.myapp" level="DEBUG"/>
    <logger name="com.myapp.repository" level="TRACE"/>

    <!-- SQL 쿼리 로그 -->
    <logger name="org.hibernate.SQL" level="DEBUG"/>
    <logger name="org.hibernate.type.descriptor.sql" level="TRACE"/>

    <!-- 루트 로거 -->
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="ROLLING_FILE"/>
        <appender-ref ref="ERROR_FILE"/>
    </root>
</configuration>`})})]}),e.jsx("h3",{children:"Spring Profile별 로그 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," logback-spring.xml (Profile 분리)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<configuration>
    <!-- 공통 설정 -->
    <property name="LOG_PATTERN"
              value="%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n"/>

    <!-- 개발 환경 -->
    <springProfile name="dev">
        <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
            <encoder>
                <pattern>%highlight(\${LOG_PATTERN})</pattern>
            </encoder>
        </appender>

        <root level="DEBUG">
            <appender-ref ref="CONSOLE"/>
        </root>
    </springProfile>

    <!-- 운영 환경 -->
    <springProfile name="prod">
        <appender name="ROLLING_FILE"
                  class="ch.qos.logback.core.rolling.RollingFileAppender">
            <file>/var/log/myapp/application.log</file>
            <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
                <fileNamePattern>/var/log/myapp/application.%d{yyyy-MM-dd}.%i.log.gz</fileNamePattern>
                <maxFileSize>200MB</maxFileSize>
                <maxHistory>60</maxHistory>
                <totalSizeCap>10GB</totalSizeCap>
            </rollingPolicy>
            <encoder>
                <pattern>\${LOG_PATTERN}</pattern>
            </encoder>
        </appender>

        <root level="INFO">
            <appender-ref ref="ROLLING_FILE"/>
        </root>
    </springProfile>
</configuration>`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Appender 종류 정리"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"ConsoleAppender"}),": 콘솔(stdout)에 출력. 개발 환경에서 주로 사용.",e.jsx("br",{}),e.jsx("strong",{children:"FileAppender"}),": 지정된 파일에 출력. 단일 파일이라 크기 관리 불가.",e.jsx("br",{}),e.jsx("strong",{children:"RollingFileAppender"}),": 날짜/크기 기준으로 파일을 분리(롤링)하고 압축. 실무 필수.",e.jsx("br",{}),e.jsx("strong",{children:"AsyncAppender"}),": 다른 Appender를 비동기로 감싸서 I/O 병목 해소."]})]}),e.jsx("h2",{children:"5. 로그 패턴과 MDC"}),e.jsx("h3",{children:"패턴 레이아웃"}),e.jsxs("p",{children:["로그 메시지의 포맷을 ",e.jsx("strong",{children:"패턴 문자열"}),"로 정의합니다. 다양한 변환 지정자(conversion specifier)를 조합하여 원하는 형태의 로그를 만들 수 있습니다."]}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"패턴"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"출력 예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("code",{children:["%d","{","yyyy-MM-dd HH:mm:ss","}"]})}),e.jsx("td",{children:"날짜/시간"}),e.jsx("td",{children:"2024-01-15 14:30:45"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%thread"})}),e.jsx("td",{children:"스레드 이름"}),e.jsx("td",{children:"main, http-nio-8080-exec-1"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%-5level"})}),e.jsx("td",{children:"로그 레벨 (5자리 좌측 정렬)"}),e.jsx("td",{children:"INFO , DEBUG, ERROR"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("code",{children:["%logger","{","36","}"]})}),e.jsx("td",{children:"로거 이름 (최대 36자)"}),e.jsx("td",{children:"c.m.service.OrderService"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%msg"})}),e.jsx("td",{children:"로그 메시지"}),e.jsx("td",{children:"주문 생성 완료"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%n"})}),e.jsx("td",{children:"줄바꿈"}),e.jsx("td",{children:"(개행문자)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("code",{children:["%X","{","key","}"]})}),e.jsx("td",{children:"MDC 값"}),e.jsx("td",{children:"req-abc-123"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%method"})}),e.jsx("td",{children:"메서드 이름"}),e.jsx("td",{children:"createOrder"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%line"})}),e.jsx("td",{children:"소스 라인 번호"}),e.jsx("td",{children:"42"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"%highlight()"})}),e.jsx("td",{children:"레벨별 색상 강조"}),e.jsx("td",{children:"(콘솔 컬러)"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 실무 추천 패턴"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<!-- 개발 환경 (컬러, 상세) -->
<pattern>%d{HH:mm:ss.SSS} %highlight(%-5level) [%thread] %cyan(%logger{36}) - %msg%n</pattern>
<!-- 출력: 14:30:45.123 INFO  [main] c.m.s.OrderService - 주문 생성 완료 -->

<!-- 운영 환경 (JSON 형식 - ELK 연동) -->
<pattern>{"timestamp":"%d{ISO8601}","level":"%level","thread":"%thread","logger":"%logger","message":"%msg","traceId":"%X{traceId}"}%n</pattern>

<!-- 운영 환경 (텍스트 형식) -->
<pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] [%X{traceId}] %-5level %logger{50} - %msg%n</pattern>`})})]}),e.jsx("h3",{children:"MDC (Mapped Diagnostic Context)"}),e.jsxs("p",{children:["MDC는 ",e.jsx("strong",{children:"스레드 로컬 기반의 키-값 저장소"}),"로, 요청 단위의 컨텍스트 정보(요청 ID, 사용자 ID 등)를 로그에 자동으로 포함시킬 수 있습니다. 분산 시스템에서 요청 추적에 핵심적인 역할을 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MDCFilter.java - 요청 추적"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import org.slf4j.MDC;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.util.UUID;

// 모든 요청에 고유 ID를 부여하는 필터
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class MDCFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        try {
            // 요청 ID 생성 및 MDC에 설정
            String traceId = UUID.randomUUID().toString().substring(0, 8);
            MDC.put("traceId", traceId);

            // 사용자 정보 (인증된 경우)
            HttpServletRequest httpReq = (HttpServletRequest) request;
            String userId = getUserIdFromRequest(httpReq);
            if (userId != null) {
                MDC.put("userId", userId);
            }

            MDC.put("clientIP", request.getRemoteAddr());
            MDC.put("requestURI", httpReq.getRequestURI());

            chain.doFilter(request, response);

        } finally {
            // 반드시 MDC를 클리어해야 함 (스레드 풀 재사용 시 데이터 누출 방지)
            MDC.clear();
        }
    }
}

// logback-spring.xml 패턴에 MDC 값 포함
// <pattern>%d{HH:mm:ss} [%X{traceId}] [%X{userId}] %-5level %logger - %msg%n</pattern>
//
// 출력 예시:
// 14:30:45 [a1b2c3d4] [user123] INFO  c.m.s.OrderService - 주문 생성 시작
// 14:30:45 [a1b2c3d4] [user123] DEBUG c.m.r.OrderRepo - SELECT 쿼리 실행
// 14:30:46 [a1b2c3d4] [user123] INFO  c.m.s.OrderService - 주문 생성 완료
// → 같은 traceId로 하나의 요청 흐름을 추적할 수 있음!`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MDC 활용 - 비동기 전파"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 주의: MDC는 ThreadLocal 기반이므로 비동기 처리 시 전파되지 않음
// 별도의 처리가 필요

// 방법 1: TaskDecorator 사용 (Spring)
@Configuration
public class AsyncConfig implements AsyncConfigurer {

    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);

        // MDC 전파를 위한 TaskDecorator
        executor.setTaskDecorator(runnable -> {
            Map<String, String> contextMap = MDC.getCopyOfContextMap();
            return () -> {
                try {
                    if (contextMap != null) {
                        MDC.setContextMap(contextMap);
                    }
                    runnable.run();
                } finally {
                    MDC.clear();
                }
            };
        });

        executor.initialize();
        return executor;
    }
}

// 방법 2: 수동 전파
public void asyncProcess() {
    Map<String, String> mdcContext = MDC.getCopyOfContextMap();

    CompletableFuture.runAsync(() -> {
        try {
            MDC.setContextMap(mdcContext);
            log.info("비동기 작업 실행"); // MDC 값이 포함됨
        } finally {
            MDC.clear();
        }
    });
}`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," MDC 사용 시 주의사항"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"반드시 finally 블록에서 MDC.clear()를 호출"}),"하세요. 서블릿 컨테이너는 스레드 풀을 재사용하므로, 이전 요청의 MDC 데이터가 다음 요청에 남아있을 수 있습니다. 이는 로그에 잘못된 컨텍스트가 표시되는 심각한 버그를 유발합니다."]})]}),e.jsx("h2",{children:"6. 디버깅 전략"}),e.jsx("p",{children:"디버깅은 소프트웨어의 결함을 찾아 수정하는 과정입니다. 체계적인 접근 방법을 사용하면 버그를 훨씬 빠르고 정확하게 찾을 수 있습니다."}),e.jsx("h3",{children:"체계적 디버깅 방법론"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 디버깅 5단계 프로세스"]})}),e.jsx("pre",{children:e.jsx("code",{children:`/*
 * ===== 디버깅 5단계 =====
 *
 * 1단계: 문제 재현 (Reproduce)
 *   - 버그를 100% 재현할 수 있는 조건을 찾는다
 *   - 재현 불가능한 버그는 수정 확인도 불가능
 *   - 입력값, 환경, 타이밍 등을 기록
 *
 * 2단계: 원인 범위 축소 (Isolate)
 *   - 이분 탐색으로 문제 범위를 좁혀간다
 *   - "어디까지는 정상이고, 어디부터 비정상인가?"
 *
 * 3단계: 가설 수립 (Hypothesize)
 *   - 축소된 범위에서 원인에 대한 가설을 세운다
 *   - "이 변수가 null이라서 NPE가 발생한 것 같다"
 *
 * 4단계: 가설 검증 (Verify)
 *   - 로그, 디버거, 테스트 코드로 가설을 검증
 *   - 가설이 틀리면 2단계로 돌아간다
 *
 * 5단계: 수정 및 회귀 테스트 (Fix & Verify)
 *   - 원인을 수정하고 재현 테스트를 실행
 *   - 다른 기능에 영향이 없는지 회귀 테스트
 */`})})]}),e.jsx("h3",{children:"이분 탐색 디버깅 (Binary Search Debugging)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 이분 탐색 디버깅 적용"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 문제: processOrder()가 잘못된 금액을 반환
// 10개의 단계가 있다면 중간 지점부터 확인

public OrderResult processOrder(Order order) {
    // Step 1: 기본 검증
    validateOrder(order);

    // Step 2: 상품 정보 조회
    List<Product> products = fetchProducts(order.getItems());

    // Step 3: 가격 계산
    BigDecimal subtotal = calculateSubtotal(products);

    // Step 4: 할인 적용
    BigDecimal discount = applyDiscount(order.getCoupon(), subtotal);

    // === 여기에 로그를 추가하여 중간값 확인 ===
    log.debug("[DEBUG] 중간 확인 - subtotal: {}, discount: {}", subtotal, discount);
    // 여기까지 정상이면 → 문제는 Step 5~10
    // 여기가 비정상이면 → 문제는 Step 1~4, 다시 이분 탐색

    // Step 5: 배송비 계산
    BigDecimal shipping = calculateShipping(order.getAddress());

    // Step 6: 세금 계산
    BigDecimal tax = calculateTax(subtotal.subtract(discount));

    // Step 7: 최종 금액
    BigDecimal total = subtotal.subtract(discount).add(shipping).add(tax);

    // Step 8: 포인트 적립 계산
    int earnedPoints = calculatePoints(total);

    // Step 9: 결과 생성
    return new OrderResult(total, earnedPoints);
}

// 이분 탐색 디버깅 핵심:
// - 전체 과정의 중간 지점에서 상태를 확인
// - 정상이면 후반부로, 비정상이면 전반부로 범위 축소
// - O(log n)으로 원인 위치를 찾을 수 있음`})})]}),e.jsx("h3",{children:"로그 기반 디버깅"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 운영 환경 디버깅 패턴"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Slf4j
@Service
public class OrderService {

    // 패턴 1: 메서드 진입/종료 로깅
    public Order createOrder(CreateOrderRequest request) {
        log.info("주문 생성 시작 - 고객ID: {}, 상품수: {}",
                 request.getCustomerId(), request.getItems().size());
        long startTime = System.currentTimeMillis();

        try {
            Order order = doCreateOrder(request);

            long elapsed = System.currentTimeMillis() - startTime;
            log.info("주문 생성 완료 - 주문ID: {}, 소요시간: {}ms",
                     order.getId(), elapsed);
            return order;

        } catch (Exception e) {
            long elapsed = System.currentTimeMillis() - startTime;
            log.error("주문 생성 실패 - 고객ID: {}, 소요시간: {}ms",
                      request.getCustomerId(), elapsed, e);
            throw e;
        }
    }

    // 패턴 2: 조건 분기 로깅
    public BigDecimal calculateDiscount(Order order) {
        if (order.isFirstPurchase()) {
            log.debug("신규 고객 할인 적용 - 고객ID: {}", order.getCustomerId());
            return order.getTotal().multiply(new BigDecimal("0.10"));
        }

        if (order.getCoupon() != null) {
            log.debug("쿠폰 할인 적용 - 쿠폰코드: {}, 고객ID: {}",
                      order.getCoupon().getCode(), order.getCustomerId());
            return order.getCoupon().getDiscountAmount();
        }

        log.debug("할인 없음 - 고객ID: {}", order.getCustomerId());
        return BigDecimal.ZERO;
    }

    // 패턴 3: 외부 연동 로깅
    public PaymentResult callPaymentApi(PaymentRequest request) {
        log.info("PG사 결제 API 호출 - 주문번호: {}, PG: {}",
                 request.getOrderId(), request.getPgName());

        try {
            PaymentResult result = pgClient.charge(request);
            log.info("PG사 응답 수신 - 주문번호: {}, 상태: {}, 응답코드: {}",
                     request.getOrderId(), result.getStatus(), result.getCode());
            return result;

        } catch (Exception e) {
            log.error("PG사 API 호출 실패 - 주문번호: {}, URL: {}",
                      request.getOrderId(), pgClient.getEndpoint(), e);
            throw new PaymentException("PG사 연동 실패", e);
        }
    }
}`})})]}),e.jsx("h3",{children:"IDE 디버거 활용 팁"}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"단축키 (IntelliJ)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Breakpoint"})}),e.jsx("td",{children:"코드 실행을 일시 정지"}),e.jsx("td",{children:"클릭 또는 Ctrl+F8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Conditional BP"})}),e.jsx("td",{children:"조건 충족 시에만 정지"}),e.jsx("td",{children:"BP 우클릭 → 조건 입력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Step Over"})}),e.jsx("td",{children:"다음 줄로 이동 (메서드 안 들어가지 않음)"}),e.jsx("td",{children:"F8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Step Into"})}),e.jsx("td",{children:"메서드 내부로 진입"}),e.jsx("td",{children:"F7"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Step Out"})}),e.jsx("td",{children:"현재 메서드에서 빠져나옴"}),e.jsx("td",{children:"Shift+F8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Evaluate Expression"})}),e.jsx("td",{children:"중단점에서 표현식 실행"}),e.jsx("td",{children:"Alt+F8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Watch"})}),e.jsx("td",{children:"변수 값 지속 모니터링"}),e.jsx("td",{children:"Variables 패널"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Exception BP"})}),e.jsx("td",{children:"특정 예외 발생 시 정지"}),e.jsx("td",{children:"Run → View Breakpoints"})]})]})]}),e.jsx("h2",{children:"7. 실무 로깅 베스트 프랙티스"}),e.jsx("h3",{children:"로그 메시지 작성법"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 좋은 로그 vs 나쁜 로그"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ========== 나쁜 로그 메시지 ==========

log.info("error");                        // 무슨 에러? 어디서?
log.info("processing...");                 // 무엇을 처리 중?
log.error("failed");                       // 왜 실패? 어떤 데이터?
log.debug(user.toString());                // 무슨 컨텍스트?
log.info("result: " + result);             // 문자열 연결 (성능 낭비)

// ========== 좋은 로그 메시지 ==========

// 규칙 1: WHO, WHAT, WHY를 포함
log.info("주문 생성 완료 - 주문ID: {}, 고객: {}, 금액: {}원",
         orderId, customerId, amount);

// 규칙 2: 실패 시 입력값과 원인을 기록
log.error("결제 실패 - 주문ID: {}, PG응답코드: {}, 사유: {}",
          orderId, pgResponseCode, pgMessage, exception);

// 규칙 3: 상태 변화를 기록
log.info("주문 상태 변경 - 주문ID: {}, {} -> {}",
         orderId, prevStatus, newStatus);

// 규칙 4: 수치/통계 정보 포함
log.info("배치 완료 - 처리건수: {}, 성공: {}, 실패: {}, 소요시간: {}ms",
         total, success, fail, elapsed);`})})]}),e.jsx("h3",{children:"민감정보 마스킹"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," LogMaskingUtil.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 로그에 절대 평문으로 기록하면 안 되는 정보:
// - 비밀번호, 카드번호, 주민등록번호, 계좌번호 등

public class LogMaskingUtil {

    // 카드번호 마스킹: 1234-5678-9012-3456 → 1234-****-****-3456
    public static String maskCardNumber(String cardNumber) {
        if (cardNumber == null || cardNumber.length() < 13) return "****";
        return cardNumber.substring(0, 4) + "-****-****-"
               + cardNumber.substring(cardNumber.length() - 4);
    }

    // 이메일 마스킹: user@example.com → u***@example.com
    public static String maskEmail(String email) {
        if (email == null || !email.contains("@")) return "****";
        int atIndex = email.indexOf("@");
        return email.charAt(0) + "***" + email.substring(atIndex);
    }

    // 전화번호 마스킹: 010-1234-5678 → 010-****-5678
    public static String maskPhone(String phone) {
        if (phone == null || phone.length() < 8) return "****";
        return phone.substring(0, 3) + "-****-"
               + phone.substring(phone.length() - 4);
    }

    // 주민등록번호: 901231-1234567 → 901231-*******
    public static String maskRRN(String rrn) {
        if (rrn == null || rrn.length() < 6) return "****";
        return rrn.substring(0, 6) + "-*******";
    }
}

// 사용 예시
@Slf4j
@Service
public class PaymentService {
    public void processPayment(String cardNumber, String email) {
        // Bad: 민감정보 평문 로깅
        // log.info("결제 요청 - 카드: {}, 이메일: {}", cardNumber, email);

        // Good: 마스킹 처리
        log.info("결제 요청 - 카드: {}, 이메일: {}",
                 LogMaskingUtil.maskCardNumber(cardNumber),
                 LogMaskingUtil.maskEmail(email));
        // 출력: 결제 요청 - 카드: 1234-****-****-3456, 이메일: u***@example.com
    }
}`})})]}),e.jsx("h3",{children:"로그 레벨 전략"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 환경별 로그 레벨 전략"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# application-dev.yml (개발 환경)
logging:
  level:
    root: INFO
    com.myapp: DEBUG           # 우리 코드는 DEBUG
    org.hibernate.SQL: DEBUG   # SQL 쿼리 확인
    org.springframework.web: DEBUG

# application-prod.yml (운영 환경)
logging:
  level:
    root: WARN
    com.myapp: INFO            # 우리 코드는 INFO
    org.hibernate.SQL: WARN    # SQL은 숨김
    org.springframework: WARN

# 운영 중 동적 레벨 변경 (Spring Boot Actuator)
# POST /actuator/loggers/com.myapp.service
# { "configuredLevel": "DEBUG" }
# → 재배포 없이 특정 패키지의 로그 레벨을 DEBUG로 변경 가능!`})})]}),e.jsx("h3",{children:"모니터링 연동"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ELK Stack 연동 및 알림"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// === ELK Stack (Elasticsearch + Logstash + Kibana) ===
//
// [App] → logback → [Log File] → [Filebeat] → [Logstash] → [Elasticsearch] → [Kibana]
//                                                                                 ↓
//                                                                          대시보드/알림

// JSON 형식 로그 출력 (Logstash 파싱 용이)
// logback-spring.xml에서 JSON Encoder 사용
// <encoder class="net.logstash.logback.encoder.LogstashEncoder"/>

// === 로그 기반 알림 설정 예시 ===
//
// 1. ERROR 로그 발생 시 → Slack 알림
// 2. 특정 키워드 (OutOfMemoryError, Connection refused) → PagerDuty 알림
// 3. ERROR 로그 비율이 임계치 초과 → 자동 스케일링 트리거

// Slack 알림용 커스텀 Appender
@Slf4j
@Component
public class ErrorAlertService {

    private final SlackClient slackClient;

    // ERROR 로그 발생 시 Slack 알림 전송
    public void sendAlert(String serviceName, String errorMessage,
                          String traceId) {
        String message = String.format(
            "[%s] ERROR 발생\\n" +
            "TraceID: %s\\n" +
            "메시지: %s\\n" +
            "시각: %s",
            serviceName, traceId, errorMessage,
            LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME)
        );

        slackClient.sendMessage("#error-alerts", message);
        log.info("Slack 알림 전송 완료 - traceId: {}", traceId);
    }
}

// 로그 모니터링 체크리스트:
// ✔ ERROR 로그 발생률 모니터링
// ✔ 응답 시간 P99 추적
// ✔ 특정 에러 패턴 탐지 (OOM, Connection 등)
// ✔ 로그 볼륨 이상 감지 (갑작스러운 증가)`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 실무 로깅 체크리스트"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"1."})," SLF4J + Logback 조합을 사용하고 있는가?",e.jsx("br",{}),e.jsx("strong",{children:"2."})," 환경별(dev/prod) 로그 레벨이 분리되어 있는가?",e.jsx("br",{}),e.jsx("strong",{children:"3."})," RollingFileAppender로 로그 파일이 관리되고 있는가?",e.jsx("br",{}),e.jsx("strong",{children:"4."})," MDC로 요청 추적이 가능한가?",e.jsx("br",{}),e.jsx("strong",{children:"5."})," 민감정보가 마스킹되어 있는가?",e.jsx("br",{}),e.jsx("strong",{children:"6."})," 로그 메시지에 컨텍스트(누가, 무엇, 왜)가 포함되어 있는가?",e.jsx("br",{}),e.jsx("strong",{children:"7."})," ERROR 로그에 대한 알림이 설정되어 있는가?",e.jsx("br",{}),e.jsx("strong",{children:"8."})," 로그 보관 정책(기간, 용량)이 수립되어 있는가?"]})]}),e.jsx("h2",{children:"8. 연습문제"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"System.out.println"}),"과 로깅 프레임워크의 차이점을 5가지 이상 설명하고, 실무에서 println을 사용하면 안 되는 이유를 서술하세요."]}),e.jsxs("li",{children:["다음 코드의 문제점을 찾고 SLF4J를 사용하여 올바르게 수정하세요.",e.jsx("div",{className:"code-block",style:{marginTop:"8px"},children:e.jsx("pre",{children:e.jsx("code",{children:`public void processPayment(String cardNumber, BigDecimal amount) {
    System.out.println("결제 시작: 카드=" + cardNumber + ", 금액=" + amount);
    try {
        // 결제 처리
    } catch (Exception e) {
        System.out.println("결제 실패: " + e.getMessage());
        e.printStackTrace();
    }
}`})})})]}),e.jsx("li",{children:"TRACE, DEBUG, INFO, WARN, ERROR 각 레벨의 사용 시나리오를 구체적인 코드 예시와 함께 작성하세요."}),e.jsxs("li",{children:["다음 요구사항에 맞는 ",e.jsx("code",{children:"logback-spring.xml"}),"을 작성하세요.",e.jsxs("ul",{children:[e.jsx("li",{children:"개발 환경: 콘솔 출력, DEBUG 레벨, 컬러 적용"}),e.jsx("li",{children:"운영 환경: 파일 출력, INFO 레벨, 일별 롤링, 최대 30일 보관, gz 압축"}),e.jsx("li",{children:"ERROR 로그는 별도 파일로 분리, 90일 보관"})]})]}),e.jsx("li",{children:"MDC를 활용하여 웹 요청의 전체 흐름을 추적할 수 있는 필터를 구현하세요. traceId, userId, clientIP를 포함하고, 비동기 처리 시에도 MDC가 전파되도록 하세요."}),e.jsxs("li",{children:["다음 상황에서의 디버깅 전략을 단계별로 설명하세요.",e.jsx("br",{}),'"운영 환경에서 특정 사용자의 주문만 간헐적으로 금액 계산이 잘못되는 버그가 발생"']}),e.jsxs("li",{children:["실무에서 사용할 수 있는 ",e.jsx("code",{children:"LogMaskingUtil"})," 클래스를 작성하세요. 카드번호, 이메일, 전화번호, 주민등록번호를 마스킹하는 메서드를 포함하세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("PR08")?"btn-primary":"btn-accent"}`,onClick:()=>l("PR08"),children:s("PR08")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/practical/07",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 클린 코드"]}),e.jsxs(r,{to:"/practical/09",children:["다음: 날짜/시간 API ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{t as default};
