import{u as r,r as l,j as e,L as i}from"./index-BoSIsD-U.js";import{J as n}from"./JavaCodeRunner-DVjn1qWt.js";function c(){const{completeLesson:t,isLessonCompleted:s}=r();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(i,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(i,{to:"/servlet",children:"서블릿 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 06"})]}),e.jsx("h1",{children:"Lesson 06. 필터와 리스너"}),e.jsx("p",{children:"서블릿 필터로 요청/응답을 가로채고, 리스너로 웹 애플리케이션 이벤트를 처리하는 방법을 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 필터(Filter) 개념"}),e.jsxs("p",{children:["필터는 클라이언트의 요청이 서블릿에 도달하기 전, 그리고 서블릿의 응답이 클라이언트에게 전달되기 전에 요청과 응답을 가로채서 처리할 수 있는 컴포넌트입니다. 여러 필터를 연결하여 ",e.jsx("strong",{children:"필터 체인(Filter Chain)"}),"을 구성할 수 있습니다."]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 필터의 주요 용도"]}),e.jsx("p",{children:"인코딩 처리, 인증/인가 확인, 로깅, XSS 방지, 압축 등 공통 관심사(Cross-Cutting Concern)를 분리하여 처리합니다."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 필터 체인 흐름"]})}),e.jsx("pre",{children:e.jsx("code",{children:`[클라이언트] → [필터1] → [필터2] → [필터3] → [서블릿]
                ←         ←         ←         ←
(요청 전처리가 순서대로, 응답 후처리는 역순으로 실행)`})})]}),e.jsx("h2",{children:"2. Filter 인터페이스 구현"}),e.jsxs("p",{children:["필터를 만들려면 ",e.jsx("code",{children:"javax.servlet.Filter"})," 인터페이스를 구현해야 합니다. 세 가지 메서드를 제공합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MyFilter.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import javax.servlet.*;
import java.io.IOException;

public class MyFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 필터 초기화 시 한 번 호출
        String paramValue = filterConfig.getInitParameter("encoding");
        System.out.println("필터 초기화: encoding = " + paramValue);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        // 요청 전처리
        System.out.println("=== 요청 전처리 ===");
        long startTime = System.currentTimeMillis();

        // 다음 필터 또는 서블릿으로 전달
        chain.doFilter(request, response);

        // 응답 후처리
        long endTime = System.currentTimeMillis();
        System.out.println("=== 응답 후처리: 처리시간 " + (endTime - startTime) + "ms ===");
    }

    @Override
    public void destroy() {
        // 필터 소멸 시 호출 (리소스 정리)
        System.out.println("필터 소멸");
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsxs("p",{children:[e.jsx("code",{children:"chain.doFilter()"}),"를 호출하지 않으면 요청이 다음 필터나 서블릿으로 전달되지 않습니다. 인증 필터에서 이를 활용하여 접근을 차단할 수 있습니다."]})]}),e.jsx("h2",{children:"3. @WebFilter 어노테이션"}),e.jsxs("p",{children:["서블릿 3.0부터 ",e.jsx("code",{children:"@WebFilter"})," 어노테이션으로 web.xml 없이 필터를 등록할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," WebFilterExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebInitParam;

// 모든 URL에 적용
@WebFilter(
    urlPatterns = "/*",
    initParams = {
        @WebInitParam(name = "encoding", value = "UTF-8")
    }
)
public class EncodingFilter implements Filter {
    private String encoding;

    @Override
    public void init(FilterConfig config) throws ServletException {
        encoding = config.getInitParameter("encoding");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws java.io.IOException, ServletException {
        request.setCharacterEncoding(encoding);
        response.setCharacterEncoding(encoding);
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() { }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬에서 실습하세요."})]}),e.jsx("h2",{children:"4. 인코딩 필터 구현 예제"}),e.jsx("p",{children:"한글 깨짐 문제를 해결하는 인코딩 필터는 거의 모든 웹 프로젝트에서 사용됩니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CharacterEncodingFilter.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebFilter("/*")
public class CharacterEncodingFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException { }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        // 요청 인코딩 설정
        request.setCharacterEncoding("UTF-8");

        // 응답 인코딩 및 Content-Type 설정
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8");

        // 다음 필터 또는 서블릿으로 전달
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() { }
}`})})]}),e.jsx("h2",{children:"5. 로깅 필터 구현"}),e.jsx("p",{children:"모든 요청에 대해 접속 정보를 기록하는 로깅 필터입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," LoggingFilter.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebFilter("/*")
public class LoggingFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException { }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpReq = (HttpServletRequest) request;

        String method = httpReq.getMethod();
        String uri = httpReq.getRequestURI();
        String ip = httpReq.getRemoteAddr();
        String userAgent = httpReq.getHeader("User-Agent");

        long start = System.currentTimeMillis();
        System.out.println("[요청] " + method + " " + uri + " (IP: " + ip + ")");

        chain.doFilter(request, response);

        long elapsed = System.currentTimeMillis() - start;
        System.out.println("[응답] " + uri + " - " + elapsed + "ms");
    }

    @Override
    public void destroy() { }
}`})})]}),e.jsx("h2",{children:"6. 리스너(Listener) 개념"}),e.jsx("p",{children:"리스너는 웹 애플리케이션에서 발생하는 특정 이벤트를 감지하고 처리하는 컴포넌트입니다. 주요 리스너 인터페이스는 다음과 같습니다."}),e.jsxs("table",{className:"info-table",style:{width:"100%",borderCollapse:"collapse",margin:"16px 0"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#f0f0f0"},children:[e.jsx("th",{style:{padding:"10px",border:"1px solid #ddd"},children:"리스너"}),e.jsx("th",{style:{padding:"10px",border:"1px solid #ddd"},children:"이벤트"}),e.jsx("th",{style:{padding:"10px",border:"1px solid #ddd"},children:"용도"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"ServletContextListener"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"웹앱 시작/종료"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"초기화/정리 작업"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"HttpSessionListener"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"세션 생성/소멸"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"접속자 수 추적"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"ServletRequestListener"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"요청 시작/종료"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"요청 로깅"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"HttpSessionAttributeListener"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"세션 속성 변경"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"속성 감시"})]})]})]}),e.jsx("h2",{children:"7. 리스너 구현 예제 - 접속자 카운트"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SessionCounterListener.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import javax.servlet.annotation.WebListener;
import javax.servlet.http.*;

@WebListener
public class SessionCounterListener implements HttpSessionListener {
    private static int activeSessions = 0;

    public static int getActiveSessions() {
        return activeSessions;
    }

    @Override
    public void sessionCreated(HttpSessionEvent se) {
        activeSessions++;
        System.out.println("세션 생성! 현재 접속자 수: " + activeSessions);
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        if (activeSessions > 0) {
            activeSessions--;
        }
        System.out.println("세션 소멸! 현재 접속자 수: " + activeSessions);
    }
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AppInitListener.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebListener
public class AppInitListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("===== 웹 애플리케이션 시작 =====");
        // DB 연결풀 초기화, 설정 로드 등
        sce.getServletContext().setAttribute("appName", "MyWebApp");
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("===== 웹 애플리케이션 종료 =====");
        // 리소스 정리
    }
}`})})]}),e.jsx("h2",{children:"8. 필터 체인 순서"}),e.jsxs("p",{children:["필터의 실행 순서는 ",e.jsx("code",{children:"web.xml"}),"에 정의된 순서에 따라 결정됩니다.",e.jsx("code",{children:"@WebFilter"})," 어노테이션만 사용할 경우 순서가 보장되지 않으므로, 순서가 중요한 경우 ",e.jsx("code",{children:"web.xml"}),"에서 명시적으로 설정해야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," web.xml - 필터 순서 설정"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<web-app>
    <!-- 1번째: 인코딩 필터 -->
    <filter>
        <filter-name>encodingFilter</filter-name>
        <filter-class>com.example.CharacterEncodingFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>encodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

    <!-- 2번째: 로깅 필터 -->
    <filter>
        <filter-name>loggingFilter</filter-name>
        <filter-class>com.example.LoggingFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>loggingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

    <!-- 3번째: 인증 필터 -->
    <filter>
        <filter-name>authFilter</filter-name>
        <filter-class>com.example.AuthFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>authFilter</filter-name>
        <url-pattern>/admin/*</url-pattern>
    </filter-mapping>
</web-app>`})})]}),e.jsx("h2",{children:"9. 필터 체인 개념 실습"}),e.jsx("p",{children:"필터 체인의 동작 원리를 순수 자바로 시뮬레이션해봅니다."}),e.jsx(n,{defaultCode:`// 필터 체인 시뮬레이션 (순수 Java)
import java.util.*;

public class Main {
    // 필터 인터페이스 정의
    interface Filter {
        void doFilter(String request, List<Filter> chain, int index);
    }

    public static void main(String[] args) {
        // 필터 목록 생성
        List<Filter> filters = new ArrayList<>();

        // 인코딩 필터
        filters.add((req, chain, idx) -> {
            System.out.println("[인코딩 필터] 요청 전처리: UTF-8 설정");
            if (idx + 1 < chain.size()) {
                chain.get(idx + 1).doFilter(req, chain, idx + 1);
            } else {
                System.out.println(">>> [서블릿] 요청 처리: " + req);
            }
            System.out.println("[인코딩 필터] 응답 후처리");
        });

        // 로깅 필터
        filters.add((req, chain, idx) -> {
            long start = System.currentTimeMillis();
            System.out.println("[로깅 필터] 요청 시작: " + req);
            if (idx + 1 < chain.size()) {
                chain.get(idx + 1).doFilter(req, chain, idx + 1);
            } else {
                System.out.println(">>> [서블릿] 요청 처리: " + req);
            }
            System.out.println("[로깅 필터] 처리 완료");
        });

        // 인증 필터
        filters.add((req, chain, idx) -> {
            System.out.println("[인증 필터] 권한 확인 중...");
            boolean authenticated = true; // 인증 시뮬레이션
            if (authenticated) {
                System.out.println("[인증 필터] 인증 성공!");
                if (idx + 1 < chain.size()) {
                    chain.get(idx + 1).doFilter(req, chain, idx + 1);
                } else {
                    System.out.println(">>> [서블릿] 요청 처리: " + req);
                }
            } else {
                System.out.println("[인증 필터] 인증 실패! 요청 차단.");
            }
            System.out.println("[인증 필터] 후처리 완료");
        });

        System.out.println("===== 필터 체인 실행 =====\\n");
        filters.get(0).doFilter("GET /admin/dashboard", filters, 0);
    }
}`,title:"필터 체인 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["모든 요청에 대해 요청 URI, 처리 시간, HTTP 메서드를 로그로 출력하는 ",e.jsx("code",{children:"LoggingFilter"}),"를 구현하세요."]}),e.jsxs("li",{children:[e.jsx("code",{children:"/admin/*"})," 경로에 대해 세션에 로그인 정보가 없으면 로그인 페이지로 리다이렉트하는 ",e.jsx("code",{children:"AuthFilter"}),"를 구현하세요."]}),e.jsxs("li",{children:[e.jsx("code",{children:"HttpSessionListener"}),"를 구현하여 현재 접속자 수를 ",e.jsx("code",{children:"ServletContext"}),"에 저장하고, JSP에서 출력하세요."]}),e.jsxs("li",{children:["XSS 공격을 방지하기 위해 요청 파라미터에서 ",e.jsx("code",{children:"<script>"})," 태그를 제거하는 필터를 구현하세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("S06")?"btn-primary":"btn-accent"}`,onClick:()=>t("S06"),children:s("S06")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(i,{to:"/servlet/05",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 세션과 쿠키"]}),e.jsxs(i,{to:"/servlet/07",children:["다음: JSP 기초와 EL/JSTL ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{c as default};
