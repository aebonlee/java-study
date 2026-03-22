import{u as t,r,j as e,L as s}from"./index-Ct_dZ95J.js";import{J as n}from"./JavaCodeRunner-BSoYafTD.js";function l(){const{completeLesson:a,isLessonCompleted:i}=t();return r.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 15"})]}),e.jsx("h1",{children:"Lesson 15. Swagger/OpenAPI 문서화"}),e.jsx("p",{children:"OpenAPI 3.0 스펙과 SpringDoc 라이브러리를 활용하여 API 문서를 자동 생성하고 관리하는 방법을 배웁니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. API 문서화의 중요성"}),e.jsxs("p",{children:["API 문서는 프론트엔드 개발자, 외부 파트너, QA 팀이 API를 이해하고 사용하기 위한 ",e.jsx("strong",{children:"필수 자산"}),"입니다."]}),e.jsxs("table",{className:"info-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"방법"}),e.jsx("th",{children:"장점"}),e.jsx("th",{children:"단점"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"수동 문서 (Wiki, Notion)"})}),e.jsx("td",{children:"자유로운 형식"}),e.jsx("td",{children:"코드와 동기화 어려움, 누락 위험"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Postman Collection"})}),e.jsx("td",{children:"바로 테스트 가능"}),e.jsx("td",{children:"코드 변경 시 수동 업데이트"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Swagger/OpenAPI (자동)"})}),e.jsx("td",{children:"코드 기반 자동 생성, 항상 최신"}),e.jsx("td",{children:"초기 설정 필요"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Swagger vs OpenAPI"]}),e.jsx("p",{children:"OpenAPI는 REST API 명세의 표준 스펙이고, Swagger는 이 스펙을 구현하는 도구 모음입니다. Swagger UI는 OpenAPI 스펙을 시각적으로 보여주는 웹 인터페이스입니다. OpenAPI 3.0이 현재 최신 표준입니다."})]}),e.jsx("h2",{children:"2. OpenAPI 3.0 스펙"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," OpenAPI 3.0 스펙 예시 (YAML)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`openapi: 3.0.3
info:
  title: 게시판 API
  description: Spring Boot 게시판 REST API
  version: 1.0.0
servers:
  - url: http://localhost:8080/api

paths:
  /posts:
    get:
      summary: 게시글 목록 조회
      tags:
        - Post
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 0
      responses:
        '200':
          description: 성공
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/PostDto'

components:
  schemas:
    PostDto:
      type: object
      properties:
        id:
          type: integer
        title:
          type: string
        content:
          type: string`})})]}),e.jsx("h2",{children:"3. SpringDoc 라이브러리 설정"}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle"]})}),e.jsx("pre",{children:e.jsx("code",{children:`dependencies {
    // SpringDoc OpenAPI (Swagger UI 포함)
    implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.3.0'
}

// 설정 후 접속 URL:
// Swagger UI: http://localhost:8080/swagger-ui.html
// OpenAPI JSON: http://localhost:8080/v3/api-docs
// OpenAPI YAML: http://localhost:8080/v3/api-docs.yaml`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," application.yml (설정)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`springdoc:
  swagger-ui:
    path: /swagger-ui.html       # Swagger UI 경로
    tags-sorter: alpha            # 태그 알파벳 정렬
    operations-sorter: method     # 메서드별 정렬
  api-docs:
    path: /v3/api-docs            # API 스펙 경로
  default-consumes-media-type: application/json
  default-produces-media-type: application/json`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," OpenApiConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("게시판 API")
                .description("Spring Boot 게시판 REST API 문서")
                .version("v1.0.0")
                .contact(new Contact()
                    .name("개발팀")
                    .email("dev@example.com"))
                .license(new License()
                    .name("MIT License")))
            .addSecurityItem(new SecurityRequirement().addList("Bearer Token"))
            .components(new Components()
                .addSecuritySchemes("Bearer Token",
                    new SecurityScheme()
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .bearerFormat("JWT")
                        .description("JWT 토큰을 입력하세요")));
    }
}`})})]}),e.jsx("h2",{children:"4. @Operation, @ApiResponse, @Parameter 어노테이션"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PostController.java (문서화 적용)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@RestController
@RequestMapping("/api/posts")
@Tag(name = "Post", description = "게시글 API")  // API 그룹 태그
public class PostController {

    @Operation(
        summary = "게시글 목록 조회",
        description = "페이징을 지원하는 게시글 목록 조회 API입니다."
    )
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "조회 성공",
            content = @Content(schema = @Schema(implementation = PostDto.class))),
        @ApiResponse(responseCode = "500", description = "서버 오류")
    })
    @GetMapping
    public List<PostDto> getAllPosts(
            @Parameter(description = "페이지 번호 (0부터 시작)", example = "0")
            @RequestParam(defaultValue = "0") int page,
            @Parameter(description = "페이지 크기", example = "10")
            @RequestParam(defaultValue = "10") int size) {
        return postService.findAll(page, size);
    }

    @Operation(summary = "게시글 단건 조회", description = "ID로 게시글을 조회합니다.")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "조회 성공"),
        @ApiResponse(responseCode = "404", description = "게시글을 찾을 수 없음")
    })
    @GetMapping("/{id}")
    public PostDto getPost(
            @Parameter(description = "게시글 ID", required = true, example = "1")
            @PathVariable Long id) {
        return postService.findById(id);
    }

    @Operation(summary = "게시글 생성", description = "새 게시글을 작성합니다.")
    @ApiResponse(responseCode = "201", description = "생성 성공")
    @PostMapping
    public ResponseEntity<PostDto> createPost(
            @RequestBody CreatePostRequest request) {
        PostDto created = postService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
}`})})]}),e.jsx("h2",{children:"5. @Schema로 모델 문서화"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DTO에 @Schema 적용"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Schema(description = "게시글 생성 요청")
public class CreatePostRequest {

    @Schema(description = "게시글 제목", example = "Spring Boot 시작하기",
            requiredMode = Schema.RequiredMode.REQUIRED, maxLength = 200)
    @NotBlank
    @Size(max = 200)
    private String title;

    @Schema(description = "게시글 내용", example = "Spring Boot는 자동 설정을 제공합니다...")
    @NotBlank
    private String content;

    @Schema(description = "작성자", example = "홍길동",
            requiredMode = Schema.RequiredMode.REQUIRED)
    @NotBlank
    private String author;
}

@Schema(description = "게시글 응답")
public class PostDto {

    @Schema(description = "게시글 ID", example = "1")
    private Long id;

    @Schema(description = "제목", example = "Spring Boot 시작하기")
    private String title;

    @Schema(description = "내용")
    private String content;

    @Schema(description = "작성자", example = "홍길동")
    private String author;

    @Schema(description = "작성일시", example = "2024-01-15T10:30:00")
    private LocalDateTime createdAt;
}

// Enum 문서화
@Schema(description = "게시글 상태")
public enum PostStatus {
    @Schema(description = "작성 중") DRAFT,
    @Schema(description = "게시됨") PUBLISHED,
    @Schema(description = "삭제됨") DELETED
}`})})]}),e.jsx("h2",{children:"6. Swagger UI 커스터마이징"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 커스터마이징 옵션"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// application.yml에서 Swagger UI 커스터마이징
springdoc:
  swagger-ui:
    path: /swagger-ui.html
    tags-sorter: alpha              # 태그 정렬
    operations-sorter: method       # HTTP 메서드별 정렬
    display-request-duration: true  # 요청 소요 시간 표시
    filter: true                    # 검색 필터 활성화
    try-it-out-enabled: true        # Try it out 기본 활성화
    doc-expansion: none             # 기본 접기 (none | list | full)
  show-actuator: false              # Actuator 엔드포인트 숨김
  packages-to-scan: com.example.demo.controller  # 스캔 패키지 지정

// 프로덕션에서 Swagger 비활성화
// application-prod.yml
springdoc:
  api-docs:
    enabled: false
  swagger-ui:
    enabled: false`})})]}),e.jsx("h2",{children:"7. 그룹별 API 문서 분리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 그룹 설정"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Configuration
public class OpenApiGroupConfig {

    // 사용자 API 그룹
    @Bean
    public GroupedOpenApi userApi() {
        return GroupedOpenApi.builder()
                .group("user-api")
                .displayName("사용자 API")
                .pathsToMatch("/api/users/**", "/api/auth/**")
                .build();
    }

    // 게시판 API 그룹
    @Bean
    public GroupedOpenApi postApi() {
        return GroupedOpenApi.builder()
                .group("post-api")
                .displayName("게시판 API")
                .pathsToMatch("/api/posts/**", "/api/comments/**")
                .build();
    }

    // 관리자 API 그룹
    @Bean
    public GroupedOpenApi adminApi() {
        return GroupedOpenApi.builder()
                .group("admin-api")
                .displayName("관리자 API")
                .pathsToMatch("/api/admin/**")
                .packagesToScan("com.example.demo.controller.admin")
                .build();
    }
}

// Swagger UI에서 드롭다운으로 그룹을 선택할 수 있습니다
// /swagger-ui.html?urls.primaryName=user-api`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsx("p",{children:"Swagger 문서는 개발/테스트 환경에서만 활성화하고, 프로덕션에서는 반드시 비활성화하세요. 또한 민감한 API (관리자 전용 등)는 별도 그룹으로 분리하여 접근을 제한하는 것이 좋습니다."})]}),e.jsx(n,{defaultCode:`// OpenAPI 어노테이션 개념 이해하기
// 어노테이션이 API 문서에 어떤 정보를 추가하는지 시뮬레이션합니다.

import java.util.*;

public class Main {

    // @Schema 시뮬레이션 - 필드 메타데이터
    static class FieldDoc {
        String name;
        String description;
        String example;
        boolean required;

        FieldDoc(String name, String desc, String example, boolean required) {
            this.name = name;
            this.description = desc;
            this.example = example;
            this.required = required;
        }
    }

    // @Operation 시뮬레이션 - API 메타데이터
    static class ApiDoc {
        String method;
        String path;
        String summary;
        String description;
        List<FieldDoc> parameters;
        Map<String, String> responses;

        ApiDoc(String method, String path, String summary, String desc) {
            this.method = method;
            this.path = path;
            this.summary = summary;
            this.description = desc;
            this.parameters = new ArrayList<>();
            this.responses = new LinkedHashMap<>();
        }

        void addParam(FieldDoc field) { parameters.add(field); }
        void addResponse(String code, String desc) { responses.put(code, desc); }

        void print() {
            System.out.println("\\n" + method + " " + path);
            System.out.println("  Summary: " + summary);
            System.out.println("  Description: " + description);
            if (!parameters.isEmpty()) {
                System.out.println("  Parameters:");
                for (FieldDoc p : parameters) {
                    System.out.println("    - " + p.name + " (" + (p.required ? "필수" : "선택")
                        + "): " + p.description + " [예: " + p.example + "]");
                }
            }
            System.out.println("  Responses:");
            for (var entry : responses.entrySet()) {
                System.out.println("    " + entry.getKey() + ": " + entry.getValue());
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("=== Swagger/OpenAPI 문서 시뮬레이션 ===");
        System.out.println("============================================");

        // @Tag - API 그룹
        System.out.println("\\n[Tag: Post - 게시글 API]");

        // GET /api/posts
        ApiDoc getAll = new ApiDoc("GET", "/api/posts", "게시글 목록 조회",
            "페이징을 지원하는 게시글 목록 조회 API");
        getAll.addParam(new FieldDoc("page", "페이지 번호", "0", false));
        getAll.addParam(new FieldDoc("size", "페이지 크기", "10", false));
        getAll.addResponse("200", "조회 성공 - List<PostDto>");
        getAll.addResponse("500", "서버 오류");
        getAll.print();

        // POST /api/posts
        ApiDoc create = new ApiDoc("POST", "/api/posts", "게시글 생성",
            "새 게시글을 작성합니다");
        create.addParam(new FieldDoc("title", "제목", "Spring Boot 시작하기", true));
        create.addParam(new FieldDoc("content", "내용", "Spring Boot는...", true));
        create.addParam(new FieldDoc("author", "작성자", "홍길동", true));
        create.addResponse("201", "생성 성공 - PostDto");
        create.addResponse("400", "유효성 검증 실패");
        create.print();

        System.out.println("\\n=== 핵심 포인트 ===");
        System.out.println("1. @Operation: API 메서드에 설명 추가");
        System.out.println("2. @Parameter: 파라미터에 설명/예시 추가");
        System.out.println("3. @Schema: DTO 필드에 설명/예시 추가");
        System.out.println("4. @ApiResponse: 응답 상태 코드별 설명 추가");
    }
}`,title:"OpenAPI 어노테이션 개념 데모"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"SpringDoc을 프로젝트에 추가하고 Swagger UI에 접속해 보세요."}),e.jsx("li",{children:"모든 컨트롤러에 @Operation, @ApiResponse, @Parameter를 적용해 보세요."}),e.jsx("li",{children:"DTO 클래스에 @Schema를 적용하여 필드 설명과 예시를 추가해 보세요."}),e.jsx("li",{children:"API를 2개 이상의 그룹으로 분리하고, 프로덕션 환경에서 Swagger를 비활성화하는 설정을 해 보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${i("SP15")?"btn-primary":"btn-accent"}`,onClick:()=>a("SP15"),children:i("SP15")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/spring/14",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 테스트 (JUnit5, MockMvc)"]}),e.jsxs(s,{to:"/spring/16",children:["다음: 배포 (Docker, CI/CD) ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
