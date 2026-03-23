import{u as n,r as a,j as e,L as t}from"./index-CEQBFVPE.js";import{J as r}from"./JavaCodeRunner-z6hgL2aI.js";function o(){const{completeLesson:i,isLessonCompleted:s}=n();return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/servlet",children:"서블릿 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 09"})]}),e.jsx("h1",{children:"Lesson 09. 파일 업로드와 DB 연동"}),e.jsx("p",{children:"서블릿에서 파일 업로드를 처리하고, JDBC를 활용하여 데이터베이스와 연동하는 방법을 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 파일 업로드 개요"}),e.jsxs("p",{children:["파일 업로드는 ",e.jsx("code",{children:"multipart/form-data"})," 인코딩 타입으로 전송됩니다. 서블릿 3.0부터 별도의 라이브러리 없이 파일 업로드를 처리할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," upload.html"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<!DOCTYPE html>
<html>
<head><title>파일 업로드</title></head>
<body>
    <h1>파일 업로드</h1>
    <!-- enctype="multipart/form-data" 필수! -->
    <form action="upload" method="POST" enctype="multipart/form-data">
        <p>제목: <input type="text" name="title" /></p>
        <p>파일: <input type="file" name="uploadFile" /></p>
        <p>여러 파일: <input type="file" name="files" multiple /></p>
        <button type="submit">업로드</button>
    </form>
</body>
</html>`})})]}),e.jsx("h2",{children:"2. @MultipartConfig 설정"}),e.jsxs("p",{children:["파일 업로드를 처리하는 서블릿에는 ",e.jsx("code",{children:"@MultipartConfig"})," 어노테이션을 추가해야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UploadServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/upload")
@MultipartConfig(
    fileSizeThreshold = 1024 * 1024,    // 1MB: 메모리에 저장할 최대 크기
    maxFileSize = 1024 * 1024 * 10,     // 10MB: 파일 하나의 최대 크기
    maxRequestSize = 1024 * 1024 * 50,  // 50MB: 전체 요청의 최대 크기
    location = "/tmp"                    // 임시 저장 경로
)
public class UploadServlet extends HttpServlet {
    // ...
}`})})]}),e.jsx("h2",{children:"3. Part 인터페이스로 파일 처리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UploadServlet.java (전체)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/upload")
@MultipartConfig(maxFileSize = 1024 * 1024 * 10)
public class UploadServlet extends HttpServlet {

    private static final String UPLOAD_DIR = "uploads";

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");

        // 일반 폼 데이터
        String title = request.getParameter("title");

        // 업로드 디렉토리 설정
        String uploadPath = getServletContext().getRealPath("") +
                           File.separator + UPLOAD_DIR;
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdir();
        }

        // 단일 파일 처리
        Part filePart = request.getPart("uploadFile");
        String fileName = extractFileName(filePart);

        if (fileName != null && !fileName.isEmpty()) {
            // 파일명 중복 방지 (UUID 사용)
            String uniqueName = UUID.randomUUID() + "_" + fileName;
            filePart.write(uploadPath + File.separator + uniqueName);
            System.out.println("업로드 완료: " + uniqueName);
        }

        // 여러 파일 처리
        for (Part part : request.getParts()) {
            if (part.getName().equals("files") && part.getSize() > 0) {
                String name = extractFileName(part);
                String uniqueName = UUID.randomUUID() + "_" + name;
                part.write(uploadPath + File.separator + uniqueName);
            }
        }

        response.sendRedirect("uploadResult.jsp?title=" +
                             URLEncoder.encode(title, "UTF-8"));
    }

    // Content-Disposition 헤더에서 파일명 추출
    private String extractFileName(Part part) {
        String header = part.getHeader("content-disposition");
        for (String token : header.split(";")) {
            if (token.trim().startsWith("filename")) {
                return token.substring(token.indexOf('=') + 1)
                           .trim().replace("\\"", "");
            }
        }
        return null;
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsx("p",{children:"실무에서는 파일을 웹 서버가 아닌 별도의 파일 서버(AWS S3 등)에 저장하고, DB에는 파일 경로만 저장합니다. UUID를 사용하면 파일명 충돌을 방지할 수 있습니다."})]}),e.jsx("h2",{children:"4. JDBC 기초"}),e.jsxs("p",{children:["JDBC(Java Database Connectivity)는 자바에서 데이터베이스에 접근하기 위한 표준 API입니다. 주요 인터페이스는 ",e.jsx("code",{children:"Connection"}),", ",e.jsx("code",{children:"Statement"}),", ",e.jsx("code",{children:"ResultSet"}),"입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," JDBCBasic.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import java.sql.*;

public class JDBCBasic {
    public static void main(String[] args) {
        // JDBC 연결 정보
        String url = "jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=Asia/Seoul";
        String user = "root";
        String password = "1234";

        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;

        try {
            // 1. JDBC 드라이버 로드
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. 데이터베이스 연결
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("DB 연결 성공!");

            // 3. SQL 실행
            stmt = conn.createStatement();
            rs = stmt.executeQuery("SELECT * FROM members");

            // 4. 결과 처리
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("username");
                String email = rs.getString("email");
                System.out.println(id + " | " + name + " | " + email);
            }

        } catch (ClassNotFoundException e) {
            System.out.println("드라이버를 찾을 수 없습니다.");
        } catch (SQLException e) {
            System.out.println("DB 오류: " + e.getMessage());
        } finally {
            // 5. 리소스 해제 (역순)
            try { if (rs != null) rs.close(); } catch (SQLException e) {}
            try { if (stmt != null) stmt.close(); } catch (SQLException e) {}
            try { if (conn != null) conn.close(); } catch (SQLException e) {}
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬에서 실습하세요."})]}),e.jsx("h2",{children:"5. JDBC로 CRUD 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberDAO.java (CRUD)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class MemberDAO {

    // CREATE - 회원 등록
    public int insert(MemberVO member) throws SQLException {
        String sql = "INSERT INTO members(username, email, password) VALUES(?, ?, ?)";
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, member.getUsername());
            pstmt.setString(2, member.getEmail());
            pstmt.setString(3, member.getPassword());
            return pstmt.executeUpdate();
        }
    }

    // READ - 전체 조회
    public List<MemberVO> findAll() throws SQLException {
        String sql = "SELECT * FROM members ORDER BY id DESC";
        List<MemberVO> list = new ArrayList<>();
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql);
             ResultSet rs = pstmt.executeQuery()) {
            while (rs.next()) {
                MemberVO m = new MemberVO();
                m.setId(rs.getInt("id"));
                m.setUsername(rs.getString("username"));
                m.setEmail(rs.getString("email"));
                list.add(m);
            }
        }
        return list;
    }

    // UPDATE - 회원 수정
    public int update(MemberVO member) throws SQLException {
        String sql = "UPDATE members SET username=?, email=? WHERE id=?";
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, member.getUsername());
            pstmt.setString(2, member.getEmail());
            pstmt.setInt(3, member.getId());
            return pstmt.executeUpdate();
        }
    }

    // DELETE - 회원 삭제
    public int delete(int id) throws SQLException {
        String sql = "DELETE FROM members WHERE id=?";
        try (Connection conn = getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, id);
            return pstmt.executeUpdate();
        }
    }
}`})})]}),e.jsx("h2",{children:"6. Connection Pool (커넥션 풀)"}),e.jsx("p",{children:"매 요청마다 DB 연결을 생성/해제하면 성능이 크게 저하됩니다. 커넥션 풀은 미리 일정 수의 연결을 만들어두고 재사용합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," context.xml (Tomcat DBCP 설정)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<!-- META-INF/context.xml -->
<Context>
    <Resource name="jdbc/mydb"
              auth="Container"
              type="javax.sql.DataSource"
              maxTotal="20"
              maxIdle="10"
              maxWaitMillis="10000"
              driverClassName="com.mysql.cj.jdbc.Driver"
              url="jdbc:mysql://localhost:3306/mydb?serverTimezone=Asia/Seoul"
              username="root"
              password="1234" />
</Context>`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DBUtil.java (커넥션 풀 사용)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import javax.naming.*;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class DBUtil {
    private static DataSource dataSource;

    static {
        try {
            Context initCtx = new InitialContext();
            Context envCtx = (Context) initCtx.lookup("java:comp/env");
            dataSource = (DataSource) envCtx.lookup("jdbc/mydb");
        } catch (NamingException e) {
            throw new RuntimeException("DataSource 초기화 실패", e);
        }
    }

    public static Connection getConnection() throws SQLException {
        return dataSource.getConnection();  // 풀에서 커넥션 획득
    }
    // Connection.close() 호출 시 풀로 반환됨
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," HikariCP"]}),e.jsx("p",{children:"Spring Boot에서는 기본 커넥션 풀로 HikariCP를 사용합니다. 가장 빠른 JDBC 커넥션 풀로, 설정이 간단하고 성능이 뛰어납니다."})]}),e.jsx("h2",{children:"7. PreparedStatement로 SQL Injection 방지"}),e.jsxs("p",{children:[e.jsx("code",{children:"Statement"}),"는 SQL Injection 공격에 취약합니다. 반드시 ",e.jsx("code",{children:"PreparedStatement"}),"를 사용하여 파라미터 바인딩 방식으로 쿼리를 실행해야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SQL Injection 비교"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 위험! Statement - SQL Injection 취약
String username = request.getParameter("username");
// 악의적 입력: ' OR '1'='1
String sql = "SELECT * FROM members WHERE username = '" + username + "'";
// 실행되는 SQL: SELECT * FROM members WHERE username = '' OR '1'='1'
// → 모든 회원 정보가 노출됨!
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(sql);

// ✅ 안전! PreparedStatement - 파라미터 바인딩
String sql = "SELECT * FROM members WHERE username = ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, username);  // 자동으로 이스케이프 처리
ResultSet rs = pstmt.executeQuery();
// 입력값이 문자열로 처리되어 SQL Injection 방지`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsx("p",{children:"PreparedStatement는 보안뿐만 아니라 성능 면에서도 유리합니다. SQL이 미리 컴파일되어 캐시되므로, 같은 구조의 쿼리를 반복 실행할 때 더 빠릅니다."})]}),e.jsx("h2",{children:"8. JDBC 개념 실습"}),e.jsx("p",{children:"JDBC의 핵심 개념인 Connection, PreparedStatement, ResultSet의 동작을 시뮬레이션합니다."}),e.jsx(r,{defaultCode:`import java.util.*;

public class Main {
    // 간단한 인메모리 DB 시뮬레이션
    static List<Map<String, Object>> table = new ArrayList<>();
    static int autoIncrement = 1;

    static void insert(String name, String email) {
        Map<String, Object> row = new HashMap<>();
        row.put("id", autoIncrement++);
        row.put("name", name);
        row.put("email", email);
        table.add(row);
        System.out.println("[INSERT] " + name + " 등록 완료 (영향 받은 행: 1)");
    }

    static void selectAll() {
        System.out.println("\\n[SELECT * FROM members]");
        System.out.printf("%-4s %-10s %-20s%n", "ID", "이름", "이메일");
        System.out.println("─".repeat(34));
        for (Map<String, Object> row : table) {
            System.out.printf("%-4d %-10s %-20s%n",
                row.get("id"), row.get("name"), row.get("email"));
        }
        System.out.println("총 " + table.size() + "건\\n");
    }

    static void update(int id, String newEmail) {
        for (Map<String, Object> row : table) {
            if ((int) row.get("id") == id) {
                String oldEmail = (String) row.get("email");
                row.put("email", newEmail);
                System.out.println("[UPDATE] id=" + id + " 이메일 변경: "
                    + oldEmail + " → " + newEmail);
                return;
            }
        }
        System.out.println("[UPDATE] id=" + id + " 회원을 찾을 수 없습니다.");
    }

    static void delete(int id) {
        boolean removed = table.removeIf(row -> (int) row.get("id") == id);
        if (removed) {
            System.out.println("[DELETE] id=" + id + " 삭제 완료");
        } else {
            System.out.println("[DELETE] id=" + id + " 회원을 찾을 수 없습니다.");
        }
    }

    // SQL Injection 시뮬레이션
    static void unsafeQuery(String input) {
        String sql = "SELECT * FROM members WHERE name = '" + input + "'";
        System.out.println("[위험] 실행될 SQL: " + sql);
        if (input.contains("' OR '1'='1")) {
            System.out.println("⚠ SQL Injection 공격! 모든 데이터가 노출됩니다!");
        }
    }

    static void safeQuery(String input) {
        String sql = "SELECT * FROM members WHERE name = ?";
        System.out.println("[안전] PreparedStatement SQL: " + sql);
        System.out.println("[안전] 바인딩 파라미터: [" + input + "] (이스케이프 처리됨)");
    }

    public static void main(String[] args) {
        System.out.println("===== JDBC CRUD 시뮬레이션 =====\\n");

        // CREATE
        insert("홍길동", "hong@test.com");
        insert("김철수", "kim@test.com");
        insert("이영희", "lee@test.com");

        // READ
        selectAll();

        // UPDATE
        update(2, "kimcs@newmail.com");
        selectAll();

        // DELETE
        delete(3);
        selectAll();

        // SQL Injection 시뮬레이션
        System.out.println("===== SQL Injection 시뮬레이션 =====\\n");
        String maliciousInput = "' OR '1'='1";
        unsafeQuery(maliciousInput);
        System.out.println();
        safeQuery(maliciousInput);
    }
}`,title:"JDBC CRUD 및 SQL Injection 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"프로필 이미지를 업로드하고 DB에 파일 경로를 저장하는 서블릿을 구현하세요. 파일 크기는 5MB로 제한합니다."}),e.jsxs("li",{children:["MySQL에 ",e.jsx("code",{children:"products"})," 테이블을 만들고, JDBC를 사용하여 상품 CRUD를 구현하세요."]}),e.jsxs("li",{children:["Tomcat DBCP를 설정하고 ",e.jsx("code",{children:"DBUtil"})," 클래스를 만들어 커넥션 풀을 사용하세요."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Statement"})," 대신 ",e.jsx("code",{children:"PreparedStatement"}),"를 사용하여 기존 DAO를 리팩토링하세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("S09")?"btn-primary":"btn-accent"}`,onClick:()=>i("S09"),children:s("S09")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/servlet/08",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: MVC 패턴 구현"]}),e.jsxs(t,{to:"/servlet/10",children:["다음: 미니 프로젝트: CRUD 게시판 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{o as default};
