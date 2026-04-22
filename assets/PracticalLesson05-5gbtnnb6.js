import{u as n,r as i,j as e,L as s}from"./index-8Qlh1NuN.js";function d(){const{completeLesson:r,isLessonCompleted:t}=n();return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/practical",children:"실무 Java"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 05"})]}),e.jsx("h1",{children:"Lesson 05. JDBC 심화와 트랜잭션"}),e.jsx("p",{children:"ACID, 격리수준, HikariCP, DAO/Repository 패턴을 배웁니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. JDBC 아키텍처"}),e.jsxs("p",{children:[e.jsx("strong",{children:"JDBC(Java Database Connectivity)"}),"는 자바 애플리케이션에서 데이터베이스에 접근하기 위한 표준 API입니다. JDBC는 여러 계층으로 구성되어 있으며, 각 계층이 역할을 분담합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-sitemap"})," JDBC 아키텍처 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`┌─────────────────────────────────────────────────────────┐
│                   Java Application                       │
│  (비즈니스 로직, DAO, Service 계층)                       │
└──────────────────────┬──────────────────────────────────┘
                       │  JDBC API 호출
┌──────────────────────▼──────────────────────────────────┐
│                 JDBC API (java.sql.*)                     │
│  Connection, Statement, PreparedStatement, ResultSet     │
│  DriverManager, DataSource                               │
└──────────────────────┬──────────────────────────────────┘
                       │  드라이버 로딩
┌──────────────────────▼──────────────────────────────────┐
│               JDBC Driver Manager                        │
│  등록된 드라이버 중 적합한 드라이버를 선택                  │
└──────────────────────┬──────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
┌──────────┐   ┌──────────┐   ┌──────────┐
│  MySQL   │   │  Oracle  │   │  H2 DB   │
│  Driver  │   │  Driver  │   │  Driver  │
└────┬─────┘   └────┬─────┘   └────┬─────┘
     ▼              ▼              ▼
┌──────────┐   ┌──────────┐   ┌──────────┐
│  MySQL   │   │  Oracle  │   │   H2     │
│  Server  │   │  Server  │   │  Server  │
└──────────┘   └──────────┘   └──────────┘`})})]}),e.jsx("h3",{children:"핵심 인터페이스"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"인터페이스"}),e.jsx("th",{children:"역할"}),e.jsx("th",{children:"주요 메서드"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DriverManager"})}),e.jsx("td",{children:"JDBC 드라이버를 관리하고 Connection 생성"}),e.jsx("td",{children:e.jsx("code",{children:"getConnection(url, user, pwd)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Connection"})}),e.jsx("td",{children:"데이터베이스와의 연결(세션)을 표현"}),e.jsx("td",{children:e.jsx("code",{children:"prepareStatement(), commit(), rollback()"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Statement"})}),e.jsx("td",{children:"SQL 문을 실행하는 객체"}),e.jsx("td",{children:e.jsx("code",{children:"executeQuery(), executeUpdate()"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"PreparedStatement"})}),e.jsx("td",{children:"미리 컴파일된 SQL을 실행 (파라미터 바인딩)"}),e.jsx("td",{children:e.jsx("code",{children:"setString(), setInt(), execute()"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"ResultSet"})}),e.jsx("td",{children:"SELECT 결과를 행 단위로 탐색"}),e.jsx("td",{children:e.jsx("code",{children:"next(), getString(), getInt()"})})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," JDBC 기본 흐름"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 1. 드라이버 로딩 (JDBC 4.0+에서는 자동)
// Class.forName("com.mysql.cj.jdbc.Driver");

// 2. 커넥션 획득
Connection conn = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=Asia/Seoul",
    "root", "password"
);

// 3. SQL 실행
PreparedStatement pstmt = conn.prepareStatement(
    "SELECT id, name, email FROM users WHERE id = ?"
);
pstmt.setLong(1, 100L);

// 4. 결과 처리
ResultSet rs = pstmt.executeQuery();
while (rs.next()) {
    long id = rs.getLong("id");
    String name = rs.getString("name");
    String email = rs.getString("email");
    System.out.println(id + " | " + name + " | " + email);
}

// 5. 자원 해제 (역순으로)
rs.close();
pstmt.close();
conn.close();`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," try-with-resources 사용"]}),e.jsxs("p",{children:["JDBC 자원은 반드시 해제해야 합니다. Java 7 이상에서는 ",e.jsx("code",{children:"try-with-resources"}),"를 사용하면 자동으로 ",e.jsx("code",{children:"close()"}),"가 호출되므로, 자원 누수를 방지할 수 있습니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," try-with-resources 패턴"]})}),e.jsx("pre",{children:e.jsx("code",{children:`String sql = "SELECT id, name FROM users WHERE active = ?";

try (Connection conn = DriverManager.getConnection(URL, USER, PWD);
     PreparedStatement pstmt = conn.prepareStatement(sql)) {

    pstmt.setBoolean(1, true);

    try (ResultSet rs = pstmt.executeQuery()) {
        while (rs.next()) {
            System.out.println(rs.getLong("id") + ": " + rs.getString("name"));
        }
    }
} catch (SQLException e) {
    e.printStackTrace();
}
// conn, pstmt, rs 모두 자동으로 close() 호출됨`})})]}),e.jsx("h2",{children:"2. PreparedStatement와 SQL 인젝션 방어"}),e.jsxs("p",{children:[e.jsx("strong",{children:"SQL 인젝션"}),"은 사용자 입력을 SQL 문자열에 직접 삽입할 때 발생하는 보안 취약점입니다.",e.jsx("code",{children:"PreparedStatement"}),"를 사용하면 파라미터가 자동으로 이스케이프되어 SQL 인젝션을 완벽하게 방어할 수 있습니다."]}),e.jsx("h3",{children:"Statement vs PreparedStatement"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Statement - SQL 인젝션에 취약"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// !! 절대 이렇게 하지 마세요 !!
String username = request.getParameter("username"); // 사용자 입력
String password = request.getParameter("password");

// 문자열 연결로 SQL 생성 → SQL 인젝션 취약!
String sql = "SELECT * FROM users WHERE username = '" + username
           + "' AND password = '" + password + "'";

Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(sql);

// 만약 username에 다음을 입력하면?
// 입력값: ' OR '1'='1' --
// 생성되는 SQL:
// SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = ''
// → 모든 사용자 정보가 조회됨! (인증 우회)`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," SQL 인젝션의 위험성"]}),e.jsxs("p",{children:["SQL 인젝션 공격으로 데이터 유출, 데이터 삭제, 관리자 권한 탈취 등 심각한 피해가 발생할 수 있습니다.",e.jsx("strong",{children:"문자열 연결로 SQL을 만드는 것은 절대 금지"}),"입니다. 항상 ",e.jsx("code",{children:"PreparedStatement"}),"를 사용하세요."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PreparedStatement - 안전한 방식"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// PreparedStatement: 파라미터 바인딩으로 SQL 인젝션 원천 차단
String sql = "SELECT * FROM users WHERE username = ? AND password = ?";

try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
    pstmt.setString(1, username);  // 첫 번째 ? 에 바인딩
    pstmt.setString(2, password);  // 두 번째 ? 에 바인딩

    // 입력값에 ' OR '1'='1' 을 넣어도
    // WHERE username = '\\' OR \\'1\\'=\\'1\\'' 처럼 이스케이프됨
    // → SQL 인젝션 공격 실패!

    try (ResultSet rs = pstmt.executeQuery()) {
        if (rs.next()) {
            System.out.println("로그인 성공: " + rs.getString("username"));
        } else {
            System.out.println("로그인 실패");
        }
    }
}`})})]}),e.jsx("h3",{children:"PreparedStatement의 장점"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"비교 항목"}),e.jsx("th",{children:"Statement"}),e.jsx("th",{children:"PreparedStatement"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"SQL 인젝션"})}),e.jsx("td",{children:"취약 (문자열 연결)"}),e.jsx("td",{children:"안전 (파라미터 바인딩)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"성능"})}),e.jsx("td",{children:"매번 SQL 파싱/컴파일"}),e.jsx("td",{children:"한 번 파싱 후 재사용 (캐싱)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"가독성"})}),e.jsx("td",{children:"문자열 연결로 복잡"}),e.jsx("td",{children:"? 플레이스홀더로 깔끔"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"타입 안전"})}),e.jsx("td",{children:"모두 문자열로 처리"}),e.jsx("td",{children:"setInt(), setDate() 등 타입별 메서드"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"배치 처리"})}),e.jsx("td",{children:"비효율적"}),e.jsx("td",{children:"addBatch()로 효율적 배치 가능"})]})]})]}),e.jsx("h3",{children:"다양한 파라미터 바인딩"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 타입별 파라미터 설정"]})}),e.jsx("pre",{children:e.jsx("code",{children:`String sql = "INSERT INTO products (name, price, quantity, created_at, description) "
           + "VALUES (?, ?, ?, ?, ?)";

try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
    pstmt.setString(1, "Java 입문서");              // VARCHAR
    pstmt.setInt(2, 35000);                         // INT
    pstmt.setLong(3, 100L);                         // BIGINT
    pstmt.setTimestamp(4, Timestamp.valueOf(        // DATETIME
        LocalDateTime.now()));
    pstmt.setNull(5, Types.VARCHAR);                // NULL 값 설정

    int affected = pstmt.executeUpdate();
    System.out.println(affected + "행 삽입됨");
}

// INSERT 후 자동 생성된 키(Auto Increment) 가져오기
try (PreparedStatement pstmt = conn.prepareStatement(sql,
        Statement.RETURN_GENERATED_KEYS)) {
    // ... 파라미터 설정 ...
    pstmt.executeUpdate();

    try (ResultSet keys = pstmt.getGeneratedKeys()) {
        if (keys.next()) {
            long generatedId = keys.getLong(1);
            System.out.println("생성된 ID: " + generatedId);
        }
    }
}`})})]}),e.jsx("h2",{children:"3. 트랜잭션과 ACID"}),e.jsxs("p",{children:[e.jsx("strong",{children:"트랜잭션(Transaction)"}),'이란 데이터베이스에서 하나의 논리적 작업 단위를 구성하는 일련의 연산들을 말합니다. "전부 성공하거나, 전부 실패"하는 ',e.jsx("strong",{children:"원자적(Atomic)"})," 특성을 가집니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-sitemap"})," 계좌 이체 예시"]})}),e.jsx("pre",{children:e.jsx("code",{children:`트랜잭션: "A 계좌에서 B 계좌로 100만원 이체"

  작업 1) A 계좌에서 100만원 차감  →  UPDATE accounts SET balance = balance - 1000000 WHERE id = 'A'
  작업 2) B 계좌에  100만원 추가  →  UPDATE accounts SET balance = balance + 1000000 WHERE id = 'B'

  ✅ 둘 다 성공 → COMMIT  (확정)
  ❌ 하나라도 실패 → ROLLBACK (전부 취소)

  만약 작업 1만 성공하고 작업 2가 실패하면?
  → A의 돈은 빠졌는데 B에 안 들어감 → 데이터 불일치!
  → 트랜잭션이 ROLLBACK으로 작업 1도 취소해줌`})})]}),e.jsx("h3",{children:"ACID 속성"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"속성"}),e.jsx("th",{children:"영문"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"원자성"})}),e.jsx("td",{children:"Atomicity"}),e.jsx("td",{children:"트랜잭션 내 모든 작업이 전부 성공 또는 전부 실패"}),e.jsx("td",{children:"이체 중 오류 시 두 계좌 모두 원래 상태로 복원"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"일관성"})}),e.jsx("td",{children:"Consistency"}),e.jsx("td",{children:"트랜잭션 전후에 데이터 무결성 제약 조건이 유지"}),e.jsx("td",{children:"이체 전후 총 잔액 합계가 동일해야 함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"격리성"})}),e.jsx("td",{children:"Isolation"}),e.jsx("td",{children:"동시에 실행되는 트랜잭션이 서로 영향을 주지 않음"}),e.jsx("td",{children:"A가 이체 중일 때 B가 잔액을 조회하면 중간 상태가 안 보임"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"지속성"})}),e.jsx("td",{children:"Durability"}),e.jsx("td",{children:"커밋된 트랜잭션의 결과는 영구적으로 보존"}),e.jsx("td",{children:"이체 완료 후 서버가 다운되어도 결과 유지"})]})]})]}),e.jsx("h3",{children:"JDBC에서 트랜잭션 제어"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," TransferService.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class TransferService {

    public void transfer(String fromId, String toId, long amount)
            throws SQLException {

        Connection conn = null;
        try {
            conn = DataSourceUtil.getConnection();

            // 1. Auto Commit 비활성화 (트랜잭션 시작)
            conn.setAutoCommit(false);

            // 2. 출금
            String withdrawSql = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(withdrawSql)) {
                pstmt.setLong(1, amount);
                pstmt.setString(2, fromId);
                int rows = pstmt.executeUpdate();
                if (rows != 1) {
                    throw new SQLException("출금 계좌를 찾을 수 없습니다: " + fromId);
                }
            }

            // 3. 입금
            String depositSql = "UPDATE accounts SET balance = balance + ? WHERE id = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(depositSql)) {
                pstmt.setLong(1, amount);
                pstmt.setString(2, toId);
                int rows = pstmt.executeUpdate();
                if (rows != 1) {
                    throw new SQLException("입금 계좌를 찾을 수 없습니다: " + toId);
                }
            }

            // 4. 모든 작업 성공 → 커밋
            conn.commit();
            System.out.println("이체 완료: " + fromId + " → " + toId + " (" + amount + "원)");

        } catch (SQLException e) {
            // 5. 오류 발생 → 롤백
            if (conn != null) {
                try {
                    conn.rollback();
                    System.out.println("트랜잭션 롤백 완료");
                } catch (SQLException ex) {
                    ex.printStackTrace();
                }
            }
            throw e;

        } finally {
            // 6. Auto Commit 복원 및 커넥션 반환
            if (conn != null) {
                try {
                    conn.setAutoCommit(true);
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Savepoint 활용"]}),e.jsxs("p",{children:["트랜잭션 중간에 ",e.jsx("code",{children:"Savepoint"}),"를 설정하면 전체 롤백이 아닌 특정 지점까지만 부분 롤백할 수 있습니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Savepoint 사용 예제"]})}),e.jsx("pre",{children:e.jsx("code",{children:`conn.setAutoCommit(false);

// 작업 1 수행
pstmt1.executeUpdate();

// 세이브포인트 설정
Savepoint sp = conn.setSavepoint("afterStep1");

try {
    // 작업 2 수행 (실패 가능)
    pstmt2.executeUpdate();
    conn.commit();
} catch (SQLException e) {
    // 작업 2만 롤백, 작업 1은 유지
    conn.rollback(sp);
    // 작업 1만 커밋
    conn.commit();
}`})})]}),e.jsx("h2",{children:"4. 트랜잭션 격리 수준"}),e.jsx("p",{children:"격리 수준(Isolation Level)은 동시에 실행되는 트랜잭션들이 서로에게 미치는 영향의 정도를 결정합니다. 격리 수준이 높을수록 데이터 일관성은 보장되지만 동시 처리 성능(동시성)은 떨어집니다."}),e.jsx("h3",{children:"동시성 문제 유형"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"문제"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Dirty Read"})}),e.jsx("td",{children:"다른 트랜잭션이 커밋하지 않은 데이터를 읽음"}),e.jsx("td",{children:"A가 잔액을 변경했지만 아직 커밋 안 함 → B가 변경된 잔액을 읽음 → A가 롤백 → B는 잘못된 데이터를 사용"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Non-Repeatable Read"})}),e.jsx("td",{children:"같은 트랜잭션 내에서 같은 쿼리가 다른 결과를 반환"}),e.jsx("td",{children:"B가 잔액 조회 → A가 잔액 변경 후 커밋 → B가 다시 조회하면 다른 값"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Phantom Read"})}),e.jsx("td",{children:"같은 조건의 쿼리인데 행의 수가 달라짐"}),e.jsx("td",{children:'B가 "나이 > 20" 조회 → A가 새 행 삽입 커밋 → B가 다시 조회하면 행이 추가됨'})]})]})]}),e.jsx("h3",{children:"격리 수준 비교"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"격리 수준"}),e.jsx("th",{children:"Dirty Read"}),e.jsx("th",{children:"Non-Repeatable Read"}),e.jsx("th",{children:"Phantom Read"}),e.jsx("th",{children:"성능"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"READ_UNCOMMITTED"})}),e.jsx("td",{children:"발생"}),e.jsx("td",{children:"발생"}),e.jsx("td",{children:"발생"}),e.jsx("td",{children:"가장 빠름"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"READ_COMMITTED"})}),e.jsx("td",{children:"방지"}),e.jsx("td",{children:"발생"}),e.jsx("td",{children:"발생"}),e.jsx("td",{children:"빠름"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"REPEATABLE_READ"})}),e.jsx("td",{children:"방지"}),e.jsx("td",{children:"방지"}),e.jsx("td",{children:"발생"}),e.jsx("td",{children:"보통"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"SERIALIZABLE"})}),e.jsx("td",{children:"방지"}),e.jsx("td",{children:"방지"}),e.jsx("td",{children:"방지"}),e.jsx("td",{children:"가장 느림"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 데이터베이스별 기본 격리 수준"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"MySQL(InnoDB)"}),": REPEATABLE_READ (기본)",e.jsx("br",{}),e.jsx("strong",{children:"Oracle"}),": READ_COMMITTED (기본)",e.jsx("br",{}),e.jsx("strong",{children:"PostgreSQL"}),": READ_COMMITTED (기본)",e.jsx("br",{}),"대부분의 웹 애플리케이션에서는 ",e.jsx("strong",{children:"READ_COMMITTED"}),"가 적절한 균형점입니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," JDBC에서 격리 수준 설정"]})}),e.jsx("pre",{children:e.jsx("code",{children:`Connection conn = dataSource.getConnection();

// 격리 수준 확인
int level = conn.getTransactionIsolation();
System.out.println("현재 격리 수준: " + level);

// 격리 수준 설정
conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);

// 사용 가능한 상수값
// Connection.TRANSACTION_READ_UNCOMMITTED  = 1
// Connection.TRANSACTION_READ_COMMITTED    = 2
// Connection.TRANSACTION_REPEATABLE_READ   = 4
// Connection.TRANSACTION_SERIALIZABLE      = 8

conn.setAutoCommit(false);
try {
    // 트랜잭션 작업 수행...
    conn.commit();
} catch (SQLException e) {
    conn.rollback();
} finally {
    conn.close();
}`})})]}),e.jsx("h2",{children:"5. 커넥션 풀 (HikariCP)"}),e.jsxs("p",{children:["데이터베이스 커넥션 생성은 비용이 큰 작업입니다. 매 요청마다 커넥션을 생성하고 해제하면 심각한 성능 저하가 발생합니다. ",e.jsx("strong",{children:"커넥션 풀(Connection Pool)"}),"은 미리 일정 수의 커넥션을 만들어 두고 재사용하는 기법입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-sitemap"})," 커넥션 풀의 동작 원리"]})}),e.jsx("pre",{children:e.jsx("code",{children:`커넥션 풀 없이 (매번 새로 생성):
  요청 → 커넥션 생성(50~200ms) → SQL 실행(5ms) → 커넥션 해제(10ms)
  총 소요: 65~215ms  ← 커넥션 생성이 대부분의 시간을 차지!

커넥션 풀 사용 (재사용):
  애플리케이션 시작 시 → 풀에 10개 커넥션 미리 생성
  요청 → 풀에서 빌림(0.01ms) → SQL 실행(5ms) → 풀에 반납(0.01ms)
  총 소요: 약 5ms  ← 95% 이상 성능 향상!

┌───────────────────────────────────────────┐
│            Connection Pool                 │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐      │
│  │사용│ │사용│ │대기│ │대기│ │대기│      │
│  │ 중 │ │ 중 │ │    │ │    │ │    │      │
│  └──┬─┘ └──┬─┘ └────┘ └────┘ └────┘      │
│     │      │                               │
└─────┼──────┼───────────────────────────────┘
      │      │
   Thread1  Thread2
      ▼      ▼
   [MySQL Server]`})})]}),e.jsx("h3",{children:"HikariCP 설정"}),e.jsxs("p",{children:[e.jsx("strong",{children:"HikariCP"}),"는 현재 가장 널리 사용되는 고성능 커넥션 풀 라이브러리입니다. Spring Boot의 기본 커넥션 풀이기도 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," pom.xml - HikariCP 의존성"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>5.1.0</version>
</dependency>

<!-- MySQL 드라이버 -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.2.0</version>
</dependency>`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DataSourceConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import javax.sql.DataSource;

public class DataSourceConfig {

    private static HikariDataSource dataSource;

    static {
        HikariConfig config = new HikariConfig();

        // 필수 설정
        config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=Asia/Seoul");
        config.setUsername("root");
        config.setPassword("password");
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");

        // 풀 크기 설정
        config.setMaximumPoolSize(10);       // 최대 커넥션 수 (기본: 10)
        config.setMinimumIdle(5);            // 최소 유휴 커넥션 수

        // 타임아웃 설정
        config.setConnectionTimeout(30000);  // 커넥션 획득 대기 시간 (30초)
        config.setIdleTimeout(600000);       // 유휴 커넥션 유지 시간 (10분)
        config.setMaxLifetime(1800000);      // 커넥션 최대 수명 (30분)

        // 성능 설정
        config.setAutoCommit(true);          // 기본 오토 커밋 여부
        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");

        // 풀 이름 (모니터링 시 유용)
        config.setPoolName("MyApp-HikariPool");

        dataSource = new HikariDataSource(config);
    }

    public static DataSource getDataSource() {
        return dataSource;
    }

    public static void close() {
        if (dataSource != null && !dataSource.isClosed()) {
            dataSource.close();
        }
    }
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," HikariCP 사용 예제"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// DataSource를 통해 커넥션 획득 (풀에서 빌림)
DataSource ds = DataSourceConfig.getDataSource();

try (Connection conn = ds.getConnection();
     PreparedStatement pstmt = conn.prepareStatement(
         "SELECT * FROM users WHERE email = ?")) {

    pstmt.setString(1, "hong@example.com");

    try (ResultSet rs = pstmt.executeQuery()) {
        while (rs.next()) {
            System.out.println(rs.getString("name"));
        }
    }
}
// conn.close() 호출 시 실제로 닫히는 것이 아니라
// 커넥션 풀에 반납됨 (재사용 가능)`})})]}),e.jsx("h3",{children:"HikariCP 주요 설정값 가이드"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"설정"}),e.jsx("th",{children:"기본값"}),e.jsx("th",{children:"권장값"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maximumPoolSize"})}),e.jsx("td",{children:"10"}),e.jsx("td",{children:"CPU 코어 수 * 2"}),e.jsx("td",{children:"동시에 사용 가능한 최대 커넥션 수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"minimumIdle"})}),e.jsx("td",{children:"maximumPoolSize"}),e.jsx("td",{children:"maximumPoolSize와 동일"}),e.jsx("td",{children:"유휴 시에도 유지할 최소 커넥션 수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"connectionTimeout"})}),e.jsx("td",{children:"30000ms"}),e.jsx("td",{children:"30000ms"}),e.jsx("td",{children:"풀에서 커넥션을 기다리는 최대 시간"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"idleTimeout"})}),e.jsx("td",{children:"600000ms"}),e.jsx("td",{children:"600000ms"}),e.jsx("td",{children:"유휴 커넥션이 풀에서 제거되기까지의 시간"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"maxLifetime"})}),e.jsx("td",{children:"1800000ms"}),e.jsx("td",{children:"DB wait_timeout보다 짧게"}),e.jsx("td",{children:"커넥션의 최대 수명"})]})]})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," 풀 크기 결정 공식"]}),e.jsxs("p",{children:["HikariCP 공식 위키에서 권장하는 풀 크기 공식:",e.jsx("br",{}),e.jsx("code",{children:"connections = (CPU 코어 수 * 2) + 유효 디스크 스핀들 수"}),e.jsx("br",{}),"예를 들어 4코어 서버에 SSD 1개라면 ",e.jsx("strong",{children:"maximumPoolSize = 9~10"}),"이 적절합니다. 풀 크기를 너무 크게 잡으면 오히려 컨텍스트 스위칭으로 성능이 저하될 수 있습니다."]})]}),e.jsx("h2",{children:"6. DAO/Repository 패턴"}),e.jsxs("p",{children:[e.jsx("strong",{children:"DAO(Data Access Object)"})," 패턴은 데이터베이스 접근 로직을 비즈니스 로직으로부터 분리하는 디자인 패턴입니다. JDBC 코드를 DAO 계층에 캡슐화하면 유지보수성과 테스트 용이성이 크게 향상됩니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-sitemap"})," 계층 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`┌─────────────┐      ┌──────────────┐      ┌───────────────┐
│  Controller │ ───▶ │   Service    │ ───▶ │  DAO / Repo   │
│  (요청처리)  │      │  (비즈니스)   │      │  (데이터접근)   │
└─────────────┘      └──────────────┘      └──────┬────────┘
                                                   │
                                             ┌─────▼─────┐
                                             │ Database   │
                                             └───────────┘

규칙:
  - Controller는 DAO를 직접 호출하지 않음
  - Service에서 트랜잭션 관리
  - DAO는 순수 데이터 접근만 담당`})})]}),e.jsx("h3",{children:"DAO 인터페이스와 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," User.java (도메인 객체)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class User {
    private Long id;
    private String username;
    private String email;
    private LocalDateTime createdAt;

    public User() {}

    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }

    // Getter/Setter 생략
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserDao.java (인터페이스)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public interface UserDao {
    // CRUD 기본 메서드
    User findById(Long id) throws SQLException;
    List<User> findAll() throws SQLException;
    List<User> findByUsername(String username) throws SQLException;
    void save(User user) throws SQLException;
    void update(User user) throws SQLException;
    void deleteById(Long id) throws SQLException;
    long count() throws SQLException;
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," JdbcUserDao.java (구현 클래스)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class JdbcUserDao implements UserDao {

    private final DataSource dataSource;

    public JdbcUserDao(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public User findById(Long id) throws SQLException {
        String sql = "SELECT id, username, email, created_at FROM users WHERE id = ?";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, id);

            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    return mapRow(rs);
                }
                return null;
            }
        }
    }

    @Override
    public List<User> findAll() throws SQLException {
        String sql = "SELECT id, username, email, created_at FROM users ORDER BY id";
        List<User> users = new ArrayList<>();

        try (Connection conn = dataSource.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql);
             ResultSet rs = pstmt.executeQuery()) {

            while (rs.next()) {
                users.add(mapRow(rs));
            }
        }
        return users;
    }

    @Override
    public void save(User user) throws SQLException {
        String sql = "INSERT INTO users (username, email, created_at) VALUES (?, ?, ?)";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql,
                     Statement.RETURN_GENERATED_KEYS)) {

            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getEmail());
            pstmt.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));
            pstmt.executeUpdate();

            try (ResultSet keys = pstmt.getGeneratedKeys()) {
                if (keys.next()) {
                    user.setId(keys.getLong(1));
                }
            }
        }
    }

    @Override
    public void update(User user) throws SQLException {
        String sql = "UPDATE users SET username = ?, email = ? WHERE id = ?";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getEmail());
            pstmt.setLong(3, user.getId());
            pstmt.executeUpdate();
        }
    }

    @Override
    public void deleteById(Long id) throws SQLException {
        String sql = "DELETE FROM users WHERE id = ?";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setLong(1, id);
            pstmt.executeUpdate();
        }
    }

    @Override
    public long count() throws SQLException {
        String sql = "SELECT COUNT(*) FROM users";

        try (Connection conn = dataSource.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql);
             ResultSet rs = pstmt.executeQuery()) {

            rs.next();
            return rs.getLong(1);
        }
    }

    // ResultSet → User 매핑 헬퍼 메서드
    private User mapRow(ResultSet rs) throws SQLException {
        User user = new User();
        user.setId(rs.getLong("id"));
        user.setUsername(rs.getString("username"));
        user.setEmail(rs.getString("email"));
        Timestamp ts = rs.getTimestamp("created_at");
        if (ts != null) {
            user.setCreatedAt(ts.toLocalDateTime());
        }
        return user;
    }
}`})})]}),e.jsx("h3",{children:"DAO vs Repository 패턴"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"비교 항목"}),e.jsx("th",{children:"DAO 패턴"}),e.jsx("th",{children:"Repository 패턴"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"관점"})}),e.jsx("td",{children:"데이터 저장소(DB) 중심"}),e.jsx("td",{children:"도메인 모델 중심"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"추상화 수준"})}),e.jsx("td",{children:"테이블 단위 CRUD에 가까움"}),e.jsx("td",{children:"도메인 객체의 컬렉션처럼 동작"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"메서드 이름"})}),e.jsx("td",{children:"insert(), update(), delete()"}),e.jsx("td",{children:"save(), findBy...(), existsBy...()"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"SQL 노출"})}),e.jsx("td",{children:"구현에 SQL이 직접 포함"}),e.jsx("td",{children:"내부 구현을 숨기고 도메인 언어 사용"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"대표 프레임워크"})}),e.jsx("td",{children:"순수 JDBC, MyBatis"}),e.jsx("td",{children:"Spring Data JPA, Hibernate"})]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 실무 적용 가이드"]}),e.jsxs("p",{children:["실무에서는 두 패턴의 경계가 모호한 경우가 많습니다. 순수 JDBC를 사용할 때는 DAO 패턴으로 시작하고, Spring Data JPA를 사용할 때는 Repository 패턴을 따르는 것이 자연스럽습니다. 중요한 것은 ",e.jsx("strong",{children:"데이터 접근 로직을 비즈니스 로직과 분리"}),"하는 원칙을 지키는 것입니다."]})]}),e.jsx("h2",{children:"7. 배치 처리와 성능 최적화"}),e.jsxs("p",{children:["대량의 데이터를 INSERT, UPDATE, DELETE할 때 건별 처리는 매우 비효율적입니다. JDBC의 ",e.jsx("strong",{children:"배치 처리(Batch Processing)"}),"를 활용하면 네트워크 왕복 횟수를 대폭 줄여 성능을 크게 개선할 수 있습니다."]}),e.jsx("h3",{children:"addBatch / executeBatch"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 배치 INSERT 예제"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public void batchInsertUsers(List<User> users) throws SQLException {
    String sql = "INSERT INTO users (username, email, created_at) VALUES (?, ?, ?)";

    try (Connection conn = dataSource.getConnection();
         PreparedStatement pstmt = conn.prepareStatement(sql)) {

        conn.setAutoCommit(false);  // 트랜잭션 시작
        int batchSize = 1000;       // 배치 단위
        int count = 0;

        for (User user : users) {
            pstmt.setString(1, user.getUsername());
            pstmt.setString(2, user.getEmail());
            pstmt.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));

            pstmt.addBatch();       // 배치에 추가 (아직 실행 안 함)
            count++;

            if (count % batchSize == 0) {
                pstmt.executeBatch();   // 1000건마다 한번에 실행
                pstmt.clearBatch();     // 배치 초기화
            }
        }

        // 남은 건 처리
        if (count % batchSize != 0) {
            pstmt.executeBatch();
        }

        conn.commit();  // 모두 성공하면 커밋
        System.out.println(count + "건 배치 삽입 완료");

    } catch (SQLException e) {
        // 오류 시 롤백 처리
        throw e;
    }
}

// 성능 비교 (10,000건 INSERT 기준):
// 건별 처리: 약 15초 (10,000번 네트워크 왕복)
// 배치 처리: 약 0.5초 (10번 네트워크 왕복, 배치 사이즈 1000)`})})]}),e.jsx("h3",{children:"fetchSize로 대량 조회 최적화"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," fetchSize 설정"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// fetchSize: DB에서 한 번에 가져오는 행 수를 제어
// 기본값은 드라이버마다 다름 (MySQL: 전체, Oracle: 10)

String sql = "SELECT * FROM large_table WHERE status = ?";

try (Connection conn = dataSource.getConnection();
     PreparedStatement pstmt = conn.prepareStatement(sql)) {

    pstmt.setString(1, "ACTIVE");

    // fetchSize 설정 - 한 번에 100행씩 가져옴
    pstmt.setFetchSize(100);

    try (ResultSet rs = pstmt.executeQuery()) {
        while (rs.next()) {
            // 100행 단위로 DB에서 데이터를 가져옴
            // 메모리에 전체 결과를 올리지 않아 OOM 방지
            processRow(rs);
        }
    }
}

// MySQL에서 스트리밍 결과 처리 (매우 큰 테이블)
pstmt.setFetchSize(Integer.MIN_VALUE);  // MySQL 전용: 한 행씩 스트리밍`})})]}),e.jsx("h3",{children:"성능 최적화 체크리스트"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-sitemap"})," JDBC 성능 최적화 요약"]})}),e.jsx("pre",{children:e.jsx("code",{children:`1. 커넥션 풀 사용
   - DriverManager 대신 DataSource(HikariCP) 사용
   - 적절한 풀 크기 설정 (CPU 코어 * 2)

2. PreparedStatement 사용
   - SQL 파싱 결과 캐싱으로 반복 실행 시 성능 향상
   - cachePrepStmts=true 설정

3. 배치 처리
   - 대량 DML(INSERT/UPDATE/DELETE)은 addBatch() 활용
   - 적절한 배치 사이즈 설정 (500~5000)

4. fetchSize 조정
   - 대량 조회 시 메모리 사용량 제어
   - Oracle: 기본 10 → 100~500으로 증가 권장

5. 인덱스 활용
   - WHERE, JOIN, ORDER BY에 사용되는 컬럼에 인덱스
   - EXPLAIN으로 실행 계획 확인

6. N+1 문제 주의
   - 반복문 안에서 쿼리 실행하지 않기
   - JOIN이나 IN 절로 한 번에 조회

7. 자원 반납
   - try-with-resources 필수
   - ResultSet → PreparedStatement → Connection 순으로 닫기`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," N+1 문제 주의"]}),e.jsxs("p",{children:["N+1 문제란 1번의 목록 조회 후, 각 항목마다 추가 쿼리를 N번 실행하는 비효율적인 패턴입니다. 예를 들어 주문 10건을 조회한 뒤 각 주문의 상품을 개별 조회하면 총 11번의 쿼리가 실행됩니다.",e.jsx("code",{children:"JOIN"}),"이나 ",e.jsx("code",{children:"IN"})," 절을 사용하여 한 번의 쿼리로 해결하세요."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," N+1 문제 해결 예시"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ N+1 문제 발생 (총 1 + N 번 쿼리)
List<Order> orders = orderDao.findAll();            // 1번 쿼리
for (Order order : orders) {
    List<Item> items = itemDao.findByOrderId(order.getId()); // N번 쿼리!
    order.setItems(items);
}

// ✅ JOIN으로 한 번에 조회 (1번 쿼리)
String sql = """
    SELECT o.id AS order_id, o.order_date,
           i.id AS item_id, i.product_name, i.quantity
    FROM orders o
    LEFT JOIN order_items i ON o.id = i.order_id
    WHERE o.user_id = ?
    ORDER BY o.id
    """;

// ✅ IN 절로 일괄 조회 (2번 쿼리)
List<Order> orders = orderDao.findAll();                         // 1번
List<Long> orderIds = orders.stream().map(Order::getId).toList();
List<Item> allItems = itemDao.findByOrderIdIn(orderIds);         // 1번 (총 2번)

// orderIds로 IN 절 쿼리 생성
String placeholders = String.join(",",
    Collections.nCopies(orderIds.size(), "?"));
String sql2 = "SELECT * FROM order_items WHERE order_id IN (" + placeholders + ")";`})})]}),e.jsx("h2",{children:"8. 연습문제"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제 1: 안전한 로그인 DAO 구현"]}),e.jsxs("p",{children:["다음 요구사항에 맞는 ",e.jsx("code",{children:"LoginDao"}),"를 ",e.jsx("code",{children:"PreparedStatement"}),"로 구현하세요."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"findByUsernameAndPassword(String username, String password)"})," 메서드 작성"]}),e.jsx("li",{children:"SQL 인젝션이 불가능하도록 파라미터 바인딩 사용"}),e.jsx("li",{children:"try-with-resources로 자원 관리"}),e.jsx("li",{children:"비밀번호는 평문이 아닌 해시값으로 비교한다고 가정"})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제 2: 계좌 이체 트랜잭션"]}),e.jsxs("p",{children:["다음 조건을 만족하는 ",e.jsx("code",{children:"BankService.transfer()"})," 메서드를 작성하세요."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["출금 계좌 잔액이 부족하면 ",e.jsx("code",{children:"InsufficientBalanceException"}),"을 던질 것"]}),e.jsx("li",{children:"이체 전후 총 잔액 합계가 동일해야 함 (일관성)"}),e.jsx("li",{children:"오류 발생 시 반드시 롤백"}),e.jsxs("li",{children:["이체 이력을 ",e.jsx("code",{children:"transfer_log"})," 테이블에 기록"]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제 3: 배치 데이터 마이그레이션"]}),e.jsx("p",{children:"CSV 파일에서 10만 건의 상품 데이터를 읽어 DB에 삽입하는 프로그램을 작성하세요."}),e.jsxs("ul",{children:[e.jsx("li",{children:"HikariCP 커넥션 풀 사용"}),e.jsxs("li",{children:[e.jsx("code",{children:"addBatch()"})," / ",e.jsx("code",{children:"executeBatch()"}),"로 배치 처리"]}),e.jsx("li",{children:"1000건 단위로 배치 실행 및 로그 출력"}),e.jsx("li",{children:"전체 작업을 하나의 트랜잭션으로 관리"}),e.jsx("li",{children:"처리 시간을 측정하여 출력"})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제 4: 완성된 DAO 패턴 적용"]}),e.jsx("p",{children:"아래 테이블에 대한 DAO 인터페이스와 JDBC 구현 클래스를 작성하세요."}),e.jsxs("div",{className:"code-block",style:{marginTop:"12px"},children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 테이블 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`CREATE TABLE products (
    id         BIGINT PRIMARY KEY AUTO_INCREMENT,
    name       VARCHAR(200) NOT NULL,
    price      INT NOT NULL,
    stock      INT DEFAULT 0,
    category   VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`})})]}),e.jsxs("ul",{style:{marginTop:"12px"},children:[e.jsxs("li",{children:[e.jsx("code",{children:"ProductDao"})," 인터페이스: findById, findAll, findByCategory, save, update, deleteById"]}),e.jsxs("li",{children:[e.jsx("code",{children:"JdbcProductDao"})," 구현 클래스: PreparedStatement 사용, mapRow 헬퍼 메서드 포함"]}),e.jsx("li",{children:"Service 클래스에서 재고 차감 시 트랜잭션 처리 구현"})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${t("PR05")?"btn-primary":"btn-accent"}`,onClick:()=>r("PR05"),children:t("PR05")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/practical/04",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: SQL 기초"]}),e.jsxs(s,{to:"/practical/06",children:["다음: JSON 처리 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
