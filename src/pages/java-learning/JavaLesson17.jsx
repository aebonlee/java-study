import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson17() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 17</span>
          </div>
          <h1>Chapter 17. Spring MVC와 데이터 접근</h1>
          <p>Spring MVC 아키텍처, JPA, MyBatis를 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. Spring MVC 아키텍처</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 요청 처리 흐름</span></div>
            <pre><code>{`요청 → DispatcherServlet → HandlerMapping (어떤 컨트롤러?)
     → Controller 실행 → Service → Repository → DB
     → Model 반환 → ViewResolver (어떤 뷰?)
     → View(Thymeleaf/JSP) 렌더링 → 응답`}</code></pre>
          </div>

          <h2>2. Thymeleaf 템플릿</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> list.html</span></div>
            <pre><code>{`<!DOCTYPE html>
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
</html>`}</code></pre>
          </div>

          <h2>3. 폼 검증</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserForm.java</span></div>
            <pre><code>{`public class UserForm {
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
}`}</code></pre>
          </div>

          <h2>4. JPA / Hibernate</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> User.java (Entity)</span></div>
            <pre><code>{`@Entity
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
}`}</code></pre>
          </div>

          <h2>5. Spring Data JPA</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserRepository.java</span></div>
            <pre><code>{`public interface UserRepository extends JpaRepository<User, Long> {

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
}`}</code></pre>
          </div>

          <h2>6. MyBatis</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserMapper.java</span></div>
            <pre><code>{`@Mapper
public interface UserMapper {

    @Select("SELECT * FROM users WHERE id = #{id}")
    User findById(Long id);

    @Insert("INSERT INTO users(name, email) VALUES(#{name}, #{email})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(User user);

    // XML 매퍼 사용 시
    List<User> findByCondition(UserSearchCondition condition);
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserMapper.xml</span></div>
            <pre><code>{`<mapper namespace="com.example.mapper.UserMapper">
    <select id="findByCondition" resultType="User">
        SELECT * FROM users
        <where>
            <if test="name != null">AND name LIKE CONCAT('%', #{name}, '%')</if>
            <if test="email != null">AND email = #{email}</if>
        </where>
        ORDER BY created_at DESC
    </select>
</mapper>`}</code></pre>
          </div>

          <h2>7. @Transactional</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> UserService.java</span></div>
            <pre><code>{`@Service
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
}`}</code></pre>
          </div>

          <h2>8. 프로젝트 구조 베스트 프랙티스</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 패키지 구조</span></div>
            <pre><code>{`com.example.myapp/
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
    └── GlobalExceptionHandler.java`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 학습을 마치며</div>
            <p>축하합니다! Java 기초부터 Spring Boot까지 전체 과정을 학습했습니다. 다음 단계로 Spring Security, Docker, CI/CD, 클라우드 배포 등을 학습하면 실무에 더 가까워질 수 있습니다.</p>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 종합 프로젝트</h4>
            <ol>
              <li>Spring Boot + JPA로 게시판 CRUD를 완성하세요.</li>
              <li>Thymeleaf로 게시판 UI를 구현하세요.</li>
              <li>MyBatis로 동적 검색 기능을 추가하세요.</li>
              <li>전체 프로젝트에 @Transactional과 예외 처리를 적용하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('17') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('17')}
            >
              {isLessonCompleted('17') ? '✓ 전체 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/java-learning/16"><i className="fas fa-arrow-left"></i> 이전: Spring Boot</Link>
            <Link to="/java-learning">전체 커리큘럼 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
