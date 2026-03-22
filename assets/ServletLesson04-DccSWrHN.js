import{u as a,r as n,j as e,L as r}from"./index-dMfRMsyn.js";import{J as i}from"./JavaCodeRunner-CH9PTPJs.js";function c(){const{completeLesson:s,isLessonCompleted:t}=a();return n.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/servlet",children:"서블릿 과정"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 04"})]}),e.jsx("h1",{children:"Lesson 04. 폼 처리와 파라미터"}),e.jsx("p",{children:"HTML 폼에서 전송된 데이터를 서블릿에서 처리하는 방법을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. HTML 폼 기초"}),e.jsxs("p",{children:["웹 애플리케이션에서 사용자 입력을 받으려면 HTML ",e.jsx("code",{children:"<form>"})," 태그를 사용합니다. 폼에 입력된 데이터는 서블릿으로 전송되어 서버에서 처리됩니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," login.html"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<!DOCTYPE html>
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
</html>`})})]}),e.jsx("h3",{children:"주요 폼 요소"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"요소"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"name 속성"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'<input type="text">'})}),e.jsx("td",{children:"텍스트 입력"}),e.jsx("td",{children:"서블릿에서 파라미터명으로 사용"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'<input type="password">'})}),e.jsx("td",{children:"비밀번호 입력"}),e.jsx("td",{children:"마스킹 처리됨"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'<input type="checkbox">'})}),e.jsx("td",{children:"체크박스"}),e.jsx("td",{children:"체크 시에만 값 전송"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'<input type="radio">'})}),e.jsx("td",{children:"라디오 버튼"}),e.jsx("td",{children:"같은 name으로 그룹핑"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<select>"})}),e.jsx("td",{children:"드롭다운 목록"}),e.jsx("td",{children:"선택된 option의 value 전송"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<textarea>"})}),e.jsx("td",{children:"여러 줄 텍스트"}),e.jsx("td",{children:"입력된 텍스트 전체 전송"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:'<input type="hidden">'})}),e.jsx("td",{children:"숨겨진 값"}),e.jsx("td",{children:"화면에 표시되지 않는 값 전송"})]})]})]}),e.jsx("h2",{children:"2. GET vs POST 방식 차이"}),e.jsx("p",{children:"폼 데이터를 전송하는 두 가지 방법의 차이를 이해하는 것이 중요합니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"GET"}),e.jsx("th",{children:"POST"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"데이터 위치"})}),e.jsx("td",{children:"URL 쿼리 스트링에 포함"}),e.jsx("td",{children:"HTTP Body에 포함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"URL 예시"})}),e.jsx("td",{children:"/search?keyword=java&page=1"}),e.jsx("td",{children:"/login (Body에 데이터)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"데이터 크기"})}),e.jsx("td",{children:"제한적 (브라우저마다 다름, ~2KB)"}),e.jsx("td",{children:"제한 없음 (서버 설정에 따라)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"보안"})}),e.jsx("td",{children:"URL에 노출 (브라우저 히스토리에 저장)"}),e.jsx("td",{children:"Body에 숨겨짐 (상대적으로 안전)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"캐싱"})}),e.jsx("td",{children:"캐싱 가능, 북마크 가능"}),e.jsx("td",{children:"캐싱 불가, 북마크 불가"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"멱등성"})}),e.jsx("td",{children:"멱등함 (같은 결과 보장)"}),e.jsx("td",{children:"멱등하지 않음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"사용 사례"})}),e.jsx("td",{children:"검색, 조회, 필터링"}),e.jsx("td",{children:"로그인, 회원가입, 데이터 변경"})]})]})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," 보안 주의"]}),e.jsxs("p",{children:["비밀번호나 개인정보를 전송할 때는 반드시 ",e.jsx("strong",{children:"POST"})," 방식을 사용하세요. GET 방식은 URL에 데이터가 노출되어 브라우저 히스토리, 서버 로그, 프록시 로그 등에 기록됩니다. 실무에서는 POST + HTTPS를 함께 사용하여 보안을 강화합니다."]})]}),e.jsx("h2",{children:"3. 파라미터 처리"}),e.jsx("p",{children:"서블릿에서 클라이언트가 전송한 파라미터를 읽는 방법은 여러 가지가 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ParameterServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/params")
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
}`})})]}),e.jsx("h3",{children:"주요 파라미터 메서드 정리"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"메서드"}),e.jsx("th",{children:"반환 타입"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getParameter(name)"})}),e.jsx("td",{children:"String"}),e.jsx("td",{children:"단일 파라미터 값 (없으면 null)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getParameterValues(name)"})}),e.jsx("td",{children:"String[]"}),e.jsx("td",{children:"같은 이름의 여러 값 (체크박스)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getParameterMap()"})}),e.jsx("td",{children:"Map<String, String[]>"}),e.jsx("td",{children:"모든 파라미터를 Map으로 반환"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getParameterNames()"})}),e.jsx("td",{children:"Enumeration<String>"}),e.jsx("td",{children:"모든 파라미터 이름 반환"})]})]})]}),e.jsx("h2",{children:"4. 한글 인코딩 처리"}),e.jsx("p",{children:"서블릿에서 한글 데이터를 올바르게 처리하려면 요청과 응답 모두에 인코딩을 설정해야 합니다. 설정하지 않으면 한글이 깨져서 표시됩니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 한글 인코딩 처리"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/encoding")
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
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 필터로 인코딩 자동화"]}),e.jsxs("p",{children:["매 서블릿마다 인코딩을 설정하는 것은 번거롭습니다.",e.jsx("strong",{children:"CharacterEncodingFilter"}),"를 등록하면 모든 요청에 자동으로 인코딩을 적용할 수 있습니다. Spring에서는 ",e.jsx("code",{children:"CharacterEncodingFilter"}),"가 기본 제공됩니다."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," web.xml - 인코딩 필터"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<filter>
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
</filter-mapping>`})})]}),e.jsx("h2",{children:"5. 실전 예제: 회원가입 폼"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," register.html"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<!DOCTYPE html>
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
</html>`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," RegisterServlet.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/register")
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
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 실습 안내"]}),e.jsx("p",{children:"위 서블릿 코드는 Tomcat 서버 환경에서 실행해야 합니다. 로컬 개발 환경을 설정한 후 실습하세요."})]}),e.jsx("h2",{children:"6. 파라미터 검증과 에러 처리"}),e.jsx("p",{children:"사용자 입력은 항상 검증해야 합니다. 누락된 값, 잘못된 형식 등을 처리하는 방법을 살펴봅시다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 파라미터 검증 예제"]})}),e.jsx("pre",{children:e.jsx("code",{children:`@WebServlet("/validate")
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
}`})})]}),e.jsx("h3",{children:"직접 실행해보기"}),e.jsx("p",{children:"아래 예제는 폼 데이터 파싱과 검증을 Java 콘솔에서 시뮬레이션합니다."}),e.jsx(i,{defaultCode:`import java.util.HashMap;
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
}`,title:"폼 데이터 파싱 및 검증 시뮬레이션"}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"이름, 이메일, 전화번호를 입력받는 폼과 처리 서블릿을 작성해보세요."}),e.jsx("li",{children:"GET과 POST 방식으로 각각 데이터를 전송하고 URL 차이를 비교해보세요."}),e.jsxs("li",{children:["체크박스로 여러 값을 선택받아 ",e.jsx("code",{children:"getParameterValues()"}),"로 처리해보세요."]}),e.jsx("li",{children:"입력값 검증 로직을 추가하여, 빈 값이나 잘못된 형식에 대해 에러 메시지를 표시해보세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${t("S04")?"btn-primary":"btn-accent"}`,onClick:()=>s("S04"),children:t("S04")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/servlet/03",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 서블릿 생명주기"]}),e.jsxs(r,{to:"/servlet/05",children:["다음: 세션과 쿠키 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{c as default};
