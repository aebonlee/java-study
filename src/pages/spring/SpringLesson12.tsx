import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson12() {
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
            <span>Lesson 12</span>
          </div>
          <h1>Lesson 12. 예외처리와 응답 표준화</h1>
          <p>Spring Boot에서 예외를 체계적으로 처리하고, 일관된 API 응답을 설계하는 방법을 배웁니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. Spring Boot 기본 에러 처리</h2>
          <p>Spring Boot는 기본적으로 <code>/error</code> 경로로 에러를 처리합니다. 하지만 기본 에러 응답은 클라이언트에게 충분한 정보를 제공하지 못하며, 보안상 위험할 수 있습니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 기본 에러 응답 (개선 필요)</span></div>
            <pre><code>{`// Spring Boot 기본 에러 응답
{
    "timestamp": "2024-01-15T10:30:00.000+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "path": "/api/users/999"
}
// 문제점: 어떤 에러인지 클라이언트가 알기 어려움`}</code></pre>
          </div>

          <h2>2. @ExceptionHandler</h2>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 컨트롤러 내 예외 처리</span></div>
            <pre><code>{`@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping("/{id}")
    public UserDto getUser(@PathVariable Long id) {
        return userService.findById(id)
            .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다: " + id));
    }

    // 이 컨트롤러 내에서 발생한 UserNotFoundException만 처리
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleUserNotFound(UserNotFoundException ex) {
        Map<String, String> error = new HashMap<>();
        error.put("error", ex.getMessage());
        error.put("code", "USER_NOT_FOUND");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
}`}</code></pre>
          </div>

          <h2>3. @ControllerAdvice로 전역 예외 처리</h2>
          <p>모든 컨트롤러에서 발생하는 예외를 한 곳에서 처리할 수 있습니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> GlobalExceptionHandler.java</span></div>
            <pre><code>{`@RestControllerAdvice  // = @ControllerAdvice + @ResponseBody
public class GlobalExceptionHandler {

    // 비즈니스 예외 처리
    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorResponse> handleBusinessException(BusinessException ex) {
        ErrorResponse response = new ErrorResponse(
            ex.getErrorCode(),
            ex.getMessage()
        );
        return ResponseEntity.status(ex.getHttpStatus()).body(response);
    }

    // 리소스 없음 예외
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        ErrorResponse response = new ErrorResponse("NOT_FOUND", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    // Validation 예외
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult()
            .getFieldErrors()
            .stream()
            .map(e -> e.getField() + ": " + e.getDefaultMessage())
            .collect(Collectors.toList());

        ErrorResponse response = new ErrorResponse("VALIDATION_ERROR", "입력값 검증 실패", errors);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    // 예상치 못한 예외 (최후의 안전망)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleUnexpected(Exception ex) {
        log.error("예상치 못한 에러 발생", ex);
        ErrorResponse response = new ErrorResponse(
            "INTERNAL_ERROR",
            "서버 내부 오류가 발생했습니다"
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}`}</code></pre>
          </div>

          <h2>4. 커스텀 예외 클래스</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 예외 클래스 계층 구조</span></div>
            <pre><code>{`// 비즈니스 예외의 기본 클래스
public class BusinessException extends RuntimeException {
    private final String errorCode;
    private final HttpStatus httpStatus;

    public BusinessException(String errorCode, String message, HttpStatus httpStatus) {
        super(message);
        this.errorCode = errorCode;
        this.httpStatus = httpStatus;
    }

    public String getErrorCode() { return errorCode; }
    public HttpStatus getHttpStatus() { return httpStatus; }
}

// 리소스를 찾을 수 없을 때
public class ResourceNotFoundException extends BusinessException {
    public ResourceNotFoundException(String resource, Long id) {
        super("NOT_FOUND",
              resource + "을(를) 찾을 수 없습니다. ID: " + id,
              HttpStatus.NOT_FOUND);
    }
}

// 중복 데이터가 있을 때
public class DuplicateResourceException extends BusinessException {
    public DuplicateResourceException(String resource, String field) {
        super("DUPLICATE",
              "이미 존재하는 " + resource + "입니다: " + field,
              HttpStatus.CONFLICT);
    }
}

// 권한이 없을 때
public class UnauthorizedException extends BusinessException {
    public UnauthorizedException(String message) {
        super("UNAUTHORIZED", message, HttpStatus.UNAUTHORIZED);
    }
}`}</code></pre>
          </div>

          <h2>5. 응답 표준화 (ApiResponse)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ApiResponse.java</span></div>
            <pre><code>{`// 공통 응답 객체
public class ApiResponse<T> {
    private boolean success;
    private String message;
    private T data;
    private String errorCode;
    private List<String> errors;

    // 성공 응답 팩토리 메서드
    public static <T> ApiResponse<T> success(T data) {
        ApiResponse<T> response = new ApiResponse<>();
        response.success = true;
        response.data = data;
        return response;
    }

    public static <T> ApiResponse<T> success(String message, T data) {
        ApiResponse<T> response = new ApiResponse<>();
        response.success = true;
        response.message = message;
        response.data = data;
        return response;
    }

    // 실패 응답 팩토리 메서드
    public static <T> ApiResponse<T> error(String errorCode, String message) {
        ApiResponse<T> response = new ApiResponse<>();
        response.success = false;
        response.errorCode = errorCode;
        response.message = message;
        return response;
    }

    // Getter, Setter 생략
}

// 사용 예시 - 컨트롤러
@GetMapping("/{id}")
public ApiResponse<UserDto> getUser(@PathVariable Long id) {
    UserDto user = userService.findById(id);
    return ApiResponse.success(user);
}

// 성공 응답 JSON:
// { "success": true, "data": { "id": 1, "name": "홍길동" } }

// 실패 응답 JSON:
// { "success": false, "errorCode": "NOT_FOUND", "message": "사용자를 찾을 수 없습니다" }`}</code></pre>
          </div>

          <h2>6. HTTP 상태 코드 매핑</h2>
          <table className="info-table">
            <thead><tr><th>상태 코드</th><th>의미</th><th>사용 시점</th></tr></thead>
            <tbody>
              <tr><td><strong>200 OK</strong></td><td>성공</td><td>조회, 수정 성공</td></tr>
              <tr><td><strong>201 Created</strong></td><td>생성 성공</td><td>리소스 생성 성공</td></tr>
              <tr><td><strong>204 No Content</strong></td><td>본문 없음</td><td>삭제 성공</td></tr>
              <tr><td><strong>400 Bad Request</strong></td><td>잘못된 요청</td><td>유효성 검증 실패</td></tr>
              <tr><td><strong>401 Unauthorized</strong></td><td>인증 필요</td><td>로그인 필요</td></tr>
              <tr><td><strong>403 Forbidden</strong></td><td>권한 없음</td><td>접근 권한 부족</td></tr>
              <tr><td><strong>404 Not Found</strong></td><td>리소스 없음</td><td>존재하지 않는 데이터</td></tr>
              <tr><td><strong>409 Conflict</strong></td><td>충돌</td><td>중복 데이터</td></tr>
              <tr><td><strong>500 Internal Server Error</strong></td><td>서버 오류</td><td>예상치 못한 오류</td></tr>
            </tbody>
          </table>

          <h2>7. Validation 에러 처리</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Validation 적용</span></div>
            <pre><code>{`// DTO에 유효성 검증 어노테이션 추가
public class CreateUserRequest {

    @NotBlank(message = "이름은 필수입니다")
    @Size(min = 2, max = 20, message = "이름은 2~20자여야 합니다")
    private String name;

    @NotBlank(message = "이메일은 필수입니다")
    @Email(message = "올바른 이메일 형식이 아닙니다")
    private String email;

    @NotNull(message = "나이는 필수입니다")
    @Min(value = 1, message = "나이는 1 이상이어야 합니다")
    @Max(value = 150, message = "나이는 150 이하여야 합니다")
    private Integer age;
}

// 컨트롤러에 @Valid 추가
@PostMapping
public ApiResponse<UserDto> createUser(@Valid @RequestBody CreateUserRequest request) {
    return ApiResponse.success("사용자 생성 완료", userService.create(request));
}
// @Valid가 검증 실패 시 MethodArgumentNotValidException 발생
// -> GlobalExceptionHandler에서 처리`}</code></pre>
          </div>

          <JavaCodeRunner defaultCode={`// 커스텀 예외와 예외 처리 패턴 이해하기

import java.util.*;

public class Main {

    // 커스텀 예외 계층 구조
    static class BusinessException extends RuntimeException {
        private final String errorCode;
        private final int httpStatus;

        public BusinessException(String errorCode, String message, int httpStatus) {
            super(message);
            this.errorCode = errorCode;
            this.httpStatus = httpStatus;
        }

        public String getErrorCode() { return errorCode; }
        public int getHttpStatus() { return httpStatus; }
    }

    static class ResourceNotFoundException extends BusinessException {
        public ResourceNotFoundException(String resource, Long id) {
            super("NOT_FOUND", resource + "을(를) 찾을 수 없습니다. ID: " + id, 404);
        }
    }

    static class DuplicateException extends BusinessException {
        public DuplicateException(String field) {
            super("DUPLICATE", "이미 존재합니다: " + field, 409);
        }
    }

    // 공통 응답 객체
    static class ApiResponse {
        boolean success;
        String message;
        String errorCode;
        Object data;

        static ApiResponse success(Object data) {
            ApiResponse r = new ApiResponse();
            r.success = true;
            r.data = data;
            return r;
        }

        static ApiResponse error(String code, String msg) {
            ApiResponse r = new ApiResponse();
            r.success = false;
            r.errorCode = code;
            r.message = msg;
            return r;
        }

        @Override
        public String toString() {
            if (success) return "{ success: true, data: " + data + " }";
            return "{ success: false, code: " + errorCode + ", message: " + message + " }";
        }
    }

    // 서비스 시뮬레이션
    static Map<Long, String> users = new HashMap<>();

    static String findUser(Long id) {
        if (!users.containsKey(id)) {
            throw new ResourceNotFoundException("User", id);
        }
        return users.get(id);
    }

    static void createUser(Long id, String name) {
        if (users.containsKey(id)) {
            throw new DuplicateException("User ID: " + id);
        }
        users.put(id, name);
    }

    public static void main(String[] args) {
        // 성공 케이스
        createUser(1L, "홍길동");
        System.out.println("=== 성공 응답 ===");
        System.out.println(ApiResponse.success(findUser(1L)));

        // 실패 케이스들
        System.out.println("\\n=== 예외 처리 ===");

        try {
            findUser(999L);
        } catch (BusinessException e) {
            System.out.println("HTTP " + e.getHttpStatus() + ": " + ApiResponse.error(e.getErrorCode(), e.getMessage()));
        }

        try {
            createUser(1L, "김영희"); // 중복
        } catch (BusinessException e) {
            System.out.println("HTTP " + e.getHttpStatus() + ": " + ApiResponse.error(e.getErrorCode(), e.getMessage()));
        }

        System.out.println("\\n=== 핵심 포인트 ===");
        System.out.println("1. 예외도 계층 구조로 설계하면 관리가 편합니다");
        System.out.println("2. 공통 응답 객체로 API 일관성을 유지합니다");
        System.out.println("3. @ControllerAdvice로 전역 예외 처리가 가능합니다");
    }
}`} title="커스텀 예외와 공통 응답 패턴" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>BusinessException을 상속하는 커스텀 예외를 3개 이상 만들어 보세요.</li>
              <li>@ControllerAdvice로 전역 예외 처리기를 구현하고, 각 예외에 맞는 HTTP 상태 코드를 반환하세요.</li>
              <li>ApiResponse 공통 응답 객체를 만들어 모든 API에 적용해 보세요.</li>
              <li>@Valid와 함께 Validation 어노테이션을 사용하여 입력값을 검증하고, 에러 메시지를 반환해 보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP12') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP12')}>
              {isLessonCompleted('SP12') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/11"><i className="fas fa-arrow-left"></i> 이전: Spring Data JPA</Link>
            <Link to="/spring/13">다음: Spring Security + JWT <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
