import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function ServletLesson06() {
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
            <span>Lesson 06</span>
          </div>
          <h1>Lesson 06. 필터와 리스너</h1>
          <p>서블릿 필터로 요청/응답을 가로채고, 리스너로 웹 애플리케이션 이벤트를 처리하는 방법을 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          {/* 1. 필터 개념 */}
          <h2>1. 필터(Filter) 개념</h2>
          <p>
            필터는 클라이언트의 요청이 서블릿에 도달하기 전, 그리고 서블릿의 응답이 클라이언트에게 전달되기 전에
            요청과 응답을 가로채서 처리할 수 있는 컴포넌트입니다. 여러 필터를 연결하여 <strong>필터 체인(Filter Chain)</strong>을
            구성할 수 있습니다.
          </p>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 필터의 주요 용도</div>
            <p>인코딩 처리, 인증/인가 확인, 로깅, XSS 방지, 압축 등 공통 관심사(Cross-Cutting Concern)를 분리하여 처리합니다.</p>
          </div>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 필터 체인 흐름</span></div>
            <pre><code>{`[클라이언트] → [필터1] → [필터2] → [필터3] → [서블릿]
                ←         ←         ←         ←
(요청 전처리가 순서대로, 응답 후처리는 역순으로 실행)`}</code></pre>
          </div>

          {/* 2. Filter 인터페이스 구현 */}
          <h2>2. Filter 인터페이스 구현</h2>
          <p>
            필터를 만들려면 <code>javax.servlet.Filter</code> 인터페이스를 구현해야 합니다.
            세 가지 메서드를 제공합니다.
          </p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MyFilter.java</span></div>
            <pre><code>{`import javax.servlet.*;
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
}`}</code></pre>
          </div>
          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p><code>chain.doFilter()</code>를 호출하지 않으면 요청이 다음 필터나 서블릿으로 전달되지 않습니다. 인증 필터에서 이를 활용하여 접근을 차단할 수 있습니다.</p>
          </div>

          {/* 3. @WebFilter 어노테이션 */}
          <h2>3. @WebFilter 어노테이션</h2>
          <p>
            서블릿 3.0부터 <code>@WebFilter</code> 어노테이션으로 web.xml 없이 필터를 등록할 수 있습니다.
          </p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> WebFilterExample.java</span></div>
            <pre><code>{`import javax.servlet.*;
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
}`}</code></pre>
          </div>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬에서 실습하세요.</p>
          </div>

          {/* 4. 인코딩 필터 구현 예제 */}
          <h2>4. 인코딩 필터 구현 예제</h2>
          <p>한글 깨짐 문제를 해결하는 인코딩 필터는 거의 모든 웹 프로젝트에서 사용됩니다.</p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> CharacterEncodingFilter.java</span></div>
            <pre><code>{`@WebFilter("/*")
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
}`}</code></pre>
          </div>

          {/* 5. 로깅 필터 구현 */}
          <h2>5. 로깅 필터 구현</h2>
          <p>모든 요청에 대해 접속 정보를 기록하는 로깅 필터입니다.</p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> LoggingFilter.java</span></div>
            <pre><code>{`@WebFilter("/*")
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
}`}</code></pre>
          </div>

          {/* 6. 리스너 개념 */}
          <h2>6. 리스너(Listener) 개념</h2>
          <p>
            리스너는 웹 애플리케이션에서 발생하는 특정 이벤트를 감지하고 처리하는 컴포넌트입니다.
            주요 리스너 인터페이스는 다음과 같습니다.
          </p>
          <table className="info-table" style={{width:'100%', borderCollapse:'collapse', margin:'16px 0'}}>
            <thead>
              <tr style={{backgroundColor:'#f0f0f0'}}>
                <th style={{padding:'10px', border:'1px solid #ddd'}}>리스너</th>
                <th style={{padding:'10px', border:'1px solid #ddd'}}>이벤트</th>
                <th style={{padding:'10px', border:'1px solid #ddd'}}>용도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:'10px', border:'1px solid #ddd'}}><code>ServletContextListener</code></td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>웹앱 시작/종료</td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>초기화/정리 작업</td>
              </tr>
              <tr>
                <td style={{padding:'10px', border:'1px solid #ddd'}}><code>HttpSessionListener</code></td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>세션 생성/소멸</td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>접속자 수 추적</td>
              </tr>
              <tr>
                <td style={{padding:'10px', border:'1px solid #ddd'}}><code>ServletRequestListener</code></td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>요청 시작/종료</td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>요청 로깅</td>
              </tr>
              <tr>
                <td style={{padding:'10px', border:'1px solid #ddd'}}><code>HttpSessionAttributeListener</code></td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>세션 속성 변경</td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>속성 감시</td>
              </tr>
            </tbody>
          </table>

          {/* 7. 리스너 구현 예제 */}
          <h2>7. 리스너 구현 예제 - 접속자 카운트</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SessionCounterListener.java</span></div>
            <pre><code>{`import javax.servlet.annotation.WebListener;
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
}`}</code></pre>
          </div>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> AppInitListener.java</span></div>
            <pre><code>{`@WebListener
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
}`}</code></pre>
          </div>

          {/* 8. 필터 체인 순서 */}
          <h2>8. 필터 체인 순서</h2>
          <p>
            필터의 실행 순서는 <code>web.xml</code>에 정의된 순서에 따라 결정됩니다.
            <code>@WebFilter</code> 어노테이션만 사용할 경우 순서가 보장되지 않으므로,
            순서가 중요한 경우 <code>web.xml</code>에서 명시적으로 설정해야 합니다.
          </p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> web.xml - 필터 순서 설정</span></div>
            <pre><code>{`<web-app>
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
</web-app>`}</code></pre>
          </div>

          {/* JavaCodeRunner */}
          <h2>9. 필터 체인 개념 실습</h2>
          <p>필터 체인의 동작 원리를 순수 자바로 시뮬레이션해봅니다.</p>
          <JavaCodeRunner defaultCode={`// 필터 체인 시뮬레이션 (순수 Java)
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
}`} title="필터 체인 시뮬레이션" />

          {/* 연습문제 */}
          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>모든 요청에 대해 요청 URI, 처리 시간, HTTP 메서드를 로그로 출력하는 <code>LoggingFilter</code>를 구현하세요.</li>
              <li><code>/admin/*</code> 경로에 대해 세션에 로그인 정보가 없으면 로그인 페이지로 리다이렉트하는 <code>AuthFilter</code>를 구현하세요.</li>
              <li><code>HttpSessionListener</code>를 구현하여 현재 접속자 수를 <code>ServletContext</code>에 저장하고, JSP에서 출력하세요.</li>
              <li>XSS 공격을 방지하기 위해 요청 파라미터에서 <code>&lt;script&gt;</code> 태그를 제거하는 필터를 구현하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('S06') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('S06')}>
              {isLessonCompleted('S06') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/servlet/05"><i className="fas fa-arrow-left"></i> 이전: 세션과 쿠키</Link>
            <Link to="/servlet/07">다음: JSP 기초와 EL/JSTL <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
