import{u as i,r as a,j as e,L as t}from"./index-BAKqABqq.js";function c(){const{completeLesson:s,isLessonCompleted:r}=i();return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/projects",children:"프로젝트"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"PJ06"})]}),e.jsx("h1",{children:"PJ06. 서블릿 쇼핑몰"}),e.jsx("p",{children:"Servlet/JSP 기반의 E-commerce 웹 애플리케이션을 구현하고, 상품 관리, 장바구니, 주문/결제, 관리자 기능을 구축합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsxs("div",{style:{background:"linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",border:"1px solid #fbcfe8",borderRadius:"16px",padding:"28px 32px",marginBottom:"36px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"#9d174d",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-signal",style:{marginRight:"6px"}}),"난이도"]}),e.jsx("span",{style:{background:"#E76F00",color:"#fff",borderRadius:"6px",padding:"3px 12px",fontSize:"13px",fontWeight:600},children:"고급 (Advanced)"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"#9d174d",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-book",style:{marginRight:"6px"}}),"선수 과목"]}),e.jsx("span",{style:{fontSize:"14px",color:"#831843"},children:"S01-S10, PR04/05/06/07"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"#9d174d",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-tools",style:{marginRight:"6px"}}),"사용 도구"]}),e.jsx("span",{style:{fontSize:"14px",color:"#831843"},children:"JDK 21, Tomcat 10.1, MySQL, Maven"})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:"12px",fontWeight:600,color:"#9d174d",textTransform:"uppercase",marginBottom:"6px"},children:[e.jsx("i",{className:"fas fa-list-check",style:{marginRight:"6px"}}),"주요 기능"]}),e.jsx("span",{style:{fontSize:"14px",color:"#831843"},children:"상품 관리, 장바구니, 주문/결제 흐름, 회원 관리, 관리자 페이지"})]})]}),e.jsx("h2",{children:"1. 프로젝트 소개와 요구사항 분석"}),e.jsxs("p",{children:["이 프로젝트에서는 ",e.jsx("strong",{children:"Jakarta Servlet"}),"과 ",e.jsx("strong",{children:"JSP"}),"를 활용하여 실무 수준의 온라인 쇼핑몰 웹 애플리케이션을 구현합니다. 상품 카탈로그 관리, 장바구니, 주문/결제 프로세스, 회원 인증, 관리자 대시보드까지 E-commerce의 핵심 기능을 모두 포함합니다."]}),e.jsx("h3",{children:"기능 요구사항"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능 영역"}),e.jsx("th",{children:"상세 요구사항"}),e.jsx("th",{children:"접근 권한"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"상품 관리"})}),e.jsx("td",{children:"목록 조회, 상세 보기, 카테고리 필터링"}),e.jsx("td",{children:"전체 사용자"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"상품 CRUD"})}),e.jsx("td",{children:"상품 등록, 수정, 삭제, 이미지 업로드"}),e.jsx("td",{children:"관리자만"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"장바구니"})}),e.jsx("td",{children:"상품 추가, 수량 변경, 삭제, 합계 계산"}),e.jsx("td",{children:"로그인 사용자"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"주문/결제"})}),e.jsx("td",{children:"주문서 작성, 결제 처리, 주문 내역 조회"}),e.jsx("td",{children:"로그인 사용자"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"회원 관리"})}),e.jsx("td",{children:"회원가입, 로그인/로그아웃, 마이페이지"}),e.jsx("td",{children:"전체 사용자"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"관리자"})}),e.jsx("td",{children:"대시보드, 상품/주문/회원 관리"}),e.jsx("td",{children:"관리자만"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 프로젝트 학습 목표"]}),e.jsx("p",{children:"PJ05 서블릿 게시판에서 익힌 Servlet/JSP 기술을 발전시켜, 더 복잡한 비즈니스 로직과 다중 테이블 관계, 트랜잭션 처리, 역할 기반 접근 제어 등을 학습합니다. 실제 E-commerce 서비스의 아키텍처를 이해하고 구현하는 것이 핵심 목표입니다."})]}),e.jsx("h2",{children:"2. DB 설계와 프로젝트 구조"}),e.jsx("p",{children:"쇼핑몰은 상품, 주문, 사용자, 장바구니 등 여러 엔티티 간의 관계가 복잡합니다. 먼저 ERD를 설계하고, Maven WAR 프로젝트의 패키지 구조를 정의합니다."}),e.jsx("h3",{children:"ERD (Entity-Relationship Diagram)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," ERD 관계도"]})}),e.jsx("pre",{children:e.jsx("code",{children:`[users] 1 ─── N [orders]
  │                  │
  │                  └── N [order_items] N ──── 1 [products]
  │                                                   │
  └── N [cart_items] N ──────────────────────── 1 ─────┘

  [categories] 1 ─── N [products]`})})]}),e.jsx("h3",{children:"MySQL DDL"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-database"})," schema.sql"]})}),e.jsx("pre",{children:e.jsx("code",{children:`CREATE DATABASE IF NOT EXISTS servlet_shop
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_ci;

USE servlet_shop;

-- 회원 테이블
CREATE TABLE users (
    user_id    BIGINT AUTO_INCREMENT PRIMARY KEY,
    username   VARCHAR(50)  NOT NULL UNIQUE,
    password   VARCHAR(255) NOT NULL,
    name       VARCHAR(50)  NOT NULL,
    email      VARCHAR(100) NOT NULL,
    phone      VARCHAR(20),
    address    VARCHAR(500),
    role       ENUM('USER', 'ADMIN') DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 카테고리 테이블
CREATE TABLE categories (
    category_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    parent_id   BIGINT,
    FOREIGN KEY (parent_id) REFERENCES categories(category_id)
);

-- 상품 테이블
CREATE TABLE products (
    product_id   BIGINT AUTO_INCREMENT PRIMARY KEY,
    name         VARCHAR(200) NOT NULL,
    description  TEXT,
    price        INT          NOT NULL,
    stock        INT          NOT NULL DEFAULT 0,
    image_url    VARCHAR(500),
    category_id  BIGINT,
    is_active    BOOLEAN DEFAULT TRUE,
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- 장바구니 테이블
CREATE TABLE cart_items (
    cart_id    BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id    BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity   INT    NOT NULL DEFAULT 1,
    added_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)    REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    UNIQUE KEY uk_user_product (user_id, product_id)
);

-- 주문 테이블
CREATE TABLE orders (
    order_id      BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id       BIGINT NOT NULL,
    total_amount  INT    NOT NULL,
    status        ENUM('PENDING','PAID','SHIPPED','DELIVERED','CANCELLED')
                      DEFAULT 'PENDING',
    shipping_addr VARCHAR(500) NOT NULL,
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 주문 상세 테이블
CREATE TABLE order_items (
    item_id    BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id   BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity   INT    NOT NULL,
    price      INT    NOT NULL,
    FOREIGN KEY (order_id)   REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- 초기 관리자 계정
INSERT INTO users (username, password, name, email, role)
VALUES ('admin', 'admin123', '관리자', 'admin@shop.com', 'ADMIN');

-- 초기 카테고리
INSERT INTO categories (name) VALUES ('전자기기'), ('의류'), ('식품'), ('도서');`})})]}),e.jsx("h3",{children:"프로젝트 디렉토리 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-folder-open"})," 프로젝트 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`servlet-shop/
├── src/main/java/com/shop/
│   ├── controller/           ← Servlet 컨트롤러
│   │   ├── ProductServlet.java
│   │   ├── CartServlet.java
│   │   ├── OrderServlet.java
│   │   ├── UserServlet.java
│   │   └── AdminServlet.java
│   ├── dao/                  ← 데이터 접근 계층
│   │   ├── ProductDAO.java
│   │   ├── CartDAO.java
│   │   ├── OrderDAO.java
│   │   ├── UserDAO.java
│   │   └── CategoryDAO.java
│   ├── dto/                  ← 데이터 전송 객체
│   │   ├── ProductDTO.java
│   │   ├── CartItemDTO.java
│   │   ├── OrderDTO.java
│   │   ├── OrderItemDTO.java
│   │   └── UserDTO.java
│   ├── filter/               ← 서블릿 필터
│   │   ├── AuthFilter.java
│   │   ├── AdminFilter.java
│   │   └── EncodingFilter.java
│   └── util/
│       └── DBUtil.java
├── src/main/webapp/
│   ├── WEB-INF/
│   │   ├── web.xml
│   │   └── views/
│   │       ├── product/
│   │       │   ├── list.jsp
│   │       │   └── detail.jsp
│   │       ├── cart/
│   │       │   └── cart.jsp
│   │       ├── order/
│   │       │   ├── checkout.jsp
│   │       │   ├── complete.jsp
│   │       │   └── history.jsp
│   │       ├── user/
│   │       │   ├── login.jsp
│   │       │   ├── register.jsp
│   │       │   └── mypage.jsp
│   │       ├── admin/
│   │       │   ├── dashboard.jsp
│   │       │   ├── product-form.jsp
│   │       │   └── order-manage.jsp
│   │       └── common/
│   │           ├── header.jsp
│   │           └── footer.jsp
│   ├── css/
│   │   └── shop.css
│   ├── js/
│   │   └── shop.js
│   └── images/products/
└── pom.xml`})})]}),e.jsx("h3",{children:"Maven pom.xml"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," pom.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>
    <groupId>com.shop</groupId>
    <artifactId>servlet-shop</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>jakarta.servlet</groupId>
            <artifactId>jakarta.servlet-api</artifactId>
            <version>6.0.0</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>jakarta.servlet.jsp</groupId>
            <artifactId>jakarta.servlet.jsp-api</artifactId>
            <version>3.1.1</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.glassfish.web</groupId>
            <artifactId>jakarta.servlet.jsp.jstl</artifactId>
            <version>3.0.1</version>
        </dependency>
        <dependency>
            <groupId>jakarta.servlet.jsp.jstl</groupId>
            <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
            <version>3.0.0</version>
        </dependency>
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <version>8.3.0</version>
        </dependency>
    </dependencies>
</project>`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," ERD 설계 포인트"]}),e.jsxs("p",{children:["주문(",e.jsx("code",{children:"orders"}),")과 주문 상세(",e.jsx("code",{children:"order_items"}),")를 분리한 이유는 하나의 주문에 여러 상품이 포함될 수 있기 때문입니다. ",e.jsx("code",{children:"order_items"}),"에 가격을 별도로 저장하는 이유는 상품 가격이 변경되더라도 주문 당시의 가격을 보존하기 위해서입니다. 이는 E-commerce의 핵심 설계 원칙입니다."]})]}),e.jsx("h2",{children:"3. 상품 관리 구현"}),e.jsx("p",{children:"상품 목록 조회, 상세 보기는 모든 사용자가 접근할 수 있고, 상품 등록/수정/삭제는 관리자만 수행할 수 있습니다."}),e.jsx("h3",{children:"ProductDTO"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ProductDTO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.dto;

import java.time.LocalDateTime;

public class ProductDTO {
    private long productId;
    private String name;
    private String description;
    private int price;
    private int stock;
    private String imageUrl;
    private long categoryId;
    private String categoryName;  // JOIN 결과용
    private boolean active;
    private LocalDateTime createdAt;

    public ProductDTO() {}

    // Getter / Setter
    public long getProductId() { return productId; }
    public void setProductId(long productId) { this.productId = productId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }

    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public long getCategoryId() { return categoryId; }
    public void setCategoryId(long categoryId) { this.categoryId = categoryId; }

    public String getCategoryName() { return categoryName; }
    public void setCategoryName(String categoryName) { this.categoryName = categoryName; }

    public boolean isActive() { return active; }
    public void setActive(boolean active) { this.active = active; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    // 가격을 원화 형식으로 포맷
    public String getFormattedPrice() {
        return String.format("%,d원", price);
    }
}`})})]}),e.jsx("h3",{children:"ProductDAO"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ProductDAO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.dao;

import com.shop.dto.ProductDTO;
import com.shop.util.DBUtil;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDAO {

    // 상품 목록 (카테고리 필터 + 페이징)
    public List<ProductDTO> getProducts(Long categoryId, int page, int pageSize)
            throws SQLException {
        List<ProductDTO> list = new ArrayList<>();
        StringBuilder sql = new StringBuilder(
            "SELECT p.*, c.name AS category_name "
          + "FROM products p LEFT JOIN categories c ON p.category_id = c.category_id "
          + "WHERE p.is_active = TRUE"
        );

        if (categoryId != null) {
            sql.append(" AND p.category_id = ?");
        }
        sql.append(" ORDER BY p.created_at DESC LIMIT ? OFFSET ?");

        int offset = (page - 1) * pageSize;

        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql.toString())) {
            int idx = 1;
            if (categoryId != null) pstmt.setLong(idx++, categoryId);
            pstmt.setInt(idx++, pageSize);
            pstmt.setInt(idx, offset);

            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) list.add(mapRow(rs));
            }
        }
        return list;
    }

    // 상품 상세 조회
    public ProductDTO getById(long productId) throws SQLException {
        String sql = "SELECT p.*, c.name AS category_name "
                   + "FROM products p LEFT JOIN categories c "
                   + "ON p.category_id = c.category_id "
                   + "WHERE p.product_id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, productId);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) return mapRow(rs);
            }
        }
        return null;
    }

    // 상품 등록 (관리자)
    public void insert(ProductDTO product) throws SQLException {
        String sql = "INSERT INTO products (name, description, price, stock, "
                   + "image_url, category_id) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, product.getName());
            pstmt.setString(2, product.getDescription());
            pstmt.setInt(3, product.getPrice());
            pstmt.setInt(4, product.getStock());
            pstmt.setString(5, product.getImageUrl());
            pstmt.setLong(6, product.getCategoryId());
            pstmt.executeUpdate();
        }
    }

    // 재고 차감 (주문 시)
    public boolean decreaseStock(long productId, int quantity, Connection conn)
            throws SQLException {
        String sql = "UPDATE products SET stock = stock - ? "
                   + "WHERE product_id = ? AND stock >= ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, quantity);
            pstmt.setLong(2, productId);
            pstmt.setInt(3, quantity);
            return pstmt.executeUpdate() > 0;
        }
    }

    private ProductDTO mapRow(ResultSet rs) throws SQLException {
        ProductDTO p = new ProductDTO();
        p.setProductId(rs.getLong("product_id"));
        p.setName(rs.getString("name"));
        p.setDescription(rs.getString("description"));
        p.setPrice(rs.getInt("price"));
        p.setStock(rs.getInt("stock"));
        p.setImageUrl(rs.getString("image_url"));
        p.setCategoryId(rs.getLong("category_id"));
        p.setCategoryName(rs.getString("category_name"));
        p.setActive(rs.getBoolean("is_active"));
        p.setCreatedAt(rs.getTimestamp("created_at").toLocalDateTime());
        return p;
    }
}`})})]}),e.jsx("h3",{children:"ProductServlet"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ProductServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.controller;

import com.shop.dao.CategoryDAO;
import com.shop.dao.ProductDAO;
import com.shop.dto.ProductDTO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.util.List;

@WebServlet("/product/*")
public class ProductServlet extends HttpServlet {
    private final ProductDAO productDAO = new ProductDAO();
    private final CategoryDAO categoryDAO = new CategoryDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String pathInfo = req.getPathInfo();
        if (pathInfo == null) pathInfo = "/list";

        switch (pathInfo) {
            case "/list"   -> listProducts(req, resp);
            case "/detail" -> productDetail(req, resp);
            default        -> resp.sendError(404);
        }
    }

    private void listProducts(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        try {
            int page = 1;
            int pageSize = 12;
            String pageParam = req.getParameter("page");
            if (pageParam != null) page = Integer.parseInt(pageParam);

            String catParam = req.getParameter("category");
            Long categoryId = (catParam != null && !catParam.isEmpty())
                              ? Long.parseLong(catParam) : null;

            List<ProductDTO> products = productDAO.getProducts(
                categoryId, page, pageSize);

            req.setAttribute("products", products);
            req.setAttribute("categories", categoryDAO.getAll());
            req.setAttribute("selectedCategory", categoryId);
            req.setAttribute("currentPage", page);

            req.getRequestDispatcher("/WEB-INF/views/product/list.jsp")
               .forward(req, resp);
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    private void productDetail(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        try {
            long id = Long.parseLong(req.getParameter("id"));
            ProductDTO product = productDAO.getById(id);

            if (product == null) {
                resp.sendError(404, "상품을 찾을 수 없습니다.");
                return;
            }
            req.setAttribute("product", product);
            req.getRequestDispatcher("/WEB-INF/views/product/detail.jsp")
               .forward(req, resp);
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 카테고리 필터링"]}),e.jsxs("p",{children:["상품 목록에서 카테고리를 선택하면 URL 파라미터 ",e.jsx("code",{children:"?category=1"}),"로 전달됩니다. DAO에서는 해당 값이 있을 때만 ",e.jsx("code",{children:"WHERE"})," 조건에 카테고리 필터를 추가합니다. 이렇게 동적 SQL을 구성하면 하나의 메서드로 전체 목록과 카테고리별 목록을 모두 처리할 수 있습니다."]})]}),e.jsx("h2",{children:"4. 장바구니 기능"}),e.jsx("p",{children:"장바구니는 로그인한 사용자의 세션과 DB를 활용하여 구현합니다. 상품 추가, 수량 변경, 삭제, 합계 계산 기능을 제공합니다."}),e.jsx("h3",{children:"CartItemDTO"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CartItemDTO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.dto;

public class CartItemDTO {
    private long cartId;
    private long userId;
    private long productId;
    private int quantity;
    // 상품 정보 (JOIN 결과)
    private String productName;
    private int productPrice;
    private String productImageUrl;
    private int productStock;

    public CartItemDTO() {}

    // Getter / Setter (생략 - 위와 동일 패턴)
    public long getCartId() { return cartId; }
    public void setCartId(long cartId) { this.cartId = cartId; }

    public long getUserId() { return userId; }
    public void setUserId(long userId) { this.userId = userId; }

    public long getProductId() { return productId; }
    public void setProductId(long productId) { this.productId = productId; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public String getProductName() { return productName; }
    public void setProductName(String productName) { this.productName = productName; }

    public int getProductPrice() { return productPrice; }
    public void setProductPrice(int productPrice) { this.productPrice = productPrice; }

    public String getProductImageUrl() { return productImageUrl; }
    public void setProductImageUrl(String url) { this.productImageUrl = url; }

    public int getProductStock() { return productStock; }
    public void setProductStock(int stock) { this.productStock = stock; }

    // 소계 계산
    public int getSubtotal() {
        return productPrice * quantity;
    }

    public String getFormattedSubtotal() {
        return String.format("%,d원", getSubtotal());
    }
}`})})]}),e.jsx("h3",{children:"CartServlet"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CartServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.controller;

import com.shop.dao.CartDAO;
import com.shop.dto.CartItemDTO;
import com.shop.dto.UserDTO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.util.List;

@WebServlet("/cart/*")
public class CartServlet extends HttpServlet {
    private final CartDAO cartDAO = new CartDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        UserDTO user = getLoginUser(req);
        if (user == null) {
            resp.sendRedirect(req.getContextPath() + "/user/login");
            return;
        }

        try {
            List<CartItemDTO> items = cartDAO.getCartItems(user.getUserId());
            int totalAmount = items.stream()
                                   .mapToInt(CartItemDTO::getSubtotal)
                                   .sum();

            req.setAttribute("cartItems", items);
            req.setAttribute("totalAmount", totalAmount);
            req.setAttribute("formattedTotal",
                String.format("%,d원", totalAmount));
            req.getRequestDispatcher("/WEB-INF/views/cart/cart.jsp")
               .forward(req, resp);
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        UserDTO user = getLoginUser(req);
        if (user == null) {
            resp.sendRedirect(req.getContextPath() + "/user/login");
            return;
        }

        String action = req.getPathInfo();
        try {
            switch (action) {
                case "/add" -> {
                    long productId = Long.parseLong(req.getParameter("productId"));
                    int quantity = Integer.parseInt(
                        req.getParameter("quantity") != null
                            ? req.getParameter("quantity") : "1");
                    cartDAO.addItem(user.getUserId(), productId, quantity);
                    resp.sendRedirect(req.getContextPath() + "/cart");
                }
                case "/update" -> {
                    long cartId = Long.parseLong(req.getParameter("cartId"));
                    int quantity = Integer.parseInt(req.getParameter("quantity"));
                    if (quantity <= 0) {
                        cartDAO.removeItem(cartId);
                    } else {
                        cartDAO.updateQuantity(cartId, quantity);
                    }
                    resp.sendRedirect(req.getContextPath() + "/cart");
                }
                case "/remove" -> {
                    long cartId = Long.parseLong(req.getParameter("cartId"));
                    cartDAO.removeItem(cartId);
                    resp.sendRedirect(req.getContextPath() + "/cart");
                }
                default -> resp.sendError(404);
            }
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    private UserDTO getLoginUser(HttpServletRequest req) {
        HttpSession session = req.getSession(false);
        if (session == null) return null;
        return (UserDTO) session.getAttribute("user");
    }
}`})})]}),e.jsx("h3",{children:"CartDAO - 장바구니 데이터 접근"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CartDAO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.dao;

import com.shop.dto.CartItemDTO;
import com.shop.util.DBUtil;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CartDAO {

    // 장바구니 목록 조회 (상품 정보 JOIN)
    public List<CartItemDTO> getCartItems(long userId) throws SQLException {
        String sql = "SELECT ci.*, p.name AS product_name, p.price AS product_price, "
                   + "p.image_url AS product_image_url, p.stock AS product_stock "
                   + "FROM cart_items ci "
                   + "JOIN products p ON ci.product_id = p.product_id "
                   + "WHERE ci.user_id = ? ORDER BY ci.added_at DESC";
        List<CartItemDTO> items = new ArrayList<>();

        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, userId);
            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    CartItemDTO item = new CartItemDTO();
                    item.setCartId(rs.getLong("cart_id"));
                    item.setUserId(rs.getLong("user_id"));
                    item.setProductId(rs.getLong("product_id"));
                    item.setQuantity(rs.getInt("quantity"));
                    item.setProductName(rs.getString("product_name"));
                    item.setProductPrice(rs.getInt("product_price"));
                    item.setProductImageUrl(rs.getString("product_image_url"));
                    item.setProductStock(rs.getInt("product_stock"));
                    items.add(item);
                }
            }
        }
        return items;
    }

    // 장바구니에 상품 추가 (이미 있으면 수량 증가)
    public void addItem(long userId, long productId, int quantity)
            throws SQLException {
        String sql = "INSERT INTO cart_items (user_id, product_id, quantity) "
                   + "VALUES (?, ?, ?) "
                   + "ON DUPLICATE KEY UPDATE quantity = quantity + ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, userId);
            pstmt.setLong(2, productId);
            pstmt.setInt(3, quantity);
            pstmt.setInt(4, quantity);
            pstmt.executeUpdate();
        }
    }

    // 수량 변경
    public void updateQuantity(long cartId, int quantity) throws SQLException {
        String sql = "UPDATE cart_items SET quantity = ? WHERE cart_id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, quantity);
            pstmt.setLong(2, cartId);
            pstmt.executeUpdate();
        }
    }

    // 장바구니 항목 삭제
    public void removeItem(long cartId) throws SQLException {
        String sql = "DELETE FROM cart_items WHERE cart_id = ?";
        try (Connection conn = DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, cartId);
            pstmt.executeUpdate();
        }
    }

    // 사용자의 장바구니 전체 비우기
    public void clearCart(long userId, Connection conn) throws SQLException {
        String sql = "DELETE FROM cart_items WHERE user_id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, userId);
            pstmt.executeUpdate();
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," ON DUPLICATE KEY UPDATE"]}),e.jsxs("p",{children:["MySQL의 ",e.jsx("code",{children:"ON DUPLICATE KEY UPDATE"}),"를 활용하면 장바구니에 같은 상품을 추가할 때 INSERT 실패 대신 기존 행의 수량을 증가시킬 수 있습니다. ",e.jsx("code",{children:"cart_items"})," 테이블의",e.jsx("code",{children:"UNIQUE KEY uk_user_product (user_id, product_id)"})," 제약 조건과 함께 동작합니다."]})]}),e.jsx("h2",{children:"5. 주문과 결제 흐름"}),e.jsxs("p",{children:["장바구니에서 주문으로 전환하는 체크아웃 프로세스를 구현합니다.",e.jsx("strong",{children:"트랜잭션"}),"을 사용하여 주문 생성, 재고 차감, 장바구니 비우기를 원자적으로 처리합니다."]}),e.jsx("h3",{children:"OrderServlet - 주문 처리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," OrderServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.controller;

import com.shop.dao.*;
import com.shop.dto.*;
import com.shop.util.DBUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.sql.Connection;
import java.util.List;

@WebServlet("/order/*")
public class OrderServlet extends HttpServlet {
    private final CartDAO cartDAO = new CartDAO();
    private final OrderDAO orderDAO = new OrderDAO();
    private final ProductDAO productDAO = new ProductDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String pathInfo = req.getPathInfo();
        if (pathInfo == null) pathInfo = "/history";

        switch (pathInfo) {
            case "/checkout" -> showCheckout(req, resp);
            case "/history"  -> showHistory(req, resp);
            default          -> resp.sendError(404);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        if ("/place".equals(req.getPathInfo())) {
            placeOrder(req, resp);
        } else {
            resp.sendError(404);
        }
    }

    // 주문서 페이지 (장바구니 내용 표시)
    private void showCheckout(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        UserDTO user = getLoginUser(req);
        try {
            List<CartItemDTO> items = cartDAO.getCartItems(user.getUserId());
            if (items.isEmpty()) {
                resp.sendRedirect(req.getContextPath() + "/cart");
                return;
            }
            int total = items.stream().mapToInt(CartItemDTO::getSubtotal).sum();

            req.setAttribute("cartItems", items);
            req.setAttribute("totalAmount", total);
            req.setAttribute("user", user);
            req.getRequestDispatcher("/WEB-INF/views/order/checkout.jsp")
               .forward(req, resp);
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    // 주문 확정 (트랜잭션 처리)
    private void placeOrder(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        UserDTO user = getLoginUser(req);
        String shippingAddr = req.getParameter("shippingAddr");

        Connection conn = null;
        try {
            List<CartItemDTO> items = cartDAO.getCartItems(user.getUserId());
            if (items.isEmpty()) {
                resp.sendRedirect(req.getContextPath() + "/cart");
                return;
            }

            int totalAmount = items.stream()
                                   .mapToInt(CartItemDTO::getSubtotal).sum();

            // 트랜잭션 시작
            conn = DBUtil.getConnection();
            conn.setAutoCommit(false);

            // 1. 주문 생성
            long orderId = orderDAO.createOrder(
                user.getUserId(), totalAmount, shippingAddr, conn);

            // 2. 주문 상세 항목 추가 + 재고 차감
            for (CartItemDTO item : items) {
                orderDAO.addOrderItem(orderId, item.getProductId(),
                    item.getQuantity(), item.getProductPrice(), conn);

                boolean stockOk = productDAO.decreaseStock(
                    item.getProductId(), item.getQuantity(), conn);
                if (!stockOk) {
                    conn.rollback();
                    req.setAttribute("error",
                        item.getProductName() + "의 재고가 부족합니다.");
                    req.getRequestDispatcher("/WEB-INF/views/order/checkout.jsp")
                       .forward(req, resp);
                    return;
                }
            }

            // 3. 장바구니 비우기
            cartDAO.clearCart(user.getUserId(), conn);

            // 트랜잭션 커밋
            conn.commit();

            req.setAttribute("orderId", orderId);
            req.getRequestDispatcher("/WEB-INF/views/order/complete.jsp")
               .forward(req, resp);

        } catch (Exception e) {
            if (conn != null) {
                try { conn.rollback(); } catch (Exception ex) { /* ignore */ }
            }
            throw new ServletException(e);
        } finally {
            if (conn != null) {
                try { conn.setAutoCommit(true); conn.close(); }
                catch (Exception ex) { /* ignore */ }
            }
        }
    }

    // 주문 내역 조회
    private void showHistory(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        UserDTO user = getLoginUser(req);
        try {
            List<OrderDTO> orders = orderDAO.getOrdersByUser(user.getUserId());
            req.setAttribute("orders", orders);
            req.getRequestDispatcher("/WEB-INF/views/order/history.jsp")
               .forward(req, resp);
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    private UserDTO getLoginUser(HttpServletRequest req) {
        HttpSession session = req.getSession(false);
        return (session != null) ? (UserDTO) session.getAttribute("user") : null;
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 트랜잭션의 중요성"]}),e.jsxs("p",{children:["주문 처리 과정에서 ",e.jsx("strong",{children:"주문 생성 → 재고 차감 → 장바구니 비우기"}),"는 반드시 하나의 트랜잭션으로 처리해야 합니다. 재고 차감 중 실패하면 ",e.jsx("code",{children:"rollback()"}),"으로 모든 작업을 취소합니다.",e.jsx("code",{children:"setAutoCommit(false)"}),"로 자동 커밋을 비활성화하고, 모든 작업 성공 시",e.jsx("code",{children:"commit()"}),"을 호출하는 것이 트랜잭션의 기본 패턴입니다."]})]}),e.jsx("h3",{children:"OrderDAO - 주문 데이터 접근"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," OrderDAO.java (핵심 메서드)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.dao;

import com.shop.dto.OrderDTO;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class OrderDAO {

    // 주문 생성 (트랜잭션 내에서 호출)
    public long createOrder(long userId, int totalAmount,
                            String shippingAddr, Connection conn)
            throws SQLException {
        String sql = "INSERT INTO orders (user_id, total_amount, shipping_addr) "
                   + "VALUES (?, ?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql,
                Statement.RETURN_GENERATED_KEYS)) {
            pstmt.setLong(1, userId);
            pstmt.setInt(2, totalAmount);
            pstmt.setString(3, shippingAddr);
            pstmt.executeUpdate();

            try (ResultSet rs = pstmt.getGeneratedKeys()) {
                if (rs.next()) return rs.getLong(1);
            }
        }
        throw new SQLException("주문 ID 생성 실패");
    }

    // 주문 상세 항목 추가
    public void addOrderItem(long orderId, long productId,
                             int quantity, int price, Connection conn)
            throws SQLException {
        String sql = "INSERT INTO order_items (order_id, product_id, quantity, price) "
                   + "VALUES (?, ?, ?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, orderId);
            pstmt.setLong(2, productId);
            pstmt.setInt(3, quantity);
            pstmt.setInt(4, price);
            pstmt.executeUpdate();
        }
    }

    // 사용자의 주문 내역 조회
    public List<OrderDTO> getOrdersByUser(long userId) throws SQLException {
        String sql = "SELECT * FROM orders WHERE user_id = ? "
                   + "ORDER BY created_at DESC";
        List<OrderDTO> orders = new ArrayList<>();
        try (Connection conn = com.shop.util.DBUtil.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setLong(1, userId);
            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    OrderDTO order = new OrderDTO();
                    order.setOrderId(rs.getLong("order_id"));
                    order.setUserId(rs.getLong("user_id"));
                    order.setTotalAmount(rs.getInt("total_amount"));
                    order.setStatus(rs.getString("status"));
                    order.setShippingAddr(rs.getString("shipping_addr"));
                    order.setCreatedAt(
                        rs.getTimestamp("created_at").toLocalDateTime());
                    orders.add(order);
                }
            }
        }
        return orders;
    }
}`})})]}),e.jsx("h2",{children:"6. 회원 관리와 관리자"}),e.jsxs("p",{children:["회원가입, 로그인/로그아웃 기능과 함께, ",e.jsx("strong",{children:"ADMIN"})," 역할을 가진 사용자만 접근할 수 있는 관리자 페이지를 구현합니다."]}),e.jsx("h3",{children:"UserServlet - 회원 관리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.controller;

import com.shop.dao.UserDAO;
import com.shop.dto.UserDTO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;

@WebServlet("/user/*")
public class UserServlet extends HttpServlet {
    private final UserDAO userDAO = new UserDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String pathInfo = req.getPathInfo();

        switch (pathInfo) {
            case "/login" ->
                req.getRequestDispatcher("/WEB-INF/views/user/login.jsp")
                   .forward(req, resp);
            case "/register" ->
                req.getRequestDispatcher("/WEB-INF/views/user/register.jsp")
                   .forward(req, resp);
            case "/logout" -> {
                HttpSession session = req.getSession(false);
                if (session != null) session.invalidate();
                resp.sendRedirect(req.getContextPath() + "/product/list");
            }
            case "/mypage" ->
                req.getRequestDispatcher("/WEB-INF/views/user/mypage.jsp")
                   .forward(req, resp);
            default -> resp.sendError(404);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String pathInfo = req.getPathInfo();

        switch (pathInfo) {
            case "/login"    -> processLogin(req, resp);
            case "/register" -> processRegister(req, resp);
            default          -> resp.sendError(404);
        }
    }

    private void processLogin(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        try {
            UserDTO user = userDAO.findByUsername(username);

            if (user != null && user.getPassword().equals(password)) {
                HttpSession session = req.getSession();
                session.setAttribute("user", user);
                session.setMaxInactiveInterval(30 * 60);

                // 관리자는 대시보드로, 일반 사용자는 상품 목록으로
                if ("ADMIN".equals(user.getRole())) {
                    resp.sendRedirect(req.getContextPath() + "/admin/dashboard");
                } else {
                    resp.sendRedirect(req.getContextPath() + "/product/list");
                }
            } else {
                req.setAttribute("error", "아이디 또는 비밀번호가 올바르지 않습니다.");
                req.getRequestDispatcher("/WEB-INF/views/user/login.jsp")
                   .forward(req, resp);
            }
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }

    private void processRegister(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String name     = req.getParameter("name");
        String email    = req.getParameter("email");
        String phone    = req.getParameter("phone");
        String address  = req.getParameter("address");

        try {
            if (userDAO.findByUsername(username) != null) {
                req.setAttribute("error", "이미 존재하는 아이디입니다.");
                req.getRequestDispatcher("/WEB-INF/views/user/register.jsp")
                   .forward(req, resp);
                return;
            }

            UserDTO user = new UserDTO();
            user.setUsername(username);
            user.setPassword(password);  // 실무: BCrypt 해싱 필수
            user.setName(name);
            user.setEmail(email);
            user.setPhone(phone);
            user.setAddress(address);
            user.setRole("USER");

            userDAO.insert(user);
            resp.sendRedirect(req.getContextPath() + "/user/login");
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }
}`})})]}),e.jsx("h3",{children:"AdminFilter - 관리자 접근 제어"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AdminFilter.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.filter;

import com.shop.dto.UserDTO;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.*;
import java.io.IOException;

@WebFilter(urlPatterns = {"/admin/*"})
public class AdminFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                          FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse resp = (HttpServletResponse) response;

        HttpSession session = req.getSession(false);

        if (session == null || session.getAttribute("user") == null) {
            resp.sendRedirect(req.getContextPath() + "/user/login");
            return;
        }

        UserDTO user = (UserDTO) session.getAttribute("user");
        if (!"ADMIN".equals(user.getRole())) {
            resp.sendError(403, "관리자만 접근할 수 있습니다.");
            return;
        }

        chain.doFilter(request, response);
    }
}`})})]}),e.jsx("h3",{children:"AdminServlet - 관리자 대시보드"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AdminServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.shop.controller;

import com.shop.dao.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import java.io.IOException;

@WebServlet("/admin/*")
public class AdminServlet extends HttpServlet {
    private final ProductDAO productDAO = new ProductDAO();
    private final OrderDAO orderDAO = new OrderDAO();
    private final UserDAO userDAO = new UserDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String pathInfo = req.getPathInfo();
        if (pathInfo == null) pathInfo = "/dashboard";

        try {
            switch (pathInfo) {
                case "/dashboard" -> {
                    // 대시보드 통계 데이터
                    req.setAttribute("totalProducts", productDAO.getTotalCount());
                    req.setAttribute("totalOrders", orderDAO.getTotalCount());
                    req.setAttribute("totalUsers", userDAO.getTotalCount());
                    req.setAttribute("recentOrders", orderDAO.getRecentOrders(5));
                    req.getRequestDispatcher("/WEB-INF/views/admin/dashboard.jsp")
                       .forward(req, resp);
                }
                case "/product-form" -> {
                    String idParam = req.getParameter("id");
                    if (idParam != null) {
                        req.setAttribute("product",
                            productDAO.getById(Long.parseLong(idParam)));
                    }
                    req.setAttribute("categories",
                        new CategoryDAO().getAll());
                    req.getRequestDispatcher(
                        "/WEB-INF/views/admin/product-form.jsp")
                       .forward(req, resp);
                }
                default -> resp.sendError(404);
            }
        } catch (Exception e) {
            throw new ServletException(e);
        }
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 역할 기반 접근 제어 (RBAC)"]}),e.jsxs("p",{children:[e.jsx("code",{children:"AdminFilter"}),"는 ",e.jsx("code",{children:"/admin/*"})," URL 패턴에 매핑되어 관리자 페이지를 보호합니다. 세션에서 사용자 정보를 꺼내 ",e.jsx("code",{children:"role"})," 필드를 확인하는 간단한 방식이지만, 실무에서는 Spring Security 같은 프레임워크를 사용하여 더 정교한 접근 제어를 구현합니다."]})]}),e.jsx("h2",{children:"7. 프론트엔드와 마무리"}),e.jsx("p",{children:"JSP 뷰에서 EL/JSTL을 활용한 동적 렌더링, 반응형 CSS, JavaScript 인터랙션을 구현하고 최종 배포까지 마무리합니다."}),e.jsx("h3",{children:"상품 목록 JSP"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," product/list.jsp"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<!DOCTYPE html>
<html>
<head>
    <title>쇼핑몰 - 상품 목록</title>
    <link rel="stylesheet" href="\${pageContext.request.contextPath}/css/shop.css"/>
</head>
<body>
    <%@ include file="/WEB-INF/views/common/header.jsp" %>

    <div class="container">
        <!-- 카테고리 필터 -->
        <div class="category-filter">
            <a href="\${pageContext.request.contextPath}/product/list"
               class="\${empty selectedCategory ? 'active' : ''}">전체</a>
            <c:forEach var="cat" items="\${categories}">
                <a href="?category=\${cat.categoryId}"
                   class="\${selectedCategory == cat.categoryId ? 'active' : ''}">
                    \${cat.name}
                </a>
            </c:forEach>
        </div>

        <!-- 상품 그리드 -->
        <div class="product-grid">
            <c:forEach var="product" items="\${products}">
                <div class="product-card">
                    <a href="\${pageContext.request.contextPath}/product/detail?id=\${product.productId}">
                        <img src="\${product.imageUrl}" alt="\${product.name}"
                             class="product-image"/>
                        <div class="product-info">
                            <span class="category-tag">\${product.categoryName}</span>
                            <h3>\${product.name}</h3>
                            <p class="price">
                                <fmt:formatNumber value="\${product.price}"
                                    type="number" groupingUsed="true"/>원
                            </p>
                            <c:if test="\${product.stock <= 0}">
                                <span class="out-of-stock">품절</span>
                            </c:if>
                        </div>
                    </a>
                </div>
            </c:forEach>
        </div>
    </div>

    <%@ include file="/WEB-INF/views/common/footer.jsp" %>
</body>
</html>`})})]}),e.jsx("h3",{children:"반응형 CSS"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," shop.css (주요 스타일)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`/* 상품 그리드 - 반응형 */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 24px;
    padding: 24px 0;
}

.product-card {
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    background: #fff;
}
.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.product-info { padding: 16px; }
.product-info h3 { margin: 8px 0; font-size: 1rem; }
.product-info .price { font-size: 1.2rem; font-weight: 700; color: #dc2626; }
.category-tag {
    background: #eff6ff; color: #2563eb;
    padding: 2px 8px; border-radius: 4px; font-size: 12px;
}
.out-of-stock {
    background: #fee2e2; color: #dc2626;
    padding: 4px 12px; border-radius: 4px; font-size: 13px; font-weight: 600;
}

/* 카테고리 필터 */
.category-filter {
    display: flex; gap: 8px; flex-wrap: wrap; padding: 16px 0;
}
.category-filter a {
    padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 20px;
    text-decoration: none; color: #4b5563; font-size: 14px;
}
.category-filter a.active {
    background: #3b82f6; color: #fff; border-color: #3b82f6;
}

/* 장바구니 테이블 */
.cart-table { width: 100%; border-collapse: collapse; }
.cart-table th, .cart-table td { padding: 16px; border-bottom: 1px solid #e5e7eb; }
.cart-table .quantity-input { width: 60px; text-align: center; }

/* 반응형 */
@media (max-width: 768px) {
    .product-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .product-image { height: 150px; }
}
@media (max-width: 480px) {
    .product-grid { grid-template-columns: 1fr; }
}`})})]}),e.jsx("h3",{children:"JavaScript 인터랙션"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," shop.js"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 장바구니 수량 변경 (AJAX)
document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', function() {
        const cartId = this.dataset.cartId;
        const quantity = parseInt(this.value);

        if (quantity <= 0) {
            if (confirm('이 상품을 장바구니에서 삭제하시겠습니까?')) {
                document.getElementById('remove-form-' + cartId).submit();
            } else {
                this.value = 1;
            }
            return;
        }

        // 수량 업데이트 폼 제출
        const form = document.getElementById('update-form-' + cartId);
        form.querySelector('input[name="quantity"]').value = quantity;
        form.submit();
    });
});

// 주문 확인 다이얼로그
document.getElementById('place-order-btn')?.addEventListener('click', function(e) {
    if (!confirm('주문을 확정하시겠습니까?')) {
        e.preventDefault();
    }
});

// 상품 삭제 확인 (관리자)
document.querySelectorAll('.delete-product-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!confirm('이 상품을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
            e.preventDefault();
        }
    });
});`})})]}),e.jsx("h3",{children:"배포 체크리스트"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"항목"}),e.jsx("th",{children:"확인 내용"}),e.jsx("th",{children:"상태"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DB 설정"})}),e.jsx("td",{children:"MySQL 서버 실행, 스키마/테이블 생성 완료"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DBUtil 설정"})}),e.jsx("td",{children:"DB URL, 사용자명, 비밀번호 확인"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Tomcat 설정"})}),e.jsx("td",{children:"Tomcat 10.1 설치, JAVA_HOME 환경변수 확인"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"WAR 빌드"})}),e.jsxs("td",{children:[e.jsx("code",{children:"mvn clean package"})," 성공 확인"]}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"배포"})}),e.jsx("td",{children:"WAR 파일을 Tomcat webapps에 배포"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"초기 데이터"})}),e.jsx("td",{children:"관리자 계정, 카테고리, 샘플 상품 INSERT"}),e.jsx("td",{children:"-"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"기능 테스트"})}),e.jsx("td",{children:"회원가입, 로그인, 상품 조회, 장바구니, 주문 테스트"}),e.jsx("td",{children:"-"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 프로젝트 확장 아이디어"]}),e.jsx("p",{children:"기본 기능 구현 후 다음과 같이 확장해볼 수 있습니다: (1) 상품 리뷰/평점 기능, (2) 위시리스트, (3) 쿠폰/할인 시스템, (4) 이메일 주문 확인 알림, (5) 결제 API 연동 (포트원/토스페이먼츠), (6) 관리자 매출 통계 차트. 이러한 기능을 추가하면서 실무 감각을 키워보세요."})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 실습 과제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"위 코드를 기반으로 프로젝트를 생성하고, 상품 목록/상세 페이지가 정상 동작하는지 확인하세요."}),e.jsx("li",{children:"장바구니에 상품을 추가하고, 수량 변경 및 삭제가 올바르게 동작하는지 테스트하세요."}),e.jsx("li",{children:"주문 프로세스를 테스트하세요: 장바구니 → 주문서 → 주문 확정 → 주문 내역 확인. 재고가 정확히 차감되는지 확인하세요."}),e.jsxs("li",{children:["관리자 계정으로 로그인하여 상품 등록/수정/삭제가 동작하는지 확인하세요. 일반 사용자가 ",e.jsx("code",{children:"/admin"}),"에 접근하면 403 에러가 발생하는지 확인하세요."]}),e.jsxs("li",{children:["상품 리뷰 기능을 추가해보세요: ",e.jsx("code",{children:"reviews"})," 테이블을 설계하고, 상품 상세 페이지에 리뷰 목록과 작성 폼을 구현하세요."]}),e.jsx("li",{children:"반응형 CSS를 적용하여 모바일에서도 상품 목록과 장바구니가 깔끔하게 보이도록 스타일을 개선하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${r("PJ06")?"btn-primary":"btn-accent"}`,onClick:()=>s("PJ06"),children:r("PJ06")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/projects/05",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 서블릿 게시판"]}),e.jsxs(t,{to:"/projects/07",children:["다음: Spring REST 블로그 API ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{c as default};
