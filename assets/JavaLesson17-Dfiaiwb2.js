import{u as i,r as l,j as e,L as s}from"./index-Bv7XTpcJ.js";function t(){const{completeLesson:r,isLessonCompleted:a}=i();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 17"})]}),e.jsx("h1",{children:"Chapter 17. Spring MVC와 데이터 접근"}),e.jsx("p",{children:"Spring MVC 아키텍처, JPA, MyBatis를 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. Spring MVC 아키텍처"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 요청 처리 흐름"]})}),e.jsx("pre",{children:e.jsx("code",{children:`요청 → DispatcherServlet → HandlerMapping (어떤 컨트롤러?)
     → Controller 실행 → Service → Repository → DB
     → Model 반환 → ViewResolver (어떤 뷰?)
     → View(Thymeleaf/JSP) 렌더링 → 응답`})})]}),e.jsx("h2",{children:"2. Thymeleaf 템플릿"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," list.html"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head><title>사용자 목록</title></head>
<body>
    <h1>사용자 목록</h1>

    <!-- 반복 -->
    <table>
        <tr th:each="user : \${users}">
            <td th:text="\${user.name}">이름</td>
            <td th:text="\${user.email}">이메일</td>
            <td>
                <a th:href="@{/users/{id}(id=\${user.id})}">상세</a>
            </td>
        </tr>
    </table>

    <!-- 조건 -->
    <p th:if="\${#lists.isEmpty(users)}">등록된 사용자가 없습니다.</p>

    <!-- 폼 -->
    <form th:action="@{/users}" th:object="\${userForm}" method="post">
        <input th:field="*{name}" placeholder="이름">
        <span th:if="\${#fields.hasErrors('name')}"
              th:errors="*{name}" class="error"></span>
        <input th:field="*{email}" placeholder="이메일">
        <button type="submit">등록</button>
    </form>
</body>
</html>`})})]}),e.jsx("h2",{children:"3. 폼 검증"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserForm.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class UserForm {
    @NotBlank(message = "이름은 필수입니다")
    @Size(min = 2, max = 20)
    private String name;

    @Email(message = "올바른 이메일 형식이 아닙니다")
    @NotBlank
    private String email;

    @Min(value = 0) @Max(value = 150)
    private int age;

    // getter, setter
}

@Controller
@RequestMapping("/users")
public class UserWebController {

    @PostMapping
    public String create(@Valid @ModelAttribute UserForm form,
                         BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "users/form";  // 에러 시 폼으로 돌아감
        }
        userService.create(form);
        return "redirect:/users";
    }
}`})})]}),e.jsx("h2",{children:"4. JPA / Hibernate"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," User.java (Entity)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String name;

    @Column(unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;

    @CreatedDate
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Post> posts = new ArrayList<>();

    // 기본 생성자, getter, setter
}`})})]}),e.jsx("h2",{children:"5. Spring Data JPA"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserRepository.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public interface UserRepository extends JpaRepository<User, Long> {

    // 메서드 이름으로 쿼리 자동 생성
    List<User> findByName(String name);
    List<User> findByEmailContaining(String keyword);
    Optional<User> findByEmail(String email);
    List<User> findByRoleOrderByNameAsc(Role role);
    long countByRole(Role role);
    boolean existsByEmail(String email);

    // JPQL
    @Query("SELECT u FROM User u WHERE u.name LIKE %:keyword%")
    List<User> searchByName(@Param("keyword") String keyword);

    // 네이티브 쿼리
    @Query(value = "SELECT * FROM users WHERE created_at > :date",
           nativeQuery = true)
    List<User> findRecentUsers(@Param("date") LocalDateTime date);

    // 페이징
    Page<User> findByRole(Role role, Pageable pageable);
}`})})]}),e.jsx("h2",{children:"6. MyBatis"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserMapper.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Mapper
public interface UserMapper {

    @Select("SELECT * FROM users WHERE id = #{id}")
    User findById(Long id);

    @Insert("INSERT INTO users(name, email) VALUES(#{name}, #{email})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(User user);

    // XML 매퍼 사용 시
    List<User> findByCondition(UserSearchCondition condition);
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserMapper.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<mapper namespace="com.example.mapper.UserMapper">
    <select id="findByCondition" resultType="User">
        SELECT * FROM users
        <where>
            <if test="name != null">AND name LIKE CONCAT('%', #{name}, '%')</if>
            <if test="email != null">AND email = #{email}</if>
        </where>
        ORDER BY created_at DESC
    </select>
</mapper>`})})]}),e.jsx("h2",{children:"7. @Transactional"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," UserService.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Service
@Transactional(readOnly = true)  // 읽기 전용 기본
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDto> findAll() {
        return userRepository.findAll().stream()
            .map(UserDto::from)
            .toList();
    }

    @Transactional  // 쓰기 작업
    public UserDto create(CreateUserRequest req) {
        if (userRepository.existsByEmail(req.email())) {
            throw new DuplicateEmailException(req.email());
        }
        User user = new User(req.name(), req.email());
        return UserDto.from(userRepository.save(user));
    }

    @Transactional
    public void transfer(Long fromId, Long toId, int amount) {
        // 트랜잭션: 둘 다 성공하거나, 둘 다 롤백
        Account from = accountRepo.findById(fromId).orElseThrow();
        Account to = accountRepo.findById(toId).orElseThrow();
        from.withdraw(amount);
        to.deposit(amount);
    }
}`})})]}),e.jsx("h2",{children:"8. 프로젝트 구조 베스트 프랙티스"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 패키지 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`com.example.myapp/
├── MyAppApplication.java
├── config/           # 설정 클래스
│   ├── WebConfig.java
│   └── SecurityConfig.java
├── controller/       # 프레젠테이션 계층
│   └── UserController.java
├── service/          # 비즈니스 로직
│   └── UserService.java
├── repository/       # 데이터 접근
│   └── UserRepository.java
├── domain/           # 엔티티
│   └── User.java
├── dto/              # 데이터 전송 객체
│   ├── UserDto.java
│   └── CreateUserRequest.java
└── exception/        # 예외 클래스
    └── GlobalExceptionHandler.java`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 학습을 마치며"]}),e.jsx("p",{children:"축하합니다! Java 기초부터 Spring Boot까지 전체 과정을 학습했습니다. 다음 단계로 Spring Security, Docker, CI/CD, 클라우드 배포 등을 학습하면 실무에 더 가까워질 수 있습니다."})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 종합 프로젝트"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Spring Boot + JPA로 게시판 CRUD를 완성하세요."}),e.jsx("li",{children:"Thymeleaf로 게시판 UI를 구현하세요."}),e.jsx("li",{children:"MyBatis로 동적 검색 기능을 추가하세요."}),e.jsx("li",{children:"전체 프로젝트에 @Transactional과 예외 처리를 적용하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${a("17")?"btn-primary":"btn-accent"}`,onClick:()=>r("17"),children:a("17")?"✓ 전체 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/16",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Spring Boot"]}),e.jsxs(s,{to:"/java-learning",children:["전체 커리큘럼 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{t as default};
