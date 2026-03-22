import{u as t,r as a,j as e,L as s}from"./index-D-p2iJw3.js";function n(){const{completeLesson:l,isLessonCompleted:r}=t();return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 13"})]}),e.jsx("h1",{children:"Chapter 13. 서블릿 기초"}),e.jsx("p",{children:"웹 애플리케이션의 기반, Servlet의 동작 원리와 사용법을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 서블릿이란?"}),e.jsx("p",{children:"서블릿(Servlet)은 Java로 작성된 서버 측 프로그램으로, HTTP 요청을 처리하고 응답을 생성합니다. 웹 서버(Tomcat 등)의 서블릿 컨테이너에서 실행됩니다."}),e.jsx("h2",{children:"2. 서블릿 생명주기"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 생명주기"]})}),e.jsx("pre",{children:e.jsx("code",{children:`1. 로딩 & 인스턴스화: 첫 요청 시 서블릿 객체 생성 (싱글턴)
2. init(): 초기화 (한 번만 호출)
3. service() → doGet()/doPost(): 매 요청마다 호출
4. destroy(): 서블릿 컨테이너 종료 시 호출`})})]}),e.jsx("h2",{children:"3. 첫 번째 서블릿"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," HelloServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import jakarta.servlet.*;
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
}`})})]}),e.jsx("h2",{children:"4. web.xml 설정 (전통적 방식)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," web.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<web-app>
    <servlet>
        <servlet-name>hello</servlet-name>
        <servlet-class>com.example.HelloServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>hello</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
</web-app>`})})]}),e.jsx("h2",{children:"5. 세션과 쿠키"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SessionExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 세션 관리
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
}`})})]}),e.jsx("h2",{children:"6. 필터 (Filter)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," EncodingFilter.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebFilter("/*")
public class EncodingFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        chain.doFilter(request, response);  // 다음 필터 또는 서블릿으로
    }
}`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"이름과 나이를 입력받아 인사 메시지를 출력하는 서블릿을 만드세요."}),e.jsx("li",{children:"세션을 활용한 간단한 로그인/로그아웃 서블릿을 구현하세요."}),e.jsx("li",{children:"접속 로그를 기록하는 필터를 작성하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${r("13")?"btn-primary":"btn-accent"}`,onClick:()=>l("13"),children:r("13")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/12",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 파일 I/O"]}),e.jsxs(s,{to:"/java-learning/14",children:["다음: JSP와 MVC ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{n as default};
