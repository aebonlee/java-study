import{u as r,r as i,j as e,L as t}from"./index-DH08MSzi.js";function l(){const{completeLesson:a,isLessonCompleted:s}=r();return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(t,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(t,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 12"})]}),e.jsx("h1",{children:"Chapter 12. 파일 I/O와 네트워크"}),e.jsx("p",{children:"파일 처리, NIO, Socket 프로그래밍을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 전통적 I/O"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," TraditionalIO.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 바이트 스트림 (InputStream/OutputStream)
try (FileInputStream fis = new FileInputStream("input.bin");
     FileOutputStream fos = new FileOutputStream("output.bin")) {
    byte[] buffer = new byte[1024];
    int bytesRead;
    while ((bytesRead = fis.read(buffer)) != -1) {
        fos.write(buffer, 0, bytesRead);
    }
}

// 문자 스트림 (Reader/Writer)
try (BufferedReader br = new BufferedReader(new FileReader("input.txt"));
     BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        bw.write(line);
        bw.newLine();
    }
}`})})]}),e.jsx("h2",{children:"2. NIO.2 (java.nio.file)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," NIOExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import java.nio.file.*;
import java.nio.charset.StandardCharsets;

Path path = Path.of("data.txt");

// 파일 읽기
List<String> lines = Files.readAllLines(path, StandardCharsets.UTF_8);
String content = Files.readString(path);  // Java 11+

// 파일 쓰기
Files.writeString(path, "Hello NIO!", StandardCharsets.UTF_8);
Files.write(path, List.of("Line1", "Line2"), StandardCharsets.UTF_8);

// 파일 복사, 이동, 삭제
Files.copy(Path.of("src.txt"), Path.of("dest.txt"),
    StandardCopyOption.REPLACE_EXISTING);
Files.move(Path.of("old.txt"), Path.of("new.txt"));
Files.deleteIfExists(Path.of("temp.txt"));

// 디렉토리
Files.createDirectories(Path.of("a/b/c"));
Files.exists(path);
Files.isDirectory(path);
Files.size(path);

// 디렉토리 순회
try (Stream<Path> stream = Files.walk(Path.of("."))) {
    stream.filter(p -> p.toString().endsWith(".java"))
          .forEach(System.out::println);
}`})})]}),e.jsx("h2",{children:"3. 직렬화 (Serialization)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Serialization.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import java.io.*;

public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private transient String password;  // 직렬화 제외

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }
}

// 직렬화 (객체 → 바이트)
User user = new User("홍길동", "secret123");
try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("user.dat"))) {
    oos.writeObject(user);
}

// 역직렬화 (바이트 → 객체)
try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("user.dat"))) {
    User loaded = (User) ois.readObject();
    System.out.println(loaded.name);  // 홍길동
    // loaded.password는 null (transient)
}`})})]}),e.jsx("h2",{children:"4. Socket 프로그래밍"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SimpleServer.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 서버
try (ServerSocket serverSocket = new ServerSocket(8080)) {
    System.out.println("서버 시작 (포트 8080)");
    Socket client = serverSocket.accept();

    BufferedReader in = new BufferedReader(
        new InputStreamReader(client.getInputStream()));
    PrintWriter out = new PrintWriter(client.getOutputStream(), true);

    String message = in.readLine();
    System.out.println("클라이언트: " + message);
    out.println("서버 응답: " + message.toUpperCase());
}

// 클라이언트
try (Socket socket = new Socket("localhost", 8080)) {
    PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
    BufferedReader in = new BufferedReader(
        new InputStreamReader(socket.getInputStream()));

    out.println("hello server");
    System.out.println(in.readLine());  // 서버 응답: HELLO SERVER
}`})})]}),e.jsx("h2",{children:"5. HttpClient (Java 11+)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," HttpClientExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import java.net.http.*;
import java.net.URI;

HttpClient client = HttpClient.newHttpClient();

// GET 요청
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
    .GET()
    .build();

HttpResponse<String> response = client.send(request,
    HttpResponse.BodyHandlers.ofString());
System.out.println(response.statusCode());  // 200
System.out.println(response.body());

// POST 요청
HttpRequest postReq = HttpRequest.newBuilder()
    .uri(URI.create("https://jsonplaceholder.typicode.com/posts"))
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(
        "{\\"title\\":\\"test\\",\\"body\\":\\"content\\"}"))
    .build();

// 비동기 요청
client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println);`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"NIO를 사용하여 텍스트 파일의 단어 수를 세는 프로그램을 작성하세요."}),e.jsx("li",{children:"특정 디렉토리에서 .java 파일만 찾아 목록을 출력하세요."}),e.jsx("li",{children:"HttpClient로 REST API를 호출하고 JSON 응답을 파싱하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("12")?"btn-primary":"btn-accent"}`,onClick:()=>a("12"),children:s("12")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(t,{to:"/java-learning/11",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 멀티스레드"]}),e.jsxs(t,{to:"/java-learning/13",children:["다음: 서블릿 기초 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
