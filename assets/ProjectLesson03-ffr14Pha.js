import{u as r,r as i,j as e,L as t}from"./index-DE-ywqhK.js";function l(){const{completeLesson:a,isLessonCompleted:s}=r();return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/projects",children:"프로젝트"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"PJ03"})]}),e.jsx("h1",{children:"PJ03. 도서 관리 시스템"}),e.jsx("p",{children:"JDBC와 H2 Database를 활용하여 도서 관리 시스템을 구현합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("div",{style:{background:"linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",borderRadius:"16px",padding:"28px 32px",marginBottom:"36px",color:"#fff"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx("div",{style:{fontSize:"13px",opacity:.8,marginBottom:"4px"},children:"난이도"}),e.jsxs("div",{style:{fontSize:"16px",fontWeight:600},children:[e.jsx("i",{className:"fas fa-signal",style:{marginRight:"6px"}}),"중급 (Intermediate)"]})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx("div",{style:{fontSize:"13px",opacity:.8,marginBottom:"4px"},children:"선수 학습"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:600},children:"Ch01-12, PR01/03/04/05"})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx("div",{style:{fontSize:"13px",opacity:.8,marginBottom:"4px"},children:"개발 도구"}),e.jsx("div",{style:{fontSize:"14px"},children:"JDK 21, IntelliJ IDEA, Maven, H2 Database"})]}),e.jsxs("div",{style:{flex:"1 1 100%"},children:[e.jsx("div",{style:{fontSize:"13px",opacity:.8,marginBottom:"8px"},children:"주요 기능"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["도서 CRUD","JDBC + H2 DB","카테고리/검색","대출/반납 관리"].map(n=>e.jsx("span",{style:{background:"rgba(255,255,255,0.2)",borderRadius:"20px",padding:"4px 14px",fontSize:"13px"},children:n},n))})]})]})}),e.jsx("h2",{children:"1. 프로젝트 소개와 요구사항 분석"}),e.jsxs("p",{children:["이 프로젝트에서는 ",e.jsx("strong",{children:"도서 관리 시스템"}),"을 구현합니다. 단순한 파일 기반 저장이 아니라",e.jsx("strong",{children:"H2 Database"}),"를 사용하여 실제 데이터베이스 기반의 CRUD 애플리케이션을 만들게 됩니다. 도서관에서 사용할 수 있는 수준의 도서 등록, 검색, 대출, 반납 기능을 갖춘 콘솔 애플리케이션입니다."]}),e.jsx("h3",{children:"요구사항 정리"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"우선순위"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"도서 등록"})}),e.jsx("td",{children:"제목, 저자, ISBN, 카테고리, 출판년도 입력"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"도서 조회"})}),e.jsx("td",{children:"전체 목록 조회, 상세 조회"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"도서 수정"})}),e.jsx("td",{children:"등록된 도서 정보 수정"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"도서 삭제"})}),e.jsx("td",{children:"도서 삭제 (대출 중이면 불가)"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"도서 검색"})}),e.jsx("td",{children:"제목, 저자, ISBN으로 검색"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"카테고리 필터"})}),e.jsx("td",{children:"카테고리별 도서 목록 조회"}),e.jsx("td",{children:"선택"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"회원 관리"})}),e.jsx("td",{children:"회원 등록, 조회"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"대출/반납"})}),e.jsx("td",{children:"도서 대출, 반납, 대출 이력 조회"}),e.jsx("td",{children:"필수"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 왜 데이터베이스를 사용하나요?"]}),e.jsxs("p",{children:["이전 프로젝트에서는 파일(CSV, JSON)에 데이터를 저장했습니다. 하지만 실무에서는 거의 모든 애플리케이션이 데이터베이스를 사용합니다. ",e.jsx("strong",{children:"H2"}),"는 Java로 작성된 경량 관계형 데이터베이스로, 별도 설치 없이 Maven 의존성만 추가하면 바로 사용할 수 있어 학습용으로 적합합니다."]})]}),e.jsx("h2",{children:"2. 프로젝트 구조 설계"}),e.jsxs("p",{children:["이 프로젝트는 ",e.jsx("strong",{children:"Maven"}),"을 빌드 도구로 사용하며, ",e.jsx("strong",{children:"DAO(Data Access Object) 패턴"}),"을 적용하여 데이터 접근 로직을 분리합니다. 계층적 구조를 통해 유지보수가 쉬운 코드를 작성합니다."]}),e.jsx("h3",{children:"Maven 프로젝트 생성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-terminal"})," IntelliJ에서 Maven 프로젝트 생성"]})}),e.jsx("pre",{children:e.jsx("code",{children:`File > New > Project > Maven Archetype
  - Name: library-management
  - GroupId: com.library
  - ArtifactId: library-management
  - Archetype: maven-archetype-quickstart`})})]}),e.jsx("h3",{children:"패키지 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-folder-open"})," 프로젝트 디렉토리 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`library-management/
├── pom.xml
└── src/
    └── main/
        └── java/
            └── com/library/
                ├── App.java                 // 메인 클래스
                ├── config/
                │   └── DatabaseConfig.java  // DB 연결 설정
                ├── model/
                │   ├── Book.java            // 도서 엔티티
                │   ├── Member.java          // 회원 엔티티
                │   └── Loan.java            // 대출 엔티티
                ├── dao/
                │   ├── BookDAO.java          // 도서 데이터 접근
                │   ├── MemberDAO.java        // 회원 데이터 접근
                │   └── LoanDAO.java          // 대출 데이터 접근
                └── ui/
                    └── ConsoleUI.java        // 콘솔 사용자 인터페이스`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," DAO 패턴이란?"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"DAO(Data Access Object) 패턴"}),"은 데이터베이스 접근 로직을 별도의 클래스로 분리하는 디자인 패턴입니다. 비즈니스 로직과 데이터 접근 로직을 분리하여 코드의 유지보수성을 높입니다. 각 엔티티(Book, Member, Loan)마다 전용 DAO 클래스를 만들어 CRUD 연산을 캡슐화합니다."]})]}),e.jsx("h3",{children:"Model 클래스 설계"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Book.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.library.model;

import java.time.LocalDate;

public class Book {
    private Long id;
    private String title;
    private String author;
    private String isbn;
    private String category;
    private int publishYear;
    private boolean available;  // 대출 가능 여부
    private LocalDate createdAt;

    public Book() {}

    public Book(String title, String author, String isbn,
                String category, int publishYear) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.category = category;
        this.publishYear = publishYear;
        this.available = true;
        this.createdAt = LocalDate.now();
    }

    // Getter & Setter
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public int getPublishYear() { return publishYear; }
    public void setPublishYear(int publishYear) { this.publishYear = publishYear; }

    public boolean isAvailable() { return available; }
    public void setAvailable(boolean available) { this.available = available; }

    public LocalDate getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDate createdAt) { this.createdAt = createdAt; }

    @Override
    public String toString() {
        return String.format("[%d] %s - %s (%s) [%s]",
                id, title, author, category,
                available ? "대출가능" : "대출중");
    }
}`})})]}),e.jsx("h2",{children:"3. 데이터베이스 설계와 H2 설정"}),e.jsx("p",{children:"H2 Database는 Java 기반의 경량 관계형 데이터베이스입니다. 임베디드 모드로 실행할 수 있어 별도의 데이터베이스 서버 설치 없이 애플리케이션에 내장하여 사용할 수 있습니다."}),e.jsx("h3",{children:"Maven 의존성 추가"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," pom.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<dependencies>
    <!-- H2 Database -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <version>2.2.224</version>
    </dependency>
</dependencies>

<properties>
    <maven.compiler.source>21</maven.compiler.source>
    <maven.compiler.target>21</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
</properties>`})})]}),e.jsx("h3",{children:"데이터베이스 테이블 설계 (DDL)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," schema.sql"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 도서 테이블
CREATE TABLE IF NOT EXISTS books (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(200) NOT NULL,
    author      VARCHAR(100) NOT NULL,
    isbn        VARCHAR(13) UNIQUE NOT NULL,
    category    VARCHAR(50) NOT NULL,
    publish_year INT,
    available   BOOLEAN DEFAULT TRUE,
    created_at  DATE DEFAULT CURRENT_DATE
);

-- 회원 테이블
CREATE TABLE IF NOT EXISTS members (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(50) NOT NULL,
    phone       VARCHAR(15),
    email       VARCHAR(100),
    created_at  DATE DEFAULT CURRENT_DATE
);

-- 대출 테이블
CREATE TABLE IF NOT EXISTS loans (
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    book_id     BIGINT NOT NULL,
    member_id   BIGINT NOT NULL,
    loan_date   DATE DEFAULT CURRENT_DATE,
    due_date    DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (member_id) REFERENCES members(id)
);`})})]}),e.jsx("h3",{children:"데이터베이스 연결 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DatabaseConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.library.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseConfig {
    // H2 파일 기반 모드 (데이터가 파일로 저장됨)
    private static final String URL = "jdbc:h2:./data/library";
    private static final String USER = "sa";
    private static final String PASSWORD = "";

    // 커넥션 획득
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    // 테이블 초기화
    public static void initDatabase() {
        String createBooks = """
            CREATE TABLE IF NOT EXISTS books (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(200) NOT NULL,
                author VARCHAR(100) NOT NULL,
                isbn VARCHAR(13) UNIQUE NOT NULL,
                category VARCHAR(50) NOT NULL,
                publish_year INT,
                available BOOLEAN DEFAULT TRUE,
                created_at DATE DEFAULT CURRENT_DATE
            )
            """;

        String createMembers = """
            CREATE TABLE IF NOT EXISTS members (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                phone VARCHAR(15),
                email VARCHAR(100),
                created_at DATE DEFAULT CURRENT_DATE
            )
            """;

        String createLoans = """
            CREATE TABLE IF NOT EXISTS loans (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                book_id BIGINT NOT NULL,
                member_id BIGINT NOT NULL,
                loan_date DATE DEFAULT CURRENT_DATE,
                due_date DATE NOT NULL,
                return_date DATE,
                FOREIGN KEY (book_id) REFERENCES books(id),
                FOREIGN KEY (member_id) REFERENCES members(id)
            )
            """;

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement()) {
            stmt.execute(createBooks);
            stmt.execute(createMembers);
            stmt.execute(createLoans);
            System.out.println("데이터베이스 초기화 완료!");
        } catch (SQLException e) {
            System.err.println("DB 초기화 실패: " + e.getMessage());
            throw new RuntimeException(e);
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," H2 연결 URL 형식"]}),e.jsxs("p",{children:[e.jsx("code",{children:"jdbc:h2:./data/library"})," - 파일 기반 모드로 ",e.jsx("code",{children:"./data/"})," 디렉토리에 DB 파일 저장",e.jsx("br",{}),e.jsx("code",{children:"jdbc:h2:mem:library"})," - 메모리 모드 (프로그램 종료 시 데이터 삭제)",e.jsx("br",{}),e.jsx("code",{children:"jdbc:h2:tcp://localhost/~/library"})," - 서버 모드 (여러 프로세스에서 동시 접근)"]})]}),e.jsx("h2",{children:"4. 도서 관리 CRUD 구현"}),e.jsxs("p",{children:[e.jsx("strong",{children:"BookDAO"})," 클래스에서 JDBC의 ",e.jsx("code",{children:"PreparedStatement"}),"를 사용하여 도서에 대한 Create, Read, Update, Delete 연산을 구현합니다. SQL Injection 방지를 위해 반드시 ",e.jsx("code",{children:"PreparedStatement"}),"를 사용해야 합니다."]}),e.jsx("h3",{children:"BookDAO 전체 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BookDAO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.library.dao;

import com.library.config.DatabaseConfig;
import com.library.model.Book;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BookDAO {

    // 도서 등록 (Create)
    public Book insert(Book book) throws SQLException {
        String sql = "INSERT INTO books (title, author, isbn, category, publish_year) VALUES (?, ?, ?, ?, ?)";

        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {

            pstmt.setString(1, book.getTitle());
            pstmt.setString(2, book.getAuthor());
            pstmt.setString(3, book.getIsbn());
            pstmt.setString(4, book.getCategory());
            pstmt.setInt(5, book.getPublishYear());

            pstmt.executeUpdate();

            // 자동 생성된 ID 가져오기
            try (ResultSet rs = pstmt.getGeneratedKeys()) {
                if (rs.next()) {
                    book.setId(rs.getLong(1));
                }
            }
        }
        return book;
    }

    // 전체 조회 (Read)
    public List<Book> findAll() throws SQLException {
        String sql = "SELECT * FROM books ORDER BY id";
        List<Book> books = new ArrayList<>();

        try (Connection conn = DatabaseConfig.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                books.add(mapToBook(rs));
            }
        }
        return books;
    }

    // ID로 조회
    public Book findById(Long id) throws SQLException {
        String sql = "SELECT * FROM books WHERE id = ?";

        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, id);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    return mapToBook(rs);
                }
            }
        }
        return null;
    }

    // 도서 수정 (Update)
    public boolean update(Book book) throws SQLException {
        String sql = """
            UPDATE books SET title = ?, author = ?, isbn = ?,
                             category = ?, publish_year = ?
            WHERE id = ?
            """;

        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, book.getTitle());
            pstmt.setString(2, book.getAuthor());
            pstmt.setString(3, book.getIsbn());
            pstmt.setString(4, book.getCategory());
            pstmt.setInt(5, book.getPublishYear());
            pstmt.setLong(6, book.getId());

            return pstmt.executeUpdate() > 0;
        }
    }

    // 도서 삭제 (Delete)
    public boolean delete(Long id) throws SQLException {
        String sql = "DELETE FROM books WHERE id = ?";

        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, id);
            return pstmt.executeUpdate() > 0;
        }
    }

    // 대출 상태 변경
    public void updateAvailability(Long bookId, boolean available)
            throws SQLException {
        String sql = "UPDATE books SET available = ? WHERE id = ?";

        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setBoolean(1, available);
            pstmt.setLong(2, bookId);
            pstmt.executeUpdate();
        }
    }

    // ResultSet → Book 변환 헬퍼 메서드
    private Book mapToBook(ResultSet rs) throws SQLException {
        Book book = new Book();
        book.setId(rs.getLong("id"));
        book.setTitle(rs.getString("title"));
        book.setAuthor(rs.getString("author"));
        book.setIsbn(rs.getString("isbn"));
        book.setCategory(rs.getString("category"));
        book.setPublishYear(rs.getInt("publish_year"));
        book.setAvailable(rs.getBoolean("available"));
        book.setCreatedAt(rs.getDate("created_at").toLocalDate());
        return book;
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," try-with-resources 패턴"]}),e.jsxs("p",{children:["JDBC에서 ",e.jsx("code",{children:"Connection"}),", ",e.jsx("code",{children:"PreparedStatement"}),", ",e.jsx("code",{children:"ResultSet"}),"은 모두 ",e.jsx("code",{children:"AutoCloseable"}),"을 구현하므로 ",e.jsx("strong",{children:"try-with-resources"}),"를 사용하면 예외 발생 시에도 자동으로 리소스가 해제됩니다. 이를 통해 커넥션 누수를 방지합니다."]})]}),e.jsx("h2",{children:"5. 회원 관리와 대출/반납"}),e.jsx("p",{children:"회원 관리와 대출/반납 기능을 구현합니다. 대출 시에는 도서의 대출 가능 여부를 확인하고, 반납 시에는 반납 날짜를 기록하며 도서를 다시 대출 가능 상태로 변경합니다."}),e.jsx("h3",{children:"MemberDAO 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberDAO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.library.dao;

import com.library.config.DatabaseConfig;
import com.library.model.Member;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MemberDAO {

    public Member insert(Member member) throws SQLException {
        String sql = "INSERT INTO members (name, phone, email) VALUES (?, ?, ?)";

        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql,
                     Statement.RETURN_GENERATED_KEYS)) {

            pstmt.setString(1, member.getName());
            pstmt.setString(2, member.getPhone());
            pstmt.setString(3, member.getEmail());
            pstmt.executeUpdate();

            try (ResultSet rs = pstmt.getGeneratedKeys()) {
                if (rs.next()) {
                    member.setId(rs.getLong(1));
                }
            }
        }
        return member;
    }

    public List<Member> findAll() throws SQLException {
        String sql = "SELECT * FROM members ORDER BY id";
        List<Member> members = new ArrayList<>();

        try (Connection conn = DatabaseConfig.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                members.add(mapToMember(rs));
            }
        }
        return members;
    }

    public Member findById(Long id) throws SQLException {
        String sql = "SELECT * FROM members WHERE id = ?";

        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, id);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    return mapToMember(rs);
                }
            }
        }
        return null;
    }

    private Member mapToMember(ResultSet rs) throws SQLException {
        Member m = new Member();
        m.setId(rs.getLong("id"));
        m.setName(rs.getString("name"));
        m.setPhone(rs.getString("phone"));
        m.setEmail(rs.getString("email"));
        m.setCreatedAt(rs.getDate("created_at").toLocalDate());
        return m;
    }
}`})})]}),e.jsx("h3",{children:"LoanDAO - 대출/반납 로직"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," LoanDAO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.library.dao;

import com.library.config.DatabaseConfig;
import com.library.model.Loan;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class LoanDAO {

    private final BookDAO bookDAO = new BookDAO();

    // 도서 대출
    public Loan loanBook(Long bookId, Long memberId, int loanDays)
            throws SQLException {

        // 1. 대출 가능 여부 확인
        var book = bookDAO.findById(bookId);
        if (book == null) {
            throw new IllegalArgumentException("존재하지 않는 도서입니다.");
        }
        if (!book.isAvailable()) {
            throw new IllegalStateException("이미 대출 중인 도서입니다.");
        }

        Connection conn = null;
        try {
            conn = DatabaseConfig.getConnection();
            conn.setAutoCommit(false);  // 트랜잭션 시작

            // 2. 대출 레코드 삽입
            String sql = "INSERT INTO loans (book_id, member_id, due_date) VALUES (?, ?, ?)";
            Loan loan = new Loan();

            try (PreparedStatement pstmt = conn.prepareStatement(sql,
                    Statement.RETURN_GENERATED_KEYS)) {

                LocalDate dueDate = LocalDate.now().plusDays(loanDays);
                pstmt.setLong(1, bookId);
                pstmt.setLong(2, memberId);
                pstmt.setDate(3, Date.valueOf(dueDate));
                pstmt.executeUpdate();

                try (ResultSet rs = pstmt.getGeneratedKeys()) {
                    if (rs.next()) loan.setId(rs.getLong(1));
                }

                loan.setBookId(bookId);
                loan.setMemberId(memberId);
                loan.setLoanDate(LocalDate.now());
                loan.setDueDate(dueDate);
            }

            // 3. 도서 상태를 대출 불가로 변경
            String updateSql = "UPDATE books SET available = FALSE WHERE id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(updateSql)) {
                pstmt.setLong(1, bookId);
                pstmt.executeUpdate();
            }

            conn.commit();  // 트랜잭션 커밋
            return loan;

        } catch (SQLException e) {
            if (conn != null) conn.rollback();  // 실패 시 롤백
            throw e;
        } finally {
            if (conn != null) {
                conn.setAutoCommit(true);
                conn.close();
            }
        }
    }

    // 도서 반납
    public void returnBook(Long loanId) throws SQLException {
        Connection conn = null;
        try {
            conn = DatabaseConfig.getConnection();
            conn.setAutoCommit(false);

            // 1. 대출 레코드에 반납일 기록
            String sql = "UPDATE loans SET return_date = ? WHERE id = ? AND return_date IS NULL";
            Long bookId;

            try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                pstmt.setDate(1, Date.valueOf(LocalDate.now()));
                pstmt.setLong(2, loanId);
                int rows = pstmt.executeUpdate();
                if (rows == 0) {
                    throw new IllegalArgumentException("유효하지 않은 대출 번호이거나 이미 반납됨");
                }
            }

            // 2. bookId 조회
            String findSql = "SELECT book_id FROM loans WHERE id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(findSql)) {
                pstmt.setLong(1, loanId);
                try (ResultSet rs = pstmt.executeQuery()) {
                    if (rs.next()) {
                        bookId = rs.getLong("book_id");
                    } else {
                        throw new SQLException("대출 정보를 찾을 수 없습니다.");
                    }
                }
            }

            // 3. 도서 상태를 대출 가능으로 변경
            String updateSql = "UPDATE books SET available = TRUE WHERE id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(updateSql)) {
                pstmt.setLong(1, bookId);
                pstmt.executeUpdate();
            }

            conn.commit();
        } catch (SQLException e) {
            if (conn != null) conn.rollback();
            throw e;
        } finally {
            if (conn != null) {
                conn.setAutoCommit(true);
                conn.close();
            }
        }
    }

    // 현재 대출 중인 목록 조회
    public List<Loan> findActiveLoans() throws SQLException {
        String sql = """
            SELECT l.*, b.title AS book_title, m.name AS member_name
            FROM loans l
            JOIN books b ON l.book_id = b.id
            JOIN members m ON l.member_id = m.id
            WHERE l.return_date IS NULL
            ORDER BY l.due_date
            """;

        List<Loan> loans = new ArrayList<>();
        try (Connection conn = DatabaseConfig.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                Loan loan = new Loan();
                loan.setId(rs.getLong("id"));
                loan.setBookId(rs.getLong("book_id"));
                loan.setMemberId(rs.getLong("member_id"));
                loan.setLoanDate(rs.getDate("loan_date").toLocalDate());
                loan.setDueDate(rs.getDate("due_date").toLocalDate());
                loan.setBookTitle(rs.getString("book_title"));
                loan.setMemberName(rs.getString("member_name"));
                loans.add(loan);
            }
        }
        return loans;
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 트랜잭션이 필요한 이유"]}),e.jsxs("p",{children:["대출 처리는 ",e.jsx("strong",{children:"대출 레코드 삽입"}),"과 ",e.jsx("strong",{children:"도서 상태 변경"})," 두 작업이 함께 이루어져야 합니다. 만약 대출 레코드는 삽입했는데 도서 상태 변경에 실패하면 데이터 불일치가 발생합니다.",e.jsx("code",{children:"conn.setAutoCommit(false)"}),"로 트랜잭션을 시작하고, 모든 작업이 성공하면 ",e.jsx("code",{children:"commit()"}),", 실패하면 ",e.jsx("code",{children:"rollback()"}),"으로 원자성을 보장합니다."]})]}),e.jsx("h2",{children:"6. 검색과 카테고리 기능"}),e.jsxs("p",{children:["사용자가 제목, 저자, ISBN으로 도서를 검색하고, 카테고리별로 필터링할 수 있는 기능을 구현합니다. SQL의 ",e.jsx("code",{children:"LIKE"})," 연산자를 활용하여 부분 일치 검색을 지원합니다."]}),e.jsx("h3",{children:"검색 메서드 추가 (BookDAO)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BookDAO.java - 검색 메서드"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 제목으로 검색 (부분 일치)
public List<Book> searchByTitle(String keyword) throws SQLException {
    String sql = "SELECT * FROM books WHERE LOWER(title) LIKE LOWER(?) ORDER BY title";
    return searchBooks(sql, "%" + keyword + "%");
}

// 저자로 검색
public List<Book> searchByAuthor(String keyword) throws SQLException {
    String sql = "SELECT * FROM books WHERE LOWER(author) LIKE LOWER(?) ORDER BY author";
    return searchBooks(sql, "%" + keyword + "%");
}

// ISBN으로 정확 검색
public List<Book> searchByIsbn(String isbn) throws SQLException {
    String sql = "SELECT * FROM books WHERE isbn = ?";
    return searchBooks(sql, isbn);
}

// 카테고리별 필터링
public List<Book> findByCategory(String category) throws SQLException {
    String sql = "SELECT * FROM books WHERE category = ? ORDER BY title";
    return searchBooks(sql, category);
}

// 대출 가능한 도서만 조회
public List<Book> findAvailable() throws SQLException {
    String sql = "SELECT * FROM books WHERE available = TRUE ORDER BY title";
    List<Book> books = new ArrayList<>();

    try (Connection conn = DatabaseConfig.getConnection();
         Statement stmt = conn.createStatement();
         ResultSet rs = stmt.executeQuery(sql)) {

        while (rs.next()) {
            books.add(mapToBook(rs));
        }
    }
    return books;
}

// 통합 검색 (제목 또는 저자)
public List<Book> search(String keyword) throws SQLException {
    String sql = """
        SELECT * FROM books
        WHERE LOWER(title) LIKE LOWER(?)
           OR LOWER(author) LIKE LOWER(?)
        ORDER BY title
        """;

    List<Book> books = new ArrayList<>();
    try (Connection conn = DatabaseConfig.getConnection();
         PreparedStatement pstmt = conn.prepareStatement(sql)) {

        String pattern = "%" + keyword + "%";
        pstmt.setString(1, pattern);
        pstmt.setString(2, pattern);

        try (ResultSet rs = pstmt.executeQuery()) {
            while (rs.next()) {
                books.add(mapToBook(rs));
            }
        }
    }
    return books;
}

// 카테고리 목록 조회
public List<String> findAllCategories() throws SQLException {
    String sql = "SELECT DISTINCT category FROM books ORDER BY category";
    List<String> categories = new ArrayList<>();

    try (Connection conn = DatabaseConfig.getConnection();
         Statement stmt = conn.createStatement();
         ResultSet rs = stmt.executeQuery(sql)) {

        while (rs.next()) {
            categories.add(rs.getString("category"));
        }
    }
    return categories;
}

// 공통 검색 헬퍼
private List<Book> searchBooks(String sql, String param) throws SQLException {
    List<Book> books = new ArrayList<>();

    try (Connection conn = DatabaseConfig.getConnection();
         PreparedStatement pstmt = conn.prepareStatement(sql)) {

        pstmt.setString(1, param);
        try (ResultSet rs = pstmt.executeQuery()) {
            while (rs.next()) {
                books.add(mapToBook(rs));
            }
        }
    }
    return books;
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," SQL LIKE 패턴"]}),e.jsxs("p",{children:[e.jsx("code",{children:"%keyword%"})," - keyword를 포함하는 모든 문자열 (부분 일치)",e.jsx("br",{}),e.jsx("code",{children:"keyword%"})," - keyword로 시작하는 문자열",e.jsx("br",{}),e.jsx("code",{children:"%keyword"})," - keyword로 끝나는 문자열",e.jsx("br",{}),e.jsx("code",{children:"LOWER()"})," 함수로 대소문자를 무시한 검색을 구현합니다."]})]}),e.jsx("h2",{children:"7. 콘솔 UI와 마무리"}),e.jsx("p",{children:"모든 기능을 통합하는 메뉴 기반 콘솔 UI를 구현합니다. 사용자 입력 검증과 예외 처리를 포함하여 안정적인 프로그램을 완성합니다."}),e.jsx("h3",{children:"메인 클래스 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," App.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.library;

import com.library.config.DatabaseConfig;
import com.library.dao.BookDAO;
import com.library.dao.LoanDAO;
import com.library.dao.MemberDAO;
import com.library.model.Book;
import com.library.model.Member;

import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

public class App {

    private static final Scanner scanner = new Scanner(System.in);
    private static final BookDAO bookDAO = new BookDAO();
    private static final MemberDAO memberDAO = new MemberDAO();
    private static final LoanDAO loanDAO = new LoanDAO();

    public static void main(String[] args) {
        System.out.println("=== 도서 관리 시스템 ===");
        DatabaseConfig.initDatabase();

        boolean running = true;
        while (running) {
            printMainMenu();
            int choice = readInt("선택: ");

            try {
                switch (choice) {
                    case 1 -> manageBooks();
                    case 2 -> manageMembers();
                    case 3 -> manageLoans();
                    case 4 -> searchBooks();
                    case 0 -> {
                        running = false;
                        System.out.println("프로그램을 종료합니다.");
                    }
                    default -> System.out.println("잘못된 선택입니다.");
                }
            } catch (SQLException e) {
                System.err.println("오류 발생: " + e.getMessage());
            }
        }
        scanner.close();
    }

    private static void printMainMenu() {
        System.out.println("\\n========== 메인 메뉴 ==========");
        System.out.println("1. 도서 관리");
        System.out.println("2. 회원 관리");
        System.out.println("3. 대출/반납");
        System.out.println("4. 도서 검색");
        System.out.println("0. 종료");
        System.out.println("================================");
    }

    private static void manageBooks() throws SQLException {
        System.out.println("\\n--- 도서 관리 ---");
        System.out.println("1. 도서 등록  2. 전체 조회  3. 수정  4. 삭제");
        int choice = readInt("선택: ");

        switch (choice) {
            case 1 -> {
                System.out.print("제목: ");
                String title = scanner.nextLine();
                System.out.print("저자: ");
                String author = scanner.nextLine();
                System.out.print("ISBN (13자리): ");
                String isbn = scanner.nextLine();
                System.out.print("카테고리: ");
                String category = scanner.nextLine();
                int year = readInt("출판년도: ");

                Book book = new Book(title, author, isbn, category, year);
                bookDAO.insert(book);
                System.out.println("도서가 등록되었습니다. ID: " + book.getId());
            }
            case 2 -> {
                List<Book> books = bookDAO.findAll();
                if (books.isEmpty()) {
                    System.out.println("등록된 도서가 없습니다.");
                } else {
                    books.forEach(System.out::println);
                    System.out.println("총 " + books.size() + "권");
                }
            }
            case 3 -> {
                long id = readInt("수정할 도서 ID: ");
                Book book = bookDAO.findById(id);
                if (book == null) {
                    System.out.println("해당 도서를 찾을 수 없습니다.");
                    return;
                }
                System.out.println("현재: " + book);
                System.out.print("새 제목 (Enter=유지): ");
                String title = scanner.nextLine();
                if (!title.isBlank()) book.setTitle(title);
                bookDAO.update(book);
                System.out.println("수정 완료!");
            }
            case 4 -> {
                long id = readInt("삭제할 도서 ID: ");
                if (bookDAO.delete(id)) {
                    System.out.println("삭제 완료!");
                } else {
                    System.out.println("삭제 실패 (존재하지 않는 ID)");
                }
            }
        }
    }

    private static int readInt(String prompt) {
        while (true) {
            try {
                System.out.print(prompt);
                int value = Integer.parseInt(scanner.nextLine().trim());
                return value;
            } catch (NumberFormatException e) {
                System.out.println("숫자를 입력해주세요.");
            }
        }
    }
    // manageMembers(), manageLoans(), searchBooks() 도 유사한 패턴으로 구현
}`})})]}),e.jsx("h3",{children:"입력 검증 유틸리티"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 입력 검증 예시"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ISBN 검증 (13자리 숫자)
private static boolean isValidIsbn(String isbn) {
    return isbn != null && isbn.matches("\\\\d{13}");
}

// 이메일 검증
private static boolean isValidEmail(String email) {
    return email != null && email.matches("^[\\\\w.-]+@[\\\\w.-]+\\\\.\\\\w{2,}$");
}

// 전화번호 검증
private static boolean isValidPhone(String phone) {
    return phone != null && phone.matches("^\\\\d{2,3}-\\\\d{3,4}-\\\\d{4}$");
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 예외 처리 전략"]}),e.jsxs("p",{children:["DAO 계층에서는 ",e.jsx("code",{children:"SQLException"}),"을 상위로 전파하고, UI 계층(App.java)에서 catch하여 사용자에게 적절한 메시지를 표시합니다. 비즈니스 규칙 위반(예: 대출 중인 도서 삭제)은",e.jsx("code",{children:"IllegalStateException"}),"이나 ",e.jsx("code",{children:"IllegalArgumentException"}),"으로 명확히 구분합니다."]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Member 모델 클래스를 작성하고 ",e.jsx("code",{children:"MemberDAO"}),"에 수정/삭제 기능을 추가해보세요."]}),e.jsxs("li",{children:["대출 연체 도서 목록을 조회하는 ",e.jsx("code",{children:"findOverdueLoans()"})," 메서드를 구현해보세요. (",e.jsx("code",{children:"due_date < CURRENT_DATE AND return_date IS NULL"}),")"]}),e.jsx("li",{children:"도서 등록 시 ISBN 중복 체크 로직을 추가해보세요."}),e.jsxs("li",{children:["카테고리별 도서 수를 집계하는 ",e.jsx("code",{children:"countByCategory()"})," 메서드를 구현해보세요. (SQL ",e.jsx("code",{children:"GROUP BY"})," 활용)"]}),e.jsx("li",{children:"회원별 대출 이력(반납 포함)을 조회하는 기능을 추가해보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("PJ03")?"btn-primary":"btn-accent"}`,onClick:()=>a("PJ03"),children:s("PJ03")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/projects/02",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 학생 성적 관리 시스템"]}),e.jsxs(t,{to:"/projects/04",children:["다음: 멀티스레드 채팅 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
