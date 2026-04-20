import{u as l,r as i,j as e,L as s}from"./index-BJ0Gr397.js";function t(){const{completeLesson:r,isLessonCompleted:a}=l();return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 14"})]}),e.jsx("h1",{children:"Chapter 14. JSP와 MVC 패턴"}),e.jsx("p",{children:"JSP 문법과 MVC 아키텍처를 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. JSP 기본 문법"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," hello.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
    <%-- JSP 주석 --%>

    <%-- 스크립틀릿: Java 코드 --%>
    <% String name = request.getParameter("name"); %>

    <%-- 표현식: 값 출력 --%>
    <h1>안녕하세요, <%= name != null ? name : "방문자" %>님!</h1>

    <%-- 선언문: 멤버 변수/메서드 --%>
    <%! int count = 0; %>
    <p>방문 횟수: <%= ++count %></p>

    <%-- 반복문 --%>
    <ul>
    <% for (int i = 1; i <= 5; i++) { %>
        <li>항목 <%= i %></li>
    <% } %>
    </ul>
</body>
</html>`})})]}),e.jsx("h2",{children:"2. JSP 디렉티브"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," directives.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%-- page 디렉티브 --%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.util.*, java.text.*" %>
<%@ page errorPage="/error.jsp" %>

<%-- include 디렉티브 (정적 포함) --%>
<%@ include file="/header.jsp" %>

<%-- taglib 디렉티브 (태그 라이브러리) --%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>`})})]}),e.jsx("h2",{children:"3. EL (Expression Language)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," el-example.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%-- EL로 깔끔하게 표현 --%>
<h1>이름: \${param.name}</h1>
<p>세션 사용자: \${sessionScope.user}</p>
<p>목록 크기: \${fn:length(list)}</p>

<%-- 비교 (EL은 null 안전) --%>
<p>\${empty name ? '이름 없음' : name}</p>

<%-- 내장 객체 --%>
<%-- param, paramValues, header, cookie,
     pageScope, requestScope, sessionScope, applicationScope --%>`})})]}),e.jsx("h2",{children:"4. JSTL (JSP Standard Tag Library)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," jstl-example.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>

<%-- 조건문 --%>
<c:if test="\${user != null}">
    <p>환영합니다, \${user.name}님!</p>
</c:if>

<c:choose>
    <c:when test="\${score >= 90}">A</c:when>
    <c:when test="\${score >= 80}">B</c:when>
    <c:otherwise>C</c:otherwise>
</c:choose>

<%-- 반복문 --%>
<c:forEach var="item" items="\${list}" varStatus="s">
    <tr class="\${s.index % 2 == 0 ? 'even' : 'odd'}">
        <td>\${s.count}</td>
        <td>\${item.name}</td>
    </tr>
</c:forEach>

<%-- 포맷팅 --%>
<fmt:formatDate value="\${now}" pattern="yyyy-MM-dd HH:mm"/>
<fmt:formatNumber value="\${price}" type="currency"/>`})})]}),e.jsx("h2",{children:"5. MVC 패턴"}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," MVC 구조"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Model"}),": 데이터와 비즈니스 로직 (Java Bean, DAO)",e.jsx("br",{}),e.jsx("strong",{children:"View"}),": 화면 표시 (JSP)",e.jsx("br",{}),e.jsx("strong",{children:"Controller"}),": 요청 처리, 흐름 제어 (Servlet)"]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserController.java (Controller)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/users")
public class UserController extends HttpServlet {
    private UserDAO userDAO = new UserDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        // Model: 데이터 조회
        List<User> users = userDAO.findAll();

        // Request에 데이터 저장
        req.setAttribute("users", users);

        // View로 포워드
        RequestDispatcher rd = req.getRequestDispatcher("/WEB-INF/views/users.jsp");
        rd.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        userDAO.save(new User(name, email));

        // PRG 패턴: Post → Redirect → Get
        resp.sendRedirect("/users");
    }
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," users.jsp (View)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<html>
<body>
    <h1>사용자 목록</h1>
    <table>
        <c:forEach var="user" items="\${users}">
            <tr>
                <td>\${user.name}</td>
                <td>\${user.email}</td>
            </tr>
        </c:forEach>
    </table>

    <form action="/users" method="post">
        <input name="name" placeholder="이름">
        <input name="email" placeholder="이메일">
        <button type="submit">추가</button>
    </form>
</body>
</html>`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"JSTL을 사용하여 학생 목록을 테이블로 출력하는 JSP를 작성하세요."}),e.jsx("li",{children:"MVC 패턴으로 간단한 게시판(목록, 등록)을 구현하세요."}),e.jsx("li",{children:"PRG 패턴을 적용한 폼 처리 서블릿을 작성하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${a("14")?"btn-primary":"btn-accent"}`,onClick:()=>r("14"),children:a("14")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/13",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 서블릿 기초"]}),e.jsxs(s,{to:"/java-learning/15",children:["다음: Spring Framework ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{t as default};
