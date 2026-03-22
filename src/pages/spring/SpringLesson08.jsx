import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson08() {
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
            <span>Lesson 08</span>
          </div>
          <h1>Lesson 08. Spring Security 기초</h1>
          <p>Spring Security의 인증/인가 체계를 이해하고, 폼 로그인, 권한 관리, CSRF 보호를 학습합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. Spring Security 소개</h2>
          <p>
            Spring Security는 <strong>인증(Authentication)</strong>과 <strong>인가(Authorization)</strong>를
            제공하는 강력한 보안 프레임워크입니다. 서블릿 필터 체인 기반으로 동작하며,
            다양한 보안 위협으로부터 애플리케이션을 보호합니다.
          </p>

          <table className="comparison-table">
            <thead>
              <tr><th>구분</th><th>인증 (Authentication)</th><th>인가 (Authorization)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>정의</strong></td><td>사용자가 누구인지 확인</td><td>사용자가 무엇을 할 수 있는지 결정</td></tr>
              <tr><td><strong>질문</strong></td><td>"당신은 누구입니까?"</td><td>"이 리소스에 접근할 권한이 있습니까?"</td></tr>
              <tr><td><strong>예시</strong></td><td>로그인 (ID/PW, OAuth)</td><td>관리자 페이지 접근 제어</td></tr>
              <tr><td><strong>처리 순서</strong></td><td>먼저 실행</td><td>인증 후 실행</td></tr>
              <tr><td><strong>실패 시</strong></td><td>401 Unauthorized</td><td>403 Forbidden</td></tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> Security Filter Chain</div>
            <p>Spring Security는 약 15개의 보안 필터가 체인으로 연결되어 동작합니다.
            주요 필터: SecurityContextPersistenceFilter, UsernamePasswordAuthenticationFilter,
            ExceptionTranslationFilter, FilterSecurityInterceptor 등이 순서대로 실행됩니다.</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> build.gradle</span></div>
            <pre><code>{`dependencies {
    // Spring Security
    implementation 'org.springframework.boot:spring-boot-starter-security'

    // Thymeleaf Security (뷰에서 권한 체크)
    implementation 'org.thymeleaf.extras:thymeleaf-extras-springsecurity6'

    // 테스트
    testImplementation 'org.springframework.security:spring-security-test'
}`}</code></pre>
          </div>

          <h2>2. Security 설정 (SecurityFilterChain)</h2>
          <p>Spring Security 6 (Spring Boot 3)부터는 <code>SecurityFilterChain</code> Bean 방식으로 설정합니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SecurityConfig.java</span></div>
            <pre><code>{`@Configuration
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
}`}</code></pre>
          </div>

          <h2>3. 폼 기반 로그인 구현</h2>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> LoginController.java</span></div>
            <pre><code>{`@Controller
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
}`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> login.html (Thymeleaf)</span></div>
            <pre><code>{`<form th:action="@{/login}" method="post">
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
</form>`}</code></pre>
          </div>

          <h2>4. UserDetailsService 구현</h2>
          <p>Spring Security가 사용자 정보를 로드할 때 사용하는 핵심 인터페이스입니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> CustomUserDetailsService.java</span></div>
            <pre><code>{`@Service
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
}`}</code></pre>
          </div>

          <h2>5. PasswordEncoder (BCrypt)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PasswordEncoderConfig.java</span></div>
            <pre><code>{`@Configuration
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
// passwordEncoder.matches("rawPassword", encodedPassword) → true/false`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>비밀번호는 절대 평문으로 저장하면 안 됩니다. BCrypt는 같은 비밀번호라도 매번 다른 해시값을 생성하며(솔트),
            rainbow table 공격에 안전합니다. <code>strength</code> 파라미터(기본 10)로 해시 강도를 조절할 수 있습니다.</p>
          </div>

          <h2>6. 권한 기반 접근 제어</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MethodSecurity.java</span></div>
            <pre><code>{`// 메서드 레벨 보안 활성화
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
}`}</code></pre>
          </div>

          <h2>7. CSRF 보호</h2>
          <p>
            CSRF(Cross-Site Request Forgery)는 사용자가 의도하지 않은 요청을 보내도록 유도하는 공격입니다.
            Spring Security는 기본적으로 CSRF 보호가 활성화되어 있습니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> CsrfConfig.java</span></div>
            <pre><code>{`@Bean
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
//   → <input type="hidden" name="_csrf" value="토큰값"/> 자동 생성`}</code></pre>
          </div>

          <h2>8. Remember-Me 기능</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> RememberMeConfig.java</span></div>
            <pre><code>{`@Bean
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
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring 프로젝트 환경에서 실행해야 합니다. Spring Initializr(start.spring.io)로 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <h3>보안 개념 체험</h3>
          <JavaCodeRunner defaultCode={`// Spring Security 핵심 개념을 순수 Java로 시뮬레이션

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
}`} title="Spring Security 인증/인가 개념 체험" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>인증(Authentication)과 인가(Authorization)의 차이를 예시와 함께 설명하세요.</li>
              <li>SecurityFilterChain에서 URL별 접근 권한을 설정하는 코드를 작성하세요.
                (/public은 모두 허용, /member는 USER 이상, /admin은 ADMIN만)</li>
              <li>UserDetailsService를 구현하여 DB에서 사용자를 조회하는 코드를 작성하세요.</li>
              <li>BCrypt를 사용해야 하는 이유와 평문 저장의 위험성을 설명하세요.</li>
              <li>CSRF 공격의 원리와 Spring Security의 방어 메커니즘을 설명하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP08') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP08')}>
              {isLessonCompleted('SP08') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/07"><i className="fas fa-arrow-left"></i> 이전: MyBatis 연동</Link>
            <Link to="/spring/09">다음: Spring Boot 심화 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
