import{u as a,r as t,j as e,L as r}from"./index-ng2oLB6S.js";import{J as l}from"./JavaCodeRunner-BwY8IEty.js";function d(){const{completeLesson:i,isLessonCompleted:s}=a();return t.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 06"})]}),e.jsx("h1",{children:"Lesson 06. 데이터 바인딩과 검증"}),e.jsx("p",{children:"Spring의 데이터 바인딩, Bean Validation, 커스텀 Validator를 활용한 입력 검증을 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 데이터 바인딩 (@ModelAttribute)"}),e.jsx("p",{children:"Spring MVC는 HTTP 요청 파라미터를 자동으로 Java 객체에 바인딩합니다. 폼 데이터, 쿼리 파라미터 등을 DTO 객체의 필드에 자동 매핑하는 기능입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberForm.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 폼 데이터를 담을 DTO (Data Transfer Object)
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
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller
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
}`})})]}),e.jsx("h2",{children:"2. @InitBinder와 커스텀 에디터"}),e.jsxs("p",{children:["특수한 타입 변환이 필요할 때 ",e.jsx("code",{children:"@InitBinder"}),"를 사용합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," InitBinderExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller
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
}`})})]}),e.jsx("h2",{children:"3. Bean Validation (JSR 303/380)"}),e.jsx("p",{children:"Bean Validation은 어노테이션 기반의 표준 검증 프레임워크입니다. 객체의 필드에 제약 조건 어노테이션을 선언하면 자동으로 검증이 수행됩니다."}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsxs("p",{children:["Spring Boot에서는 ",e.jsx("code",{children:"spring-boot-starter-validation"})," 의존성을 추가하면 Hibernate Validator가 포함되어 Bean Validation을 바로 사용할 수 있습니다."]})]}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"어노테이션"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"사용 예"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@NotNull"})}),e.jsx("td",{children:"null 불가"}),e.jsx("td",{children:"@NotNull private String name;"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@NotEmpty"})}),e.jsx("td",{children:"null, 빈 문자열 불가"}),e.jsx("td",{children:"@NotEmpty private String title;"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@NotBlank"})}),e.jsx("td",{children:"null, 빈 문자열, 공백만 불가"}),e.jsx("td",{children:"@NotBlank private String content;"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Size"})}),e.jsx("td",{children:"문자열/컬렉션 크기 제한"}),e.jsx("td",{children:"@Size(min=2, max=20) private String name;"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Min / @Max"})}),e.jsx("td",{children:"숫자 최소/최대값"}),e.jsx("td",{children:"@Min(1) @Max(150) private int age;"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Email"})}),e.jsx("td",{children:"이메일 형식 검증"}),e.jsx("td",{children:"@Email private String email;"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Pattern"})}),e.jsx("td",{children:"정규식 패턴 검증"}),e.jsx("td",{children:'@Pattern(regexp="^01[016789]-\\\\d{3,4}-\\\\d{4}$")'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Past / @Future"})}),e.jsx("td",{children:"과거/미래 날짜 검증"}),e.jsx("td",{children:"@Past private LocalDate birthDate;"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"@Positive"})}),e.jsx("td",{children:"양수만 허용"}),e.jsx("td",{children:"@Positive private int price;"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MemberFormWithValidation.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import jakarta.validation.constraints.*;

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
}`})})]}),e.jsx("h2",{children:"4. BindingResult로 에러 처리"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ValidationController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller
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
}`})})]}),e.jsx("h2",{children:"5. 커스텀 Validator 구현"}),e.jsx("p",{children:"표준 어노테이션으로 처리할 수 없는 복잡한 검증 로직은 커스텀 Validator로 구현합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PasswordMatchValidator.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 1) 커스텀 어노테이션 정의
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
}`})})]}),e.jsx("h2",{children:"6. 메시지 소스 (국제화)"}),e.jsx("p",{children:"검증 메시지를 외부 파일로 분리하여 다국어 지원을 구현합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," messages.properties (한국어 기본)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 필드별 에러 메시지
NotBlank.memberForm.name=이름을 입력해주세요
Size.memberForm.name=이름은 {2}~{1}자로 입력하세요
Email.memberForm.email=올바른 이메일 형식이 아닙니다
Min.memberForm.age=나이는 {1}세 이상이어야 합니다

# 공통 메시지
typeMismatch.int=숫자를 입력해주세요
typeMismatch.java.time.LocalDate=올바른 날짜 형식이 아닙니다`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," messages_en.properties (영어)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`NotBlank.memberForm.name=Please enter your name
Size.memberForm.name=Name must be between {2} and {1} characters
Email.memberForm.email=Invalid email format
Min.memberForm.age=Age must be at least {1}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MessageSourceConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Configuration
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
}`})})]}),e.jsx("h2",{children:"7. 실전: 회원가입 폼 검증"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," RegisterController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller
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
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요."})]}),e.jsx("h3",{children:"검증 어노테이션 개념 체험"}),e.jsx(l,{defaultCode:`// Bean Validation 개념을 순수 Java로 시뮬레이션

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
}`,title:"Bean Validation 개념 체험"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"@NotNull, @NotEmpty, @NotBlank의 차이점을 설명하세요."}),e.jsx("li",{children:"BindingResult를 @Valid 바로 뒤에 선언해야 하는 이유를 설명하세요."}),e.jsx("li",{children:'"비밀번호와 비밀번호 확인이 일치하는지" 검증하는 커스텀 Validator를 설계하세요.'}),e.jsx("li",{children:"국제화(i18n) 메시지 소스를 사용할 때 메시지 우선순위 규칙을 설명하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("SP06")?"btn-primary":"btn-accent"}`,onClick:()=>i("SP06"),children:s("SP06")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/spring/05",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Spring MVC 기초"]}),e.jsxs(r,{to:"/spring/07",children:["다음: MyBatis 연동 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
