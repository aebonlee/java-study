import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function ServletLesson07() {
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
            <span>Lesson 07</span>
          </div>
          <h1>Lesson 07. JSP 기초와 EL/JSTL</h1>
          <p>Java Server Pages의 기본 문법과 Expression Language, JSTL 태그 라이브러리를 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          {/* 1. JSP란? */}
          <h2>1. JSP란?</h2>
          <p>
            JSP(Java Server Pages)는 HTML 안에 자바 코드를 삽입하여 동적 웹 페이지를 생성하는 기술입니다.
            JSP는 내부적으로 서블릿으로 변환되어 실행됩니다. 즉, JSP는 서블릿의 <strong>뷰(View)</strong> 역할을
            더 편리하게 수행하기 위한 기술입니다.
          </p>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> JSP와 서블릿의 관계</div>
            <p>JSP 파일은 웹 컨테이너(Tomcat)에 의해 자동으로 서블릿 자바 소스(.java)로 변환되고, 컴파일되어 실행됩니다.
            <code>hello.jsp</code> → <code>hello_jsp.java</code> → <code>hello_jsp.class</code></p>
          </div>

          {/* 2. JSP 기본 문법 */}
          <h2>2. JSP 기본 문법</h2>
          <h3>스크립틀릿 (Scriptlet)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> scriptlet.jsp</span></div>
            <pre><code>{`<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
<%
    // 스크립틀릿: 자바 코드 실행
    String name = "홍길동";
    int age = 25;

    for (int i = 1; i <= 5; i++) {
        out.println("<p>" + i + "번째 반복</p>");
    }
%>
<h1>이름: <%= name %>, 나이: <%= age %></h1>
</body>
</html>`}</code></pre>
          </div>

          <h3>표현식 (Expression)</h3>
          <p><code>&lt;%= 표현식 %&gt;</code>으로 값을 출력합니다. 세미콜론을 붙이지 않습니다.</p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> expression.jsp</span></div>
            <pre><code>{`<p>현재 시간: <%= new java.util.Date() %></p>
<p>결과: <%= 10 + 20 %></p>
<p>사용자: <%= request.getParameter("username") %></p>`}</code></pre>
          </div>

          <h3>선언문 (Declaration)</h3>
          <p><code>&lt;%! %&gt;</code>로 멤버 변수나 메서드를 선언합니다.</p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> declaration.jsp</span></div>
            <pre><code>{`<%!
    private int visitCount = 0;

    public String formatDate(java.util.Date date) {
        java.text.SimpleDateFormat sdf =
            new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(date);
    }
%>
<p>방문 횟수: <%= ++visitCount %></p>
<p>현재 시간: <%= formatDate(new java.util.Date()) %></p>`}</code></pre>
          </div>

          <h3>지시자 (Directive)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> directive.jsp</span></div>
            <pre><code>{`<%-- page 지시자: 페이지 설정 --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.*, java.text.*" %>
<%@ page errorPage="error.jsp" %>

<%-- include 지시자: 다른 파일 포함 --%>
<%@ include file="header.jsp" %>

<%-- taglib 지시자: 태그 라이브러리 사용 --%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>`}</code></pre>
          </div>

          {/* 3. JSP 내장 객체 */}
          <h2>3. JSP 내장 객체</h2>
          <p>JSP에서는 별도의 선언 없이 사용할 수 있는 내장 객체가 제공됩니다.</p>
          <table className="info-table" style={{width:'100%', borderCollapse:'collapse', margin:'16px 0'}}>
            <thead>
              <tr style={{backgroundColor:'#f0f0f0'}}>
                <th style={{padding:'10px', border:'1px solid #ddd'}}>내장 객체</th>
                <th style={{padding:'10px', border:'1px solid #ddd'}}>타입</th>
                <th style={{padding:'10px', border:'1px solid #ddd'}}>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{padding:'10px', border:'1px solid #ddd'}}><code>request</code></td><td style={{padding:'10px', border:'1px solid #ddd'}}>HttpServletRequest</td><td style={{padding:'10px', border:'1px solid #ddd'}}>클라이언트 요청 정보</td></tr>
              <tr><td style={{padding:'10px', border:'1px solid #ddd'}}><code>response</code></td><td style={{padding:'10px', border:'1px solid #ddd'}}>HttpServletResponse</td><td style={{padding:'10px', border:'1px solid #ddd'}}>응답 정보</td></tr>
              <tr><td style={{padding:'10px', border:'1px solid #ddd'}}><code>session</code></td><td style={{padding:'10px', border:'1px solid #ddd'}}>HttpSession</td><td style={{padding:'10px', border:'1px solid #ddd'}}>세션 정보</td></tr>
              <tr><td style={{padding:'10px', border:'1px solid #ddd'}}><code>out</code></td><td style={{padding:'10px', border:'1px solid #ddd'}}>JspWriter</td><td style={{padding:'10px', border:'1px solid #ddd'}}>출력 스트림</td></tr>
              <tr><td style={{padding:'10px', border:'1px solid #ddd'}}><code>application</code></td><td style={{padding:'10px', border:'1px solid #ddd'}}>ServletContext</td><td style={{padding:'10px', border:'1px solid #ddd'}}>웹앱 전역 정보</td></tr>
              <tr><td style={{padding:'10px', border:'1px solid #ddd'}}><code>pageContext</code></td><td style={{padding:'10px', border:'1px solid #ddd'}}>PageContext</td><td style={{padding:'10px', border:'1px solid #ddd'}}>JSP 페이지 정보</td></tr>
              <tr><td style={{padding:'10px', border:'1px solid #ddd'}}><code>config</code></td><td style={{padding:'10px', border:'1px solid #ddd'}}>ServletConfig</td><td style={{padding:'10px', border:'1px solid #ddd'}}>서블릿 설정 정보</td></tr>
              <tr><td style={{padding:'10px', border:'1px solid #ddd'}}><code>page</code></td><td style={{padding:'10px', border:'1px solid #ddd'}}>Object</td><td style={{padding:'10px', border:'1px solid #ddd'}}>현재 JSP 페이지 (this)</td></tr>
              <tr><td style={{padding:'10px', border:'1px solid #ddd'}}><code>exception</code></td><td style={{padding:'10px', border:'1px solid #ddd'}}>Throwable</td><td style={{padding:'10px', border:'1px solid #ddd'}}>에러 페이지에서만 사용</td></tr>
            </tbody>
          </table>

          {/* 4. EL */}
          <h2>4. EL(Expression Language)</h2>
          <p>
            EL은 JSP에서 데이터를 간결하게 출력하기 위한 표현 언어입니다.
            <code>{"${표현식}"}</code> 형태로 사용합니다.
          </p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> el_example.jsp</span></div>
            <pre><code>{`<%-- 기존 표현식 방식 --%>
<%= request.getAttribute("username") %>

<%-- EL 방식 (동일한 결과) --%>
\${username}

<%-- EL 내장 객체 --%>
\${param.id}              <%-- request.getParameter("id") --%>
\${sessionScope.user}     <%-- session.getAttribute("user") --%>
\${requestScope.list}     <%-- request.getAttribute("list") --%>
\${cookie.JSESSIONID.value}  <%-- 쿠키 값 --%>

<%-- EL 연산자 --%>
\${10 + 20}              <%-- 산술 연산: 30 --%>
\${age >= 18}            <%-- 비교 연산: true/false --%>
\${empty list}           <%-- 빈 값 확인 --%>
\${not empty user ? user.name : '게스트'}  <%-- 삼항 연산 --%>`}</code></pre>
          </div>
          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>EL은 스코프 순서대로(page → request → session → application) 속성을 검색합니다. 명시적으로 스코프를 지정하면 성능이 향상됩니다.</p>
          </div>

          {/* 5. JSTL */}
          <h2>5. JSTL 태그 라이브러리</h2>
          <p>JSTL(JSP Standard Tag Library)은 반복, 조건, 포매팅 등을 태그로 처리합니다.</p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> jstl_example.jsp</span></div>
            <pre><code>{`<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%-- 변수 설정 --%>
<c:set var="name" value="홍길동" />

<%-- 조건문 --%>
<c:if test="\${not empty name}">
    <p>이름: \${name}</p>
</c:if>

<%-- 다중 조건문 --%>
<c:choose>
    <c:when test="\${score >= 90}">
        <p>등급: A</p>
    </c:when>
    <c:when test="\${score >= 80}">
        <p>등급: B</p>
    </c:when>
    <c:otherwise>
        <p>등급: C</p>
    </c:otherwise>
</c:choose>

<%-- 반복문 --%>
<table border="1">
    <c:forEach var="item" items="\${productList}" varStatus="status">
        <tr>
            <td>\${status.index + 1}</td>
            <td>\${item.name}</td>
            <td>\${item.price}원</td>
        </tr>
    </c:forEach>
</table>

<%-- URL 생성 --%>
<c:url var="detailUrl" value="/product/detail">
    <c:param name="id" value="\${product.id}" />
</c:url>
<a href="\${detailUrl}">상세보기</a>`}</code></pre>
          </div>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬에서 실습하세요.</p>
          </div>

          {/* 6. JSP와 서블릿 연동 */}
          <h2>6. JSP와 서블릿 연동</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserServlet.java (Forward 방식)</span></div>
            <pre><code>{`@WebServlet("/user/list")
public class UserServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws ServletException, IOException {
        // 데이터 준비 (Model)
        List<User> userList = new ArrayList<>();
        userList.add(new User("홍길동", 25));
        userList.add(new User("김철수", 30));

        // request에 데이터 저장
        request.setAttribute("users", userList);
        request.setAttribute("title", "사용자 목록");

        // JSP로 포워드 (View)
        RequestDispatcher dispatcher =
            request.getRequestDispatcher("/WEB-INF/views/userList.jsp");
        dispatcher.forward(request, response);
    }
}`}</code></pre>
          </div>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> userList.jsp (View)</span></div>
            <pre><code>{`<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head><title>\${title}</title></head>
<body>
    <h1>\${title}</h1>
    <table border="1">
        <tr><th>이름</th><th>나이</th></tr>
        <c:forEach var="user" items="\${users}">
            <tr>
                <td>\${user.name}</td>
                <td>\${user.age}</td>
            </tr>
        </c:forEach>
    </table>
</body>
</html>`}</code></pre>
          </div>

          {/* 7. JSP 실전 예제 */}
          <h2>7. JSP 실전 예제: 게시판 목록 페이지</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> boardList.jsp</span></div>
            <pre><code>{`<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
    <title>게시판</title>
    <style>
        table { width: 800px; border-collapse: collapse; }
        th, td { padding: 8px; border: 1px solid #ddd; }
        th { background-color: #f5f5f5; }
        .btn { padding: 6px 12px; background: #007bff; color: white; }
    </style>
</head>
<body>
    <h1>게시판 목록</h1>
    <p>총 \${totalCount}개의 게시글</p>
    <table>
        <thead>
            <tr>
                <th width="60">번호</th>
                <th>제목</th>
                <th width="100">작성자</th>
                <th width="120">작성일</th>
                <th width="60">조회</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="board" items="\${boardList}" varStatus="st">
                <tr>
                    <td>\${board.id}</td>
                    <td>
                        <a href="board?action=view&id=\${board.id}">
                            \${board.title}
                        </a>
                    </td>
                    <td>\${board.author}</td>
                    <td><fmt:formatDate value="\${board.createdAt}"
                         pattern="yyyy-MM-dd"/></td>
                    <td>\${board.viewCount}</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <br/>
    <a href="board?action=write" class="btn">글쓰기</a>
</body>
</html>`}</code></pre>
          </div>

          {/* JavaCodeRunner */}
          <h2>8. EL 표현식 개념 실습</h2>
          <p>EL의 연산자와 동작 원리를 순수 자바로 시뮬레이션해봅니다.</p>
          <JavaCodeRunner defaultCode={`import java.util.*;

public class Main {
    // 간단한 EL 파서 시뮬레이션
    static Map<String, Object> requestScope = new HashMap<>();
    static Map<String, Object> sessionScope = new HashMap<>();

    static Object resolve(String expr) {
        // 스코프 지정이 있는 경우
        if (expr.startsWith("sessionScope.")) {
            String key = expr.substring("sessionScope.".length());
            return sessionScope.get(key);
        }
        if (expr.startsWith("requestScope.")) {
            String key = expr.substring("requestScope.".length());
            return requestScope.get(key);
        }
        // 스코프 미지정 시 순서대로 탐색
        if (requestScope.containsKey(expr)) return requestScope.get(expr);
        if (sessionScope.containsKey(expr)) return sessionScope.get(expr);
        return null;
    }

    public static void main(String[] args) {
        // 데이터 설정 (서블릿에서 setAttribute 하는 것과 동일)
        requestScope.put("username", "홍길동");
        requestScope.put("age", 25);
        requestScope.put("items", Arrays.asList("사과", "바나나", "체리"));
        sessionScope.put("loginUser", "admin");
        sessionScope.put("username", "세션사용자");

        System.out.println("===== EL 표현식 시뮬레이션 =====\\n");

        // \${username} - requestScope에서 먼저 찾음
        System.out.println("\${username} = " + resolve("username"));

        // \${sessionScope.username} - 세션 스코프 명시
        System.out.println("\${sessionScope.username} = " + resolve("sessionScope.username"));

        // \${age}
        System.out.println("\${age} = " + resolve("age"));

        // \${loginUser} - session에만 있음
        System.out.println("\${loginUser} = " + resolve("loginUser"));

        // EL 연산자 시뮬레이션
        int age = (int) resolve("age");
        System.out.println("\\n===== EL 연산자 =====");
        System.out.println("\${age + 5} = " + (age + 5));
        System.out.println("\${age >= 18} = " + (age >= 18));
        System.out.println("\${age == 25 ? '청년' : '기타'} = " + (age == 25 ? "청년" : "기타"));

        // empty 연산자
        List<?> items = (List<?>) resolve("items");
        System.out.println("\\n\${empty items} = " + (items == null || items.isEmpty()));
        System.out.println("\${items} = " + items);
    }
}`} title="EL 표현식 시뮬레이션" />

          {/* 연습문제 */}
          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>서블릿에서 상품 목록(List)을 request에 저장하고, JSP에서 JSTL <code>&lt;c:forEach&gt;</code>로 테이블에 출력하세요.</li>
              <li>EL의 <code>empty</code> 연산자를 사용하여 검색 결과가 없을 때 "검색 결과가 없습니다"를 출력하세요.</li>
              <li><code>&lt;c:choose&gt;</code>를 사용하여 로그인 상태에 따라 다른 메뉴를 보여주는 JSP를 작성하세요.</li>
              <li>JSTL의 <code>&lt;fmt:formatNumber&gt;</code>를 사용하여 금액을 천 단위 구분자로 표시하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('S07') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('S07')}>
              {isLessonCompleted('S07') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/servlet/06"><i className="fas fa-arrow-left"></i> 이전: 필터와 리스너</Link>
            <Link to="/servlet/08">다음: MVC 패턴 구현 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
