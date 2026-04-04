import{u as a,r as n,j as e,L as s}from"./index-D1Z5swa4.js";import{J as l}from"./JavaCodeRunner-Di2L70iK.js";function c(){const{completeLesson:i,isLessonCompleted:r}=a();return n.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 09"})]}),e.jsx("h1",{children:"Lesson 09. Spring Boot 시작하기"}),e.jsx("p",{children:"Spring Boot의 핵심 개념과 프로젝트 생성부터 첫 번째 REST API까지 배워봅니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. Spring Boot란?"}),e.jsxs("p",{children:["Spring Boot는 Spring Framework를 기반으로 ",e.jsx("strong",{children:"최소한의 설정"}),"으로 독립 실행 가능한 프로덕션급 애플리케이션을 빠르게 만들 수 있도록 도와주는 프레임워크입니다."]}),e.jsx("h3",{children:"Spring Boot의 핵심 특징"}),e.jsxs("table",{className:"info-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"특징"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"자동 설정 (Auto-Configuration)"})}),e.jsx("td",{children:"클래스패스의 라이브러리를 감지하여 자동으로 Bean을 설정합니다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"내장 서버 (Embedded Server)"})}),e.jsx("td",{children:"Tomcat, Jetty, Undertow를 내장하여 별도 WAS 설치 없이 실행 가능합니다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Starter 의존성"})}),e.jsx("td",{children:"관련 라이브러리를 하나의 starter로 묶어 의존성 관리를 간소화합니다"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Opinionated Defaults"})}),e.jsx("td",{children:"합리적인 기본값을 제공하여 설정 부담을 줄입니다"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Spring vs Spring Boot"]}),e.jsx("p",{children:'Spring Framework는 강력하지만 XML 설정이 복잡했습니다. Spring Boot는 "Convention over Configuration" 원칙으로 이 문제를 해결합니다. Spring Boot = Spring Framework + 자동 설정 + 내장 서버입니다.'})]}),e.jsx("h2",{children:"2. Spring Initializr로 프로젝트 생성"}),e.jsxs("p",{children:[e.jsx("a",{href:"https://start.spring.io",target:"_blank",rel:"noreferrer",children:"start.spring.io"}),"에서 프로젝트를 생성할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 프로젝트 설정"]})}),e.jsx("pre",{children:e.jsx("code",{children:`Project: Gradle - Groovy (또는 Maven)
Language: Java
Spring Boot: 3.2.x (최신 안정 버전)
Group: com.example
Artifact: demo
Packaging: Jar
Java: 17

Dependencies:
- Spring Web
- Spring Boot DevTools
- Lombok`})})]}),e.jsx("h2",{children:"3. 프로젝트 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 프로젝트 디렉토리 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`my-project/
├── src/
│   ├── main/
│   │   ├── java/com/example/demo/
│   │   │   └── DemoApplication.java    // 메인 클래스
│   │   └── resources/
│   │       ├── application.properties   // 설정 파일
│   │       ├── static/                  // 정적 리소스
│   │       └── templates/               // 템플릿 파일
│   └── test/
│       └── java/com/example/demo/
│           └── DemoApplicationTests.java
├── build.gradle (또는 pom.xml)
└── gradlew / gradlew.bat`})})]}),e.jsx("h2",{children:"4. @SpringBootApplication 분석"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DemoApplication.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication은 3가지 어노테이션을 합친 것
// = @Configuration + @EnableAutoConfiguration + @ComponentScan
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        // 내장 톰캣 서버를 시작하고 스프링 컨텍스트를 초기화
        SpringApplication.run(DemoApplication.class, args);
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsx("p",{children:"@Configuration: 설정 클래스임을 나타냅니다. @EnableAutoConfiguration: 자동 설정을 활성화합니다. @ComponentScan: 현재 패키지와 하위 패키지에서 컴포넌트를 스캔합니다. 메인 클래스는 반드시 루트 패키지에 위치해야 합니다."})]}),e.jsx("h2",{children:"5. application.properties vs application.yml"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," application.properties"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 서버 설정
server.port=8080
server.servlet.context-path=/api

# 데이터베이스 설정
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=1234

# JPA 설정
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," application.yml (동일 설정)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`server:
  port: 8080
  servlet:
    context-path: /api

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: 1234
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true`})})]}),e.jsx("h2",{children:"6. DevTools (자동 재시작, LiveReload)"}),e.jsx("p",{children:"Spring Boot DevTools는 개발 생산성을 높여주는 도구입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle"]})}),e.jsx("pre",{children:e.jsx("code",{children:`dependencies {
    developmentOnly 'org.springframework.boot:spring-boot-devtools'
}

// DevTools 주요 기능:
// 1. 자동 재시작: 소스 코드 변경 시 서버 자동 재시작
// 2. LiveReload: 브라우저 자동 새로고침
// 3. 캐시 비활성화: 템플릿 캐시를 꺼서 변경사항 즉시 반영
// 4. H2 콘솔 자동 활성화`})})]}),e.jsx("h2",{children:"7. 실전: Hello World REST API"}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," HelloController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class HelloController {

    // GET http://localhost:8080/hello
    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }

    // GET http://localhost:8080/hello/홍길동
    @GetMapping("/hello/{name}")
    public String helloName(@PathVariable String name) {
        return "Hello, " + name + "!";
    }

    // GET http://localhost:8080/greeting?name=홍길동&age=25
    @GetMapping("/greeting")
    public Map<String, Object> greeting(
            @RequestParam(defaultValue = "World") String name,
            @RequestParam(required = false) Integer age) {
        return Map.of(
            "message", "안녕하세요, " + name + "님!",
            "age", age != null ? age : "미입력"
        );
    }
}`})})]}),e.jsx(l,{defaultCode:`// Spring Boot의 핵심 개념 맛보기
// 아래는 Spring Boot 없이 기본 구조를 이해하는 데모입니다.

import java.util.HashMap;
import java.util.Map;

public class Main {
    // Spring Boot에서 @Component와 유사한 개념
    static class GreetingService {
        public String greet(String name) {
            return "안녕하세요, " + name + "님! Spring Boot에 오신 것을 환영합니다!";
        }
    }

    // Spring Boot에서 @RestController와 유사한 개념
    static class GreetingController {
        private final GreetingService service;

        // 생성자 주입 (Spring Boot 권장 방식)
        public GreetingController(GreetingService service) {
            this.service = service;
        }

        public Map<String, String> handleRequest(String name) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "200 OK");
            response.put("message", service.greet(name));
            return response;
        }
    }

    public static void main(String[] args) {
        // Spring Boot가 자동으로 해주는 일을 수동으로 수행
        GreetingService service = new GreetingService();
        GreetingController controller = new GreetingController(service);

        System.out.println("=== Spring Boot 개념 데모 ===");
        System.out.println(controller.handleRequest("홍길동"));
        System.out.println(controller.handleRequest("Spring 학습자"));
    }
}`,title:"Spring Boot 핵심 개념 데모"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"start.spring.io에서 Spring Web 의존성으로 프로젝트를 생성하고, 8080 포트에서 실행해 보세요."}),e.jsx("li",{children:"@GetMapping을 사용하여 현재 시간을 JSON으로 반환하는 API를 만들어 보세요."}),e.jsx("li",{children:"application.yml로 서버 포트를 9090으로 변경해 보세요."}),e.jsx("li",{children:"@PathVariable과 @RequestParam의 차이를 정리하고, 각각 활용하는 API를 만들어 보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${r("SP09")?"btn-primary":"btn-accent"}`,onClick:()=>i("SP09"),children:r("SP09")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/spring/08",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Lesson 08"]}),e.jsxs(s,{to:"/spring/10",children:["다음: REST API 설계와 구현 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{c as default};
