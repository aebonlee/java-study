import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson12() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 12</span>
          </div>
          <h1>Chapter 12. 파일 I/O와 네트워크</h1>
          <p>파일 처리, NIO, Socket 프로그래밍을 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 전통적 I/O</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> TraditionalIO.java</span></div>
            <pre><code>{`// 바이트 스트림 (InputStream/OutputStream)
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
}`}</code></pre>
          </div>

          <h2>2. NIO.2 (java.nio.file)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> NIOExample.java</span></div>
            <pre><code>{`import java.nio.file.*;
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
}`}</code></pre>
          </div>

          <h2>3. 직렬화 (Serialization)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Serialization.java</span></div>
            <pre><code>{`import java.io.*;

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
}`}</code></pre>
          </div>

          <h2>4. Socket 프로그래밍</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SimpleServer.java</span></div>
            <pre><code>{`// 서버
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
}`}</code></pre>
          </div>

          <h2>5. HttpClient (Java 11+)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> HttpClientExample.java</span></div>
            <pre><code>{`import java.net.http.*;
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
    .thenAccept(System.out::println);`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>NIO를 사용하여 텍스트 파일의 단어 수를 세는 프로그램을 작성하세요.</li>
              <li>특정 디렉토리에서 .java 파일만 찾아 목록을 출력하세요.</li>
              <li>HttpClient로 REST API를 호출하고 JSON 응답을 파싱하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('12') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('12')}>
              {isLessonCompleted('12') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/11"><i className="fas fa-arrow-left"></i> 이전: 멀티스레드</Link>
            <Link to="/java-learning/13">다음: 서블릿 기초 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
