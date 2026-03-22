import{u as t,r as n,j as e,L as r}from"./index-CkYg-CVx.js";import{J as l}from"./JavaCodeRunner-CrkxkBFE.js";function c(){const{completeLesson:i,isLessonCompleted:s}=t();return n.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/spring",children:"스프링 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 08"})]}),e.jsx("h1",{children:"Lesson 08. Spring Security 기초"}),e.jsx("p",{children:"Spring Security의 인증/인가 체계를 이해하고, 폼 로그인, 권한 관리, CSRF 보호를 학습합니다."})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. Spring Security 소개"}),e.jsxs("p",{children:["Spring Security는 ",e.jsx("strong",{children:"인증(Authentication)"}),"과 ",e.jsx("strong",{children:"인가(Authorization)"}),"를 제공하는 강력한 보안 프레임워크입니다. 서블릿 필터 체인 기반으로 동작하며, 다양한 보안 위협으로부터 애플리케이션을 보호합니다."]}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"인증 (Authentication)"}),e.jsx("th",{children:"인가 (Authorization)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"정의"})}),e.jsx("td",{children:"사용자가 누구인지 확인"}),e.jsx("td",{children:"사용자가 무엇을 할 수 있는지 결정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"질문"})}),e.jsx("td",{children:'"당신은 누구입니까?"'}),e.jsx("td",{children:'"이 리소스에 접근할 권한이 있습니까?"'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"예시"})}),e.jsx("td",{children:"로그인 (ID/PW, OAuth)"}),e.jsx("td",{children:"관리자 페이지 접근 제어"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"처리 순서"})}),e.jsx("td",{children:"먼저 실행"}),e.jsx("td",{children:"인증 후 실행"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"실패 시"})}),e.jsx("td",{children:"401 Unauthorized"}),e.jsx("td",{children:"403 Forbidden"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," Security Filter Chain"]}),e.jsx("p",{children:"Spring Security는 약 15개의 보안 필터가 체인으로 연결되어 동작합니다. 주요 필터: SecurityContextPersistenceFilter, UsernamePasswordAuthenticationFilter, ExceptionTranslationFilter, FilterSecurityInterceptor 등이 순서대로 실행됩니다."})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle"]})}),e.jsx("pre",{children:e.jsx("code",{children:`dependencies {
    // Spring Security
    implementation 'org.springframework.boot:spring-boot-starter-security'

    // Thymeleaf Security (뷰에서 권한 체크)
    implementation 'org.thymeleaf.extras:thymeleaf-extras-springsecurity6'

    // 테스트
    testImplementation 'org.springframework.security:spring-security-test'
}`})})]}),e.jsx("h2",{children:"2. Security 설정 (SecurityFilterChain)"}),e.jsxs("p",{children:["Spring Security 6 (Spring Boot 3)부터는 ",e.jsx("code",{children:"SecurityFilterChain"})," Bean 방식으로 설정합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SecurityConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Configuration
@EnableWebSecurity  // Spring Security 활성화
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // 1) URL별 접근 권한 설정
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/home", "/register").permitAll()  // 누구나 접근
                .requestMatchers("/css/**", "/js/**", "/images/**").permitAll()  // 정적 리소스
                .requestMatchers("/admin/**").hasRole("ADMIN")  // 관리자만
                .requestMatchers("/board/write").hasAnyRole("USER", "ADMIN")  // 회원 이상
                .anyRequest().authenticated()  // 나머지는 인증 필요
            )

            // 2) 폼 로그인 설정
            .formLogin(form -> form
                .loginPage("/login")           // 커스텀 로그인 페이지
                .loginProcessingUrl("/login")  // 로그인 처리 URL
                .defaultSuccessUrl("/")        // 로그인 성공 후 이동
                .failureUrl("/login?error=true")  // 로그인 실패 시
                .usernameParameter("email")    // 사용자명 파라미터명
                .passwordParameter("password") // 비밀번호 파라미터명
                .permitAll()
            )

            // 3) 로그아웃 설정
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login?logout=true")
                .invalidateHttpSession(true)   // 세션 무효화
                .deleteCookies("JSESSIONID")   // 쿠키 삭제
            );

        return http.build();
    }
}`})})]}),e.jsx("h2",{children:"3. 폼 기반 로그인 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," LoginController.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Controller
public class LoginController {

    @GetMapping("/login")
    public String loginPage(@RequestParam(required = false) String error,
                            @RequestParam(required = false) String logout,
                            Model model) {
        if (error != null) {
            model.addAttribute("errorMsg", "아이디 또는 비밀번호가 올바르지 않습니다.");
        }
        if (logout != null) {
            model.addAttribute("logoutMsg", "정상적으로 로그아웃되었습니다.");
        }
        return "login";
    }
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," login.html (Thymeleaf)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<form th:action="@{/login}" method="post">
    <!-- CSRF 토큰은 Thymeleaf가 자동 삽입 -->
    <div th:if="\${errorMsg}" class="alert alert-danger">
        <span th:text="\${errorMsg}"></span>
    </div>
    <div th:if="\${logoutMsg}" class="alert alert-success">
        <span th:text="\${logoutMsg}"></span>
    </div>

    <div class="form-group">
        <label>이메일</label>
        <input type="email" name="email" required/>
    </div>
    <div class="form-group">
        <label>비밀번호</label>
        <input type="password" name="password" required/>
    </div>
    <div class="form-group">
        <label>
            <input type="checkbox" name="remember-me"/> 로그인 기억하기
        </label>
    </div>
    <button type="submit">로그인</button>
</form>`})})]}),e.jsx("h2",{children:"4. UserDetailsService 구현"}),e.jsx("p",{children:"Spring Security가 사용자 정보를 로드할 때 사용하는 핵심 인터페이스입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CustomUserDetailsService.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        // DB에서 회원 조회
        Member member = memberRepository.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException(
                "사용자를 찾을 수 없습니다: " + email));

        // UserDetails 객체로 변환
        return User.builder()
            .username(member.getEmail())
            .password(member.getPassword())  // 암호화된 비밀번호
            .roles(member.getRole())         // "USER", "ADMIN"
            .build();
    }
}

// 커스텀 UserDetails (추가 정보가 필요할 때)
public class CustomUserDetails implements UserDetails {
    private final Member member;

    public CustomUserDetails(Member member) {
        this.member = member;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + member.getRole()));
    }

    @Override
    public String getPassword() { return member.getPassword(); }

    @Override
    public String getUsername() { return member.getEmail(); }

    @Override
    public boolean isAccountNonExpired() { return true; }

    @Override
    public boolean isAccountNonLocked() { return !member.isLocked(); }

    @Override
    public boolean isCredentialsNonExpired() { return true; }

    @Override
    public boolean isEnabled() { return member.isActive(); }

    // 추가 정보 접근
    public String getMemberName() { return member.getName(); }
    public Long getMemberId() { return member.getId(); }
}`})})]}),e.jsx("h2",{children:"5. PasswordEncoder (BCrypt)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PasswordEncoderConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Configuration
public class PasswordEncoderConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        // BCrypt: 단방향 해시 + 솔트 자동 생성
        return new BCryptPasswordEncoder();
    }
}

// 회원가입 시 비밀번호 암호화
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void register(MemberForm form) {
        // 비밀번호를 BCrypt로 암호화하여 저장
        String encodedPassword = passwordEncoder.encode(form.getPassword());
        // 결과: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92...

        Member member = Member.builder()
            .email(form.getEmail())
            .password(encodedPassword)   // 암호화된 비밀번호 저장
            .name(form.getName())
            .role("USER")
            .build();

        memberRepository.save(member);
    }
}

// 비밀번호 검증 (Spring Security가 내부적으로 수행)
// passwordEncoder.matches("rawPassword", encodedPassword) → true/false`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),e.jsxs("p",{children:["비밀번호는 절대 평문으로 저장하면 안 됩니다. BCrypt는 같은 비밀번호라도 매번 다른 해시값을 생성하며(솔트), rainbow table 공격에 안전합니다. ",e.jsx("code",{children:"strength"})," 파라미터(기본 10)로 해시 강도를 조절할 수 있습니다."]})]}),e.jsx("h2",{children:"6. 권한 기반 접근 제어"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MethodSecurity.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 메서드 레벨 보안 활성화
@Configuration
@EnableMethodSecurity  // Spring Security 6
public class MethodSecurityConfig { }

// Controller/Service에서 메서드 단위 보안
@RestController
@RequestMapping("/api")
public class AdminController {

    // ADMIN 역할만 접근 가능
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/admin/users")
    public List<Member> getAllUsers() {
        return memberService.findAll();
    }

    // USER 또는 ADMIN 역할
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @GetMapping("/mypage")
    public Member myPage(@AuthenticationPrincipal UserDetails user) {
        return memberService.findByEmail(user.getUsername());
    }

    // 자기 자신의 정보만 수정 가능
    @PreAuthorize("#id == authentication.principal.memberId or hasRole('ADMIN')")
    @PutMapping("/members/{id}")
    public Member updateMember(@PathVariable Long id,
                                @RequestBody MemberForm form) {
        return memberService.update(id, form);
    }

    // 반환값 필터링
    @PostAuthorize("returnObject.email == authentication.name")
    @GetMapping("/members/{id}")
    public Member getMember(@PathVariable Long id) {
        return memberService.findById(id);
    }
}

// 현재 로그인 사용자 정보 가져오기
@Controller
public class ProfileController {

    @GetMapping("/profile")
    public String profile(@AuthenticationPrincipal CustomUserDetails user,
                          Model model) {
        model.addAttribute("name", user.getMemberName());
        model.addAttribute("email", user.getUsername());
        return "profile";
    }
}`})})]}),e.jsx("h2",{children:"7. CSRF 보호"}),e.jsx("p",{children:"CSRF(Cross-Site Request Forgery)는 사용자가 의도하지 않은 요청을 보내도록 유도하는 공격입니다. Spring Security는 기본적으로 CSRF 보호가 활성화되어 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CsrfConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        // CSRF 설정 (기본: 활성화)
        .csrf(csrf -> csrf
            // REST API는 CSRF 비활성화 (토큰 기반 인증 사용 시)
            .ignoringRequestMatchers("/api/**")
            // CSRF 토큰을 쿠키로 전달 (SPA 프론트엔드용)
            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
        );
    return http.build();
}

// Thymeleaf에서 CSRF 토큰 자동 삽입
// <form th:action="@{/submit}" method="post">
//   → <input type="hidden" name="_csrf" value="토큰값"/> 자동 생성`})})]}),e.jsx("h2",{children:"8. Remember-Me 기능"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," RememberMeConfig.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .rememberMe(remember -> remember
            .key("uniqueAndSecretKey")        // 토큰 암호화 키
            .tokenValiditySeconds(86400 * 30) // 30일 유지
            .rememberMeParameter("remember-me") // 체크박스 파라미터명
            .userDetailsService(userDetailsService)
        );
    return http.build();
}

// 영구 토큰 방식 (더 안전)
@Bean
public SecurityFilterChain filterChainPersistent(HttpSecurity http) throws Exception {
    http
        .rememberMe(remember -> remember
            .tokenRepository(persistentTokenRepository())
            .tokenValiditySeconds(86400 * 30)
            .userDetailsService(userDetailsService)
        );
    return http.build();
}

@Bean
public PersistentTokenRepository persistentTokenRepository() {
    JdbcTokenRepositoryImpl tokenRepository = new JdbcTokenRepositoryImpl();
    tokenRepository.setDataSource(dataSource);
    // persistent_logins 테이블 필요
    return tokenRepository;
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요."})]}),e.jsx("h3",{children:"보안 개념 체험"}),e.jsx(l,{defaultCode:`// Spring Security 핵심 개념을 순수 Java로 시뮬레이션

import java.util.*;

// 사용자 정보
class User {
    String email;
    String password; // 실제로는 BCrypt 해시
    String role;     // USER, ADMIN

    User(String email, String password, String role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

// 간단한 비밀번호 해시 시뮬레이션
class PasswordEncoder {
    static String encode(String raw) {
        // 실제로는 BCrypt 알고리즘 사용
        return "ENCODED_" + raw.hashCode();
    }
    static boolean matches(String raw, String encoded) {
        return encoded.equals("ENCODED_" + raw.hashCode());
    }
}

// SecurityContext 시뮬레이션
class SecurityContext {
    private static User currentUser = null;

    static void setUser(User user) { currentUser = user; }
    static User getUser() { return currentUser; }
    static void clear() { currentUser = null; }
    static boolean isAuthenticated() { return currentUser != null; }
}

// 인증 서비스
class AuthService {
    private Map<String, User> userStore = new HashMap<>();

    void register(String email, String rawPassword, String role) {
        String encodedPw = PasswordEncoder.encode(rawPassword);
        userStore.put(email, new User(email, encodedPw, role));
        System.out.println("회원가입: " + email + " (비밀번호 해시: " + encodedPw + ")");
    }

    boolean login(String email, String rawPassword) {
        User user = userStore.get(email);
        if (user == null) {
            System.out.println("인증 실패: 사용자 없음");
            return false;
        }
        if (!PasswordEncoder.matches(rawPassword, user.password)) {
            System.out.println("인증 실패: 비밀번호 불일치");
            return false;
        }
        SecurityContext.setUser(user);
        System.out.println("인증 성공: " + email + " (역할: " + user.role + ")");
        return true;
    }

    void logout() {
        System.out.println("로그아웃: " + SecurityContext.getUser().email);
        SecurityContext.clear();
    }
}

// 인가 체크
class AccessControl {
    static boolean hasRole(String requiredRole) {
        if (!SecurityContext.isAuthenticated()) return false;
        return SecurityContext.getUser().role.equals(requiredRole);
    }

    static void checkAccess(String resource, String requiredRole) {
        if (!SecurityContext.isAuthenticated()) {
            System.out.println("  [401] " + resource + " → 인증 필요!");
        } else if (!hasRole(requiredRole)) {
            System.out.println("  [403] " + resource + " → 권한 없음! (현재: "
                + SecurityContext.getUser().role + ", 필요: " + requiredRole + ")");
        } else {
            System.out.println("  [200] " + resource + " → 접근 허용!");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        AuthService auth = new AuthService();

        System.out.println("=== 1. 회원가입 ===");
        auth.register("user@test.com", "password123", "USER");
        auth.register("admin@test.com", "admin456", "ADMIN");

        System.out.println("\\n=== 2. 로그인 시도 ===");
        auth.login("user@test.com", "wrong");
        auth.login("user@test.com", "password123");

        System.out.println("\\n=== 3. 접근 제어 (USER 로그인) ===");
        AccessControl.checkAccess("/mypage", "USER");
        AccessControl.checkAccess("/admin", "ADMIN");

        System.out.println("\\n=== 4. ADMIN 로그인 ===");
        auth.logout();
        auth.login("admin@test.com", "admin456");
        AccessControl.checkAccess("/admin", "ADMIN");
        AccessControl.checkAccess("/mypage", "USER");
    }
}`,title:"Spring Security 인증/인가 개념 체험"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"인증(Authentication)과 인가(Authorization)의 차이를 예시와 함께 설명하세요."}),e.jsx("li",{children:"SecurityFilterChain에서 URL별 접근 권한을 설정하는 코드를 작성하세요. (/public은 모두 허용, /member는 USER 이상, /admin은 ADMIN만)"}),e.jsx("li",{children:"UserDetailsService를 구현하여 DB에서 사용자를 조회하는 코드를 작성하세요."}),e.jsx("li",{children:"BCrypt를 사용해야 하는 이유와 평문 저장의 위험성을 설명하세요."}),e.jsx("li",{children:"CSRF 공격의 원리와 Spring Security의 방어 메커니즘을 설명하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("SP08")?"btn-primary":"btn-accent"}`,onClick:()=>i("SP08"),children:s("SP08")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/spring/07",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: MyBatis 연동"]}),e.jsxs(r,{to:"/spring/09",children:["다음: Spring Boot 심화 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{c as default};
