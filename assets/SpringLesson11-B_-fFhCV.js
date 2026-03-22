import{u as r,r as a,j as e,L as t}from"./index-ClQdwy-A.js";import{J as n}from"./JavaCodeRunner-CK75Apv7.js";function d(){const{completeLesson:i,isLessonCompleted:s}=r();return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 11"})]}),e.jsx("h1",{children:"Lesson 11. Spring Data JPA"}),e.jsx("p",{children:"JPA와 ORM의 개념을 이해하고 Spring Data JPA로 데이터베이스를 다루는 방법을 배웁니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. JPA란?"}),e.jsx("p",{children:"JPA(Java Persistence API)는 자바 ORM 기술의 표준 명세입니다. ORM(Object-Relational Mapping)은 객체와 관계형 데이터베이스 테이블을 매핑하는 기술입니다."}),e.jsxs("table",{className:"info-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"JPA"})}),e.jsx("td",{children:"ORM 기술의 표준 인터페이스 (명세)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Hibernate"})}),e.jsx("td",{children:"JPA의 가장 대표적인 구현체"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring Data JPA"})}),e.jsx("td",{children:"JPA를 더 쉽게 사용하기 위한 Spring 모듈"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," ORM이 필요한 이유"]}),e.jsx("p",{children:"객체지향 프로그래밍과 관계형 DB 사이에는 패러다임 불일치가 있습니다. 상속, 연관관계, 객체 그래프 탐색 등에서 차이가 발생하며, ORM은 이 간극을 자동으로 해결해 줍니다. SQL을 직접 작성하는 대신 객체를 다루는 것만으로 DB 작업이 가능합니다."})]}),e.jsx("h2",{children:"2. 엔티티 클래스"}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Post.java (엔티티)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity                          // JPA 엔티티 선언
@Table(name = "posts")           // 테이블명 지정 (생략 시 클래스명)
public class Post {

    @Id                          // PK 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // AUTO_INCREMENT
    private Long id;

    @Column(nullable = false, length = 200)  // NOT NULL, VARCHAR(200)
    private String title;

    @Column(columnDefinition = "TEXT")       // TEXT 타입
    private String content;

    @Column(nullable = false, length = 50)
    private String author;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // JPA는 기본 생성자가 필수
    protected Post() {}

    public Post(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    @PrePersist  // INSERT 전에 자동 실행
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate   // UPDATE 전에 자동 실행
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    // Getter, Setter 생략 (Lombok @Getter @Setter 사용 권장)
}`})})]}),e.jsx("h2",{children:"3. 연관관계 매핑"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 연관관계 매핑 예제"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// User (1) <-> Post (N) 관계

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;

    // 1:N 관계 - User 하나가 여러 Post를 작성
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Post> posts = new ArrayList<>();
}

@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    // N:1 관계 - 여러 Post가 하나의 User에 속함
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")  // FK 컬럼명
    private User user;
}

// N:M 관계 (중간 테이블 자동 생성)
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "tags")
    private List<Post> posts = new ArrayList<>();
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsx("p",{children:"@ManyToMany는 실무에서 잘 사용하지 않습니다. 대신 중간 엔티티(PostTag)를 만들어 @ManyToOne 두 개로 풀어내는 것이 좋습니다. 또한 fetch = FetchType.LAZY를 기본으로 사용하여 N+1 문제를 예방하세요."})]}),e.jsx("h2",{children:"4. JpaRepository 인터페이스"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PostRepository.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository<엔티티 타입, PK 타입>을 상속하면
// 기본 CRUD 메서드가 자동 생성됩니다!
public interface PostRepository extends JpaRepository<Post, Long> {
    // 인터페이스만 정의하면 Spring Data JPA가 구현체를 자동 생성

    // 기본 제공 메서드들:
    // save(entity)          - INSERT / UPDATE
    // findById(id)          - SELECT by PK
    // findAll()             - SELECT ALL
    // deleteById(id)        - DELETE by PK
    // count()               - COUNT
    // existsById(id)        - EXISTS
}`})})]}),e.jsx("h2",{children:"5. 쿼리 메서드"}),e.jsx("p",{children:"메서드 이름 규칙에 따라 자동으로 쿼리가 생성됩니다."}),e.jsxs("table",{className:"info-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"메서드 이름"}),e.jsx("th",{children:"생성되는 SQL"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"findByTitle(String title)"})}),e.jsx("td",{children:"WHERE title = ?"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"findByTitleContaining(String keyword)"})}),e.jsx("td",{children:"WHERE title LIKE %?%"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"findByAuthorAndTitle(String a, String t)"})}),e.jsx("td",{children:"WHERE author = ? AND title = ?"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"findByCreatedAtAfter(LocalDateTime date)"})}),e.jsxs("td",{children:["WHERE created_at ",">"," ?"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"findTop5ByOrderByCreatedAtDesc()"})}),e.jsx("td",{children:"ORDER BY created_at DESC LIMIT 5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"countByAuthor(String author)"})}),e.jsx("td",{children:"SELECT COUNT(*) WHERE author = ?"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"existsByTitle(String title)"})}),e.jsx("td",{children:"SELECT EXISTS(WHERE title = ?)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"deleteByAuthor(String author)"})}),e.jsx("td",{children:"DELETE WHERE author = ?"})]})]})]}),e.jsx("h2",{children:"6. @Query와 JPQL"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PostRepository.java (커스텀 쿼리)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public interface PostRepository extends JpaRepository<Post, Long> {

    // JPQL (Java Persistence Query Language) - 엔티티 기반 쿼리
    @Query("SELECT p FROM Post p WHERE p.title LIKE %:keyword% OR p.content LIKE %:keyword%")
    List<Post> searchByKeyword(@Param("keyword") String keyword);

    // 네이티브 SQL 쿼리
    @Query(value = "SELECT * FROM posts WHERE author = :author ORDER BY created_at DESC",
           nativeQuery = true)
    List<Post> findByAuthorNative(@Param("author") String author);

    // DTO로 직접 조회 (프로젝션)
    @Query("SELECT new com.example.dto.PostSummary(p.id, p.title, p.author) FROM Post p")
    List<PostSummary> findAllSummaries();

    // UPDATE/DELETE 쿼리
    @Modifying
    @Query("UPDATE Post p SET p.title = :title WHERE p.id = :id")
    int updateTitle(@Param("id") Long id, @Param("title") String title);
}`})})]}),e.jsx("h2",{children:"7. 페이징과 정렬"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 페이징 활용"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Page<Post> findByAuthor(String author, Pageable pageable);
}

// Service
public Page<PostDto> getPosts(int page, int size, String sort) {
    Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, sort));
    Page<Post> posts = postRepository.findAll(pageable);

    // Entity -> DTO 변환
    return posts.map(PostDto::from);
}

// Controller
@GetMapping
public Page<PostDto> getPosts(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "createdAt") String sort) {
    return postService.getPosts(page, size, sort);
}

// 응답 JSON:
// {
//   "content": [...],        // 데이터 목록
//   "totalElements": 100,    // 전체 데이터 수
//   "totalPages": 10,        // 전체 페이지 수
//   "number": 0,             // 현재 페이지 번호
//   "size": 10               // 페이지 크기
// }`})})]}),e.jsx(n,{defaultCode:`// JPA Entity 개념 이해하기
// 실제 JPA 없이 Entity-DTO 패턴을 실습합니다.

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

public class Main {

    // Entity (DB 테이블과 매핑되는 클래스)
    static class Post {
        private Long id;
        private String title;
        private String content;
        private String author;
        private LocalDateTime createdAt;

        public Post(Long id, String title, String content, String author) {
            this.id = id;
            this.title = title;
            this.content = content;
            this.author = author;
            this.createdAt = LocalDateTime.now();
        }

        public Long getId() { return id; }
        public String getTitle() { return title; }
        public String getContent() { return content; }
        public String getAuthor() { return author; }
        public LocalDateTime getCreatedAt() { return createdAt; }
    }

    // 간단한 Repository 시뮬레이션
    static class PostRepository {
        private final List<Post> db = new ArrayList<>();
        private Long sequence = 1L;

        public Post save(Post post) {
            db.add(post);
            return post;
        }

        public Optional<Post> findById(Long id) {
            return db.stream().filter(p -> p.getId().equals(id)).findFirst();
        }

        public List<Post> findAll() { return new ArrayList<>(db); }

        public List<Post> findByAuthor(String author) {
            return db.stream()
                .filter(p -> p.getAuthor().equals(author))
                .collect(Collectors.toList());
        }

        public long count() { return db.size(); }
    }

    public static void main(String[] args) {
        PostRepository repo = new PostRepository();

        // save
        repo.save(new Post(1L, "JPA 기초", "JPA 내용...", "홍길동"));
        repo.save(new Post(2L, "Spring Data JPA", "Spring 내용...", "홍길동"));
        repo.save(new Post(3L, "REST API 만들기", "REST 내용...", "김영희"));

        // findAll
        System.out.println("=== 전체 조회 ===");
        repo.findAll().forEach(p ->
            System.out.println("  " + p.getId() + ". " + p.getTitle() + " - " + p.getAuthor()));

        // findById
        System.out.println("\\n=== ID로 조회 ===");
        repo.findById(2L).ifPresent(p ->
            System.out.println("  찾음: " + p.getTitle()));

        // findByAuthor (쿼리 메서드)
        System.out.println("\\n=== 저자로 조회 (쿼리 메서드) ===");
        repo.findByAuthor("홍길동").forEach(p ->
            System.out.println("  " + p.getTitle()));

        // count
        System.out.println("\\n전체 게시글 수: " + repo.count());
    }
}`,title:"JPA Repository 패턴 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"User 엔티티를 @Entity로 정의하고, username, email, createdAt 필드를 매핑해 보세요."}),e.jsx("li",{children:"User와 Post의 1:N 관계를 @OneToMany, @ManyToOne으로 설정해 보세요."}),e.jsx("li",{children:"findByEmailContaining, findTop3ByOrderByCreatedAtDesc 쿼리 메서드를 작성하고 테스트해 보세요."}),e.jsx("li",{children:"@Query를 사용하여 특정 기간 내 게시글을 조회하는 JPQL을 작성해 보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("SP11")?"btn-secondary":"btn-accent"}`,onClick:()=>i("SP11"),children:s("SP11")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/spring/10",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: REST API 설계와 구현"]}),e.jsxs(t,{to:"/spring/12",children:["다음: 예외처리와 응답 표준화 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
