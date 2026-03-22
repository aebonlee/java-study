import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson07() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/spring">스프링 과정</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Lesson 07</span>
          </div>
          <h1>Lesson 07. MyBatis 연동</h1>
          <p>MyBatis의 SQL Mapper 방식을 이해하고, Spring과 통합하여 데이터베이스를 다루는 방법을 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. MyBatis 소개</h2>
          <p>
            MyBatis는 <strong>SQL Mapper 프레임워크</strong>로, SQL을 직접 작성하면서도
            Java 객체와 자동으로 매핑해주는 도구입니다. 국내 기업에서 가장 많이 사용하는
            데이터 접근 기술 중 하나입니다.
          </p>

          <table className="comparison-table">
            <thead>
              <tr><th>구분</th><th>MyBatis (SQL Mapper)</th><th>JPA (ORM)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>SQL 작성</strong></td><td>개발자가 직접 작성</td><td>자동 생성 (JPQL)</td></tr>
              <tr><td><strong>학습 곡선</strong></td><td>낮음 (SQL 지식 활용)</td><td>높음 (영속성 컨텍스트 등)</td></tr>
              <tr><td><strong>복잡한 쿼리</strong></td><td>유연하게 작성 가능</td><td>네이티브 쿼리 필요할 수 있음</td></tr>
              <tr><td><strong>DB 종속성</strong></td><td>특정 DB SQL에 종속</td><td>DB 독립적 (Dialect)</td></tr>
              <tr><td><strong>캐싱</strong></td><td>1차 캐시 (세션 단위)</td><td>1차/2차 캐시</td></tr>
              <tr><td><strong>국내 사용</strong></td><td>매우 많음 (공공기관, 금융)</td><td>증가 추세 (스타트업)</td></tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 왜 MyBatis인가?</div>
            <p>국내 SI/금융/공공 프로젝트에서는 복잡한 SQL과 기존 프로시저를 활용해야 하는 경우가 많아
            MyBatis가 널리 사용됩니다. SQL을 직접 제어할 수 있어 성능 튜닝이 용이합니다.</p>
          </div>

          <h2>2. MyBatis 설정</h2>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> build.gradle</span></div>
            <pre><code>{`dependencies {
    // MyBatis Spring Boot Starter
    implementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter:3.0.3'

    // 데이터베이스 드라이버
    runtimeOnly 'com.mysql:mysql-connector-j'

    // 개발용 H2 DB (선택)
    runtimeOnly 'com.h2database:h2'
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> application.yml</span></div>
            <pre><code>{`spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=Asia/Seoul
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver

mybatis:
  # Mapper XML 파일 위치
  mapper-locations: classpath:mapper/**/*.xml
  # DTO 패키지 (타입 별칭 자동 등록)
  type-aliases-package: com.example.dto
  configuration:
    # 카멜케이스 자동 변환 (user_name → userName)
    map-underscore-to-camel-case: true
    # SQL 로그 출력
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl`}</code></pre>
          </div>

          <h2>3. Mapper XML 작성</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberMapper.xml</span></div>
            <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.example.mapper.MemberMapper">

    <!-- SELECT: 단건 조회 -->
    <select id="findById" parameterType="long" resultType="Member">
        SELECT member_id, name, email, age, created_at
        FROM members
        WHERE member_id = #{id}
    </select>

    <!-- SELECT: 목록 조회 -->
    <select id="findAll" resultType="Member">
        SELECT member_id, name, email, age, created_at
        FROM members
        ORDER BY created_at DESC
    </select>

    <!-- INSERT: 등록 (자동 생성 키 반환) -->
    <insert id="insert" parameterType="Member"
            useGeneratedKeys="true" keyProperty="memberId">
        INSERT INTO members (name, email, age, created_at)
        VALUES (#{name}, #{email}, #{age}, NOW())
    </insert>

    <!-- UPDATE: 수정 -->
    <update id="update" parameterType="Member">
        UPDATE members
        SET name = #{name},
            email = #{email},
            age = #{age}
        WHERE member_id = #{memberId}
    </update>

    <!-- DELETE: 삭제 -->
    <delete id="delete" parameterType="long">
        DELETE FROM members
        WHERE member_id = #{id}
    </delete>

    <!-- SELECT: 조건 검색 (LIKE) -->
    <select id="searchByName" parameterType="string" resultType="Member">
        SELECT member_id, name, email, age, created_at
        FROM members
        WHERE name LIKE CONCAT('%', #{keyword}, '%')
    </select>

</mapper>`}</code></pre>
          </div>

          <h2>4. Mapper 인터페이스</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberMapper.java</span></div>
            <pre><code>{`@Mapper  // MyBatis Mapper로 등록
public interface MemberMapper {

    // XML의 <select id="findById">와 매핑
    Member findById(Long id);

    List<Member> findAll();

    // 등록 후 자동 생성된 ID가 member.memberId에 세팅됨
    int insert(Member member);

    int update(Member member);

    int delete(Long id);

    List<Member> searchByName(String keyword);
}

// 어노테이션 방식 (간단한 SQL에 적합)
@Mapper
public interface SimpleMapper {

    @Select("SELECT * FROM products WHERE id = #{id}")
    Product findById(Long id);

    @Insert("INSERT INTO products (name, price) VALUES (#{name}, #{price})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    int insert(Product product);

    @Update("UPDATE products SET name=#{name}, price=#{price} WHERE id=#{id}")
    int update(Product product);

    @Delete("DELETE FROM products WHERE id = #{id}")
    int delete(Long id);
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>간단한 SQL은 어노테이션(@Select, @Insert 등)으로, 복잡한 SQL(동적 SQL, 조인)은
            XML 방식으로 작성하는 것이 좋습니다. 대부분의 실무 프로젝트에서는 XML 방식을 선호합니다.</p>
          </div>

          <h2>5. 동적 SQL</h2>
          <p>MyBatis의 가장 강력한 기능 중 하나로, 조건에 따라 SQL을 동적으로 생성합니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> DynamicSQL.xml</span></div>
            <pre><code>{`<mapper namespace="com.example.mapper.MemberMapper">

    <!-- if: 조건부 SQL -->
    <select id="search" parameterType="SearchCondition" resultType="Member">
        SELECT * FROM members
        WHERE 1=1
        <if test="name != null and name != ''">
            AND name LIKE CONCAT('%', #{name}, '%')
        </if>
        <if test="email != null and email != ''">
            AND email = #{email}
        </if>
        <if test="minAge != null">
            AND age >= #{minAge}
        </if>
    </select>

    <!-- choose/when/otherwise: switch-case와 유사 -->
    <select id="findByType" resultType="Member">
        SELECT * FROM members
        <where>
            <choose>
                <when test="searchType == 'name'">
                    name LIKE CONCAT('%', #{keyword}, '%')
                </when>
                <when test="searchType == 'email'">
                    email LIKE CONCAT('%', #{keyword}, '%')
                </when>
                <otherwise>
                    name LIKE CONCAT('%', #{keyword}, '%')
                    OR email LIKE CONCAT('%', #{keyword}, '%')
                </otherwise>
            </choose>
        </where>
    </select>

    <!-- foreach: IN 절 또는 배치 INSERT -->
    <select id="findByIds" resultType="Member">
        SELECT * FROM members
        WHERE member_id IN
        <foreach item="id" collection="ids"
                 open="(" separator="," close=")">
            #{id}
        </foreach>
    </select>

    <!-- foreach: 배치 INSERT -->
    <insert id="insertBatch" parameterType="list">
        INSERT INTO members (name, email, age) VALUES
        <foreach item="m" collection="list" separator=",">
            (#{m.name}, #{m.email}, #{m.age})
        </foreach>
    </insert>

    <!-- set: 동적 UPDATE (null이 아닌 필드만 수정) -->
    <update id="updateSelective" parameterType="Member">
        UPDATE members
        <set>
            <if test="name != null">name = #{name},</if>
            <if test="email != null">email = #{email},</if>
            <if test="age != null">age = #{age},</if>
        </set>
        WHERE member_id = #{memberId}
    </update>

</mapper>`}</code></pre>
          </div>

          <h2>6. 결과 매핑</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ResultMapExample.xml</span></div>
            <pre><code>{`<mapper namespace="com.example.mapper.OrderMapper">

    <!-- resultMap: 복잡한 매핑 정의 -->
    <resultMap id="orderResultMap" type="Order">
        <id property="orderId" column="order_id"/>
        <result property="orderDate" column="order_date"/>
        <result property="totalAmount" column="total_amount"/>
        <result property="status" column="status"/>

        <!-- association: 1:1 관계 (Order → Member) -->
        <association property="member" javaType="Member">
            <id property="memberId" column="member_id"/>
            <result property="name" column="member_name"/>
            <result property="email" column="member_email"/>
        </association>

        <!-- collection: 1:N 관계 (Order → OrderItems) -->
        <collection property="orderItems" ofType="OrderItem">
            <id property="itemId" column="item_id"/>
            <result property="productName" column="product_name"/>
            <result property="quantity" column="quantity"/>
            <result property="price" column="price"/>
        </collection>
    </resultMap>

    <select id="findOrderDetail" resultMap="orderResultMap">
        SELECT
            o.order_id, o.order_date, o.total_amount, o.status,
            m.member_id, m.name AS member_name, m.email AS member_email,
            oi.item_id, oi.product_name, oi.quantity, oi.price
        FROM orders o
        JOIN members m ON o.member_id = m.member_id
        LEFT JOIN order_items oi ON o.order_id = oi.order_id
        WHERE o.order_id = #{orderId}
    </select>

</mapper>`}</code></pre>
          </div>

          <h2>7. Spring + MyBatis 통합 실전</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberService.java</span></div>
            <pre><code>{`@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberMapper memberMapper;

    public Member findById(Long id) {
        Member member = memberMapper.findById(id);
        if (member == null) {
            throw new MemberNotFoundException("회원을 찾을 수 없습니다: " + id);
        }
        return member;
    }

    public List<Member> findAll() {
        return memberMapper.findAll();
    }

    @Transactional  // 트랜잭션 관리
    public Long register(MemberForm form) {
        Member member = new Member();
        member.setName(form.getName());
        member.setEmail(form.getEmail());
        member.setAge(form.getAge());

        memberMapper.insert(member);
        return member.getMemberId();  // 자동 생성된 ID 반환
    }

    @Transactional
    public void update(Long id, MemberForm form) {
        Member member = findById(id);
        member.setName(form.getName());
        member.setEmail(form.getEmail());
        member.setAge(form.getAge());
        memberMapper.update(member);
    }

    @Transactional
    public void delete(Long id) {
        findById(id);  // 존재 여부 확인
        memberMapper.delete(id);
    }

    public List<Member> search(SearchCondition condition) {
        return memberMapper.search(condition);
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <h3>Mapper 인터페이스 개념 체험</h3>
          <JavaCodeRunner defaultCode={`// MyBatis Mapper 패턴을 순수 Java로 시뮬레이션

import java.util.*;

// DTO
class Member {
    int id;
    String name;
    String email;
    int age;

    Member(int id, String name, String email, int age) {
        this.id = id; this.name = name;
        this.email = email; this.age = age;
    }

    public String toString() {
        return "[" + id + "] " + name + " (" + email + "), " + age + "세";
    }
}

// Mapper 인터페이스 (MyBatis가 구현체를 자동 생성)
interface MemberMapper {
    Member findById(int id);
    List<Member> findAll();
    void insert(Member member);
    void delete(int id);
    List<Member> searchByName(String keyword);
}

// MyBatis가 자동 생성하는 구현체 시뮬레이션
class MemberMapperImpl implements MemberMapper {
    private Map<Integer, Member> db = new LinkedHashMap<>();
    private int nextId = 1;

    public Member findById(int id) {
        System.out.println("  [SQL] SELECT * FROM members WHERE id = " + id);
        return db.get(id);
    }

    public List<Member> findAll() {
        System.out.println("  [SQL] SELECT * FROM members");
        return new ArrayList<>(db.values());
    }

    public void insert(Member m) {
        m.id = nextId++;
        db.put(m.id, m);
        System.out.println("  [SQL] INSERT INTO members VALUES(...)");
    }

    public void delete(int id) {
        db.remove(id);
        System.out.println("  [SQL] DELETE FROM members WHERE id = " + id);
    }

    public List<Member> searchByName(String keyword) {
        System.out.println("  [SQL] SELECT * FROM members WHERE name LIKE '%" + keyword + "%'");
        List<Member> result = new ArrayList<>();
        for (Member m : db.values()) {
            if (m.name.contains(keyword)) result.add(m);
        }
        return result;
    }
}

public class Main {
    public static void main(String[] args) {
        MemberMapper mapper = new MemberMapperImpl();

        System.out.println("=== INSERT ===");
        mapper.insert(new Member(0, "홍길동", "hong@test.com", 25));
        mapper.insert(new Member(0, "김철수", "kim@test.com", 30));
        mapper.insert(new Member(0, "홍길순", "hong2@test.com", 22));

        System.out.println("\\n=== SELECT ALL ===");
        for (Member m : mapper.findAll()) {
            System.out.println("  " + m);
        }

        System.out.println("\\n=== SELECT BY ID ===");
        System.out.println("  결과: " + mapper.findById(1));

        System.out.println("\\n=== SEARCH BY NAME ===");
        List<Member> results = mapper.searchByName("홍");
        for (Member m : results) {
            System.out.println("  " + m);
        }

        System.out.println("\\n=== DELETE ===");
        mapper.delete(2);
        System.out.println("  삭제 후 전체: " + mapper.findAll());
    }
}`} title="MyBatis Mapper 인터페이스 개념 체험" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>MyBatis와 JPA(Hibernate)의 차이점을 3가지 이상 비교하세요.</li>
              <li>동적 SQL에서 <code>&lt;where&gt;</code> 태그의 역할을 설명하세요.</li>
              <li>resultMap의 association과 collection의 차이를 설명하세요.</li>
              <li>게시판(Board) 테이블에 대한 CRUD Mapper XML을 작성해보세요.</li>
              <li><code>map-underscore-to-camel-case: true</code> 설정의 역할을 설명하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP07') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP07')}>
              {isLessonCompleted('SP07') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/06"><i className="fas fa-arrow-left"></i> 이전: 데이터 바인딩과 검증</Link>
            <Link to="/spring/08">다음: Spring Security 기초 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
