import{u as r,r as i,j as e,L as s}from"./index-DH08MSzi.js";import{J as l}from"./JavaCodeRunner-DMPwBdpu.js";function n(){const{completeLesson:t,isLessonCompleted:d}=r();return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/servlet",children:"서블릿 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 07"})]}),e.jsx("h1",{children:"Lesson 07. JSP 기초와 EL/JSTL"}),e.jsx("p",{children:"Java Server Pages의 기본 문법과 Expression Language, JSTL 태그 라이브러리를 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. JSP란?"}),e.jsxs("p",{children:["JSP(Java Server Pages)는 HTML 안에 자바 코드를 삽입하여 동적 웹 페이지를 생성하는 기술입니다. JSP는 내부적으로 서블릿으로 변환되어 실행됩니다. 즉, JSP는 서블릿의 ",e.jsx("strong",{children:"뷰(View)"})," 역할을 더 편리하게 수행하기 위한 기술입니다."]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," JSP와 서블릿의 관계"]}),e.jsxs("p",{children:["JSP 파일은 웹 컨테이너(Tomcat)에 의해 자동으로 서블릿 자바 소스(.java)로 변환되고, 컴파일되어 실행됩니다.",e.jsx("code",{children:"hello.jsp"})," → ",e.jsx("code",{children:"hello_jsp.java"})," → ",e.jsx("code",{children:"hello_jsp.class"})]})]}),e.jsx("h2",{children:"2. JSP 기본 문법"}),e.jsx("h3",{children:"스크립틀릿 (Scriptlet)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," scriptlet.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
</html>`})})]}),e.jsx("h3",{children:"표현식 (Expression)"}),e.jsxs("p",{children:[e.jsx("code",{children:"<%= 표현식 %>"}),"으로 값을 출력합니다. 세미콜론을 붙이지 않습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," expression.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<p>현재 시간: <%= new java.util.Date() %></p>
<p>결과: <%= 10 + 20 %></p>
<p>사용자: <%= request.getParameter("username") %></p>`})})]}),e.jsx("h3",{children:"선언문 (Declaration)"}),e.jsxs("p",{children:[e.jsx("code",{children:"<%! %>"}),"로 멤버 변수나 메서드를 선언합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," declaration.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%!
    private int visitCount = 0;

    public String formatDate(java.util.Date date) {
        java.text.SimpleDateFormat sdf =
            new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(date);
    }
%>
<p>방문 횟수: <%= ++visitCount %></p>
<p>현재 시간: <%= formatDate(new java.util.Date()) %></p>`})})]}),e.jsx("h3",{children:"지시자 (Directive)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," directive.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%-- page 지시자: 페이지 설정 --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.*, java.text.*" %>
<%@ page errorPage="error.jsp" %>

<%-- include 지시자: 다른 파일 포함 --%>
<%@ include file="header.jsp" %>

<%-- taglib 지시자: 태그 라이브러리 사용 --%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>`})})]}),e.jsx("h2",{children:"3. JSP 내장 객체"}),e.jsx("p",{children:"JSP에서는 별도의 선언 없이 사용할 수 있는 내장 객체가 제공됩니다."}),e.jsxs("table",{className:"info-table",style:{width:"100%",borderCollapse:"collapse",margin:"16px 0"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#f0f0f0"},children:[e.jsx("th",{style:{padding:"10px",border:"1px solid #ddd"},children:"내장 객체"}),e.jsx("th",{style:{padding:"10px",border:"1px solid #ddd"},children:"타입"}),e.jsx("th",{style:{padding:"10px",border:"1px solid #ddd"},children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"request"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"HttpServletRequest"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"클라이언트 요청 정보"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"response"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"HttpServletResponse"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"응답 정보"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"session"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"HttpSession"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"세션 정보"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"out"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"JspWriter"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"출력 스트림"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"application"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"ServletContext"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"웹앱 전역 정보"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"pageContext"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"PageContext"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"JSP 페이지 정보"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"config"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"ServletConfig"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"서블릿 설정 정보"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"page"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"Object"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"현재 JSP 페이지 (this)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("code",{children:"exception"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"Throwable"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"에러 페이지에서만 사용"})]})]})]}),e.jsx("h2",{children:"4. EL(Expression Language)"}),e.jsxs("p",{children:["EL은 JSP에서 데이터를 간결하게 출력하기 위한 표현 언어입니다.",e.jsx("code",{children:"${표현식}"})," 형태로 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," el_example.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%-- 기존 표현식 방식 --%>
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
\${not empty user ? user.name : '게스트'}  <%-- 삼항 연산 --%>`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsx("p",{children:"EL은 스코프 순서대로(page → request → session → application) 속성을 검색합니다. 명시적으로 스코프를 지정하면 성능이 향상됩니다."})]}),e.jsx("h2",{children:"5. JSTL 태그 라이브러리"}),e.jsx("p",{children:"JSTL(JSP Standard Tag Library)은 반복, 조건, 포매팅 등을 태그로 처리합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," jstl_example.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

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
<a href="\${detailUrl}">상세보기</a>`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬에서 실습하세요."})]}),e.jsx("h2",{children:"6. JSP와 서블릿 연동"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserServlet.java (Forward 방식)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/user/list")
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
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," userList.jsp (View)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" %>
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
</html>`})})]}),e.jsx("h2",{children:"7. JSP 실전 예제: 게시판 목록 페이지"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," boardList.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" %>
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
</html>`})})]}),e.jsx("h2",{children:"8. EL 표현식 개념 실습"}),e.jsx("p",{children:"EL의 연산자와 동작 원리를 순수 자바로 시뮬레이션해봅니다."}),e.jsx(l,{defaultCode:`import java.util.*;

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
}`,title:"EL 표현식 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["서블릿에서 상품 목록(List)을 request에 저장하고, JSP에서 JSTL ",e.jsx("code",{children:"<c:forEach>"}),"로 테이블에 출력하세요."]}),e.jsxs("li",{children:["EL의 ",e.jsx("code",{children:"empty"}),' 연산자를 사용하여 검색 결과가 없을 때 "검색 결과가 없습니다"를 출력하세요.']}),e.jsxs("li",{children:[e.jsx("code",{children:"<c:choose>"}),"를 사용하여 로그인 상태에 따라 다른 메뉴를 보여주는 JSP를 작성하세요."]}),e.jsxs("li",{children:["JSTL의 ",e.jsx("code",{children:"<fmt:formatNumber>"}),"를 사용하여 금액을 천 단위 구분자로 표시하세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${d("S07")?"btn-primary":"btn-accent"}`,onClick:()=>t("S07"),children:d("S07")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/servlet/06",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 필터와 리스너"]}),e.jsxs(s,{to:"/servlet/08",children:["다음: MVC 패턴 구현 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{n as default};
