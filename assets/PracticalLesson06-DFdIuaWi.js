import{u as n,r as a,j as e,L as s}from"./index-CEQBFVPE.js";function l(){const{completeLesson:i,isLessonCompleted:r}=n();return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/practical",children:"실무 Java"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 06"})]}),e.jsx("h1",{children:"Lesson 06. JSON 처리 (Jackson, Gson)"}),e.jsx("p",{children:"ObjectMapper, 어노테이션, DTO 변환, REST 연동을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. JSON이란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"JSON(JavaScript Object Notation)"}),"은 데이터를 교환하기 위한 경량 텍스트 형식입니다. 사람이 읽기 쉽고 기계가 파싱하기 쉬워, 현대 웹 개발에서 가장 널리 사용되는 데이터 포맷입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," JSON 기본 형식"]})}),e.jsx("pre",{children:e.jsx("code",{children:`{
  "name": "홍길동",
  "age": 28,
  "email": "hong@example.com",
  "active": true,
  "address": {
    "city": "서울",
    "zipCode": "06000"
  },
  "skills": ["Java", "Spring", "SQL"],
  "projects": [
    { "name": "쇼핑몰", "year": 2024 },
    { "name": "채팅 서비스", "year": 2025 }
  ]
}`})})]}),e.jsx("h3",{children:"XML vs JSON 비교"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"특성"}),e.jsx("th",{children:"JSON"}),e.jsx("th",{children:"XML"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"가독성"})}),e.jsx("td",{children:"간결하고 직관적"}),e.jsx("td",{children:"태그가 많아 장황함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"데이터 크기"})}),e.jsx("td",{children:"작음 (태그 오버헤드 없음)"}),e.jsx("td",{children:"큼 (열기/닫기 태그)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"파싱 속도"})}),e.jsx("td",{children:"빠름"}),e.jsx("td",{children:"상대적으로 느림"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"배열 지원"})}),e.jsx("td",{children:"네이티브 배열 지원"}),e.jsx("td",{children:"별도 구조 필요"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"주석"})}),e.jsx("td",{children:"지원하지 않음"}),e.jsx("td",{children:"지원"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"사용처"})}),e.jsx("td",{children:"REST API, 설정 파일"}),e.jsx("td",{children:"SOAP, 문서 마크업"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," XML vs JSON 동일 데이터 비교"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<!-- XML 표현 -->
<member>
  <name>홍길동</name>
  <age>28</age>
  <skills>
    <skill>Java</skill>
    <skill>Spring</skill>
  </skills>
</member>

// JSON 표현 (훨씬 간결!)
{
  "name": "홍길동",
  "age": 28,
  "skills": ["Java", "Spring"]
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," REST API와 JSON"]}),e.jsxs("p",{children:["현대 REST API는 거의 대부분 JSON을 데이터 교환 형식으로 사용합니다. Spring Boot에서 ",e.jsx("code",{children:"@RestController"}),"를 사용하면 자동으로 Java 객체를 JSON으로 변환(직렬화)하고, 요청 본문의 JSON을 Java 객체로 변환(역직렬화)합니다. 이 과정에서 Jackson 라이브러리가 기본으로 사용됩니다."]})]}),e.jsx("h2",{children:"2. Jackson 기초"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Jackson"}),"은 Java에서 가장 널리 사용되는 JSON 처리 라이브러리입니다. Spring Boot에 기본 포함되어 있으며, ",e.jsx("code",{children:"ObjectMapper"})," 클래스가 핵심입니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," pom.xml (Maven 의존성)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<!-- Spring Boot 사용 시 자동 포함, 단독 사용 시 추가 -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.17.0</version>
</dependency>

<!-- Java 8 날짜/시간 타입 지원 -->
<dependency>
    <groupId>com.fasterxml.jackson.datatype</groupId>
    <artifactId>jackson-datatype-jsr310</artifactId>
    <version>2.17.0</version>
</dependency>`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Member.java (DTO 클래스)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Member {
    private Long id;
    private String name;
    private String email;
    private int age;
    private LocalDateTime createdAt;

    // 기본 생성자 (Jackson 역직렬화에 필수!)
    public Member() {}

    public Member(Long id, String name, String email, int age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.createdAt = LocalDateTime.now();
    }

    // Getter/Setter (Jackson이 접근하는 데 사용)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}`})})]}),e.jsx("h3",{children:"직렬화 (Java 객체 → JSON)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SerializationExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

public class SerializationExample {
    public static void main(String[] args) throws Exception {
        // ObjectMapper 생성 및 설정
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        mapper.enable(SerializationFeature.INDENT_OUTPUT);  // 보기 좋게 출력
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

        // Java 객체 -> JSON 문자열
        Member member = new Member(1L, "홍길동", "hong@test.com", 28);
        String json = mapper.writeValueAsString(member);
        System.out.println(json);
        // 출력:
        // {
        //   "id" : 1,
        //   "name" : "홍길동",
        //   "email" : "hong@test.com",
        //   "age" : 28,
        //   "createdAt" : "2025-01-15T10:30:00"
        // }

        // Java 객체 -> JSON 파일로 저장
        mapper.writeValue(new File("member.json"), member);

        // List -> JSON 배열
        List<Member> members = List.of(
            new Member(1L, "홍길동", "hong@test.com", 28),
            new Member(2L, "김영희", "kim@test.com", 25)
        );
        String jsonArray = mapper.writeValueAsString(members);
        System.out.println(jsonArray);
    }
}`})})]}),e.jsx("h3",{children:"역직렬화 (JSON → Java 객체)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DeserializationExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class DeserializationExample {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());

        // JSON 문자열 -> Java 객체
        String json = """
            {
                "id": 1,
                "name": "홍길동",
                "email": "hong@test.com",
                "age": 28
            }
            """;

        Member member = mapper.readValue(json, Member.class);
        System.out.println(member.getName());   // 홍길동
        System.out.println(member.getEmail());  // hong@test.com

        // JSON 파일 -> Java 객체
        Member fromFile = mapper.readValue(new File("member.json"), Member.class);

        // JSON 배열 -> List<Member>
        String jsonArray = """
            [
                {"id": 1, "name": "홍길동", "age": 28},
                {"id": 2, "name": "김영희", "age": 25}
            ]
            """;

        // 제네릭 타입은 TypeReference 사용
        List<Member> members = mapper.readValue(
            jsonArray,
            new TypeReference<List<Member>>() {}
        );
        members.forEach(m ->
            System.out.println(m.getName() + " (" + m.getAge() + "세)")
        );
    }
}`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," 주의"]}),e.jsxs("p",{children:["Jackson이 역직렬화할 때 ",e.jsx("strong",{children:"기본 생성자(no-arg constructor)"}),"가 반드시 필요합니다. 기본 생성자가 없으면 ",e.jsx("code",{children:"InvalidDefinitionException"}),"이 발생합니다. 또한 JSON에 있지만 Java 클래스에 없는 필드가 있으면 ",e.jsx("code",{children:"UnrecognizedPropertyException"}),"이 발생하므로, 이를 무시하려면 ",e.jsx("code",{children:"mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)"}),"를 설정하세요."]})]}),e.jsx("h2",{children:"3. Jackson 어노테이션"}),e.jsx("p",{children:"Jackson은 다양한 어노테이션을 제공하여 직렬화/역직렬화 동작을 세밀하게 제어할 수 있습니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"어노테이션"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"적용 위치"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@JsonProperty"})}),e.jsx("td",{children:"JSON 필드 이름을 지정"}),e.jsx("td",{children:"필드, Getter/Setter"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@JsonIgnore"})}),e.jsx("td",{children:"특정 필드를 직렬화/역직렬화에서 제외"}),e.jsx("td",{children:"필드, Getter/Setter"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@JsonFormat"})}),e.jsx("td",{children:"날짜/시간 형식 지정"}),e.jsx("td",{children:"필드"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@JsonInclude"})}),e.jsx("td",{children:"null이나 빈 값 제외 조건"}),e.jsx("td",{children:"클래스, 필드"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@JsonCreator"})}),e.jsx("td",{children:"역직렬화에 사용할 생성자 지정"}),e.jsx("td",{children:"생성자"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@JsonIgnoreProperties"})}),e.jsx("td",{children:"여러 필드를 한번에 무시"}),e.jsx("td",{children:"클래스"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@JsonNaming"})}),e.jsx("td",{children:"네이밍 전략 지정 (camelCase, snake_case)"}),e.jsx("td",{children:"클래스"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberDto.java (어노테이션 활용)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;

@JsonIgnoreProperties(ignoreUnknown = true)  // 알 수 없는 필드 무시
@JsonInclude(JsonInclude.Include.NON_NULL)   // null 필드 제외
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)  // snake_case 매핑
public class MemberDto {

    private Long id;

    @JsonProperty("user_name")  // JSON 필드 이름 지정
    private String name;

    private String email;

    @JsonIgnore  // 직렬화/역직렬화에서 제외 (비밀번호 노출 방지!)
    private String password;

    @JsonFormat(shape = JsonFormat.Shape.STRING,
                pattern = "yyyy-MM-dd HH:mm:ss",
                timezone = "Asia/Seoul")
    private LocalDateTime createdAt;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    // 기본 생성자
    public MemberDto() {}

    // @JsonCreator: 불변 객체에 유용
    @JsonCreator
    public MemberDto(
            @JsonProperty("id") Long id,
            @JsonProperty("user_name") String name,
            @JsonProperty("email") String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Getter/Setter 생략
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 어노테이션 결과 확인"]})}),e.jsx("pre",{children:e.jsx("code",{children:`ObjectMapper mapper = new ObjectMapper();
mapper.registerModule(new JavaTimeModule());
mapper.enable(SerializationFeature.INDENT_OUTPUT);

MemberDto dto = new MemberDto();
dto.setId(1L);
dto.setName("홍길동");
dto.setEmail("hong@test.com");
dto.setPassword("secret123");  // @JsonIgnore로 제외됨
dto.setCreatedAt(LocalDateTime.of(2025, 1, 15, 10, 30, 0));
dto.setBirthDate(null);  // @JsonInclude(NON_NULL)로 제외됨

String json = mapper.writeValueAsString(dto);
System.out.println(json);
// 출력:
// {
//   "id" : 1,
//   "user_name" : "홍길동",       <- @JsonProperty 적용
//   "email" : "hong@test.com",
//   "created_at" : "2025-01-15 10:30:00"  <- @JsonFormat 적용
//   // password: 제외됨 (@JsonIgnore)
//   // birth_date: 제외됨 (null이므로 @JsonInclude)
// }`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁: @JsonProperty의 access 속성"]}),e.jsxs("p",{children:[e.jsx("code",{children:"@JsonProperty(access = Access.WRITE_ONLY)"}),'를 사용하면 역직렬화(JSON → 객체)에서만 사용되고, 직렬화(객체 → JSON)에서는 제외됩니다. 비밀번호처럼 "받기만 하고 응답에는 포함하지 않을" 필드에 유용합니다. 반대로 ',e.jsx("code",{children:"Access.READ_ONLY"}),"는 직렬화에서만 사용됩니다."]})]}),e.jsx("h2",{children:"4. Jackson 고급 기능"}),e.jsx("h3",{children:"TypeReference - 제네릭 타입 처리"}),e.jsxs("p",{children:["Java의 Type Erasure로 인해 ",e.jsx("code",{children:"List<Member>.class"}),"처럼 제네릭 타입 정보를 직접 전달할 수 없습니다.",e.jsx("code",{children:"TypeReference"}),"를 사용하면 제네릭 타입 정보를 유지할 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," TypeReferenceExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import com.fasterxml.jackson.core.type.TypeReference;

// List<Member> 역직렬화
List<Member> members = mapper.readValue(json,
    new TypeReference<List<Member>>() {});

// Map<String, Object> 역직렬화
Map<String, Object> map = mapper.readValue(json,
    new TypeReference<Map<String, Object>>() {});

// Map<String, List<Member>> 중첩 제네릭
Map<String, List<Member>> grouped = mapper.readValue(json,
    new TypeReference<Map<String, List<Member>>>() {});

// 공통 API 응답 래퍼
public class ApiResponse<T> {
    private int code;
    private String message;
    private T data;
    // getter/setter
}

// ApiResponse<List<Member>> 역직렬화
ApiResponse<List<Member>> response = mapper.readValue(json,
    new TypeReference<ApiResponse<List<Member>>>() {});

List<Member> memberList = response.getData();`})})]}),e.jsx("h3",{children:"JsonNode - 트리 모델 (동적 JSON 처리)"}),e.jsxs("p",{children:["JSON 구조가 동적이거나, 특정 필드만 추출해야 할 때 ",e.jsx("code",{children:"JsonNode"}),"(트리 모델)를 사용합니다. 별도의 Java 클래스를 정의하지 않고도 JSON을 다룰 수 있습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," JsonNodeExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.node.ArrayNode;

public class JsonNodeExample {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        String json = """
            {
                "name": "홍길동",
                "age": 28,
                "address": {
                    "city": "서울",
                    "zipCode": "06000"
                },
                "skills": ["Java", "Spring", "SQL"]
            }
            """;

        // JSON -> JsonNode 트리 파싱
        JsonNode root = mapper.readTree(json);

        // 값 읽기
        String name = root.get("name").asText();       // "홍길동"
        int age = root.get("age").asInt();              // 28
        String city = root.get("address").get("city").asText();  // "서울"

        // 배열 순회
        JsonNode skills = root.get("skills");
        for (JsonNode skill : skills) {
            System.out.println("스킬: " + skill.asText());
        }

        // 안전한 접근 (NullPointerException 방지)
        String phone = root.path("phone").asText("없음");  // 기본값 "없음"
        boolean hasEmail = root.has("email");  // false

        // JsonNode 수정 (ObjectNode로 캐스팅)
        ObjectNode objectNode = (ObjectNode) root;
        objectNode.put("email", "hong@test.com");
        objectNode.put("age", 29);
        objectNode.remove("address");

        // 배열에 요소 추가
        ArrayNode skillArray = (ArrayNode) root.get("skills");
        skillArray.add("Docker");

        // 수정된 JSON 출력
        System.out.println(mapper.writerWithDefaultPrettyPrinter()
            .writeValueAsString(objectNode));
    }
}`})})]}),e.jsx("h3",{children:"커스텀 직렬화/역직렬화"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CustomSerializer.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.annotation.*;

// 커스텀 직렬화기: 금액을 "1,000원" 형식으로 출력
public class MoneySerializer extends JsonSerializer<Integer> {
    @Override
    public void serialize(Integer value, JsonGenerator gen,
                          SerializerProvider provider) throws IOException {
        String formatted = String.format("%,d원", value);
        gen.writeString(formatted);
    }
}

// 커스텀 역직렬화기: "1,000원" -> 1000
public class MoneyDeserializer extends JsonDeserializer<Integer> {
    @Override
    public Integer deserialize(JsonParser p, DeserializationContext ctxt)
            throws IOException {
        String text = p.getText().replaceAll("[^0-9]", "");
        return Integer.parseInt(text);
    }
}

// 사용: 필드에 적용
public class Product {
    private String name;

    @JsonSerialize(using = MoneySerializer.class)
    @JsonDeserialize(using = MoneyDeserializer.class)
    private int price;

    // getter/setter
}

// 결과:
// { "name": "노트북", "price": "1,500,000원" }`})})]}),e.jsx("h2",{children:"5. Gson 기초"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Gson"}),"은 Google이 만든 JSON 처리 라이브러리입니다. API가 단순하고 직관적이며, 별도 어노테이션 없이도 기본적인 변환이 잘 동작합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," pom.xml (Gson 의존성)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.11.0</version>
</dependency>`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," GsonBasicExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;

public class GsonBasicExample {
    public static void main(String[] args) {
        // 기본 Gson 객체
        Gson gson = new Gson();

        // Pretty Printing 등 옵션 설정
        Gson prettyGson = new GsonBuilder()
            .setPrettyPrinting()
            .setDateFormat("yyyy-MM-dd HH:mm:ss")
            .serializeNulls()           // null 필드도 포함
            .disableHtmlEscaping()      // HTML 이스케이프 비활성화
            .create();

        // ===== 직렬화 (Java -> JSON) =====
        Member member = new Member(1L, "홍길동", "hong@test.com", 28);
        String json = prettyGson.toJson(member);
        System.out.println(json);

        // ===== 역직렬화 (JSON -> Java) =====
        String inputJson = """
            {"id": 1, "name": "홍길동", "email": "hong@test.com", "age": 28}
            """;
        Member parsed = gson.fromJson(inputJson, Member.class);
        System.out.println(parsed.getName());  // 홍길동

        // ===== List 역직렬화 (TypeToken 사용) =====
        String listJson = """
            [
                {"id": 1, "name": "홍길동", "age": 28},
                {"id": 2, "name": "김영희", "age": 25}
            ]
            """;

        // Jackson의 TypeReference와 비슷한 역할
        java.lang.reflect.Type listType =
            new TypeToken<List<Member>>(){}.getType();
        List<Member> members = gson.fromJson(listJson, listType);
        members.forEach(m -> System.out.println(m.getName()));

        // ===== Map으로 변환 =====
        java.lang.reflect.Type mapType =
            new TypeToken<Map<String, Object>>(){}.getType();
        Map<String, Object> map = gson.fromJson(inputJson, mapType);
        System.out.println(map.get("name"));  // 홍길동
    }
}`})})]}),e.jsx("h3",{children:"@SerializedName과 @Expose"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," GsonAnnotationExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import com.google.gson.annotations.SerializedName;
import com.google.gson.annotations.Expose;

public class UserDto {

    @Expose  // 직렬화/역직렬화 대상
    @SerializedName("user_name")  // JSON 필드명 매핑
    private String name;

    @Expose
    @SerializedName("email_address")
    private String email;

    @Expose(serialize = false)  // 역직렬화에서만 사용
    private String password;

    private String internalCode;  // @Expose 없음 -> 제외

    // getter/setter 생략
}

// @Expose 적용하려면 excludeFieldsWithoutExposeAnnotation() 필요
Gson gson = new GsonBuilder()
    .excludeFieldsWithoutExposeAnnotation()
    .setPrettyPrinting()
    .create();

UserDto user = new UserDto();
user.setName("홍길동");
user.setEmail("hong@test.com");
user.setPassword("secret");
user.setInternalCode("INT-001");

String json = gson.toJson(user);
// {
//   "user_name": "홍길동",
//   "email_address": "hong@test.com"
//   // password: serialize=false이므로 제외
//   // internalCode: @Expose 없으므로 제외
// }`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," Gson의 장점"]}),e.jsxs("p",{children:["Gson은 ",e.jsx("strong",{children:"기본 생성자 없이도"})," 역직렬화가 가능합니다 (내부적으로 Unsafe를 사용). 또한 JSON에 존재하지 않는 필드는 자동으로 무시되므로, Jackson처럼 별도 설정이 필요 없습니다. 하지만 이는 오히려 버그를 숨길 수 있으므로 주의가 필요합니다."]})]}),e.jsx("h2",{children:"6. Jackson vs Gson 비교"}),e.jsx("p",{children:"두 라이브러리 모두 뛰어난 JSON 처리 기능을 제공하지만, 사용 목적과 환경에 따라 적합한 선택이 다릅니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"비교 항목"}),e.jsx("th",{children:"Jackson"}),e.jsx("th",{children:"Gson"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"개발사"})}),e.jsx("td",{children:"FasterXML"}),e.jsx("td",{children:"Google"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"성능"})}),e.jsx("td",{children:"대용량 데이터에서 우수"}),e.jsx("td",{children:"소규모 데이터에서 충분"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"스트리밍 API"})}),e.jsx("td",{children:"지원 (대용량 파일 처리)"}),e.jsx("td",{children:"지원 (JsonReader/Writer)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"트리 모델"})}),e.jsx("td",{children:"JsonNode"}),e.jsx("td",{children:"JsonElement"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"어노테이션"})}),e.jsx("td",{children:"매우 풍부 (@JsonView 등)"}),e.jsx("td",{children:"@SerializedName, @Expose"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"기본 생성자"})}),e.jsx("td",{children:"필수"}),e.jsx("td",{children:"불필요 (Unsafe 사용)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring 통합"})}),e.jsx("td",{children:"기본 내장 (최적화됨)"}),e.jsx("td",{children:"별도 설정 필요"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"다형성 처리"})}),e.jsx("td",{children:"@JsonTypeInfo 지원"}),e.jsx("td",{children:"RuntimeTypeAdapterFactory"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"날짜 지원"})}),e.jsx("td",{children:"JavaTimeModule로 완벽 지원"}),e.jsx("td",{children:"별도 TypeAdapter 필요"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"XML/YAML/CSV"})}),e.jsx("td",{children:"확장 모듈로 지원"}),e.jsx("td",{children:"JSON만 지원"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"라이브러리 크기"})}),e.jsx("td",{children:"상대적으로 큼"}),e.jsx("td",{children:"작고 가벼움"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"학습 곡선"})}),e.jsx("td",{children:"높음 (기능이 많음)"}),e.jsx("td",{children:"낮음 (API가 단순)"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 선택 가이드"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Jackson을 선택하는 경우:"})," Spring Boot 프로젝트, 대용량 JSON 처리, 복잡한 직렬화 요구사항, 다양한 데이터 포맷(XML, YAML) 지원이 필요할 때",e.jsx("br",{}),e.jsx("strong",{children:"Gson을 선택하는 경우:"})," Android 개발, 간단한 JSON 변환, 가벼운 라이브러리가 필요할 때, 빠른 프로토타이핑"]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 동일 작업의 Jackson vs Gson 코드 비교"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ===== Jackson =====
ObjectMapper mapper = new ObjectMapper();
mapper.registerModule(new JavaTimeModule());
mapper.enable(SerializationFeature.INDENT_OUTPUT);

// 직렬화
String jacksonJson = mapper.writeValueAsString(member);

// 역직렬화
Member jacksonMember = mapper.readValue(json, Member.class);

// 리스트 역직렬화
List<Member> jacksonList = mapper.readValue(listJson,
    new TypeReference<List<Member>>() {});


// ===== Gson =====
Gson gson = new GsonBuilder()
    .setPrettyPrinting()
    .create();

// 직렬화
String gsonJson = gson.toJson(member);

// 역직렬화
Member gsonMember = gson.fromJson(json, Member.class);

// 리스트 역직렬화
List<Member> gsonList = gson.fromJson(listJson,
    new TypeToken<List<Member>>(){}.getType());`})})]}),e.jsx("h2",{children:"7. DTO 패턴과 REST API 연동"}),e.jsxs("p",{children:["실무에서는 ",e.jsx("strong",{children:"요청(Request)과 응답(Response)에 각각 별도의 DTO"}),"를 설계합니다. Entity를 직접 노출하면 보안 문제와 API 변경 시 영향 범위가 커지므로, DTO를 통해 필요한 데이터만 주고받는 것이 중요합니다."]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," Entity를 직접 노출하면 안 되는 이유"]}),e.jsxs("p",{children:["1) ",e.jsx("strong",{children:"보안:"})," 비밀번호, 내부 ID 등 민감 정보가 노출될 수 있음",e.jsx("br",{}),"2) ",e.jsx("strong",{children:"결합도:"})," DB 스키마 변경이 API 응답에 직접 영향을 미침",e.jsx("br",{}),"3) ",e.jsx("strong",{children:"유연성:"})," API 버전별로 다른 응답 구조를 제공하기 어려움",e.jsx("br",{}),"4) ",e.jsx("strong",{children:"순환 참조:"})," JPA 연관관계에서 무한 재귀 직렬화 발생 가능"]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberRequestDto.java (요청 DTO)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import jakarta.validation.constraints.*;

// 회원가입 요청 DTO
public class MemberCreateRequest {

    @NotBlank(message = "이름은 필수입니다")
    @Size(min = 2, max = 20)
    private String name;

    @NotBlank(message = "이메일은 필수입니다")
    @Email
    private String email;

    @NotBlank(message = "비밀번호는 필수입니다")
    @Size(min = 8, max = 50)
    private String password;

    @Min(1) @Max(150)
    private int age;

    // 기본 생성자, Getter/Setter
    public MemberCreateRequest() {}
    // ... getter/setter 생략
}

// 회원 수정 요청 DTO (일부 필드만 포함)
public class MemberUpdateRequest {

    @Size(min = 2, max = 20)
    private String name;

    @Min(1) @Max(150)
    private Integer age;  // null 가능 (수정하지 않을 수 있음)

    private String phone;

    // 기본 생성자, Getter/Setter 생략
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberResponseDto.java (응답 DTO)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import com.fasterxml.jackson.annotation.*;

// 회원 정보 응답 DTO (비밀번호 제외!)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MemberResponse {
    private Long id;
    private String name;
    private String email;
    private int age;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    // Entity -> Response DTO 변환 (정적 팩토리 메서드)
    public static MemberResponse from(Member entity) {
        MemberResponse dto = new MemberResponse();
        dto.id = entity.getId();
        dto.name = entity.getName();
        dto.email = entity.getEmail();
        dto.age = entity.getAge();
        dto.createdAt = entity.getCreatedAt();
        return dto;  // password는 포함하지 않음!
    }

    // Getter 생략
}

// 목록 조회용 간략 응답 DTO
public class MemberSummaryResponse {
    private Long id;
    private String name;
    private String email;

    public static MemberSummaryResponse from(Member entity) {
        MemberSummaryResponse dto = new MemberSummaryResponse();
        dto.id = entity.getId();
        dto.name = entity.getName();
        dto.email = entity.getEmail();
        return dto;
    }
}

// 공통 API 응답 래퍼
public class ApiResponse<T> {
    private int status;
    private String message;
    private T data;

    public static <T> ApiResponse<T> success(T data) {
        ApiResponse<T> response = new ApiResponse<>();
        response.status = 200;
        response.message = "성공";
        response.data = data;
        return response;
    }

    public static <T> ApiResponse<T> error(int status, String message) {
        ApiResponse<T> response = new ApiResponse<>();
        response.status = status;
        response.message = message;
        response.data = null;
        return response;
    }

    // Getter/Setter 생략
}`})})]}),e.jsx("h3",{children:"Spring REST Controller에서의 JSON 처리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberApiController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;

    // POST - 회원 생성
    // @RequestBody: JSON 요청 본문 -> Java 객체 (역직렬화)
    @PostMapping
    public ResponseEntity<ApiResponse<MemberResponse>> createMember(
            @Valid @RequestBody MemberCreateRequest request) {

        Member member = memberService.create(request);
        MemberResponse response = MemberResponse.from(member);

        return ResponseEntity.status(HttpStatus.CREATED)
            .body(ApiResponse.success(response));
    }
    // 요청 예시:
    // POST /api/members
    // Content-Type: application/json
    // {
    //   "name": "홍길동",
    //   "email": "hong@test.com",
    //   "password": "password123",
    //   "age": 28
    // }

    // GET - 단건 조회
    // @ResponseBody는 @RestController에 이미 포함
    @GetMapping("/{id}")
    public ApiResponse<MemberResponse> getMember(@PathVariable Long id) {
        Member member = memberService.findById(id);
        return ApiResponse.success(MemberResponse.from(member));
    }
    // 응답 예시:
    // {
    //   "status": 200,
    //   "message": "성공",
    //   "data": {
    //     "id": 1,
    //     "name": "홍길동",
    //     "email": "hong@test.com",
    //     "age": 28,
    //     "createdAt": "2025-01-15 10:30:00"
    //   }
    // }

    // GET - 목록 조회 (간략 DTO 사용)
    @GetMapping
    public ApiResponse<List<MemberSummaryResponse>> getMembers() {
        List<MemberSummaryResponse> members = memberService.findAll()
            .stream()
            .map(MemberSummaryResponse::from)
            .toList();
        return ApiResponse.success(members);
    }

    // PUT - 회원 수정
    @PutMapping("/{id}")
    public ApiResponse<MemberResponse> updateMember(
            @PathVariable Long id,
            @Valid @RequestBody MemberUpdateRequest request) {
        Member updated = memberService.update(id, request);
        return ApiResponse.success(MemberResponse.from(updated));
    }

    // DELETE - 회원 삭제
    @DeleteMapping("/{id}")
    public ApiResponse<Void> deleteMember(@PathVariable Long id) {
        memberService.delete(id);
        return ApiResponse.success(null);
    }
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Jackson 전역 설정 (Spring Boot)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// application.yml 설정
spring:
  jackson:
    property-naming-strategy: SNAKE_CASE    # snake_case 자동 변환
    default-property-inclusion: non_null    # null 필드 제외
    deserialization:
      fail-on-unknown-properties: false     # 알 수 없는 필드 무시
    serialization:
      write-dates-as-timestamps: false      # 날짜를 문자열로 출력
    date-format: "yyyy-MM-dd HH:mm:ss"
    time-zone: "Asia/Seoul"

// 또는 Java Config로 설정
@Configuration
public class JacksonConfig {

    @Bean
    public ObjectMapper objectMapper() {
        return new ObjectMapper()
            .registerModule(new JavaTimeModule())
            .setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE)
            .setSerializationInclusion(JsonInclude.Include.NON_NULL)
            .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
            .configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 실무 핵심 정리"]}),e.jsxs("p",{children:["1) ",e.jsx("strong",{children:"Entity와 DTO를 반드시 분리"}),"하세요. API 계층과 도메인 계층의 결합을 막습니다.",e.jsx("br",{}),"2) 요청/응답 DTO를 ",e.jsx("strong",{children:"용도별로 분리"}),"하세요 (CreateRequest, UpdateRequest, Response).",e.jsx("br",{}),"3) ",e.jsx("strong",{children:"공통 응답 래퍼"}),"(ApiResponse)를 사용하면 일관된 API 구조를 유지할 수 있습니다.",e.jsx("br",{}),"4) Spring Boot에서는 ",e.jsx("strong",{children:"application.yml"}),"로 Jackson 전역 설정을 관리하세요."]})]}),e.jsx("h2",{children:"8. 연습문제"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"JSON 기본:"})," 다음 Java 객체를 JSON 문자열로 표현하세요.",e.jsx("div",{className:"code-block",style:{marginTop:"8px"},children:e.jsx("pre",{children:e.jsx("code",{children:`public class Order {
    private Long orderId = 1001L;
    private String customerName = "김철수";
    private List<String> items = List.of("노트북", "마우스", "키보드");
    private int totalPrice = 1850000;
    private boolean paid = true;
    private LocalDate orderDate = LocalDate.of(2025, 3, 15);
}`})})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Jackson 어노테이션:"})," 아래 요구사항에 맞게 DTO 클래스에 Jackson 어노테이션을 적용하세요.",e.jsxs("ul",{style:{marginTop:"6px"},children:[e.jsxs("li",{children:["JSON 필드명은 snake_case를 사용 (예: ",e.jsx("code",{children:"order_date"}),")"]}),e.jsxs("li",{children:[e.jsx("code",{children:"password"})," 필드는 응답에 포함하지 않음"]}),e.jsxs("li",{children:[e.jsx("code",{children:"createdAt"}),' 필드는 "yyyy-MM-dd" 형식으로 출력']}),e.jsx("li",{children:"null인 필드는 JSON에서 제외"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Jackson vs Gson:"})," 다음 상황에서 어떤 라이브러리를 선택할지 이유와 함께 설명하세요.",e.jsxs("ul",{style:{marginTop:"6px"},children:[e.jsx("li",{children:"Spring Boot 기반 대규모 REST API 서버 개발"}),e.jsx("li",{children:"안드로이드 앱에서 간단한 JSON 파싱"}),e.jsx("li",{children:"JSON과 XML을 모두 처리해야 하는 데이터 변환 서비스"})]})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"DTO 설계:"}),' 온라인 쇼핑몰의 "상품 등록 API"를 위한 요청 DTO(',e.jsx("code",{children:"ProductCreateRequest"}),")와 응답 DTO(",e.jsx("code",{children:"ProductResponse"}),")를 설계하세요. 다음 필드를 포함하되, 요청과 응답에 적절히 분배하세요:",e.jsx("code",{children:"id"}),", ",e.jsx("code",{children:"name"}),", ",e.jsx("code",{children:"price"}),", ",e.jsx("code",{children:"description"}),",",e.jsx("code",{children:"category"}),", ",e.jsx("code",{children:"stock"}),", ",e.jsx("code",{children:"imageUrl"}),",",e.jsx("code",{children:"createdAt"}),", ",e.jsx("code",{children:"updatedAt"}),", ",e.jsx("code",{children:"sellerId"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JsonNode 활용:"})," 외부 API에서 받은 아래 JSON에서 ",e.jsx("code",{children:"JsonNode"}),'를 사용하여 "첫 번째 상품의 이름"과 "전체 상품 수"를 추출하는 코드를 작성하세요.',e.jsx("div",{className:"code-block",style:{marginTop:"8px"},children:e.jsx("pre",{children:e.jsx("code",{children:`{
  "status": "OK",
  "totalCount": 3,
  "products": [
    { "id": 1, "name": "무선 마우스", "price": 25000 },
    { "id": 2, "name": "기계식 키보드", "price": 89000 },
    { "id": 3, "name": "모니터 받침대", "price": 35000 }
  ]
}`})})})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"공통 응답 래퍼:"})," ",e.jsx("code",{children:"ApiResponse<T>"})," 클래스를 구현하고, 성공 응답과 에러 응답을 각각 JSON으로 출력되는 형태를 작성하세요. 페이지네이션 정보(",e.jsx("code",{children:"page"}),", ",e.jsx("code",{children:"size"}),", ",e.jsx("code",{children:"totalPages"}),")를 포함하는 ",e.jsx("code",{children:"PagedResponse<T>"}),"도 설계해 보세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${r("PR06")?"btn-primary":"btn-accent"}`,onClick:()=>i("PR06"),children:r("PR06")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/practical/05",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: JDBC 심화"]}),e.jsxs(s,{to:"/practical/07",children:["다음: 클린 코드 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
