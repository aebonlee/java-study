import{u as t,r as a,j as e,L as r}from"./index-DH08MSzi.js";function l(){const{completeLesson:i,isLessonCompleted:s}=t();return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(r,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(r,{to:"/projects",children:"프로젝트"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"PJ04"})]}),e.jsx("h1",{children:"PJ04. 멀티스레드 채팅 애플리케이션"}),e.jsx("p",{children:"TCP 소켓과 멀티스레드를 활용하여 실시간 채팅 프로그램을 구현합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("div",{style:{background:"linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",borderRadius:"16px",padding:"28px 32px",marginBottom:"36px",color:"#fff"},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx("div",{style:{fontSize:"13px",opacity:.8,marginBottom:"4px"},children:"난이도"}),e.jsxs("div",{style:{fontSize:"16px",fontWeight:600},children:[e.jsx("i",{className:"fas fa-signal",style:{marginRight:"6px"}}),"중급 (Intermediate)"]})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx("div",{style:{fontSize:"13px",opacity:.8,marginBottom:"4px"},children:"선수 학습"}),e.jsx("div",{style:{fontSize:"16px",fontWeight:600},children:"Ch01-12, PR01/07/08"})]}),e.jsxs("div",{style:{flex:"1 1 200px"},children:[e.jsx("div",{style:{fontSize:"13px",opacity:.8,marginBottom:"4px"},children:"개발 도구"}),e.jsx("div",{style:{fontSize:"14px"},children:"JDK 21, IntelliJ IDEA, Maven, SLF4J"})]}),e.jsxs("div",{style:{flex:"1 1 100%"},children:[e.jsx("div",{style:{fontSize:"13px",opacity:.8,marginBottom:"8px"},children:"주요 기능"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:["TCP 소켓 통신","멀티스레드 서버","다중 클라이언트","채팅방 관리"].map(n=>e.jsx("span",{style:{background:"rgba(255,255,255,0.2)",borderRadius:"20px",padding:"4px 14px",fontSize:"13px"},children:n},n))})]})]})}),e.jsx("h2",{children:"1. 프로젝트 소개와 요구사항 분석"}),e.jsxs("p",{children:["이 프로젝트에서는 ",e.jsx("strong",{children:"TCP 소켓 프로그래밍"}),"과 ",e.jsx("strong",{children:"멀티스레드"}),"를 활용하여 다중 사용자가 동시에 대화할 수 있는 채팅 애플리케이션을 구현합니다. 서버는 여러 클라이언트의 연결을 동시에 처리하고, 채팅방 기능을 통해 그룹 대화를 지원합니다."]}),e.jsx("h3",{children:"요구사항 정리"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"우선순위"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"서버 구동"})}),e.jsx("td",{children:"지정 포트에서 클라이언트 연결 대기"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"클라이언트 접속"})}),e.jsx("td",{children:"서버에 접속하고 닉네임 설정"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"전체 채팅"})}),e.jsx("td",{children:"접속 중인 모든 사용자에게 메시지 전송"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"채팅방 생성/입장"})}),e.jsx("td",{children:"채팅방을 만들고 입장/퇴장"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"채팅방 내 메시지"})}),e.jsx("td",{children:"같은 방 사용자에게만 메시지 전송"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"접속자 목록"})}),e.jsx("td",{children:"현재 접속 중인 사용자 목록 조회"}),e.jsx("td",{children:"선택"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"귓속말"})}),e.jsx("td",{children:"특정 사용자에게 1:1 메시지 전송"}),e.jsx("td",{children:"선택"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Graceful Shutdown"})}),e.jsx("td",{children:"서버/클라이언트 종료 시 정리"}),e.jsx("td",{children:"필수"})]})]})]}),e.jsx("h3",{children:"통신 프로토콜 설계"}),e.jsx("p",{children:"클라이언트와 서버 사이의 메시지 형식을 미리 정의합니다. 간단한 텍스트 기반 프로토콜을 사용합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-exchange-alt"})," 메시지 프로토콜"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 클라이언트 → 서버
/nick <닉네임>              닉네임 설정
/join <방이름>              채팅방 입장 (없으면 생성)
/leave                     현재 채팅방 나가기
/rooms                     채팅방 목록 조회
/users                     접속자 목록 조회
/whisper <닉네임> <메시지>   귓속말
/quit                      접속 종료
<일반 텍스트>               메시지 전송 (현재 방 또는 전체)

# 서버 → 클라이언트
[서버] <메시지>             시스템 메시지
[<닉네임>] <메시지>         일반 채팅 메시지
[귓속말][<닉네임>] <메시지>  귓속말 메시지`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," TCP vs UDP"]}),e.jsxs("p",{children:["채팅 애플리케이션은 메시지의 순서 보장과 신뢰성이 중요하므로 ",e.jsx("strong",{children:"TCP"}),"를 사용합니다. TCP는 연결 지향 프로토콜로, 패킷 손실 시 자동 재전송을 보장합니다. 반면 UDP는 실시간 스트리밍이나 게임처럼 속도가 더 중요한 경우에 적합합니다."]})]}),e.jsx("h2",{children:"2. 프로젝트 구조 설계"}),e.jsx("p",{children:"서버와 클라이언트를 모두 하나의 Maven 프로젝트에 포함시킵니다. 서버는 접속한 각 클라이언트를 별도의 스레드로 관리하며, 클라이언트는 메시지 송신/수신을 위한 두 개의 스레드를 사용합니다."}),e.jsx("h3",{children:"Maven 프로젝트 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," pom.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.chat</groupId>
    <artifactId>multichat</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <!-- SLF4J API -->
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-api</artifactId>
            <version>2.0.9</version>
        </dependency>
        <!-- Logback (SLF4J 구현체) -->
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.4.14</version>
        </dependency>
    </dependencies>
</project>`})})]}),e.jsx("h3",{children:"패키지 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-folder-open"})," 프로젝트 디렉토리 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`multichat/
├── pom.xml
└── src/main/
    ├── java/com/chat/
    │   ├── server/
    │   │   ├── ChatServer.java          // 서버 메인
    │   │   ├── ClientHandler.java       // 클라이언트 핸들러 (스레드)
    │   │   └── ChatRoom.java            // 채팅방 관리
    │   ├── client/
    │   │   ├── ChatClient.java          // 클라이언트 메인
    │   │   ├── MessageSender.java       // 메시지 송신 스레드
    │   │   └── MessageReceiver.java     // 메시지 수신 스레드
    │   └── common/
    │       └── Protocol.java            // 프로토콜 상수
    └── resources/
        └── logback.xml                  // 로깅 설정`})})]}),e.jsx("h3",{children:"프로토콜 상수 정의"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Protocol.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.chat.common;

public class Protocol {
    public static final int DEFAULT_PORT = 9000;

    // 명령어 접두사
    public static final String CMD_NICK    = "/nick";
    public static final String CMD_JOIN    = "/join";
    public static final String CMD_LEAVE   = "/leave";
    public static final String CMD_ROOMS   = "/rooms";
    public static final String CMD_USERS   = "/users";
    public static final String CMD_WHISPER = "/whisper";
    public static final String CMD_QUIT    = "/quit";

    // 서버 메시지 접두사
    public static final String SERVER_PREFIX  = "[서버] ";
    public static final String WHISPER_PREFIX = "[귓속말]";

    private Protocol() {} // 인스턴스 생성 방지
}`})})]}),e.jsx("h2",{children:"3. TCP 서버 구현"}),e.jsxs("p",{children:["서버는 ",e.jsx("code",{children:"ServerSocket"}),"으로 지정된 포트에서 클라이언트 연결을 대기합니다. 새로운 클라이언트가 접속하면 별도의 ",e.jsx("strong",{children:"ClientHandler"})," 스레드를 생성하여 해당 클라이언트의 메시지를 독립적으로 처리합니다."]}),e.jsx("h3",{children:"ChatServer - 서버 메인 클래스"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ChatServer.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.chat.server;

import com.chat.common.Protocol;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArraySet;

public class ChatServer {

    private static final Logger log = LoggerFactory.getLogger(ChatServer.class);

    private final int port;
    private ServerSocket serverSocket;
    private volatile boolean running = true;

    // 접속 중인 클라이언트 관리 (닉네임 → 핸들러)
    private final Map<String, ClientHandler> clients = new ConcurrentHashMap<>();
    // 채팅방 관리
    private final Map<String, ChatRoom> chatRooms = new ConcurrentHashMap<>();

    public ChatServer(int port) {
        this.port = port;
    }

    public void start() {
        try {
            serverSocket = new ServerSocket(port);
            log.info("채팅 서버 시작 - 포트: {}", port);
            System.out.println("채팅 서버가 포트 " + port + "에서 시작되었습니다.");

            // Shutdown Hook 등록
            Runtime.getRuntime().addShutdownHook(new Thread(this::shutdown));

            // 클라이언트 접속 대기 루프
            while (running) {
                Socket clientSocket = serverSocket.accept();
                log.info("새 클라이언트 접속: {}", clientSocket.getRemoteSocketAddress());

                ClientHandler handler = new ClientHandler(clientSocket, this);
                new Thread(handler).start();
            }

        } catch (IOException e) {
            if (running) {
                log.error("서버 오류: {}", e.getMessage());
            }
        }
    }

    // 클라이언트 등록
    public synchronized boolean registerClient(String nickname, ClientHandler handler) {
        if (clients.containsKey(nickname)) {
            return false;  // 닉네임 중복
        }
        clients.put(nickname, handler);
        log.info("클라이언트 등록: {} (현재 {}명)", nickname, clients.size());
        broadcast(Protocol.SERVER_PREFIX + nickname + "님이 입장했습니다.");
        return true;
    }

    // 클라이언트 해제
    public synchronized void removeClient(String nickname) {
        clients.remove(nickname);
        // 모든 채팅방에서도 제거
        chatRooms.values().forEach(room -> room.removeMember(nickname));
        log.info("클라이언트 퇴장: {} (현재 {}명)", nickname, clients.size());
        broadcast(Protocol.SERVER_PREFIX + nickname + "님이 퇴장했습니다.");
    }

    // 전체 브로드캐스트
    public void broadcast(String message) {
        clients.values().forEach(handler -> handler.sendMessage(message));
    }

    // 특정 채팅방에 브로드캐스트
    public void broadcastToRoom(String roomName, String message, String sender) {
        ChatRoom room = chatRooms.get(roomName);
        if (room != null) {
            room.getMembers().stream()
                .filter(name -> !name.equals(sender))
                .map(clients::get)
                .filter(h -> h != null)
                .forEach(h -> h.sendMessage(message));
        }
    }

    // 귓속말
    public boolean whisper(String from, String to, String message) {
        ClientHandler target = clients.get(to);
        if (target == null) return false;
        target.sendMessage(Protocol.WHISPER_PREFIX + "[" + from + "] " + message);
        return true;
    }

    // 채팅방 입장 (없으면 생성)
    public ChatRoom joinRoom(String roomName, String nickname) {
        ChatRoom room = chatRooms.computeIfAbsent(roomName, ChatRoom::new);
        room.addMember(nickname);
        broadcastToRoom(roomName,
            Protocol.SERVER_PREFIX + nickname + "님이 [" + roomName + "] 방에 입장했습니다.",
            nickname);
        return room;
    }

    // 채팅방 퇴장
    public void leaveRoom(String roomName, String nickname) {
        ChatRoom room = chatRooms.get(roomName);
        if (room != null) {
            room.removeMember(nickname);
            broadcastToRoom(roomName,
                Protocol.SERVER_PREFIX + nickname + "님이 방에서 나갔습니다.",
                nickname);
            // 빈 방 삭제
            if (room.isEmpty()) {
                chatRooms.remove(roomName);
                log.info("빈 채팅방 삭제: {}", roomName);
            }
        }
    }

    // 접속자 목록
    public Set<String> getOnlineUsers() {
        return clients.keySet();
    }

    // 채팅방 목록
    public Map<String, ChatRoom> getChatRooms() {
        return chatRooms;
    }

    // 서버 종료
    public void shutdown() {
        running = false;
        broadcast(Protocol.SERVER_PREFIX + "서버가 종료됩니다.");
        clients.values().forEach(ClientHandler::close);
        try {
            if (serverSocket != null && !serverSocket.isClosed()) {
                serverSocket.close();
            }
        } catch (IOException e) {
            log.error("서버 소켓 닫기 실패", e);
        }
        log.info("서버가 종료되었습니다.");
    }

    public static void main(String[] args) {
        int port = args.length > 0 ? Integer.parseInt(args[0]) : Protocol.DEFAULT_PORT;
        new ChatServer(port).start();
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," ConcurrentHashMap을 사용하는 이유"]}),e.jsxs("p",{children:["여러 ",e.jsx("code",{children:"ClientHandler"})," 스레드가 동시에 ",e.jsx("code",{children:"clients"})," 맵에 접근합니다. 일반 ",e.jsx("code",{children:"HashMap"}),"은 스레드 안전하지 않으므로, 동시 접근 시 데이터 손상이 발생할 수 있습니다.",e.jsx("code",{children:"ConcurrentHashMap"}),"은 내부적으로 세그먼트 단위 잠금을 사용하여 높은 동시성과 스레드 안전성을 모두 제공합니다."]})]}),e.jsx("h3",{children:"ClientHandler - 클라이언트 핸들러 스레드"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ClientHandler.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.chat.server;

import com.chat.common.Protocol;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.net.Socket;

public class ClientHandler implements Runnable {

    private static final Logger log = LoggerFactory.getLogger(ClientHandler.class);

    private final Socket socket;
    private final ChatServer server;
    private BufferedReader in;
    private PrintWriter out;
    private String nickname;
    private String currentRoom;  // 현재 참여 중인 채팅방
    private volatile boolean running = true;

    public ClientHandler(Socket socket, ChatServer server) {
        this.socket = socket;
        this.server = server;
    }

    @Override
    public void run() {
        try {
            in = new BufferedReader(new InputStreamReader(socket.getInputStream(), "UTF-8"));
            out = new PrintWriter(new OutputStreamWriter(socket.getOutputStream(), "UTF-8"), true);

            // 닉네임 설정 요청
            sendMessage(Protocol.SERVER_PREFIX + "닉네임을 입력하세요: /nick <닉네임>");

            String line;
            while (running && (line = in.readLine()) != null) {
                line = line.trim();
                if (line.isEmpty()) continue;

                if (line.startsWith("/")) {
                    handleCommand(line);
                } else {
                    handleMessage(line);
                }
            }

        } catch (IOException e) {
            if (running) {
                log.warn("클라이언트 연결 끊김: {}", nickname);
            }
        } finally {
            cleanup();
        }
    }

    private void handleCommand(String input) {
        String[] parts = input.split("\\\\s+", 3);
        String cmd = parts[0].toLowerCase();

        switch (cmd) {
            case Protocol.CMD_NICK -> {
                if (parts.length < 2) {
                    sendMessage(Protocol.SERVER_PREFIX + "사용법: /nick <닉네임>");
                    return;
                }
                String newNick = parts[1];
                if (nickname != null) {
                    server.removeClient(nickname);
                }
                if (server.registerClient(newNick, this)) {
                    nickname = newNick;
                    sendMessage(Protocol.SERVER_PREFIX + "닉네임이 [" + nickname + "](으)로 설정되었습니다.");
                } else {
                    sendMessage(Protocol.SERVER_PREFIX + "이미 사용 중인 닉네임입니다.");
                }
            }

            case Protocol.CMD_JOIN -> {
                if (nickname == null) {
                    sendMessage(Protocol.SERVER_PREFIX + "먼저 닉네임을 설정해주세요.");
                    return;
                }
                if (parts.length < 2) {
                    sendMessage(Protocol.SERVER_PREFIX + "사용법: /join <방이름>");
                    return;
                }
                // 기존 방에서 나가기
                if (currentRoom != null) {
                    server.leaveRoom(currentRoom, nickname);
                }
                currentRoom = parts[1];
                server.joinRoom(currentRoom, nickname);
                sendMessage(Protocol.SERVER_PREFIX + "[" + currentRoom + "] 채팅방에 입장했습니다.");
            }

            case Protocol.CMD_LEAVE -> {
                if (currentRoom == null) {
                    sendMessage(Protocol.SERVER_PREFIX + "현재 채팅방에 참여하고 있지 않습니다.");
                    return;
                }
                server.leaveRoom(currentRoom, nickname);
                sendMessage(Protocol.SERVER_PREFIX + "[" + currentRoom + "] 채팅방에서 나왔습니다.");
                currentRoom = null;
            }

            case Protocol.CMD_ROOMS -> {
                var rooms = server.getChatRooms();
                if (rooms.isEmpty()) {
                    sendMessage(Protocol.SERVER_PREFIX + "개설된 채팅방이 없습니다.");
                } else {
                    StringBuilder sb = new StringBuilder(Protocol.SERVER_PREFIX + "채팅방 목록:\\n");
                    rooms.forEach((name, room) ->
                        sb.append("  - ").append(name)
                          .append(" (").append(room.getMemberCount()).append("명)\\n"));
                    sendMessage(sb.toString());
                }
            }

            case Protocol.CMD_USERS -> {
                var users = server.getOnlineUsers();
                sendMessage(Protocol.SERVER_PREFIX + "접속자 (" + users.size() + "명): " + String.join(", ", users));
            }

            case Protocol.CMD_WHISPER -> {
                if (parts.length < 3) {
                    sendMessage(Protocol.SERVER_PREFIX + "사용법: /whisper <닉네임> <메시지>");
                    return;
                }
                String target = parts[1];
                String msg = parts[2];
                if (!server.whisper(nickname, target, msg)) {
                    sendMessage(Protocol.SERVER_PREFIX + target + "님을 찾을 수 없습니다.");
                } else {
                    sendMessage(Protocol.WHISPER_PREFIX + "[나→" + target + "] " + msg);
                }
            }

            case Protocol.CMD_QUIT -> {
                sendMessage(Protocol.SERVER_PREFIX + "접속을 종료합니다.");
                running = false;
            }

            default -> sendMessage(Protocol.SERVER_PREFIX + "알 수 없는 명령어: " + cmd);
        }
    }

    private void handleMessage(String message) {
        if (nickname == null) {
            sendMessage(Protocol.SERVER_PREFIX + "먼저 /nick 명령어로 닉네임을 설정해주세요.");
            return;
        }

        String formatted = "[" + nickname + "] " + message;

        if (currentRoom != null) {
            // 채팅방 내 메시지
            server.broadcastToRoom(currentRoom, formatted, nickname);
        } else {
            // 전체 채팅
            server.broadcast(formatted);
        }
    }

    public void sendMessage(String message) {
        if (out != null) {
            out.println(message);
        }
    }

    public void close() {
        running = false;
        try {
            socket.close();
        } catch (IOException e) {
            log.error("소켓 닫기 실패", e);
        }
    }

    private void cleanup() {
        if (nickname != null) {
            if (currentRoom != null) {
                server.leaveRoom(currentRoom, nickname);
            }
            server.removeClient(nickname);
        }
        try {
            socket.close();
        } catch (IOException e) {
            log.error("소켓 정리 실패", e);
        }
    }
}`})})]}),e.jsx("h2",{children:"4. 클라이언트 구현"}),e.jsxs("p",{children:["클라이언트는 서버에 TCP 연결을 맺은 후, ",e.jsx("strong",{children:"두 개의 스레드"}),"를 사용합니다. 하나는 사용자 입력을 읽어 서버로 전송하는 ",e.jsx("strong",{children:"송신 스레드"}),", 다른 하나는 서버로부터 메시지를 수신하여 화면에 출력하는 ",e.jsx("strong",{children:"수신 스레드"}),"입니다."]}),e.jsx("h3",{children:"ChatClient - 클라이언트 메인"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ChatClient.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.chat.client;

import com.chat.common.Protocol;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.net.Socket;
import java.util.Scanner;

public class ChatClient {

    private static final Logger log = LoggerFactory.getLogger(ChatClient.class);

    private final String host;
    private final int port;
    private Socket socket;
    private PrintWriter out;
    private BufferedReader in;
    private volatile boolean running = true;

    public ChatClient(String host, int port) {
        this.host = host;
        this.port = port;
    }

    public void start() {
        try {
            socket = new Socket(host, port);
            out = new PrintWriter(new OutputStreamWriter(socket.getOutputStream(), "UTF-8"), true);
            in = new BufferedReader(new InputStreamReader(socket.getInputStream(), "UTF-8"));

            log.info("서버에 연결됨: {}:{}", host, port);
            System.out.println("채팅 서버에 연결되었습니다. (" + host + ":" + port + ")");
            System.out.println("명령어: /nick, /join, /leave, /rooms, /users, /whisper, /quit");

            // 수신 스레드 시작
            Thread receiverThread = new Thread(new MessageReceiver(in, this));
            receiverThread.setDaemon(true);
            receiverThread.start();

            // 송신 루프 (메인 스레드)
            Scanner scanner = new Scanner(System.in);
            while (running) {
                if (scanner.hasNextLine()) {
                    String input = scanner.nextLine().trim();
                    if (input.isEmpty()) continue;

                    out.println(input);

                    if (input.equalsIgnoreCase(Protocol.CMD_QUIT)) {
                        running = false;
                    }
                }
            }

        } catch (IOException e) {
            log.error("서버 연결 실패: {}", e.getMessage());
            System.err.println("서버에 연결할 수 없습니다: " + e.getMessage());
        } finally {
            disconnect();
        }
    }

    public void stop() {
        running = false;
    }

    private void disconnect() {
        running = false;
        try {
            if (socket != null && !socket.isClosed()) {
                socket.close();
            }
        } catch (IOException e) {
            log.error("연결 종료 오류", e);
        }
        System.out.println("채팅을 종료합니다.");
    }

    public static void main(String[] args) {
        String host = args.length > 0 ? args[0] : "localhost";
        int port = args.length > 1 ? Integer.parseInt(args[1]) : Protocol.DEFAULT_PORT;
        new ChatClient(host, port).start();
    }
}`})})]}),e.jsx("h3",{children:"MessageReceiver - 수신 스레드"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MessageReceiver.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.chat.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;

public class MessageReceiver implements Runnable {

    private static final Logger log = LoggerFactory.getLogger(MessageReceiver.class);

    private final BufferedReader in;
    private final ChatClient client;

    public MessageReceiver(BufferedReader in, ChatClient client) {
        this.in = in;
        this.client = client;
    }

    @Override
    public void run() {
        try {
            String message;
            while ((message = in.readLine()) != null) {
                System.out.println(message);
            }
        } catch (IOException e) {
            log.warn("서버 연결이 끊어졌습니다.");
        }
        // 서버 연결이 끊어지면 클라이언트도 종료
        System.out.println("서버와의 연결이 종료되었습니다.");
        client.stop();
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 데몬 스레드 vs 사용자 스레드"]}),e.jsxs("p",{children:["수신 스레드를 ",e.jsx("code",{children:"setDaemon(true)"}),"로 설정합니다. 데몬 스레드는 모든 사용자 스레드가 종료되면 JVM이 자동으로 함께 종료합니다. 메인 스레드(송신)가 끝나면 수신 스레드도 자동으로 정리되므로, 별도의 종료 처리가 필요 없습니다."]})]}),e.jsx("h2",{children:"5. 채팅방과 멀티캐스트"}),e.jsx("p",{children:"채팅방 기능을 통해 사용자들이 관심사별로 그룹을 형성하여 대화할 수 있습니다. 채팅방에 입장한 사용자에게만 메시지를 전송하는 멀티캐스트 로직을 구현합니다."}),e.jsx("h3",{children:"ChatRoom 클래스"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ChatRoom.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`package com.chat.server;

import java.util.Collections;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

public class ChatRoom {

    private final String name;
    private final Set<String> members = new CopyOnWriteArraySet<>();

    public ChatRoom(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void addMember(String nickname) {
        members.add(nickname);
    }

    public void removeMember(String nickname) {
        members.remove(nickname);
    }

    public boolean hasMember(String nickname) {
        return members.contains(nickname);
    }

    public Set<String> getMembers() {
        return Collections.unmodifiableSet(members);
    }

    public int getMemberCount() {
        return members.size();
    }

    public boolean isEmpty() {
        return members.isEmpty();
    }

    @Override
    public String toString() {
        return String.format("[%s] (%d명): %s", name, members.size(), members);
    }
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," CopyOnWriteArraySet"]}),e.jsxs("p",{children:[e.jsx("code",{children:"CopyOnWriteArraySet"}),"은 수정 시 내부 배열을 복사하여 새로운 배열을 만드는 스레드 안전한 Set입니다. 읽기 작업이 빈번하고 쓰기 작업이 드문 경우에 적합합니다. 채팅방 멤버는 입장/퇴장(쓰기)보다 메시지 브로드캐스트(읽기)가 훨씬 빈번하므로 이 자료구조가 적합합니다."]})]}),e.jsx("h3",{children:"메시지 흐름도"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-project-diagram"})," 메시지 전달 흐름"]})}),e.jsx("pre",{children:e.jsx("code",{children:`[클라이언트 A] ──메시지──> [ClientHandler A]
                              │
                    ┌─────────┴─────────┐
                    │                   │
              채팅방 있음?          채팅방 없음
                    │                   │
            broadcastToRoom()      broadcast()
                    │                   │
           같은 방 멤버에게만     모든 접속자에게
           메시지 전달            메시지 전달
                    │                   │
    [클라이언트 B] <──┤         [클라이언트 B] <──┤
    [클라이언트 C] <──┘         [클라이언트 C] <──┤
                               [클라이언트 D] <──┘`})})]}),e.jsx("h2",{children:"6. 로깅과 예외처리"}),e.jsx("p",{children:"SLF4J와 Logback을 사용하여 서버/클라이언트의 동작 로그를 체계적으로 관리합니다. 또한 네트워크 통신에서 발생할 수 있는 다양한 예외 상황을 처리합니다."}),e.jsx("h3",{children:"Logback 설정"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," logback.xml"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!-- 콘솔 출력 -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{20} - %msg%n</pattern>
        </encoder>
    </appender>

    <!-- 파일 출력 (서버 로그) -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/chat-server.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/chat-server.%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <root level="INFO">
        <appender-ref ref="CONSOLE" />
        <appender-ref ref="FILE" />
    </root>
</configuration>`})})]}),e.jsx("h3",{children:"Graceful Shutdown 구현"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Graceful Shutdown 패턴"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ChatServer에서 Shutdown Hook 등록
Runtime.getRuntime().addShutdownHook(new Thread(() -> {
    log.info("서버 종료 시작...");

    // 1. 모든 클라이언트에게 종료 알림
    broadcast(Protocol.SERVER_PREFIX + "서버가 종료됩니다. 잠시 후 연결이 끊어집니다.");

    // 2. 모든 클라이언트 핸들러 종료
    clients.values().forEach(handler -> {
        try {
            handler.close();
        } catch (Exception e) {
            log.warn("클라이언트 핸들러 종료 실패: {}", e.getMessage());
        }
    });

    // 3. 서버 소켓 닫기
    try {
        if (serverSocket != null && !serverSocket.isClosed()) {
            serverSocket.close();
        }
    } catch (IOException e) {
        log.error("서버 소켓 닫기 실패", e);
    }

    log.info("서버 종료 완료");
}));`})})]}),e.jsx("h3",{children:"네트워크 예외 처리"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"예외"}),e.jsx("th",{children:"발생 상황"}),e.jsx("th",{children:"처리 방법"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ConnectException"})}),e.jsx("td",{children:"서버가 실행되지 않은 상태에서 접속 시도"}),e.jsx("td",{children:"오류 메시지 출력 후 재접속 안내"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"SocketException"})}),e.jsx("td",{children:"상대방 연결이 갑자기 끊어짐"}),e.jsx("td",{children:"클라이언트 정리 후 접속자 목록에서 제거"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"SocketTimeoutException"})}),e.jsx("td",{children:"지정된 시간 내 응답 없음"}),e.jsx("td",{children:"타임아웃 메시지 전송 후 연결 유지"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"IOException"})}),e.jsx("td",{children:"I/O 오류 전반"}),e.jsx("td",{children:"로그 기록 후 리소스 정리"})]})]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," volatile 키워드"]}),e.jsxs("p",{children:[e.jsx("code",{children:"volatile boolean running"})," 변수는 여러 스레드에서 접근합니다.",e.jsx("code",{children:"volatile"})," 키워드는 변수를 메인 메모리에서 직접 읽고 쓰도록 보장합니다. 이를 통해 한 스레드에서 ",e.jsx("code",{children:"running = false"}),"로 변경하면 다른 스레드에서도 즉시 변경된 값을 읽을 수 있습니다."]})]}),e.jsx("h2",{children:"7. 테스트와 마무리"}),e.jsx("p",{children:"구현이 완료되면 여러 클라이언트를 동시에 실행하여 채팅 기능을 테스트합니다. 다양한 엣지 케이스를 확인하고, 예외 상황에서도 안정적으로 동작하는지 검증합니다."}),e.jsx("h3",{children:"테스트 시나리오"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-terminal"})," 터미널에서 테스트"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 터미널 1: 서버 실행
mvn compile exec:java -Dexec.mainClass="com.chat.server.ChatServer"

# 터미널 2: 클라이언트 A 실행
mvn compile exec:java -Dexec.mainClass="com.chat.client.ChatClient"
> /nick Alice
> /join java-study
> 안녕하세요!

# 터미널 3: 클라이언트 B 실행
mvn compile exec:java -Dexec.mainClass="com.chat.client.ChatClient"
> /nick Bob
> /join java-study
> 반갑습니다!

# 터미널 4: 클라이언트 C 실행 (전체 채팅)
mvn compile exec:java -Dexec.mainClass="com.chat.client.ChatClient"
> /nick Charlie
> /users
> /rooms
> 전체 채팅 메시지
> /whisper Alice 귓속말 테스트`})})]}),e.jsx("h3",{children:"확인해야 할 엣지 케이스"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"닉네임 중복"})," - 이미 사용 중인 닉네임으로 접속 시도"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"갑작스런 연결 끊김"})," - 클라이언트 프로세스를 강제 종료했을 때 서버의 처리"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"빈 메시지"})," - 빈 문자열이나 공백만 전송했을 때"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"존재하지 않는 사용자에게 귓속말"})," - 적절한 오류 메시지 반환"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"동시 입장/퇴장"})," - 여러 클라이언트가 동시에 같은 방에 입퇴장"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"서버 종료 시 클라이언트 처리"})," - Graceful shutdown 동작 확인"]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," IntelliJ에서 여러 인스턴스 실행하기"]}),e.jsxs("p",{children:["IntelliJ에서 같은 Main 클래스를 여러 번 실행하려면",e.jsx("strong",{children:"Run/Debug Configurations"}),'에서 "Allow multiple instances" 옵션을 체크합니다. 또는 터미널 탭을 여러 개 열어서 각각 ',e.jsx("code",{children:"mvn exec:java"}),"로 실행할 수 있습니다."]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["채팅방 내 접속자 목록을 보여주는 ",e.jsx("code",{children:"/members"})," 명령어를 추가해보세요."]}),e.jsxs("li",{children:["귓속말 받은 사용자가 바로 답장할 수 있는 ",e.jsx("code",{children:"/reply <메시지>"})," 명령어를 구현해보세요."]}),e.jsx("li",{children:"서버에 접속 로그를 일별로 파일에 기록하도록 Logback 설정을 개선해보세요."}),e.jsxs("li",{children:[e.jsx("code",{children:"ExecutorService"}),"를 사용하여 스레드 풀 기반으로 서버를 리팩토링해보세요. (무제한 스레드 생성 방지)"]}),e.jsx("li",{children:"클라이언트에 재접속 로직을 추가해보세요. (서버 연결이 끊어지면 5초 후 자동 재접속 시도)"})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${s("PJ04")?"btn-primary":"btn-accent"}`,onClick:()=>i("PJ04"),children:s("PJ04")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(r,{to:"/projects/03",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 도서 관리 시스템"]}),e.jsxs(r,{to:"/projects/05",children:["다음: 서블릿 게시판 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
