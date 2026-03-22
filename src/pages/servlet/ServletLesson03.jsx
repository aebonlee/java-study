import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function ServletLesson03() {
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
            <span>Lesson 03</span>
          </div>
          <h1>Lesson 03. 서블릿 생명주기</h1>
          <p>서블릿이 생성되고 소멸되기까지의 전체 생명주기를 이해합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          <h2>1. 서블릿 생명주기 개요</h2>
          <p>
            서블릿의 생명주기(Lifecycle)는 서블릿 컨테이너에 의해 관리됩니다. 서블릿은
            <strong>로딩 → 초기화 → 서비스 → 소멸</strong>의 단계를 거치며, 각 단계마다
            특정 메서드가 호출됩니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> 서블릿 생명주기 다이어그램</span>
            </div>
            <pre><code>{`┌──────────────────────────────────────────────────────────┐
│                    서블릿 생명주기                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ① 클래스 로딩 (Class Loading)                            │
│     └─ 서블릿 컨테이너가 서블릿 클래스를 메모리에 로드       │
│                    │                                     │
│                    ▼                                     │
│  ② init() 호출 (초기화) ─── 최초 1회만 실행                │
│     └─ DB 연결, 설정 파일 읽기 등 초기화 작업               │
│                    │                                     │
│                    ▼                                     │
│  ③ service() 호출 (서비스) ─── 요청마다 반복 실행           │
│     ├─ doGet()    : GET 요청 처리                         │
│     ├─ doPost()   : POST 요청 처리                        │
│     ├─ doPut()    : PUT 요청 처리                         │
│     └─ doDelete() : DELETE 요청 처리                      │
│                    │                                     │
│                    ▼                                     │
│  ④ destroy() 호출 (소멸) ─── 컨테이너 종료 시 1회 실행     │
│     └─ DB 연결 해제, 리소스 정리 등 정리 작업               │
│                                                          │
└──────────────────────────────────────────────────────────┘`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 핵심 포인트</div>
            <p><code>init()</code>과 <code>destroy()</code>는 서블릿 인스턴스당 <strong>한 번만</strong> 호출됩니다.
            반면 <code>service()</code>는 클라이언트 요청이 올 때마다 <strong>매번</strong> 호출됩니다.
            하나의 서블릿 인스턴스가 여러 스레드에서 동시에 service()를 실행할 수 있습니다.</p>
          </div>

          <h2>2. init() 메서드</h2>
          <p>
            <code>init()</code>은 서블릿이 처음 생성될 때 단 한 번 호출되는 초기화 메서드입니다.
            데이터베이스 연결, 설정 파일 로드 등 비용이 큰 초기화 작업을 수행합니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> init() 메서드 활용</span>
            </div>
            <pre><code>{`@WebServlet("/config")
public class ConfigServlet extends HttpServlet {

    private String dbUrl;
    private int maxConnections;

    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);  // 반드시 부모 init() 호출!

        // 초기화 파라미터 읽기
        dbUrl = config.getInitParameter("dbUrl");
        maxConnections = Integer.parseInt(
            config.getInitParameter("maxConnections")
        );

        System.out.println("[init] 서블릿 초기화 완료");
        System.out.println("[init] DB URL: " + dbUrl);
        System.out.println("[init] Max Connections: " + maxConnections);
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {
        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<h2>DB URL: " + dbUrl + "</h2>");
    }
}`}</code></pre>
          </div>

          <h3>ServletConfig로 초기화 파라미터 전달</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> web.xml - 초기화 파라미터</span>
            </div>
            <pre><code>{`<servlet>
    <servlet-name>ConfigServlet</servlet-name>
    <servlet-class>com.example.ConfigServlet</servlet-class>
    <init-param>
        <param-name>dbUrl</param-name>
        <param-value>jdbc:mysql://localhost:3306/mydb</param-value>
    </init-param>
    <init-param>
        <param-name>maxConnections</param-name>
        <param-value>10</param-value>
    </init-param>
</servlet>`}</code></pre>
          </div>

          <h2>3. service() 메서드</h2>
          <p>
            <code>service()</code>는 클라이언트의 요청이 들어올 때마다 호출됩니다.
            HTTP 메서드에 따라 적절한 <code>doXxx()</code> 메서드로 요청을 분기합니다.
            일반적으로 service()를 직접 오버라이드하지 않고, doGet(), doPost() 등을 구현합니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> service() 내부 동작</span>
            </div>
            <pre><code>{`// HttpServlet의 service() 메서드 (내부 구현 개념)
protected void service(HttpServletRequest req,
                       HttpServletResponse resp) {

    String method = req.getMethod();

    if (method.equals("GET")) {
        doGet(req, resp);
    } else if (method.equals("POST")) {
        doPost(req, resp);
    } else if (method.equals("PUT")) {
        doPut(req, resp);
    } else if (method.equals("DELETE")) {
        doDelete(req, resp);
    }
    // ... 기타 HTTP 메서드
}`}</code></pre>
          </div>

          <h3>doGet()과 doPost() 구현</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> MultiMethodServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/multi")
public class MultiMethodServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {
        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<h2>GET 요청을 처리했습니다</h2>");
        out.println("<form method='POST' action='/multi'>");
        out.println("  <input type='text' name='message'>");
        out.println("  <button type='submit'>전송 (POST)</button>");
        out.println("</form>");
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws IOException {
        request.setCharacterEncoding("UTF-8");
        String message = request.getParameter("message");

        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<h2>POST 요청을 처리했습니다</h2>");
        out.println("<p>받은 메시지: " + message + "</p>");
    }
}`}</code></pre>
          </div>

          <h2>4. destroy() 메서드</h2>
          <p>
            <code>destroy()</code>는 서블릿이 메모리에서 제거되기 직전에 한 번 호출됩니다.
            서버 종료, 웹 애플리케이션 언로드, 또는 서블릿 컨테이너의 판단에 의해 호출됩니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> destroy() 예제</span>
            </div>
            <pre><code>{`@WebServlet("/resource")
public class ResourceServlet extends HttpServlet {

    private java.sql.Connection dbConnection;

    @Override
    public void init() throws ServletException {
        System.out.println("[init] DB 연결 생성");
        // dbConnection = DriverManager.getConnection(...);
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {
        // DB를 사용한 비즈니스 로직
        response.getWriter().println("서비스 처리 중...");
    }

    @Override
    public void destroy() {
        System.out.println("[destroy] 리소스 정리 시작");
        try {
            if (dbConnection != null && !dbConnection.isClosed()) {
                dbConnection.close();
                System.out.println("[destroy] DB 연결 해제 완료");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("[destroy] 서블릿 소멸 완료");
    }
}`}</code></pre>
          </div>

          <h2>5. 생명주기 전체 예제</h2>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> LifecycleServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/lifecycle")
public class LifecycleServlet extends HttpServlet {

    private int requestCount = 0;

    @Override
    public void init() throws ServletException {
        System.out.println("===== [1] init() 호출 - 서블릿 초기화 =====");
        System.out.println("시간: " + new java.util.Date());
    }

    @Override
    protected void service(HttpServletRequest request,
                           HttpServletResponse response)
            throws ServletException, IOException {
        requestCount++;
        System.out.println("[2] service() 호출 - 요청 #" + requestCount);
        super.service(request, response);  // doGet/doPost로 분기
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {
        System.out.println("[3] doGet() 호출");
        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<h1>생명주기 테스트</h1>");
        out.println("<p>총 요청 수: " + requestCount + "</p>");
        out.println("<p>서버 콘솔에서 로그를 확인하세요!</p>");
    }

    @Override
    public void destroy() {
        System.out.println("===== [4] destroy() 호출 - 서블릿 소멸 =====");
        System.out.println("총 처리한 요청 수: " + requestCount);
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>위 서블릿 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬 개발 환경을 설정한 후 실습하세요.
            Tomcat 콘솔에서 init, service, destroy 로그를 확인할 수 있습니다.</p>
          </div>

          <h2>6. 서블릿 컨테이너의 역할</h2>
          <p>서블릿 컨테이너(Tomcat 등)는 서블릿의 전체 생명주기를 관리합니다.</p>

          <table>
            <thead>
              <tr><th>역할</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>서블릿 인스턴스 관리</strong></td><td>서블릿 클래스를 로드하고 인스턴스를 생성/소멸합니다 (싱글톤)</td></tr>
              <tr><td><strong>스레드 관리</strong></td><td>요청마다 새 스레드를 할당하거나 스레드 풀에서 재사용합니다</td></tr>
              <tr><td><strong>요청/응답 객체 생성</strong></td><td>HttpServletRequest, HttpServletResponse 객체를 생성합니다</td></tr>
              <tr><td><strong>URL 매핑</strong></td><td>요청 URL을 분석하여 적절한 서블릿을 찾아 호출합니다</td></tr>
              <tr><td><strong>보안 관리</strong></td><td>인증, 인가, SSL/TLS 처리를 담당합니다</td></tr>
              <tr><td><strong>JSP 처리</strong></td><td>JSP 파일을 서블릿으로 변환하고 컴파일합니다</td></tr>
            </tbody>
          </table>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 주의: 스레드 안전성</div>
            <p>서블릿 인스턴스는 <strong>하나</strong>만 생성되고 여러 스레드가 동시에 접근합니다.
            따라서 인스턴스 변수(위 예제의 <code>requestCount</code>)는 동시성 문제가 발생할 수 있습니다.
            실무에서는 <code>AtomicInteger</code>, <code>synchronized</code> 등을 사용하여 동기화해야 합니다.</p>
          </div>

          <h2>7. @WebServlet 어노테이션 vs web.xml</h2>
          <p>서블릿의 URL 매핑은 두 가지 방법으로 설정할 수 있습니다.</p>

          <h3>방법 1: @WebServlet 어노테이션 (Servlet 3.0+)</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 어노테이션 방식</span>
            </div>
            <pre><code>{`// 단일 URL 매핑
@WebServlet("/hello")
public class HelloServlet extends HttpServlet { ... }

// 다중 URL 매핑
@WebServlet(urlPatterns = {"/hello", "/hi", "/greet"})
public class GreetServlet extends HttpServlet { ... }

// 상세 설정
@WebServlet(
    name = "MyServlet",
    urlPatterns = "/my",
    loadOnStartup = 1,    // 서버 시작 시 즉시 초기화 (기본값 -1: 첫 요청 시)
    initParams = {
        @WebInitParam(name = "encoding", value = "UTF-8")
    }
)
public class MyServlet extends HttpServlet { ... }`}</code></pre>
          </div>

          <h3>방법 2: web.xml 설정</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> web.xml 방식</span>
            </div>
            <pre><code>{`<servlet>
    <servlet-name>HelloServlet</servlet-name>
    <servlet-class>com.example.HelloServlet</servlet-class>
    <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
    <servlet-name>HelloServlet</servlet-name>
    <url-pattern>/hello</url-pattern>
</servlet-mapping>`}</code></pre>
          </div>

          <table>
            <thead>
              <tr><th>비교 항목</th><th>@WebServlet</th><th>web.xml</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>편의성</strong></td><td>간편, 서블릿 클래스에 직접 설정</td><td>별도 XML 파일 관리 필요</td></tr>
              <tr><td><strong>유지보수</strong></td><td>소스 코드와 함께 관리</td><td>중앙 집중 관리 가능</td></tr>
              <tr><td><strong>배포 후 변경</strong></td><td>재컴파일 필요</td><td>XML 수정만으로 변경 가능</td></tr>
              <tr><td><strong>적합한 경우</strong></td><td>소규모 프로젝트, 학습용</td><td>대규모 프로젝트, 유연한 설정 필요</td></tr>
            </tbody>
          </table>

          <h3>직접 실행해보기</h3>
          <p>서블릿 생명주기를 콘솔 애플리케이션으로 시뮬레이션한 예제입니다.</p>

          <JavaCodeRunner defaultCode={`public class Main {
    // 서블릿 생명주기 시뮬레이션
    static int requestCount = 0;

    static void init() {
        System.out.println("========================================");
        System.out.println("[1] init() 호출 - 서블릿 초기화");
        System.out.println("    DB 연결 설정, 설정 파일 로드...");
        System.out.println("    (이 메서드는 최초 1회만 실행됩니다)");
        System.out.println("========================================\\n");
    }

    static void service(String method, String uri) {
        requestCount++;
        System.out.println("[2] service() 호출 - 요청 #" + requestCount);
        System.out.println("    HTTP 메서드: " + method);
        System.out.println("    요청 URI: " + uri);

        if (method.equals("GET")) {
            doGet(uri);
        } else if (method.equals("POST")) {
            doPost(uri);
        }
        System.out.println();
    }

    static void doGet(String uri) {
        System.out.println("[3] doGet() 호출 → 응답: 200 OK");
        System.out.println("    <html><body>GET 결과: " + uri + "</body></html>");
    }

    static void doPost(String uri) {
        System.out.println("[3] doPost() 호출 → 응답: 200 OK");
        System.out.println("    <html><body>POST 처리 완료: " + uri + "</body></html>");
    }

    static void destroy() {
        System.out.println("========================================");
        System.out.println("[4] destroy() 호출 - 서블릿 소멸");
        System.out.println("    DB 연결 해제, 리소스 정리...");
        System.out.println("    총 처리 요청: " + requestCount + "건");
        System.out.println("    (서버 종료 시 1회 실행됩니다)");
        System.out.println("========================================");
    }

    public static void main(String[] args) {
        System.out.println("=== 서블릿 생명주기 시뮬레이션 ===\\n");

        // 1단계: 초기화 (최초 요청 시 또는 서버 시작 시)
        init();

        // 2단계: 여러 클라이언트 요청 처리
        service("GET", "/lifecycle");
        service("POST", "/lifecycle");
        service("GET", "/lifecycle?page=2");

        // 3단계: 서버 종료 시 소멸
        destroy();
    }
}`} title="서블릿 생명주기 시뮬레이션" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li><code>LifecycleServlet</code>을 작성하고 Tomcat 콘솔에서 init, service, destroy 로그를 확인해보세요.</li>
              <li><code>loadOnStartup=1</code>을 설정한 서블릿과 설정하지 않은 서블릿의 init() 호출 시점 차이를 비교해보세요.</li>
              <li><code>@WebServlet</code>과 <code>web.xml</code> 두 가지 방식으로 동일한 서블릿을 매핑해보세요.</li>
              <li>서블릿에서 <code>AtomicInteger</code>를 사용하여 스레드 안전한 요청 카운터를 구현해보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('S03') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('S03')}
            >
              {isLessonCompleted('S03') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/servlet/02"><i className="fas fa-arrow-left"></i> 이전: HTTP 프로토콜과 요청/응답</Link>
            <Link to="/servlet/04">다음: 폼 처리와 파라미터 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
