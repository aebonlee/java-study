import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function ServletLesson08() {
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
            <span>Lesson 08</span>
          </div>
          <h1>Lesson 08. MVC 패턴 구현</h1>
          <p>Model-View-Controller 패턴으로 웹 애플리케이션을 구조적으로 설계하는 방법을 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          {/* 1. MVC 패턴이란? */}
          <h2>1. MVC 패턴이란?</h2>
          <p>
            MVC(Model-View-Controller) 패턴은 애플리케이션을 세 가지 역할로 분리하여
            유지보수성과 확장성을 높이는 설계 패턴입니다.
          </p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MVC 구조</span></div>
            <pre><code>{`[클라이언트] ──요청──▶ [Controller (서블릿)]
                              │
                    ┌─────────┼─────────┐
                    ▼                   ▼
              [Model (Java)]    [View (JSP)]
              - VO/DTO              │
              - DAO            ◀────┘
              - Service        (데이터 전달)

• Model  : 데이터와 비즈니스 로직 (VO, DAO, Service)
• View   : 화면 표시 (JSP, HTML)
• Controller : 요청 처리 및 흐름 제어 (서블릿)`}</code></pre>
          </div>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> MVC의 장점</div>
            <p>역할 분리로 인해 디자이너는 JSP를, 개발자는 서블릿과 모델을 독립적으로 수정할 수 있습니다. 코드 재사용성이 높아지고 테스트가 용이해집니다.</p>
          </div>

          {/* 2. Model 1 vs Model 2 */}
          <h2>2. Model 1 vs Model 2 아키텍처</h2>
          <table className="info-table" style={{width:'100%', borderCollapse:'collapse', margin:'16px 0'}}>
            <thead>
              <tr style={{backgroundColor:'#f0f0f0'}}>
                <th style={{padding:'10px', border:'1px solid #ddd'}}>구분</th>
                <th style={{padding:'10px', border:'1px solid #ddd'}}>Model 1</th>
                <th style={{padding:'10px', border:'1px solid #ddd'}}>Model 2 (MVC)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:'10px', border:'1px solid #ddd'}}><strong>구조</strong></td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>JSP가 Controller + View 역할</td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>서블릿(Controller) + JSP(View) 분리</td>
              </tr>
              <tr>
                <td style={{padding:'10px', border:'1px solid #ddd'}}><strong>장점</strong></td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>개발 속도 빠름, 소규모 프로젝트 적합</td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>유지보수 용이, 역할 분리 명확</td>
              </tr>
              <tr>
                <td style={{padding:'10px', border:'1px solid #ddd'}}><strong>단점</strong></td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>JSP에 로직 혼재, 유지보수 어려움</td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>구조가 복잡, 학습 비용</td>
              </tr>
              <tr>
                <td style={{padding:'10px', border:'1px solid #ddd'}}><strong>사용</strong></td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>프로토타입, 간단한 페이지</td>
                <td style={{padding:'10px', border:'1px solid #ddd'}}>실무 프로젝트, Spring MVC</td>
              </tr>
            </tbody>
          </table>

          {/* 3. Model 구현 */}
          <h2>3. Model 구현 (VO/DTO, DAO 패턴)</h2>
          <h3>VO(Value Object) / DTO(Data Transfer Object)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberVO.java</span></div>
            <pre><code>{`public class MemberVO {
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
}`}</code></pre>
          </div>

          <h3>DAO(Data Access Object)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberDAO.java</span></div>
            <pre><code>{`import java.sql.*;
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
}`}</code></pre>
          </div>

          {/* 4. Controller 구현 */}
          <h2>4. Controller 구현 (FrontController 패턴)</h2>
          <p>
            FrontController 패턴은 하나의 서블릿이 모든 요청을 받아서 적절한 처리 로직으로
            분배하는 패턴입니다. Spring MVC의 <code>DispatcherServlet</code>이 대표적인 예입니다.
          </p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberController.java</span></div>
            <pre><code>{`@WebServlet("/member/*")
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
}`}</code></pre>
          </div>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬에서 실습하세요.</p>
          </div>

          {/* 5. View 구현 */}
          <h2>5. View 구현 (JSP)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> /WEB-INF/views/member/list.jsp</span></div>
            <pre><code>{`<%@ page contentType="text/html;charset=UTF-8" %>
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
</html>`}</code></pre>
          </div>

          {/* 6. 실전 회원관리 MVC */}
          <h2>6. 실전: 간단한 회원관리 MVC 프로젝트 구조</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 프로젝트 구조</span></div>
            <pre><code>{`src/
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
│                   └── writeForm.jsp        ← 등록 폼`}</code></pre>
          </div>

          {/* 7. PRG 패턴 */}
          <h2>7. PRG 패턴 (Post-Redirect-Get)</h2>
          <p>
            PRG 패턴은 POST 요청 처리 후 리다이렉트(Redirect)하여 GET으로 결과 페이지를 보여주는 패턴입니다.
            이를 통해 브라우저 새로고침 시 중복 POST 요청을 방지합니다.
          </p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PRG 패턴 흐름</span></div>
            <pre><code>{`1. [클라이언트] --POST /member/write--> [서블릿] (데이터 저장)
2. [서블릿] --302 Redirect /member/list--> [클라이언트]
3. [클라이언트] --GET /member/list--> [서블릿] (목록 표시)

✅ PRG 적용: 새로고침해도 GET 요청만 반복 → 안전!
❌ PRG 미적용: 새로고침 시 POST 재전송 → 데이터 중복 등록!`}</code></pre>
          </div>
          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>Forward는 URL이 변경되지 않아 데이터 조회(GET)에 적합하고, Redirect는 URL이 변경되어 데이터 변경(POST) 후 결과 페이지 이동에 적합합니다.</p>
          </div>

          {/* JavaCodeRunner */}
          <h2>8. VO/DTO 클래스 실습</h2>
          <p>MVC에서 데이터를 전달하는 VO 클래스를 직접 만들어봅니다.</p>
          <JavaCodeRunner defaultCode={`import java.util.*;

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
}`} title="MVC Model 계층 (VO/DAO) 시뮬레이션" />

          {/* 연습문제 */}
          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>상품(Product) 관리를 위한 <code>ProductVO</code>, <code>ProductDAO</code>, <code>ProductController</code>를 MVC 패턴으로 구현하세요.</li>
              <li>FrontController 패턴을 사용하여 <code>/product/list</code>, <code>/product/view</code>, <code>/product/write</code> 요청을 처리하세요.</li>
              <li>PRG 패턴을 적용하여 상품 등록 후 목록 페이지로 리다이렉트되도록 구현하세요.</li>
              <li>Service 계층을 추가하여 Controller → Service → DAO 3계층 구조로 리팩토링하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('S08') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('S08')}>
              {isLessonCompleted('S08') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/servlet/07"><i className="fas fa-arrow-left"></i> 이전: JSP 기초와 EL/JSTL</Link>
            <Link to="/servlet/09">다음: 파일 업로드와 DB 연동 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
