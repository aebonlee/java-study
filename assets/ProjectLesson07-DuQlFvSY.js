import{u as i,r as o,j as e,L as t}from"./index-BAKqABqq.js";function n(){const{completeLesson:r,isLessonCompleted:s}=i();return o.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/projects",children:"프로젝트"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"PJ07"})]}),e.jsx("h1",{children:"PJ07. Spring REST 블로그 API"}),e.jsx("p",{children:"Spring Boot로 RESTful 블로그 API를 설계하고 구현합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsxs("div",{style:{background:"linear-gradient(135deg, #6DB33F15, #6DB33F08)",border:"1px solid #6DB33F40",borderRadius:"16px",padding:"28px 32px",marginBottom:"36px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"},children:[e.jsx("span",{style:{background:"#EF4444",color:"#fff",borderRadius:"8px",padding:"4px 14px",fontSize:"13px",fontWeight:700},children:"전문가"}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:700},children:"Spring REST 블로그 API"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"16px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"6px",fontWeight:600},children:[e.jsx("i",{className:"fas fa-book",style:{marginRight:"6px"}}),"선수 과목"]}),e.jsx("div",{style:{fontSize:"14px"},children:"SP01-SP15, PR02/03/04"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"6px",fontWeight:600},children:[e.jsx("i",{className:"fas fa-tools",style:{marginRight:"6px"}}),"사용 도구"]}),e.jsx("div",{style:{fontSize:"14px"},children:"Spring Boot 3.x, H2/MySQL, Postman, Swagger"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"6px",fontWeight:600},children:[e.jsx("i",{className:"fas fa-star",style:{marginRight:"6px"}}),"주요 기능"]}),e.jsx("div",{style:{fontSize:"14px"},children:"게시글 REST API, Spring Data JPA, JWT 인증, Swagger 문서화, 예외처리"})]})]})]}),e.jsx("h2",{children:"1. 프로젝트 소개와 요구사항 분석"}),e.jsxs("p",{children:["이 프로젝트에서는 ",e.jsx("strong",{children:"Spring Boot 3.x"}),"를 사용하여 RESTful 블로그 API를 처음부터 끝까지 구축합니다. 게시글(Post)의 CRUD, 댓글(Comment) 관리, JWT 기반 인증, Swagger 문서화까지 실무에서 사용하는 핵심 패턴을 모두 다룹니다."]}),e.jsx("h3",{children:"API 엔드포인트 설계"}),e.jsx("p",{children:"REST 원칙에 따라 리소스 중심으로 엔드포인트를 설계합니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"HTTP Method"}),e.jsx("th",{children:"URL"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"인증"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"POST"})}),e.jsx("td",{children:"/api/auth/register"}),e.jsx("td",{children:"회원가입"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"POST"})}),e.jsx("td",{children:"/api/auth/login"}),e.jsx("td",{children:"로그인 (JWT 발급)"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GET"})}),e.jsx("td",{children:"/api/posts"}),e.jsx("td",{children:"게시글 목록 (페이징)"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GET"})}),e.jsxs("td",{children:["/api/posts/","{id}"]}),e.jsx("td",{children:"게시글 상세 조회"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"POST"})}),e.jsx("td",{children:"/api/posts"}),e.jsx("td",{children:"게시글 작성"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"PUT"})}),e.jsxs("td",{children:["/api/posts/","{id}"]}),e.jsx("td",{children:"게시글 수정"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DELETE"})}),e.jsxs("td",{children:["/api/posts/","{id}"]}),e.jsx("td",{children:"게시글 삭제"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"POST"})}),e.jsxs("td",{children:["/api/posts/","{postId}","/comments"]}),e.jsx("td",{children:"댓글 작성"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GET"})}),e.jsxs("td",{children:["/api/posts/","{postId}","/comments"]}),e.jsx("td",{children:"댓글 목록"}),e.jsx("td",{children:"X"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," REST API 설계 원칙"]}),e.jsxs("p",{children:["리소스는 ",e.jsx("strong",{children:"명사(복수형)"}),"로 표현하고, 행위는 ",e.jsx("strong",{children:"HTTP 메서드"}),"로 구분합니다. 예를 들어 게시글 삭제는 ",e.jsx("code",{children:"DELETE /api/posts/1"}),"이지, ",e.jsx("code",{children:"POST /api/deletePost"}),"가 아닙니다. URL에 동사를 넣지 않는 것이 RESTful 설계의 핵심입니다."]})]}),e.jsx("h2",{children:"2. 프로젝트 생성과 설정"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Spring Initializr"}),"(start.spring.io)를 사용하여 프로젝트를 생성합니다. 필요한 의존성을 선택하고, application.yml로 환경을 구성합니다."]}),e.jsx("h3",{children:"Spring Initializr 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-cog"})," Spring Initializr 설정"]})}),e.jsx("pre",{children:e.jsx("code",{children:`Project:  Gradle - Groovy
Language: Java
Spring Boot: 3.2.x

Group:    com.blog
Artifact: blog-api

Dependencies:
  - Spring Web
  - Spring Data JPA
  - Spring Security
  - Spring Validation
  - H2 Database
  - MySQL Driver
  - Lombok`})})]}),e.jsx("h3",{children:"application.yml 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," src/main/resources/application.yml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`spring:
  # 개발 환경: H2 인메모리 DB 사용
  datasource:
    url: jdbc:h2:mem:blogdb
    driver-class-name: org.h2.Driver
    username: sa
    password:

  h2:
    console:
      enabled: true
      path: /h2-console

  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
    properties:
      hibernate:
        format_sql: true

  # JWT 설정 (커스텀 프로퍼티)
app:
  jwt:
    secret: mySecretKeyForJWTTokenGenerationAndValidation2024
    expiration-ms: 86400000  # 24시간`})})]}),e.jsx("h3",{children:"build.gradle 의존성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle"]})}),e.jsx("pre",{children:e.jsx("code",{children:`dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-security'
    implementation 'org.springframework.boot:spring-boot-starter-validation'

    // JWT
    implementation 'io.jsonwebtoken:jjwt-api:0.12.3'
    runtimeOnly 'io.jsonwebtoken:jjwt-impl:0.12.3'
    runtimeOnly 'io.jsonwebtoken:jjwt-jackson:0.12.3'

    // Swagger (springdoc)
    implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.3.0'

    // DB
    runtimeOnly 'com.h2database:h2'
    runtimeOnly 'com.mysql:mysql-connector-j'

    // Lombok
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'

    // Test
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.springframework.security:spring-security-test'
}`})})]}),e.jsx("h2",{children:"3. 엔티티와 리포지토리"}),e.jsxs("p",{children:["블로그의 핵심 도메인 모델을 JPA 엔티티로 정의합니다. ",e.jsx("strong",{children:"User"}),", ",e.jsx("strong",{children:"Post"}),",",e.jsx("strong",{children:"Comment"})," 세 개의 엔티티와 그 관계를 설계합니다."]}),e.jsx("h3",{children:"User 엔티티"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," entity/User.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    @Builder.Default
    private List<Post> posts = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}

// Role enum
public enum Role {
    ROLE_USER, ROLE_ADMIN
}`})})]}),e.jsx("h3",{children:"Post 엔티티"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," entity/Post.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "posts")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id", nullable = false)
    private User author;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL,
               orphanRemoval = true)
    @Builder.Default
    private List<Comment> comments = new ArrayList<>();

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}`})})]}),e.jsx("h3",{children:"Comment 엔티티"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," entity/Comment.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "comments")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 1000)
    private String body;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id", nullable = false)
    private User author;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }
}`})})]}),e.jsx("h3",{children:"Spring Data JPA 리포지토리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," repository/PostRepository.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.repository;

import com.blog.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PostRepository extends JpaRepository<Post, Long> {

    // 제목으로 검색 (페이징)
    Page<Post> findByTitleContainingIgnoreCase(
        String keyword, Pageable pageable);

    // 작성자별 게시글 조회
    Page<Post> findByAuthorId(Long authorId, Pageable pageable);

    // JPQL: 댓글 수와 함께 조회
    @Query("SELECT p FROM Post p LEFT JOIN FETCH p.comments "
         + "WHERE p.id = :id")
    Post findByIdWithComments(@Param("id") Long id);
}

// UserRepository.java
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}

// CommentRepository.java
public interface CommentRepository
        extends JpaRepository<Comment, Long> {
    List<Comment> findByPostIdOrderByCreatedAtDesc(Long postId);
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," Spring Data JPA 쿼리 메서드"]}),e.jsxs("p",{children:["Spring Data JPA는 메서드 이름 규칙만으로 쿼리를 자동 생성합니다.",e.jsx("code",{children:"findByTitleContainingIgnoreCase"}),"는 ",e.jsx("code",{children:"WHERE LOWER(title) LIKE LOWER('%keyword%')"}),"와 동일합니다. 복잡한 쿼리는 ",e.jsx("code",{children:"@Query"})," 어노테이션으로 JPQL을 직접 작성할 수 있습니다."]})]}),e.jsx("h2",{children:"4. REST API 컨트롤러 구현"}),e.jsxs("p",{children:["DTO 패턴을 사용하여 엔티티를 직접 노출하지 않고, 요청/응답 객체를 분리합니다.",e.jsx("code",{children:"ResponseEntity"}),"를 활용하여 HTTP 상태 코드를 명확히 반환합니다."]}),e.jsx("h3",{children:"DTO 클래스 정의"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," dto/PostDto.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import java.time.LocalDateTime;

// 요청 DTO
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class PostRequest {

    @NotBlank(message = "제목은 필수입니다")
    @Size(min = 2, max = 200, message = "제목은 2~200자 입니다")
    private String title;

    @NotBlank(message = "내용은 필수입니다")
    @Size(min = 10, message = "내용은 최소 10자 이상이어야 합니다")
    private String content;
}

// 응답 DTO
@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor
public class PostResponse {
    private Long id;
    private String title;
    private String content;
    private String author;
    private int commentCount;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public static PostResponse from(Post post) {
        return PostResponse.builder()
            .id(post.getId())
            .title(post.getTitle())
            .content(post.getContent())
            .author(post.getAuthor().getUsername())
            .commentCount(post.getComments().size())
            .createdAt(post.getCreatedAt())
            .updatedAt(post.getUpdatedAt())
            .build();
    }
}

// 페이징 응답 래퍼
@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor
public class PageResponse<T> {
    private List<T> content;
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
    private boolean last;
}`})})]}),e.jsx("h3",{children:"PostController 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," controller/PostController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.controller;

import com.blog.dto.*;
import com.blog.service.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    // 게시글 목록 (페이징 + 정렬)
    @GetMapping
    public ResponseEntity<PageResponse<PostResponse>> getAllPosts(
            @PageableDefault(size = 10,
                sort = "createdAt",
                direction = Sort.Direction.DESC)
            Pageable pageable) {

        return ResponseEntity.ok(postService.getAllPosts(pageable));
    }

    // 게시글 상세 조회
    @GetMapping("/{id}")
    public ResponseEntity<PostResponse> getPost(
            @PathVariable Long id) {
        return ResponseEntity.ok(postService.getPostById(id));
    }

    // 게시글 작성 (인증 필요)
    @PostMapping
    public ResponseEntity<PostResponse> createPost(
            @Valid @RequestBody PostRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {

        PostResponse created = postService
            .createPost(request, userDetails.getUsername());
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(created);
    }

    // 게시글 수정 (인증 + 본인 확인)
    @PutMapping("/{id}")
    public ResponseEntity<PostResponse> updatePost(
            @PathVariable Long id,
            @Valid @RequestBody PostRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {

        return ResponseEntity.ok(
            postService.updatePost(id, request,
                userDetails.getUsername()));
    }

    // 게시글 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {

        postService.deletePost(id, userDetails.getUsername());
        return ResponseEntity.noContent().build();
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," ResponseEntity 사용 가이드"]}),e.jsxs("p",{children:[e.jsx("code",{children:"ResponseEntity"}),"를 사용하면 HTTP 상태 코드를 명확히 제어할 수 있습니다. 생성은 ",e.jsx("strong",{children:"201 Created"}),", 조회는 ",e.jsx("strong",{children:"200 OK"}),", 삭제는 ",e.jsx("strong",{children:"204 No Content"}),"를 반환합니다.",e.jsx("code",{children:"@Valid"}),"를 붙이면 DTO의 검증 어노테이션이 자동으로 동작합니다."]})]}),e.jsx("h2",{children:"5. JWT 인증 구현"}),e.jsx("p",{children:"Spring Security와 JWT(JSON Web Token)를 결합하여 Stateless 인증 시스템을 구축합니다. 로그인 시 JWT를 발급하고, 이후 요청마다 토큰을 검증합니다."}),e.jsx("h3",{children:"JwtTokenProvider"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," security/JwtTokenProvider.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtTokenProvider {

    private final SecretKey key;
    private final long expirationMs;

    public JwtTokenProvider(
            @Value("\${app.jwt.secret}") String secret,
            @Value("\${app.jwt.expiration-ms}") long expirationMs) {
        this.key = Keys.hmacShaKeyFor(
            secret.getBytes(StandardCharsets.UTF_8));
        this.expirationMs = expirationMs;
    }

    // 토큰 생성
    public String generateToken(String username) {
        Date now = new Date();
        Date expiry = new Date(now.getTime() + expirationMs);

        return Jwts.builder()
            .subject(username)
            .issuedAt(now)
            .expiration(expiry)
            .signWith(key)
            .compact();
    }

    // 토큰에서 username 추출
    public String getUsernameFromToken(String token) {
        return Jwts.parser()
            .verifyWith(key)
            .build()
            .parseSignedClaims(token)
            .getPayload()
            .getSubject();
    }

    // 토큰 유효성 검증
    public boolean validateToken(String token) {
        try {
            Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }
}`})})]}),e.jsx("h3",{children:"Spring Security 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," config/SecurityConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.config;

import com.blog.security.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication
    .configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web
    .builders.HttpSecurity;
import org.springframework.security.config.annotation.web
    .configuration.EnableWebSecurity;
import org.springframework.security.config.http
    .SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt
    .BCryptPasswordEncoder;
import org.springframework.security.crypto.password
    .PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication
    .UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http)
            throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session ->
                session.sessionCreationPolicy(
                    SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                // 인증 없이 접근 허용
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers(HttpMethod.GET,
                    "/api/posts/**").permitAll()
                // Swagger UI 허용
                .requestMatchers("/swagger-ui/**",
                    "/v3/api-docs/**").permitAll()
                // H2 Console 허용
                .requestMatchers("/h2-console/**").permitAll()
                // 나머지는 인증 필요
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtFilter,
                UsernamePasswordAuthenticationFilter.class)
            .headers(headers ->
                headers.frameOptions(f -> f.sameOrigin()));

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}`})})]}),e.jsx("h3",{children:"로그인/회원가입 컨트롤러"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," controller/AuthController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.controller;

import com.blog.dto.LoginRequest;
import com.blog.dto.RegisterRequest;
import com.blog.dto.AuthResponse;
import com.blog.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @Valid @RequestBody RegisterRequest request) {
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(
            @Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }
}

// AuthResponse.java
@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor
public class AuthResponse {
    private String token;
    private String username;
    private String message;
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," JWT 인증 흐름 이해하기"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"1)"})," 클라이언트가 ",e.jsx("code",{children:"/api/auth/login"}),"으로 username/password를 전송합니다.",e.jsx("br",{}),e.jsx("strong",{children:"2)"})," 서버가 인증 후 JWT 토큰을 발급합니다.",e.jsx("br",{}),e.jsx("strong",{children:"3)"})," 클라이언트는 이후 요청의 ",e.jsxs("code",{children:["Authorization: Bearer ","{token}"]})," 헤더에 토큰을 포함합니다.",e.jsx("br",{}),e.jsx("strong",{children:"4)"})," ",e.jsx("code",{children:"JwtAuthenticationFilter"}),"가 매 요청마다 토큰을 검증합니다."]})]}),e.jsx("h2",{children:"6. 예외처리와 페이징"}),e.jsxs("p",{children:[e.jsx("code",{children:"@ControllerAdvice"}),"를 사용하여 전역 예외 처리를 구현하고, Spring Data의 ",e.jsx("code",{children:"Pageable"}),"을 활용하여 게시글 목록을 페이징 처리합니다."]}),e.jsx("h3",{children:"커스텀 예외 클래스"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," exception/CustomExceptions.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// 리소스를 찾지 못한 경우 (404)
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String resource,
            String field, Object value) {
        super(String.format(
            "%s not found with %s: '%s'",
            resource, field, value));
    }
}

// 권한이 없는 경우 (403)
@ResponseStatus(HttpStatus.FORBIDDEN)
public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException(String message) {
        super(message);
    }
}

// 중복 데이터 (409)
@ResponseStatus(HttpStatus.CONFLICT)
public class DuplicateResourceException
        extends RuntimeException {
    public DuplicateResourceException(String message) {
        super(message);
    }
}`})})]}),e.jsx("h3",{children:"전역 예외 핸들러"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," exception/GlobalExceptionHandler.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.exception;

import lombok.*;
import org.springframework.http.*;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    // 404 - 리소스 없음
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
            ResourceNotFoundException ex) {
        ErrorResponse error = ErrorResponse.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.NOT_FOUND.value())
            .error("Not Found")
            .message(ex.getMessage())
            .build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body(error);
    }

    // 400 - 유효성 검증 실패
    @ExceptionHandler(
        MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors()
            .forEach(err -> {
                String field =
                    ((FieldError) err).getField();
                String message =
                    err.getDefaultMessage();
                errors.put(field, message);
            });

        ErrorResponse error = ErrorResponse.builder()
            .timestamp(LocalDateTime.now())
            .status(HttpStatus.BAD_REQUEST.value())
            .error("Validation Failed")
            .message("입력값 검증에 실패했습니다")
            .details(errors)
            .build();
        return ResponseEntity.badRequest().body(error);
    }
}

// 에러 응답 DTO
@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor
public class ErrorResponse {
    private LocalDateTime timestamp;
    private int status;
    private String error;
    private String message;
    private Map<String, String> details;
}`})})]}),e.jsx("h3",{children:"페이징과 정렬"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," service/PostService.java (페이징 부분)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PostService {

    private final PostRepository postRepository;

    // 페이징된 게시글 목록 조회
    public PageResponse<PostResponse> getAllPosts(
            Pageable pageable) {

        Page<Post> postPage =
            postRepository.findAll(pageable);

        List<PostResponse> content = postPage.getContent()
            .stream()
            .map(PostResponse::from)
            .toList();

        return PageResponse.<PostResponse>builder()
            .content(content)
            .page(postPage.getNumber())
            .size(postPage.getSize())
            .totalElements(postPage.getTotalElements())
            .totalPages(postPage.getTotalPages())
            .last(postPage.isLast())
            .build();
    }

    // 검색 + 페이징
    public PageResponse<PostResponse> searchPosts(
            String keyword, Pageable pageable) {
        Page<Post> postPage = postRepository
            .findByTitleContainingIgnoreCase(
                keyword, pageable);
        // ... 동일한 변환 로직
    }
}

// API 호출 예시:
// GET /api/posts?page=0&size=10&sort=createdAt,desc
// GET /api/posts?page=1&size=5&sort=title,asc`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Pageable 파라미터"]}),e.jsxs("p",{children:["Spring은 ",e.jsx("code",{children:"page"}),", ",e.jsx("code",{children:"size"}),", ",e.jsx("code",{children:"sort"})," 쿼리 파라미터를 자동으로",e.jsx("code",{children:"Pageable"})," 객체로 변환합니다. ",e.jsx("code",{children:"@PageableDefault"}),"로 기본값을 지정할 수 있으며,",e.jsx("code",{children:"sort=createdAt,desc"}),"처럼 여러 정렬 조건도 지원합니다."]})]}),e.jsx("h2",{children:"7. Swagger 문서화와 마무리"}),e.jsxs("p",{children:[e.jsx("strong",{children:"springdoc-openapi"}),"를 사용하여 API 문서를 자동 생성하고, Swagger UI를 통해 브라우저에서 API를 테스트할 수 있습니다."]}),e.jsx("h3",{children:"springdoc-openapi 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," config/SwaggerConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.blog.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.Components;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI openAPI() {
        String jwtScheme = "bearerAuth";

        return new OpenAPI()
            .info(new Info()
                .title("Blog REST API")
                .description("Spring Boot 블로그 REST API 문서")
                .version("v1.0.0")
                .contact(new Contact()
                    .name("Blog Admin")
                    .email("admin@blog.com")))
            .addSecurityItem(
                new SecurityRequirement()
                    .addList(jwtScheme))
            .components(new Components()
                .addSecuritySchemes(jwtScheme,
                    new SecurityScheme()
                        .name(jwtScheme)
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .bearerFormat("JWT")));
    }
}`})})]}),e.jsx("h3",{children:"컨트롤러에 Swagger 어노테이션 추가"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," controller/PostController.java (Swagger 적용)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@Tag(name = "Post", description = "게시글 관리 API")
@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    @Operation(
        summary = "게시글 목록 조회",
        description = "페이징된 게시글 목록을 반환합니다",
        responses = {
            @ApiResponse(responseCode = "200",
                description = "조회 성공")
        }
    )
    @GetMapping
    public ResponseEntity<PageResponse<PostResponse>>
            getAllPosts(
        @Parameter(description = "페이지 번호 (0부터)")
        @RequestParam(defaultValue = "0") int page,
        @Parameter(description = "페이지 크기")
        @RequestParam(defaultValue = "10") int size) {
        // ...
    }

    @Operation(
        summary = "게시글 작성",
        description = "새 게시글을 작성합니다 (인증 필요)"
    )
    @PostMapping
    public ResponseEntity<PostResponse> createPost(
        @Valid @RequestBody PostRequest request,
        @AuthenticationPrincipal UserDetails user) {
        // ...
    }
}

// Swagger UI 접속: http://localhost:8080/swagger-ui.html
// API Docs JSON: http://localhost:8080/v3/api-docs`})})]}),e.jsx("h3",{children:"Postman으로 API 테스트"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-terminal"})," Postman 테스트 시나리오"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 1. 회원가입
POST http://localhost:8080/api/auth/register
Content-Type: application/json
{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
}

# 2. 로그인 → JWT 토큰 받기
POST http://localhost:8080/api/auth/login
Content-Type: application/json
{
    "username": "testuser",
    "password": "password123"
}
# Response: { "token": "eyJhbGci...", "username": "testuser" }

# 3. 게시글 작성 (Authorization 헤더에 토큰 포함)
POST http://localhost:8080/api/posts
Authorization: Bearer eyJhbGci...
Content-Type: application/json
{
    "title": "첫 번째 게시글",
    "content": "Spring Boot로 작성한 블로그 API 테스트입니다."
}

# 4. 게시글 목록 (페이징)
GET http://localhost:8080/api/posts?page=0&size=5&sort=createdAt,desc

# 5. 게시글 수정
PUT http://localhost:8080/api/posts/1
Authorization: Bearer eyJhbGci...
Content-Type: application/json
{
    "title": "수정된 제목",
    "content": "수정된 내용입니다. 최소 10자 이상 작성해야 합니다."
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 프로젝트 확장 아이디어"]}),e.jsx("p",{children:"이 프로젝트를 기반으로 다음 기능들을 추가해 보세요: 카테고리/태그 분류, 게시글 좋아요, 이미지 업로드(S3 연동), 소셜 로그인(OAuth2), 이메일 알림, 프론트엔드(React/Vue) 연동 등. 실무에서 요구하는 기능을 직접 구현하면서 포트폴리오를 강화할 수 있습니다."})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 프로젝트 과제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"위 코드를 참고하여 Spring Boot 블로그 API 프로젝트를 처음부터 생성하세요."}),e.jsx("li",{children:"Post, Comment, User 엔티티와 리포지토리를 구현하고 H2 콘솔에서 테이블을 확인하세요."}),e.jsx("li",{children:"게시글 CRUD API를 구현하고 Postman으로 전체 흐름을 테스트하세요."}),e.jsx("li",{children:"JWT 인증을 추가하여 로그인 후에만 글 작성이 가능하도록 구현하세요."}),e.jsxs("li",{children:[e.jsx("code",{children:"@ControllerAdvice"}),"로 전역 예외 처리를 추가하고, 잘못된 요청에 대해 적절한 에러 응답을 반환하세요."]}),e.jsx("li",{children:"Swagger UI를 설정하고, 브라우저에서 API 문서가 정상적으로 표시되는지 확인하세요."}),e.jsx("li",{children:"MySQL로 전환하여 데이터 영속성을 확보하고, 프로필별 설정을 적용하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("PJ07")?"btn-primary":"btn-accent"}`,onClick:()=>r("PJ07"),children:s("PJ07")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/projects/06",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 서블릿 쇼핑몰"]}),e.jsxs(t,{to:"/projects/08",children:["다음: Spring E-Commerce ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{n as default};
