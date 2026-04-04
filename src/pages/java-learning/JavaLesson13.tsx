import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson13() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 13</span>
          </div>
          <h1>Chapter 13. 서블릿 기초</h1>
          <p>웹 애플리케이션의 기반, Servlet의 동작 원리와 사용법을 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 서블릿이란?</h2>
          <p>서블릿(Servlet)은 Java로 작성된 서버 측 프로그램으로, HTTP 요청을 처리하고 응답을 생성합니다. 웹 서버(Tomcat 등)의 서블릿 컨테이너에서 실행됩니다.</p>

          <h2>2. 서블릿 생명주기</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 생명주기</span></div>
            <pre><code>{`1. 로딩 & 인스턴스화: 첫 요청 시 서블릿 객체 생성 (싱글턴)
2. init(): 초기화 (한 번만 호출)
3. service() → doGet()/doPost(): 매 요청마다 호출
4. destroy(): 서블릿 컨테이너 종료 시 호출`}</code></pre>
          </div>

          <h2>3. 첫 번째 서블릿</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> HelloServlet.java</span></div>
            <pre><code>{`import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.WebServlet;
import java.io.*;

@WebServlet("/hello")  // URL 매핑 (어노테이션 방식)
public class HelloServlet extends HttpServlet {

    @Override
    public void init() throws ServletException {
        System.out.println("서블릿 초기화!");
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        // 응답 설정
        response.setContentType("text/html; charset=UTF-8");

        // 요청 파라미터
        String name = request.getParameter("name");
        if (name == null) name = "World";

        // HTML 응답
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h1>Hello, " + name + "!</h1>");
        out.println("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // 로그인 처리 로직...
        response.sendRedirect("/welcome");
    }

    @Override
    public void destroy() {
        System.out.println("서블릿 종료!");
    }
}`}</code></pre>
          </div>

          <h2>4. web.xml 설정 (전통적 방식)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> web.xml</span></div>
            <pre><code>{`<web-app>
    <servlet>
        <servlet-name>hello</servlet-name>
        <servlet-class>com.example.HelloServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>hello</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
</web-app>`}</code></pre>
          </div>

          <h2>5. 세션과 쿠키</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SessionExample.java</span></div>
            <pre><code>{`// 세션 관리
HttpSession session = request.getSession();
session.setAttribute("user", "홍길동");
String user = (String) session.getAttribute("user");
session.setMaxInactiveInterval(1800);  // 30분
session.invalidate();  // 세션 무효화

// 쿠키
Cookie cookie = new Cookie("theme", "dark");
cookie.setMaxAge(60 * 60 * 24 * 7);  // 7일
cookie.setPath("/");
response.addCookie(cookie);

// 쿠키 읽기
Cookie[] cookies = request.getCookies();
if (cookies != null) {
    for (Cookie c : cookies) {
        if (c.getName().equals("theme")) {
            System.out.println("테마: " + c.getValue());
        }
    }
}`}</code></pre>
          </div>

          <h2>6. 필터 (Filter)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> EncodingFilter.java</span></div>
            <pre><code>{`@WebFilter("/*")
public class EncodingFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        chain.doFilter(request, response);  // 다음 필터 또는 서블릿으로
    }
}`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>이름과 나이를 입력받아 인사 메시지를 출력하는 서블릿을 만드세요.</li>
              <li>세션을 활용한 간단한 로그인/로그아웃 서블릿을 구현하세요.</li>
              <li>접속 로그를 기록하는 필터를 작성하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('13') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('13')}>
              {isLessonCompleted('13') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/12"><i className="fas fa-arrow-left"></i> 이전: 파일 I/O</Link>
            <Link to="/java-learning/14">다음: JSP와 MVC <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
