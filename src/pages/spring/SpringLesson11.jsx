import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson11() {
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
            <span>Lesson 11</span>
          </div>
          <h1>Lesson 11. Spring Data JPA</h1>
          <p>JPA와 ORM의 개념을 이해하고 Spring Data JPA로 데이터베이스를 다루는 방법을 배웁니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. JPA란?</h2>
          <p>JPA(Java Persistence API)는 자바 ORM 기술의 표준 명세입니다. ORM(Object-Relational Mapping)은 객체와 관계형 데이터베이스 테이블을 매핑하는 기술입니다.</p>

          <table className="info-table">
            <thead><tr><th>구분</th><th>설명</th></tr></thead>
            <tbody>
              <tr><td><strong>JPA</strong></td><td>ORM 기술의 표준 인터페이스 (명세)</td></tr>
              <tr><td><strong>Hibernate</strong></td><td>JPA의 가장 대표적인 구현체</td></tr>
              <tr><td><strong>Spring Data JPA</strong></td><td>JPA를 더 쉽게 사용하기 위한 Spring 모듈</td></tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> ORM이 필요한 이유</div>
            <p>객체지향 프로그래밍과 관계형 DB 사이에는 패러다임 불일치가 있습니다. 상속, 연관관계, 객체 그래프 탐색 등에서 차이가 발생하며, ORM은 이 간극을 자동으로 해결해 줍니다. SQL을 직접 작성하는 대신 객체를 다루는 것만으로 DB 작업이 가능합니다.</p>
          </div>

          <h2>2. 엔티티 클래스</h2>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Post.java (엔티티)</span></div>
            <pre><code>{`import jakarta.persistence.*;
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
}`}</code></pre>
          </div>

          <h2>3. 연관관계 매핑</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 연관관계 매핑 예제</span></div>
            <pre><code>{`// User (1) <-> Post (N) 관계

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
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>@ManyToMany는 실무에서 잘 사용하지 않습니다. 대신 중간 엔티티(PostTag)를 만들어 @ManyToOne 두 개로 풀어내는 것이 좋습니다. 또한 fetch = FetchType.LAZY를 기본으로 사용하여 N+1 문제를 예방하세요.</p>
          </div>

          <h2>4. JpaRepository 인터페이스</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PostRepository.java</span></div>
            <pre><code>{`import org.springframework.data.jpa.repository.JpaRepository;

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
}`}</code></pre>
          </div>

          <h2>5. 쿼리 메서드</h2>
          <p>메서드 이름 규칙에 따라 자동으로 쿼리가 생성됩니다.</p>

          <table className="info-table">
            <thead><tr><th>메서드 이름</th><th>생성되는 SQL</th></tr></thead>
            <tbody>
              <tr><td><code>findByTitle(String title)</code></td><td>WHERE title = ?</td></tr>
              <tr><td><code>findByTitleContaining(String keyword)</code></td><td>WHERE title LIKE %?%</td></tr>
              <tr><td><code>findByAuthorAndTitle(String a, String t)</code></td><td>WHERE author = ? AND title = ?</td></tr>
              <tr><td><code>findByCreatedAtAfter(LocalDateTime date)</code></td><td>WHERE created_at {'>'} ?</td></tr>
              <tr><td><code>findTop5ByOrderByCreatedAtDesc()</code></td><td>ORDER BY created_at DESC LIMIT 5</td></tr>
              <tr><td><code>countByAuthor(String author)</code></td><td>SELECT COUNT(*) WHERE author = ?</td></tr>
              <tr><td><code>existsByTitle(String title)</code></td><td>SELECT EXISTS(WHERE title = ?)</td></tr>
              <tr><td><code>deleteByAuthor(String author)</code></td><td>DELETE WHERE author = ?</td></tr>
            </tbody>
          </table>

          <h2>6. @Query와 JPQL</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PostRepository.java (커스텀 쿼리)</span></div>
            <pre><code>{`public interface PostRepository extends JpaRepository<Post, Long> {

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
}`}</code></pre>
          </div>

          <h2>7. 페이징과 정렬</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 페이징 활용</span></div>
            <pre><code>{`// Repository
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
// }`}</code></pre>
          </div>

          <JavaCodeRunner defaultCode={`// JPA Entity 개념 이해하기
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
}`} title="JPA Repository 패턴 시뮬레이션" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>User 엔티티를 @Entity로 정의하고, username, email, createdAt 필드를 매핑해 보세요.</li>
              <li>User와 Post의 1:N 관계를 @OneToMany, @ManyToOne으로 설정해 보세요.</li>
              <li>findByEmailContaining, findTop3ByOrderByCreatedAtDesc 쿼리 메서드를 작성하고 테스트해 보세요.</li>
              <li>@Query를 사용하여 특정 기간 내 게시글을 조회하는 JPQL을 작성해 보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP11') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP11')}>
              {isLessonCompleted('SP11') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/10"><i className="fas fa-arrow-left"></i> 이전: REST API 설계와 구현</Link>
            <Link to="/spring/12">다음: 예외처리와 응답 표준화 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
