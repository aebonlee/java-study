import{u as i,r as s,j as e,L as t}from"./index-CvcBSWGG.js";import{J as n}from"./JavaCodeRunner-DLAJAnJe.js";function l(){const{completeLesson:a,isLessonCompleted:r}=i();return s.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/servlet",children:"서블릿 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 10"})]}),e.jsx("h1",{children:"Lesson 10. 미니 프로젝트: CRUD 게시판"}),e.jsx("p",{children:"지금까지 배운 서블릿, JSP, MVC, JDBC를 종합하여 완전한 CRUD 게시판을 구현합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 프로젝트 구조 설계"}),e.jsx("p",{children:"MVC 패턴에 따라 패키지를 구성합니다. Controller(서블릿), Model(VO/DAO), View(JSP)를 명확히 분리합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 프로젝트 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`board-project/
├── src/main/java/
│   └── com/example/board/
│       ├── controller/
│       │   └── BoardServlet.java       ← FrontController
│       ├── model/
│       │   ├── vo/
│       │   │   └── BoardVO.java        ← 게시글 데이터 객체
│       │   └── dao/
│       │       └── BoardDAO.java       ← DB 접근 계층
│       ├── service/
│       │   └── BoardService.java       ← 비즈니스 로직
│       └── util/
│           └── DBUtil.java             ← DB 연결 유틸
├── src/main/webapp/
│   ├── WEB-INF/
│   │   ├── web.xml
│   │   └── views/
│   │       └── board/
│   │           ├── list.jsp            ← 목록 페이지
│   │           ├── view.jsp            ← 상세 페이지
│   │           ├── writeForm.jsp       ← 등록 폼
│   │           └── editForm.jsp        ← 수정 폼
│   └── META-INF/
│       └── context.xml                 ← DB 커넥션 풀 설정
└── pom.xml`})})]}),e.jsx("h2",{children:"2. DB 설계"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," schema.sql"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS boarddb
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;

USE boarddb;

-- 게시판 테이블
CREATE TABLE boards (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(200)    NOT NULL,
    content     TEXT            NOT NULL,
    author      VARCHAR(50)     NOT NULL,
    view_count  INT             DEFAULT 0,
    created_at  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP       DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 테스트 데이터
INSERT INTO boards (title, content, author) VALUES
('첫 번째 게시글', '안녕하세요! 첫 번째 게시글입니다.', '홍길동'),
('서블릿 학습 후기', '서블릿을 배우면서 많이 성장했습니다.', '김철수'),
('MVC 패턴 정리', 'MVC 패턴에 대해 정리했습니다.', '이영희'),
('JDBC 연동 방법', 'JDBC를 사용한 DB 연동 방법을 공유합니다.', '박민수'),
('JSP와 EL 활용', 'JSP에서 EL을 활용하는 방법입니다.', '최지원');`})})]}),e.jsx("h2",{children:"3. VO와 DAO 구현"}),e.jsx("h3",{children:"BoardVO - 게시글 데이터 객체"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BoardVO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.example.board.model.vo;

import java.sql.Timestamp;

public class BoardVO {
    private int id;
    private String title;
    private String content;
    private String author;
    private int viewCount;
    private Timestamp createdAt;
    private Timestamp updatedAt;

    public BoardVO() {}

    public BoardVO(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    // Getter & Setter
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public int getViewCount() { return viewCount; }
    public void setViewCount(int viewCount) { this.viewCount = viewCount; }
    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }
    public Timestamp getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Timestamp updatedAt) { this.updatedAt = updatedAt; }
}`})})]}),e.jsx("h3",{children:"BoardDAO - DB 접근 계층"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BoardDAO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.example.board.model.dao;

import com.example.board.model.vo.BoardVO;
import com.example.board.util.DBUtil;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO {

    // 게시글 목록 조회 (페이징)
    public List<BoardVO> findAll(int page, int pageSize) throws SQLException {
        List<BoardVO> list = new ArrayList<>();
        String sql = "SELECT * FROM boards ORDER BY id DESC LIMIT ? OFFSET ?";
        int offset = (page - 1) * pageSize;

        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, pageSize);
            pstmt.setInt(2, offset);
            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    list.add(mapRow(rs));
                }
            }
        }
        return list;
    }

    // 전체 게시글 수
    public int getTotalCount() throws SQLException {
        String sql = "SELECT COUNT(*) FROM boards";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql);
             ResultSet rs = pstmt.executeQuery()) {
            return rs.next() ? rs.getInt(1) : 0;
        }
    }

    // 게시글 상세 조회
    public BoardVO findById(int id) throws SQLException {
        String sql = "SELECT * FROM boards WHERE id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, id);
            try (ResultSet rs = pstmt.executeQuery()) {
                return rs.next() ? mapRow(rs) : null;
            }
        }
    }

    // 조회수 증가
    public void incrementViewCount(int id) throws SQLException {
        String sql = "UPDATE boards SET view_count = view_count + 1 WHERE id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, id);
            pstmt.executeUpdate();
        }
    }

    // 게시글 등록
    public int insert(BoardVO board) throws SQLException {
        String sql = "INSERT INTO boards(title, content, author) VALUES(?, ?, ?)";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, board.getTitle());
            pstmt.setString(2, board.getContent());
            pstmt.setString(3, board.getAuthor());
            return pstmt.executeUpdate();
        }
    }

    // 게시글 수정
    public int update(BoardVO board) throws SQLException {
        String sql = "UPDATE boards SET title=?, content=? WHERE id=?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, board.getTitle());
            pstmt.setString(2, board.getContent());
            pstmt.setInt(3, board.getId());
            return pstmt.executeUpdate();
        }
    }

    // 게시글 삭제
    public int delete(int id) throws SQLException {
        String sql = "DELETE FROM boards WHERE id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, id);
            return pstmt.executeUpdate();
        }
    }

    // ResultSet → BoardVO 매핑
    private BoardVO mapRow(ResultSet rs) throws SQLException {
        BoardVO board = new BoardVO();
        board.setId(rs.getInt("id"));
        board.setTitle(rs.getString("title"));
        board.setContent(rs.getString("content"));
        board.setAuthor(rs.getString("author"));
        board.setViewCount(rs.getInt("view_count"));
        board.setCreatedAt(rs.getTimestamp("created_at"));
        board.setUpdatedAt(rs.getTimestamp("updated_at"));
        return board;
    }
}`})})]}),e.jsx("h2",{children:"4. 서블릿 컨트롤러 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BoardServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/board/*")
public class BoardServlet extends HttpServlet {
    private BoardDAO boardDAO = new BoardDAO();
    private static final int PAGE_SIZE = 10;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String action = req.getPathInfo();
        if (action == null) action = "/list";

        try {
            switch (action) {
                case "/list":
                    list(req, resp);
                    break;
                case "/view":
                    view(req, resp);
                    break;
                case "/writeForm":
                    forward(req, resp, "/WEB-INF/views/board/writeForm.jsp");
                    break;
                case "/editForm":
                    editForm(req, resp);
                    break;
                default:
                    resp.sendError(404);
            }
        } catch (SQLException e) {
            throw new ServletException(e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        String action = req.getPathInfo();

        try {
            switch (action) {
                case "/create":
                    create(req, resp);
                    break;
                case "/update":
                    update(req, resp);
                    break;
                case "/delete":
                    delete(req, resp);
                    break;
            }
        } catch (SQLException e) {
            throw new ServletException(e);
        }
    }

    private void list(HttpServletRequest req, HttpServletResponse resp)
            throws SQLException, ServletException, IOException {
        int page = 1;
        String pageParam = req.getParameter("page");
        if (pageParam != null) page = Integer.parseInt(pageParam);

        List<BoardVO> boards = boardDAO.findAll(page, PAGE_SIZE);
        int totalCount = boardDAO.getTotalCount();
        int totalPages = (int) Math.ceil((double) totalCount / PAGE_SIZE);

        req.setAttribute("boards", boards);
        req.setAttribute("currentPage", page);
        req.setAttribute("totalPages", totalPages);
        req.setAttribute("totalCount", totalCount);
        forward(req, resp, "/WEB-INF/views/board/list.jsp");
    }

    private void view(HttpServletRequest req, HttpServletResponse resp)
            throws SQLException, ServletException, IOException {
        int id = Integer.parseInt(req.getParameter("id"));
        boardDAO.incrementViewCount(id);
        BoardVO board = boardDAO.findById(id);
        req.setAttribute("board", board);
        forward(req, resp, "/WEB-INF/views/board/view.jsp");
    }

    private void create(HttpServletRequest req, HttpServletResponse resp)
            throws SQLException, IOException {
        BoardVO board = new BoardVO(
            req.getParameter("title"),
            req.getParameter("content"),
            req.getParameter("author")
        );
        boardDAO.insert(board);
        resp.sendRedirect(req.getContextPath() + "/board/list");
    }

    private void update(HttpServletRequest req, HttpServletResponse resp)
            throws SQLException, IOException {
        BoardVO board = new BoardVO();
        board.setId(Integer.parseInt(req.getParameter("id")));
        board.setTitle(req.getParameter("title"));
        board.setContent(req.getParameter("content"));
        boardDAO.update(board);
        resp.sendRedirect(req.getContextPath() + "/board/view?id=" + board.getId());
    }

    private void delete(HttpServletRequest req, HttpServletResponse resp)
            throws SQLException, IOException {
        int id = Integer.parseInt(req.getParameter("id"));
        boardDAO.delete(id);
        resp.sendRedirect(req.getContextPath() + "/board/list");
    }

    private void forward(HttpServletRequest req, HttpServletResponse resp,
                         String path) throws ServletException, IOException {
        req.getRequestDispatcher(path).forward(req, resp);
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬에서 실습하세요."})]}),e.jsx("h2",{children:"5. JSP 뷰 구현"}),e.jsx("h3",{children:"목록 페이지 (list.jsp)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," list.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head><title>게시판</title></head>
<body>
    <h1>게시판 (총 \${totalCount}건)</h1>
    <table border="1" style="width:100%; border-collapse:collapse;">
        <thead>
            <tr>
                <th>번호</th><th>제목</th><th>작성자</th>
                <th>작성일</th><th>조회</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="b" items="\${boards}">
                <tr>
                    <td>\${b.id}</td>
                    <td><a href="view?id=\${b.id}">\${b.title}</a></td>
                    <td>\${b.author}</td>
                    <td><fmt:formatDate value="\${b.createdAt}" pattern="yyyy-MM-dd"/></td>
                    <td>\${b.viewCount}</td>
                </tr>
            </c:forEach>
        </tbody>
    </table>

    <!-- 페이징 -->
    <div style="text-align:center; margin-top:20px;">
        <c:if test="\${currentPage > 1}">
            <a href="list?page=\${currentPage - 1}">[이전]</a>
        </c:if>
        <c:forEach var="i" begin="1" end="\${totalPages}">
            <c:choose>
                <c:when test="\${i == currentPage}">
                    <strong>[\${i}]</strong>
                </c:when>
                <c:otherwise>
                    <a href="list?page=\${i}">[\${i}]</a>
                </c:otherwise>
            </c:choose>
        </c:forEach>
        <c:if test="\${currentPage < totalPages}">
            <a href="list?page=\${currentPage + 1}">[다음]</a>
        </c:if>
    </div>
    <br/>
    <a href="writeForm">글쓰기</a>
</body>
</html>`})})]}),e.jsx("h3",{children:"상세 페이지 (view.jsp)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," view.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<body>
    <h1>\${board.title}</h1>
    <p>작성자: \${board.author} |
       작성일: <fmt:formatDate value="\${board.createdAt}" pattern="yyyy-MM-dd HH:mm"/> |
       조회: \${board.viewCount}</p>
    <hr/>
    <div style="min-height:200px; white-space:pre-wrap;">\${board.content}</div>
    <hr/>
    <a href="editForm?id=\${board.id}">수정</a>
    <form action="delete" method="post" style="display:inline;"
          onsubmit="return confirm('정말 삭제하시겠습니까?');">
        <input type="hidden" name="id" value="\${board.id}" />
        <button type="submit">삭제</button>
    </form>
    <a href="list">목록</a>
</body>
</html>`})})]}),e.jsx("h3",{children:"등록/수정 폼 (writeForm.jsp)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," writeForm.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<body>
    <h1>글쓰기</h1>
    <form action="create" method="post">
        <p>제목: <input type="text" name="title" required style="width:400px;"/></p>
        <p>작성자: <input type="text" name="author" required /></p>
        <p>내용:<br/>
           <textarea name="content" rows="10" cols="60" required></textarea></p>
        <button type="submit">등록</button>
        <a href="list">취소</a>
    </form>
</body>
</html>`})})]}),e.jsx("h2",{children:"6. 페이징 처리"}),e.jsxs("p",{children:["게시글이 많아지면 페이징이 필수입니다. 핵심은 MySQL의 ",e.jsx("code",{children:"LIMIT"}),"과 ",e.jsx("code",{children:"OFFSET"}),"입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 페이징 로직 정리"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 페이징 핵심 공식
int pageSize = 10;               // 한 페이지에 표시할 게시글 수
int currentPage = 1;             // 현재 페이지 (파라미터로 받음)
int totalCount = dao.getTotalCount(); // 전체 게시글 수

// 전체 페이지 수 계산 (올림)
int totalPages = (int) Math.ceil((double) totalCount / pageSize);
// 예: 총 23건, 10건씩 → 3페이지

// SQL OFFSET 계산
int offset = (currentPage - 1) * pageSize;
// 1페이지: OFFSET 0,  2페이지: OFFSET 10,  3페이지: OFFSET 20

// SQL 쿼리
// SELECT * FROM boards ORDER BY id DESC LIMIT 10 OFFSET 0;

// 페이지 블록 계산 (1~5, 6~10, 11~15...)
int blockSize = 5;
int startPage = ((currentPage - 1) / blockSize) * blockSize + 1;
int endPage = Math.min(startPage + blockSize - 1, totalPages);`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsxs("p",{children:["대용량 데이터에서는 OFFSET 기반 페이징 대신 커서(Cursor) 기반 페이징이 성능상 유리합니다. ",e.jsx("code",{children:"WHERE id < ? ORDER BY id DESC LIMIT 10"})," 방식을 고려하세요."]})]}),e.jsx("h2",{children:"7. 프로젝트 완성과 배포"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 배포 체크리스트"]})}),e.jsx("pre",{children:e.jsx("code",{children:`1. 프로젝트 빌드
   $ mvn clean package
   → target/board-project.war 생성

2. Tomcat 배포
   - board-project.war 파일을 Tomcat의 webapps/ 폴더에 복사
   - 또는 Tomcat Manager에서 WAR 파일 업로드

3. 환경 설정 확인
   - DB 접속 정보 (context.xml)
   - 인코딩 필터 설정
   - 에러 페이지 설정

4. 테스트
   - http://localhost:8080/board-project/board/list
   - CRUD 전체 기능 테스트
   - 한글 입력/출력 테스트
   - 페이징 동작 확인`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 다음 단계"]}),e.jsx("p",{children:"이 게시판 프로젝트를 완성하면 Spring Framework로 동일한 기능을 구현해봅니다. Spring MVC가 서블릿 기반 MVC의 반복적인 코드를 얼마나 줄여주는지 체감할 수 있습니다."})]}),e.jsx("h2",{children:"8. Board VO 클래스 실습"}),e.jsx("p",{children:"게시판 프로젝트의 핵심인 BoardVO 클래스를 만들고 활용해봅니다."}),e.jsx(n,{defaultCode:`import java.util.*;

public class Main {
    static class BoardVO {
        private int id;
        private String title;
        private String content;
        private String author;
        private int viewCount;
        private String createdAt;

        public BoardVO() {}
        public BoardVO(int id, String title, String content, String author, String createdAt) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.author = author;
            this.viewCount = 0;
            this.createdAt = createdAt;
        }

        public int getId() { return id; }
        public String getTitle() { return title; }
        public String getContent() { return content; }
        public String getAuthor() { return author; }
        public int getViewCount() { return viewCount; }
        public void setViewCount(int vc) { this.viewCount = vc; }
        public String getCreatedAt() { return createdAt; }
    }

    // 인메모리 게시판 DAO
    static List<BoardVO> boards = new ArrayList<>();
    static int nextId = 1;

    static void create(String title, String content, String author) {
        boards.add(new BoardVO(nextId++, title, content, author, "2026-03-23"));
    }

    static void printList(int page, int size) {
        int start = (page - 1) * size;
        int end = Math.min(start + size, boards.size());
        int total = boards.size();
        int totalPages = (int) Math.ceil((double) total / size);

        System.out.println("┌────┬──────────────────────┬────────┬────────────┬──────┐");
        System.out.println("│ ID │ 제목                 │ 작성자 │ 작성일     │ 조회 │");
        System.out.println("├────┼──────────────────────┼────────┼────────────┼──────┤");

        for (int i = Math.min(end - 1, boards.size() - 1); i >= start; i--) {
            BoardVO b = boards.get(i);
            System.out.printf("│ %2d │ %-20s │ %-6s │ %s │ %4d │%n",
                b.getId(), b.getTitle(), b.getAuthor(),
                b.getCreatedAt(), b.getViewCount());
        }
        System.out.println("└────┴──────────────────────┴────────┴────────────┴──────┘");
        System.out.println("페이지: " + page + " / " + totalPages + " (총 " + total + "건)\\n");
    }

    public static void main(String[] args) {
        System.out.println("===== CRUD 게시판 시뮬레이션 =====\\n");

        // CREATE
        System.out.println("[글 등록]");
        create("서블릿 학습 완료!", "서블릿의 기초를 모두 배웠습니다.", "홍길동");
        create("JSP 정리 노트", "JSP 기본 문법을 정리했습니다.", "김철수");
        create("MVC 패턴 이해", "MVC 구조를 드디어 이해했습니다!", "이영희");
        create("JDBC 실습 후기", "DB 연동이 생각보다 쉬웠어요.", "박민수");
        create("게시판 프로젝트 시작", "드디어 게시판 만들기 시작!", "최지원");
        System.out.println("5건의 게시글이 등록되었습니다.\\n");

        // READ - 목록 (페이징)
        System.out.println("[게시글 목록 - 1페이지 (3건씩)]");
        printList(1, 3);

        System.out.println("[게시글 목록 - 2페이지 (3건씩)]");
        printList(2, 3);

        // READ - 상세 & 조회수 증가
        System.out.println("[게시글 상세 조회 - ID: 3]");
        BoardVO target = boards.get(2);
        target.setViewCount(target.getViewCount() + 1);
        System.out.println("제목: " + target.getTitle());
        System.out.println("내용: " + target.getContent());
        System.out.println("작성자: " + target.getAuthor());
        System.out.println("조회수: " + target.getViewCount() + "\\n");

        // DELETE
        System.out.println("[게시글 삭제 - ID: 2]");
        boards.removeIf(b -> b.getId() == 2);
        System.out.println("삭제 완료!\\n");

        System.out.println("[삭제 후 목록]");
        printList(1, 5);
    }
}`,title:"CRUD 게시판 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"이 게시판에 검색 기능을 추가하세요. 제목, 작성자, 내용으로 검색할 수 있어야 합니다."}),e.jsx("li",{children:"댓글(Comment) 기능을 추가하세요. 게시글 하나에 여러 댓글을 작성할 수 있어야 합니다."}),e.jsx("li",{children:"로그인/로그아웃 기능을 추가하고, 자신의 글만 수정/삭제할 수 있도록 제한하세요."}),e.jsx("li",{children:"파일 첨부 기능을 추가하여 게시글에 이미지나 문서를 업로드할 수 있게 구현하세요."}),e.jsx("li",{children:"이 프로젝트를 Spring MVC로 마이그레이션하여 코드량이 어떻게 줄어드는지 비교해보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${r("S10")?"btn-primary":"btn-accent"}`,onClick:()=>a("S10"),children:r("S10")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/servlet/09",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 파일 업로드와 DB 연동"]}),e.jsxs(t,{to:"/spring",children:["다음: 스프링 과정 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
