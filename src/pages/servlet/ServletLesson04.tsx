import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function ServletLesson04() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/servlet">서블릿 과정</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Lesson 04</span>
          </div>
          <h1>Lesson 04. 폼 처리와 파라미터</h1>
          <p>HTML 폼에서 전송된 데이터를 서블릿에서 처리하는 방법을 학습합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          <h2>1. HTML 폼 기초</h2>
          <p>
            웹 애플리케이션에서 사용자 입력을 받으려면 HTML <code>&lt;form&gt;</code> 태그를 사용합니다.
            폼에 입력된 데이터는 서블릿으로 전송되어 서버에서 처리됩니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> login.html</span>
            </div>
            <pre><code>{`<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>로그인</title>
</head>
<body>
    <h2>로그인 폼</h2>
    <!--
      action: 폼 데이터를 보낼 URL (서블릿 매핑 주소)
      method: HTTP 메서드 (GET 또는 POST)
    -->
    <form action="/login" method="POST">
        <label>아이디: <input type="text" name="username"></label><br>
        <label>비밀번호: <input type="password" name="password"></label><br>
        <label>
            <input type="checkbox" name="remember" value="true"> 로그인 유지
        </label><br>
        <button type="submit">로그인</button>
    </form>
</body>
</html>`}</code></pre>
          </div>

          <h3>주요 폼 요소</h3>
          <table>
            <thead>
              <tr><th>요소</th><th>설명</th><th>name 속성</th></tr>
            </thead>
            <tbody>
              <tr><td><code>&lt;input type="text"&gt;</code></td><td>텍스트 입력</td><td>서블릿에서 파라미터명으로 사용</td></tr>
              <tr><td><code>&lt;input type="password"&gt;</code></td><td>비밀번호 입력</td><td>마스킹 처리됨</td></tr>
              <tr><td><code>&lt;input type="checkbox"&gt;</code></td><td>체크박스</td><td>체크 시에만 값 전송</td></tr>
              <tr><td><code>&lt;input type="radio"&gt;</code></td><td>라디오 버튼</td><td>같은 name으로 그룹핑</td></tr>
              <tr><td><code>&lt;select&gt;</code></td><td>드롭다운 목록</td><td>선택된 option의 value 전송</td></tr>
              <tr><td><code>&lt;textarea&gt;</code></td><td>여러 줄 텍스트</td><td>입력된 텍스트 전체 전송</td></tr>
              <tr><td><code>&lt;input type="hidden"&gt;</code></td><td>숨겨진 값</td><td>화면에 표시되지 않는 값 전송</td></tr>
            </tbody>
          </table>

          <h2>2. GET vs POST 방식 차이</h2>
          <p>폼 데이터를 전송하는 두 가지 방법의 차이를 이해하는 것이 중요합니다.</p>

          <table>
            <thead>
              <tr><th>구분</th><th>GET</th><th>POST</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>데이터 위치</strong></td><td>URL 쿼리 스트링에 포함</td><td>HTTP Body에 포함</td></tr>
              <tr><td><strong>URL 예시</strong></td><td>/search?keyword=java&page=1</td><td>/login (Body에 데이터)</td></tr>
              <tr><td><strong>데이터 크기</strong></td><td>제한적 (브라우저마다 다름, ~2KB)</td><td>제한 없음 (서버 설정에 따라)</td></tr>
              <tr><td><strong>보안</strong></td><td>URL에 노출 (브라우저 히스토리에 저장)</td><td>Body에 숨겨짐 (상대적으로 안전)</td></tr>
              <tr><td><strong>캐싱</strong></td><td>캐싱 가능, 북마크 가능</td><td>캐싱 불가, 북마크 불가</td></tr>
              <tr><td><strong>멱등성</strong></td><td>멱등함 (같은 결과 보장)</td><td>멱등하지 않음</td></tr>
              <tr><td><strong>사용 사례</strong></td><td>검색, 조회, 필터링</td><td>로그인, 회원가입, 데이터 변경</td></tr>
            </tbody>
          </table>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 보안 주의</div>
            <p>비밀번호나 개인정보를 전송할 때는 반드시 <strong>POST</strong> 방식을 사용하세요.
            GET 방식은 URL에 데이터가 노출되어 브라우저 히스토리, 서버 로그, 프록시 로그 등에 기록됩니다.
            실무에서는 POST + HTTPS를 함께 사용하여 보안을 강화합니다.</p>
          </div>

          <h2>3. 파라미터 처리</h2>
          <p>서블릿에서 클라이언트가 전송한 파라미터를 읽는 방법은 여러 가지가 있습니다.</p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> ParameterServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/params")
public class ParameterServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws IOException {

        request.setCharacterEncoding("UTF-8");

        // 1. 단일 파라미터 읽기
        String username = request.getParameter("username");
        String email = request.getParameter("email");

        // 2. 같은 이름의 다중 값 읽기 (체크박스 등)
        String[] hobbies = request.getParameterValues("hobby");

        // 3. 모든 파라미터를 Map으로 가져오기
        java.util.Map<String, String[]> paramMap =
            request.getParameterMap();

        // 4. 모든 파라미터 이름 조회
        java.util.Enumeration<String> paramNames =
            request.getParameterNames();

        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();

        out.println("<h2>파라미터 처리 결과</h2>");
        out.println("<p>이름: " + username + "</p>");
        out.println("<p>이메일: " + email + "</p>");

        if (hobbies != null) {
            out.println("<p>취미:</p><ul>");
            for (String hobby : hobbies) {
                out.println("<li>" + hobby + "</li>");
            }
            out.println("</ul>");
        }

        // 전체 파라미터 출력
        out.println("<h3>전체 파라미터</h3>");
        while (paramNames.hasMoreElements()) {
            String name = paramNames.nextElement();
            String[] values = paramMap.get(name);
            out.println("<p>" + name + " = "
                + String.join(", ", values) + "</p>");
        }
    }
}`}</code></pre>
          </div>

          <h3>주요 파라미터 메서드 정리</h3>
          <table>
            <thead>
              <tr><th>메서드</th><th>반환 타입</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>getParameter(name)</code></td><td>String</td><td>단일 파라미터 값 (없으면 null)</td></tr>
              <tr><td><code>getParameterValues(name)</code></td><td>String[]</td><td>같은 이름의 여러 값 (체크박스)</td></tr>
              <tr><td><code>getParameterMap()</code></td><td>Map&lt;String, String[]&gt;</td><td>모든 파라미터를 Map으로 반환</td></tr>
              <tr><td><code>getParameterNames()</code></td><td>Enumeration&lt;String&gt;</td><td>모든 파라미터 이름 반환</td></tr>
            </tbody>
          </table>

          <h2>4. 한글 인코딩 처리</h2>
          <p>
            서블릿에서 한글 데이터를 올바르게 처리하려면 요청과 응답 모두에 인코딩을 설정해야 합니다.
            설정하지 않으면 한글이 깨져서 표시됩니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 한글 인코딩 처리</span>
            </div>
            <pre><code>{`@WebServlet("/encoding")
public class EncodingServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws IOException {

        // ★ 요청 인코딩 설정 (파라미터 읽기 전에 호출!)
        request.setCharacterEncoding("UTF-8");

        // ★ 응답 인코딩 설정
        response.setContentType("text/html; charset=UTF-8");

        String name = request.getParameter("name");  // 한글 정상 처리
        PrintWriter out = response.getWriter();
        out.println("<p>안녕하세요, " + name + "님!</p>");  // 한글 정상 출력
    }
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 필터로 인코딩 자동화</div>
            <p>매 서블릿마다 인코딩을 설정하는 것은 번거롭습니다.
            <strong>CharacterEncodingFilter</strong>를 등록하면 모든 요청에 자동으로 인코딩을 적용할 수 있습니다.
            Spring에서는 <code>CharacterEncodingFilter</code>가 기본 제공됩니다.</p>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> web.xml - 인코딩 필터</span>
            </div>
            <pre><code>{`<filter>
    <filter-name>encodingFilter</filter-name>
    <filter-class>com.example.EncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>`}</code></pre>
          </div>

          <h2>5. 실전 예제: 회원가입 폼</h2>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> register.html</span>
            </div>
            <pre><code>{`<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>회원가입</title></head>
<body>
<h2>회원가입</h2>
<form action="/register" method="POST">
    <p>이름: <input type="text" name="name" required></p>
    <p>이메일: <input type="email" name="email" required></p>
    <p>비밀번호: <input type="password" name="password" required></p>
    <p>나이: <input type="number" name="age" min="1" max="150"></p>
    <p>성별:
        <input type="radio" name="gender" value="M"> 남성
        <input type="radio" name="gender" value="F"> 여성
    </p>
    <p>관심 분야:
        <input type="checkbox" name="interest" value="java"> Java
        <input type="checkbox" name="interest" value="python"> Python
        <input type="checkbox" name="interest" value="web"> Web
    </p>
    <p>자기소개:<br>
        <textarea name="bio" rows="4" cols="40"></textarea>
    </p>
    <button type="submit">가입하기</button>
</form>
</body>
</html>`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> RegisterServlet.java</span>
            </div>
            <pre><code>{`@WebServlet("/register")
public class RegisterServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws IOException {

        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8");

        // 파라미터 수집
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        int age = Integer.parseInt(request.getParameter("age"));
        String gender = request.getParameter("gender");
        String[] interests = request.getParameterValues("interest");
        String bio = request.getParameter("bio");

        PrintWriter out = response.getWriter();
        out.println("<h2>가입 정보 확인</h2>");
        out.println("<p>이름: " + name + "</p>");
        out.println("<p>이메일: " + email + "</p>");
        out.println("<p>나이: " + age + "</p>");
        out.println("<p>성별: " + ("M".equals(gender) ? "남성" : "여성") + "</p>");

        if (interests != null) {
            out.println("<p>관심 분야: "
                + String.join(", ", interests) + "</p>");
        }
        out.println("<p>자기소개: " + bio + "</p>");
    }
}`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>위 서블릿 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬 개발 환경을 설정한 후 실습하세요.</p>
          </div>

          <h2>6. 파라미터 검증과 에러 처리</h2>
          <p>사용자 입력은 항상 검증해야 합니다. 누락된 값, 잘못된 형식 등을 처리하는 방법을 살펴봅시다.</p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 파라미터 검증 예제</span>
            </div>
            <pre><code>{`@WebServlet("/validate")
public class ValidationServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws IOException {

        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html; charset=UTF-8");
        PrintWriter out = response.getWriter();

        // 필수 값 검증
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String ageStr = request.getParameter("age");

        java.util.List<String> errors = new java.util.ArrayList<>();

        if (name == null || name.trim().isEmpty()) {
            errors.add("이름은 필수 입력 항목입니다.");
        }

        if (email == null || !email.contains("@")) {
            errors.add("올바른 이메일 주소를 입력하세요.");
        }

        // 숫자 형식 검증
        int age = 0;
        try {
            age = Integer.parseInt(ageStr);
            if (age < 1 || age > 150) {
                errors.add("나이는 1~150 사이의 값이어야 합니다.");
            }
        } catch (NumberFormatException e) {
            errors.add("나이는 숫자로 입력하세요.");
        }

        // 에러가 있으면 에러 메시지 표시
        if (!errors.isEmpty()) {
            out.println("<h2>입력 오류</h2><ul>");
            for (String error : errors) {
                out.println("<li style='color:red'>" + error + "</li>");
            }
            out.println("</ul><a href='javascript:history.back()'>다시 입력</a>");
            return;
        }

        // 정상 처리
        out.println("<h2>가입 완료!</h2>");
        out.println("<p>" + name + "님, 환영합니다!</p>");
    }
}`}</code></pre>
          </div>

          <h3>직접 실행해보기</h3>
          <p>아래 예제는 폼 데이터 파싱과 검증을 Java 콘솔에서 시뮬레이션합니다.</p>

          <JavaCodeRunner defaultCode={`import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.util.List;

public class Main {
    // 폼 파라미터 파싱 시뮬레이션
    static Map<String, String[]> parseFormData(String body) {
        Map<String, String[]> params = new HashMap<>();
        if (body == null || body.isEmpty()) return params;

        for (String pair : body.split("&")) {
            String[] kv = pair.split("=", 2);
            String key = kv[0];
            String value = kv.length > 1 ? kv[1].replace("+", " ") : "";

            if (params.containsKey(key)) {
                String[] old = params.get(key);
                String[] newArr = new String[old.length + 1];
                System.arraycopy(old, 0, newArr, 0, old.length);
                newArr[old.length] = value;
                params.put(key, newArr);
            } else {
                params.put(key, new String[]{value});
            }
        }
        return params;
    }

    static List<String> validate(Map<String, String[]> params) {
        List<String> errors = new ArrayList<>();
        String name = params.containsKey("name") ? params.get("name")[0] : "";
        String email = params.containsKey("email") ? params.get("email")[0] : "";
        String age = params.containsKey("age") ? params.get("age")[0] : "";

        if (name.trim().isEmpty()) errors.add("이름은 필수입니다.");
        if (!email.contains("@")) errors.add("올바른 이메일을 입력하세요.");
        try {
            int ageNum = Integer.parseInt(age);
            if (ageNum < 1 || ageNum > 150) errors.add("나이는 1~150 사이여야 합니다.");
        } catch (NumberFormatException e) {
            errors.add("나이는 숫자로 입력하세요.");
        }
        return errors;
    }

    public static void main(String[] args) {
        // POST 폼 데이터 시뮬레이션
        String formData = "name=홍길동&email=hong@example.com&age=25&interest=java&interest=web";
        System.out.println("=== 폼 데이터 파싱 ===");
        System.out.println("원본 데이터: " + formData + "\\n");

        Map<String, String[]> params = parseFormData(formData);
        System.out.println("파싱 결과:");
        params.forEach((k, v) ->
            System.out.println("  " + k + " = " + String.join(", ", v)));

        System.out.println("\\n=== 파라미터 검증 ===");
        List<String> errors = validate(params);
        if (errors.isEmpty()) {
            System.out.println("검증 통과! 회원가입 처리 완료.");
            System.out.println("환영합니다, " + params.get("name")[0] + "님!");
        } else {
            errors.forEach(e -> System.out.println("오류: " + e));
        }

        // 잘못된 데이터 검증
        System.out.println("\\n=== 잘못된 데이터 검증 ===");
        String badData = "name=&email=invalid&age=abc";
        Map<String, String[]> badParams = parseFormData(badData);
        List<String> badErrors = validate(badParams);
        badErrors.forEach(e -> System.out.println("오류: " + e));
    }
}`} title="폼 데이터 파싱 및 검증 시뮬레이션" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>이름, 이메일, 전화번호를 입력받는 폼과 처리 서블릿을 작성해보세요.</li>
              <li>GET과 POST 방식으로 각각 데이터를 전송하고 URL 차이를 비교해보세요.</li>
              <li>체크박스로 여러 값을 선택받아 <code>getParameterValues()</code>로 처리해보세요.</li>
              <li>입력값 검증 로직을 추가하여, 빈 값이나 잘못된 형식에 대해 에러 메시지를 표시해보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('S04') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('S04')}
            >
              {isLessonCompleted('S04') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/servlet/03"><i className="fas fa-arrow-left"></i> 이전: 서블릿 생명주기</Link>
            <Link to="/servlet/05">다음: 세션과 쿠키 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
