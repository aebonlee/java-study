import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson14() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 14</span>
          </div>
          <h1>Chapter 14. JSP와 MVC 패턴</h1>
          <p>JSP 문법과 MVC 아키텍처를 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. JSP 기본 문법</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> hello.jsp</span></div>
            <pre><code>{`<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
</html>`}</code></pre>
          </div>

          <h2>2. JSP 디렉티브</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> directives.jsp</span></div>
            <pre><code>{`<%-- page 디렉티브 --%>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ page import="java.util.*, java.text.*" %>
<%@ page errorPage="/error.jsp" %>

<%-- include 디렉티브 (정적 포함) --%>
<%@ include file="/header.jsp" %>

<%-- taglib 디렉티브 (태그 라이브러리) --%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>`}</code></pre>
          </div>

          <h2>3. EL (Expression Language)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> el-example.jsp</span></div>
            <pre><code>{`<%-- EL로 깔끔하게 표현 --%>
<h1>이름: \${param.name}</h1>
<p>세션 사용자: \${sessionScope.user}</p>
<p>목록 크기: \${fn:length(list)}</p>

<%-- 비교 (EL은 null 안전) --%>
<p>\${empty name ? '이름 없음' : name}</p>

<%-- 내장 객체 --%>
<%-- param, paramValues, header, cookie,
     pageScope, requestScope, sessionScope, applicationScope --%>`}</code></pre>
          </div>

          <h2>4. JSTL (JSP Standard Tag Library)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> jstl-example.jsp</span></div>
            <pre><code>{`<%@ taglib prefix="c" uri="jakarta.tags.core" %>
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
<fmt:formatNumber value="\${price}" type="currency"/>`}</code></pre>
          </div>

          <h2>5. MVC 패턴</h2>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> MVC 구조</div>
            <p><strong>Model</strong>: 데이터와 비즈니스 로직 (Java Bean, DAO)<br/>
            <strong>View</strong>: 화면 표시 (JSP)<br/>
            <strong>Controller</strong>: 요청 처리, 흐름 제어 (Servlet)</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserController.java (Controller)</span></div>
            <pre><code>{`@WebServlet("/users")
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
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> users.jsp (View)</span></div>
            <pre><code>{`<%@ taglib prefix="c" uri="jakarta.tags.core" %>
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
</html>`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>JSTL을 사용하여 학생 목록을 테이블로 출력하는 JSP를 작성하세요.</li>
              <li>MVC 패턴으로 간단한 게시판(목록, 등록)을 구현하세요.</li>
              <li>PRG 패턴을 적용한 폼 처리 서블릿을 작성하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('14') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('14')}>
              {isLessonCompleted('14') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/13"><i className="fas fa-arrow-left"></i> 이전: 서블릿 기초</Link>
            <Link to="/java-learning/15">다음: Spring Framework <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
