import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function PracticalLesson04() {
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
            <span>Lesson 04</span>
          </div>
          <h1>Lesson 04. SQL 기초</h1>
          <p>DDL/DML, JOIN 5종, 서브쿼리, 인덱스, 제약조건을 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          {/* ========== 1. 데이터베이스와 SQL 소개 ========== */}
          <h2>1. 데이터베이스와 SQL 소개</h2>
          <p>
            <strong>데이터베이스(Database)</strong>는 체계적으로 구조화된 데이터의 집합입니다.
            그중에서도 <strong>관계형 데이터베이스(RDBMS)</strong>는 데이터를 <strong>테이블(행과 열)</strong> 형태로
            저장하며, 테이블 간의 관계를 통해 데이터를 관리합니다.
          </p>
          <p>
            <strong>SQL(Structured Query Language)</strong>은 RDBMS에서 데이터를 정의, 조작, 제어하기 위한 표준 언어입니다.
            ANSI/ISO 표준이 존재하지만, 각 DBMS마다 고유한 확장 문법도 제공합니다.
          </p>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> RDBMS 핵심 개념</div>
            <ul>
              <li><strong>테이블(Table)</strong> - 행(Row)과 열(Column)으로 구성된 데이터 저장 단위</li>
              <li><strong>행(Row/Record/Tuple)</strong> - 하나의 데이터 레코드</li>
              <li><strong>열(Column/Field/Attribute)</strong> - 데이터의 속성(이름, 나이 등)</li>
              <li><strong>기본키(Primary Key)</strong> - 각 행을 고유하게 식별하는 열</li>
              <li><strong>외래키(Foreign Key)</strong> - 다른 테이블의 기본키를 참조하는 열</li>
              <li><strong>스키마(Schema)</strong> - 데이터베이스의 구조와 제약조건 정의</li>
            </ul>
          </div>

          <h3>주요 RDBMS 비교</h3>
          <table>
            <thead>
              <tr><th>구분</th><th>MySQL</th><th>PostgreSQL</th><th>Oracle</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>라이선스</strong></td><td>GPL (Community) / 상용</td><td>BSD (완전 무료)</td><td>상용 (유료)</td></tr>
              <tr><td><strong>특징</strong></td><td>빠른 속도, 쉬운 사용</td><td>표준 준수, 고급 기능</td><td>대규모 엔터프라이즈</td></tr>
              <tr><td><strong>JSON 지원</strong></td><td>JSON 타입 지원</td><td>JSONB (인덱싱 가능)</td><td>JSON 지원</td></tr>
              <tr><td><strong>전문 검색</strong></td><td>FULLTEXT Index</td><td>tsvector/tsquery</td><td>Oracle Text</td></tr>
              <tr><td><strong>주요 사용처</strong></td><td>웹 서비스, 스타트업</td><td>데이터 분석, GIS</td><td>금융, 공공기관</td></tr>
              <tr><td><strong>기본 포트</strong></td><td>3306</td><td>5432</td><td>1521</td></tr>
            </tbody>
          </table>

          <h3>SQL 분류</h3>
          <table>
            <thead>
              <tr><th>분류</th><th>설명</th><th>주요 명령어</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>DDL</strong></td><td>Data Definition Language (데이터 정의어)</td><td>CREATE, ALTER, DROP, TRUNCATE</td></tr>
              <tr><td><strong>DML</strong></td><td>Data Manipulation Language (데이터 조작어)</td><td>SELECT, INSERT, UPDATE, DELETE</td></tr>
              <tr><td><strong>DCL</strong></td><td>Data Control Language (데이터 제어어)</td><td>GRANT, REVOKE</td></tr>
              <tr><td><strong>TCL</strong></td><td>Transaction Control Language (트랜잭션 제어어)</td><td>COMMIT, ROLLBACK, SAVEPOINT</td></tr>
            </tbody>
          </table>

          {/* ========== 2. DDL (Data Definition Language) ========== */}
          <h2>2. DDL (Data Definition Language)</h2>
          <p>
            DDL은 데이터베이스의 <strong>구조(스키마)</strong>를 정의하는 명령어입니다.
            테이블, 인덱스, 뷰 등 데이터베이스 객체를 생성, 수정, 삭제할 때 사용합니다.
            DDL 명령은 실행 즉시 <strong>자동 커밋(Auto Commit)</strong>됩니다.
          </p>

          <h3>주요 데이터 타입</h3>
          <table>
            <thead>
              <tr><th>분류</th><th>타입</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>정수</strong></td><td>INT / INTEGER</td><td>4바이트 정수</td><td>age INT</td></tr>
              <tr><td><strong>정수</strong></td><td>BIGINT</td><td>8바이트 정수</td><td>id BIGINT</td></tr>
              <tr><td><strong>실수</strong></td><td>DECIMAL(p, s)</td><td>고정 소수점 (정밀)</td><td>price DECIMAL(10,2)</td></tr>
              <tr><td><strong>문자열</strong></td><td>VARCHAR(n)</td><td>가변 길이 문자열</td><td>name VARCHAR(100)</td></tr>
              <tr><td><strong>문자열</strong></td><td>CHAR(n)</td><td>고정 길이 문자열</td><td>gender CHAR(1)</td></tr>
              <tr><td><strong>문자열</strong></td><td>TEXT</td><td>대용량 텍스트</td><td>content TEXT</td></tr>
              <tr><td><strong>날짜</strong></td><td>DATE</td><td>날짜 (년-월-일)</td><td>birth_date DATE</td></tr>
              <tr><td><strong>날짜</strong></td><td>DATETIME / TIMESTAMP</td><td>날짜 + 시간</td><td>created_at TIMESTAMP</td></tr>
              <tr><td><strong>논리</strong></td><td>BOOLEAN</td><td>참/거짓</td><td>is_active BOOLEAN</td></tr>
            </tbody>
          </table>

          <h3>CREATE TABLE</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 부서 테이블 생성
CREATE TABLE departments (
    dept_id     INT           PRIMARY KEY AUTO_INCREMENT,
    dept_name   VARCHAR(50)   NOT NULL UNIQUE,
    location    VARCHAR(100),
    created_at  TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
);

-- 사원 테이블 생성
CREATE TABLE employees (
    emp_id      BIGINT        PRIMARY KEY AUTO_INCREMENT,
    emp_name    VARCHAR(50)   NOT NULL,
    email       VARCHAR(100)  UNIQUE,
    salary      DECIMAL(10,2) DEFAULT 0,
    hire_date   DATE          NOT NULL,
    dept_id     INT,
    is_active   BOOLEAN       DEFAULT TRUE,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`}</code></pre>
          </div>

          <h3>ALTER TABLE</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 컬럼 추가
ALTER TABLE employees ADD COLUMN phone VARCHAR(20);

-- 컬럼 타입 변경
ALTER TABLE employees MODIFY COLUMN phone VARCHAR(30) NOT NULL;

-- 컬럼 이름 변경
ALTER TABLE employees RENAME COLUMN phone TO phone_number;

-- 컬럼 삭제
ALTER TABLE employees DROP COLUMN phone_number;

-- 테이블 이름 변경
ALTER TABLE employees RENAME TO staff;`}</code></pre>
          </div>

          <h3>DROP TABLE / TRUNCATE</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 테이블 삭제 (구조 + 데이터 모두 삭제)
DROP TABLE employees;

-- 외래키 참조가 있을 경우 (MySQL)
DROP TABLE IF EXISTS employees;

-- 데이터만 삭제 (구조는 유지, 롤백 불가, 빠름)
TRUNCATE TABLE employees;

-- DELETE와 TRUNCATE 차이:
-- DELETE: 행 단위 삭제, WHERE 가능, 롤백 가능, 느림
-- TRUNCATE: 테이블 데이터 전체 초기화, 롤백 불가, 빠름`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> DDL 주의사항</div>
            <p>
              DDL 명령어(CREATE, ALTER, DROP, TRUNCATE)는 실행 즉시 <strong>자동 커밋</strong>됩니다.
              한 번 실행하면 <strong>ROLLBACK으로 되돌릴 수 없으므로</strong> 운영 환경에서는 반드시 백업 후 실행하세요.
              특히 DROP TABLE은 테이블 구조까지 완전히 삭제하므로 극도로 신중해야 합니다.
            </p>
          </div>

          {/* ========== 3. DML (Data Manipulation Language) ========== */}
          <h2>3. DML (Data Manipulation Language)</h2>
          <p>
            DML은 테이블의 <strong>데이터를 조작</strong>하는 명령어입니다.
            DDL과 달리 자동 커밋되지 않으므로 COMMIT/ROLLBACK으로 트랜잭션을 제어할 수 있습니다.
          </p>

          <h3>INSERT - 데이터 삽입</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 기본 INSERT (컬럼 지정)
INSERT INTO departments (dept_name, location)
VALUES ('개발팀', '서울 강남구');

-- 모든 컬럼에 값을 넣을 때 (컬럼명 생략 가능, 비추천)
INSERT INTO departments
VALUES (2, '인사팀', '서울 종로구', NOW());

-- 여러 행 한 번에 삽입
INSERT INTO departments (dept_name, location) VALUES
    ('마케팅팀', '서울 서초구'),
    ('영업팀', '부산 해운대구'),
    ('기획팀', '서울 마포구');

-- 사원 데이터 삽입
INSERT INTO employees (emp_name, email, salary, hire_date, dept_id)
VALUES ('김자바', 'java@company.com', 5000000, '2023-01-15', 1);

INSERT INTO employees (emp_name, email, salary, hire_date, dept_id) VALUES
    ('이파이썬', 'python@company.com', 4800000, '2023-03-01', 1),
    ('박스프링', 'spring@company.com', 5500000, '2022-06-15', 1),
    ('최인사', 'hr@company.com', 4200000, '2023-07-01', 2),
    ('정마케팅', 'mkt@company.com', 4500000, '2022-11-20', 3),
    ('한영업', 'sales@company.com', 4000000, '2024-01-10', 4);`}</code></pre>
          </div>

          <h3>SELECT - 데이터 조회</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 모든 컬럼 조회
SELECT * FROM employees;

-- 특정 컬럼만 조회
SELECT emp_name, email, salary FROM employees;

-- 별칭(Alias) 사용
SELECT emp_name AS 이름,
       salary AS 급여,
       salary * 12 AS 연봉
FROM employees;

-- 조건 조회 (WHERE)
SELECT * FROM employees WHERE dept_id = 1;

-- 결과 정렬
SELECT * FROM employees ORDER BY salary DESC;`}</code></pre>
          </div>

          <h3>UPDATE - 데이터 수정</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 특정 조건의 행 수정
UPDATE employees
SET salary = 5500000
WHERE emp_name = '김자바';

-- 여러 컬럼 동시 수정
UPDATE employees
SET salary = salary * 1.1,
    email = 'newjava@company.com'
WHERE emp_id = 1;

-- 주의: WHERE 없이 UPDATE하면 모든 행이 수정됨!
-- UPDATE employees SET salary = 0;  -- 전체 급여가 0이 됨!`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> UPDATE/DELETE 주의사항</div>
            <p>
              UPDATE와 DELETE 실행 시 <strong>WHERE 절을 반드시 확인</strong>하세요.
              WHERE 절 없이 실행하면 테이블의 <strong>모든 행</strong>이 수정/삭제됩니다.
              실무에서는 먼저 <code>SELECT</code>로 대상 행을 확인한 후 UPDATE/DELETE를 실행하는 습관을 들이세요.
            </p>
          </div>

          <h3>DELETE - 데이터 삭제</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 특정 조건의 행 삭제
DELETE FROM employees WHERE emp_id = 6;

-- 여러 조건으로 삭제
DELETE FROM employees
WHERE dept_id = 4 AND salary < 4500000;

-- 전체 데이터 삭제 (주의!)
DELETE FROM employees;  -- 롤백 가능 (TRUNCATE와 차이)`}</code></pre>
          </div>

          {/* ========== 4. SELECT 심화 ========== */}
          <h2>4. SELECT 심화</h2>
          <p>
            SELECT는 SQL에서 가장 자주 사용하는 명령어입니다. 다양한 절(clause)을 조합하여
            원하는 데이터를 정확하게 조회할 수 있습니다.
          </p>

          <h3>WHERE 절 - 조건 필터링</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 비교 연산자
SELECT * FROM employees WHERE salary >= 5000000;
SELECT * FROM employees WHERE dept_id != 2;

-- 논리 연산자 (AND, OR, NOT)
SELECT * FROM employees
WHERE dept_id = 1 AND salary >= 5000000;

SELECT * FROM employees
WHERE dept_id = 1 OR dept_id = 3;

-- BETWEEN (범위)
SELECT * FROM employees
WHERE salary BETWEEN 4000000 AND 5000000;

-- IN (목록)
SELECT * FROM employees
WHERE dept_id IN (1, 2, 3);

-- LIKE (패턴 매칭)
SELECT * FROM employees WHERE emp_name LIKE '김%';   -- '김'으로 시작
SELECT * FROM employees WHERE email LIKE '%@company%'; -- '@company' 포함
SELECT * FROM employees WHERE emp_name LIKE '_자_';   -- 3글자, 가운데 '자'

-- IS NULL / IS NOT NULL
SELECT * FROM employees WHERE dept_id IS NULL;
SELECT * FROM employees WHERE email IS NOT NULL;`}</code></pre>
          </div>

          <h3>ORDER BY - 정렬</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 오름차순 정렬 (기본값: ASC)
SELECT * FROM employees ORDER BY salary;
SELECT * FROM employees ORDER BY salary ASC;

-- 내림차순 정렬
SELECT * FROM employees ORDER BY salary DESC;

-- 다중 컬럼 정렬
SELECT * FROM employees
ORDER BY dept_id ASC, salary DESC;
-- 부서별로 정렬하고, 같은 부서 내에서는 급여 높은 순`}</code></pre>
          </div>

          <h3>DISTINCT - 중복 제거</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 중복 제거하여 부서 ID 목록 조회
SELECT DISTINCT dept_id FROM employees;

-- 여러 컬럼 조합의 중복 제거
SELECT DISTINCT dept_id, is_active FROM employees;`}</code></pre>
          </div>

          <h3>집계 함수 (Aggregate Functions)</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- COUNT: 행 수
SELECT COUNT(*) AS 전체사원수 FROM employees;
SELECT COUNT(dept_id) AS 부서배정사원수 FROM employees; -- NULL 제외

-- SUM: 합계
SELECT SUM(salary) AS 총급여 FROM employees;

-- AVG: 평균
SELECT AVG(salary) AS 평균급여 FROM employees;

-- MAX / MIN: 최대 / 최소
SELECT MAX(salary) AS 최고급여, MIN(salary) AS 최저급여
FROM employees;

-- 조합 사용
SELECT COUNT(*) AS 사원수,
       SUM(salary) AS 총급여,
       AVG(salary) AS 평균급여,
       MAX(salary) AS 최고급여,
       MIN(salary) AS 최저급여
FROM employees
WHERE dept_id = 1;`}</code></pre>
          </div>

          <h3>GROUP BY / HAVING - 그룹화와 그룹 조건</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 부서별 사원 수와 평균 급여
SELECT dept_id,
       COUNT(*) AS 사원수,
       AVG(salary) AS 평균급여
FROM employees
GROUP BY dept_id;

-- HAVING: 그룹 조건 (집계 함수에 대한 조건)
SELECT dept_id,
       COUNT(*) AS 사원수,
       AVG(salary) AS 평균급여
FROM employees
GROUP BY dept_id
HAVING COUNT(*) >= 2;       -- 2명 이상인 부서만
-- HAVING AVG(salary) >= 5000000;  -- 평균급여 500만 이상 부서만

-- WHERE vs HAVING 차이:
-- WHERE:  그룹화 전에 행을 필터링
-- HAVING: 그룹화 후에 그룹을 필터링`}</code></pre>
          </div>

          <h3>LIMIT / OFFSET - 결과 제한</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 상위 3개 행만 조회
SELECT * FROM employees ORDER BY salary DESC LIMIT 3;

-- 페이징: 2번째 페이지 (한 페이지에 3개씩)
SELECT * FROM employees
ORDER BY emp_id
LIMIT 3 OFFSET 3;   -- 4번째부터 3개

-- MySQL 축약 문법
SELECT * FROM employees ORDER BY emp_id LIMIT 3, 3;
-- LIMIT offset, count`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> SELECT 실행 순서</div>
            <p>SQL SELECT 문의 논리적 실행 순서를 이해하면 쿼리 작성이 쉬워집니다.</p>
            <ol>
              <li><strong>FROM</strong> - 테이블 지정</li>
              <li><strong>WHERE</strong> - 행 필터링</li>
              <li><strong>GROUP BY</strong> - 그룹화</li>
              <li><strong>HAVING</strong> - 그룹 필터링</li>
              <li><strong>SELECT</strong> - 컬럼 선택 (별칭 부여)</li>
              <li><strong>ORDER BY</strong> - 정렬</li>
              <li><strong>LIMIT</strong> - 결과 제한</li>
            </ol>
            <p>이 순서 때문에 WHERE에서 SELECT의 별칭을 사용할 수 없고, ORDER BY에서는 별칭 사용이 가능합니다.</p>
          </div>

          {/* ========== 5. JOIN 5종 ========== */}
          <h2>5. JOIN 5종</h2>
          <p>
            JOIN은 <strong>두 개 이상의 테이블을 연결</strong>하여 데이터를 조회하는 방법입니다.
            테이블 간의 관계(외래키)를 기반으로 데이터를 결합합니다.
            아래 예제에서 사용하는 테이블 구조를 먼저 확인하세요.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL - 예제 데이터</span>
            </div>
            <pre><code>{`-- employees 테이블                    -- departments 테이블
-- emp_id | emp_name | dept_id         -- dept_id | dept_name
-- -------+----------+---------         -- --------+----------
--   1    | 김자바   |   1              --    1    | 개발팀
--   2    | 이파이썬 |   1              --    2    | 인사팀
--   3    | 박스프링 |   1              --    3    | 마케팅팀
--   4    | 최인사   |   2              --    4    | 영업팀
--   5    | 정마케팅 |   3              --    5    | 기획팀 (사원 없음)
--   6    | 한프리   |  NULL            -- (한프리는 부서 미배정)`}</code></pre>
          </div>

          <h3>5-1. INNER JOIN (내부 조인)</h3>
          <p>
            양쪽 테이블에서 <strong>조건에 일치하는 행만</strong> 반환합니다.
            가장 많이 사용하는 JOIN으로, 매칭되지 않는 행은 결과에 포함되지 않습니다.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- INNER JOIN: 양쪽 모두 매칭되는 행만 반환
SELECT e.emp_name, e.salary, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- 결과:
-- emp_name | salary   | dept_name
-- ---------+----------+----------
-- 김자바   | 5000000  | 개발팀
-- 이파이썬 | 4800000  | 개발팀
-- 박스프링 | 5500000  | 개발팀
-- 최인사   | 4200000  | 인사팀
-- 정마케팅 | 4500000  | 마케팅팀
-- ※ 한프리(dept_id=NULL)는 제외
-- ※ 기획팀(사원 없음)도 제외`}</code></pre>
          </div>

          <h3>5-2. LEFT (OUTER) JOIN (왼쪽 외부 조인)</h3>
          <p>
            <strong>왼쪽 테이블의 모든 행</strong>을 반환하고, 오른쪽 테이블에서 매칭되는 행이 없으면
            NULL로 채웁니다. "모든 사원을 보되, 부서 정보도 함께" 조회할 때 사용합니다.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- LEFT JOIN: 왼쪽(employees) 테이블의 모든 행 반환
SELECT e.emp_name, e.salary, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id;

-- 결과:
-- emp_name | salary   | dept_name
-- ---------+----------+----------
-- 김자바   | 5000000  | 개발팀
-- 이파이썬 | 4800000  | 개발팀
-- 박스프링 | 5500000  | 개발팀
-- 최인사   | 4200000  | 인사팀
-- 정마케팅 | 4500000  | 마케팅팀
-- 한프리   | 4000000  | NULL      ← 부서 미배정 사원도 포함!`}</code></pre>
          </div>

          <h3>5-3. RIGHT (OUTER) JOIN (오른쪽 외부 조인)</h3>
          <p>
            <strong>오른쪽 테이블의 모든 행</strong>을 반환하고, 왼쪽 테이블에서 매칭되는 행이 없으면
            NULL로 채웁니다. LEFT JOIN을 뒤집은 것과 같습니다.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- RIGHT JOIN: 오른쪽(departments) 테이블의 모든 행 반환
SELECT e.emp_name, e.salary, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;

-- 결과:
-- emp_name | salary   | dept_name
-- ---------+----------+----------
-- 김자바   | 5000000  | 개발팀
-- 이파이썬 | 4800000  | 개발팀
-- 박스프링 | 5500000  | 개발팀
-- 최인사   | 4200000  | 인사팀
-- 정마케팅 | 4500000  | 마케팅팀
-- NULL     | NULL     | 영업팀     ← 사원 없는 부서도 포함!
-- NULL     | NULL     | 기획팀     ← 사원 없는 부서도 포함!`}</code></pre>
          </div>

          <h3>5-4. FULL OUTER JOIN (완전 외부 조인)</h3>
          <p>
            <strong>양쪽 테이블의 모든 행</strong>을 반환합니다. 매칭되지 않는 행은 NULL로 채웁니다.
            MySQL은 FULL OUTER JOIN을 직접 지원하지 않아 UNION으로 대체합니다.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- FULL OUTER JOIN (PostgreSQL, Oracle)
SELECT e.emp_name, e.salary, d.dept_name
FROM employees e
FULL OUTER JOIN departments d ON e.dept_id = d.dept_id;

-- MySQL에서 FULL OUTER JOIN 구현 (UNION 사용)
SELECT e.emp_name, e.salary, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id
UNION
SELECT e.emp_name, e.salary, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;

-- 결과: LEFT JOIN + RIGHT JOIN의 합집합
-- emp_name | salary   | dept_name
-- ---------+----------+----------
-- 김자바   | 5000000  | 개발팀
-- 이파이썬 | 4800000  | 개발팀
-- 박스프링 | 5500000  | 개발팀
-- 최인사   | 4200000  | 인사팀
-- 정마케팅 | 4500000  | 마케팅팀
-- 한프리   | 4000000  | NULL       ← 부서 미배정 사원
-- NULL     | NULL     | 영업팀     ← 사원 없는 부서
-- NULL     | NULL     | 기획팀     ← 사원 없는 부서`}</code></pre>
          </div>

          <h3>5-5. CROSS JOIN (교차 조인)</h3>
          <p>
            양쪽 테이블의 <strong>모든 행 조합(카테시안 곱)</strong>을 반환합니다.
            조인 조건 없이 모든 가능한 쌍을 생성하므로, 결과 행 수 = 왼쪽 행 수 x 오른쪽 행 수입니다.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- CROSS JOIN: 모든 조합 생성
SELECT e.emp_name, d.dept_name
FROM employees e
CROSS JOIN departments d;
-- 6명 x 5부서 = 30행 결과

-- 실무 활용 예: 날짜와 카테고리의 모든 조합 생성
SELECT d.date_val, c.category_name
FROM dates d
CROSS JOIN categories c;
-- 리포트에서 빈 날짜/카테고리도 표시하고 싶을 때 활용`}</code></pre>
          </div>

          <h3>JOIN 5종 요약</h3>
          <table>
            <thead>
              <tr><th>JOIN 종류</th><th>반환 결과</th><th>사용 상황</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>INNER JOIN</strong></td><td>양쪽 모두 매칭되는 행</td><td>기본적인 테이블 결합</td></tr>
              <tr><td><strong>LEFT JOIN</strong></td><td>왼쪽 전체 + 오른쪽 매칭</td><td>모든 사원 + 부서 정보 (없으면 NULL)</td></tr>
              <tr><td><strong>RIGHT JOIN</strong></td><td>오른쪽 전체 + 왼쪽 매칭</td><td>모든 부서 + 사원 정보 (없으면 NULL)</td></tr>
              <tr><td><strong>FULL OUTER JOIN</strong></td><td>양쪽 모든 행</td><td>양쪽 모두 누락 없이 확인</td></tr>
              <tr><td><strong>CROSS JOIN</strong></td><td>모든 행의 조합 (곱집합)</td><td>조합 생성, 리포트 골격</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> JOIN 성능 팁</div>
            <p>
              JOIN의 ON 절에 사용하는 컬럼에는 <strong>인덱스(INDEX)</strong>를 생성하면 조회 성능이 크게 향상됩니다.
              외래키를 설정하면 자동으로 인덱스가 생성되는 DBMS도 있습니다(MySQL InnoDB).
              또한, 필요한 컬럼만 SELECT하고 <code>*</code> 사용을 지양하면 네트워크 비용을 줄일 수 있습니다.
            </p>
          </div>

          {/* ========== 6. 서브쿼리 ========== */}
          <h2>6. 서브쿼리</h2>
          <p>
            <strong>서브쿼리(Subquery)</strong>는 SQL 문 안에 포함된 또 다른 SELECT 문입니다.
            위치에 따라 세 가지로 분류되며, 복잡한 조건이나 계산을 하나의 쿼리로 해결할 수 있습니다.
          </p>

          <h3>6-1. WHERE 절 서브쿼리</h3>
          <p>
            조건절에서 비교할 값을 동적으로 가져올 때 사용합니다.
            가장 일반적인 형태의 서브쿼리입니다.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 단일 행 서브쿼리: 평균 급여보다 높은 사원 조회
SELECT emp_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 다중 행 서브쿼리 (IN): 개발팀에 속한 사원 조회
SELECT emp_name, salary
FROM employees
WHERE dept_id IN (
    SELECT dept_id FROM departments WHERE dept_name = '개발팀'
);

-- EXISTS: 사원이 1명 이상 있는 부서 조회
SELECT dept_name
FROM departments d
WHERE EXISTS (
    SELECT 1 FROM employees e WHERE e.dept_id = d.dept_id
);

-- ALL / ANY: 개발팀 모든 사원보다 급여가 높은 사원
SELECT emp_name, salary
FROM employees
WHERE salary > ALL (
    SELECT salary FROM employees WHERE dept_id = 1
);`}</code></pre>
          </div>

          <h3>6-2. FROM 절 서브쿼리 (인라인 뷰)</h3>
          <p>
            FROM 절에 서브쿼리를 사용하면 <strong>임시 테이블(인라인 뷰)</strong>처럼 활용할 수 있습니다.
            반드시 <strong>별칭(Alias)</strong>을 지정해야 합니다.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 부서별 통계를 구한 후 추가 필터링
SELECT sub.dept_name, sub.사원수, sub.평균급여
FROM (
    SELECT d.dept_name,
           COUNT(*) AS 사원수,
           AVG(e.salary) AS 평균급여
    FROM employees e
    INNER JOIN departments d ON e.dept_id = d.dept_id
    GROUP BY d.dept_name
) sub
WHERE sub.평균급여 >= 4500000;

-- 급여 등급별 사원 수
SELECT sub.급여등급, COUNT(*) AS 사원수
FROM (
    SELECT emp_name,
           CASE
               WHEN salary >= 5000000 THEN '고급'
               WHEN salary >= 4000000 THEN '중급'
               ELSE '초급'
           END AS 급여등급
    FROM employees
) sub
GROUP BY sub.급여등급;`}</code></pre>
          </div>

          <h3>6-3. SELECT 절 서브쿼리 (스칼라 서브쿼리)</h3>
          <p>
            SELECT 절에 서브쿼리를 사용하면 각 행마다 계산된 <strong>단일 값</strong>을 반환합니다.
            반드시 <strong>하나의 행, 하나의 컬럼</strong>만 반환해야 합니다.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 각 사원의 급여와 전체 평균 급여 비교
SELECT emp_name,
       salary,
       (SELECT AVG(salary) FROM employees) AS 전체평균,
       salary - (SELECT AVG(salary) FROM employees) AS 평균과의차이
FROM employees;

-- 각 사원이 속한 부서의 사원 수
SELECT e.emp_name,
       d.dept_name,
       (SELECT COUNT(*) FROM employees e2
        WHERE e2.dept_id = e.dept_id) AS 부서인원
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 서브쿼리 vs JOIN</div>
            <p>
              서브쿼리로 작성할 수 있는 대부분의 쿼리는 JOIN으로도 작성할 수 있습니다.
              일반적으로 <strong>JOIN이 성능면에서 유리</strong>한 경우가 많습니다(옵티마이저가 최적화하기 쉬움).
              단, EXISTS 서브쿼리는 조기 종료가 가능하여 JOIN보다 빠를 수 있습니다.
              상황에 따라 <strong>실행 계획(EXPLAIN)</strong>을 확인하여 선택하세요.
            </p>
          </div>

          {/* ========== 7. 인덱스와 제약조건 ========== */}
          <h2>7. 인덱스와 제약조건</h2>
          <p>
            <strong>제약조건(Constraint)</strong>은 데이터의 무결성을 보장하고,
            <strong>인덱스(Index)</strong>는 조회 성능을 향상시키는 데이터베이스 객체입니다.
          </p>

          <h3>제약조건 종류</h3>
          <table>
            <thead>
              <tr><th>제약조건</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>PRIMARY KEY</strong></td><td>행을 고유하게 식별 (NOT NULL + UNIQUE)</td><td>emp_id INT PRIMARY KEY</td></tr>
              <tr><td><strong>FOREIGN KEY</strong></td><td>다른 테이블의 PK를 참조</td><td>REFERENCES departments(dept_id)</td></tr>
              <tr><td><strong>UNIQUE</strong></td><td>중복 값 불허 (NULL은 허용)</td><td>email VARCHAR(100) UNIQUE</td></tr>
              <tr><td><strong>NOT NULL</strong></td><td>NULL 값 불허</td><td>emp_name VARCHAR(50) NOT NULL</td></tr>
              <tr><td><strong>CHECK</strong></td><td>조건식을 만족하는 값만 허용</td><td>CHECK (salary {'>'}= 0)</td></tr>
              <tr><td><strong>DEFAULT</strong></td><td>기본값 설정</td><td>is_active BOOLEAN DEFAULT TRUE</td></tr>
            </tbody>
          </table>

          <h3>제약조건 예제</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 제약조건을 포함한 테이블 생성
CREATE TABLE products (
    product_id    INT           PRIMARY KEY AUTO_INCREMENT,
    product_name  VARCHAR(100)  NOT NULL,
    price         DECIMAL(10,2) NOT NULL CHECK (price > 0),
    stock         INT           DEFAULT 0 CHECK (stock >= 0),
    category_id   INT           NOT NULL,
    sku           VARCHAR(50)   UNIQUE,
    created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
        ON DELETE RESTRICT        -- 참조 중이면 삭제 불가
        ON UPDATE CASCADE         -- 부모 PK 변경 시 함께 변경
);

-- 기존 테이블에 제약조건 추가
ALTER TABLE employees
ADD CONSTRAINT chk_salary CHECK (salary >= 0);

ALTER TABLE employees
ADD CONSTRAINT fk_dept
FOREIGN KEY (dept_id) REFERENCES departments(dept_id);

-- 제약조건 삭제
ALTER TABLE employees DROP CONSTRAINT chk_salary;`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> FOREIGN KEY 참조 옵션</div>
            <ul>
              <li><strong>ON DELETE RESTRICT</strong> - 자식 행이 있으면 부모 행 삭제 불가 (기본값)</li>
              <li><strong>ON DELETE CASCADE</strong> - 부모 행 삭제 시 자식 행도 함께 삭제</li>
              <li><strong>ON DELETE SET NULL</strong> - 부모 행 삭제 시 자식의 FK를 NULL로 설정</li>
              <li><strong>ON UPDATE CASCADE</strong> - 부모 PK 변경 시 자식의 FK도 함께 변경</li>
            </ul>
          </div>

          <h3>인덱스 (INDEX)</h3>
          <p>
            인덱스는 테이블의 데이터를 빠르게 검색하기 위한 자료구조입니다.
            책의 색인(목차)처럼, 원하는 데이터의 위치를 빠르게 찾을 수 있게 해줍니다.
            대부분의 DBMS는 내부적으로 <strong>B-Tree</strong> 구조를 사용합니다.
          </p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL</span>
            </div>
            <pre><code>{`-- 단일 컬럼 인덱스 생성
CREATE INDEX idx_emp_name ON employees(emp_name);

-- 복합 인덱스 (여러 컬럼)
CREATE INDEX idx_dept_salary ON employees(dept_id, salary);

-- UNIQUE 인덱스
CREATE UNIQUE INDEX idx_emp_email ON employees(email);

-- 인덱스 삭제
DROP INDEX idx_emp_name ON employees;

-- 인덱스 확인 (MySQL)
SHOW INDEX FROM employees;

-- 실행 계획으로 인덱스 사용 확인
EXPLAIN SELECT * FROM employees WHERE emp_name = '김자바';`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 인덱스 주의사항</div>
            <ul>
              <li><strong>무조건 좋은 것이 아닙니다</strong> - INSERT/UPDATE/DELETE 시 인덱스도 갱신되어 쓰기 성능 저하</li>
              <li><strong>카디널리티가 높은 컬럼</strong>에 생성하세요 - 성별(M/F)처럼 값의 종류가 적은 컬럼은 효과 미미</li>
              <li><strong>WHERE, JOIN, ORDER BY</strong>에 자주 사용하는 컬럼에 생성하세요</li>
              <li><strong>복합 인덱스</strong>는 컬럼 순서가 중요합니다 (왼쪽부터 매칭)</li>
              <li>테이블당 인덱스는 <strong>3~5개 이하</strong>를 권장합니다</li>
            </ul>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 자동 생성 인덱스</div>
            <p>
              <strong>PRIMARY KEY</strong>를 설정하면 자동으로 클러스터드 인덱스(Clustered Index)가 생성됩니다.
              <strong>UNIQUE</strong> 제약조건도 자동으로 유니크 인덱스를 생성합니다.
              따라서 이미 PK나 UNIQUE인 컬럼에 별도 인덱스를 생성할 필요가 없습니다.
            </p>
          </div>

          {/* ========== 8. 연습문제 ========== */}
          <h2>8. 연습문제</h2>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제 1: DDL</h4>
            <p>다음 요구사항에 맞는 테이블을 생성하는 SQL을 작성하세요.</p>
            <ul>
              <li>테이블명: <code>orders</code></li>
              <li><code>order_id</code>: 정수, 기본키, 자동 증가</li>
              <li><code>customer_name</code>: 가변 문자열(50), NOT NULL</li>
              <li><code>product_name</code>: 가변 문자열(100), NOT NULL</li>
              <li><code>quantity</code>: 정수, 기본값 1, 1 이상이어야 함</li>
              <li><code>total_price</code>: 소수점(10,2), 0보다 커야 함</li>
              <li><code>order_date</code>: TIMESTAMP, 기본값 현재시간</li>
              <li><code>status</code>: 가변 문자열(20), 기본값 'PENDING'</li>
            </ul>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL - 정답</span>
            </div>
            <pre><code>{`CREATE TABLE orders (
    order_id       INT           PRIMARY KEY AUTO_INCREMENT,
    customer_name  VARCHAR(50)   NOT NULL,
    product_name   VARCHAR(100)  NOT NULL,
    quantity       INT           DEFAULT 1 CHECK (quantity >= 1),
    total_price    DECIMAL(10,2) CHECK (total_price > 0),
    order_date     TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    status         VARCHAR(20)   DEFAULT 'PENDING'
);`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제 2: DML</h4>
            <p>아래 쿼리의 결과를 예측하세요.</p>
            <div className="code-block" style={{marginTop:'8px'}}>
              <div className="code-header">
                <span className="file-name"><i className="fas fa-database"></i> SQL</span>
              </div>
              <pre><code>{`SELECT dept_id, COUNT(*) AS cnt, AVG(salary) AS avg_sal
FROM employees
WHERE is_active = TRUE
GROUP BY dept_id
HAVING COUNT(*) >= 2
ORDER BY avg_sal DESC;`}</code></pre>
            </div>
            <p style={{marginTop:'12px'}}><strong>힌트:</strong> WHERE로 활성 사원만 필터링 → dept_id로 그룹화 → 2명 이상인 그룹만 → 평균 급여 내림차순 정렬</p>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제 3: JOIN</h4>
            <p>다음 요구사항을 만족하는 쿼리를 작성하세요.</p>
            <ol>
              <li>모든 부서의 이름과 해당 부서의 사원 수를 조회하세요 (사원이 없는 부서도 포함).</li>
              <li>부서별 평균 급여가 가장 높은 부서의 이름과 평균 급여를 조회하세요.</li>
            </ol>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL - 정답</span>
            </div>
            <pre><code>{`-- 문제 1: 모든 부서와 사원 수 (사원 없는 부서 포함)
SELECT d.dept_name, COUNT(e.emp_id) AS 사원수
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name
ORDER BY 사원수 DESC;

-- 문제 2: 평균 급여가 가장 높은 부서
SELECT d.dept_name, AVG(e.salary) AS 평균급여
FROM departments d
INNER JOIN employees e ON d.dept_id = e.dept_id
GROUP BY d.dept_name
ORDER BY 평균급여 DESC
LIMIT 1;`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제 4: 서브쿼리</h4>
            <p>서브쿼리를 활용하여 다음 쿼리를 작성하세요.</p>
            <ol>
              <li>자신이 속한 부서의 평균 급여보다 높은 급여를 받는 사원의 이름과 급여를 조회하세요.</li>
              <li>사원이 한 명도 없는 부서의 이름을 조회하세요 (NOT EXISTS 사용).</li>
            </ol>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL - 정답</span>
            </div>
            <pre><code>{`-- 문제 1: 부서 평균 급여보다 높은 사원 (상관 서브쿼리)
SELECT e.emp_name, e.salary, e.dept_id
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e.dept_id
);

-- 문제 2: 사원이 없는 부서 (NOT EXISTS)
SELECT d.dept_name
FROM departments d
WHERE NOT EXISTS (
    SELECT 1 FROM employees e WHERE e.dept_id = d.dept_id
);`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제 5: 인덱스와 제약조건</h4>
            <p>다음 질문에 답하세요.</p>
            <ol>
              <li><code>employees</code> 테이블에서 <code>email</code> 컬럼으로 자주 조회한다면 어떤 인덱스를 생성해야 할까요?</li>
              <li><code>orders</code> 테이블의 <code>status</code> 컬럼(값: PENDING, CONFIRMED, SHIPPED, DELIVERED)에 인덱스를 생성하면 효과적일까요? 이유를 설명하세요.</li>
              <li>복합 인덱스 <code>CREATE INDEX idx ON orders(customer_id, order_date)</code>가 있을 때, <code>WHERE order_date = '2024-01-01'</code> 조건만으로 이 인덱스를 활용할 수 있을까요?</li>
            </ol>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-database"></i> SQL - 정답</span>
            </div>
            <pre><code>{`-- 문제 1: email은 고유하므로 UNIQUE INDEX 권장
CREATE UNIQUE INDEX idx_emp_email ON employees(email);
-- 이미 UNIQUE 제약조건이 있다면 자동 생성되므로 추가 불필요

-- 문제 2: status 컬럼은 카디널리티가 낮아(4가지 값) 인덱스 효과 미미
-- 단, 전체 데이터 중 특정 상태의 비율이 매우 낮으면 효과 있을 수 있음
-- (예: PENDING이 전체의 1%인 경우)

-- 문제 3: 활용 불가!
-- 복합 인덱스는 왼쪽 컬럼부터 순서대로 매칭됨
-- (customer_id, order_date) 인덱스는:
--   WHERE customer_id = 1                    → 활용 가능 ✓
--   WHERE customer_id = 1 AND order_date ... → 활용 가능 ✓
--   WHERE order_date = '2024-01-01'          → 활용 불가 ✗
-- 해결: order_date 단독 인덱스를 추가 생성`}</code></pre>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('PR04') ? 'btn-primary' : 'btn-accent'}`} onClick={() => completeLesson('PR04')}>
              {isLessonCompleted('PR04') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/practical/03"><i className="fas fa-arrow-left"></i> 이전: Maven과 Gradle</Link>
            <Link to="/practical/05">다음: JDBC 심화 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
