import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson01() {
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
            <span>Lesson 01</span>
          </div>
          <h1>Lesson 01. Spring Framework 소개</h1>
          <p>Spring Framework의 역사, 핵심 철학, 모듈 구성을 이해하고 첫 번째 프로젝트를 시작합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. Spring Framework란?</h2>
          <p>
            Spring Framework는 2003년 Rod Johnson이 저서 "Expert One-on-One J2EE Design and Development"에서 소개한
            Java 엔터프라이즈 애플리케이션 개발 프레임워크입니다. 당시 복잡했던 EJB(Enterprise JavaBeans) 개발 방식의
            대안으로 등장하여, 현재 Java 생태계에서 가장 널리 사용되는 프레임워크가 되었습니다.
          </p>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> Spring의 역사</div>
            <p>2003년 Spring 1.0 출시 이후, 2013년 Spring Boot 등장, 2017년 Spring 5 (리액티브 지원),
            2022년 Spring 6 (Jakarta EE 지원)까지 지속적으로 발전하고 있습니다.</p>
          </div>

          <h3>Spring 생태계</h3>
          <p>Spring은 단일 프레임워크가 아닌 방대한 생태계를 구성합니다:</p>
          <ul>
            <li><strong>Spring Framework</strong> - 핵심 컨테이너, AOP, MVC 등</li>
            <li><strong>Spring Boot</strong> - 자동 설정, 내장 서버 기반 빠른 개발</li>
            <li><strong>Spring Data</strong> - 데이터 접근 추상화 (JPA, MongoDB, Redis 등)</li>
            <li><strong>Spring Security</strong> - 인증/인가 보안 프레임워크</li>
            <li><strong>Spring Cloud</strong> - 마이크로서비스 아키텍처 지원</li>
            <li><strong>Spring Batch</strong> - 대용량 배치 처리</li>
          </ul>

          <h2>2. Spring의 핵심 철학</h2>

          <h3>POJO (Plain Old Java Object)</h3>
          <p>Spring은 특정 클래스를 상속하거나 인터페이스를 구현하지 않은 순수 Java 객체(POJO)를 기반으로 동작합니다.
          이는 코드의 단순성과 테스트 용이성을 높여줍니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserService.java (POJO)</span></div>
            <pre><code>{`// Spring에서는 특별한 상속 없이 순수 Java 클래스로 개발합니다
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUser(Long id) {
        return userRepository.findById(id);
    }
}`}</code></pre>
          </div>

          <h3>IoC (Inversion of Control, 제어의 역전)</h3>
          <p>객체의 생성과 생명주기를 개발자가 아닌 Spring 컨테이너가 관리합니다.</p>

          <h3>DI (Dependency Injection, 의존성 주입)</h3>
          <p>객체가 필요로 하는 의존 객체를 외부에서 주입받습니다. 이를 통해 결합도를 낮추고 테스트가 용이해집니다.</p>

          <h3>AOP (Aspect-Oriented Programming, 관점 지향 프로그래밍)</h3>
          <p>로깅, 트랜잭션 등 횡단 관심사(cross-cutting concerns)를 모듈화하여 코드 중복을 제거합니다.</p>

          <h2>3. Spring 모듈 구성</h2>
          <table className="comparison-table">
            <thead>
              <tr><th>모듈</th><th>설명</th><th>주요 기능</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Spring Core</strong></td><td>IoC/DI 컨테이너</td><td>BeanFactory, ApplicationContext</td></tr>
              <tr><td><strong>Spring Web MVC</strong></td><td>웹 애플리케이션 개발</td><td>DispatcherServlet, Controller</td></tr>
              <tr><td><strong>Spring Data</strong></td><td>데이터 접근 계층</td><td>JPA, JDBC Template, Repository</td></tr>
              <tr><td><strong>Spring Security</strong></td><td>보안</td><td>인증, 인가, CSRF 보호</td></tr>
              <tr><td><strong>Spring AOP</strong></td><td>관점 지향 프로그래밍</td><td>프록시 기반 AOP</td></tr>
              <tr><td><strong>Spring Test</strong></td><td>테스트 지원</td><td>MockMvc, @SpringBootTest</td></tr>
            </tbody>
          </table>

          <h2>4. Spring vs Spring Boot 비교</h2>
          <table className="comparison-table">
            <thead>
              <tr><th>구분</th><th>Spring Framework</th><th>Spring Boot</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>설정</strong></td><td>XML 또는 Java Config 수동 설정</td><td>자동 설정 (Auto Configuration)</td></tr>
              <tr><td><strong>서버</strong></td><td>외부 WAS 필요 (Tomcat 별도 설치)</td><td>내장 서버 (Embedded Tomcat)</td></tr>
              <tr><td><strong>의존성</strong></td><td>개별 라이브러리 버전 관리</td><td>Starter로 의존성 일괄 관리</td></tr>
              <tr><td><strong>배포</strong></td><td>WAR 파일</td><td>JAR 파일 (java -jar 실행)</td></tr>
              <tr><td><strong>학습 곡선</strong></td><td>높음</td><td>상대적으로 낮음</td></tr>
              <tr><td><strong>적합한 경우</strong></td><td>세밀한 설정 필요 시</td><td>빠른 프로토타이핑, 마이크로서비스</td></tr>
            </tbody>
          </table>

          <h2>5. 개발 환경 설정</h2>
          <p>Spring 개발을 위해 다음 도구를 준비합니다:</p>
          <ul>
            <li><strong>JDK 17+</strong> - Spring 6 / Spring Boot 3 기준</li>
            <li><strong>빌드 도구</strong> - Maven 또는 Gradle</li>
            <li><strong>IDE</strong> - IntelliJ IDEA (권장) 또는 Eclipse (STS)</li>
          </ul>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>Spring Boot 프로젝트는 <a href="https://start.spring.io" target="_blank" rel="noopener noreferrer">Spring Initializr</a>에서
            손쉽게 생성할 수 있습니다. 필요한 의존성을 선택하고 프로젝트를 다운로드하세요.</p>
          </div>

          <h2>6. 첫 번째 Spring 프로젝트</h2>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> pom.xml</span></div>
            <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
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
</project>`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Application.java</span></div>
            <pre><code>{`import org.springframework.boot.SpringApplication;
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
}`}</code></pre>
          </div>

          <h2>7. Spring Bean 기본 개념</h2>
          <p>
            Spring Bean이란 Spring IoC 컨테이너가 관리하는 객체를 말합니다.
            개발자가 직접 <code>new</code> 키워드로 생성하는 것이 아니라,
            Spring 컨테이너가 객체를 생성하고 관리합니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> GreetingService.java</span></div>
            <pre><code>{`import org.springframework.stereotype.Service;

@Service  // 이 클래스를 Spring Bean으로 등록
public class GreetingService {
    public String greet(String name) {
        return "안녕하세요, " + name + "님! Spring에 오신 것을 환영합니다.";
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <h3>POJO 개념 체험하기</h3>
          <p>아래 코드 실행기에서 Spring 없이도 동작하는 순수 Java 객체(POJO)의 개념을 확인해보세요.</p>

          <JavaCodeRunner defaultCode={`// POJO - 순수 Java 객체 예제
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
}`} title="POJO와 DI 기본 개념 체험" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>Spring Framework와 Spring Boot의 가장 큰 차이점 3가지를 설명하세요.</li>
              <li>IoC(제어의 역전)가 기존 개발 방식과 어떻게 다른지 예를 들어 설명하세요.</li>
              <li>POJO 기반 개발의 장점을 3가지 이상 나열하세요.</li>
              <li>Spring Initializr에서 Web, DevTools 의존성을 선택하여 프로젝트를 생성해보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP01') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP01')}>
              {isLessonCompleted('SP01') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring"><i className="fas fa-arrow-left"></i> 이전: 스프링 과정</Link>
            <Link to="/spring/02">다음: IoC와 DI <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
