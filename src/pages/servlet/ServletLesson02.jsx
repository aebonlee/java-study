import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function ServletLesson02() {
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
            <span>Lesson 02</span>
          </div>
          <h1>Lesson 02. HTTP 프로토콜과 요청/응답</h1>
          <p>HTTP 프로토콜의 구조를 이해하고 서블릿에서 요청과 응답을 처리하는 방법을 학습합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          <h2>1. HTTP 프로토콜 기본</h2>
          <p>
            <strong>HTTP(HyperText Transfer Protocol)</strong>는 웹에서 클라이언트와 서버 간에 데이터를 주고받기 위한 프로토콜입니다.
            1991년 Tim Berners-Lee가 설계했으며, 현재 HTTP/1.1과 HTTP/2가 주로 사용됩니다.
          </p>

          <h3>HTTP의 핵심 특성</h3>
          <ul>
            <li><strong>비연결성(Connectionless)</strong> - 요청/응답 후 연결을 끊습니다 (HTTP/1.1에서 Keep-Alive로 개선)</li>
            <li><strong>무상태성(Stateless)</strong> - 서버가 클라이언트의 이전 요청 상태를 기억하지 않습니다</li>
            <li><strong>요청/응답 모델</strong> - 항상 클라이언트가 요청하고 서버가 응답하는 구조입니다</li>
            <li><strong>텍스트 기반</strong> - 헤더는 사람이 읽을 수 있는 텍스트 형식입니다</li>
          </ul>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 무상태성이 중요한 이유</div>
            <p>HTTP가 무상태(Stateless)이기 때문에 서버는 각 요청을 독립적으로 처리합니다.
            로그인 상태 유지 등을 위해 <strong>쿠키(Cookie)</strong>와 <strong>세션(Session)</strong> 기술이 필요하며,
            이는 Lesson 05에서 자세히 다룹니다.</p>
          </div>

          <h2>2. HTTP 메서드</h2>
          <p>HTTP 메서드는 클라이언트가 서버에 요청하는 작업의 종류를 나타냅니다.</p>

          <table>
            <thead>
              <tr><th>메서드</th><th>용도</th><th>요청 본문</th><th>멱등성</th><th>서블릿 메서드</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>GET</strong></td><td>리소스 조회</td><td>없음</td><td>O</td><td>doGet()</td></tr>
              <tr><td><strong>POST</strong></td><td>리소스 생성, 데이터 전송</td><td>있음</td><td>X</td><td>doPost()</td></tr>
              <tr><td><strong>PUT</strong></td><td>리소스 전체 수정</td><td>있음</td><td>O</td><td>doPut()</td></tr>
              <tr><td><strong>DELETE</strong></td><td>리소스 삭제</td><td>없음</td><td>O</td><td>doDelete()</td></tr>
              <tr><td><strong>PATCH</strong></td><td>리소스 부분 수정</td><td>있음</td><td>X</td><td>service()</td></tr>
              <tr><td><strong>HEAD</strong></td><td>헤더만 조회</td><td>없음</td><td>O</td><td>doHead()</td></tr>
              <tr><td><strong>OPTIONS</strong></td><td>지원 메서드 확인</td><td>없음</td><td>O</td><td>doOptions()</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 멱등성(Idempotent)</div>
            <p>같은 요청을 여러 번 보내도 결과가 동일한 성질입니다. GET은 여러 번 조회해도 같은 결과를 반환하지만,
            POST는 매번 새로운 리소스를 생성할 수 있으므로 멱등하지 않습니다.</p>
          </div>

          <h2>3. HTTP 요청 구조</h2>
          <p>HTTP 요청 메시지는 크게 세 부분으로 구성됩니다.</p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-envelope"></i> HTTP 요청 메시지 구조</span>
            </div>
            <pre><code>{`┌─────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────┘`}</code></pre>
          </div>

          <h2>4. HTTP 응답 구조</h2>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-reply"></i> HTTP 응답 메시지 구조</span>
            </div>
            <pre><code>{`┌─────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────┘`}</code></pre>
          </div>

          <h2>5. 상태 코드</h2>
          <p>HTTP 상태 코드는 서버가 클라이언트 요청을 처리한 결과를 숫자로 나타냅니다.</p>

          <table>
            <thead>
              <tr><th>코드</th><th>상태</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>200</strong></td><td>OK</td><td>요청 성공</td></tr>
              <tr><td><strong>201</strong></td><td>Created</td><td>리소스 생성 성공</td></tr>
              <tr><td><strong>301</strong></td><td>Moved Permanently</td><td>영구 리다이렉트</td></tr>
              <tr><td><strong>302</strong></td><td>Found</td><td>임시 리다이렉트</td></tr>
              <tr><td><strong>400</strong></td><td>Bad Request</td><td>잘못된 요청 구문</td></tr>
              <tr><td><strong>403</strong></td><td>Forbidden</td><td>접근 권한 없음</td></tr>
              <tr><td><strong>404</strong></td><td>Not Found</td><td>리소스를 찾을 수 없음</td></tr>
              <tr><td><strong>405</strong></td><td>Method Not Allowed</td><td>허용되지 않은 HTTP 메서드</td></tr>
              <tr><td><strong>500</strong></td><td>Internal Server Error</td><td>서버 내부 오류</td></tr>
              <tr><td><strong>503</strong></td><td>Service Unavailable</td><td>서비스 이용 불가 (과부하/점검)</td></tr>
            </tbody>
          </table>

          <h2>6. HttpServletRequest</h2>
          <p>서블릿에서 클라이언트의 요청 정보를 읽기 위해 <code>HttpServletRequest</code> 객체를 사용합니다.</p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> RequestInfoServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/request-info")
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
}`}</code></pre>
          </div>

          <h2>7. HttpServletResponse</h2>
          <p>서블릿에서 클라이언트에게 응답을 보내기 위해 <code>HttpServletResponse</code> 객체를 사용합니다.</p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> ResponseServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/response-demo")
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
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>위 서블릿 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬 개발 환경을 설정한 후 실습하세요.</p>
          </div>

          <h3>직접 실행해보기</h3>
          <p>아래 예제는 HTTP 요청/응답의 구조를 Java 문자열 파싱으로 시뮬레이션합니다.</p>

          <JavaCodeRunner defaultCode={`import java.util.HashMap;
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
}`} title="HTTP 요청/응답 파싱 시뮬레이션" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li><code>HttpServletRequest</code>를 사용하여 모든 요청 헤더를 출력하는 서블릿을 작성해보세요.</li>
              <li>GET과 POST 요청을 모두 처리하는 서블릿을 만들고, 각각 다른 응답을 반환해보세요.</li>
              <li><code>response.sendRedirect()</code>를 사용하여 다른 페이지로 리다이렉트하는 서블릿을 만들어보세요.</li>
              <li>상태 코드 404를 반환하면서 커스텀 에러 페이지를 보여주는 서블릿을 작성해보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('S02') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('S02')}
            >
              {isLessonCompleted('S02') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/servlet/01"><i className="fas fa-arrow-left"></i> 이전: 서블릿 개요와 환경설정</Link>
            <Link to="/servlet/03">다음: 서블릿 생명주기 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
