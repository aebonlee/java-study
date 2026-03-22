import{u as a,r as c,j as e,L as s}from"./index-DwPPxUEv.js";function r(){const{completeLesson:l,isLessonCompleted:d}=a();return c.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/practical",children:"실무 Java"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 04"})]}),e.jsx("h1",{children:"Lesson 04. SQL 기초"}),e.jsx("p",{children:"DDL/DML, JOIN 5종, 서브쿼리, 인덱스, 제약조건을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 데이터베이스와 SQL 소개"}),e.jsxs("p",{children:[e.jsx("strong",{children:"데이터베이스(Database)"}),"는 체계적으로 구조화된 데이터의 집합입니다. 그중에서도 ",e.jsx("strong",{children:"관계형 데이터베이스(RDBMS)"}),"는 데이터를 ",e.jsx("strong",{children:"테이블(행과 열)"})," 형태로 저장하며, 테이블 간의 관계를 통해 데이터를 관리합니다."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"SQL(Structured Query Language)"}),"은 RDBMS에서 데이터를 정의, 조작, 제어하기 위한 표준 언어입니다. ANSI/ISO 표준이 존재하지만, 각 DBMS마다 고유한 확장 문법도 제공합니다."]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," RDBMS 핵심 개념"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"테이블(Table)"})," - 행(Row)과 열(Column)으로 구성된 데이터 저장 단위"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"행(Row/Record/Tuple)"})," - 하나의 데이터 레코드"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"열(Column/Field/Attribute)"})," - 데이터의 속성(이름, 나이 등)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"기본키(Primary Key)"})," - 각 행을 고유하게 식별하는 열"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"외래키(Foreign Key)"})," - 다른 테이블의 기본키를 참조하는 열"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"스키마(Schema)"})," - 데이터베이스의 구조와 제약조건 정의"]})]})]}),e.jsx("h3",{children:"주요 RDBMS 비교"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"MySQL"}),e.jsx("th",{children:"PostgreSQL"}),e.jsx("th",{children:"Oracle"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"라이선스"})}),e.jsx("td",{children:"GPL (Community) / 상용"}),e.jsx("td",{children:"BSD (완전 무료)"}),e.jsx("td",{children:"상용 (유료)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"특징"})}),e.jsx("td",{children:"빠른 속도, 쉬운 사용"}),e.jsx("td",{children:"표준 준수, 고급 기능"}),e.jsx("td",{children:"대규모 엔터프라이즈"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"JSON 지원"})}),e.jsx("td",{children:"JSON 타입 지원"}),e.jsx("td",{children:"JSONB (인덱싱 가능)"}),e.jsx("td",{children:"JSON 지원"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"전문 검색"})}),e.jsx("td",{children:"FULLTEXT Index"}),e.jsx("td",{children:"tsvector/tsquery"}),e.jsx("td",{children:"Oracle Text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"주요 사용처"})}),e.jsx("td",{children:"웹 서비스, 스타트업"}),e.jsx("td",{children:"데이터 분석, GIS"}),e.jsx("td",{children:"금융, 공공기관"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"기본 포트"})}),e.jsx("td",{children:"3306"}),e.jsx("td",{children:"5432"}),e.jsx("td",{children:"1521"})]})]})]}),e.jsx("h3",{children:"SQL 분류"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"분류"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"주요 명령어"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DDL"})}),e.jsx("td",{children:"Data Definition Language (데이터 정의어)"}),e.jsx("td",{children:"CREATE, ALTER, DROP, TRUNCATE"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DML"})}),e.jsx("td",{children:"Data Manipulation Language (데이터 조작어)"}),e.jsx("td",{children:"SELECT, INSERT, UPDATE, DELETE"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DCL"})}),e.jsx("td",{children:"Data Control Language (데이터 제어어)"}),e.jsx("td",{children:"GRANT, REVOKE"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"TCL"})}),e.jsx("td",{children:"Transaction Control Language (트랜잭션 제어어)"}),e.jsx("td",{children:"COMMIT, ROLLBACK, SAVEPOINT"})]})]})]}),e.jsx("h2",{children:"2. DDL (Data Definition Language)"}),e.jsxs("p",{children:["DDL은 데이터베이스의 ",e.jsx("strong",{children:"구조(스키마)"}),"를 정의하는 명령어입니다. 테이블, 인덱스, 뷰 등 데이터베이스 객체를 생성, 수정, 삭제할 때 사용합니다. DDL 명령은 실행 즉시 ",e.jsx("strong",{children:"자동 커밋(Auto Commit)"}),"됩니다."]}),e.jsx("h3",{children:"주요 데이터 타입"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"분류"}),e.jsx("th",{children:"타입"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"정수"})}),e.jsx("td",{children:"INT / INTEGER"}),e.jsx("td",{children:"4바이트 정수"}),e.jsx("td",{children:"age INT"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"정수"})}),e.jsx("td",{children:"BIGINT"}),e.jsx("td",{children:"8바이트 정수"}),e.jsx("td",{children:"id BIGINT"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"실수"})}),e.jsx("td",{children:"DECIMAL(p, s)"}),e.jsx("td",{children:"고정 소수점 (정밀)"}),e.jsx("td",{children:"price DECIMAL(10,2)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"문자열"})}),e.jsx("td",{children:"VARCHAR(n)"}),e.jsx("td",{children:"가변 길이 문자열"}),e.jsx("td",{children:"name VARCHAR(100)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"문자열"})}),e.jsx("td",{children:"CHAR(n)"}),e.jsx("td",{children:"고정 길이 문자열"}),e.jsx("td",{children:"gender CHAR(1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"문자열"})}),e.jsx("td",{children:"TEXT"}),e.jsx("td",{children:"대용량 텍스트"}),e.jsx("td",{children:"content TEXT"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"날짜"})}),e.jsx("td",{children:"DATE"}),e.jsx("td",{children:"날짜 (년-월-일)"}),e.jsx("td",{children:"birth_date DATE"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"날짜"})}),e.jsx("td",{children:"DATETIME / TIMESTAMP"}),e.jsx("td",{children:"날짜 + 시간"}),e.jsx("td",{children:"created_at TIMESTAMP"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"논리"})}),e.jsx("td",{children:"BOOLEAN"}),e.jsx("td",{children:"참/거짓"}),e.jsx("td",{children:"is_active BOOLEAN"})]})]})]}),e.jsx("h3",{children:"CREATE TABLE"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 부서 테이블 생성
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
);`})})]}),e.jsx("h3",{children:"ALTER TABLE"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 컬럼 추가
ALTER TABLE employees ADD COLUMN phone VARCHAR(20);

-- 컬럼 타입 변경
ALTER TABLE employees MODIFY COLUMN phone VARCHAR(30) NOT NULL;

-- 컬럼 이름 변경
ALTER TABLE employees RENAME COLUMN phone TO phone_number;

-- 컬럼 삭제
ALTER TABLE employees DROP COLUMN phone_number;

-- 테이블 이름 변경
ALTER TABLE employees RENAME TO staff;`})})]}),e.jsx("h3",{children:"DROP TABLE / TRUNCATE"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 테이블 삭제 (구조 + 데이터 모두 삭제)
DROP TABLE employees;

-- 외래키 참조가 있을 경우 (MySQL)
DROP TABLE IF EXISTS employees;

-- 데이터만 삭제 (구조는 유지, 롤백 불가, 빠름)
TRUNCATE TABLE employees;

-- DELETE와 TRUNCATE 차이:
-- DELETE: 행 단위 삭제, WHERE 가능, 롤백 가능, 느림
-- TRUNCATE: 테이블 데이터 전체 초기화, 롤백 불가, 빠름`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," DDL 주의사항"]}),e.jsxs("p",{children:["DDL 명령어(CREATE, ALTER, DROP, TRUNCATE)는 실행 즉시 ",e.jsx("strong",{children:"자동 커밋"}),"됩니다. 한 번 실행하면 ",e.jsx("strong",{children:"ROLLBACK으로 되돌릴 수 없으므로"})," 운영 환경에서는 반드시 백업 후 실행하세요. 특히 DROP TABLE은 테이블 구조까지 완전히 삭제하므로 극도로 신중해야 합니다."]})]}),e.jsx("h2",{children:"3. DML (Data Manipulation Language)"}),e.jsxs("p",{children:["DML은 테이블의 ",e.jsx("strong",{children:"데이터를 조작"}),"하는 명령어입니다. DDL과 달리 자동 커밋되지 않으므로 COMMIT/ROLLBACK으로 트랜잭션을 제어할 수 있습니다."]}),e.jsx("h3",{children:"INSERT - 데이터 삽입"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 기본 INSERT (컬럼 지정)
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
    ('한영업', 'sales@company.com', 4000000, '2024-01-10', 4);`})})]}),e.jsx("h3",{children:"SELECT - 데이터 조회"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 모든 컬럼 조회
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
SELECT * FROM employees ORDER BY salary DESC;`})})]}),e.jsx("h3",{children:"UPDATE - 데이터 수정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 특정 조건의 행 수정
UPDATE employees
SET salary = 5500000
WHERE emp_name = '김자바';

-- 여러 컬럼 동시 수정
UPDATE employees
SET salary = salary * 1.1,
    email = 'newjava@company.com'
WHERE emp_id = 1;

-- 주의: WHERE 없이 UPDATE하면 모든 행이 수정됨!
-- UPDATE employees SET salary = 0;  -- 전체 급여가 0이 됨!`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," UPDATE/DELETE 주의사항"]}),e.jsxs("p",{children:["UPDATE와 DELETE 실행 시 ",e.jsx("strong",{children:"WHERE 절을 반드시 확인"}),"하세요. WHERE 절 없이 실행하면 테이블의 ",e.jsx("strong",{children:"모든 행"}),"이 수정/삭제됩니다. 실무에서는 먼저 ",e.jsx("code",{children:"SELECT"}),"로 대상 행을 확인한 후 UPDATE/DELETE를 실행하는 습관을 들이세요."]})]}),e.jsx("h3",{children:"DELETE - 데이터 삭제"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 특정 조건의 행 삭제
DELETE FROM employees WHERE emp_id = 6;

-- 여러 조건으로 삭제
DELETE FROM employees
WHERE dept_id = 4 AND salary < 4500000;

-- 전체 데이터 삭제 (주의!)
DELETE FROM employees;  -- 롤백 가능 (TRUNCATE와 차이)`})})]}),e.jsx("h2",{children:"4. SELECT 심화"}),e.jsx("p",{children:"SELECT는 SQL에서 가장 자주 사용하는 명령어입니다. 다양한 절(clause)을 조합하여 원하는 데이터를 정확하게 조회할 수 있습니다."}),e.jsx("h3",{children:"WHERE 절 - 조건 필터링"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 비교 연산자
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
SELECT * FROM employees WHERE email IS NOT NULL;`})})]}),e.jsx("h3",{children:"ORDER BY - 정렬"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 오름차순 정렬 (기본값: ASC)
SELECT * FROM employees ORDER BY salary;
SELECT * FROM employees ORDER BY salary ASC;

-- 내림차순 정렬
SELECT * FROM employees ORDER BY salary DESC;

-- 다중 컬럼 정렬
SELECT * FROM employees
ORDER BY dept_id ASC, salary DESC;
-- 부서별로 정렬하고, 같은 부서 내에서는 급여 높은 순`})})]}),e.jsx("h3",{children:"DISTINCT - 중복 제거"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 중복 제거하여 부서 ID 목록 조회
SELECT DISTINCT dept_id FROM employees;

-- 여러 컬럼 조합의 중복 제거
SELECT DISTINCT dept_id, is_active FROM employees;`})})]}),e.jsx("h3",{children:"집계 함수 (Aggregate Functions)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- COUNT: 행 수
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
WHERE dept_id = 1;`})})]}),e.jsx("h3",{children:"GROUP BY / HAVING - 그룹화와 그룹 조건"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 부서별 사원 수와 평균 급여
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
-- HAVING: 그룹화 후에 그룹을 필터링`})})]}),e.jsx("h3",{children:"LIMIT / OFFSET - 결과 제한"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 상위 3개 행만 조회
SELECT * FROM employees ORDER BY salary DESC LIMIT 3;

-- 페이징: 2번째 페이지 (한 페이지에 3개씩)
SELECT * FROM employees
ORDER BY emp_id
LIMIT 3 OFFSET 3;   -- 4번째부터 3개

-- MySQL 축약 문법
SELECT * FROM employees ORDER BY emp_id LIMIT 3, 3;
-- LIMIT offset, count`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," SELECT 실행 순서"]}),e.jsx("p",{children:"SQL SELECT 문의 논리적 실행 순서를 이해하면 쿼리 작성이 쉬워집니다."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"FROM"})," - 테이블 지정"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"WHERE"})," - 행 필터링"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"GROUP BY"})," - 그룹화"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"HAVING"})," - 그룹 필터링"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SELECT"})," - 컬럼 선택 (별칭 부여)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ORDER BY"})," - 정렬"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"LIMIT"})," - 결과 제한"]})]}),e.jsx("p",{children:"이 순서 때문에 WHERE에서 SELECT의 별칭을 사용할 수 없고, ORDER BY에서는 별칭 사용이 가능합니다."})]}),e.jsx("h2",{children:"5. JOIN 5종"}),e.jsxs("p",{children:["JOIN은 ",e.jsx("strong",{children:"두 개 이상의 테이블을 연결"}),"하여 데이터를 조회하는 방법입니다. 테이블 간의 관계(외래키)를 기반으로 데이터를 결합합니다. 아래 예제에서 사용하는 테이블 구조를 먼저 확인하세요."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL - 예제 데이터"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- employees 테이블                    -- departments 테이블
-- emp_id | emp_name | dept_id         -- dept_id | dept_name
-- -------+----------+---------         -- --------+----------
--   1    | 김자바   |   1              --    1    | 개발팀
--   2    | 이파이썬 |   1              --    2    | 인사팀
--   3    | 박스프링 |   1              --    3    | 마케팅팀
--   4    | 최인사   |   2              --    4    | 영업팀
--   5    | 정마케팅 |   3              --    5    | 기획팀 (사원 없음)
--   6    | 한프리   |  NULL            -- (한프리는 부서 미배정)`})})]}),e.jsx("h3",{children:"5-1. INNER JOIN (내부 조인)"}),e.jsxs("p",{children:["양쪽 테이블에서 ",e.jsx("strong",{children:"조건에 일치하는 행만"})," 반환합니다. 가장 많이 사용하는 JOIN으로, 매칭되지 않는 행은 결과에 포함되지 않습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- INNER JOIN: 양쪽 모두 매칭되는 행만 반환
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
-- ※ 기획팀(사원 없음)도 제외`})})]}),e.jsx("h3",{children:"5-2. LEFT (OUTER) JOIN (왼쪽 외부 조인)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"왼쪽 테이블의 모든 행"}),'을 반환하고, 오른쪽 테이블에서 매칭되는 행이 없으면 NULL로 채웁니다. "모든 사원을 보되, 부서 정보도 함께" 조회할 때 사용합니다.']}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- LEFT JOIN: 왼쪽(employees) 테이블의 모든 행 반환
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
-- 한프리   | 4000000  | NULL      ← 부서 미배정 사원도 포함!`})})]}),e.jsx("h3",{children:"5-3. RIGHT (OUTER) JOIN (오른쪽 외부 조인)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"오른쪽 테이블의 모든 행"}),"을 반환하고, 왼쪽 테이블에서 매칭되는 행이 없으면 NULL로 채웁니다. LEFT JOIN을 뒤집은 것과 같습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- RIGHT JOIN: 오른쪽(departments) 테이블의 모든 행 반환
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
-- NULL     | NULL     | 기획팀     ← 사원 없는 부서도 포함!`})})]}),e.jsx("h3",{children:"5-4. FULL OUTER JOIN (완전 외부 조인)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"양쪽 테이블의 모든 행"}),"을 반환합니다. 매칭되지 않는 행은 NULL로 채웁니다. MySQL은 FULL OUTER JOIN을 직접 지원하지 않아 UNION으로 대체합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- FULL OUTER JOIN (PostgreSQL, Oracle)
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
-- NULL     | NULL     | 기획팀     ← 사원 없는 부서`})})]}),e.jsx("h3",{children:"5-5. CROSS JOIN (교차 조인)"}),e.jsxs("p",{children:["양쪽 테이블의 ",e.jsx("strong",{children:"모든 행 조합(카테시안 곱)"}),"을 반환합니다. 조인 조건 없이 모든 가능한 쌍을 생성하므로, 결과 행 수 = 왼쪽 행 수 x 오른쪽 행 수입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- CROSS JOIN: 모든 조합 생성
SELECT e.emp_name, d.dept_name
FROM employees e
CROSS JOIN departments d;
-- 6명 x 5부서 = 30행 결과

-- 실무 활용 예: 날짜와 카테고리의 모든 조합 생성
SELECT d.date_val, c.category_name
FROM dates d
CROSS JOIN categories c;
-- 리포트에서 빈 날짜/카테고리도 표시하고 싶을 때 활용`})})]}),e.jsx("h3",{children:"JOIN 5종 요약"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"JOIN 종류"}),e.jsx("th",{children:"반환 결과"}),e.jsx("th",{children:"사용 상황"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"INNER JOIN"})}),e.jsx("td",{children:"양쪽 모두 매칭되는 행"}),e.jsx("td",{children:"기본적인 테이블 결합"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"LEFT JOIN"})}),e.jsx("td",{children:"왼쪽 전체 + 오른쪽 매칭"}),e.jsx("td",{children:"모든 사원 + 부서 정보 (없으면 NULL)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"RIGHT JOIN"})}),e.jsx("td",{children:"오른쪽 전체 + 왼쪽 매칭"}),e.jsx("td",{children:"모든 부서 + 사원 정보 (없으면 NULL)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"FULL OUTER JOIN"})}),e.jsx("td",{children:"양쪽 모든 행"}),e.jsx("td",{children:"양쪽 모두 누락 없이 확인"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"CROSS JOIN"})}),e.jsx("td",{children:"모든 행의 조합 (곱집합)"}),e.jsx("td",{children:"조합 생성, 리포트 골격"})]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," JOIN 성능 팁"]}),e.jsxs("p",{children:["JOIN의 ON 절에 사용하는 컬럼에는 ",e.jsx("strong",{children:"인덱스(INDEX)"}),"를 생성하면 조회 성능이 크게 향상됩니다. 외래키를 설정하면 자동으로 인덱스가 생성되는 DBMS도 있습니다(MySQL InnoDB). 또한, 필요한 컬럼만 SELECT하고 ",e.jsx("code",{children:"*"})," 사용을 지양하면 네트워크 비용을 줄일 수 있습니다."]})]}),e.jsx("h2",{children:"6. 서브쿼리"}),e.jsxs("p",{children:[e.jsx("strong",{children:"서브쿼리(Subquery)"}),"는 SQL 문 안에 포함된 또 다른 SELECT 문입니다. 위치에 따라 세 가지로 분류되며, 복잡한 조건이나 계산을 하나의 쿼리로 해결할 수 있습니다."]}),e.jsx("h3",{children:"6-1. WHERE 절 서브쿼리"}),e.jsx("p",{children:"조건절에서 비교할 값을 동적으로 가져올 때 사용합니다. 가장 일반적인 형태의 서브쿼리입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 단일 행 서브쿼리: 평균 급여보다 높은 사원 조회
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
);`})})]}),e.jsx("h3",{children:"6-2. FROM 절 서브쿼리 (인라인 뷰)"}),e.jsxs("p",{children:["FROM 절에 서브쿼리를 사용하면 ",e.jsx("strong",{children:"임시 테이블(인라인 뷰)"}),"처럼 활용할 수 있습니다. 반드시 ",e.jsx("strong",{children:"별칭(Alias)"}),"을 지정해야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 부서별 통계를 구한 후 추가 필터링
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
GROUP BY sub.급여등급;`})})]}),e.jsx("h3",{children:"6-3. SELECT 절 서브쿼리 (스칼라 서브쿼리)"}),e.jsxs("p",{children:["SELECT 절에 서브쿼리를 사용하면 각 행마다 계산된 ",e.jsx("strong",{children:"단일 값"}),"을 반환합니다. 반드시 ",e.jsx("strong",{children:"하나의 행, 하나의 컬럼"}),"만 반환해야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 각 사원의 급여와 전체 평균 급여 비교
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
INNER JOIN departments d ON e.dept_id = d.dept_id;`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 서브쿼리 vs JOIN"]}),e.jsxs("p",{children:["서브쿼리로 작성할 수 있는 대부분의 쿼리는 JOIN으로도 작성할 수 있습니다. 일반적으로 ",e.jsx("strong",{children:"JOIN이 성능면에서 유리"}),"한 경우가 많습니다(옵티마이저가 최적화하기 쉬움). 단, EXISTS 서브쿼리는 조기 종료가 가능하여 JOIN보다 빠를 수 있습니다. 상황에 따라 ",e.jsx("strong",{children:"실행 계획(EXPLAIN)"}),"을 확인하여 선택하세요."]})]}),e.jsx("h2",{children:"7. 인덱스와 제약조건"}),e.jsxs("p",{children:[e.jsx("strong",{children:"제약조건(Constraint)"}),"은 데이터의 무결성을 보장하고,",e.jsx("strong",{children:"인덱스(Index)"}),"는 조회 성능을 향상시키는 데이터베이스 객체입니다."]}),e.jsx("h3",{children:"제약조건 종류"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"제약조건"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"예시"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"PRIMARY KEY"})}),e.jsx("td",{children:"행을 고유하게 식별 (NOT NULL + UNIQUE)"}),e.jsx("td",{children:"emp_id INT PRIMARY KEY"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"FOREIGN KEY"})}),e.jsx("td",{children:"다른 테이블의 PK를 참조"}),e.jsx("td",{children:"REFERENCES departments(dept_id)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"UNIQUE"})}),e.jsx("td",{children:"중복 값 불허 (NULL은 허용)"}),e.jsx("td",{children:"email VARCHAR(100) UNIQUE"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"NOT NULL"})}),e.jsx("td",{children:"NULL 값 불허"}),e.jsx("td",{children:"emp_name VARCHAR(50) NOT NULL"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"CHECK"})}),e.jsx("td",{children:"조건식을 만족하는 값만 허용"}),e.jsxs("td",{children:["CHECK (salary ",">","= 0)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DEFAULT"})}),e.jsx("td",{children:"기본값 설정"}),e.jsx("td",{children:"is_active BOOLEAN DEFAULT TRUE"})]})]})]}),e.jsx("h3",{children:"제약조건 예제"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 제약조건을 포함한 테이블 생성
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
ALTER TABLE employees DROP CONSTRAINT chk_salary;`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," FOREIGN KEY 참조 옵션"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ON DELETE RESTRICT"})," - 자식 행이 있으면 부모 행 삭제 불가 (기본값)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ON DELETE CASCADE"})," - 부모 행 삭제 시 자식 행도 함께 삭제"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ON DELETE SET NULL"})," - 부모 행 삭제 시 자식의 FK를 NULL로 설정"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ON UPDATE CASCADE"})," - 부모 PK 변경 시 자식의 FK도 함께 변경"]})]})]}),e.jsx("h3",{children:"인덱스 (INDEX)"}),e.jsxs("p",{children:["인덱스는 테이블의 데이터를 빠르게 검색하기 위한 자료구조입니다. 책의 색인(목차)처럼, 원하는 데이터의 위치를 빠르게 찾을 수 있게 해줍니다. 대부분의 DBMS는 내부적으로 ",e.jsx("strong",{children:"B-Tree"})," 구조를 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 단일 컬럼 인덱스 생성
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
EXPLAIN SELECT * FROM employees WHERE emp_name = '김자바';`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," 인덱스 주의사항"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"무조건 좋은 것이 아닙니다"})," - INSERT/UPDATE/DELETE 시 인덱스도 갱신되어 쓰기 성능 저하"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"카디널리티가 높은 컬럼"}),"에 생성하세요 - 성별(M/F)처럼 값의 종류가 적은 컬럼은 효과 미미"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"WHERE, JOIN, ORDER BY"}),"에 자주 사용하는 컬럼에 생성하세요"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"복합 인덱스"}),"는 컬럼 순서가 중요합니다 (왼쪽부터 매칭)"]}),e.jsxs("li",{children:["테이블당 인덱스는 ",e.jsx("strong",{children:"3~5개 이하"}),"를 권장합니다"]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 자동 생성 인덱스"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"PRIMARY KEY"}),"를 설정하면 자동으로 클러스터드 인덱스(Clustered Index)가 생성됩니다.",e.jsx("strong",{children:"UNIQUE"})," 제약조건도 자동으로 유니크 인덱스를 생성합니다. 따라서 이미 PK나 UNIQUE인 컬럼에 별도 인덱스를 생성할 필요가 없습니다."]})]}),e.jsx("h2",{children:"8. 연습문제"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제 1: DDL"]}),e.jsx("p",{children:"다음 요구사항에 맞는 테이블을 생성하는 SQL을 작성하세요."}),e.jsxs("ul",{children:[e.jsxs("li",{children:["테이블명: ",e.jsx("code",{children:"orders"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"order_id"}),": 정수, 기본키, 자동 증가"]}),e.jsxs("li",{children:[e.jsx("code",{children:"customer_name"}),": 가변 문자열(50), NOT NULL"]}),e.jsxs("li",{children:[e.jsx("code",{children:"product_name"}),": 가변 문자열(100), NOT NULL"]}),e.jsxs("li",{children:[e.jsx("code",{children:"quantity"}),": 정수, 기본값 1, 1 이상이어야 함"]}),e.jsxs("li",{children:[e.jsx("code",{children:"total_price"}),": 소수점(10,2), 0보다 커야 함"]}),e.jsxs("li",{children:[e.jsx("code",{children:"order_date"}),": TIMESTAMP, 기본값 현재시간"]}),e.jsxs("li",{children:[e.jsx("code",{children:"status"}),": 가변 문자열(20), 기본값 'PENDING'"]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL - 정답"]})}),e.jsx("pre",{children:e.jsx("code",{children:`CREATE TABLE orders (
    order_id       INT           PRIMARY KEY AUTO_INCREMENT,
    customer_name  VARCHAR(50)   NOT NULL,
    product_name   VARCHAR(100)  NOT NULL,
    quantity       INT           DEFAULT 1 CHECK (quantity >= 1),
    total_price    DECIMAL(10,2) CHECK (total_price > 0),
    order_date     TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
    status         VARCHAR(20)   DEFAULT 'PENDING'
);`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제 2: DML"]}),e.jsx("p",{children:"아래 쿼리의 결과를 예측하세요."}),e.jsxs("div",{className:"code-block",style:{marginTop:"8px"},children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL"]})}),e.jsx("pre",{children:e.jsx("code",{children:`SELECT dept_id, COUNT(*) AS cnt, AVG(salary) AS avg_sal
FROM employees
WHERE is_active = TRUE
GROUP BY dept_id
HAVING COUNT(*) >= 2
ORDER BY avg_sal DESC;`})})]}),e.jsxs("p",{style:{marginTop:"12px"},children:[e.jsx("strong",{children:"힌트:"})," WHERE로 활성 사원만 필터링 → dept_id로 그룹화 → 2명 이상인 그룹만 → 평균 급여 내림차순 정렬"]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제 3: JOIN"]}),e.jsx("p",{children:"다음 요구사항을 만족하는 쿼리를 작성하세요."}),e.jsxs("ol",{children:[e.jsx("li",{children:"모든 부서의 이름과 해당 부서의 사원 수를 조회하세요 (사원이 없는 부서도 포함)."}),e.jsx("li",{children:"부서별 평균 급여가 가장 높은 부서의 이름과 평균 급여를 조회하세요."})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL - 정답"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 문제 1: 모든 부서와 사원 수 (사원 없는 부서 포함)
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
LIMIT 1;`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제 4: 서브쿼리"]}),e.jsx("p",{children:"서브쿼리를 활용하여 다음 쿼리를 작성하세요."}),e.jsxs("ol",{children:[e.jsx("li",{children:"자신이 속한 부서의 평균 급여보다 높은 급여를 받는 사원의 이름과 급여를 조회하세요."}),e.jsx("li",{children:"사원이 한 명도 없는 부서의 이름을 조회하세요 (NOT EXISTS 사용)."})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL - 정답"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 문제 1: 부서 평균 급여보다 높은 사원 (상관 서브쿼리)
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
);`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제 5: 인덱스와 제약조건"]}),e.jsx("p",{children:"다음 질문에 답하세요."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"employees"})," 테이블에서 ",e.jsx("code",{children:"email"})," 컬럼으로 자주 조회한다면 어떤 인덱스를 생성해야 할까요?"]}),e.jsxs("li",{children:[e.jsx("code",{children:"orders"})," 테이블의 ",e.jsx("code",{children:"status"})," 컬럼(값: PENDING, CONFIRMED, SHIPPED, DELIVERED)에 인덱스를 생성하면 효과적일까요? 이유를 설명하세요."]}),e.jsxs("li",{children:["복합 인덱스 ",e.jsx("code",{children:"CREATE INDEX idx ON orders(customer_id, order_date)"}),"가 있을 때, ",e.jsx("code",{children:"WHERE order_date = '2024-01-01'"})," 조건만으로 이 인덱스를 활용할 수 있을까요?"]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," SQL - 정답"]})}),e.jsx("pre",{children:e.jsx("code",{children:`-- 문제 1: email은 고유하므로 UNIQUE INDEX 권장
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
-- 해결: order_date 단독 인덱스를 추가 생성`})})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${d("PR04")?"btn-primary":"btn-accent"}`,onClick:()=>l("PR04"),children:d("PR04")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/practical/03",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Maven과 Gradle"]}),e.jsxs(s,{to:"/practical/05",children:["다음: JDBC 심화 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{r as default};
