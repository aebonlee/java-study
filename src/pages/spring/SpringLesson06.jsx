import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson06() {
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
            <span>Lesson 06</span>
          </div>
          <h1>Lesson 06. 데이터 바인딩과 검증</h1>
          <p>Spring의 데이터 바인딩, Bean Validation, 커스텀 Validator를 활용한 입력 검증을 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 데이터 바인딩 (@ModelAttribute)</h2>
          <p>
            Spring MVC는 HTTP 요청 파라미터를 자동으로 Java 객체에 바인딩합니다.
            폼 데이터, 쿼리 파라미터 등을 DTO 객체의 필드에 자동 매핑하는 기능입니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberForm.java</span></div>
            <pre><code>{`// 폼 데이터를 담을 DTO (Data Transfer Object)
public class MemberForm {
    private String name;
    private String email;
    private String password;
    private int age;
    private String phone;

    // 기본 생성자 필수 (Spring이 객체 생성 시 사용)
    public MemberForm() {}

    // Getter/Setter (Spring이 데이터 바인딩 시 사용)
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberController.java</span></div>
            <pre><code>{`@Controller
@RequestMapping("/members")
public class MemberController {

    // 폼 화면 표시
    @GetMapping("/register")
    public String registerForm(Model model) {
        model.addAttribute("memberForm", new MemberForm());
        return "members/register";
    }

    // 폼 제출 처리 - @ModelAttribute가 자동으로 바인딩
    @PostMapping("/register")
    public String register(@ModelAttribute MemberForm form) {
        // form.getName(), form.getEmail() 등으로 데이터 접근
        memberService.register(form);
        return "redirect:/members/success";
    }
}`}</code></pre>
          </div>

          <h2>2. @InitBinder와 커스텀 에디터</h2>
          <p>특수한 타입 변환이 필요할 때 <code>@InitBinder</code>를 사용합니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> InitBinderExample.java</span></div>
            <pre><code>{`@Controller
public class EventController {

    // 이 컨트롤러의 모든 요청에 적용
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        // 문자열 앞뒤 공백 자동 제거
        StringTrimmerEditor trimmer = new StringTrimmerEditor(true);
        binder.registerCustomEditor(String.class, trimmer);

        // 날짜 형식 지정
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class,
            new CustomDateEditor(dateFormat, true));

        // 특정 필드 바인딩 금지 (보안)
        binder.setDisallowedFields("id", "role");
    }

    @PostMapping("/events")
    public String createEvent(@ModelAttribute EventForm form) {
        // form.getTitle()은 공백이 자동 제거됨
        // form.getEventDate()는 yyyy-MM-dd 형식으로 파싱됨
        return "redirect:/events";
    }
}`}</code></pre>
          </div>

          <h2>3. Bean Validation (JSR 303/380)</h2>
          <p>
            Bean Validation은 어노테이션 기반의 표준 검증 프레임워크입니다.
            객체의 필드에 제약 조건 어노테이션을 선언하면 자동으로 검증이 수행됩니다.
          </p>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>Spring Boot에서는 <code>spring-boot-starter-validation</code> 의존성을 추가하면
            Hibernate Validator가 포함되어 Bean Validation을 바로 사용할 수 있습니다.</p>
          </div>

          <table className="comparison-table">
            <thead>
              <tr><th>어노테이션</th><th>설명</th><th>사용 예</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>@NotNull</strong></td><td>null 불가</td><td>@NotNull private String name;</td></tr>
              <tr><td><strong>@NotEmpty</strong></td><td>null, 빈 문자열 불가</td><td>@NotEmpty private String title;</td></tr>
              <tr><td><strong>@NotBlank</strong></td><td>null, 빈 문자열, 공백만 불가</td><td>@NotBlank private String content;</td></tr>
              <tr><td><strong>@Size</strong></td><td>문자열/컬렉션 크기 제한</td><td>@Size(min=2, max=20) private String name;</td></tr>
              <tr><td><strong>@Min / @Max</strong></td><td>숫자 최소/최대값</td><td>@Min(1) @Max(150) private int age;</td></tr>
              <tr><td><strong>@Email</strong></td><td>이메일 형식 검증</td><td>@Email private String email;</td></tr>
              <tr><td><strong>@Pattern</strong></td><td>정규식 패턴 검증</td><td>@Pattern(regexp="^01[016789]-\\d&#123;3,4&#125;-\\d&#123;4&#125;$")</td></tr>
              <tr><td><strong>@Past / @Future</strong></td><td>과거/미래 날짜 검증</td><td>@Past private LocalDate birthDate;</td></tr>
              <tr><td><strong>@Positive</strong></td><td>양수만 허용</td><td>@Positive private int price;</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MemberFormWithValidation.java</span></div>
            <pre><code>{`import jakarta.validation.constraints.*;

public class MemberForm {

    @NotBlank(message = "이름은 필수입니다")
    @Size(min = 2, max = 20, message = "이름은 2~20자로 입력하세요")
    private String name;

    @NotBlank(message = "이메일은 필수입니다")
    @Email(message = "올바른 이메일 형식이 아닙니다")
    private String email;

    @NotBlank(message = "비밀번호는 필수입니다")
    @Size(min = 8, max = 20, message = "비밀번호는 8~20자로 입력하세요")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\\\d).*$",
             message = "비밀번호는 영문자와 숫자를 포함해야 합니다")
    private String password;

    @Min(value = 1, message = "나이는 1세 이상이어야 합니다")
    @Max(value = 150, message = "나이는 150세 이하여야 합니다")
    private int age;

    @Pattern(regexp = "^01[016789]-\\\\d{3,4}-\\\\d{4}$",
             message = "올바른 전화번호 형식이 아닙니다")
    private String phone;

    // getter, setter 생략
}`}</code></pre>
          </div>

          <h2>4. BindingResult로 에러 처리</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ValidationController.java</span></div>
            <pre><code>{`@Controller
@RequestMapping("/members")
public class MemberController {

    @PostMapping("/register")
    public String register(
            @Valid @ModelAttribute("memberForm") MemberForm form,
            BindingResult bindingResult,  // 반드시 @Valid 바로 뒤에 위치!
            Model model) {

        // 검증 에러 확인
        if (bindingResult.hasErrors()) {
            // 에러가 있으면 폼으로 다시 이동 (입력값 유지)
            return "members/register";
        }

        // 검증 통과 시 회원가입 처리
        memberService.register(form);
        return "redirect:/members/success";
    }
}

// REST API에서의 검증 에러 처리
@RestController
@RequestMapping("/api/members")
public class MemberApiController {

    @PostMapping
    public ResponseEntity<?> register(
            @Valid @RequestBody MemberForm form,
            BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            // 에러 메시지를 JSON으로 반환
            List<String> errors = bindingResult.getFieldErrors()
                .stream()
                .map(e -> e.getField() + ": " + e.getDefaultMessage())
                .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(errors);
        }

        memberService.register(form);
        return ResponseEntity.ok("회원가입 성공");
    }
}`}</code></pre>
          </div>

          <h2>5. 커스텀 Validator 구현</h2>
          <p>표준 어노테이션으로 처리할 수 없는 복잡한 검증 로직은 커스텀 Validator로 구현합니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PasswordMatchValidator.java</span></div>
            <pre><code>{`// 1) 커스텀 어노테이션 정의
@Target(ElementType.TYPE)  // 클래스 레벨에 적용
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PasswordMatchValidator.class)
public @interface PasswordMatch {
    String message() default "비밀번호가 일치하지 않습니다";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}

// 2) Validator 구현
public class PasswordMatchValidator
        implements ConstraintValidator<PasswordMatch, MemberForm> {

    @Override
    public boolean isValid(MemberForm form,
                           ConstraintValidatorContext context) {
        if (form.getPassword() == null) return true;
        return form.getPassword().equals(form.getPasswordConfirm());
    }
}

// 3) 사용
@PasswordMatch  // 클래스 레벨 검증
public class MemberForm {
    @NotBlank
    private String password;
    @NotBlank
    private String passwordConfirm;
    // ...
}

// --- Validator 인터페이스 직접 구현 방식 ---
@Component
public class MemberFormValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return MemberForm.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        MemberForm form = (MemberForm) target;

        // 이메일 중복 체크 (DB 조회 필요)
        if (memberRepository.existsByEmail(form.getEmail())) {
            errors.rejectValue("email", "duplicate",
                "이미 사용 중인 이메일입니다");
        }

        // 비밀번호 확인 일치 여부
        if (!form.getPassword().equals(form.getPasswordConfirm())) {
            errors.rejectValue("passwordConfirm", "mismatch",
                "비밀번호가 일치하지 않습니다");
        }
    }
}`}</code></pre>
          </div>

          <h2>6. 메시지 소스 (국제화)</h2>
          <p>검증 메시지를 외부 파일로 분리하여 다국어 지원을 구현합니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> messages.properties (한국어 기본)</span></div>
            <pre><code>{`# 필드별 에러 메시지
NotBlank.memberForm.name=이름을 입력해주세요
Size.memberForm.name=이름은 {2}~{1}자로 입력하세요
Email.memberForm.email=올바른 이메일 형식이 아닙니다
Min.memberForm.age=나이는 {1}세 이상이어야 합니다

# 공통 메시지
typeMismatch.int=숫자를 입력해주세요
typeMismatch.java.time.LocalDate=올바른 날짜 형식이 아닙니다`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> messages_en.properties (영어)</span></div>
            <pre><code>{`NotBlank.memberForm.name=Please enter your name
Size.memberForm.name=Name must be between {2} and {1} characters
Email.memberForm.email=Invalid email format
Min.memberForm.age=Age must be at least {1}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MessageSourceConfig.java</span></div>
            <pre><code>{`@Configuration
public class MessageSourceConfig {

    @Bean
    public MessageSource messageSource() {
        ResourceBundleMessageSource source =
            new ResourceBundleMessageSource();
        source.setBasenames("messages");
        source.setDefaultEncoding("UTF-8");
        return source;
    }

    @Bean
    public LocaleResolver localeResolver() {
        SessionLocaleResolver resolver = new SessionLocaleResolver();
        resolver.setDefaultLocale(Locale.KOREAN);
        return resolver;
    }
}`}</code></pre>
          </div>

          <h2>7. 실전: 회원가입 폼 검증</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> RegisterController.java</span></div>
            <pre><code>{`@Controller
@RequestMapping("/register")
@RequiredArgsConstructor
public class RegisterController {

    private final MemberService memberService;
    private final MemberFormValidator memberFormValidator;

    // 커스텀 Validator 등록
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.addValidators(memberFormValidator);
    }

    @GetMapping
    public String registerForm(Model model) {
        model.addAttribute("memberForm", new MemberForm());
        return "register";
    }

    @PostMapping
    public String register(
            @Valid @ModelAttribute MemberForm form,
            BindingResult result,
            RedirectAttributes redirectAttributes) {

        if (result.hasErrors()) {
            // 에러 메시지와 함께 폼 다시 표시
            return "register";
        }

        try {
            memberService.register(form);
            redirectAttributes.addFlashAttribute("message",
                "회원가입이 완료되었습니다!");
            return "redirect:/login";
        } catch (DuplicateEmailException e) {
            result.rejectValue("email", "duplicate",
                e.getMessage());
            return "register";
        }
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <h3>검증 어노테이션 개념 체험</h3>
          <JavaCodeRunner defaultCode={`// Bean Validation 개념을 순수 Java로 시뮬레이션

import java.util.*;

class ValidationError {
    String field;
    String message;
    ValidationError(String field, String message) {
        this.field = field;
        this.message = message;
    }
}

class MemberForm {
    String name;
    String email;
    String password;
    int age;

    MemberForm(String name, String email, String password, int age) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
    }
}

// Spring의 Validator 역할 시뮬레이션
class MemberValidator {
    public List<ValidationError> validate(MemberForm form) {
        List<ValidationError> errors = new ArrayList<>();

        // @NotBlank 시뮬레이션
        if (form.name == null || form.name.trim().isEmpty()) {
            errors.add(new ValidationError("name", "이름은 필수입니다"));
        }
        // @Size(min=2, max=20) 시뮬레이션
        else if (form.name.length() < 2 || form.name.length() > 20) {
            errors.add(new ValidationError("name", "이름은 2~20자로 입력하세요"));
        }

        // @Email 시뮬레이션
        if (form.email == null || !form.email.contains("@")) {
            errors.add(new ValidationError("email", "올바른 이메일 형식이 아닙니다"));
        }

        // @Size(min=8) 시뮬레이션
        if (form.password == null || form.password.length() < 8) {
            errors.add(new ValidationError("password", "비밀번호는 8자 이상이어야 합니다"));
        }

        // @Min(1) @Max(150) 시뮬레이션
        if (form.age < 1 || form.age > 150) {
            errors.add(new ValidationError("age", "나이는 1~150 사이여야 합니다"));
        }

        return errors;
    }
}

public class Main {
    public static void main(String[] args) {
        MemberValidator validator = new MemberValidator();

        System.out.println("=== 유효하지 않은 데이터 검증 ===");
        MemberForm badForm = new MemberForm("", "invalid-email", "123", 0);
        List<ValidationError> errors = validator.validate(badForm);
        for (ValidationError e : errors) {
            System.out.println("  [" + e.field + "] " + e.message);
        }

        System.out.println("\\n=== 유효한 데이터 검증 ===");
        MemberForm goodForm = new MemberForm("홍길동", "hong@test.com", "password123", 25);
        errors = validator.validate(goodForm);
        if (errors.isEmpty()) {
            System.out.println("  검증 통과! 회원가입을 진행합니다.");
        }

        System.out.println("\\n→ Spring에서는 @Valid 하나로 이 과정이 자동화됩니다!");
    }
}`} title="Bean Validation 개념 체험" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>@NotNull, @NotEmpty, @NotBlank의 차이점을 설명하세요.</li>
              <li>BindingResult를 @Valid 바로 뒤에 선언해야 하는 이유를 설명하세요.</li>
              <li>"비밀번호와 비밀번호 확인이 일치하는지" 검증하는 커스텀 Validator를 설계하세요.</li>
              <li>국제화(i18n) 메시지 소스를 사용할 때 메시지 우선순위 규칙을 설명하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP06') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP06')}>
              {isLessonCompleted('SP06') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/05"><i className="fas fa-arrow-left"></i> 이전: Spring MVC 기초</Link>
            <Link to="/spring/07">다음: MyBatis 연동 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
