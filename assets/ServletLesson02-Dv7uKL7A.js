import{u as n,r as l,j as e,L as s}from"./index-DwPPxUEv.js";import{J as i}from"./JavaCodeRunner-DfOPIJyz.js";function h(){const{completeLesson:r,isLessonCompleted:t}=n();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/servlet",children:"서블릿 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 02"})]}),e.jsx("h1",{children:"Lesson 02. HTTP 프로토콜과 요청/응답"}),e.jsx("p",{children:"HTTP 프로토콜의 구조를 이해하고 서블릿에서 요청과 응답을 처리하는 방법을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. HTTP 프로토콜 기본"}),e.jsxs("p",{children:[e.jsx("strong",{children:"HTTP(HyperText Transfer Protocol)"}),"는 웹에서 클라이언트와 서버 간에 데이터를 주고받기 위한 프로토콜입니다. 1991년 Tim Berners-Lee가 설계했으며, 현재 HTTP/1.1과 HTTP/2가 주로 사용됩니다."]}),e.jsx("h3",{children:"HTTP의 핵심 특성"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"비연결성(Connectionless)"})," - 요청/응답 후 연결을 끊습니다 (HTTP/1.1에서 Keep-Alive로 개선)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"무상태성(Stateless)"})," - 서버가 클라이언트의 이전 요청 상태를 기억하지 않습니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"요청/응답 모델"})," - 항상 클라이언트가 요청하고 서버가 응답하는 구조입니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"텍스트 기반"})," - 헤더는 사람이 읽을 수 있는 텍스트 형식입니다"]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 무상태성이 중요한 이유"]}),e.jsxs("p",{children:["HTTP가 무상태(Stateless)이기 때문에 서버는 각 요청을 독립적으로 처리합니다. 로그인 상태 유지 등을 위해 ",e.jsx("strong",{children:"쿠키(Cookie)"}),"와 ",e.jsx("strong",{children:"세션(Session)"})," 기술이 필요하며, 이는 Lesson 05에서 자세히 다룹니다."]})]}),e.jsx("h2",{children:"2. HTTP 메서드"}),e.jsx("p",{children:"HTTP 메서드는 클라이언트가 서버에 요청하는 작업의 종류를 나타냅니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"메서드"}),e.jsx("th",{children:"용도"}),e.jsx("th",{children:"요청 본문"}),e.jsx("th",{children:"멱등성"}),e.jsx("th",{children:"서블릿 메서드"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GET"})}),e.jsx("td",{children:"리소스 조회"}),e.jsx("td",{children:"없음"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"doGet()"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"POST"})}),e.jsx("td",{children:"리소스 생성, 데이터 전송"}),e.jsx("td",{children:"있음"}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"doPost()"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"PUT"})}),e.jsx("td",{children:"리소스 전체 수정"}),e.jsx("td",{children:"있음"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"doPut()"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DELETE"})}),e.jsx("td",{children:"리소스 삭제"}),e.jsx("td",{children:"없음"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"doDelete()"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"PATCH"})}),e.jsx("td",{children:"리소스 부분 수정"}),e.jsx("td",{children:"있음"}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"service()"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"HEAD"})}),e.jsx("td",{children:"헤더만 조회"}),e.jsx("td",{children:"없음"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"doHead()"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"OPTIONS"})}),e.jsx("td",{children:"지원 메서드 확인"}),e.jsx("td",{children:"없음"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"doOptions()"})]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 멱등성(Idempotent)"]}),e.jsx("p",{children:"같은 요청을 여러 번 보내도 결과가 동일한 성질입니다. GET은 여러 번 조회해도 같은 결과를 반환하지만, POST는 매번 새로운 리소스를 생성할 수 있으므로 멱등하지 않습니다."})]}),e.jsx("h2",{children:"3. HTTP 요청 구조"}),e.jsx("p",{children:"HTTP 요청 메시지는 크게 세 부분으로 구성됩니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-envelope"})," HTTP 요청 메시지 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`┌─────────────────────────────────────────────────┐
│ [Request Line]                                   │
│ GET /servlet/search?keyword=java HTTP/1.1        │
│ ─── ─────────────────────────── ────────         │
│ 메서드     요청 URI                 HTTP 버전     │
├─────────────────────────────────────────────────┤
│ [Headers]                                        │
│ Host: localhost:8080                             │
│ User-Agent: Mozilla/5.0 ...                      │
│ Accept: text/html, application/json              │
│ Accept-Language: ko-KR, ko;q=0.9                 │
│ Accept-Encoding: gzip, deflate                   │
│ Connection: keep-alive                           │
│ Cookie: JSESSIONID=ABC123                        │
├─────────────────────────────────────────────────┤
│ [Body] (POST/PUT 요청 시)                         │
│ username=hong&password=1234                       │
└─────────────────────────────────────────────────┘`})})]}),e.jsx("h2",{children:"4. HTTP 응답 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-reply"})," HTTP 응답 메시지 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`┌─────────────────────────────────────────────────┐
│ [Status Line]                                    │
│ HTTP/1.1 200 OK                                  │
│ ────────  ───  ──                                │
│ HTTP 버전 상태코드 상태 메시지                      │
├─────────────────────────────────────────────────┤
│ [Response Headers]                               │
│ Content-Type: text/html; charset=UTF-8           │
│ Content-Length: 1024                              │
│ Set-Cookie: JSESSIONID=XYZ789                    │
│ Date: Mon, 23 Mar 2026 09:00:00 GMT             │
├─────────────────────────────────────────────────┤
│ [Response Body]                                  │
│ <!DOCTYPE html>                                  │
│ <html>                                           │
│   <body><h1>검색 결과</h1></body>                 │
│ </html>                                          │
└─────────────────────────────────────────────────┘`})})]}),e.jsx("h2",{children:"5. 상태 코드"}),e.jsx("p",{children:"HTTP 상태 코드는 서버가 클라이언트 요청을 처리한 결과를 숫자로 나타냅니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"코드"}),e.jsx("th",{children:"상태"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"200"})}),e.jsx("td",{children:"OK"}),e.jsx("td",{children:"요청 성공"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"201"})}),e.jsx("td",{children:"Created"}),e.jsx("td",{children:"리소스 생성 성공"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"301"})}),e.jsx("td",{children:"Moved Permanently"}),e.jsx("td",{children:"영구 리다이렉트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"302"})}),e.jsx("td",{children:"Found"}),e.jsx("td",{children:"임시 리다이렉트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"400"})}),e.jsx("td",{children:"Bad Request"}),e.jsx("td",{children:"잘못된 요청 구문"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"403"})}),e.jsx("td",{children:"Forbidden"}),e.jsx("td",{children:"접근 권한 없음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"404"})}),e.jsx("td",{children:"Not Found"}),e.jsx("td",{children:"리소스를 찾을 수 없음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"405"})}),e.jsx("td",{children:"Method Not Allowed"}),e.jsx("td",{children:"허용되지 않은 HTTP 메서드"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"500"})}),e.jsx("td",{children:"Internal Server Error"}),e.jsx("td",{children:"서버 내부 오류"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"503"})}),e.jsx("td",{children:"Service Unavailable"}),e.jsx("td",{children:"서비스 이용 불가 (과부하/점검)"})]})]})]}),e.jsx("h2",{children:"6. HttpServletRequest"}),e.jsxs("p",{children:["서블릿에서 클라이언트의 요청 정보를 읽기 위해 ",e.jsx("code",{children:"HttpServletRequest"})," 객체를 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," RequestInfoServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/request-info")
public class RequestInfoServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {

        // 요청 라인 정보
        String method = request.getMethod();           // GET
        String uri = request.getRequestURI();          // /request-info
        String queryString = request.getQueryString();  // key=value&...
        String protocol = request.getProtocol();       // HTTP/1.1

        // 헤더 정보
        String userAgent = request.getHeader("User-Agent");
        String accept = request.getHeader("Accept");
        String host = request.getHeader("Host");

        // 파라미터
        String name = request.getParameter("name");

        // 클라이언트 정보
        String clientIP = request.getRemoteAddr();
        int clientPort = request.getRemotePort();

        // 쿠키
        Cookie[] cookies = request.getCookies();

        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<h2>요청 정보</h2>");
        out.println("<p>Method: " + method + "</p>");
        out.println("<p>URI: " + uri + "</p>");
        out.println("<p>Client IP: " + clientIP + "</p>");
    }
}`})})]}),e.jsx("h2",{children:"7. HttpServletResponse"}),e.jsxs("p",{children:["서블릿에서 클라이언트에게 응답을 보내기 위해 ",e.jsx("code",{children:"HttpServletResponse"})," 객체를 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ResponseServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/response-demo")
public class ResponseServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {

        // 응답 콘텐츠 타입 설정
        response.setContentType("text/html; charset=UTF-8");

        // 응답 상태 코드 설정
        response.setStatus(HttpServletResponse.SC_OK);  // 200

        // 응답 헤더 설정
        response.setHeader("X-Custom-Header", "MyValue");
        response.setDateHeader("Expires", 0);  // 캐시 무효화

        // 응답 본문 작성
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>응답 예제</h1>");
        out.println("</body></html>");

        // 리다이렉트 (다른 URL로 이동)
        // response.sendRedirect("/other-page");

        // 에러 응답
        // response.sendError(HttpServletResponse.SC_NOT_FOUND, "페이지를 찾을 수 없습니다");
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"위 서블릿 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬 개발 환경을 설정한 후 실습하세요."})]}),e.jsx("h3",{children:"직접 실행해보기"}),e.jsx("p",{children:"아래 예제는 HTTP 요청/응답의 구조를 Java 문자열 파싱으로 시뮬레이션합니다."}),e.jsx(i,{defaultCode:`import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // HTTP 요청 문자열 파싱 시뮬레이션
        String requestLine = "GET /search?keyword=java&page=1 HTTP/1.1";
        System.out.println("=== HTTP 요청 파싱 ===");
        System.out.println("원본: " + requestLine);

        String[] parts = requestLine.split(" ");
        String method = parts[0];
        String fullUri = parts[1];
        String protocol = parts[2];

        System.out.println("메서드: " + method);
        System.out.println("프로토콜: " + protocol);

        // URI에서 경로와 쿼리 스트링 분리
        String path = fullUri.contains("?") ?
            fullUri.substring(0, fullUri.indexOf("?")) : fullUri;
        String queryString = fullUri.contains("?") ?
            fullUri.substring(fullUri.indexOf("?") + 1) : "";

        System.out.println("경로: " + path);
        System.out.println("쿼리 스트링: " + queryString);

        // 파라미터 파싱
        Map<String, String> params = new HashMap<>();
        if (!queryString.isEmpty()) {
            for (String param : queryString.split("&")) {
                String[] kv = param.split("=");
                params.put(kv[0], kv[1]);
            }
        }
        System.out.println("\\n=== 파라미터 ===");
        params.forEach((k, v) ->
            System.out.println("  " + k + " = " + v));

        // HTTP 응답 생성
        System.out.println("\\n=== HTTP 응답 생성 ===");
        System.out.println("HTTP/1.1 200 OK");
        System.out.println("Content-Type: text/html; charset=UTF-8");
        System.out.println();
        System.out.println("<html><body>");
        System.out.println("<h1>검색 결과: " + params.get("keyword") + "</h1>");
        System.out.println("<p>페이지: " + params.get("page") + "</p>");
        System.out.println("</body></html>");
    }
}`,title:"HTTP 요청/응답 파싱 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"HttpServletRequest"}),"를 사용하여 모든 요청 헤더를 출력하는 서블릿을 작성해보세요."]}),e.jsx("li",{children:"GET과 POST 요청을 모두 처리하는 서블릿을 만들고, 각각 다른 응답을 반환해보세요."}),e.jsxs("li",{children:[e.jsx("code",{children:"response.sendRedirect()"}),"를 사용하여 다른 페이지로 리다이렉트하는 서블릿을 만들어보세요."]}),e.jsx("li",{children:"상태 코드 404를 반환하면서 커스텀 에러 페이지를 보여주는 서블릿을 작성해보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${t("S02")?"btn-primary":"btn-accent"}`,onClick:()=>r("S02"),children:t("S02")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/servlet/01",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 서블릿 개요와 환경설정"]}),e.jsxs(s,{to:"/servlet/03",children:["다음: 서블릿 생명주기 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{h as default};
