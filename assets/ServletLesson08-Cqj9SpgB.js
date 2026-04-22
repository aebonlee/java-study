import{u as i,r as l,j as e,L as r}from"./index-8Qlh1NuN.js";import{J as d}from"./JavaCodeRunner-D0rWZlCh.js";function c(){const{completeLesson:t,isLessonCompleted:s}=i();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/servlet",children:"서블릿 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 08"})]}),e.jsx("h1",{children:"Lesson 08. MVC 패턴 구현"}),e.jsx("p",{children:"Model-View-Controller 패턴으로 웹 애플리케이션을 구조적으로 설계하는 방법을 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. MVC 패턴이란?"}),e.jsx("p",{children:"MVC(Model-View-Controller) 패턴은 애플리케이션을 세 가지 역할로 분리하여 유지보수성과 확장성을 높이는 설계 패턴입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MVC 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`[클라이언트] ──요청──▶ [Controller (서블릿)]
                              │
                    ┌─────────┼─────────┐
                    ▼                   ▼
              [Model (Java)]    [View (JSP)]
              - VO/DTO              │
              - DAO            ◀────┘
              - Service        (데이터 전달)

• Model  : 데이터와 비즈니스 로직 (VO, DAO, Service)
• View   : 화면 표시 (JSP, HTML)
• Controller : 요청 처리 및 흐름 제어 (서블릿)`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," MVC의 장점"]}),e.jsx("p",{children:"역할 분리로 인해 디자이너는 JSP를, 개발자는 서블릿과 모델을 독립적으로 수정할 수 있습니다. 코드 재사용성이 높아지고 테스트가 용이해집니다."})]}),e.jsx("h2",{children:"2. Model 1 vs Model 2 아키텍처"}),e.jsxs("table",{className:"info-table",style:{width:"100%",borderCollapse:"collapse",margin:"16px 0"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"#f0f0f0"},children:[e.jsx("th",{style:{padding:"10px",border:"1px solid #ddd"},children:"구분"}),e.jsx("th",{style:{padding:"10px",border:"1px solid #ddd"},children:"Model 1"}),e.jsx("th",{style:{padding:"10px",border:"1px solid #ddd"},children:"Model 2 (MVC)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("strong",{children:"구조"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"JSP가 Controller + View 역할"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"서블릿(Controller) + JSP(View) 분리"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("strong",{children:"장점"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"개발 속도 빠름, 소규모 프로젝트 적합"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"유지보수 용이, 역할 분리 명확"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("strong",{children:"단점"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"JSP에 로직 혼재, 유지보수 어려움"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"구조가 복잡, 학습 비용"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:e.jsx("strong",{children:"사용"})}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"프로토타입, 간단한 페이지"}),e.jsx("td",{style:{padding:"10px",border:"1px solid #ddd"},children:"실무 프로젝트, Spring MVC"})]})]})]}),e.jsx("h2",{children:"3. Model 구현 (VO/DTO, DAO 패턴)"}),e.jsx("h3",{children:"VO(Value Object) / DTO(Data Transfer Object)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberVO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class MemberVO {
    private int id;
    private String username;
    private String email;
    private String password;
    private java.sql.Timestamp createdAt;

    // 기본 생성자
    public MemberVO() {}

    // 매개변수 생성자
    public MemberVO(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Getter & Setter
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public java.sql.Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(java.sql.Timestamp createdAt) { this.createdAt = createdAt; }

    @Override
    public String toString() {
        return "MemberVO{id=" + id + ", username='" + username +
               "', email='" + email + "'}";
    }
}`})})]}),e.jsx("h3",{children:"DAO(Data Access Object)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberDAO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MemberDAO {
    private static final String URL = "jdbc:mysql://localhost:3306/mydb";
    private static final String USER = "root";
    private static final String PASS = "password";

    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASS);
    }

    // 전체 회원 조회
    public List<MemberVO> findAll() {
        List<MemberVO> list = new ArrayList<>();
        String sql = "SELECT * FROM members ORDER BY id DESC";

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                MemberVO member = new MemberVO();
                member.setId(rs.getInt("id"));
                member.setUsername(rs.getString("username"));
                member.setEmail(rs.getString("email"));
                member.setCreatedAt(rs.getTimestamp("created_at"));
                list.add(member);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    // 회원 등록
    public int insert(MemberVO member) {
        String sql = "INSERT INTO members(username, email, password) VALUES(?, ?, ?)";
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, member.getUsername());
            pstmt.setString(2, member.getEmail());
            pstmt.setString(3, member.getPassword());
            return pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }
}`})})]}),e.jsx("h2",{children:"4. Controller 구현 (FrontController 패턴)"}),e.jsxs("p",{children:["FrontController 패턴은 하나의 서블릿이 모든 요청을 받아서 적절한 처리 로직으로 분배하는 패턴입니다. Spring MVC의 ",e.jsx("code",{children:"DispatcherServlet"}),"이 대표적인 예입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/member/*")
public class MemberController extends HttpServlet {
    private MemberDAO memberDAO = new MemberDAO();

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
                         throws ServletException, IOException {
        String action = request.getPathInfo(); // /member/list → /list

        switch (action) {
            case "/list":
                listMembers(request, response);
                break;
            case "/view":
                viewMember(request, response);
                break;
            case "/writeForm":
                forward(request, response, "/WEB-INF/views/member/writeForm.jsp");
                break;
            default:
                response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {
        String action = request.getPathInfo();

        switch (action) {
            case "/write":
                writeMember(request, response);
                break;
            case "/delete":
                deleteMember(request, response);
                break;
        }
    }

    private void listMembers(HttpServletRequest request,
                             HttpServletResponse response)
                             throws ServletException, IOException {
        List<MemberVO> list = memberDAO.findAll();
        request.setAttribute("members", list);
        forward(request, response, "/WEB-INF/views/member/list.jsp");
    }

    private void writeMember(HttpServletRequest request,
                             HttpServletResponse response) throws IOException {
        MemberVO member = new MemberVO();
        member.setUsername(request.getParameter("username"));
        member.setEmail(request.getParameter("email"));
        member.setPassword(request.getParameter("password"));
        memberDAO.insert(member);
        // PRG 패턴: Post 후 Redirect
        response.sendRedirect(request.getContextPath() + "/member/list");
    }

    private void forward(HttpServletRequest request,
                         HttpServletResponse response, String path)
                         throws ServletException, IOException {
        request.getRequestDispatcher(path).forward(request, response);
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬에서 실습하세요."})]}),e.jsx("h2",{children:"5. View 구현 (JSP)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," /WEB-INF/views/member/list.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head><title>회원 목록</title></head>
<body>
    <h1>회원 관리</h1>
    <a href="\${pageContext.request.contextPath}/member/writeForm">회원 등록</a>
    <table border="1">
        <tr>
            <th>ID</th><th>이름</th><th>이메일</th><th>가입일</th>
        </tr>
        <c:forEach var="m" items="\${members}">
            <tr>
                <td>\${m.id}</td>
                <td><a href="view?id=\${m.id}">\${m.username}</a></td>
                <td>\${m.email}</td>
                <td>\${m.createdAt}</td>
            </tr>
        </c:forEach>
        <c:if test="\${empty members}">
            <tr><td colspan="4">등록된 회원이 없습니다.</td></tr>
        </c:if>
    </table>
</body>
</html>`})})]}),e.jsx("h2",{children:"6. 실전: 간단한 회원관리 MVC 프로젝트 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 프로젝트 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`src/
├── main/
│   ├── java/
│   │   └── com/example/
│   │       ├── controller/
│   │       │   └── MemberController.java   ← 요청 처리
│   │       ├── model/
│   │       │   ├── vo/
│   │       │   │   └── MemberVO.java        ← 데이터 객체
│   │       │   └── dao/
│   │       │       └── MemberDAO.java       ← DB 접근
│   │       ├── service/
│   │       │   └── MemberService.java       ← 비즈니스 로직
│   │       └── filter/
│   │           └── EncodingFilter.java      ← 공통 필터
│   └── webapp/
│       └── WEB-INF/
│           ├── web.xml
│           └── views/
│               └── member/
│                   ├── list.jsp             ← 목록 화면
│                   ├── view.jsp             ← 상세 화면
│                   └── writeForm.jsp        ← 등록 폼`})})]}),e.jsx("h2",{children:"7. PRG 패턴 (Post-Redirect-Get)"}),e.jsx("p",{children:"PRG 패턴은 POST 요청 처리 후 리다이렉트(Redirect)하여 GET으로 결과 페이지를 보여주는 패턴입니다. 이를 통해 브라우저 새로고침 시 중복 POST 요청을 방지합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PRG 패턴 흐름"]})}),e.jsx("pre",{children:e.jsx("code",{children:`1. [클라이언트] --POST /member/write--> [서블릿] (데이터 저장)
2. [서블릿] --302 Redirect /member/list--> [클라이언트]
3. [클라이언트] --GET /member/list--> [서블릿] (목록 표시)

✅ PRG 적용: 새로고침해도 GET 요청만 반복 → 안전!
❌ PRG 미적용: 새로고침 시 POST 재전송 → 데이터 중복 등록!`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsx("p",{children:"Forward는 URL이 변경되지 않아 데이터 조회(GET)에 적합하고, Redirect는 URL이 변경되어 데이터 변경(POST) 후 결과 페이지 이동에 적합합니다."})]}),e.jsx("h2",{children:"8. VO/DTO 클래스 실습"}),e.jsx("p",{children:"MVC에서 데이터를 전달하는 VO 클래스를 직접 만들어봅니다."}),e.jsx(d,{defaultCode:`import java.util.*;

public class Main {
    // VO(Value Object) 클래스
    static class MemberVO {
        private int id;
        private String username;
        private String email;

        public MemberVO() {}
        public MemberVO(int id, String username, String email) {
            this.id = id;
            this.username = username;
            this.email = email;
        }

        public int getId() { return id; }
        public void setId(int id) { this.id = id; }
        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        @Override
        public String toString() {
            return "MemberVO{id=" + id + ", username='" + username + "', email='" + email + "'}";
        }
    }

    // 간단한 DAO 시뮬레이션 (메모리 기반)
    static class MemberDAO {
        private List<MemberVO> db = new ArrayList<>();
        private int nextId = 1;

        public void insert(MemberVO member) {
            member.setId(nextId++);
            db.add(member);
            System.out.println("[DAO] 등록 완료: " + member);
        }

        public List<MemberVO> findAll() {
            return new ArrayList<>(db);
        }

        public MemberVO findById(int id) {
            return db.stream()
                     .filter(m -> m.getId() == id)
                     .findFirst().orElse(null);
        }

        public void delete(int id) {
            db.removeIf(m -> m.getId() == id);
            System.out.println("[DAO] 삭제 완료: id=" + id);
        }
    }

    public static void main(String[] args) {
        MemberDAO dao = new MemberDAO();

        System.out.println("===== MVC Model 계층 시뮬레이션 =====\\n");

        // 회원 등록 (Create)
        dao.insert(new MemberVO(0, "홍길동", "hong@test.com"));
        dao.insert(new MemberVO(0, "김철수", "kim@test.com"));
        dao.insert(new MemberVO(0, "이영희", "lee@test.com"));

        // 전체 조회 (Read)
        System.out.println("\\n[전체 회원 목록]");
        for (MemberVO m : dao.findAll()) {
            System.out.println("  " + m);
        }

        // 단건 조회
        System.out.println("\\n[ID=2 회원 조회]");
        System.out.println("  " + dao.findById(2));

        // 삭제 (Delete)
        System.out.println("\\n[ID=1 회원 삭제]");
        dao.delete(1);

        // 삭제 후 목록
        System.out.println("\\n[삭제 후 회원 목록]");
        for (MemberVO m : dao.findAll()) {
            System.out.println("  " + m);
        }
    }
}`,title:"MVC Model 계층 (VO/DAO) 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["상품(Product) 관리를 위한 ",e.jsx("code",{children:"ProductVO"}),", ",e.jsx("code",{children:"ProductDAO"}),", ",e.jsx("code",{children:"ProductController"}),"를 MVC 패턴으로 구현하세요."]}),e.jsxs("li",{children:["FrontController 패턴을 사용하여 ",e.jsx("code",{children:"/product/list"}),", ",e.jsx("code",{children:"/product/view"}),", ",e.jsx("code",{children:"/product/write"})," 요청을 처리하세요."]}),e.jsx("li",{children:"PRG 패턴을 적용하여 상품 등록 후 목록 페이지로 리다이렉트되도록 구현하세요."}),e.jsx("li",{children:"Service 계층을 추가하여 Controller → Service → DAO 3계층 구조로 리팩토링하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("S08")?"btn-primary":"btn-accent"}`,onClick:()=>t("S08"),children:s("S08")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/servlet/07",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: JSP 기초와 EL/JSTL"]}),e.jsxs(r,{to:"/servlet/09",children:["다음: 파일 업로드와 DB 연동 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{c as default};
