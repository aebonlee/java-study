import{u as n,r as l,j as e,L as r}from"./index-D-p2iJw3.js";import{J as c}from"./JavaCodeRunner-o010PPsm.js";function d(){const{completeLesson:i,isLessonCompleted:s}=n();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 01"})]}),e.jsx("h1",{children:"Lesson 01. Spring Framework 소개"}),e.jsx("p",{children:"Spring Framework의 역사, 핵심 철학, 모듈 구성을 이해하고 첫 번째 프로젝트를 시작합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. Spring Framework란?"}),e.jsx("p",{children:'Spring Framework는 2003년 Rod Johnson이 저서 "Expert One-on-One J2EE Design and Development"에서 소개한 Java 엔터프라이즈 애플리케이션 개발 프레임워크입니다. 당시 복잡했던 EJB(Enterprise JavaBeans) 개발 방식의 대안으로 등장하여, 현재 Java 생태계에서 가장 널리 사용되는 프레임워크가 되었습니다.'}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Spring의 역사"]}),e.jsx("p",{children:"2003년 Spring 1.0 출시 이후, 2013년 Spring Boot 등장, 2017년 Spring 5 (리액티브 지원), 2022년 Spring 6 (Jakarta EE 지원)까지 지속적으로 발전하고 있습니다."})]}),e.jsx("h3",{children:"Spring 생태계"}),e.jsx("p",{children:"Spring은 단일 프레임워크가 아닌 방대한 생태계를 구성합니다:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Framework"})," - 핵심 컨테이너, AOP, MVC 등"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Boot"})," - 자동 설정, 내장 서버 기반 빠른 개발"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Data"})," - 데이터 접근 추상화 (JPA, MongoDB, Redis 등)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Security"})," - 인증/인가 보안 프레임워크"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Cloud"})," - 마이크로서비스 아키텍처 지원"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spring Batch"})," - 대용량 배치 처리"]})]}),e.jsx("h2",{children:"2. Spring의 핵심 철학"}),e.jsx("h3",{children:"POJO (Plain Old Java Object)"}),e.jsx("p",{children:"Spring은 특정 클래스를 상속하거나 인터페이스를 구현하지 않은 순수 Java 객체(POJO)를 기반으로 동작합니다. 이는 코드의 단순성과 테스트 용이성을 높여줍니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserService.java (POJO)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Spring에서는 특별한 상속 없이 순수 Java 클래스로 개발합니다
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUser(Long id) {
        return userRepository.findById(id);
    }
}`})})]}),e.jsx("h3",{children:"IoC (Inversion of Control, 제어의 역전)"}),e.jsx("p",{children:"객체의 생성과 생명주기를 개발자가 아닌 Spring 컨테이너가 관리합니다."}),e.jsx("h3",{children:"DI (Dependency Injection, 의존성 주입)"}),e.jsx("p",{children:"객체가 필요로 하는 의존 객체를 외부에서 주입받습니다. 이를 통해 결합도를 낮추고 테스트가 용이해집니다."}),e.jsx("h3",{children:"AOP (Aspect-Oriented Programming, 관점 지향 프로그래밍)"}),e.jsx("p",{children:"로깅, 트랜잭션 등 횡단 관심사(cross-cutting concerns)를 모듈화하여 코드 중복을 제거합니다."}),e.jsx("h2",{children:"3. Spring 모듈 구성"}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"모듈"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"주요 기능"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring Core"})}),e.jsx("td",{children:"IoC/DI 컨테이너"}),e.jsx("td",{children:"BeanFactory, ApplicationContext"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring Web MVC"})}),e.jsx("td",{children:"웹 애플리케이션 개발"}),e.jsx("td",{children:"DispatcherServlet, Controller"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring Data"})}),e.jsx("td",{children:"데이터 접근 계층"}),e.jsx("td",{children:"JPA, JDBC Template, Repository"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring Security"})}),e.jsx("td",{children:"보안"}),e.jsx("td",{children:"인증, 인가, CSRF 보호"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring AOP"})}),e.jsx("td",{children:"관점 지향 프로그래밍"}),e.jsx("td",{children:"프록시 기반 AOP"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring Test"})}),e.jsx("td",{children:"테스트 지원"}),e.jsx("td",{children:"MockMvc, @SpringBootTest"})]})]})]}),e.jsx("h2",{children:"4. Spring vs Spring Boot 비교"}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"Spring Framework"}),e.jsx("th",{children:"Spring Boot"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"설정"})}),e.jsx("td",{children:"XML 또는 Java Config 수동 설정"}),e.jsx("td",{children:"자동 설정 (Auto Configuration)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"서버"})}),e.jsx("td",{children:"외부 WAS 필요 (Tomcat 별도 설치)"}),e.jsx("td",{children:"내장 서버 (Embedded Tomcat)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"의존성"})}),e.jsx("td",{children:"개별 라이브러리 버전 관리"}),e.jsx("td",{children:"Starter로 의존성 일괄 관리"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"배포"})}),e.jsx("td",{children:"WAR 파일"}),e.jsx("td",{children:"JAR 파일 (java -jar 실행)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"학습 곡선"})}),e.jsx("td",{children:"높음"}),e.jsx("td",{children:"상대적으로 낮음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"적합한 경우"})}),e.jsx("td",{children:"세밀한 설정 필요 시"}),e.jsx("td",{children:"빠른 프로토타이핑, 마이크로서비스"})]})]})]}),e.jsx("h2",{children:"5. 개발 환경 설정"}),e.jsx("p",{children:"Spring 개발을 위해 다음 도구를 준비합니다:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"JDK 17+"})," - Spring 6 / Spring Boot 3 기준"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"빌드 도구"})," - Maven 또는 Gradle"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IDE"})," - IntelliJ IDEA (권장) 또는 Eclipse (STS)"]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsxs("p",{children:["Spring Boot 프로젝트는 ",e.jsx("a",{href:"https://start.spring.io",target:"_blank",rel:"noopener noreferrer",children:"Spring Initializr"}),"에서 손쉽게 생성할 수 있습니다. 필요한 의존성을 선택하고 프로젝트를 다운로드하세요."]})]}),e.jsx("h2",{children:"6. 첫 번째 Spring 프로젝트"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," pom.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
    </parent>
    <groupId>com.example</groupId>
    <artifactId>my-spring-app</artifactId>
    <version>1.0.0</version>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
    </dependencies>
</project>`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Application.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        // Spring 컨테이너(ApplicationContext) 초기화
        ApplicationContext context =
            SpringApplication.run(Application.class, args);

        // 등록된 Bean 이름 출력
        String[] beanNames = context.getBeanDefinitionNames();
        System.out.println("등록된 Bean 수: " + beanNames.length);
        for (String name : beanNames) {
            System.out.println(" - " + name);
        }
    }
}`})})]}),e.jsx("h2",{children:"7. Spring Bean 기본 개념"}),e.jsxs("p",{children:["Spring Bean이란 Spring IoC 컨테이너가 관리하는 객체를 말합니다. 개발자가 직접 ",e.jsx("code",{children:"new"})," 키워드로 생성하는 것이 아니라, Spring 컨테이너가 객체를 생성하고 관리합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," GreetingService.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import org.springframework.stereotype.Service;

@Service  // 이 클래스를 Spring Bean으로 등록
public class GreetingService {
    public String greet(String name) {
        return "안녕하세요, " + name + "님! Spring에 오신 것을 환영합니다.";
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요."})]}),e.jsx("h3",{children:"POJO 개념 체험하기"}),e.jsx("p",{children:"아래 코드 실행기에서 Spring 없이도 동작하는 순수 Java 객체(POJO)의 개념을 확인해보세요."}),e.jsx(c,{defaultCode:`// POJO - 순수 Java 객체 예제
// Spring의 핵심은 이런 평범한 Java 클래스를 활용하는 것입니다

class UserRepository {
    public String findByName(String name) {
        return "사용자: " + name + " (DB 조회 결과)";
    }
}

class UserService {
    private UserRepository repository;

    // 생성자를 통한 의존성 주입 (DI의 기본 원리)
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public void printUser(String name) {
        String result = repository.findByName(name);
        System.out.println(result);
    }
}

public class Main {
    public static void main(String[] args) {
        // 수동으로 의존성 주입 (Spring이 하면 자동)
        UserRepository repo = new UserRepository();
        UserService service = new UserService(repo);

        service.printUser("홍길동");
        service.printUser("김철수");
        System.out.println("\\nSpring에서는 이 과정을 자동으로 처리합니다!");
    }
}`,title:"POJO와 DI 기본 개념 체험"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Spring Framework와 Spring Boot의 가장 큰 차이점 3가지를 설명하세요."}),e.jsx("li",{children:"IoC(제어의 역전)가 기존 개발 방식과 어떻게 다른지 예를 들어 설명하세요."}),e.jsx("li",{children:"POJO 기반 개발의 장점을 3가지 이상 나열하세요."}),e.jsx("li",{children:"Spring Initializr에서 Web, DevTools 의존성을 선택하여 프로젝트를 생성해보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("SP01")?"btn-primary":"btn-accent"}`,onClick:()=>i("SP01"),children:s("SP01")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/spring",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 스프링 과정"]}),e.jsxs(r,{to:"/spring/02",children:["다음: IoC와 DI ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
