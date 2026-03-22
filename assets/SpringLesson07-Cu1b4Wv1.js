import{u as a,r as t,j as e,L as r}from"./index-DE-ywqhK.js";import{J as m}from"./JavaCodeRunner-sN0FAbqM.js";function d(){const{completeLesson:i,isLessonCompleted:s}=a();return t.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 07"})]}),e.jsx("h1",{children:"Lesson 07. MyBatis 연동"}),e.jsx("p",{children:"MyBatis의 SQL Mapper 방식을 이해하고, Spring과 통합하여 데이터베이스를 다루는 방법을 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. MyBatis 소개"}),e.jsxs("p",{children:["MyBatis는 ",e.jsx("strong",{children:"SQL Mapper 프레임워크"}),"로, SQL을 직접 작성하면서도 Java 객체와 자동으로 매핑해주는 도구입니다. 국내 기업에서 가장 많이 사용하는 데이터 접근 기술 중 하나입니다."]}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"MyBatis (SQL Mapper)"}),e.jsx("th",{children:"JPA (ORM)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"SQL 작성"})}),e.jsx("td",{children:"개발자가 직접 작성"}),e.jsx("td",{children:"자동 생성 (JPQL)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"학습 곡선"})}),e.jsx("td",{children:"낮음 (SQL 지식 활용)"}),e.jsx("td",{children:"높음 (영속성 컨텍스트 등)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"복잡한 쿼리"})}),e.jsx("td",{children:"유연하게 작성 가능"}),e.jsx("td",{children:"네이티브 쿼리 필요할 수 있음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DB 종속성"})}),e.jsx("td",{children:"특정 DB SQL에 종속"}),e.jsx("td",{children:"DB 독립적 (Dialect)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"캐싱"})}),e.jsx("td",{children:"1차 캐시 (세션 단위)"}),e.jsx("td",{children:"1차/2차 캐시"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"국내 사용"})}),e.jsx("td",{children:"매우 많음 (공공기관, 금융)"}),e.jsx("td",{children:"증가 추세 (스타트업)"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 왜 MyBatis인가?"]}),e.jsx("p",{children:"국내 SI/금융/공공 프로젝트에서는 복잡한 SQL과 기존 프로시저를 활용해야 하는 경우가 많아 MyBatis가 널리 사용됩니다. SQL을 직접 제어할 수 있어 성능 튜닝이 용이합니다."})]}),e.jsx("h2",{children:"2. MyBatis 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle"]})}),e.jsx("pre",{children:e.jsx("code",{children:`dependencies {
    // MyBatis Spring Boot Starter
    implementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter:3.0.3'

    // 데이터베이스 드라이버
    runtimeOnly 'com.mysql:mysql-connector-j'

    // 개발용 H2 DB (선택)
    runtimeOnly 'com.h2database:h2'
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," application.yml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`spring:
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
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl`})})]}),e.jsx("h2",{children:"3. Mapper XML 작성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberMapper.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
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

</mapper>`})})]}),e.jsx("h2",{children:"4. Mapper 인터페이스"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberMapper.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Mapper  // MyBatis Mapper로 등록
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
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsx("p",{children:"간단한 SQL은 어노테이션(@Select, @Insert 등)으로, 복잡한 SQL(동적 SQL, 조인)은 XML 방식으로 작성하는 것이 좋습니다. 대부분의 실무 프로젝트에서는 XML 방식을 선호합니다."})]}),e.jsx("h2",{children:"5. 동적 SQL"}),e.jsx("p",{children:"MyBatis의 가장 강력한 기능 중 하나로, 조건에 따라 SQL을 동적으로 생성합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DynamicSQL.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<mapper namespace="com.example.mapper.MemberMapper">

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

</mapper>`})})]}),e.jsx("h2",{children:"6. 결과 매핑"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ResultMapExample.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<mapper namespace="com.example.mapper.OrderMapper">

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

</mapper>`})})]}),e.jsx("h2",{children:"7. Spring + MyBatis 통합 실전"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberService.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Service
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
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요."})]}),e.jsx("h3",{children:"Mapper 인터페이스 개념 체험"}),e.jsx(m,{defaultCode:`// MyBatis Mapper 패턴을 순수 Java로 시뮬레이션

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
}`,title:"MyBatis Mapper 인터페이스 개념 체험"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"MyBatis와 JPA(Hibernate)의 차이점을 3가지 이상 비교하세요."}),e.jsxs("li",{children:["동적 SQL에서 ",e.jsx("code",{children:"<where>"})," 태그의 역할을 설명하세요."]}),e.jsx("li",{children:"resultMap의 association과 collection의 차이를 설명하세요."}),e.jsx("li",{children:"게시판(Board) 테이블에 대한 CRUD Mapper XML을 작성해보세요."}),e.jsxs("li",{children:[e.jsx("code",{children:"map-underscore-to-camel-case: true"})," 설정의 역할을 설명하세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("SP07")?"btn-primary":"btn-accent"}`,onClick:()=>i("SP07"),children:s("SP07")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/spring/06",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 데이터 바인딩과 검증"]}),e.jsxs(r,{to:"/spring/08",children:["다음: Spring Security 기초 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
