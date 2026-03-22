import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function PracticalLesson06() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/practical">실무 Java</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Lesson 06</span>
          </div>
          <h1>Lesson 06. JSON 처리 (Jackson, Gson)</h1>
          <p>ObjectMapper, 어노테이션, DTO 변환, REST 연동을 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          {/* ========== 1. JSON이란? ========== */}
          <h2>1. JSON이란?</h2>
          <p>
            <strong>JSON(JavaScript Object Notation)</strong>은 데이터를 교환하기 위한 경량 텍스트 형식입니다.
            사람이 읽기 쉽고 기계가 파싱하기 쉬워, 현대 웹 개발에서 가장 널리 사용되는 데이터 포맷입니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> JSON 기본 형식</span></div>
            <pre><code>{`{
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
}`}</code></pre>
          </div>

          <h3>XML vs JSON 비교</h3>
          <table>
            <thead>
              <tr><th>특성</th><th>JSON</th><th>XML</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>가독성</strong></td><td>간결하고 직관적</td><td>태그가 많아 장황함</td></tr>
              <tr><td><strong>데이터 크기</strong></td><td>작음 (태그 오버헤드 없음)</td><td>큼 (열기/닫기 태그)</td></tr>
              <tr><td><strong>파싱 속도</strong></td><td>빠름</td><td>상대적으로 느림</td></tr>
              <tr><td><strong>배열 지원</strong></td><td>네이티브 배열 지원</td><td>별도 구조 필요</td></tr>
              <tr><td><strong>주석</strong></td><td>지원하지 않음</td><td>지원</td></tr>
              <tr><td><strong>사용처</strong></td><td>REST API, 설정 파일</td><td>SOAP, 문서 마크업</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> XML vs JSON 동일 데이터 비교</span></div>
            <pre><code>{`<!-- XML 표현 -->
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
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> REST API와 JSON</div>
            <p>
              현대 REST API는 거의 대부분 JSON을 데이터 교환 형식으로 사용합니다.
              Spring Boot에서 <code>@RestController</code>를 사용하면 자동으로 Java 객체를
              JSON으로 변환(직렬화)하고, 요청 본문의 JSON을 Java 객체로 변환(역직렬화)합니다.
              이 과정에서 Jackson 라이브러리가 기본으로 사용됩니다.
            </p>
          </div>

          {/* ========== 2. Jackson 기초 ========== */}
          <h2>2. Jackson 기초</h2>
          <p>
            <strong>Jackson</strong>은 Java에서 가장 널리 사용되는 JSON 처리 라이브러리입니다.
            Spring Boot에 기본 포함되어 있으며, <code>ObjectMapper</code> 클래스가 핵심입니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> pom.xml (Maven 의존성)</span></div>
            <pre><code>{`<!-- Spring Boot 사용 시 자동 포함, 단독 사용 시 추가 -->
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
</dependency>`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Member.java (DTO 클래스)</span></div>
            <pre><code>{`public class Member {
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
}`}</code></pre>
          </div>

          <h3>직렬화 (Java 객체 &rarr; JSON)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SerializationExample.java</span></div>
            <pre><code>{`import com.fasterxml.jackson.databind.ObjectMapper;
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
}`}</code></pre>
          </div>

          <h3>역직렬화 (JSON &rarr; Java 객체)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> DeserializationExample.java</span></div>
            <pre><code>{`public class DeserializationExample {
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
}`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 주의</div>
            <p>
              Jackson이 역직렬화할 때 <strong>기본 생성자(no-arg constructor)</strong>가 반드시 필요합니다.
              기본 생성자가 없으면 <code>InvalidDefinitionException</code>이 발생합니다.
              또한 JSON에 있지만 Java 클래스에 없는 필드가 있으면 <code>UnrecognizedPropertyException</code>이 발생하므로,
              이를 무시하려면 <code>mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)</code>를 설정하세요.
            </p>
          </div>

          {/* ========== 3. Jackson 어노테이션 ========== */}
          <h2>3. Jackson 어노테이션</h2>
          <p>
            Jackson은 다양한 어노테이션을 제공하여 직렬화/역직렬화 동작을 세밀하게 제어할 수 있습니다.
          </p>

          <table>
            <thead>
              <tr><th>어노테이션</th><th>설명</th><th>적용 위치</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>@JsonProperty</strong></td><td>JSON 필드 이름을 지정</td><td>필드, Getter/Setter</td></tr>
              <tr><td><strong>@JsonIgnore</strong></td><td>특정 필드를 직렬화/역직렬화에서 제외</td><td>필드, Getter/Setter</td></tr>
              <tr><td><strong>@JsonFormat</strong></td><td>날짜/시간 형식 지정</td><td>필드</td></tr>
              <tr><td><strong>@JsonInclude</strong></td><td>null이나 빈 값 제외 조건</td><td>클래스, 필드</td></tr>
              <tr><td><strong>@JsonCreator</strong></td><td>역직렬화에 사용할 생성자 지정</td><td>생성자</td></tr>
              <tr><td><strong>@JsonIgnoreProperties</strong></td><td>여러 필드를 한번에 무시</td><td>클래스</td></tr>
              <tr><td><strong>@JsonNaming</strong></td><td>네이밍 전략 지정 (camelCase, snake_case)</td><td>클래스</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberDto.java (어노테이션 활용)</span></div>
            <pre><code>{`import com.fasterxml.jackson.annotation.*;
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
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 어노테이션 결과 확인</span></div>
            <pre><code>{`ObjectMapper mapper = new ObjectMapper();
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
// }`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁: @JsonProperty의 access 속성</div>
            <p>
              <code>@JsonProperty(access = Access.WRITE_ONLY)</code>를 사용하면
              역직렬화(JSON &rarr; 객체)에서만 사용되고, 직렬화(객체 &rarr; JSON)에서는 제외됩니다.
              비밀번호처럼 "받기만 하고 응답에는 포함하지 않을" 필드에 유용합니다.
              반대로 <code>Access.READ_ONLY</code>는 직렬화에서만 사용됩니다.
            </p>
          </div>

          {/* ========== 4. Jackson 고급 기능 ========== */}
          <h2>4. Jackson 고급 기능</h2>

          <h3>TypeReference - 제네릭 타입 처리</h3>
          <p>
            Java의 Type Erasure로 인해 <code>List&lt;Member&gt;.class</code>처럼 제네릭 타입 정보를 직접 전달할 수 없습니다.
            <code>TypeReference</code>를 사용하면 제네릭 타입 정보를 유지할 수 있습니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> TypeReferenceExample.java</span></div>
            <pre><code>{`import com.fasterxml.jackson.core.type.TypeReference;

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

List<Member> memberList = response.getData();`}</code></pre>
          </div>

          <h3>JsonNode - 트리 모델 (동적 JSON 처리)</h3>
          <p>
            JSON 구조가 동적이거나, 특정 필드만 추출해야 할 때 <code>JsonNode</code>(트리 모델)를 사용합니다.
            별도의 Java 클래스를 정의하지 않고도 JSON을 다룰 수 있습니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> JsonNodeExample.java</span></div>
            <pre><code>{`import com.fasterxml.jackson.databind.JsonNode;
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
}`}</code></pre>
          </div>

          <h3>커스텀 직렬화/역직렬화</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> CustomSerializer.java</span></div>
            <pre><code>{`import com.fasterxml.jackson.core.*;
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
// { "name": "노트북", "price": "1,500,000원" }`}</code></pre>
          </div>

          {/* ========== 5. Gson 기초 ========== */}
          <h2>5. Gson 기초</h2>
          <p>
            <strong>Gson</strong>은 Google이 만든 JSON 처리 라이브러리입니다.
            API가 단순하고 직관적이며, 별도 어노테이션 없이도 기본적인 변환이 잘 동작합니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> pom.xml (Gson 의존성)</span></div>
            <pre><code>{`<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.11.0</version>
</dependency>`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> GsonBasicExample.java</span></div>
            <pre><code>{`import com.google.gson.Gson;
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
}`}</code></pre>
          </div>

          <h3>@SerializedName과 @Expose</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> GsonAnnotationExample.java</span></div>
            <pre><code>{`import com.google.gson.annotations.SerializedName;
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
// }`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> Gson의 장점</div>
            <p>
              Gson은 <strong>기본 생성자 없이도</strong> 역직렬화가 가능합니다 (내부적으로 Unsafe를 사용).
              또한 JSON에 존재하지 않는 필드는 자동으로 무시되므로, Jackson처럼 별도 설정이 필요 없습니다.
              하지만 이는 오히려 버그를 숨길 수 있으므로 주의가 필요합니다.
            </p>
          </div>

          {/* ========== 6. Jackson vs Gson 비교 ========== */}
          <h2>6. Jackson vs Gson 비교</h2>
          <p>
            두 라이브러리 모두 뛰어난 JSON 처리 기능을 제공하지만, 사용 목적과 환경에 따라 적합한 선택이 다릅니다.
          </p>

          <table>
            <thead>
              <tr><th>비교 항목</th><th>Jackson</th><th>Gson</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>개발사</strong></td><td>FasterXML</td><td>Google</td></tr>
              <tr><td><strong>성능</strong></td><td>대용량 데이터에서 우수</td><td>소규모 데이터에서 충분</td></tr>
              <tr><td><strong>스트리밍 API</strong></td><td>지원 (대용량 파일 처리)</td><td>지원 (JsonReader/Writer)</td></tr>
              <tr><td><strong>트리 모델</strong></td><td>JsonNode</td><td>JsonElement</td></tr>
              <tr><td><strong>어노테이션</strong></td><td>매우 풍부 (@JsonView 등)</td><td>@SerializedName, @Expose</td></tr>
              <tr><td><strong>기본 생성자</strong></td><td>필수</td><td>불필요 (Unsafe 사용)</td></tr>
              <tr><td><strong>Spring 통합</strong></td><td>기본 내장 (최적화됨)</td><td>별도 설정 필요</td></tr>
              <tr><td><strong>다형성 처리</strong></td><td>@JsonTypeInfo 지원</td><td>RuntimeTypeAdapterFactory</td></tr>
              <tr><td><strong>날짜 지원</strong></td><td>JavaTimeModule로 완벽 지원</td><td>별도 TypeAdapter 필요</td></tr>
              <tr><td><strong>XML/YAML/CSV</strong></td><td>확장 모듈로 지원</td><td>JSON만 지원</td></tr>
              <tr><td><strong>라이브러리 크기</strong></td><td>상대적으로 큼</td><td>작고 가벼움</td></tr>
              <tr><td><strong>학습 곡선</strong></td><td>높음 (기능이 많음)</td><td>낮음 (API가 단순)</td></tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 선택 가이드</div>
            <p>
              <strong>Jackson을 선택하는 경우:</strong> Spring Boot 프로젝트, 대용량 JSON 처리,
              복잡한 직렬화 요구사항, 다양한 데이터 포맷(XML, YAML) 지원이 필요할 때<br/>
              <strong>Gson을 선택하는 경우:</strong> Android 개발, 간단한 JSON 변환,
              가벼운 라이브러리가 필요할 때, 빠른 프로토타이핑
            </p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 동일 작업의 Jackson vs Gson 코드 비교</span></div>
            <pre><code>{`// ===== Jackson =====
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
    new TypeToken<List<Member>>(){}.getType());`}</code></pre>
          </div>

          {/* ========== 7. DTO 패턴과 REST API 연동 ========== */}
          <h2>7. DTO 패턴과 REST API 연동</h2>
          <p>
            실무에서는 <strong>요청(Request)과 응답(Response)에 각각 별도의 DTO</strong>를 설계합니다.
            Entity를 직접 노출하면 보안 문제와 API 변경 시 영향 범위가 커지므로,
            DTO를 통해 필요한 데이터만 주고받는 것이 중요합니다.
          </p>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> Entity를 직접 노출하면 안 되는 이유</div>
            <p>
              1) <strong>보안:</strong> 비밀번호, 내부 ID 등 민감 정보가 노출될 수 있음<br/>
              2) <strong>결합도:</strong> DB 스키마 변경이 API 응답에 직접 영향을 미침<br/>
              3) <strong>유연성:</strong> API 버전별로 다른 응답 구조를 제공하기 어려움<br/>
              4) <strong>순환 참조:</strong> JPA 연관관계에서 무한 재귀 직렬화 발생 가능
            </p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberRequestDto.java (요청 DTO)</span></div>
            <pre><code>{`import jakarta.validation.constraints.*;

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
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberResponseDto.java (응답 DTO)</span></div>
            <pre><code>{`import com.fasterxml.jackson.annotation.*;

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
}`}</code></pre>
          </div>

          <h3>Spring REST Controller에서의 JSON 처리</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberApiController.java</span></div>
            <pre><code>{`@RestController
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
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Jackson 전역 설정 (Spring Boot)</span></div>
            <pre><code>{`// application.yml 설정
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
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 실무 핵심 정리</div>
            <p>
              1) <strong>Entity와 DTO를 반드시 분리</strong>하세요. API 계층과 도메인 계층의 결합을 막습니다.<br/>
              2) 요청/응답 DTO를 <strong>용도별로 분리</strong>하세요 (CreateRequest, UpdateRequest, Response).<br/>
              3) <strong>공통 응답 래퍼</strong>(ApiResponse)를 사용하면 일관된 API 구조를 유지할 수 있습니다.<br/>
              4) Spring Boot에서는 <strong>application.yml</strong>로 Jackson 전역 설정을 관리하세요.
            </p>
          </div>

          {/* ========== 8. 연습문제 ========== */}
          <h2>8. 연습문제</h2>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>
                <strong>JSON 기본:</strong> 다음 Java 객체를 JSON 문자열로 표현하세요.
                <div className="code-block" style={{marginTop:'8px'}}>
                  <pre><code>{`public class Order {
    private Long orderId = 1001L;
    private String customerName = "김철수";
    private List<String> items = List.of("노트북", "마우스", "키보드");
    private int totalPrice = 1850000;
    private boolean paid = true;
    private LocalDate orderDate = LocalDate.of(2025, 3, 15);
}`}</code></pre>
                </div>
              </li>
              <li>
                <strong>Jackson 어노테이션:</strong> 아래 요구사항에 맞게 DTO 클래스에 Jackson 어노테이션을 적용하세요.
                <ul style={{marginTop:'6px'}}>
                  <li>JSON 필드명은 snake_case를 사용 (예: <code>order_date</code>)</li>
                  <li><code>password</code> 필드는 응답에 포함하지 않음</li>
                  <li><code>createdAt</code> 필드는 "yyyy-MM-dd" 형식으로 출력</li>
                  <li>null인 필드는 JSON에서 제외</li>
                </ul>
              </li>
              <li>
                <strong>Jackson vs Gson:</strong> 다음 상황에서 어떤 라이브러리를 선택할지 이유와 함께 설명하세요.
                <ul style={{marginTop:'6px'}}>
                  <li>Spring Boot 기반 대규모 REST API 서버 개발</li>
                  <li>안드로이드 앱에서 간단한 JSON 파싱</li>
                  <li>JSON과 XML을 모두 처리해야 하는 데이터 변환 서비스</li>
                </ul>
              </li>
              <li>
                <strong>DTO 설계:</strong> 온라인 쇼핑몰의 "상품 등록 API"를 위한 요청 DTO(<code>ProductCreateRequest</code>)와
                응답 DTO(<code>ProductResponse</code>)를 설계하세요. 다음 필드를 포함하되, 요청과 응답에 적절히 분배하세요:
                <code>id</code>, <code>name</code>, <code>price</code>, <code>description</code>,
                <code>category</code>, <code>stock</code>, <code>imageUrl</code>,
                <code>createdAt</code>, <code>updatedAt</code>, <code>sellerId</code>
              </li>
              <li>
                <strong>JsonNode 활용:</strong> 외부 API에서 받은 아래 JSON에서 <code>JsonNode</code>를 사용하여
                "첫 번째 상품의 이름"과 "전체 상품 수"를 추출하는 코드를 작성하세요.
                <div className="code-block" style={{marginTop:'8px'}}>
                  <pre><code>{`{
  "status": "OK",
  "totalCount": 3,
  "products": [
    { "id": 1, "name": "무선 마우스", "price": 25000 },
    { "id": 2, "name": "기계식 키보드", "price": 89000 },
    { "id": 3, "name": "모니터 받침대", "price": 35000 }
  ]
}`}</code></pre>
                </div>
              </li>
              <li>
                <strong>공통 응답 래퍼:</strong> <code>ApiResponse&lt;T&gt;</code> 클래스를 구현하고,
                성공 응답과 에러 응답을 각각 JSON으로 출력되는 형태를 작성하세요.
                페이지네이션 정보(<code>page</code>, <code>size</code>, <code>totalPages</code>)를
                포함하는 <code>PagedResponse&lt;T&gt;</code>도 설계해 보세요.
              </li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('PR06') ? 'btn-primary' : 'btn-accent'}`} onClick={() => completeLesson('PR06')}>
              {isLessonCompleted('PR06') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/practical/05"><i className="fas fa-arrow-left"></i> 이전: JDBC 심화</Link>
            <Link to="/practical/07">다음: 클린 코드 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
