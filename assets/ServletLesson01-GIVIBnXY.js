import{u as i,r,j as e,L as s}from"./index-D-p2iJw3.js";import{J as n}from"./JavaCodeRunner-o010PPsm.js";function d(){const{completeLesson:t,isLessonCompleted:l}=i();return r.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/servlet",children:"서블릿 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 01"})]}),e.jsx("h1",{children:"Lesson 01. 서블릿 개요와 환경설정"}),e.jsx("p",{children:"서블릿의 개념을 이해하고 개발 환경을 구축합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 서블릿이란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"서블릿(Servlet)"}),"은 Java를 사용하여 웹 서버에서 동적인 웹 페이지를 생성하는 서버 측 프로그램입니다. 1997년 Sun Microsystems에서 처음 발표되었으며, 현재는 Jakarta EE(구 Java EE) 스펙의 핵심 기술입니다."]}),e.jsx("p",{children:"서블릿은 클라이언트의 HTTP 요청을 받아 처리하고, 그 결과를 HTTP 응답으로 돌려주는 역할을 합니다. JSP, Spring MVC 등 대부분의 Java 웹 프레임워크가 내부적으로 서블릿을 기반으로 동작합니다."}),e.jsx("h3",{children:"서블릿의 주요 특징"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"플랫폼 독립성"})," - Java로 작성되므로 운영체제에 관계없이 동작합니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"높은 성능"})," - 요청마다 새 프로세스가 아닌 스레드로 처리하여 효율적입니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"보안"})," - Java의 보안 매니저를 활용하여 안전하게 실행됩니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"확장성"})," - Java의 모든 API를 활용할 수 있어 확장이 용이합니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"컨테이너 관리"})," - 서블릿 컨테이너가 생명주기를 자동으로 관리합니다"]})]}),e.jsx("h2",{children:"2. 웹 서버와 WAS"}),e.jsx("p",{children:"웹 애플리케이션을 서비스하려면 웹 서버와 WAS(Web Application Server)의 차이를 이해해야 합니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"웹 서버"}),e.jsx("th",{children:"WAS (서블릿 컨테이너)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"역할"})}),e.jsx("td",{children:"정적 콘텐츠 제공 (HTML, CSS, 이미지)"}),e.jsx("td",{children:"동적 콘텐츠 생성 (서블릿, JSP 실행)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"예시"})}),e.jsx("td",{children:"Apache HTTP Server, Nginx"}),e.jsx("td",{children:"Apache Tomcat, Jetty, WildFly"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"처리 방식"})}),e.jsx("td",{children:"파일을 그대로 전달"}),e.jsx("td",{children:"Java 코드를 실행하여 결과를 생성"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"프로토콜"})}),e.jsx("td",{children:"HTTP"}),e.jsx("td",{children:"HTTP + 서블릿 API"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Apache Tomcat"]}),e.jsx("p",{children:"Tomcat은 가장 널리 사용되는 오픈소스 서블릿 컨테이너입니다. 서블릿과 JSP를 실행할 수 있으며, 개발 및 프로덕션 환경 모두에서 활용됩니다. 현재 Tomcat 10.x부터 Jakarta EE 기반으로 전환되었습니다."})]}),e.jsx("h2",{children:"3. 개발 환경 설정"}),e.jsx("h3",{children:"필수 소프트웨어"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"JDK 17 이상"})," - Java 개발 도구 (OpenJDK 권장)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Apache Tomcat 10.x"})," - 서블릿 컨테이너"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"IDE"})," - IntelliJ IDEA Ultimate 또는 Eclipse Enterprise Edition"]})]}),e.jsx("h3",{children:"Tomcat 설치"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-terminal"})," Tomcat 설치 및 설정"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 1. Apache Tomcat 공식 사이트에서 다운로드
# https://tomcat.apache.org/download-10.cgi

# 2. 압축 해제 후 환경변수 설정
CATALINA_HOME = C:\\apache-tomcat-10.1
PATH에 추가: %CATALINA_HOME%\\bin

# 3. Tomcat 실행 확인
startup.bat          # Windows
./startup.sh         # Linux/Mac

# 4. 브라우저에서 확인
# http://localhost:8080 접속`})})]}),e.jsx("h3",{children:"IntelliJ IDEA 설정"}),e.jsx("p",{children:"IntelliJ IDEA Ultimate에서 서블릿 프로젝트를 생성하는 방법:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"File → New → Project 선택"}),e.jsx("li",{children:"Java Enterprise 선택, Application Server에 Tomcat 추가"}),e.jsx("li",{children:"Web Application 체크박스 선택"}),e.jsx("li",{children:"Servlet API 라이브러리가 자동으로 추가됨"})]}),e.jsx("h2",{children:"4. 첫 번째 서블릿 프로젝트"}),e.jsx("p",{children:"서블릿 프로젝트의 기본 디렉토리 구조를 이해합시다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-folder-open"})," 프로젝트 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`MyWebApp/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/
│       │       └── HelloServlet.java
│       └── webapp/
│           ├── WEB-INF/
│           │   └── web.xml          ← 배포 서술자
│           └── index.html
└── pom.xml (Maven) 또는 build.gradle (Gradle)`})})]}),e.jsx("h3",{children:"web.xml (배포 서술자)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," web.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         version="6.0">

    <display-name>My First Servlet App</display-name>

    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
    </welcome-file-list>
</web-app>`})})]}),e.jsx("h2",{children:"5. Hello Servlet 작성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," HelloServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.example;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/hello")   // URL 매핑: /hello 요청 시 이 서블릿 실행
public class HelloServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {

        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();

        out.println("<!DOCTYPE html>");
        out.println("<html><head><title>Hello Servlet</title></head>");
        out.println("<body>");
        out.println("<h1>안녕하세요! 첫 번째 서블릿입니다.</h1>");
        out.println("<p>현재 시간: " + new java.util.Date() + "</p>");
        out.println("</body></html>");
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"위 서블릿 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬 개발 환경을 설정한 후 실습하세요."})]}),e.jsx("h2",{children:"6. 서블릿 동작 구조"}),e.jsx("p",{children:"클라이언트가 서블릿을 호출할 때의 전체 흐름을 살펴봅시다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-sitemap"})," 서블릿 동작 흐름"]})}),e.jsx("pre",{children:e.jsx("code",{children:`[클라이언트(브라우저)]
      │ ① HTTP 요청 (GET /hello)
      ▼
[웹 서버 (Tomcat)]
      │ ② 요청 URL을 분석하여 해당 서블릿 찾기
      ▼
[서블릿 컨테이너]
      │ ③ HttpServletRequest, HttpServletResponse 객체 생성
      │ ④ 서블릿의 service() → doGet() 또는 doPost() 호출
      ▼
[HelloServlet.doGet()]
      │ ⑤ 비즈니스 로직 수행, 응답 HTML 생성
      ▼
[서블릿 컨테이너]
      │ ⑥ 응답 객체를 HTTP 응답으로 변환
      ▼
[클라이언트(브라우저)]
      └ ⑦ HTML 렌더링하여 화면에 표시`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 핵심 포인트"]}),e.jsxs("p",{children:["서블릿 컨테이너는 서블릿 인스턴스를 ",e.jsx("strong",{children:"싱글톤"}),"으로 관리합니다. 여러 클라이언트의 요청이 와도 하나의 서블릿 인스턴스에 여러 스레드가 동시에 접근합니다. 따라서 서블릿에서 인스턴스 변수 사용 시",e.jsx("strong",{children:"동시성(thread-safety)"}),"을 반드시 고려해야 합니다."]})]}),e.jsx("h3",{children:"직접 실행해보기"}),e.jsx("p",{children:"아래는 서블릿의 기본 개념인 HTTP 요청/응답 구조를 Java 콘솔에서 시뮬레이션한 예제입니다."}),e.jsx(n,{defaultCode:`public class Main {
    public static void main(String[] args) {
        System.out.println("=== 서블릿 동작 흐름 시뮬레이션 ===\\n");

        // 1단계: 클라이언트 요청
        String method = "GET";
        String url = "/hello";
        System.out.println("[클라이언트] " + method + " " + url + " HTTP/1.1");
        System.out.println("[클라이언트] Host: localhost:8080\\n");

        // 2단계: 서블릿 컨테이너가 요청 분석
        System.out.println("[컨테이너] 요청 URL 분석: " + url);
        System.out.println("[컨테이너] 매핑된 서블릿: HelloServlet\\n");

        // 3단계: 서블릿 메서드 호출
        System.out.println("[서블릿] doGet() 메서드 호출됨");
        System.out.println("[서블릿] 응답 생성 중...\\n");

        // 4단계: 응답 반환
        System.out.println("[응답] HTTP/1.1 200 OK");
        System.out.println("[응답] Content-Type: text/html; charset=UTF-8");
        System.out.println("[응답] <html><body>");
        System.out.println("[응답] <h1>안녕하세요! 첫 번째 서블릿입니다.</h1>");
        System.out.println("[응답] </body></html>");
    }
}`,title:"서블릿 동작 흐름 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["JDK와 Tomcat을 설치하고, ",e.jsx("code",{children:"http://localhost:8080"}),"에 접속하여 Tomcat 기본 페이지를 확인해보세요."]}),e.jsxs("li",{children:["HelloServlet을 작성하고 ",e.jsx("code",{children:"@WebServlet"})," 어노테이션으로 URL을 매핑해보세요."]}),e.jsxs("li",{children:["서블릿에서 현재 날짜와 시간을 HTML로 출력하는 ",e.jsx("code",{children:"TimeServlet"}),"을 만들어보세요."]}),e.jsx("li",{children:"웹 서버(Apache)와 WAS(Tomcat)의 차이점을 정리하고, 왜 실무에서 함께 사용하는지 설명해보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${l("S01")?"btn-primary":"btn-accent"}`,onClick:()=>t("S01"),children:l("S01")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/servlet",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 서블릿 허브"]}),e.jsxs(s,{to:"/servlet/02",children:["다음: HTTP 프로토콜과 요청/응답 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
