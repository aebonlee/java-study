import{u as a,r as i,j as e,L as t}from"./index-CEQBFVPE.js";function n(){const{completeLesson:s,isLessonCompleted:r}=a();return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/projects",children:"프로젝트"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"PJ05"})]}),e.jsx("h1",{children:"PJ05. 서블릿 게시판"}),e.jsx("p",{children:"Servlet/JSP 기반의 CRUD 게시판을 구현하고, 페이징, 검색, 파일 업로드, 세션 인증을 적용합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsxs("div",{style:{background:"linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",border:"1px solid #fed7aa",borderRadius:"16px",padding:"28px 32px",marginBottom:"36px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"#9a3412",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-signal",style:{marginRight:"6px"}}),"난이도"]}),e.jsx("span",{style:{background:"#E76F00",color:"#fff",borderRadius:"6px",padding:"3px 12px",fontSize:"13px",fontWeight:600},children:"고급 (Advanced)"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"#9a3412",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-book",style:{marginRight:"6px"}}),"선수 과목"]}),e.jsx("span",{style:{fontSize:"14px",color:"#7c2d12"},children:"S01-S10, PR04/05/06"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"#9a3412",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-tools",style:{marginRight:"6px"}}),"사용 도구"]}),e.jsx("span",{style:{fontSize:"14px",color:"#7c2d12"},children:"JDK 21, Tomcat 10.1, MySQL, Maven"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"#9a3412",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-list-check",style:{marginRight:"6px"}}),"주요 기능"]}),e.jsx("span",{style:{fontSize:"14px",color:"#7c2d12"},children:"게시글 CRUD, 페이징, 검색/필터링, 파일 업로드, 세션 인증"})]})]}),e.jsx("h2",{children:"1. 프로젝트 소개와 요구사항 분석"}),e.jsxs("p",{children:["이 프로젝트에서는 ",e.jsx("strong",{children:"Jakarta Servlet"}),"과 ",e.jsx("strong",{children:"JSP"}),"를 활용하여 완전한 기능의 게시판 웹 애플리케이션을 구현합니다. 게시글의 작성, 읽기, 수정, 삭제(CRUD) 기능은 물론, 페이징 처리, 검색 기능, 파일 업로드/다운로드, 회원 인증까지 포함된 실무 수준의 게시판을 만들어봅니다."]}),e.jsx("h3",{children:"기능 요구사항"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능 영역"}),e.jsx("th",{children:"상세 요구사항"}),e.jsx("th",{children:"비고"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"게시글 관리"})}),e.jsx("td",{children:"목록 조회, 상세 보기, 작성, 수정, 삭제"}),e.jsx("td",{children:"로그인 사용자만 작성/수정/삭제"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"페이징"})}),e.jsx("td",{children:"페이지당 10건, 페이지 번호 네비게이션"}),e.jsx("td",{children:"LIMIT/OFFSET 활용"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"검색"})}),e.jsx("td",{children:"제목, 작성자, 내용 기준 검색"}),e.jsx("td",{children:"검색 조건 유지"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"파일 업로드"})}),e.jsx("td",{children:"게시글 첨부파일 업로드/다운로드"}),e.jsx("td",{children:"Servlet 3.0 Part API"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"회원 관리"})}),e.jsx("td",{children:"회원가입, 로그인, 로그아웃"}),e.jsx("td",{children:"HttpSession 활용"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 프로젝트 학습 목표"]}),e.jsx("p",{children:"이 프로젝트를 통해 Servlet의 요청/응답 처리, DAO 패턴을 활용한 데이터 접근, JSP를 이용한 뷰 렌더링, 세션 기반 인증 등 웹 개발의 핵심 패턴을 직접 구현해봅니다. 프레임워크 없이 순수 Servlet/JSP로 구축하면서 웹의 동작 원리를 깊이 이해할 수 있습니다."})]}),e.jsx("h2",{children:"2. 프로젝트 구조와 환경 설정"}),e.jsx("p",{children:"Maven WAR 프로젝트로 생성하고, Tomcat 10.1에서 동작하는 Jakarta Servlet 기반 웹 애플리케이션 구조를 설정합니다."}),e.jsx("h3",{children:"Maven pom.xml 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," pom.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>
    <groupId>com.board</groupId>
    <artifactId>servlet-board</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <!-- Jakarta Servlet API (Tomcat 10.1+) -->
        <dependency>
            <groupId>jakarta.servlet</groupId>
            <artifactId>jakarta.servlet-api</artifactId>
            <version>6.0.0</version>
            <scope>provided</scope>
        </dependency>
        <!-- Jakarta JSP API -->
        <dependency>
            <groupId>jakarta.servlet.jsp</groupId>
            <artifactId>jakarta.servlet.jsp-api</artifactId>
            <version>3.1.1</version>
            <scope>provided</scope>
        </dependency>
        <!-- JSTL -->
        <dependency>
            <groupId>org.glassfish.web</groupId>
            <artifactId>jakarta.servlet.jsp.jstl</artifactId>
            <version>3.0.1</version>
        </dependency>
        <dependency>
            <groupId>jakarta.servlet.jsp.jstl</groupId>
            <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
            <version>3.0.0</version>
        </dependency>
        <!-- MySQL Connector -->
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <version>8.3.0</version>
        </dependency>
    </dependencies>
</project>`})})]}),e.jsx("h3",{children:"프로젝트 디렉토리 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-folder-open"})," 프로젝트 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`servlet-board/
├── src/main/java/com/board/
│   ├── controller/          ← Servlet 컨트롤러
│   │   ├── BoardServlet.java
│   │   ├── LoginServlet.java
│   │   ├── RegisterServlet.java
│   │   └── FileDownloadServlet.java
│   ├── dao/                 ← 데이터 접근 계층
│   │   ├── BoardDAO.java
│   │   └── UserDAO.java
│   ├── dto/                 ← 데이터 전송 객체
│   │   ├── BoardDTO.java
│   │   └── UserDTO.java
│   ├── filter/              ← 서블릿 필터
│   │   ├── AuthFilter.java
│   │   └── EncodingFilter.java
│   └── util/                ← 유틸리티
│       └── DBUtil.java
├── src/main/webapp/
│   ├── WEB-INF/
│   │   ├── web.xml
│   │   └── views/           ← JSP 파일
│   │       ├── board/
│   │       │   ├── list.jsp
│   │       │   ├── view.jsp
│   │       │   ├── write.jsp
│   │       │   └── edit.jsp
│   │       ├── user/
│   │       │   ├── login.jsp
│   │       │   └── register.jsp
│   │       └── common/
│   │           ├── header.jsp
│   │           └── footer.jsp
│   ├── css/
│   │   └── style.css
│   └── uploads/             ← 파일 업로드 저장 경로
└── pom.xml`})})]}),e.jsx("h3",{children:"MySQL 데이터베이스 DDL"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," schema.sql"]})}),e.jsx("pre",{children:e.jsx("code",{children:`CREATE DATABASE IF NOT EXISTS servlet_board
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;

USE servlet_board;

-- 회원 테이블
CREATE TABLE users (
    user_id     BIGINT AUTO_INCREMENT PRIMARY KEY,
    username    VARCHAR(50)  NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    nickname    VARCHAR(50)  NOT NULL,
    email       VARCHAR(100),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 게시글 테이블
CREATE TABLE boards (
    board_id    BIGINT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(200) NOT NULL,
    content     TEXT         NOT NULL,
    author      VARCHAR(50)  NOT NULL,
    view_count  INT DEFAULT 0,
    file_name   VARCHAR(255),
    file_path   VARCHAR(500),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id     BIGINT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);`})})]}),e.jsx("h3",{children:"web.xml 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," web.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
         https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd"
         version="6.0">

    <display-name>Servlet Board</display-name>

    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>

    <!-- 인코딩 필터 -->
    <filter>
        <filter-name>EncodingFilter</filter-name>
        <filter-class>com.board.filter.EncodingFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>EncodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," Tomcat 10.1 배포"]}),e.jsxs("p",{children:["Maven으로 ",e.jsx("code",{children:"mvn clean package"}),"를 실행하면 ",e.jsx("code",{children:"target/servlet-board.war"})," 파일이 생성됩니다. 이 WAR 파일을 Tomcat의 ",e.jsx("code",{children:"webapps/"})," 디렉토리에 복사하면 자동으로 배포됩니다. IntelliJ Ultimate에서는 Run Configuration에서 Tomcat 서버를 직접 연동할 수 있습니다."]})]}),e.jsx("h2",{children:"3. 게시글 CRUD 구현"}),e.jsxs("p",{children:["게시판의 핵심 기능인 CRUD를 구현합니다. ",e.jsx("strong",{children:"BoardDTO"}),"로 데이터를 전달하고,",e.jsx("strong",{children:"BoardDAO"}),"에서 SQL을 실행하며, ",e.jsx("strong",{children:"BoardServlet"}),"이 요청을 처리합니다."]}),e.jsx("h3",{children:"BoardDTO - 데이터 전송 객체"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BoardDTO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.board.dto;

import java.time.LocalDateTime;

public class BoardDTO {
    private long boardId;
    private String title;
    private String content;
    private String author;
    private int viewCount;
    private String fileName;
    private String filePath;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private long userId;

    // 기본 생성자
    public BoardDTO() {}

    // Getter / Setter
    public long getBoardId() { return boardId; }
    public void setBoardId(long boardId) { this.boardId = boardId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public int getViewCount() { return viewCount; }
    public void setViewCount(int viewCount) { this.viewCount = viewCount; }

    public String getFileName() { return fileName; }
    public void setFileName(String fileName) { this.fileName = fileName; }

    public String getFilePath() { return filePath; }
    public void setFilePath(String filePath) { this.filePath = filePath; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public long getUserId() { return userId; }
    public void setUserId(long userId) { this.userId = userId; }
}`})})]}),e.jsx("h3",{children:"DBUtil - 데이터베이스 연결 유틸리티"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DBUtil.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.board.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {
    private static final String URL = "jdbc:mysql://localhost:3306/servlet_board"
        + "?useSSL=false&serverTimezone=Asia/Seoul&characterEncoding=UTF-8";
    private static final String USER = "root";
    private static final String PASSWORD = "password";

    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("MySQL 드라이버 로드 실패", e);
        }
    }

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}`})})]}),e.jsx("h3",{children:"BoardDAO - 데이터 접근 객체"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BoardDAO.java (핵심 메서드)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.board.dao;

import com.board.dto.BoardDTO;
import com.board.util.DBUtil;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BoardDAO {

    // 게시글 목록 조회 (페이징)
    public List<BoardDTO> getList(int page, int pageSize) throws SQLException {
        List<BoardDTO> list = new ArrayList<>();
        String sql = "SELECT * FROM boards ORDER BY board_id DESC LIMIT ? OFFSET ?";
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

    // 게시글 상세 조회
    public BoardDTO getById(long boardId) throws SQLException {
        String sql = "SELECT * FROM boards WHERE board_id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, boardId);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) return mapRow(rs);
            }
        }
        return null;
    }

    // 게시글 작성
    public void insert(BoardDTO board) throws SQLException {
        String sql = "INSERT INTO boards (title, content, author, user_id, file_name, file_path) "
                   + "VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, board.getTitle());
            pstmt.setString(2, board.getContent());
            pstmt.setString(3, board.getAuthor());
            pstmt.setLong(4, board.getUserId());
            pstmt.setString(5, board.getFileName());
            pstmt.setString(6, board.getFilePath());
            pstmt.executeUpdate();
        }
    }

    // 게시글 수정
    public void update(BoardDTO board) throws SQLException {
        String sql = "UPDATE boards SET title = ?, content = ? WHERE board_id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, board.getTitle());
            pstmt.setString(2, board.getContent());
            pstmt.setLong(3, board.getBoardId());
            pstmt.executeUpdate();
        }
    }

    // 게시글 삭제
    public void delete(long boardId) throws SQLException {
        String sql = "DELETE FROM boards WHERE board_id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, boardId);
            pstmt.executeUpdate();
        }
    }

    // 조회수 증가
    public void incrementViewCount(long boardId) throws SQLException {
        String sql = "UPDATE boards SET view_count = view_count + 1 WHERE board_id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, boardId);
            pstmt.executeUpdate();
        }
    }

    // 전체 게시글 수 조회
    public int getTotalCount() throws SQLException {
        String sql = "SELECT COUNT(*) FROM boards";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql);
             ResultSet rs = pstmt.executeQuery()) {
            if (rs.next()) return rs.getInt(1);
        }
        return 0;
    }

    // ResultSet → BoardDTO 매핑
    private BoardDTO mapRow(ResultSet rs) throws SQLException {
        BoardDTO board = new BoardDTO();
        board.setBoardId(rs.getLong("board_id"));
        board.setTitle(rs.getString("title"));
        board.setContent(rs.getString("content"));
        board.setAuthor(rs.getString("author"));
        board.setViewCount(rs.getInt("view_count"));
        board.setFileName(rs.getString("file_name"));
        board.setFilePath(rs.getString("file_path"));
        board.setCreatedAt(rs.getTimestamp("created_at").toLocalDateTime());
        board.setUserId(rs.getLong("user_id"));
        return board;
    }
}`})})]}),e.jsx("h3",{children:"BoardServlet - 컨트롤러"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BoardServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.board.controller;

import com.board.dao.BoardDAO;
import com.board.dto.BoardDTO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.util.List;

@WebServlet("/board/*")
public class BoardServlet extends HttpServlet {
    private final BoardDAO boardDAO = new BoardDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String pathInfo = req.getPathInfo();
        if (pathInfo == null) pathInfo = "/list";

        switch (pathInfo) {
            case "/list"  -> listBoards(req, resp);
            case "/view"  -> viewBoard(req, resp);
            case "/write" -> showWriteForm(req, resp);
            case "/edit"  -> showEditForm(req, resp);
            default       -> resp.sendError(404);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String pathInfo = req.getPathInfo();

        switch (pathInfo) {
            case "/write"  -> writeBoard(req, resp);
            case "/edit"   -> editBoard(req, resp);
            case "/delete" -> deleteBoard(req, resp);
            default        -> resp.sendError(404);
        }
    }

    private void listBoards(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        try {
            int page = 1;
            String pageParam = req.getParameter("page");
            if (pageParam != null) page = Integer.parseInt(pageParam);

            int pageSize = 10;
            List<BoardDTO> boards = boardDAO.getList(page, pageSize);
            int totalCount = boardDAO.getTotalCount();
            int totalPages = (int) Math.ceil((double) totalCount / pageSize);

            req.setAttribute("boards", boards);
            req.setAttribute("currentPage", page);
            req.setAttribute("totalPages", totalPages);
            req.getRequestDispatcher("/WEB-INF/views/board/list.jsp")
               .forward(req, resp);
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    private void viewBoard(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        try {
            long id = Long.parseLong(req.getParameter("id"));
            boardDAO.incrementViewCount(id);
            BoardDTO board = boardDAO.getById(id);

            if (board == null) {
                resp.sendError(404, "게시글을 찾을 수 없습니다.");
                return;
            }
            req.setAttribute("board", board);
            req.getRequestDispatcher("/WEB-INF/views/board/view.jsp")
               .forward(req, resp);
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    // ... writeBoard, editBoard, deleteBoard 메서드
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," URL 패턴 설계"]}),e.jsxs("p",{children:[e.jsx("code",{children:'@WebServlet("/board/*")'}),"를 사용하면 ",e.jsx("code",{children:"/board/list"}),", ",e.jsx("code",{children:"/board/view"}),",",e.jsx("code",{children:"/board/write"})," 등의 URL을 하나의 서블릿에서 처리할 수 있습니다.",e.jsx("code",{children:"getPathInfo()"}),"로 ",e.jsx("code",{children:"/*"})," 뒤의 경로를 추출하여 switch 문으로 분기합니다. 이는 Front Controller 패턴의 기본 형태입니다."]})]}),e.jsx("h2",{children:"4. 페이징과 검색 기능"}),e.jsxs("p",{children:["게시글이 많아지면 페이징 처리가 필수입니다. MySQL의 ",e.jsx("code",{children:"LIMIT"}),"과 ",e.jsx("code",{children:"OFFSET"}),"을 활용하고, 검색 조건에 따라 동적 SQL을 생성합니다."]}),e.jsx("h3",{children:"페이징 로직"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BoardDAO.java - 페이징 + 검색"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 검색 조건을 포함한 게시글 목록 조회
public List<BoardDTO> search(String searchType, String keyword,
                             int page, int pageSize) throws SQLException {
    List<BoardDTO> list = new ArrayList<>();
    StringBuilder sql = new StringBuilder("SELECT * FROM boards");

    if (keyword != null && !keyword.trim().isEmpty()) {
        switch (searchType) {
            case "title"   -> sql.append(" WHERE title LIKE ?");
            case "author"  -> sql.append(" WHERE author LIKE ?");
            case "content" -> sql.append(" WHERE content LIKE ?");
        }
    }
    sql.append(" ORDER BY board_id DESC LIMIT ? OFFSET ?");
    int offset = (page - 1) * pageSize;

    try (Connection conn = DBUtil.getConnection();
         PreparedStatement pstmt = conn.prepareStatement(sql.toString())) {

        int paramIdx = 1;
        if (keyword != null && !keyword.trim().isEmpty()) {
            pstmt.setString(paramIdx++, "%" + keyword + "%");
        }
        pstmt.setInt(paramIdx++, pageSize);
        pstmt.setInt(paramIdx, offset);

        try (ResultSet rs = pstmt.executeQuery()) {
            while (rs.next()) {
                list.add(mapRow(rs));
            }
        }
    }
    return list;
}

// 검색 결과 총 건수
public int getSearchCount(String searchType, String keyword) throws SQLException {
    StringBuilder sql = new StringBuilder("SELECT COUNT(*) FROM boards");

    if (keyword != null && !keyword.trim().isEmpty()) {
        switch (searchType) {
            case "title"   -> sql.append(" WHERE title LIKE ?");
            case "author"  -> sql.append(" WHERE author LIKE ?");
            case "content" -> sql.append(" WHERE content LIKE ?");
        }
    }

    try (Connection conn = DBUtil.getConnection();
         PreparedStatement pstmt = conn.prepareStatement(sql.toString())) {
        if (keyword != null && !keyword.trim().isEmpty()) {
            pstmt.setString(1, "%" + keyword + "%");
        }
        try (ResultSet rs = pstmt.executeQuery()) {
            if (rs.next()) return rs.getInt(1);
        }
    }
    return 0;
}`})})]}),e.jsx("h3",{children:"페이지 네비게이션 JSP"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," list.jsp - 페이지 네비게이션 부분"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%-- 페이지 네비게이션 --%>
<div class="pagination">
    <c:if test="\${currentPage > 1}">
        <a href="?page=\${currentPage - 1}&searchType=\${searchType}&keyword=\${keyword}">
            &laquo; 이전
        </a>
    </c:if>

    <c:forEach var="i" begin="1" end="\${totalPages}">
        <c:choose>
            <c:when test="\${i == currentPage}">
                <span class="current">\${i}</span>
            </c:when>
            <c:otherwise>
                <a href="?page=\${i}&searchType=\${searchType}&keyword=\${keyword}">
                    \${i}
                </a>
            </c:otherwise>
        </c:choose>
    </c:forEach>

    <c:if test="\${currentPage < totalPages}">
        <a href="?page=\${currentPage + 1}&searchType=\${searchType}&keyword=\${keyword}">
            다음 &raquo;
        </a>
    </c:if>
</div>

<%-- 검색 폼 --%>
<form action="\${pageContext.request.contextPath}/board/list" method="get"
      class="search-form">
    <select name="searchType">
        <option value="title"   \${searchType == 'title' ? 'selected' : ''}>제목</option>
        <option value="author"  \${searchType == 'author' ? 'selected' : ''}>작성자</option>
        <option value="content" \${searchType == 'content' ? 'selected' : ''}>내용</option>
    </select>
    <input type="text" name="keyword" value="\${keyword}" placeholder="검색어 입력"/>
    <button type="submit">검색</button>
</form>`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 페이징 공식"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"OFFSET"})," = (현재 페이지 - 1) x 페이지 크기",e.jsx("br",{}),e.jsx("strong",{children:"총 페이지 수"})," = Math.ceil(총 게시글 수 / 페이지 크기)",e.jsx("br",{}),"예를 들어, 총 53건이고 페이지 크기가 10이면 총 6페이지가 됩니다. 3페이지를 요청하면 OFFSET=20, LIMIT=10입니다."]})]}),e.jsx("h2",{children:"5. 파일 업로드와 다운로드"}),e.jsxs("p",{children:["Servlet 3.0+에서 제공하는 ",e.jsx("strong",{children:"Part API"}),"(",e.jsx("code",{children:"@MultipartConfig"}),")를 사용하여 파일 업로드를 처리하고, 별도의 다운로드 서블릿으로 파일을 제공합니다."]}),e.jsx("h3",{children:"파일 업로드 처리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BoardServlet.java - 파일 업로드"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/board/*")
@MultipartConfig(
    fileSizeThreshold = 1024 * 1024,      // 1MB - 메모리 임계값
    maxFileSize       = 10 * 1024 * 1024,  // 10MB - 파일 최대 크기
    maxRequestSize    = 50 * 1024 * 1024   // 50MB - 요청 최대 크기
)
public class BoardServlet extends HttpServlet {

    private static final String UPLOAD_DIR = "uploads";

    private void writeBoard(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        HttpSession session = req.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            resp.sendRedirect(req.getContextPath() + "/user/login");
            return;
        }

        String title   = req.getParameter("title");
        String content = req.getParameter("content");
        UserDTO user   = (UserDTO) session.getAttribute("user");

        // 파일 업로드 처리
        Part filePart = req.getPart("attachment");
        String fileName = null;
        String filePath = null;

        if (filePart != null && filePart.getSize() > 0) {
            fileName = extractFileName(filePart);
            // 파일명 중복 방지: UUID 접두사 추가
            String uniqueName = UUID.randomUUID() + "_" + fileName;
            String uploadPath = getServletContext().getRealPath("") + UPLOAD_DIR;

            File uploadDir = new File(uploadPath);
            if (!uploadDir.exists()) uploadDir.mkdirs();

            filePath = uploadPath + File.separator + uniqueName;
            filePart.write(filePath);
        }

        BoardDTO board = new BoardDTO();
        board.setTitle(title);
        board.setContent(content);
        board.setAuthor(user.getNickname());
        board.setUserId(user.getUserId());
        board.setFileName(fileName);
        board.setFilePath(filePath);

        try {
            boardDAO.insert(board);
            resp.sendRedirect(req.getContextPath() + "/board/list");
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    // Part에서 파일명 추출
    private String extractFileName(Part part) {
        String header = part.getHeader("content-disposition");
        for (String token : header.split(";")) {
            if (token.trim().startsWith("filename")) {
                return token.substring(token.indexOf('=') + 1)
                            .trim().replace(""", "");
            }
        }
        return "unknown";
    }
}`})})]}),e.jsx("h3",{children:"파일 다운로드 서블릿"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," FileDownloadServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.board.controller;

import com.board.dao.BoardDAO;
import com.board.dto.BoardDTO;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.*;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@WebServlet("/download")
public class FileDownloadServlet extends HttpServlet {
    private final BoardDAO boardDAO = new BoardDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
        long boardId = Long.parseLong(req.getParameter("id"));

        try {
            BoardDTO board = boardDAO.getById(boardId);
            if (board == null || board.getFilePath() == null) {
                resp.sendError(404, "파일을 찾을 수 없습니다.");
                return;
            }

            File file = new File(board.getFilePath());
            if (!file.exists()) {
                resp.sendError(404, "파일이 서버에 존재하지 않습니다.");
                return;
            }

            // 한글 파일명 인코딩
            String encodedName = URLEncoder.encode(board.getFileName(),
                                     StandardCharsets.UTF_8).replace("+", "%20");

            resp.setContentType("application/octet-stream");
            resp.setHeader("Content-Disposition",
                "attachment; filename*=UTF-8''" + encodedName);
            resp.setContentLengthLong(file.length());

            try (FileInputStream fis = new FileInputStream(file);
                 OutputStream os = resp.getOutputStream()) {
                fis.transferTo(os);
            }
        } catch (Exception e) {
            resp.sendError(500, "다운로드 중 오류가 발생했습니다.");
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 파일 업로드 보안 주의사항"]}),e.jsx("p",{children:"실무에서는 반드시 파일 확장자를 검증(화이트리스트)하고, 파일 크기를 제한하며, 업로드 경로를 웹 루트 외부에 설정해야 합니다. 또한 파일명에 UUID를 부여하여 경로 탐색 공격(Path Traversal)을 방지합니다."})]}),e.jsx("h2",{children:"6. 세션 인증과 회원 관리"}),e.jsxs("p",{children:[e.jsx("strong",{children:"HttpSession"}),"을 사용하여 로그인 상태를 유지하고, 서블릿 필터로 인증이 필요한 URL을 보호합니다."]}),e.jsx("h3",{children:"LoginServlet - 로그인 처리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," LoginServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.board.controller;

import com.board.dao.UserDAO;
import com.board.dto.UserDTO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;

@WebServlet("/user/login")
public class LoginServlet extends HttpServlet {
    private final UserDAO userDAO = new UserDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.getRequestDispatcher("/WEB-INF/views/user/login.jsp")
           .forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        try {
            UserDTO user = userDAO.findByUsername(username);

            if (user != null && user.getPassword().equals(password)) {
                // 로그인 성공 → 세션에 사용자 정보 저장
                HttpSession session = req.getSession();
                session.setAttribute("user", user);
                session.setMaxInactiveInterval(30 * 60); // 30분 타임아웃

                resp.sendRedirect(req.getContextPath() + "/board/list");
            } else {
                req.setAttribute("error", "아이디 또는 비밀번호가 올바르지 않습니다.");
                req.getRequestDispatcher("/WEB-INF/views/user/login.jsp")
                   .forward(req, resp);
            }
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }
}`})})]}),e.jsx("h3",{children:"AuthFilter - 인증 필터"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AuthFilter.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.board.filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.*;
import java.io.IOException;

@WebFilter(urlPatterns = {"/board/write", "/board/edit", "/board/delete"})
public class AuthFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                          FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse resp = (HttpServletResponse) response;

        HttpSession session = req.getSession(false);

        if (session == null || session.getAttribute("user") == null) {
            // 미인증 사용자 → 로그인 페이지로 리다이렉트
            resp.sendRedirect(req.getContextPath() + "/user/login");
            return;
        }

        // 인증된 사용자 → 다음 필터/서블릿으로 진행
        chain.doFilter(request, response);
    }
}`})})]}),e.jsx("h3",{children:"RegisterServlet - 회원가입"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," RegisterServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.board.controller;

import com.board.dao.UserDAO;
import com.board.dto.UserDTO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;

@WebServlet("/user/register")
public class RegisterServlet extends HttpServlet {
    private final UserDAO userDAO = new UserDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.getRequestDispatcher("/WEB-INF/views/user/register.jsp")
           .forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String nickname = req.getParameter("nickname");
        String email    = req.getParameter("email");

        try {
            // 중복 체크
            if (userDAO.findByUsername(username) != null) {
                req.setAttribute("error", "이미 존재하는 아이디입니다.");
                req.getRequestDispatcher("/WEB-INF/views/user/register.jsp")
                   .forward(req, resp);
                return;
            }

            UserDTO user = new UserDTO();
            user.setUsername(username);
            user.setPassword(password);  // 실무에서는 반드시 BCrypt 해싱!
            user.setNickname(nickname);
            user.setEmail(email);

            userDAO.insert(user);
            resp.sendRedirect(req.getContextPath() + "/user/login");
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 비밀번호 보안"]}),e.jsxs("p",{children:["위 예제에서는 학습 목적으로 비밀번호를 평문 저장하고 있지만, ",e.jsx("strong",{children:"실무에서는 절대 금물"}),"입니다. 반드시 ",e.jsx("strong",{children:"BCrypt"})," 같은 해시 알고리즘을 사용하여 비밀번호를 암호화해야 합니다.",e.jsx("code",{children:"jBCrypt"})," 라이브러리를 Maven 의존성에 추가하여 사용하세요."]})]}),e.jsx("h2",{children:"7. JSP 뷰와 마무리"}),e.jsxs("p",{children:["JSP에서 ",e.jsx("strong",{children:"EL(Expression Language)"}),"과 ",e.jsx("strong",{children:"JSTL(JSP Standard Tag Library)"}),"을 사용하여 동적 HTML을 렌더링하고, 공통 레이아웃을 include로 관리합니다."]}),e.jsx("h3",{children:"게시글 목록 JSP"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," list.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<!DOCTYPE html>
<html>
<head>
    <title>게시판 목록</title>
    <link rel="stylesheet" href="\${pageContext.request.contextPath}/css/style.css"/>
</head>
<body>
    <%@ include file="/WEB-INF/views/common/header.jsp" %>

    <div class="container">
        <h1>게시판</h1>

        <c:if test="\${not empty sessionScope.user}">
            <a href="\${pageContext.request.contextPath}/board/write"
               class="btn btn-primary">글쓰기</a>
        </c:if>

        <table class="board-table">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach var="board" items="\${boards}">
                    <tr>
                        <td>\${board.boardId}</td>
                        <td>
                            <a href="\${pageContext.request.contextPath}/board/view?id=\${board.boardId}">
                                \${board.title}
                                <c:if test="\${not empty board.fileName}">
                                    <i class="fas fa-paperclip"></i>
                                </c:if>
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
    </div>

    <%@ include file="/WEB-INF/views/common/footer.jsp" %>
</body>
</html>`})})]}),e.jsx("h3",{children:"게시글 작성 폼 JSP"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," write.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>글쓰기</title>
    <link rel="stylesheet" href="\${pageContext.request.contextPath}/css/style.css"/>
</head>
<body>
    <%@ include file="/WEB-INF/views/common/header.jsp" %>

    <div class="container">
        <h1>글쓰기</h1>
        <form action="\${pageContext.request.contextPath}/board/write"
              method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="title">제목</label>
                <input type="text" id="title" name="title" required
                       maxlength="200" placeholder="제목을 입력하세요"/>
            </div>
            <div class="form-group">
                <label for="content">내용</label>
                <textarea id="content" name="content" rows="15" required
                          placeholder="내용을 입력하세요"></textarea>
            </div>
            <div class="form-group">
                <label for="attachment">첨부파일</label>
                <input type="file" id="attachment" name="attachment"/>
                <small>최대 10MB까지 업로드 가능합니다.</small>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">등록</button>
                <a href="\${pageContext.request.contextPath}/board/list"
                   class="btn btn-secondary">취소</a>
            </div>
        </form>
    </div>

    <%@ include file="/WEB-INF/views/common/footer.jsp" %>
</body>
</html>`})})]}),e.jsx("h3",{children:"CSS 스타일 예시"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," style.css (주요 스타일)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`/* 공통 레이아웃 */
.container { max-width: 960px; margin: 0 auto; padding: 20px; }

/* 게시판 테이블 */
.board-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
.board-table th, .board-table td {
    padding: 12px 16px;
    border-bottom: 1px solid #e2e8f0;
    text-align: left;
}
.board-table th { background: #f8fafc; font-weight: 600; }
.board-table td a { color: #1e40af; text-decoration: none; }
.board-table td a:hover { text-decoration: underline; }

/* 버튼 */
.btn { padding: 8px 20px; border: none; border-radius: 6px; cursor: pointer; }
.btn-primary { background: #3b82f6; color: #fff; }
.btn-secondary { background: #94a3b8; color: #fff; }

/* 폼 */
.form-group { margin-bottom: 16px; }
.form-group label { display: block; margin-bottom: 6px; font-weight: 600; }
.form-group input, .form-group textarea {
    width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;
}

/* 페이지네이션 */
.pagination { display: flex; gap: 4px; justify-content: center; margin: 24px 0; }
.pagination a, .pagination .current {
    padding: 6px 12px; border: 1px solid #d1d5db; border-radius: 4px;
}
.pagination .current { background: #3b82f6; color: #fff; border-color: #3b82f6; }`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," JSP에서 WEB-INF 활용"]}),e.jsxs("p",{children:["JSP 파일을 ",e.jsx("code",{children:"WEB-INF/views/"})," 디렉토리에 배치하면 브라우저에서 직접 접근할 수 없습니다. 반드시 서블릿의 ",e.jsx("code",{children:"RequestDispatcher.forward()"}),"를 통해서만 접근할 수 있어 보안상 유리합니다. 공통 레이아웃은 ",e.jsx("code",{children:"<%@ include %>"})," 지시자로 포함합니다."]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 실습 과제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"위 코드를 기반으로 프로젝트를 생성하고, MySQL에 테이블을 만든 뒤 게시글 CRUD가 동작하는지 확인하세요."}),e.jsx("li",{children:"페이징 기능을 구현하고, 100개의 더미 데이터를 INSERT하여 페이지 이동이 정상 동작하는지 테스트하세요."}),e.jsx("li",{children:'검색 기능에 "제목+내용" 복합 검색 옵션을 추가해보세요.'}),e.jsx("li",{children:"파일 업로드 시 이미지 파일만 허용하도록 확장자 검증 로직을 추가하세요."}),e.jsx("li",{children:"비밀번호를 BCrypt로 해싱하도록 UserDAO를 개선하세요 (jBCrypt 라이브러리 활용)."}),e.jsx("li",{children:"게시글 상세 페이지에 댓글 기능을 추가해보세요 (comments 테이블 설계 포함)."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${r("PJ05")?"btn-primary":"btn-accent"}`,onClick:()=>s("PJ05"),children:r("PJ05")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/projects/04",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 멀티스레드 채팅"]}),e.jsxs(t,{to:"/projects/06",children:["다음: 서블릿 쇼핑몰 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{n as default};
