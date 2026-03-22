import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function PracticalLesson01() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/practical">실무 Java</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Lesson 01</span>
          </div>
          <h1>Lesson 01. IntelliJ IDEA 완벽 가이드</h1>
          <p>설치, 프로젝트 생성, 디버깅, 단축키, 플러그인을 배웁니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          <h2>1. IntelliJ IDEA 소개</h2>
          <p>
            <strong>IntelliJ IDEA</strong>는 체코의 소프트웨어 회사 <strong>JetBrains</strong>가 개발한 Java 통합 개발 환경(IDE)입니다.
            2001년 처음 출시된 이후, 전 세계 Java 개발자들에게 가장 강력하고 생산적인 IDE로 자리매김했습니다.
            Google의 Android Studio도 IntelliJ IDEA를 기반으로 만들어졌을 정도로 그 기술력이 검증되었습니다.
          </p>
          <p>
            IntelliJ IDEA는 단순한 텍스트 편집기가 아닙니다. 코드를 깊이 이해하고, 문맥에 맞는 자동 완성을 제공하며,
            잠재적인 버그를 사전에 감지하고, 리팩토링을 안전하게 수행할 수 있도록 도와줍니다.
            Eclipse나 VS Code와 비교했을 때, IntelliJ의 가장 큰 장점은 <strong>"지능적인 코드 분석"</strong>입니다.
          </p>

          <h3>Community vs Ultimate 비교</h3>
          <table>
            <thead>
              <tr><th>기능</th><th>Community (무료)</th><th>Ultimate (유료)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Java / Kotlin 개발</strong></td><td>O</td><td>O</td></tr>
              <tr><td><strong>Maven / Gradle 지원</strong></td><td>O</td><td>O</td></tr>
              <tr><td><strong>Git / VCS 통합</strong></td><td>O</td><td>O</td></tr>
              <tr><td><strong>디버거 / 테스트 러너</strong></td><td>O</td><td>O</td></tr>
              <tr><td><strong>Spring / Spring Boot</strong></td><td>X</td><td>O</td></tr>
              <tr><td><strong>웹 개발 (HTML/CSS/JS)</strong></td><td>X</td><td>O</td></tr>
              <tr><td><strong>데이터베이스 도구</strong></td><td>X</td><td>O</td></tr>
              <tr><td><strong>서블릿 / JSP / JPA</strong></td><td>X</td><td>O</td></tr>
              <tr><td><strong>Docker / Kubernetes</strong></td><td>X</td><td>O</td></tr>
              <tr><td><strong>가격</strong></td><td>무료</td><td>연 $149.90 (개인)</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 어떤 에디션을 선택할까?</div>
            <p>
              Java 기본 학습이 목적이라면 <strong>Community Edition</strong>으로 충분합니다.
              Spring Boot, 웹 개발, 데이터베이스 연동까지 하려면 <strong>Ultimate Edition</strong>이 필요합니다.
              학생이라면 JetBrains 학생 라이선스를 통해 Ultimate를 무료로 사용할 수 있습니다.
            </p>
          </div>

          <h3>왜 IntelliJ IDEA를 쓰는가?</h3>
          <ul>
            <li><strong>지능적인 코드 완성</strong> - 문맥을 파악하여 가장 적합한 코드를 먼저 추천합니다</li>
            <li><strong>즉각적인 오류 감지</strong> - 코드를 작성하는 즉시 문법/논리 오류를 표시합니다</li>
            <li><strong>강력한 리팩토링</strong> - 변수명 변경, 메서드 추출 등을 안전하게 수행합니다</li>
            <li><strong>내장 도구</strong> - 터미널, Git, 데이터베이스, HTTP 클라이언트가 모두 내장되어 있습니다</li>
            <li><strong>에르고노믹 디자인</strong> - 불필요한 동작을 최소화하여 개발 생산성을 극대화합니다</li>
            <li><strong>풍부한 플러그인 생태계</strong> - 수천 개의 플러그인으로 기능을 확장할 수 있습니다</li>
          </ul>

          <h2>2. 설치와 초기 설정</h2>
          <h3>다운로드 및 설치</h3>
          <p>IntelliJ IDEA는 JetBrains 공식 사이트 또는 JetBrains Toolbox App을 통해 설치할 수 있습니다.</p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> 설치 방법</span>
            </div>
            <pre><code>{`# 방법 1: 공식 사이트에서 직접 다운로드
# https://www.jetbrains.com/idea/download/

# 방법 2: JetBrains Toolbox App (권장)
# https://www.jetbrains.com/toolbox-app/
# → Toolbox를 설치하면 모든 JetBrains IDE를 한 곳에서 관리 가능
# → 자동 업데이트, 여러 버전 관리 등이 편리

# 방법 3: Windows - winget
winget install JetBrains.IntelliJIDEA.Community

# 방법 4: macOS - Homebrew
brew install --cask intellij-idea-ce

# 방법 5: Linux - Snap
sudo snap install intellij-idea-community --classic`}</code></pre>
          </div>

          <h3>JDK 설정</h3>
          <p>IntelliJ IDEA에서 Java 프로젝트를 실행하려면 JDK가 필요합니다. IntelliJ는 JDK를 자동으로 다운로드할 수 있습니다.</p>
          <ol>
            <li><strong>File → Project Structure → SDKs</strong>에서 JDK 추가</li>
            <li><strong>Download JDK</strong> 버튼 클릭</li>
            <li>벤더 선택: <strong>Oracle OpenJDK</strong>, <strong>Amazon Corretto</strong>, <strong>Temurin(Adoptium)</strong> 등</li>
            <li>버전 선택: Java 17 또는 Java 21 LTS 권장</li>
            <li>다운로드 경로 확인 후 <strong>Download</strong> 클릭</li>
          </ol>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> JDK 버전 선택 가이드</div>
            <p>
              실무에서는 LTS(Long-Term Support) 버전을 사용합니다.
              현재 LTS 버전은 <strong>Java 17</strong>과 <strong>Java 21</strong>입니다.
              학습 목적이라면 최신 LTS인 Java 21을 권장합니다.
            </p>
          </div>

          <h3>테마와 폰트 설정</h3>
          <p>장시간 코딩할 때 눈의 피로를 줄이려면 적절한 테마와 폰트 설정이 중요합니다.</p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-cog"></i> 추천 설정 경로</span>
            </div>
            <pre><code>{`# 테마 설정
File → Settings → Appearance & Behavior → Appearance
  → Theme: "Darcula" (다크) 또는 "IntelliJ Light" (라이트)

# 에디터 폰트 설정
File → Settings → Editor → Font
  → Font: "JetBrains Mono" (IntelliJ 전용 폰트, 기본 설치됨)
  → Size: 14~16 권장
  → Line spacing: 1.2~1.4

# 콘솔 폰트 설정
File → Settings → Editor → Color Scheme → Console Font
  → 에디터 폰트와 동일하게 설정 권장`}</code></pre>
          </div>

          <h3>추천 초기 설정</h3>
          <table>
            <thead>
              <tr><th>설정 항목</th><th>경로</th><th>추천 값</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>자동 저장</strong></td><td>Settings → Appearance → System Settings</td><td>Save files when switching to a different application: ON</td></tr>
              <tr><td><strong>자동 임포트</strong></td><td>Settings → Editor → General → Auto Import</td><td>Add unambiguous imports on the fly: ON</td></tr>
              <tr><td><strong>코드 접기</strong></td><td>Settings → Editor → General → Code Folding</td><td>Imports, One-line methods: ON</td></tr>
              <tr><td><strong>탭 제한</strong></td><td>Settings → Editor → General → Editor Tabs</td><td>Tab limit: 15~20</td></tr>
              <tr><td><strong>인코딩</strong></td><td>Settings → Editor → File Encodings</td><td>Project Encoding: UTF-8</td></tr>
              <tr><td><strong>줄 번호</strong></td><td>Settings → Editor → General → Appearance</td><td>Show line numbers: ON</td></tr>
              <tr><td><strong>공백 문자 표시</strong></td><td>Settings → Editor → General → Appearance</td><td>Show whitespaces: Trailing만 ON</td></tr>
            </tbody>
          </table>

          <h2>3. 프로젝트 생성과 구조</h2>
          <h3>프로젝트 생성 방법</h3>
          <p>IntelliJ IDEA에서는 다양한 방식으로 Java 프로젝트를 생성할 수 있습니다.</p>

          <h3>순수 Java 프로젝트</h3>
          <ol>
            <li><strong>File → New → Project</strong> 선택</li>
            <li>Language: <strong>Java</strong>, Build System: <strong>IntelliJ</strong> 선택</li>
            <li>JDK 선택 후 <strong>Create</strong></li>
          </ol>

          <h3>Maven 프로젝트</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> pom.xml (Maven 프로젝트 구조)</span>
            </div>
            <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>my-java-project</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <!-- JUnit 5 테스트 의존성 -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.10.1</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>`}</code></pre>
          </div>

          <h3>Gradle 프로젝트</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> build.gradle (Gradle 프로젝트 구조)</span>
            </div>
            <pre><code>{`plugins {
    id 'java'
}

group = 'com.example'
version = '1.0-SNAPSHOT'

java {
    sourceCompatibility = JavaVersion.VERSION_21
    targetCompatibility = JavaVersion.VERSION_21
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.1'
}

test {
    useJUnitPlatform()
}`}</code></pre>
          </div>

          <h3>프로젝트 디렉토리 구조</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-folder-open"></i> 표준 Java 프로젝트 구조</span>
            </div>
            <pre><code>{`my-java-project/
├── .idea/                    ← IntelliJ 프로젝트 설정 (Git에 포함 여부 선택)
│   ├── workspace.xml         ← 개인 작업 환경 (Git 제외 권장)
│   ├── modules.xml           ← 모듈 설정
│   ├── misc.xml              ← JDK, 인코딩 등 프로젝트 설정
│   └── vcs.xml               ← 버전 관리 설정
├── src/
│   ├── main/
│   │   ├── java/             ← Java 소스 코드
│   │   │   └── com/example/
│   │   │       └── Main.java
│   │   └── resources/        ← 리소스 파일 (설정, 프로퍼티)
│   └── test/
│       ├── java/             ← 테스트 코드
│       │   └── com/example/
│       │       └── MainTest.java
│       └── resources/        ← 테스트용 리소스
├── target/ 또는 build/       ← 빌드 출력 (Git 제외)
├── pom.xml 또는 build.gradle ← 빌드 설정 파일
└── .gitignore                ← Git 제외 파일 목록`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> .idea 폴더와 Git</div>
            <p>
              <code>.idea/</code> 폴더에는 IntelliJ 프로젝트 설정이 저장됩니다.
              팀 프로젝트에서는 <code>.gitignore</code>에 <code>.idea/workspace.xml</code>과 <code>.idea/tasks.xml</code>은 제외하고,
              나머지 설정 파일은 공유하는 것이 일반적입니다.
              또는 <code>.idea/</code> 전체를 제외하고 빌드 도구(Maven/Gradle) 설정만 공유하는 방법도 있습니다.
            </p>
          </div>

          <h2>4. 핵심 단축키 마스터</h2>
          <p>
            IntelliJ IDEA의 생산성은 단축키 활용 능력에 달려 있습니다.
            마우스 없이 코딩할 수 있을 정도로 단축키를 익히면, 개발 속도가 2~3배 향상됩니다.
          </p>

          <h3>편집 단축키</h3>
          <table>
            <thead>
              <tr><th>기능</th><th>Windows / Linux</th><th>macOS</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>코드 자동 완성</strong></td><td>Ctrl + Space</td><td>Ctrl + Space</td></tr>
              <tr><td><strong>스마트 자동 완성</strong></td><td>Ctrl + Shift + Space</td><td>Ctrl + Shift + Space</td></tr>
              <tr><td><strong>코드 생성 (Generate)</strong></td><td>Alt + Insert</td><td>Cmd + N</td></tr>
              <tr><td><strong>줄 복제</strong></td><td>Ctrl + D</td><td>Cmd + D</td></tr>
              <tr><td><strong>줄 삭제</strong></td><td>Ctrl + Y</td><td>Cmd + Backspace</td></tr>
              <tr><td><strong>줄 이동 (위/아래)</strong></td><td>Alt + Shift + Up/Down</td><td>Option + Shift + Up/Down</td></tr>
              <tr><td><strong>코드 정렬 (포맷팅)</strong></td><td>Ctrl + Alt + L</td><td>Cmd + Option + L</td></tr>
              <tr><td><strong>Import 정리</strong></td><td>Ctrl + Alt + O</td><td>Ctrl + Option + O</td></tr>
              <tr><td><strong>주석 토글 (한 줄)</strong></td><td>Ctrl + /</td><td>Cmd + /</td></tr>
              <tr><td><strong>주석 토글 (블록)</strong></td><td>Ctrl + Shift + /</td><td>Cmd + Option + /</td></tr>
            </tbody>
          </table>

          <h3>탐색 단축키</h3>
          <table>
            <thead>
              <tr><th>기능</th><th>Windows / Linux</th><th>macOS</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>클래스 검색</strong></td><td>Ctrl + N</td><td>Cmd + O</td></tr>
              <tr><td><strong>파일 검색</strong></td><td>Ctrl + Shift + N</td><td>Cmd + Shift + O</td></tr>
              <tr><td><strong>심볼 검색</strong></td><td>Ctrl + Alt + Shift + N</td><td>Cmd + Option + O</td></tr>
              <tr><td><strong>전체 검색 (Search Everywhere)</strong></td><td>Double Shift</td><td>Double Shift</td></tr>
              <tr><td><strong>선언부로 이동</strong></td><td>Ctrl + B</td><td>Cmd + B</td></tr>
              <tr><td><strong>구현체로 이동</strong></td><td>Ctrl + Alt + B</td><td>Cmd + Option + B</td></tr>
              <tr><td><strong>사용처 찾기</strong></td><td>Alt + F7</td><td>Option + F7</td></tr>
              <tr><td><strong>최근 파일</strong></td><td>Ctrl + E</td><td>Cmd + E</td></tr>
              <tr><td><strong>파일 구조 보기</strong></td><td>Ctrl + F12</td><td>Cmd + F12</td></tr>
            </tbody>
          </table>

          <h3>리팩토링 단축키</h3>
          <table>
            <thead>
              <tr><th>기능</th><th>Windows / Linux</th><th>macOS</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>이름 변경 (Rename)</strong></td><td>Shift + F6</td><td>Shift + F6</td></tr>
              <tr><td><strong>메서드 추출 (Extract Method)</strong></td><td>Ctrl + Alt + M</td><td>Cmd + Option + M</td></tr>
              <tr><td><strong>변수 추출 (Extract Variable)</strong></td><td>Ctrl + Alt + V</td><td>Cmd + Option + V</td></tr>
              <tr><td><strong>상수 추출 (Extract Constant)</strong></td><td>Ctrl + Alt + C</td><td>Cmd + Option + C</td></tr>
              <tr><td><strong>필드 추출 (Extract Field)</strong></td><td>Ctrl + Alt + F</td><td>Cmd + Option + F</td></tr>
              <tr><td><strong>리팩토링 메뉴</strong></td><td>Ctrl + Alt + Shift + T</td><td>Ctrl + T</td></tr>
              <tr><td><strong>인라인 (Inline)</strong></td><td>Ctrl + Alt + N</td><td>Cmd + Option + N</td></tr>
            </tbody>
          </table>

          <h3>실행 / 디버깅 단축키</h3>
          <table>
            <thead>
              <tr><th>기능</th><th>Windows / Linux</th><th>macOS</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>실행</strong></td><td>Shift + F10</td><td>Ctrl + R</td></tr>
              <tr><td><strong>디버그 실행</strong></td><td>Shift + F9</td><td>Ctrl + D</td></tr>
              <tr><td><strong>브레이크포인트 토글</strong></td><td>Ctrl + F8</td><td>Cmd + F8</td></tr>
              <tr><td><strong>Step Over</strong></td><td>F8</td><td>F8</td></tr>
              <tr><td><strong>Step Into</strong></td><td>F7</td><td>F7</td></tr>
              <tr><td><strong>Step Out</strong></td><td>Shift + F8</td><td>Shift + F8</td></tr>
              <tr><td><strong>Resume (계속 실행)</strong></td><td>F9</td><td>Cmd + Option + R</td></tr>
              <tr><td><strong>Evaluate Expression</strong></td><td>Alt + F8</td><td>Option + F8</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 단축키 학습 팁</div>
            <p>
              모든 단축키를 한 번에 외우려 하지 마세요. 매일 2~3개씩 새로운 단축키를 연습하세요.
              <strong>Key Promoter X</strong> 플러그인을 설치하면, 마우스로 메뉴를 클릭할 때마다 해당 단축키를 알려줍니다.
              가장 중요한 단축키 3개만 먼저 익히세요: <strong>Double Shift</strong> (전체 검색),
              <strong>Ctrl+Shift+A</strong> (액션 검색), <strong>Alt+Enter</strong> (빠른 수정).
            </p>
          </div>

          <h2>5. 코드 작성 도구</h2>
          <p>
            IntelliJ IDEA는 반복적인 코드 작성을 최소화하는 다양한 도구를 제공합니다.
            이 도구들을 잘 활용하면 코딩 속도가 크게 향상됩니다.
          </p>

          <h3>라이브 템플릿 (Live Templates)</h3>
          <p>자주 사용하는 코드 패턴을 약어로 입력하면 자동으로 전체 코드가 생성됩니다.</p>
          <table>
            <thead>
              <tr><th>약어</th><th>생성되는 코드</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><code>psvm</code></td><td><code>public static void main(String[] args) {'{}'}</code></td><td>메인 메서드</td></tr>
              <tr><td><code>sout</code></td><td><code>System.out.println();</code></td><td>표준 출력</td></tr>
              <tr><td><code>soutv</code></td><td><code>System.out.println("변수 = " + 변수);</code></td><td>변수 값 출력</td></tr>
              <tr><td><code>soutp</code></td><td><code>System.out.println("메서드명::파라미터");</code></td><td>파라미터 출력</td></tr>
              <tr><td><code>soutm</code></td><td><code>System.out.println("클래스.메서드");</code></td><td>메서드명 출력</td></tr>
              <tr><td><code>fori</code></td><td><code>for (int i = 0; i &lt; ; i++) {'{}'}</code></td><td>인덱스 for 루프</td></tr>
              <tr><td><code>iter</code></td><td><code>for (Type item : collection) {'{}'}</code></td><td>향상된 for 루프</td></tr>
              <tr><td><code>ifn</code></td><td><code>if (var == null) {'{}'}</code></td><td>null 체크</td></tr>
              <tr><td><code>inn</code></td><td><code>if (var != null) {'{}'}</code></td><td>not null 체크</td></tr>
              <tr><td><code>thr</code></td><td><code>throw new</code></td><td>예외 던지기</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 라이브 템플릿 사용 예시</span>
            </div>
            <pre><code>{`// 1. psvm + Tab → 메인 메서드 자동 생성
public static void main(String[] args) {
    // 2. sout + Tab → System.out.println() 자동 생성
    System.out.println("Hello IntelliJ!");

    // 3. fori + Tab → for 루프 자동 생성
    for (int i = 0; i < 10; i++) {
        // 4. soutv + Tab → 변수 출력 자동 생성
        System.out.println("i = " + i);
    }
}

// 커스텀 라이브 템플릿 만들기:
// Settings → Editor → Live Templates → Java 그룹에서 + 버튼
// 약어: log
// 템플릿: private static final Logger log = LoggerFactory.getLogger($CLASS$.class);
// $CLASS$ → className() 함수 매핑`}</code></pre>
          </div>

          <h3>코드 자동 완성</h3>
          <p>IntelliJ의 자동 완성은 세 가지 레벨로 동작합니다.</p>
          <ul>
            <li><strong>Basic Completion (Ctrl+Space)</strong> - 현재 컨텍스트에서 가능한 모든 항목 표시</li>
            <li><strong>Smart Completion (Ctrl+Shift+Space)</strong> - 현재 타입에 맞는 항목만 필터링하여 표시</li>
            <li><strong>Statement Completion (Ctrl+Shift+Enter)</strong> - 현재 문장을 자동으로 완성 (세미콜론, 중괄호 등 추가)</li>
          </ul>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 자동 완성 활용 예시</span>
            </div>
            <pre><code>{`// Postfix Completion - 변수 뒤에 . 을 찍고 키워드 입력
// 매우 직관적이고 생산성이 높은 기능!

// 1. .var → 변수 선언
new ArrayList<String>().var
// → var list = new ArrayList<String>();  또는
// → ArrayList<String> list = new ArrayList<>();

// 2. .for → 향상된 for 루프
list.for
// → for (String s : list) { }

// 3. .fori → 인덱스 for 루프
list.fori
// → for (int i = 0; i < list.size(); i++) { }

// 4. .if → if 문
(x > 10).if
// → if (x > 10) { }

// 5. .not → 부정
(x > 10).not
// → !(x > 10)

// 6. .null / .notnull → null 체크
object.null
// → if (object == null) { }

// 7. .try → try-catch 감싸기
inputStream.read().try
// → try { inputStream.read(); } catch (IOException e) { }`}</code></pre>
          </div>

          <h3>코드 제네레이션 (Alt+Insert / Cmd+N)</h3>
          <p>
            클래스 내부에서 <strong>Alt+Insert</strong> (Mac: Cmd+N)을 누르면 자동으로 생성할 수 있는 코드 목록이 나타납니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 코드 제네레이션 예시 - Student.java</span>
            </div>
            <pre><code>{`public class Student {
    private String name;
    private int age;
    private String email;

    // Alt+Insert → Constructor (생성자 자동 생성)
    public Student(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Alt+Insert → Getter and Setter (자동 생성)
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    // Alt+Insert → toString() (자동 생성)
    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\\'' +
                ", age=" + age +
                ", email='" + email + '\\'' +
                '}';
    }

    // Alt+Insert → equals() and hashCode() (자동 생성)
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return age == student.age &&
               Objects.equals(name, student.name) &&
               Objects.equals(email, student.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age, email);
    }
}`}</code></pre>
          </div>

          <h2>6. 디버깅 완벽 가이드</h2>
          <p>
            디버깅은 개발자에게 가장 중요한 기술 중 하나입니다.
            IntelliJ IDEA의 디버거는 업계 최고 수준의 기능을 제공합니다.
            <code>System.out.println()</code>으로 디버깅하는 습관을 버리고, 디버거를 제대로 활용해 봅시다.
          </p>

          <h3>브레이크포인트 종류</h3>
          <table>
            <thead>
              <tr><th>종류</th><th>설명</th><th>사용법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Line Breakpoint</strong></td><td>특정 줄에서 멈춤 (가장 기본)</td><td>줄 번호 옆 클릭</td></tr>
              <tr><td><strong>Method Breakpoint</strong></td><td>메서드 진입/종료 시 멈춤</td><td>메서드 선언 줄에 설정</td></tr>
              <tr><td><strong>Field Watchpoint</strong></td><td>필드 값이 변경될 때 멈춤</td><td>필드 선언 줄에 설정</td></tr>
              <tr><td><strong>Exception Breakpoint</strong></td><td>특정 예외 발생 시 멈춤</td><td>Run → View Breakpoints에서 설정</td></tr>
              <tr><td><strong>Conditional Breakpoint</strong></td><td>조건이 true일 때만 멈춤</td><td>브레이크포인트 우클릭 후 조건 입력</td></tr>
            </tbody>
          </table>

          <h3>디버깅 기본 흐름</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 디버깅 실습 코드 - DebugExample.java</span>
            </div>
            <pre><code>{`import java.util.ArrayList;
import java.util.List;

public class DebugExample {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);       // ← 여기에 Line Breakpoint 설정!

        int sum = calculateSum(numbers);
        System.out.println("합계: " + sum);

        double average = (double) sum / numbers.size();
        System.out.println("평균: " + average);
    }

    static int calculateSum(List<Integer> numbers) {
        int sum = 0;
        for (int num : numbers) {     // ← 여기에 Conditional Breakpoint: num > 15
            sum += num;
        }
        return sum;
    }
}`}</code></pre>
          </div>

          <h3>Step 명령어 이해</h3>
          <ul>
            <li><strong>Step Over (F8)</strong> - 현재 줄을 실행하고 다음 줄로 이동. 메서드 호출이 있어도 내부로 들어가지 않음</li>
            <li><strong>Step Into (F7)</strong> - 메서드 호출이 있으면 해당 메서드 내부로 들어감</li>
            <li><strong>Step Out (Shift+F8)</strong> - 현재 메서드를 끝까지 실행하고 호출한 곳으로 돌아감</li>
            <li><strong>Run to Cursor (Alt+F9)</strong> - 커서 위치까지 실행 (임시 브레이크포인트처럼 동작)</li>
            <li><strong>Resume (F9)</strong> - 다음 브레이크포인트까지 실행을 계속함</li>
          </ul>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-sitemap"></i> Step 명령어 동작 흐름</span>
            </div>
            <pre><code>{`// 브레이크포인트가 Line A에 설정된 경우:

public static void main(String[] args) {
    int x = 10;              // Line A ← 여기서 멈춤
    int y = multiply(x, 3); // Line B
    System.out.println(y);   // Line C
}

static int multiply(int a, int b) {
    int result = a * b;      // Line D
    return result;            // Line E
}

// Line A에서 멈춘 상태에서:
// F8 (Step Over)  → Line B로 이동 (multiply 내부로 들어가지 않음)
// F7 (Step Into)  → Line D로 이동 (multiply 내부로 진입!)
// Line D에서 Shift+F8 (Step Out) → Line B로 돌아감 (multiply 실행 완료 후)`}</code></pre>
          </div>

          <h3>Watch와 Evaluate Expression</h3>
          <p>디버깅 중 변수 값을 확인하고 표현식을 실행하는 강력한 기능입니다.</p>
          <ul>
            <li><strong>Variables 패널</strong> - 현재 스코프의 모든 변수 값을 자동으로 표시</li>
            <li><strong>Watches</strong> - 특정 표현식의 값을 지속적으로 감시 (+ 버튼으로 추가)</li>
            <li><strong>Evaluate Expression (Alt+F8)</strong> - 임의의 Java 코드를 실행하고 결과를 확인</li>
          </ul>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-search"></i> Evaluate Expression 활용 예시</span>
            </div>
            <pre><code>{`// 디버깅 중 Alt+F8을 눌러 다음 표현식들을 실행할 수 있습니다:

// 1. 변수 값 확인
numbers.size()                    // → 3
numbers.get(0)                    // → 10

// 2. 복잡한 표현식 계산
numbers.stream().mapToInt(i -> i).sum()  // → 60

// 3. 조건 확인
sum > 50                          // → true

// 4. 메서드 호출
numbers.contains(20)              // → true

// 5. 객체 상태 변경 (주의! 실제 값이 변경됨)
numbers.add(40)                   // 디버깅 중 리스트에 40 추가됨

// 6. 문자열 조작
String.format("합계: %d, 평균: %.1f", sum, (double)sum/numbers.size())`}</code></pre>
          </div>

          <h3>조건부 브레이크포인트</h3>
          <p>
            반복문이나 대량 데이터를 처리할 때, 모든 반복마다 멈추면 비효율적입니다.
            조건부 브레이크포인트를 사용하면 특정 조건이 만족될 때만 실행이 멈춥니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 조건부 브레이크포인트 활용</span>
            </div>
            <pre><code>{`// 브레이크포인트 설정 후 우클릭 → Condition 입력

// 예시 1: 특정 값일 때만 멈추기
for (int i = 0; i < 1000; i++) {
    process(i);   // Condition: i == 500
}

// 예시 2: 특정 조건일 때만 멈추기
for (User user : users) {
    sendEmail(user);  // Condition: user.getName().equals("김영희")
}

// 예시 3: N번째 반복에서 멈추기
// Condition: hitCount (브레이크포인트 설정에서 Pass count를 5로 설정)

// 예시 4: 로깅 브레이크포인트 (멈추지 않고 로그만 출력)
// 브레이크포인트 우클릭 → Suspend 체크 해제 → Evaluate and log 체크
// 로그 표현식: "현재 i 값: " + i`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 로깅 브레이크포인트의 활용</div>
            <p>
              <strong>Suspend를 해제</strong>하고 <strong>Evaluate and log</strong>를 설정하면,
              코드를 수정하지 않고도 원하는 위치에서 로그를 출력할 수 있습니다.
              이는 <code>System.out.println()</code>을 추가하고 제거하는 것보다 훨씬 효율적이며,
              프로덕션 코드를 전혀 건드리지 않아도 됩니다.
            </p>
          </div>

          <h2>7. 추천 플러그인</h2>
          <p>
            IntelliJ IDEA의 기능을 더욱 확장해주는 필수 플러그인들을 소개합니다.
            <strong>File → Settings → Plugins → Marketplace</strong>에서 검색하여 설치할 수 있습니다.
          </p>

          <table>
            <thead>
              <tr><th>플러그인</th><th>기능</th><th>추천도</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Lombok</strong></td>
                <td>@Getter, @Setter, @Builder 등 어노테이션으로 보일러플레이트 코드 제거</td>
                <td>필수</td>
              </tr>
              <tr>
                <td><strong>Rainbow Brackets</strong></td>
                <td>중첩된 괄호를 색상별로 구분하여 가독성 향상</td>
                <td>강력 추천</td>
              </tr>
              <tr>
                <td><strong>Key Promoter X</strong></td>
                <td>마우스 클릭 시 해당 단축키를 팝업으로 알려줌. 단축키 학습에 최고</td>
                <td>강력 추천</td>
              </tr>
              <tr>
                <td><strong>.ignore</strong></td>
                <td>.gitignore 파일 문법 강조, 자동완성, 템플릿 제공</td>
                <td>추천</td>
              </tr>
              <tr>
                <td><strong>Presentation Assistant</strong></td>
                <td>사용한 단축키를 화면 하단에 표시. 라이브 코딩이나 강의에 유용</td>
                <td>추천</td>
              </tr>
              <tr>
                <td><strong>String Manipulation</strong></td>
                <td>camelCase, snake_case, UPPER_CASE 등 문자열 변환</td>
                <td>추천</td>
              </tr>
              <tr>
                <td><strong>GenerateAllSetter</strong></td>
                <td>객체의 모든 setter를 한 번에 생성</td>
                <td>추천</td>
              </tr>
              <tr>
                <td><strong>GitToolBox</strong></td>
                <td>에디터에서 Git blame 표시, 자동 fetch 등 Git 기능 강화</td>
                <td>추천</td>
              </tr>
              <tr>
                <td><strong>SonarLint</strong></td>
                <td>코드 품질 분석, 잠재적 버그 및 코드 스멜 감지</td>
                <td>추천</td>
              </tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> Lombok 플러그인 활용 예시</span>
            </div>
            <pre><code>{`import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;

// Lombok 사용 전 - 수십 줄의 보일러플레이트 코드가 필요
// Lombok 사용 후 - 어노테이션 몇 줄로 해결!

@Getter                    // 모든 필드의 getter 자동 생성
@Setter                    // 모든 필드의 setter 자동 생성
@ToString                  // toString() 자동 생성
@AllArgsConstructor        // 모든 필드를 받는 생성자
@NoArgsConstructor         // 기본 생성자
@Builder                   // 빌더 패턴 자동 생성
public class Student {
    private String name;
    private int age;
    private String email;
}

// 사용 예시
Student student = Student.builder()
        .name("김철수")
        .age(20)
        .email("kim@example.com")
        .build();

System.out.println(student.getName());   // getter 사용
System.out.println(student);             // toString 자동 호출`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> Lombok 사용 시 주의사항</div>
            <p>
              Lombok을 사용하려면 IntelliJ에 <strong>Lombok 플러그인</strong>을 설치하고,
              <strong>Settings → Build → Compiler → Annotation Processors</strong>에서
              <strong>Enable annotation processing</strong>을 반드시 활성화해야 합니다.
              또한 프로젝트의 Maven/Gradle에 Lombok 의존성을 추가해야 합니다.
            </p>
          </div>

          <h2>8. 생산성을 높이는 추가 팁</h2>
          <h3>멀티 커서와 다중 선택</h3>
          <ul>
            <li><strong>Alt + 클릭</strong> - 여러 위치에 커서 추가</li>
            <li><strong>Ctrl + Alt + Shift + 클릭</strong> - 열(Column) 선택 모드</li>
            <li><strong>Alt + J</strong> (Mac: Ctrl+G) - 같은 단어 하나씩 추가 선택</li>
            <li><strong>Ctrl + Alt + Shift + J</strong> (Mac: Ctrl+Cmd+G) - 같은 단어 전체 선택</li>
          </ul>

          <h3>유용한 기능 모음</h3>
          <table>
            <thead>
              <tr><th>기능</th><th>단축키 (Windows)</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Quick Fix</strong></td><td>Alt + Enter</td><td>오류 수정, 코드 개선 제안 (가장 많이 쓰는 단축키!)</td></tr>
              <tr><td><strong>Surround With</strong></td><td>Ctrl + Alt + T</td><td>선택한 코드를 try-catch, if, for 등으로 감싸기</td></tr>
              <tr><td><strong>Find Action</strong></td><td>Ctrl + Shift + A</td><td>모든 IDE 액션을 이름으로 검색하여 실행</td></tr>
              <tr><td><strong>Parameter Info</strong></td><td>Ctrl + P</td><td>메서드 파라미터 정보 표시</td></tr>
              <tr><td><strong>Quick Documentation</strong></td><td>Ctrl + Q</td><td>Javadoc 빠르게 보기</td></tr>
              <tr><td><strong>Local History</strong></td><td>우클릭 → Local History</td><td>Git 없이도 파일 변경 이력 확인 및 복구</td></tr>
              <tr><td><strong>Scratch File</strong></td><td>Ctrl + Alt + Shift + Insert</td><td>임시 파일 생성 (빠른 코드 테스트용)</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> Alt+Enter의 힘</div>
            <p>
              <strong>Alt+Enter</strong>는 IntelliJ에서 가장 강력한 단축키입니다. 빨간 줄(오류)이든 노란 줄(경고)이든,
              커서를 올려놓고 Alt+Enter를 누르면 IntelliJ가 해결 방법을 제시합니다.
              import 추가, 변수 생성, 메서드 생성, 타입 변환, 코드 간소화 등 거의 모든 상황에서 활용할 수 있습니다.
              의심이 들면 일단 <strong>Alt+Enter</strong>를 눌러보세요!
            </p>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>IntelliJ IDEA Community Edition을 설치하고, JDK 21을 다운로드하여 설정해보세요.</li>
              <li>Maven 기반의 Java 프로젝트를 생성하고, <code>Main.java</code>에서 "Hello IntelliJ!"를 출력하는 프로그램을 작성하세요.</li>
              <li>
                다음 라이브 템플릿을 사용하여 코드를 빠르게 작성해보세요:
                <code>psvm</code>, <code>sout</code>, <code>fori</code>, <code>soutv</code>
              </li>
              <li>
                <code>Student</code> 클래스를 만들고, <code>Alt+Insert</code>를 사용하여
                생성자, getter/setter, toString(), equals(), hashCode()를 자동 생성해보세요.
              </li>
              <li>
                아래 코드에 브레이크포인트를 설정하고, 디버그 모드로 실행하여
                Step Over, Step Into, Step Out을 연습해보세요. Watch에 <code>list.size()</code>를 추가해보세요.
              </li>
              <li>
                <strong>Key Promoter X</strong>와 <strong>Rainbow Brackets</strong> 플러그인을 설치하고,
                10분간 마우스만 사용하여 코딩하면서 알림되는 단축키를 메모해보세요.
              </li>
              <li>
                커스텀 라이브 템플릿을 하나 만들어보세요. 예: <code>logd</code> → <code>System.out.println("[DEBUG] " + );</code>
              </li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('PR01') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('PR01')}
            >
              {isLessonCompleted('PR01') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/practical"><i className="fas fa-arrow-left"></i> 실무 과정 목록</Link>
            <Link to="/practical/02">다음: Git과 GitHub <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
