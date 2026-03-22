import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson13() {
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
            <span>Lesson 13</span>
          </div>
          <h1>Lesson 13. Spring Security + JWT</h1>
          <p>JWT 토큰 기반 인증의 원리를 이해하고 Spring Security와 통합하여 안전한 API를 구축합니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. JWT 토큰 구조</h2>
          <p>JWT(JSON Web Token)는 세 부분으로 구성된 인코딩된 문자열입니다: <strong>Header.Payload.Signature</strong></p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> JWT 구조</span></div>
            <pre><code>{`// JWT 토큰 예시
eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJob25nIiwicm9sZSI6IlVTRVIiLCJleHAiOjE3MDU0MjAwMDB9.abc123...

// 1. Header (헤더) - Base64 인코딩
{
  "alg": "HS256",     // 서명 알고리즘
  "typ": "JWT"         // 토큰 타입
}

// 2. Payload (페이로드) - Base64 인코딩
{
  "sub": "hong",       // Subject (사용자 식별자)
  "role": "USER",      // 커스텀 클레임 (역할)
  "iat": 1705333600,   // Issued At (발급 시간)
  "exp": 1705420000    // Expiration (만료 시간)
}

// 3. Signature (서명)
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret_key  // 서버만 알고 있는 비밀 키
)`}</code></pre>
          </div>

          <h2>2. JWT vs 세션 비교</h2>
          <table className="info-table">
            <thead><tr><th>구분</th><th>세션 기반</th><th>JWT 토큰 기반</th></tr></thead>
            <tbody>
              <tr><td><strong>상태 저장</strong></td><td>서버에 세션 저장 (Stateful)</td><td>클라이언트에 토큰 저장 (Stateless)</td></tr>
              <tr><td><strong>확장성</strong></td><td>서버 간 세션 공유 필요</td><td>별도 공유 없이 확장 가능</td></tr>
              <tr><td><strong>저장 위치</strong></td><td>서버 메모리 / Redis</td><td>클라이언트 (localStorage, Cookie)</td></tr>
              <tr><td><strong>보안</strong></td><td>세션 하이재킹 위험</td><td>토큰 탈취 시 만료까지 유효</td></tr>
              <tr><td><strong>모바일 호환</strong></td><td>쿠키 의존으로 불편</td><td>헤더로 전송하여 호환 우수</td></tr>
              <tr><td><strong>무효화</strong></td><td>서버에서 세션 삭제 가능</td><td>즉시 무효화 어려움 (블랙리스트 필요)</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>JWT를 localStorage에 저장하면 XSS 공격에 취약하고, Cookie에 저장하면 CSRF 공격에 취약합니다. HttpOnly + Secure 쿠키에 저장하고 CSRF 토큰을 함께 사용하는 것이 가장 안전한 방법입니다.</p>
          </div>

          <h2>3. JWT 생성과 검증 (jjwt 라이브러리)</h2>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> build.gradle (의존성)</span></div>
            <pre><code>{`dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-security'
    implementation 'io.jsonwebtoken:jjwt-api:0.12.3'
    runtimeOnly 'io.jsonwebtoken:jjwt-impl:0.12.3'
    runtimeOnly 'io.jsonwebtoken:jjwt-jackson:0.12.3'
}`}</code></pre>
          </div>

          <h2>4. JwtTokenProvider 구현</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> JwtTokenProvider.java</span></div>
            <pre><code>{`@Component
public class JwtTokenProvider {

    @Value("\${jwt.secret}")
    private String secretKey;

    @Value("\${jwt.expiration}")
    private long expirationMs;  // 예: 3600000 (1시간)

    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // JWT 토큰 생성
    public String createToken(String username, String role) {
        Date now = new Date();
        Date expiry = new Date(now.getTime() + expirationMs);

        return Jwts.builder()
                .subject(username)                    // 사용자 식별자
                .claim("role", role)                  // 커스텀 클레임
                .issuedAt(now)                        // 발급 시간
                .expiration(expiry)                   // 만료 시간
                .signWith(getSigningKey())             // 서명
                .compact();
    }

    // 토큰에서 사용자명 추출
    public String getUsername(String token) {
        return getClaims(token).getSubject();
    }

    // 토큰 검증
    public boolean validateToken(String token) {
        try {
            getClaims(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    private Claims getClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}`}</code></pre>
          </div>

          <h2>5. JwtAuthenticationFilter 구현</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> JwtAuthenticationFilter.java</span></div>
            <pre><code>{`@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenProvider jwtTokenProvider;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                     HttpServletResponse response,
                                     FilterChain filterChain) throws ServletException, IOException {

        // 1. 헤더에서 토큰 추출
        String token = resolveToken(request);

        // 2. 토큰 검증 & 인증 설정
        if (token != null && jwtTokenProvider.validateToken(token)) {
            String username = jwtTokenProvider.getUsername(token);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities());

            // 3. SecurityContext에 인증 정보 저장
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }

    // Authorization: Bearer <token>에서 토큰 추출
    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}`}</code></pre>
          </div>

          <h2>6. SecurityConfig에 JWT 필터 등록</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SecurityConfig.java</span></div>
            <pre><code>{`@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())           // REST API는 CSRF 비활성화
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // 세션 사용 안함
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()       // 인증 없이 접근
                .requestMatchers("/api/admin/**").hasRole("ADMIN") // ADMIN만 접근
                .anyRequest().authenticated()                       // 나머지는 인증 필요
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}`}</code></pre>
          </div>

          <h2>7. Refresh Token 전략</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Refresh Token 흐름</span></div>
            <pre><code>{`// 1. 로그인 시 Access Token + Refresh Token 발급
// - Access Token: 만료 시간 짧음 (15분~1시간)
// - Refresh Token: 만료 시간 긺 (7일~30일), DB에 저장

// 2. Access Token 만료 시 Refresh Token으로 재발급
// POST /api/auth/refresh
// { "refreshToken": "eyJhbGci..." }

@PostMapping("/refresh")
public TokenResponse refreshToken(@RequestBody RefreshRequest request) {
    // 1. Refresh Token 검증
    if (!jwtTokenProvider.validateToken(request.getRefreshToken())) {
        throw new UnauthorizedException("Refresh Token이 만료되었습니다");
    }

    // 2. DB에 저장된 Refresh Token과 비교
    String username = jwtTokenProvider.getUsername(request.getRefreshToken());
    RefreshToken saved = refreshTokenRepository.findByUsername(username)
        .orElseThrow(() -> new UnauthorizedException("저장된 토큰이 없습니다"));

    if (!saved.getToken().equals(request.getRefreshToken())) {
        throw new UnauthorizedException("토큰이 일치하지 않습니다");
    }

    // 3. 새 Access Token 발급
    String newAccessToken = jwtTokenProvider.createToken(username, saved.getRole());

    return new TokenResponse(newAccessToken, request.getRefreshToken());
}`}</code></pre>
          </div>

          <h2>8. 실전: 로그인 API + JWT 발급</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> AuthController.java</span></div>
            <pre><code>{`@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest request) {
        // 1. 인증 수행
        Authentication auth = authManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUsername(), request.getPassword()));

        // 2. JWT 토큰 생성
        UserDetails user = (UserDetails) auth.getPrincipal();
        String role = user.getAuthorities().iterator().next().getAuthority();
        String accessToken = jwtTokenProvider.createToken(user.getUsername(), role);

        return ResponseEntity.ok(new TokenResponse(accessToken, "Bearer"));
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@Valid @RequestBody SignupRequest request) {
        authService.signup(request);
        return ResponseEntity.status(HttpStatus.CREATED).body("회원가입 성공");
    }
}`}</code></pre>
          </div>

          <JavaCodeRunner defaultCode={`// JWT 토큰의 구조를 이해하는 데모
// Base64 인코딩/디코딩을 직접 해봅니다.

import java.util.Base64;

public class Main {

    public static void main(String[] args) {
        // JWT의 각 부분을 시뮬레이션

        // 1. Header
        String header = "{\\"alg\\":\\"HS256\\",\\"typ\\":\\"JWT\\"}";
        String encodedHeader = Base64.getUrlEncoder()
            .withoutPadding()
            .encodeToString(header.getBytes());
        System.out.println("=== JWT 구조 분석 ===\\n");
        System.out.println("1. Header (헤더)");
        System.out.println("   원본: " + header);
        System.out.println("   인코딩: " + encodedHeader);

        // 2. Payload
        String payload = "{\\"sub\\":\\"hong\\",\\"role\\":\\"USER\\",\\"iat\\":1705333600}";
        String encodedPayload = Base64.getUrlEncoder()
            .withoutPadding()
            .encodeToString(payload.getBytes());
        System.out.println("\\n2. Payload (페이로드)");
        System.out.println("   원본: " + payload);
        System.out.println("   인코딩: " + encodedPayload);

        // 3. Signature (시뮬레이션)
        String signature = "simulated_signature_abc123";
        String encodedSignature = Base64.getUrlEncoder()
            .withoutPadding()
            .encodeToString(signature.getBytes());
        System.out.println("\\n3. Signature (서명)");
        System.out.println("   인코딩: " + encodedSignature);

        // 완성된 JWT
        String jwt = encodedHeader + "." + encodedPayload + "." + encodedSignature;
        System.out.println("\\n=== 완성된 JWT ===");
        System.out.println(jwt);

        // 디코딩
        System.out.println("\\n=== JWT 디코딩 ===");
        String[] parts = jwt.split("\\\\.");
        System.out.println("Header: " + new String(Base64.getUrlDecoder().decode(parts[0])));
        System.out.println("Payload: " + new String(Base64.getUrlDecoder().decode(parts[1])));

        System.out.println("\\n주의: Payload는 암호화가 아닌 인코딩입니다!");
        System.out.println("민감한 정보(비밀번호 등)를 넣으면 안 됩니다!");
    }
}`} title="JWT 토큰 구조 분석 데모" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>JwtTokenProvider를 구현하고, 토큰 생성/검증/파싱 기능을 테스트해 보세요.</li>
              <li>JwtAuthenticationFilter를 구현하여 모든 요청에서 토큰을 검증하도록 설정하세요.</li>
              <li>Access Token 만료 시 Refresh Token으로 재발급하는 API를 구현해 보세요.</li>
              <li>세션 기반 인증과 JWT 기반 인증의 장단점을 비교하는 문서를 작성해 보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP13') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP13')}>
              {isLessonCompleted('SP13') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/12"><i className="fas fa-arrow-left"></i> 이전: 예외처리와 응답 표준화</Link>
            <Link to="/spring/14">다음: 테스트 (JUnit5, MockMvc) <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
