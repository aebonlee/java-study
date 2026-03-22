import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function ServletLesson05() {
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
            <span>Lesson 05</span>
          </div>
          <h1>Lesson 05. 세션과 쿠키</h1>
          <p>HTTP의 무상태성을 극복하기 위한 세션과 쿠키의 개념과 사용법을 학습합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          <h2>1. HTTP의 무상태성</h2>
          <p>
            HTTP는 <strong>무상태(Stateless)</strong> 프로토콜입니다. 서버는 각 요청을 독립적으로 처리하며,
            이전 요청의 정보를 기억하지 않습니다. 그래서 "로그인 상태 유지", "장바구니" 같은 기능을
            구현하려면 별도의 상태 관리 기술이 필요합니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> HTTP 무상태성 문제</span>
            </div>
            <pre><code>{`[요청 1] POST /login  (username=hong, password=1234)
         → 서버: "로그인 성공!" ← 인증 정보 저장 안됨

[요청 2] GET /mypage
         → 서버: "누구세요?" ← 이전 로그인 정보 모름!

해결 방법:
  1. 쿠키(Cookie)   → 클라이언트(브라우저)에 데이터 저장
  2. 세션(Session)   → 서버에 데이터 저장
  3. 토큰(JWT 등)    → 클라이언트에 인증 토큰 저장`}</code></pre>
          </div>

          <h2>2. 쿠키(Cookie)</h2>
          <p>
            <strong>쿠키</strong>는 서버가 클라이언트(브라우저)에 저장하는 작은 데이터 조각입니다.
            브라우저는 이후 같은 서버에 요청할 때 쿠키를 자동으로 함께 전송합니다.
          </p>

          <h3>쿠키 생성과 전송</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> CookieServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/cookie-set")
public class CookieSetServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {

        // 쿠키 생성
        Cookie userCookie = new Cookie("username", "hong");
        userCookie.setMaxAge(60 * 60 * 24);  // 유효 기간: 1일 (초 단위)
        userCookie.setPath("/");               // 모든 경로에서 접근 가능
        userCookie.setHttpOnly(true);          // JavaScript 접근 차단 (보안)
        // userCookie.setSecure(true);         // HTTPS에서만 전송

        Cookie langCookie = new Cookie("language", "ko");
        langCookie.setMaxAge(60 * 60 * 24 * 30);  // 30일

        // 응답에 쿠키 추가
        response.addCookie(userCookie);
        response.addCookie(langCookie);

        response.setContentType("text/html; charset=UTF-8");
        response.getWriter().println("<p>쿠키가 설정되었습니다!</p>");
    }
}`}</code></pre>
          </div>

          <h3>쿠키 읽기</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> CookieReadServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/cookie-read")
public class CookieReadServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {

        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();

        Cookie[] cookies = request.getCookies();

        if (cookies != null) {
            out.println("<h2>저장된 쿠키 목록</h2>");
            for (Cookie cookie : cookies) {
                out.println("<p>" + cookie.getName()
                    + " = " + cookie.getValue() + "</p>");
            }

            // 특정 쿠키 찾기
            String username = getCookieValue(cookies, "username");
            if (username != null) {
                out.println("<p>환영합니다, " + username + "님!</p>");
            }
        } else {
            out.println("<p>저장된 쿠키가 없습니다.</p>");
        }
    }

    private String getCookieValue(Cookie[] cookies, String name) {
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(name)) {
                return cookie.getValue();
            }
        }
        return null;
    }
}`}</code></pre>
          </div>

          <h3>쿠키 삭제</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 쿠키 삭제</span>
            </div>
            <pre><code>{`// 쿠키를 삭제하려면 같은 이름의 쿠키에 maxAge=0 설정
Cookie cookie = new Cookie("username", "");
cookie.setMaxAge(0);    // 즉시 만료
cookie.setPath("/");    // 생성할 때와 같은 경로 설정!
response.addCookie(cookie);`}</code></pre>
          </div>

          <h3>쿠키 속성 정리</h3>
          <table>
            <thead>
              <tr><th>속성</th><th>메서드</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>이름/값</strong></td><td>getName(), getValue()</td><td>쿠키의 이름과 값 (문자열만 가능)</td></tr>
              <tr><td><strong>유효 기간</strong></td><td>setMaxAge(seconds)</td><td>-1: 브라우저 종료 시 삭제, 0: 즉시 삭제</td></tr>
              <tr><td><strong>경로</strong></td><td>setPath(path)</td><td>쿠키가 전송되는 URL 경로 범위</td></tr>
              <tr><td><strong>도메인</strong></td><td>setDomain(domain)</td><td>쿠키가 전송되는 도메인 범위</td></tr>
              <tr><td><strong>HttpOnly</strong></td><td>setHttpOnly(true)</td><td>JavaScript에서 접근 차단 (XSS 방어)</td></tr>
              <tr><td><strong>Secure</strong></td><td>setSecure(true)</td><td>HTTPS에서만 쿠키 전송</td></tr>
            </tbody>
          </table>

          <h2>3. 세션(HttpSession)</h2>
          <p>
            <strong>세션</strong>은 서버 측에 데이터를 저장하는 방식입니다. 클라이언트에는 세션 ID만 쿠키로 전달되고,
            실제 데이터는 서버 메모리에 저장됩니다. 쿠키보다 보안이 우수합니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> SessionServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/session-demo")
public class SessionServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {

        // 세션 가져오기 (없으면 새로 생성)
        HttpSession session = request.getSession();
        // request.getSession(false)는 세션이 없으면 null 반환

        // 세션 정보 확인
        String sessionId = session.getId();
        boolean isNew = session.isNew();
        long createdTime = session.getCreationTime();
        long lastAccessed = session.getLastAccessedTime();

        // 세션에 데이터 저장
        Integer visitCount = (Integer) session.getAttribute("visitCount");
        if (visitCount == null) {
            visitCount = 0;
        }
        visitCount++;
        session.setAttribute("visitCount", visitCount);

        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<h2>세션 정보</h2>");
        out.println("<p>세션 ID: " + sessionId + "</p>");
        out.println("<p>새 세션 여부: " + isNew + "</p>");
        out.println("<p>방문 횟수: " + visitCount + "</p>");
        out.println("<p>생성 시간: " + new java.util.Date(createdTime) + "</p>");
        out.println("<p>최근 접속: " + new java.util.Date(lastAccessed) + "</p>");
    }
}`}</code></pre>
          </div>

          <h3>주요 HttpSession 메서드</h3>
          <table>
            <thead>
              <tr><th>메서드</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>getAttribute(name)</code></td><td>세션에 저장된 객체를 가져옴 (Object 반환)</td></tr>
              <tr><td><code>setAttribute(name, value)</code></td><td>세션에 객체를 저장 (모든 Java 객체 가능)</td></tr>
              <tr><td><code>removeAttribute(name)</code></td><td>세션에서 특정 속성을 제거</td></tr>
              <tr><td><code>invalidate()</code></td><td>세션을 무효화 (로그아웃 시 사용)</td></tr>
              <tr><td><code>getId()</code></td><td>세션 ID 문자열 반환 (JSESSIONID)</td></tr>
              <tr><td><code>isNew()</code></td><td>새로 생성된 세션인지 확인</td></tr>
              <tr><td><code>setMaxInactiveInterval(sec)</code></td><td>세션 타임아웃 설정 (초 단위)</td></tr>
              <tr><td><code>getCreationTime()</code></td><td>세션 생성 시간 (밀리초)</td></tr>
            </tbody>
          </table>

          <h2>4. 세션 vs 쿠키 비교</h2>

          <table>
            <thead>
              <tr><th>비교 항목</th><th>쿠키(Cookie)</th><th>세션(Session)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>저장 위치</strong></td><td>클라이언트(브라우저)</td><td>서버 메모리</td></tr>
              <tr><td><strong>저장 데이터</strong></td><td>문자열(String)만 가능</td><td>모든 Java 객체 가능</td></tr>
              <tr><td><strong>보안</strong></td><td>클라이언트에서 조회/수정 가능 (취약)</td><td>서버에만 존재 (안전)</td></tr>
              <tr><td><strong>크기 제한</strong></td><td>4KB (브라우저당 약 300개)</td><td>서버 메모리에 따라 가변적</td></tr>
              <tr><td><strong>유효 기간</strong></td><td>설정 가능 (maxAge)</td><td>서버 설정에 따라 (기본 30분)</td></tr>
              <tr><td><strong>서버 부하</strong></td><td>없음 (클라이언트에 저장)</td><td>사용자 증가 시 메모리 부담</td></tr>
              <tr><td><strong>사용 사례</strong></td><td>자동 로그인, 테마 설정, 언어 설정</td><td>로그인 상태, 장바구니, 사용자 정보</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 실무에서의 선택 기준</div>
            <p>민감하지 않은 설정 값(테마, 언어)은 <strong>쿠키</strong>에, 인증 정보나 사용자 데이터는 <strong>세션</strong>에 저장합니다.
            대규모 서비스에서는 세션 서버의 메모리 부담을 줄이기 위해 <strong>Redis</strong> 같은 외부 저장소에 세션을 분산 저장하거나,
            <strong>JWT(JSON Web Token)</strong> 기반의 토큰 인증 방식을 사용하기도 합니다.</p>
          </div>

          <h2>5. 실전: 로그인/로그아웃 구현</h2>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> LoginServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    // 간단한 사용자 DB (실무에서는 DB 사용)
    private static final Map<String, String> USERS = Map.of(
        "admin", "1234",
        "hong", "password"
    );

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {
        // 로그인 폼 표시
        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<h2>로그인</h2>");
        out.println("<form method='POST' action='/login'>");
        out.println("  아이디: <input type='text' name='username'><br>");
        out.println("  비밀번호: <input type='password' name='password'><br>");
        out.println("  <button type='submit'>로그인</button>");
        out.println("</form>");
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws IOException {

        request.setCharacterEncoding("UTF-8");
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();

        // 인증 확인
        if (USERS.containsKey(username)
                && USERS.get(username).equals(password)) {

            // 로그인 성공 → 세션에 사용자 정보 저장
            HttpSession session = request.getSession();
            session.setAttribute("loginUser", username);
            session.setMaxInactiveInterval(30 * 60); // 30분

            out.println("<h2>로그인 성공!</h2>");
            out.println("<p>환영합니다, " + username + "님!</p>");
            out.println("<a href='/mypage'>마이페이지</a> | ");
            out.println("<a href='/logout'>로그아웃</a>");
        } else {
            // 로그인 실패
            out.println("<h2>로그인 실패</h2>");
            out.println("<p>아이디 또는 비밀번호가 올바르지 않습니다.</p>");
            out.println("<a href='/login'>다시 로그인</a>");
        }
    }
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> LogoutServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/logout")
public class LogoutServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws IOException {

        HttpSession session = request.getSession(false);

        if (session != null) {
            String username = (String) session.getAttribute("loginUser");
            session.invalidate();  // 세션 무효화 (모든 데이터 삭제)

            response.setContentType("text/html; charset=UTF-8");
            PrintWriter out = response.getWriter();
            out.println("<h2>로그아웃 완료</h2>");
            out.println("<p>" + username + "님, 안녕히 가세요!</p>");
            out.println("<a href='/login'>다시 로그인</a>");
        } else {
            response.sendRedirect("/login");
        }
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>위 서블릿 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬 개발 환경을 설정한 후 실습하세요.</p>
          </div>

          <h2>6. 세션 타임아웃 설정</h2>
          <p>세션은 일정 시간 동안 접근이 없으면 자동으로 만료됩니다. 타임아웃은 여러 방법으로 설정할 수 있습니다.</p>

          <h3>방법 1: web.xml에서 전역 설정</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> web.xml</span>
            </div>
            <pre><code>{`<session-config>
    <!-- 분 단위 (30분) -->
    <session-timeout>30</session-timeout>
</session-config>`}</code></pre>
          </div>

          <h3>방법 2: 프로그래밍 방식으로 개별 설정</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 코드에서 타임아웃 설정</span>
            </div>
            <pre><code>{`HttpSession session = request.getSession();

// 초 단위로 설정
session.setMaxInactiveInterval(60 * 30);  // 30분
session.setMaxInactiveInterval(60 * 60);  // 1시간
session.setMaxInactiveInterval(-1);       // 무제한 (서버 종료 시까지)
session.setMaxInactiveInterval(0);        // 즉시 만료`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 세션 관리 주의사항</div>
            <p>1. 세션에 큰 객체를 저장하면 서버 메모리가 부족해질 수 있습니다.<br/>
            2. 로그아웃 시 반드시 <code>session.invalidate()</code>를 호출하세요.<br/>
            3. 타임아웃을 너무 길게 설정하면 보안 위험이 증가합니다.<br/>
            4. 분산 환경에서는 세션 클러스터링이나 외부 세션 저장소(Redis)를 고려하세요.</p>
          </div>

          <h3>직접 실행해보기</h3>
          <p>세션과 쿠키의 동작 방식을 Java 콘솔에서 시뮬레이션합니다.</p>

          <JavaCodeRunner defaultCode={`import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class Main {
    // 서버 측 세션 저장소 시뮬레이션
    static Map<String, Map<String, Object>> sessionStore = new HashMap<>();
    // 클라이언트 측 쿠키 저장소 시뮬레이션
    static Map<String, String> clientCookies = new HashMap<>();

    // 세션 생성
    static String createSession() {
        String sessionId = UUID.randomUUID().toString().substring(0, 8);
        sessionStore.put(sessionId, new HashMap<>());
        return sessionId;
    }

    public static void main(String[] args) {
        System.out.println("=== 세션/쿠키 동작 시뮬레이션 ===\\n");

        // 1단계: 첫 번째 요청 (로그인)
        System.out.println("[요청 1] POST /login (username=hong)");
        String sessionId = createSession();
        sessionStore.get(sessionId).put("loginUser", "hong");
        sessionStore.get(sessionId).put("loginTime", "2026-03-23 09:00");
        clientCookies.put("JSESSIONID", sessionId);
        System.out.println("[서버] 세션 생성 → ID: " + sessionId);
        System.out.println("[서버] 세션에 저장: loginUser=hong");
        System.out.println("[응답] Set-Cookie: JSESSIONID=" + sessionId);
        System.out.println("[클라이언트] 쿠키 저장 완료\\n");

        // 2단계: 두 번째 요청 (마이페이지)
        System.out.println("[요청 2] GET /mypage");
        String sentCookie = clientCookies.get("JSESSIONID");
        System.out.println("[클라이언트] Cookie: JSESSIONID=" + sentCookie);
        Map<String, Object> session = sessionStore.get(sentCookie);
        if (session != null && session.containsKey("loginUser")) {
            System.out.println("[서버] 세션 확인 → 로그인 사용자: " + session.get("loginUser"));
            System.out.println("[응답] 마이페이지 표시\\n");
        }

        // 3단계: 쿠키 직접 사용
        System.out.println("=== 쿠키 활용 예제 ===");
        clientCookies.put("theme", "dark");
        clientCookies.put("language", "ko");
        System.out.println("[클라이언트] 저장된 쿠키:");
        clientCookies.forEach((k, v) ->
            System.out.println("  " + k + " = " + v));

        // 4단계: 로그아웃
        System.out.println("\\n[요청 3] GET /logout");
        System.out.println("[서버] 세션 무효화 (invalidate)");
        sessionStore.remove(sentCookie);
        clientCookies.remove("JSESSIONID");
        System.out.println("[서버] 세션 저장소에서 제거 완료");
        System.out.println("[응답] 로그아웃 완료!\\n");

        // 5단계: 로그아웃 후 요청
        System.out.println("[요청 4] GET /mypage (로그아웃 후)");
        if (!clientCookies.containsKey("JSESSIONID")) {
            System.out.println("[서버] 세션 없음 → 로그인 페이지로 리다이렉트");
        }
    }
}`} title="세션/쿠키 동작 시뮬레이션" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>쿠키를 사용하여 사용자가 마지막으로 방문한 시간을 기록하고 표시하는 서블릿을 작성해보세요.</li>
              <li>세션을 이용한 간단한 장바구니 기능을 구현해보세요 (상품 추가, 목록 조회, 삭제).</li>
              <li>로그인 상태를 확인하는 <code>AuthFilter</code>를 만들어, 미인증 사용자를 로그인 페이지로 리다이렉트해보세요.</li>
              <li>세션 타임아웃을 5분으로 설정하고, 세션 만료 시 동작을 확인해보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('S05') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('S05')}
            >
              {isLessonCompleted('S05') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/servlet/04"><i className="fas fa-arrow-left"></i> 이전: 폼 처리와 파라미터</Link>
            <Link to="/servlet/06">다음: 포워드와 리다이렉트 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
