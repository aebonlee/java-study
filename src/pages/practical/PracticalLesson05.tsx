import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function PracticalLesson05() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/practical">실무 Java</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Lesson 05</span>
          </div>
          <h1>Lesson 05. JDBC 심화와 트랜잭션</h1>
          <p>ACID, 격리수준, HikariCP, DAO/Repository 패턴을 배웁니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          {/* ============================================ */}
          {/* 1. JDBC 아키텍처                              */}
          {/* ============================================ */}
          <h2>1. JDBC 아키텍처</h2>
          <p>
            <strong>JDBC(Java Database Connectivity)</strong>는 자바 애플리케이션에서 데이터베이스에 접근하기 위한
            표준 API입니다. JDBC는 여러 계층으로 구성되어 있으며, 각 계층이 역할을 분담합니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> JDBC 아키텍처 구조</span>
            </div>
            <pre><code>{`┌─────────────────────────────────────────────────────────┐
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
└──────────┘   └──────────┘   └──────────┘`}</code></pre>
          </div>

          <h3>핵심 인터페이스</h3>
          <table>
            <thead>
              <tr><th>인터페이스</th><th>역할</th><th>주요 메서드</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>DriverManager</strong></td>
                <td>JDBC 드라이버를 관리하고 Connection 생성</td>
                <td><code>getConnection(url, user, pwd)</code></td>
              </tr>
              <tr>
                <td><strong>Connection</strong></td>
                <td>데이터베이스와의 연결(세션)을 표현</td>
                <td><code>prepareStatement(), commit(), rollback()</code></td>
              </tr>
              <tr>
                <td><strong>Statement</strong></td>
                <td>SQL 문을 실행하는 객체</td>
                <td><code>executeQuery(), executeUpdate()</code></td>
              </tr>
              <tr>
                <td><strong>PreparedStatement</strong></td>
                <td>미리 컴파일된 SQL을 실행 (파라미터 바인딩)</td>
                <td><code>setString(), setInt(), execute()</code></td>
              </tr>
              <tr>
                <td><strong>ResultSet</strong></td>
                <td>SELECT 결과를 행 단위로 탐색</td>
                <td><code>next(), getString(), getInt()</code></td>
              </tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> JDBC 기본 흐름</span>
            </div>
            <pre><code>{`// 1. 드라이버 로딩 (JDBC 4.0+에서는 자동)
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
conn.close();`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> try-with-resources 사용</div>
            <p>
              JDBC 자원은 반드시 해제해야 합니다. Java 7 이상에서는 <code>try-with-resources</code>를 사용하면
              자동으로 <code>close()</code>가 호출되므로, 자원 누수를 방지할 수 있습니다.
            </p>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> try-with-resources 패턴</span>
            </div>
            <pre><code>{`String sql = "SELECT id, name FROM users WHERE active = ?";

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
// conn, pstmt, rs 모두 자동으로 close() 호출됨`}</code></pre>
          </div>

          {/* ============================================ */}
          {/* 2. PreparedStatement와 SQL 인젝션 방어         */}
          {/* ============================================ */}
          <h2>2. PreparedStatement와 SQL 인젝션 방어</h2>
          <p>
            <strong>SQL 인젝션</strong>은 사용자 입력을 SQL 문자열에 직접 삽입할 때 발생하는 보안 취약점입니다.
            <code>PreparedStatement</code>를 사용하면 파라미터가 자동으로 이스케이프되어 SQL 인젝션을 완벽하게 방어할 수 있습니다.
          </p>

          <h3>Statement vs PreparedStatement</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> Statement - SQL 인젝션에 취약</span>
            </div>
            <pre><code>{`// !! 절대 이렇게 하지 마세요 !!
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
// → 모든 사용자 정보가 조회됨! (인증 우회)`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> SQL 인젝션의 위험성</div>
            <p>
              SQL 인젝션 공격으로 데이터 유출, 데이터 삭제, 관리자 권한 탈취 등 심각한 피해가 발생할 수 있습니다.
              <strong>문자열 연결로 SQL을 만드는 것은 절대 금지</strong>입니다. 항상 <code>PreparedStatement</code>를 사용하세요.
            </p>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> PreparedStatement - 안전한 방식</span>
            </div>
            <pre><code>{`// PreparedStatement: 파라미터 바인딩으로 SQL 인젝션 원천 차단
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
}`}</code></pre>
          </div>

          <h3>PreparedStatement의 장점</h3>
          <table>
            <thead>
              <tr><th>비교 항목</th><th>Statement</th><th>PreparedStatement</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>SQL 인젝션</strong></td><td>취약 (문자열 연결)</td><td>안전 (파라미터 바인딩)</td></tr>
              <tr><td><strong>성능</strong></td><td>매번 SQL 파싱/컴파일</td><td>한 번 파싱 후 재사용 (캐싱)</td></tr>
              <tr><td><strong>가독성</strong></td><td>문자열 연결로 복잡</td><td>? 플레이스홀더로 깔끔</td></tr>
              <tr><td><strong>타입 안전</strong></td><td>모두 문자열로 처리</td><td>setInt(), setDate() 등 타입별 메서드</td></tr>
              <tr><td><strong>배치 처리</strong></td><td>비효율적</td><td>addBatch()로 효율적 배치 가능</td></tr>
            </tbody>
          </table>

          <h3>다양한 파라미터 바인딩</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 타입별 파라미터 설정</span>
            </div>
            <pre><code>{`String sql = "INSERT INTO products (name, price, quantity, created_at, description) "
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
}`}</code></pre>
          </div>

          {/* ============================================ */}
          {/* 3. 트랜잭션과 ACID                            */}
          {/* ============================================ */}
          <h2>3. 트랜잭션과 ACID</h2>
          <p>
            <strong>트랜잭션(Transaction)</strong>이란 데이터베이스에서 하나의 논리적 작업 단위를 구성하는
            일련의 연산들을 말합니다. "전부 성공하거나, 전부 실패"하는 <strong>원자적(Atomic)</strong> 특성을 가집니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> 계좌 이체 예시</span>
            </div>
            <pre><code>{`트랜잭션: "A 계좌에서 B 계좌로 100만원 이체"

  작업 1) A 계좌에서 100만원 차감  →  UPDATE accounts SET balance = balance - 1000000 WHERE id = 'A'
  작업 2) B 계좌에  100만원 추가  →  UPDATE accounts SET balance = balance + 1000000 WHERE id = 'B'

  ✅ 둘 다 성공 → COMMIT  (확정)
  ❌ 하나라도 실패 → ROLLBACK (전부 취소)

  만약 작업 1만 성공하고 작업 2가 실패하면?
  → A의 돈은 빠졌는데 B에 안 들어감 → 데이터 불일치!
  → 트랜잭션이 ROLLBACK으로 작업 1도 취소해줌`}</code></pre>
          </div>

          <h3>ACID 속성</h3>
          <table>
            <thead>
              <tr><th>속성</th><th>영문</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>원자성</strong></td>
                <td>Atomicity</td>
                <td>트랜잭션 내 모든 작업이 전부 성공 또는 전부 실패</td>
                <td>이체 중 오류 시 두 계좌 모두 원래 상태로 복원</td>
              </tr>
              <tr>
                <td><strong>일관성</strong></td>
                <td>Consistency</td>
                <td>트랜잭션 전후에 데이터 무결성 제약 조건이 유지</td>
                <td>이체 전후 총 잔액 합계가 동일해야 함</td>
              </tr>
              <tr>
                <td><strong>격리성</strong></td>
                <td>Isolation</td>
                <td>동시에 실행되는 트랜잭션이 서로 영향을 주지 않음</td>
                <td>A가 이체 중일 때 B가 잔액을 조회하면 중간 상태가 안 보임</td>
              </tr>
              <tr>
                <td><strong>지속성</strong></td>
                <td>Durability</td>
                <td>커밋된 트랜잭션의 결과는 영구적으로 보존</td>
                <td>이체 완료 후 서버가 다운되어도 결과 유지</td>
              </tr>
            </tbody>
          </table>

          <h3>JDBC에서 트랜잭션 제어</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> TransferService.java</span>
            </div>
            <pre><code>{`public class TransferService {

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
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> Savepoint 활용</div>
            <p>
              트랜잭션 중간에 <code>Savepoint</code>를 설정하면 전체 롤백이 아닌 특정 지점까지만 부분 롤백할 수 있습니다.
            </p>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> Savepoint 사용 예제</span>
            </div>
            <pre><code>{`conn.setAutoCommit(false);

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
}`}</code></pre>
          </div>

          {/* ============================================ */}
          {/* 4. 트랜잭션 격리 수준                          */}
          {/* ============================================ */}
          <h2>4. 트랜잭션 격리 수준</h2>
          <p>
            격리 수준(Isolation Level)은 동시에 실행되는 트랜잭션들이 서로에게 미치는 영향의 정도를 결정합니다.
            격리 수준이 높을수록 데이터 일관성은 보장되지만 동시 처리 성능(동시성)은 떨어집니다.
          </p>

          <h3>동시성 문제 유형</h3>
          <table>
            <thead>
              <tr><th>문제</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dirty Read</strong></td>
                <td>다른 트랜잭션이 커밋하지 않은 데이터를 읽음</td>
                <td>A가 잔액을 변경했지만 아직 커밋 안 함 → B가 변경된 잔액을 읽음 → A가 롤백 → B는 잘못된 데이터를 사용</td>
              </tr>
              <tr>
                <td><strong>Non-Repeatable Read</strong></td>
                <td>같은 트랜잭션 내에서 같은 쿼리가 다른 결과를 반환</td>
                <td>B가 잔액 조회 → A가 잔액 변경 후 커밋 → B가 다시 조회하면 다른 값</td>
              </tr>
              <tr>
                <td><strong>Phantom Read</strong></td>
                <td>같은 조건의 쿼리인데 행의 수가 달라짐</td>
                <td>B가 "나이 &gt; 20" 조회 → A가 새 행 삽입 커밋 → B가 다시 조회하면 행이 추가됨</td>
              </tr>
            </tbody>
          </table>

          <h3>격리 수준 비교</h3>
          <table>
            <thead>
              <tr><th>격리 수준</th><th>Dirty Read</th><th>Non-Repeatable Read</th><th>Phantom Read</th><th>성능</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>READ_UNCOMMITTED</strong></td>
                <td>발생</td>
                <td>발생</td>
                <td>발생</td>
                <td>가장 빠름</td>
              </tr>
              <tr>
                <td><strong>READ_COMMITTED</strong></td>
                <td>방지</td>
                <td>발생</td>
                <td>발생</td>
                <td>빠름</td>
              </tr>
              <tr>
                <td><strong>REPEATABLE_READ</strong></td>
                <td>방지</td>
                <td>방지</td>
                <td>발생</td>
                <td>보통</td>
              </tr>
              <tr>
                <td><strong>SERIALIZABLE</strong></td>
                <td>방지</td>
                <td>방지</td>
                <td>방지</td>
                <td>가장 느림</td>
              </tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 데이터베이스별 기본 격리 수준</div>
            <p>
              <strong>MySQL(InnoDB)</strong>: REPEATABLE_READ (기본)<br/>
              <strong>Oracle</strong>: READ_COMMITTED (기본)<br/>
              <strong>PostgreSQL</strong>: READ_COMMITTED (기본)<br/>
              대부분의 웹 애플리케이션에서는 <strong>READ_COMMITTED</strong>가 적절한 균형점입니다.
            </p>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> JDBC에서 격리 수준 설정</span>
            </div>
            <pre><code>{`Connection conn = dataSource.getConnection();

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
}`}</code></pre>
          </div>

          {/* ============================================ */}
          {/* 5. 커넥션 풀 (HikariCP)                       */}
          {/* ============================================ */}
          <h2>5. 커넥션 풀 (HikariCP)</h2>
          <p>
            데이터베이스 커넥션 생성은 비용이 큰 작업입니다. 매 요청마다 커넥션을 생성하고 해제하면
            심각한 성능 저하가 발생합니다. <strong>커넥션 풀(Connection Pool)</strong>은 미리 일정 수의 커넥션을
            만들어 두고 재사용하는 기법입니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> 커넥션 풀의 동작 원리</span>
            </div>
            <pre><code>{`커넥션 풀 없이 (매번 새로 생성):
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
   [MySQL Server]`}</code></pre>
          </div>

          <h3>HikariCP 설정</h3>
          <p>
            <strong>HikariCP</strong>는 현재 가장 널리 사용되는 고성능 커넥션 풀 라이브러리입니다.
            Spring Boot의 기본 커넥션 풀이기도 합니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> pom.xml - HikariCP 의존성</span>
            </div>
            <pre><code>{`<dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>5.1.0</version>
</dependency>

<!-- MySQL 드라이버 -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.2.0</version>
</dependency>`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> DataSourceConfig.java</span>
            </div>
            <pre><code>{`import com.zaxxer.hikari.HikariConfig;
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
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> HikariCP 사용 예제</span>
            </div>
            <pre><code>{`// DataSource를 통해 커넥션 획득 (풀에서 빌림)
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
// 커넥션 풀에 반납됨 (재사용 가능)`}</code></pre>
          </div>

          <h3>HikariCP 주요 설정값 가이드</h3>
          <table>
            <thead>
              <tr><th>설정</th><th>기본값</th><th>권장값</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>maximumPoolSize</code></td><td>10</td><td>CPU 코어 수 * 2</td><td>동시에 사용 가능한 최대 커넥션 수</td></tr>
              <tr><td><code>minimumIdle</code></td><td>maximumPoolSize</td><td>maximumPoolSize와 동일</td><td>유휴 시에도 유지할 최소 커넥션 수</td></tr>
              <tr><td><code>connectionTimeout</code></td><td>30000ms</td><td>30000ms</td><td>풀에서 커넥션을 기다리는 최대 시간</td></tr>
              <tr><td><code>idleTimeout</code></td><td>600000ms</td><td>600000ms</td><td>유휴 커넥션이 풀에서 제거되기까지의 시간</td></tr>
              <tr><td><code>maxLifetime</code></td><td>1800000ms</td><td>DB wait_timeout보다 짧게</td><td>커넥션의 최대 수명</td></tr>
            </tbody>
          </table>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 풀 크기 결정 공식</div>
            <p>
              HikariCP 공식 위키에서 권장하는 풀 크기 공식:<br/>
              <code>connections = (CPU 코어 수 * 2) + 유효 디스크 스핀들 수</code><br/>
              예를 들어 4코어 서버에 SSD 1개라면 <strong>maximumPoolSize = 9~10</strong>이 적절합니다.
              풀 크기를 너무 크게 잡으면 오히려 컨텍스트 스위칭으로 성능이 저하될 수 있습니다.
            </p>
          </div>

          {/* ============================================ */}
          {/* 6. DAO/Repository 패턴                        */}
          {/* ============================================ */}
          <h2>6. DAO/Repository 패턴</h2>
          <p>
            <strong>DAO(Data Access Object)</strong> 패턴은 데이터베이스 접근 로직을 비즈니스 로직으로부터
            분리하는 디자인 패턴입니다. JDBC 코드를 DAO 계층에 캡슐화하면 유지보수성과 테스트 용이성이 크게 향상됩니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> 계층 구조</span>
            </div>
            <pre><code>{`┌─────────────┐      ┌──────────────┐      ┌───────────────┐
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
  - DAO는 순수 데이터 접근만 담당`}</code></pre>
          </div>

          <h3>DAO 인터페이스와 구현</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> User.java (도메인 객체)</span>
            </div>
            <pre><code>{`public class User {
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
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> UserDao.java (인터페이스)</span>
            </div>
            <pre><code>{`public interface UserDao {
    // CRUD 기본 메서드
    User findById(Long id) throws SQLException;
    List<User> findAll() throws SQLException;
    List<User> findByUsername(String username) throws SQLException;
    void save(User user) throws SQLException;
    void update(User user) throws SQLException;
    void deleteById(Long id) throws SQLException;
    long count() throws SQLException;
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> JdbcUserDao.java (구현 클래스)</span>
            </div>
            <pre><code>{`public class JdbcUserDao implements UserDao {

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
}`}</code></pre>
          </div>

          <h3>DAO vs Repository 패턴</h3>
          <table>
            <thead>
              <tr><th>비교 항목</th><th>DAO 패턴</th><th>Repository 패턴</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>관점</strong></td>
                <td>데이터 저장소(DB) 중심</td>
                <td>도메인 모델 중심</td>
              </tr>
              <tr>
                <td><strong>추상화 수준</strong></td>
                <td>테이블 단위 CRUD에 가까움</td>
                <td>도메인 객체의 컬렉션처럼 동작</td>
              </tr>
              <tr>
                <td><strong>메서드 이름</strong></td>
                <td>insert(), update(), delete()</td>
                <td>save(), findBy...(), existsBy...()</td>
              </tr>
              <tr>
                <td><strong>SQL 노출</strong></td>
                <td>구현에 SQL이 직접 포함</td>
                <td>내부 구현을 숨기고 도메인 언어 사용</td>
              </tr>
              <tr>
                <td><strong>대표 프레임워크</strong></td>
                <td>순수 JDBC, MyBatis</td>
                <td>Spring Data JPA, Hibernate</td>
              </tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 실무 적용 가이드</div>
            <p>
              실무에서는 두 패턴의 경계가 모호한 경우가 많습니다.
              순수 JDBC를 사용할 때는 DAO 패턴으로 시작하고, Spring Data JPA를 사용할 때는 Repository 패턴을
              따르는 것이 자연스럽습니다. 중요한 것은 <strong>데이터 접근 로직을 비즈니스 로직과 분리</strong>하는
              원칙을 지키는 것입니다.
            </p>
          </div>

          {/* ============================================ */}
          {/* 7. 배치 처리와 성능 최적화                      */}
          {/* ============================================ */}
          <h2>7. 배치 처리와 성능 최적화</h2>
          <p>
            대량의 데이터를 INSERT, UPDATE, DELETE할 때 건별 처리는 매우 비효율적입니다.
            JDBC의 <strong>배치 처리(Batch Processing)</strong>를 활용하면 네트워크 왕복 횟수를 대폭 줄여
            성능을 크게 개선할 수 있습니다.
          </p>

          <h3>addBatch / executeBatch</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 배치 INSERT 예제</span>
            </div>
            <pre><code>{`public void batchInsertUsers(List<User> users) throws SQLException {
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
// 배치 처리: 약 0.5초 (10번 네트워크 왕복, 배치 사이즈 1000)`}</code></pre>
          </div>

          <h3>fetchSize로 대량 조회 최적화</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> fetchSize 설정</span>
            </div>
            <pre><code>{`// fetchSize: DB에서 한 번에 가져오는 행 수를 제어
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
pstmt.setFetchSize(Integer.MIN_VALUE);  // MySQL 전용: 한 행씩 스트리밍`}</code></pre>
          </div>

          <h3>성능 최적화 체크리스트</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> JDBC 성능 최적화 요약</span>
            </div>
            <pre><code>{`1. 커넥션 풀 사용
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
   - ResultSet → PreparedStatement → Connection 순으로 닫기`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> N+1 문제 주의</div>
            <p>
              N+1 문제란 1번의 목록 조회 후, 각 항목마다 추가 쿼리를 N번 실행하는 비효율적인 패턴입니다.
              예를 들어 주문 10건을 조회한 뒤 각 주문의 상품을 개별 조회하면 총 11번의 쿼리가 실행됩니다.
              <code>JOIN</code>이나 <code>IN</code> 절을 사용하여 한 번의 쿼리로 해결하세요.
            </p>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> N+1 문제 해결 예시</span>
            </div>
            <pre><code>{`// ❌ N+1 문제 발생 (총 1 + N 번 쿼리)
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
String sql2 = "SELECT * FROM order_items WHERE order_id IN (" + placeholders + ")";`}</code></pre>
          </div>

          {/* ============================================ */}
          {/* 8. 연습문제                                    */}
          {/* ============================================ */}
          <h2>8. 연습문제</h2>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제 1: 안전한 로그인 DAO 구현</h4>
            <p>
              다음 요구사항에 맞는 <code>LoginDao</code>를 <code>PreparedStatement</code>로 구현하세요.
            </p>
            <ul>
              <li><code>findByUsernameAndPassword(String username, String password)</code> 메서드 작성</li>
              <li>SQL 인젝션이 불가능하도록 파라미터 바인딩 사용</li>
              <li>try-with-resources로 자원 관리</li>
              <li>비밀번호는 평문이 아닌 해시값으로 비교한다고 가정</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제 2: 계좌 이체 트랜잭션</h4>
            <p>
              다음 조건을 만족하는 <code>BankService.transfer()</code> 메서드를 작성하세요.
            </p>
            <ul>
              <li>출금 계좌 잔액이 부족하면 <code>InsufficientBalanceException</code>을 던질 것</li>
              <li>이체 전후 총 잔액 합계가 동일해야 함 (일관성)</li>
              <li>오류 발생 시 반드시 롤백</li>
              <li>이체 이력을 <code>transfer_log</code> 테이블에 기록</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제 3: 배치 데이터 마이그레이션</h4>
            <p>
              CSV 파일에서 10만 건의 상품 데이터를 읽어 DB에 삽입하는 프로그램을 작성하세요.
            </p>
            <ul>
              <li>HikariCP 커넥션 풀 사용</li>
              <li><code>addBatch()</code> / <code>executeBatch()</code>로 배치 처리</li>
              <li>1000건 단위로 배치 실행 및 로그 출력</li>
              <li>전체 작업을 하나의 트랜잭션으로 관리</li>
              <li>처리 시간을 측정하여 출력</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제 4: 완성된 DAO 패턴 적용</h4>
            <p>
              아래 테이블에 대한 DAO 인터페이스와 JDBC 구현 클래스를 작성하세요.
            </p>
            <div className="code-block" style={{marginTop:'12px'}}>
              <div className="code-header">
                <span className="file-name"><i className="fas fa-file-code"></i> 테이블 구조</span>
              </div>
              <pre><code>{`CREATE TABLE products (
    id         BIGINT PRIMARY KEY AUTO_INCREMENT,
    name       VARCHAR(200) NOT NULL,
    price      INT NOT NULL,
    stock      INT DEFAULT 0,
    category   VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`}</code></pre>
            </div>
            <ul style={{marginTop:'12px'}}>
              <li><code>ProductDao</code> 인터페이스: findById, findAll, findByCategory, save, update, deleteById</li>
              <li><code>JdbcProductDao</code> 구현 클래스: PreparedStatement 사용, mapRow 헬퍼 메서드 포함</li>
              <li>Service 클래스에서 재고 차감 시 트랜잭션 처리 구현</li>
            </ul>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('PR05') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('PR05')}
            >
              {isLessonCompleted('PR05') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/practical/04"><i className="fas fa-arrow-left"></i> 이전: SQL 기초</Link>
            <Link to="/practical/06">다음: JSON 처리 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
