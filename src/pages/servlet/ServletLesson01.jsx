import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function ServletLesson01() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/servlet">서블릿 과정</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Lesson 01</span>
          </div>
          <h1>Lesson 01. 서블릿 개요와 환경설정</h1>
          <p>서블릿의 개념을 이해하고 개발 환경을 구축합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          <h2>1. 서블릿이란?</h2>
          <p>
            <strong>서블릿(Servlet)</strong>은 Java를 사용하여 웹 서버에서 동적인 웹 페이지를 생성하는 서버 측 프로그램입니다.
            1997년 Sun Microsystems에서 처음 발표되었으며, 현재는 Jakarta EE(구 Java EE) 스펙의 핵심 기술입니다.
          </p>
          <p>
            서블릿은 클라이언트의 HTTP 요청을 받아 처리하고, 그 결과를 HTTP 응답으로 돌려주는 역할을 합니다.
            JSP, Spring MVC 등 대부분의 Java 웹 프레임워크가 내부적으로 서블릿을 기반으로 동작합니다.
          </p>

          <h3>서블릿의 주요 특징</h3>
          <ul>
            <li><strong>플랫폼 독립성</strong> - Java로 작성되므로 운영체제에 관계없이 동작합니다</li>
            <li><strong>높은 성능</strong> - 요청마다 새 프로세스가 아닌 스레드로 처리하여 효율적입니다</li>
            <li><strong>보안</strong> - Java의 보안 매니저를 활용하여 안전하게 실행됩니다</li>
            <li><strong>확장성</strong> - Java의 모든 API를 활용할 수 있어 확장이 용이합니다</li>
            <li><strong>컨테이너 관리</strong> - 서블릿 컨테이너가 생명주기를 자동으로 관리합니다</li>
          </ul>

          <h2>2. 웹 서버와 WAS</h2>
          <p>웹 애플리케이션을 서비스하려면 웹 서버와 WAS(Web Application Server)의 차이를 이해해야 합니다.</p>

          <table>
            <thead>
              <tr><th>구분</th><th>웹 서버</th><th>WAS (서블릿 컨테이너)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>역할</strong></td><td>정적 콘텐츠 제공 (HTML, CSS, 이미지)</td><td>동적 콘텐츠 생성 (서블릿, JSP 실행)</td></tr>
              <tr><td><strong>예시</strong></td><td>Apache HTTP Server, Nginx</td><td>Apache Tomcat, Jetty, WildFly</td></tr>
              <tr><td><strong>처리 방식</strong></td><td>파일을 그대로 전달</td><td>Java 코드를 실행하여 결과를 생성</td></tr>
              <tr><td><strong>프로토콜</strong></td><td>HTTP</td><td>HTTP + 서블릿 API</td></tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> Apache Tomcat</div>
            <p>Tomcat은 가장 널리 사용되는 오픈소스 서블릿 컨테이너입니다. 서블릿과 JSP를 실행할 수 있으며,
            개발 및 프로덕션 환경 모두에서 활용됩니다. 현재 Tomcat 10.x부터 Jakarta EE 기반으로 전환되었습니다.</p>
          </div>

          <h2>3. 개발 환경 설정</h2>
          <h3>필수 소프트웨어</h3>
          <ul>
            <li><strong>JDK 17 이상</strong> - Java 개발 도구 (OpenJDK 권장)</li>
            <li><strong>Apache Tomcat 10.x</strong> - 서블릿 컨테이너</li>
            <li><strong>IDE</strong> - IntelliJ IDEA Ultimate 또는 Eclipse Enterprise Edition</li>
          </ul>

          <h3>Tomcat 설치</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> Tomcat 설치 및 설정</span>
            </div>
            <pre><code>{`# 1. Apache Tomcat 공식 사이트에서 다운로드
# https://tomcat.apache.org/download-10.cgi

# 2. 압축 해제 후 환경변수 설정
CATALINA_HOME = C:\\apache-tomcat-10.1
PATH에 추가: %CATALINA_HOME%\\bin

# 3. Tomcat 실행 확인
startup.bat          # Windows
./startup.sh         # Linux/Mac

# 4. 브라우저에서 확인
# http://localhost:8080 접속`}</code></pre>
          </div>

          <h3>IntelliJ IDEA 설정</h3>
          <p>IntelliJ IDEA Ultimate에서 서블릿 프로젝트를 생성하는 방법:</p>
          <ol>
            <li>File → New → Project 선택</li>
            <li>Java Enterprise 선택, Application Server에 Tomcat 추가</li>
            <li>Web Application 체크박스 선택</li>
            <li>Servlet API 라이브러리가 자동으로 추가됨</li>
          </ol>

          <h2>4. 첫 번째 서블릿 프로젝트</h2>
          <p>서블릿 프로젝트의 기본 디렉토리 구조를 이해합시다.</p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-folder-open"></i> 프로젝트 구조</span>
            </div>
            <pre><code>{`MyWebApp/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/
│       │       └── HelloServlet.java
│       └── webapp/
│           ├── WEB-INF/
│           │   └── web.xml          ← 배포 서술자
│           └── index.html
└── pom.xml (Maven) 또는 build.gradle (Gradle)`}</code></pre>
          </div>

          <h3>web.xml (배포 서술자)</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> web.xml</span>
            </div>
            <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         version="6.0">

    <display-name>My First Servlet App</display-name>

    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
    </welcome-file-list>
</web-app>`}</code></pre>
          </div>

          <h2>5. Hello Servlet 작성</h2>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> HelloServlet.java</span>
            </div>
            <pre><code>{`package com.example;

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
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>위 서블릿 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬 개발 환경을 설정한 후 실습하세요.</p>
          </div>

          <h2>6. 서블릿 동작 구조</h2>
          <p>클라이언트가 서블릿을 호출할 때의 전체 흐름을 살펴봅시다.</p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> 서블릿 동작 흐름</span>
            </div>
            <pre><code>{`[클라이언트(브라우저)]
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
      └ ⑦ HTML 렌더링하여 화면에 표시`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 핵심 포인트</div>
            <p>서블릿 컨테이너는 서블릿 인스턴스를 <strong>싱글톤</strong>으로 관리합니다. 여러 클라이언트의 요청이 와도
            하나의 서블릿 인스턴스에 여러 스레드가 동시에 접근합니다. 따라서 서블릿에서 인스턴스 변수 사용 시
            <strong>동시성(thread-safety)</strong>을 반드시 고려해야 합니다.</p>
          </div>

          <h3>직접 실행해보기</h3>
          <p>아래는 서블릿의 기본 개념인 HTTP 요청/응답 구조를 Java 콘솔에서 시뮬레이션한 예제입니다.</p>

          <JavaCodeRunner defaultCode={`public class Main {
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
}`} title="서블릿 동작 흐름 시뮬레이션" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>JDK와 Tomcat을 설치하고, <code>http://localhost:8080</code>에 접속하여 Tomcat 기본 페이지를 확인해보세요.</li>
              <li>HelloServlet을 작성하고 <code>@WebServlet</code> 어노테이션으로 URL을 매핑해보세요.</li>
              <li>서블릿에서 현재 날짜와 시간을 HTML로 출력하는 <code>TimeServlet</code>을 만들어보세요.</li>
              <li>웹 서버(Apache)와 WAS(Tomcat)의 차이점을 정리하고, 왜 실무에서 함께 사용하는지 설명해보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('S01') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('S01')}
            >
              {isLessonCompleted('S01') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/servlet"><i className="fas fa-arrow-left"></i> 이전: 서블릿 허브</Link>
            <Link to="/servlet/02">다음: HTTP 프로토콜과 요청/응답 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
