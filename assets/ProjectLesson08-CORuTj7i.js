import{u as s,r as o,j as e,L as r}from"./index-lpM0qBUv.js";function c(){const{completeLesson:i,isLessonCompleted:t}=s();return o.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/projects",children:"프로젝트"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"PJ08"})]}),e.jsx("h1",{children:"PJ08. Spring E-Commerce 플랫폼"}),e.jsx("p",{children:"Spring Boot 기반의 종합 이커머스 플랫폼을 설계하고 구현합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsxs("div",{style:{background:"linear-gradient(135deg, #6DB33F15, #6DB33F08)",border:"1px solid #6DB33F40",borderRadius:"16px",padding:"28px 32px",marginBottom:"36px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"20px"},children:[e.jsx("span",{style:{background:"#EF4444",color:"#fff",borderRadius:"8px",padding:"4px 14px",fontSize:"13px",fontWeight:700},children:"전문가"}),e.jsx("span",{style:{fontSize:"1.2rem",fontWeight:700},children:"Spring E-Commerce 플랫폼"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"16px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"6px",fontWeight:600},children:[e.jsx("i",{className:"fas fa-book",style:{marginRight:"6px"}}),"선수 과목"]}),e.jsx("div",{style:{fontSize:"14px"},children:"SP01-SP16, PR02/03/04/10"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"6px",fontWeight:600},children:[e.jsx("i",{className:"fas fa-tools",style:{marginRight:"6px"}}),"사용 도구"]}),e.jsx("div",{style:{fontSize:"14px"},children:"Spring Boot 3.x, MySQL, Redis, Docker"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"6px",fontWeight:600},children:[e.jsx("i",{className:"fas fa-star",style:{marginRight:"6px"}}),"주요 기능"]}),e.jsx("div",{style:{fontSize:"14px"},children:"상품/카테고리 API, 주문/결제 시스템, Spring Security, Redis 캐싱, Docker 배포"})]})]})]}),e.jsx("h2",{children:"1. 프로젝트 소개와 아키텍처 설계"}),e.jsxs("p",{children:["이 프로젝트에서는 실무 수준의 ",e.jsx("strong",{children:"E-Commerce 플랫폼"}),"을 Spring Boot로 구축합니다. 상품 관리, 장바구니, 주문/결제, 회원 관리, Redis 캐싱, Docker 배포까지 현대적인 백엔드 아키텍처의 전체 흐름을 경험합니다."]}),e.jsx("h3",{children:"시스템 아키텍처"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-sitemap"})," Layered Architecture"]})}),e.jsx("pre",{children:e.jsx("code",{children:`┌──────────────────────────────────────────┐
│           Client (Postman / Frontend)     │
└────────────────┬─────────────────────────┘
                 │ HTTP (REST API)
┌────────────────▼─────────────────────────┐
│         Controller Layer                  │
│  ProductController, OrderController, ...  │
├───────────────────────────────────────────┤
│         Service Layer                     │
│  ProductService, OrderService, ...        │
│  (비즈니스 로직, 트랜잭션 관리)             │
├───────────────────────────────────────────┤
│         Repository Layer                  │
│  Spring Data JPA Repositories             │
├────────────┬──────────────┬───────────────┤
│   MySQL    │    Redis     │  File Storage │
│  (영속성)   │  (캐싱)      │  (이미지)      │
└────────────┴──────────────┴───────────────┘`})})]}),e.jsx("h3",{children:"모듈 구성"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"모듈"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"주요 기능"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"상품(Product)"})}),e.jsx("td",{children:"상품 및 카테고리 관리"}),e.jsx("td",{children:"CRUD, 검색, 이미지, 재고"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"회원(User)"})}),e.jsx("td",{children:"회원 가입 및 인증"}),e.jsx("td",{children:"JWT, 역할 기반 접근제어"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"장바구니(Cart)"})}),e.jsx("td",{children:"장바구니 관리"}),e.jsx("td",{children:"상품 추가/삭제, 수량 변경"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"주문(Order)"})}),e.jsx("td",{children:"주문 처리"}),e.jsx("td",{children:"주문 생성, 상태 관리, 이력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"캐싱(Cache)"})}),e.jsx("td",{children:"Redis 캐시"}),e.jsx("td",{children:"상품 목록 캐싱, 세션 저장"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 왜 E-Commerce 프로젝트인가?"]}),e.jsx("p",{children:"E-Commerce는 CRUD, 인증, 트랜잭션, 캐싱, 배포 등 백엔드 개발의 모든 핵심 요소를 포함합니다. 실무 면접에서도 가장 자주 논의되는 도메인이며, 포트폴리오로서 가치가 높습니다. 이 프로젝트를 완성하면 Spring Boot 기반의 실무 개발 역량을 입증할 수 있습니다."})]}),e.jsx("h2",{children:"2. 프로젝트 설정과 도메인 모델"}),e.jsx("p",{children:"Spring Boot 프로젝트를 생성하고 필요한 의존성을 추가합니다. 그 후 핵심 도메인 엔티티를 JPA로 정의합니다."}),e.jsx("h3",{children:"build.gradle"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle"]})}),e.jsx("pre",{children:e.jsx("code",{children:`plugins {
    id 'java'
    id 'org.springframework.boot' version '3.2.2'
    id 'io.spring.dependency-management' version '1.1.4'
}

group = 'com.ecommerce'
version = '1.0.0'

java {
    sourceCompatibility = '21'
}

dependencies {
    // Spring Boot Starters
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-security'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    implementation 'org.springframework.boot:spring-boot-starter-data-redis'

    // JWT
    implementation 'io.jsonwebtoken:jjwt-api:0.12.3'
    runtimeOnly 'io.jsonwebtoken:jjwt-impl:0.12.3'
    runtimeOnly 'io.jsonwebtoken:jjwt-jackson:0.12.3'

    // Database
    runtimeOnly 'com.mysql:mysql-connector-j'

    // Lombok
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'

    // Swagger
    implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.3.0'

    // Test
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.springframework.security:spring-security-test'
}`})})]}),e.jsx("h3",{children:"application.yml"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," src/main/resources/application.yml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`spring:
  datasource:
    url: jdbc:mysql://localhost:3306/ecommerce_db?useSSL=false&serverTimezone=Asia/Seoul&characterEncoding=UTF-8
    username: \${DB_USERNAME:root}
    password: \${DB_PASSWORD:password}
    driver-class-name: com.mysql.cj.jdbc.Driver

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        default_batch_fetch_size: 100

  data:
    redis:
      host: \${REDIS_HOST:localhost}
      port: \${REDIS_PORT:6379}

  servlet:
    multipart:
      max-file-size: 5MB
      max-request-size: 20MB

app:
  jwt:
    secret: \${JWT_SECRET:ecommerceSecretKeyForJWTTokenGeneration2024}
    expiration-ms: 86400000

server:
  port: 8080`})})]}),e.jsx("h3",{children:"핵심 JPA 엔티티"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," entity/Product.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.ecommerce.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(nullable = false)
    private int stockQuantity;

    private String imageUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

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

    // 재고 감소 (주문 시)
    public void decreaseStock(int quantity) {
        if (this.stockQuantity < quantity) {
            throw new IllegalStateException(
                "재고가 부족합니다. 현재 재고: " + stockQuantity);
        }
        this.stockQuantity -= quantity;
    }

    // 재고 증가 (주문 취소 시)
    public void increaseStock(int quantity) {
        this.stockQuantity += quantity;
    }
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," entity/Category.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.ecommerce.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "categories")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String name;

    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Category parent;

    @OneToMany(mappedBy = "parent")
    @Builder.Default
    private List<Category> children = new ArrayList<>();

    @OneToMany(mappedBy = "category")
    @Builder.Default
    private List<Product> products = new ArrayList<>();
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," entity/Order.java & OrderItem.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.ecommerce.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL,
               orphanRemoval = true)
    @Builder.Default
    private List<OrderItem> orderItems = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderStatus status;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal totalPrice;

    private String shippingAddress;

    @Column(name = "ordered_at")
    private LocalDateTime orderedAt;

    @PrePersist
    protected void onCreate() {
        this.orderedAt = LocalDateTime.now();
    }

    // 주문 총액 계산
    public void calculateTotalPrice() {
        this.totalPrice = orderItems.stream()
            .map(OrderItem::getSubtotal)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    // 주문 취소
    public void cancel() {
        if (this.status != OrderStatus.ORDERED) {
            throw new IllegalStateException(
                "배송 시작 후에는 주문을 취소할 수 없습니다.");
        }
        this.status = OrderStatus.CANCELLED;
        // 재고 복원
        orderItems.forEach(item ->
            item.getProduct()
                .increaseStock(item.getQuantity()));
    }
}

// OrderItem.java
@Entity
@Table(name = "order_items")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;  // 주문 시점의 상품 가격

    public BigDecimal getSubtotal() {
        return price.multiply(BigDecimal.valueOf(quantity));
    }
}

// OrderStatus.java
public enum OrderStatus {
    ORDERED,     // 주문 완료
    PAID,        // 결제 완료
    SHIPPING,    // 배송 중
    DELIVERED,   // 배송 완료
    CANCELLED    // 주문 취소
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," entity/Cart.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.ecommerce.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "carts")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false,
                unique = true)
    private User user;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL,
               orphanRemoval = true)
    @Builder.Default
    private List<CartItem> items = new ArrayList<>();

    // 장바구니에 상품 추가
    public void addItem(Product product, int quantity) {
        // 이미 장바구니에 있는 상품이면 수량 증가
        for (CartItem item : items) {
            if (item.getProduct().getId()
                    .equals(product.getId())) {
                item.setQuantity(
                    item.getQuantity() + quantity);
                return;
            }
        }
        // 새 상품 추가
        CartItem newItem = CartItem.builder()
            .cart(this)
            .product(product)
            .quantity(quantity)
            .build();
        items.add(newItem);
    }

    // 장바구니 비우기
    public void clear() {
        items.clear();
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 엔티티 설계 팁"]}),e.jsxs("p",{children:[e.jsx("code",{children:"BigDecimal"}),"은 금액 계산에서 부동소수점 오류를 방지합니다.",e.jsx("code",{children:"OrderItem"}),"에 ",e.jsx("code",{children:"price"}),"를 별도로 저장하는 이유는 주문 시점의 가격을 보존하기 위함입니다. 상품 가격이 나중에 변경되어도 이미 완료된 주문의 금액에는 영향을 주지 않습니다."]})]}),e.jsx("h2",{children:"3. 상품 관리 API 구현"}),e.jsx("p",{children:"상품의 등록, 조회, 수정, 삭제와 카테고리 관리 API를 구현합니다. 관리자(ADMIN)만 상품을 등록/수정/삭제할 수 있도록 권한을 제어합니다."}),e.jsx("h3",{children:"ProductService"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," service/ProductService.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.ecommerce.service;

import com.ecommerce.dto.*;
import com.ecommerce.entity.Category;
import com.ecommerce.entity.Product;
import com.ecommerce.exception.ResourceNotFoundException;
import com.ecommerce.repository.CategoryRepository;
import com.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    // 상품 목록 조회 (페이징 + 카테고리 필터)
    public PageResponse<ProductResponse> getProducts(
            Long categoryId, String keyword,
            Pageable pageable) {

        Page<Product> page;
        if (categoryId != null && keyword != null) {
            page = productRepository
                .findByCategoryIdAndNameContaining(
                    categoryId, keyword, pageable);
        } else if (categoryId != null) {
            page = productRepository
                .findByCategoryId(categoryId, pageable);
        } else if (keyword != null) {
            page = productRepository
                .findByNameContainingIgnoreCase(
                    keyword, pageable);
        } else {
            page = productRepository.findAll(pageable);
        }

        return PageResponse.of(page, ProductResponse::from);
    }

    // 상품 상세 조회
    public ProductResponse getProductById(Long id) {
        Product product = productRepository.findById(id)
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "Product", "id", id));
        return ProductResponse.from(product);
    }

    // 상품 등록 (ADMIN 전용)
    @Transactional
    public ProductResponse createProduct(
            ProductRequest request) {

        Category category = categoryRepository
            .findById(request.getCategoryId())
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "Category", "id",
                    request.getCategoryId()));

        Product product = Product.builder()
            .name(request.getName())
            .description(request.getDescription())
            .price(request.getPrice())
            .stockQuantity(request.getStockQuantity())
            .imageUrl(request.getImageUrl())
            .category(category)
            .build();

        return ProductResponse.from(
            productRepository.save(product));
    }

    // 상품 수정 (ADMIN 전용)
    @Transactional
    public ProductResponse updateProduct(
            Long id, ProductRequest request) {
        Product product = productRepository.findById(id)
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "Product", "id", id));

        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setPrice(request.getPrice());
        product.setStockQuantity(
            request.getStockQuantity());

        return ProductResponse.from(product);
    }

    // 상품 삭제 (ADMIN 전용)
    @Transactional
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new ResourceNotFoundException(
                "Product", "id", id);
        }
        productRepository.deleteById(id);
    }
}`})})]}),e.jsx("h3",{children:"ProductController"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," controller/ProductController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.ecommerce.controller;

import com.ecommerce.dto.*;
import com.ecommerce.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    // 상품 목록 (누구나 접근 가능)
    @GetMapping
    public ResponseEntity<PageResponse<ProductResponse>>
            getProducts(
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) String keyword,
            @PageableDefault(size = 12,
                sort = "createdAt",
                direction = Sort.Direction.DESC)
            Pageable pageable) {

        return ResponseEntity.ok(
            productService.getProducts(
                categoryId, keyword, pageable));
    }

    // 상품 상세 (누구나 접근 가능)
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponse> getProduct(
            @PathVariable Long id) {
        return ResponseEntity.ok(
            productService.getProductById(id));
    }

    // 상품 등록 (관리자만)
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProductResponse> createProduct(
            @Valid @RequestBody ProductRequest request) {
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(productService.createProduct(request));
    }

    // 상품 수정 (관리자만)
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ProductResponse> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody ProductRequest request) {
        return ResponseEntity.ok(
            productService.updateProduct(id, request));
    }

    // 상품 삭제 (관리자만)
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteProduct(
            @PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," @PreAuthorize 메서드 레벨 보안"]}),e.jsxs("p",{children:[e.jsx("code",{children:`@PreAuthorize("hasRole('ADMIN')")`}),"은 메서드 실행 전에 권한을 확인합니다. 이 기능을 사용하려면 ",e.jsx("code",{children:"@EnableMethodSecurity"}),"를 Security 설정 클래스에 추가해야 합니다. URL 패턴 기반 보안보다 더 세밀한 접근 제어가 가능합니다."]})]}),e.jsx("h2",{children:"4. 주문과 결제 시스템"}),e.jsx("p",{children:"장바구니의 상품을 주문으로 변환하고, 주문 상태를 관리하는 시스템을 구현합니다. 트랜잭션 처리와 동시성 제어에 주의를 기울여야 합니다."}),e.jsx("h3",{children:"OrderService"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," service/OrderService.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.ecommerce.service;

import com.ecommerce.dto.*;
import com.ecommerce.entity.*;
import com.ecommerce.exception.*;
import com.ecommerce.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class OrderService {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    // 장바구니 -> 주문 생성
    @Transactional
    public OrderResponse createOrderFromCart(
            String username, OrderRequest request) {

        User user = userRepository
            .findByUsername(username)
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "User", "username", username));

        Cart cart = cartRepository.findByUserId(user.getId())
            .orElseThrow(() -> new IllegalStateException(
                "장바구니가 비어 있습니다."));

        if (cart.getItems().isEmpty()) {
            throw new IllegalStateException(
                "장바구니에 상품이 없습니다.");
        }

        // 주문 생성
        Order order = Order.builder()
            .user(user)
            .status(OrderStatus.ORDERED)
            .shippingAddress(request.getShippingAddress())
            .build();

        // 장바구니 아이템 -> 주문 아이템 변환
        for (CartItem cartItem : cart.getItems()) {
            Product product = cartItem.getProduct();

            // 재고 확인 및 감소 (동시성 주의)
            product.decreaseStock(cartItem.getQuantity());

            OrderItem orderItem = OrderItem.builder()
                .order(order)
                .product(product)
                .quantity(cartItem.getQuantity())
                .price(product.getPrice()) // 주문 시점 가격
                .build();
            order.getOrderItems().add(orderItem);
        }

        // 총액 계산
        order.calculateTotalPrice();

        // 장바구니 비우기
        cart.clear();

        Order saved = orderRepository.save(order);
        return OrderResponse.from(saved);
    }

    // 주문 상태 변경
    @Transactional
    public OrderResponse updateOrderStatus(
            Long orderId, OrderStatus newStatus) {

        Order order = orderRepository.findById(orderId)
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "Order", "id", orderId));

        // 상태 전이 검증
        validateStatusTransition(
            order.getStatus(), newStatus);
        order.setStatus(newStatus);

        return OrderResponse.from(order);
    }

    // 주문 취소
    @Transactional
    public void cancelOrder(Long orderId, String username) {
        Order order = orderRepository.findById(orderId)
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "Order", "id", orderId));

        // 본인 확인
        if (!order.getUser().getUsername()
                .equals(username)) {
            throw new UnauthorizedException(
                "본인의 주문만 취소할 수 있습니다.");
        }

        order.cancel(); // 재고 복원 포함
    }

    // 사용자별 주문 내역 조회
    public List<OrderResponse> getOrdersByUser(
            String username) {
        User user = userRepository
            .findByUsername(username)
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "User", "username", username));

        return orderRepository
            .findByUserIdOrderByOrderedAtDesc(user.getId())
            .stream()
            .map(OrderResponse::from)
            .toList();
    }

    // 상태 전이 검증
    private void validateStatusTransition(
            OrderStatus current, OrderStatus next) {
        // ORDERED -> PAID -> SHIPPING -> DELIVERED
        // ORDERED -> CANCELLED
        boolean valid = switch (current) {
            case ORDERED ->
                next == OrderStatus.PAID
                || next == OrderStatus.CANCELLED;
            case PAID -> next == OrderStatus.SHIPPING;
            case SHIPPING -> next == OrderStatus.DELIVERED;
            default -> false;
        };
        if (!valid) {
            throw new IllegalStateException(
                String.format(
                    "%s 상태에서 %s 상태로 변경할 수 없습니다.",
                    current, next));
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 트랜잭션과 동시성 처리"]}),e.jsxs("p",{children:["주문 생성 시 재고 감소는 반드시 ",e.jsx("strong",{children:"하나의 트랜잭션"})," 안에서 처리해야 합니다. 동시에 여러 사용자가 같은 상품을 주문할 때 재고 부정합을 방지하려면",e.jsx("strong",{children:"비관적 잠금(Pessimistic Lock)"}),"이나 ",e.jsx("strong",{children:"낙관적 잠금(@Version)"}),"을 적용해야 합니다. 실무에서는 ",e.jsx("code",{children:"@Lock(LockModeType.PESSIMISTIC_WRITE)"}),"를 리포지토리 메서드에 추가합니다."]})]}),e.jsx("h2",{children:"5. Spring Security와 인증"}),e.jsx("p",{children:"역할 기반 접근제어(RBAC)를 구현하여 일반 사용자(USER)와 관리자(ADMIN)의 권한을 분리합니다. JWT 토큰을 사용하여 Stateless 인증을 처리합니다."}),e.jsx("h3",{children:"Security 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," config/SecurityConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.ecommerce.config;

import com.ecommerce.security.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method
    .configuration.EnableMethodSecurity;
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
@EnableMethodSecurity   // @PreAuthorize 활성화
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
                // 인증 API
                .requestMatchers("/api/auth/**").permitAll()
                // 상품 조회는 누구나
                .requestMatchers(HttpMethod.GET,
                    "/api/products/**",
                    "/api/categories/**").permitAll()
                // Swagger
                .requestMatchers("/swagger-ui/**",
                    "/v3/api-docs/**").permitAll()
                // 관리자 전용 API
                .requestMatchers("/api/admin/**")
                    .hasRole("ADMIN")
                // 나머지 인증 필요
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtFilter,
                UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}`})})]}),e.jsx("h3",{children:"역할 기반 접근제어 예시"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"API"}),e.jsx("th",{children:"USER"}),e.jsx("th",{children:"ADMIN"}),e.jsx("th",{children:"비인증"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GET /api/products"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"POST /api/products"})}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"POST /api/orders"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("strong",{children:["PUT /api/orders/","{id}","/status"]})}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GET /api/cart"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("strong",{children:["DELETE /api/products/","{id}"]})}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 메서드 레벨 보안 vs URL 패턴 보안"]}),e.jsxs("p",{children:["URL 패턴 기반 보안(",e.jsx("code",{children:"authorizeHttpRequests"}),")은 전체적인 접근 정책을 정의하고, 메서드 레벨 보안(",e.jsx("code",{children:"@PreAuthorize"}),")은 각 서비스/컨트롤러 메서드에 세밀한 제어를 추가합니다. 둘을 함께 사용하면 ",e.jsx("strong",{children:"이중 보안"})," 체계를 구축할 수 있습니다."]})]}),e.jsx("h2",{children:"6. Redis 캐싱과 성능 최적화"}),e.jsxs("p",{children:["자주 조회되는 상품 목록을 ",e.jsx("strong",{children:"Redis"}),"에 캐싱하여 데이터베이스 부하를 줄이고 응답 속도를 개선합니다. 또한 JPA의 N+1 문제를 해결하는 방법을 학습합니다."]}),e.jsx("h3",{children:"Redis 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," config/RedisConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.ecommerce.config;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache
    .RedisCacheConfiguration;
import org.springframework.data.redis.cache
    .RedisCacheManager;
import org.springframework.data.redis.connection
    .RedisConnectionFactory;
import org.springframework.data.redis.serializer
    .GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer
    .RedisSerializationContext;
import org.springframework.data.redis.serializer
    .StringRedisSerializer;

import java.time.Duration;

@Configuration
@EnableCaching
public class RedisConfig {

    @Bean
    public CacheManager cacheManager(
            RedisConnectionFactory connectionFactory) {

        RedisCacheConfiguration config =
            RedisCacheConfiguration.defaultCacheConfig()
                // 캐시 TTL: 30분
                .entryTtl(Duration.ofMinutes(30))
                // null 값 캐싱 방지
                .disableCachingNullValues()
                // Key 직렬화
                .serializeKeysWith(
                    RedisSerializationContext
                        .SerializationPair.fromSerializer(
                            new StringRedisSerializer()))
                // Value 직렬화 (JSON)
                .serializeValuesWith(
                    RedisSerializationContext
                        .SerializationPair.fromSerializer(
                            new GenericJackson2JsonRedisSerializer()));

        return RedisCacheManager.builder(connectionFactory)
            .cacheDefaults(config)
            // 특정 캐시에 다른 TTL 적용
            .withCacheConfiguration("products",
                config.entryTtl(Duration.ofMinutes(10)))
            .withCacheConfiguration("categories",
                config.entryTtl(Duration.ofHours(1)))
            .build();
    }
}`})})]}),e.jsx("h3",{children:"@Cacheable 적용"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," service/ProductService.java (캐싱 적용)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import org.springframework.cache.annotation.*;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    // 상품 상세 조회 - 캐싱
    @Cacheable(value = "products", key = "#id")
    public ProductResponse getProductById(Long id) {
        Product product = productRepository.findById(id)
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "Product", "id", id));
        return ProductResponse.from(product);
    }

    // 상품 수정 - 캐시 갱신
    @CachePut(value = "products", key = "#id")
    @Transactional
    public ProductResponse updateProduct(
            Long id, ProductRequest request) {
        Product product = productRepository.findById(id)
            .orElseThrow(() ->
                new ResourceNotFoundException(
                    "Product", "id", id));
        product.setName(request.getName());
        product.setPrice(request.getPrice());
        // ...
        return ProductResponse.from(product);
    }

    // 상품 삭제 - 캐시 제거
    @CacheEvict(value = "products", key = "#id")
    @Transactional
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    // 카테고리 변경 시 관련 캐시 전체 제거
    @CacheEvict(value = "products", allEntries = true)
    @Transactional
    public void updateCategory(Long categoryId,
            CategoryRequest request) {
        // ...
    }
}`})})]}),e.jsx("h3",{children:"캐시 전략 비교"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"어노테이션"}),e.jsx("th",{children:"동작"}),e.jsx("th",{children:"사용 시점"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Cacheable"})}),e.jsx("td",{children:"캐시가 있으면 반환, 없으면 메서드 실행 후 저장"}),e.jsx("td",{children:"조회 (GET)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@CachePut"})}),e.jsx("td",{children:"항상 메서드 실행 후 캐시 갱신"}),e.jsx("td",{children:"수정 (PUT/PATCH)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@CacheEvict"})}),e.jsx("td",{children:"해당 키의 캐시 제거"}),e.jsx("td",{children:"삭제 (DELETE)"})]})]})]}),e.jsx("h3",{children:"N+1 문제 해결"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," N+1 문제와 해결 방법"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// N+1 문제 발생 예시:
// 상품 10개 조회 시 → 1(상품 목록) + 10(카테고리) = 11 쿼리
List<Product> products = productRepository.findAll();
for (Product p : products) {
    p.getCategory().getName(); // 각 상품마다 카테고리 조회!
}

// 해결 1: FETCH JOIN (JPQL)
@Query("SELECT p FROM Product p "
     + "JOIN FETCH p.category "
     + "WHERE p.id = :id")
Product findByIdWithCategory(@Param("id") Long id);

// 해결 2: @EntityGraph
@EntityGraph(attributePaths = {"category"})
List<Product> findAll();

// 해결 3: Batch Size (application.yml)
// spring.jpa.properties.hibernate
//   .default_batch_fetch_size: 100
// → IN 쿼리로 묶어서 처리 (100개 단위)`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," Redis 캐싱 모니터링"]}),e.jsxs("p",{children:["Redis CLI에서 ",e.jsx("code",{children:"redis-cli MONITOR"}),"를 실행하면 실시간으로 캐시 명령어를 관찰할 수 있습니다.",e.jsx("code",{children:"KEYS *"}),"로 저장된 캐시 키를 확인하고, ",e.jsx("code",{children:"TTL key"}),"로 만료 시간을 확인하세요. 운영 환경에서는 ",e.jsx("strong",{children:"Spring Boot Actuator"}),"의 ",e.jsx("code",{children:"/actuator/caches"})," 엔드포인트를 활용합니다."]})]}),e.jsx("h2",{children:"7. Docker 배포와 마무리"}),e.jsxs("p",{children:["애플리케이션을 Docker 이미지로 패키징하고, ",e.jsx("strong",{children:"docker-compose"}),"를 사용하여 애플리케이션, MySQL, Redis를 하나의 명령으로 실행합니다."]}),e.jsx("h3",{children:"Dockerfile"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Dockerfile"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 멀티 스테이지 빌드
# Stage 1: 빌드
FROM gradle:8.5-jdk21 AS builder
WORKDIR /app
COPY build.gradle settings.gradle ./
COPY src ./src
RUN gradle build -x test --no-daemon

# Stage 2: 실행
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# 보안: non-root 사용자로 실행
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

# JAR 파일 복사
COPY --from=builder /app/build/libs/*.jar app.jar

# 헬스체크
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \\
  CMD wget -qO- http://localhost:8080/actuator/health \\
  || exit 1

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`})})]}),e.jsx("h3",{children:"docker-compose.yml"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," docker-compose.yml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`version: '3.8'

services:
  # Spring Boot 애플리케이션
  app:
    build: .
    container_name: ecommerce-app
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - DB_USERNAME=ecommerce_user
      - DB_PASSWORD=secure_password_123
      - SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/ecommerce_db?useSSL=false&serverTimezone=Asia/Seoul
      - REDIS_HOST=redis
      - REDIS_PORT=6379
      - JWT_SECRET=productionJWTSecretKeyThatIsVeryLong2024
    depends_on:
      mysql:
        condition: service_healthy
      redis:
        condition: service_healthy
    restart: unless-stopped
    networks:
      - ecommerce-net

  # MySQL 데이터베이스
  mysql:
    image: mysql:8.0
    container_name: ecommerce-mysql
    ports:
      - "3307:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=root_password
      - MYSQL_DATABASE=ecommerce_db
      - MYSQL_USER=ecommerce_user
      - MYSQL_PASSWORD=secure_password_123
    volumes:
      - mysql-data:/var/lib/mysql
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping",
             "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped
    networks:
      - ecommerce-net

  # Redis 캐시
  redis:
    image: redis:7-alpine
    container_name: ecommerce-redis
    ports:
      - "6380:6379"
    command: redis-server --maxmemory 128mb
             --maxmemory-policy allkeys-lru
    volumes:
      - redis-data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 3
    restart: unless-stopped
    networks:
      - ecommerce-net

volumes:
  mysql-data:
  redis-data:

networks:
  ecommerce-net:
    driver: bridge`})})]}),e.jsx("h3",{children:"배포 명령어"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-terminal"})," Docker 명령어"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 전체 서비스 빌드 및 실행
docker-compose up --build -d

# 로그 확인
docker-compose logs -f app

# 서비스 상태 확인
docker-compose ps

# 개별 서비스 재시작
docker-compose restart app

# 전체 서비스 중지 및 볼륨 삭제
docker-compose down -v

# MySQL 컨테이너에 접속
docker exec -it ecommerce-mysql mysql -u root -p

# Redis CLI 접속
docker exec -it ecommerce-redis redis-cli`})})]}),e.jsx("h3",{children:"환경변수와 프로필 분리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," application-prod.yml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 운영 환경 설정
spring:
  jpa:
    hibernate:
      ddl-auto: validate  # 운영에서는 절대 create/update 사용 금지!
    show-sql: false

  datasource:
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      connection-timeout: 30000

logging:
  level:
    root: WARN
    com.ecommerce: INFO
    org.springframework.security: WARN

# Actuator (헬스체크)
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  endpoint:
    health:
      show-details: when-authorized`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 운영 배포 체크리스트"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"1)"})," ",e.jsx("code",{children:"ddl-auto"}),"는 반드시 ",e.jsx("code",{children:"validate"}),"로 설정 (스키마 자동 변경 방지)",e.jsx("br",{}),e.jsx("strong",{children:"2)"})," JWT Secret은 환경변수로 주입 (코드에 하드코딩 금지)",e.jsx("br",{}),e.jsx("strong",{children:"3)"})," DB 비밀번호는 Docker Secret 또는 환경변수로 관리",e.jsx("br",{}),e.jsx("strong",{children:"4)"})," 헬스체크 엔드포인트를 설정하여 컨테이너 상태 모니터링",e.jsx("br",{}),e.jsx("strong",{children:"5)"})," 로그 레벨을 적절히 조정하여 불필요한 로그 줄이기"]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 프로젝트 확장 아이디어"]}),e.jsx("p",{children:"이 프로젝트를 기반으로 다음 기능들을 추가해 보세요: 결제 게이트웨이 연동(PG사 API), 상품 리뷰/평점, 쿠폰/할인 시스템, Elasticsearch 기반 검색, 이메일 주문 알림(비동기), CI/CD 파이프라인(GitHub Actions), AWS/GCP 클라우드 배포, Kubernetes 오케스트레이션 등. 이러한 기능은 실무 이력서에서 강력한 차별 포인트가 됩니다."})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 프로젝트 과제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Spring Initializr에서 프로젝트를 생성하고 모든 엔티티(Product, Category, User, Order, OrderItem, Cart)를 구현하세요."}),e.jsx("li",{children:"상품 CRUD API를 완성하고 Postman으로 테스트하세요. ADMIN 권한이 필요한 엔드포인트가 제대로 차단되는지 확인하세요."}),e.jsx("li",{children:"장바구니에 상품을 추가하고, 주문을 생성하는 전체 흐름을 구현하세요. 재고가 부족할 때 적절한 에러가 반환되는지 테스트하세요."}),e.jsxs("li",{children:["Redis를 설치하고 ",e.jsx("code",{children:"@Cacheable"}),"을 적용한 후, 캐시 히트/미스에 따른 응답 시간 차이를 비교하세요."]}),e.jsxs("li",{children:["N+1 문제가 발생하는 쿼리를 찾고, ",e.jsx("code",{children:"FETCH JOIN"})," 또는 ",e.jsx("code",{children:"@EntityGraph"}),"로 해결하세요. 쿼리 로그로 결과를 확인하세요."]}),e.jsxs("li",{children:["Dockerfile과 docker-compose.yml을 작성하고, ",e.jsx("code",{children:"docker-compose up"}),"으로 전체 시스템을 실행하세요."]}),e.jsx("li",{children:"프로필을 분리(dev/prod)하고, 환경변수로 민감한 설정값을 주입하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${t("PJ08")?"btn-primary":"btn-accent"}`,onClick:()=>i("PJ08"),children:t("PJ08")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/projects/07",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Spring REST 블로그 API"]}),e.jsxs(r,{to:"/projects",children:[e.jsx("i",{className:"fas fa-list"})," 프로젝트 목록으로"]})]})]})})]})}export{c as default};
