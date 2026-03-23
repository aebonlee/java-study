import{u as n,r as l,j as e,L as s}from"./index-CEQBFVPE.js";function d(){const{completeLesson:r,isLessonCompleted:i}=n();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/practical",children:"실무 Java"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 01"})]}),e.jsx("h1",{children:"Lesson 01. IntelliJ IDEA 완벽 가이드"}),e.jsx("p",{children:"설치, 프로젝트 생성, 디버깅, 단축키, 플러그인을 배웁니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. IntelliJ IDEA 소개"}),e.jsxs("p",{children:[e.jsx("strong",{children:"IntelliJ IDEA"}),"는 체코의 소프트웨어 회사 ",e.jsx("strong",{children:"JetBrains"}),"가 개발한 Java 통합 개발 환경(IDE)입니다. 2001년 처음 출시된 이후, 전 세계 Java 개발자들에게 가장 강력하고 생산적인 IDE로 자리매김했습니다. Google의 Android Studio도 IntelliJ IDEA를 기반으로 만들어졌을 정도로 그 기술력이 검증되었습니다."]}),e.jsxs("p",{children:["IntelliJ IDEA는 단순한 텍스트 편집기가 아닙니다. 코드를 깊이 이해하고, 문맥에 맞는 자동 완성을 제공하며, 잠재적인 버그를 사전에 감지하고, 리팩토링을 안전하게 수행할 수 있도록 도와줍니다. Eclipse나 VS Code와 비교했을 때, IntelliJ의 가장 큰 장점은 ",e.jsx("strong",{children:'"지능적인 코드 분석"'}),"입니다."]}),e.jsx("h3",{children:"Community vs Ultimate 비교"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"Community (무료)"}),e.jsx("th",{children:"Ultimate (유료)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Java / Kotlin 개발"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Maven / Gradle 지원"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Git / VCS 통합"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"디버거 / 테스트 러너"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Spring / Spring Boot"})}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"웹 개발 (HTML/CSS/JS)"})}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"데이터베이스 도구"})}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"서블릿 / JSP / JPA"})}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Docker / Kubernetes"})}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"가격"})}),e.jsx("td",{children:"무료"}),e.jsx("td",{children:"연 $149.90 (개인)"})]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 어떤 에디션을 선택할까?"]}),e.jsxs("p",{children:["Java 기본 학습이 목적이라면 ",e.jsx("strong",{children:"Community Edition"}),"으로 충분합니다. Spring Boot, 웹 개발, 데이터베이스 연동까지 하려면 ",e.jsx("strong",{children:"Ultimate Edition"}),"이 필요합니다. 학생이라면 JetBrains 학생 라이선스를 통해 Ultimate를 무료로 사용할 수 있습니다."]})]}),e.jsx("h3",{children:"왜 IntelliJ IDEA를 쓰는가?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"지능적인 코드 완성"})," - 문맥을 파악하여 가장 적합한 코드를 먼저 추천합니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"즉각적인 오류 감지"})," - 코드를 작성하는 즉시 문법/논리 오류를 표시합니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"강력한 리팩토링"})," - 변수명 변경, 메서드 추출 등을 안전하게 수행합니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"내장 도구"})," - 터미널, Git, 데이터베이스, HTTP 클라이언트가 모두 내장되어 있습니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"에르고노믹 디자인"})," - 불필요한 동작을 최소화하여 개발 생산성을 극대화합니다"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"풍부한 플러그인 생태계"})," - 수천 개의 플러그인으로 기능을 확장할 수 있습니다"]})]}),e.jsx("h2",{children:"2. 설치와 초기 설정"}),e.jsx("h3",{children:"다운로드 및 설치"}),e.jsx("p",{children:"IntelliJ IDEA는 JetBrains 공식 사이트 또는 JetBrains Toolbox App을 통해 설치할 수 있습니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-terminal"})," 설치 방법"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 방법 1: 공식 사이트에서 직접 다운로드
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
sudo snap install intellij-idea-community --classic`})})]}),e.jsx("h3",{children:"JDK 설정"}),e.jsx("p",{children:"IntelliJ IDEA에서 Java 프로젝트를 실행하려면 JDK가 필요합니다. IntelliJ는 JDK를 자동으로 다운로드할 수 있습니다."}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"File → Project Structure → SDKs"}),"에서 JDK 추가"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Download JDK"})," 버튼 클릭"]}),e.jsxs("li",{children:["벤더 선택: ",e.jsx("strong",{children:"Oracle OpenJDK"}),", ",e.jsx("strong",{children:"Amazon Corretto"}),", ",e.jsx("strong",{children:"Temurin(Adoptium)"})," 등"]}),e.jsx("li",{children:"버전 선택: Java 17 또는 Java 21 LTS 권장"}),e.jsxs("li",{children:["다운로드 경로 확인 후 ",e.jsx("strong",{children:"Download"})," 클릭"]})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," JDK 버전 선택 가이드"]}),e.jsxs("p",{children:["실무에서는 LTS(Long-Term Support) 버전을 사용합니다. 현재 LTS 버전은 ",e.jsx("strong",{children:"Java 17"}),"과 ",e.jsx("strong",{children:"Java 21"}),"입니다. 학습 목적이라면 최신 LTS인 Java 21을 권장합니다."]})]}),e.jsx("h3",{children:"테마와 폰트 설정"}),e.jsx("p",{children:"장시간 코딩할 때 눈의 피로를 줄이려면 적절한 테마와 폰트 설정이 중요합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-cog"})," 추천 설정 경로"]})}),e.jsx("pre",{children:e.jsx("code",{children:`# 테마 설정
File → Settings → Appearance & Behavior → Appearance
  → Theme: "Darcula" (다크) 또는 "IntelliJ Light" (라이트)

# 에디터 폰트 설정
File → Settings → Editor → Font
  → Font: "JetBrains Mono" (IntelliJ 전용 폰트, 기본 설치됨)
  → Size: 14~16 권장
  → Line spacing: 1.2~1.4

# 콘솔 폰트 설정
File → Settings → Editor → Color Scheme → Console Font
  → 에디터 폰트와 동일하게 설정 권장`})})]}),e.jsx("h3",{children:"추천 초기 설정"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"설정 항목"}),e.jsx("th",{children:"경로"}),e.jsx("th",{children:"추천 값"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"자동 저장"})}),e.jsx("td",{children:"Settings → Appearance → System Settings"}),e.jsx("td",{children:"Save files when switching to a different application: ON"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"자동 임포트"})}),e.jsx("td",{children:"Settings → Editor → General → Auto Import"}),e.jsx("td",{children:"Add unambiguous imports on the fly: ON"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"코드 접기"})}),e.jsx("td",{children:"Settings → Editor → General → Code Folding"}),e.jsx("td",{children:"Imports, One-line methods: ON"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"탭 제한"})}),e.jsx("td",{children:"Settings → Editor → General → Editor Tabs"}),e.jsx("td",{children:"Tab limit: 15~20"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"인코딩"})}),e.jsx("td",{children:"Settings → Editor → File Encodings"}),e.jsx("td",{children:"Project Encoding: UTF-8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"줄 번호"})}),e.jsx("td",{children:"Settings → Editor → General → Appearance"}),e.jsx("td",{children:"Show line numbers: ON"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"공백 문자 표시"})}),e.jsx("td",{children:"Settings → Editor → General → Appearance"}),e.jsx("td",{children:"Show whitespaces: Trailing만 ON"})]})]})]}),e.jsx("h2",{children:"3. 프로젝트 생성과 구조"}),e.jsx("h3",{children:"프로젝트 생성 방법"}),e.jsx("p",{children:"IntelliJ IDEA에서는 다양한 방식으로 Java 프로젝트를 생성할 수 있습니다."}),e.jsx("h3",{children:"순수 Java 프로젝트"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"File → New → Project"})," 선택"]}),e.jsxs("li",{children:["Language: ",e.jsx("strong",{children:"Java"}),", Build System: ",e.jsx("strong",{children:"IntelliJ"})," 선택"]}),e.jsxs("li",{children:["JDK 선택 후 ",e.jsx("strong",{children:"Create"})]})]}),e.jsx("h3",{children:"Maven 프로젝트"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," pom.xml (Maven 프로젝트 구조)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`<?xml version="1.0" encoding="UTF-8"?>
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
</project>`})})]}),e.jsx("h3",{children:"Gradle 프로젝트"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," build.gradle (Gradle 프로젝트 구조)"]})}),e.jsx("pre",{children:e.jsx("code",{children:`plugins {
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
}`})})]}),e.jsx("h3",{children:"프로젝트 디렉토리 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-folder-open"})," 표준 Java 프로젝트 구조"]})}),e.jsx("pre",{children:e.jsx("code",{children:`my-java-project/
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
└── .gitignore                ← Git 제외 파일 목록`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," .idea 폴더와 Git"]}),e.jsxs("p",{children:[e.jsx("code",{children:".idea/"})," 폴더에는 IntelliJ 프로젝트 설정이 저장됩니다. 팀 프로젝트에서는 ",e.jsx("code",{children:".gitignore"}),"에 ",e.jsx("code",{children:".idea/workspace.xml"}),"과 ",e.jsx("code",{children:".idea/tasks.xml"}),"은 제외하고, 나머지 설정 파일은 공유하는 것이 일반적입니다. 또는 ",e.jsx("code",{children:".idea/"})," 전체를 제외하고 빌드 도구(Maven/Gradle) 설정만 공유하는 방법도 있습니다."]})]}),e.jsx("h2",{children:"4. 핵심 단축키 마스터"}),e.jsx("p",{children:"IntelliJ IDEA의 생산성은 단축키 활용 능력에 달려 있습니다. 마우스 없이 코딩할 수 있을 정도로 단축키를 익히면, 개발 속도가 2~3배 향상됩니다."}),e.jsx("h3",{children:"편집 단축키"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"Windows / Linux"}),e.jsx("th",{children:"macOS"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"코드 자동 완성"})}),e.jsx("td",{children:"Ctrl + Space"}),e.jsx("td",{children:"Ctrl + Space"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"스마트 자동 완성"})}),e.jsx("td",{children:"Ctrl + Shift + Space"}),e.jsx("td",{children:"Ctrl + Shift + Space"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"코드 생성 (Generate)"})}),e.jsx("td",{children:"Alt + Insert"}),e.jsx("td",{children:"Cmd + N"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"줄 복제"})}),e.jsx("td",{children:"Ctrl + D"}),e.jsx("td",{children:"Cmd + D"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"줄 삭제"})}),e.jsx("td",{children:"Ctrl + Y"}),e.jsx("td",{children:"Cmd + Backspace"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"줄 이동 (위/아래)"})}),e.jsx("td",{children:"Alt + Shift + Up/Down"}),e.jsx("td",{children:"Option + Shift + Up/Down"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"코드 정렬 (포맷팅)"})}),e.jsx("td",{children:"Ctrl + Alt + L"}),e.jsx("td",{children:"Cmd + Option + L"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Import 정리"})}),e.jsx("td",{children:"Ctrl + Alt + O"}),e.jsx("td",{children:"Ctrl + Option + O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"주석 토글 (한 줄)"})}),e.jsx("td",{children:"Ctrl + /"}),e.jsx("td",{children:"Cmd + /"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"주석 토글 (블록)"})}),e.jsx("td",{children:"Ctrl + Shift + /"}),e.jsx("td",{children:"Cmd + Option + /"})]})]})]}),e.jsx("h3",{children:"탐색 단축키"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"Windows / Linux"}),e.jsx("th",{children:"macOS"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"클래스 검색"})}),e.jsx("td",{children:"Ctrl + N"}),e.jsx("td",{children:"Cmd + O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"파일 검색"})}),e.jsx("td",{children:"Ctrl + Shift + N"}),e.jsx("td",{children:"Cmd + Shift + O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"심볼 검색"})}),e.jsx("td",{children:"Ctrl + Alt + Shift + N"}),e.jsx("td",{children:"Cmd + Option + O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"전체 검색 (Search Everywhere)"})}),e.jsx("td",{children:"Double Shift"}),e.jsx("td",{children:"Double Shift"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"선언부로 이동"})}),e.jsx("td",{children:"Ctrl + B"}),e.jsx("td",{children:"Cmd + B"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"구현체로 이동"})}),e.jsx("td",{children:"Ctrl + Alt + B"}),e.jsx("td",{children:"Cmd + Option + B"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"사용처 찾기"})}),e.jsx("td",{children:"Alt + F7"}),e.jsx("td",{children:"Option + F7"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"최근 파일"})}),e.jsx("td",{children:"Ctrl + E"}),e.jsx("td",{children:"Cmd + E"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"파일 구조 보기"})}),e.jsx("td",{children:"Ctrl + F12"}),e.jsx("td",{children:"Cmd + F12"})]})]})]}),e.jsx("h3",{children:"리팩토링 단축키"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"Windows / Linux"}),e.jsx("th",{children:"macOS"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"이름 변경 (Rename)"})}),e.jsx("td",{children:"Shift + F6"}),e.jsx("td",{children:"Shift + F6"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"메서드 추출 (Extract Method)"})}),e.jsx("td",{children:"Ctrl + Alt + M"}),e.jsx("td",{children:"Cmd + Option + M"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"변수 추출 (Extract Variable)"})}),e.jsx("td",{children:"Ctrl + Alt + V"}),e.jsx("td",{children:"Cmd + Option + V"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"상수 추출 (Extract Constant)"})}),e.jsx("td",{children:"Ctrl + Alt + C"}),e.jsx("td",{children:"Cmd + Option + C"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"필드 추출 (Extract Field)"})}),e.jsx("td",{children:"Ctrl + Alt + F"}),e.jsx("td",{children:"Cmd + Option + F"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"리팩토링 메뉴"})}),e.jsx("td",{children:"Ctrl + Alt + Shift + T"}),e.jsx("td",{children:"Ctrl + T"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"인라인 (Inline)"})}),e.jsx("td",{children:"Ctrl + Alt + N"}),e.jsx("td",{children:"Cmd + Option + N"})]})]})]}),e.jsx("h3",{children:"실행 / 디버깅 단축키"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"Windows / Linux"}),e.jsx("th",{children:"macOS"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"실행"})}),e.jsx("td",{children:"Shift + F10"}),e.jsx("td",{children:"Ctrl + R"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"디버그 실행"})}),e.jsx("td",{children:"Shift + F9"}),e.jsx("td",{children:"Ctrl + D"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"브레이크포인트 토글"})}),e.jsx("td",{children:"Ctrl + F8"}),e.jsx("td",{children:"Cmd + F8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Step Over"})}),e.jsx("td",{children:"F8"}),e.jsx("td",{children:"F8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Step Into"})}),e.jsx("td",{children:"F7"}),e.jsx("td",{children:"F7"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Step Out"})}),e.jsx("td",{children:"Shift + F8"}),e.jsx("td",{children:"Shift + F8"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Resume (계속 실행)"})}),e.jsx("td",{children:"F9"}),e.jsx("td",{children:"Cmd + Option + R"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Evaluate Expression"})}),e.jsx("td",{children:"Alt + F8"}),e.jsx("td",{children:"Option + F8"})]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 단축키 학습 팁"]}),e.jsxs("p",{children:["모든 단축키를 한 번에 외우려 하지 마세요. 매일 2~3개씩 새로운 단축키를 연습하세요.",e.jsx("strong",{children:"Key Promoter X"})," 플러그인을 설치하면, 마우스로 메뉴를 클릭할 때마다 해당 단축키를 알려줍니다. 가장 중요한 단축키 3개만 먼저 익히세요: ",e.jsx("strong",{children:"Double Shift"})," (전체 검색),",e.jsx("strong",{children:"Ctrl+Shift+A"})," (액션 검색), ",e.jsx("strong",{children:"Alt+Enter"})," (빠른 수정)."]})]}),e.jsx("h2",{children:"5. 코드 작성 도구"}),e.jsx("p",{children:"IntelliJ IDEA는 반복적인 코드 작성을 최소화하는 다양한 도구를 제공합니다. 이 도구들을 잘 활용하면 코딩 속도가 크게 향상됩니다."}),e.jsx("h3",{children:"라이브 템플릿 (Live Templates)"}),e.jsx("p",{children:"자주 사용하는 코드 패턴을 약어로 입력하면 자동으로 전체 코드가 생성됩니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"약어"}),e.jsx("th",{children:"생성되는 코드"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"psvm"})}),e.jsx("td",{children:e.jsxs("code",{children:["public static void main(String[] args) ","{}"]})}),e.jsx("td",{children:"메인 메서드"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sout"})}),e.jsx("td",{children:e.jsx("code",{children:"System.out.println();"})}),e.jsx("td",{children:"표준 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"soutv"})}),e.jsx("td",{children:e.jsx("code",{children:'System.out.println("변수 = " + 변수);'})}),e.jsx("td",{children:"변수 값 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"soutp"})}),e.jsx("td",{children:e.jsx("code",{children:'System.out.println("메서드명::파라미터");'})}),e.jsx("td",{children:"파라미터 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"soutm"})}),e.jsx("td",{children:e.jsx("code",{children:'System.out.println("클래스.메서드");'})}),e.jsx("td",{children:"메서드명 출력"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fori"})}),e.jsx("td",{children:e.jsxs("code",{children:["for (int i = 0; i < ; i++) ","{}"]})}),e.jsx("td",{children:"인덱스 for 루프"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"iter"})}),e.jsx("td",{children:e.jsxs("code",{children:["for (Type item : collection) ","{}"]})}),e.jsx("td",{children:"향상된 for 루프"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ifn"})}),e.jsx("td",{children:e.jsxs("code",{children:["if (var == null) ","{}"]})}),e.jsx("td",{children:"null 체크"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"inn"})}),e.jsx("td",{children:e.jsxs("code",{children:["if (var != null) ","{}"]})}),e.jsx("td",{children:"not null 체크"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"thr"})}),e.jsx("td",{children:e.jsx("code",{children:"throw new"})}),e.jsx("td",{children:"예외 던지기"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 라이브 템플릿 사용 예시"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 1. psvm + Tab → 메인 메서드 자동 생성
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
// $CLASS$ → className() 함수 매핑`})})]}),e.jsx("h3",{children:"코드 자동 완성"}),e.jsx("p",{children:"IntelliJ의 자동 완성은 세 가지 레벨로 동작합니다."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Basic Completion (Ctrl+Space)"})," - 현재 컨텍스트에서 가능한 모든 항목 표시"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Smart Completion (Ctrl+Shift+Space)"})," - 현재 타입에 맞는 항목만 필터링하여 표시"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Statement Completion (Ctrl+Shift+Enter)"})," - 현재 문장을 자동으로 완성 (세미콜론, 중괄호 등 추가)"]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 자동 완성 활용 예시"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Postfix Completion - 변수 뒤에 . 을 찍고 키워드 입력
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
// → try { inputStream.read(); } catch (IOException e) { }`})})]}),e.jsx("h3",{children:"코드 제네레이션 (Alt+Insert / Cmd+N)"}),e.jsxs("p",{children:["클래스 내부에서 ",e.jsx("strong",{children:"Alt+Insert"})," (Mac: Cmd+N)을 누르면 자동으로 생성할 수 있는 코드 목록이 나타납니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 코드 제네레이션 예시 - Student.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Student {
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
}`})})]}),e.jsx("h2",{children:"6. 디버깅 완벽 가이드"}),e.jsxs("p",{children:["디버깅은 개발자에게 가장 중요한 기술 중 하나입니다. IntelliJ IDEA의 디버거는 업계 최고 수준의 기능을 제공합니다.",e.jsx("code",{children:"System.out.println()"}),"으로 디버깅하는 습관을 버리고, 디버거를 제대로 활용해 봅시다."]}),e.jsx("h3",{children:"브레이크포인트 종류"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"종류"}),e.jsx("th",{children:"설명"}),e.jsx("th",{children:"사용법"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Line Breakpoint"})}),e.jsx("td",{children:"특정 줄에서 멈춤 (가장 기본)"}),e.jsx("td",{children:"줄 번호 옆 클릭"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Method Breakpoint"})}),e.jsx("td",{children:"메서드 진입/종료 시 멈춤"}),e.jsx("td",{children:"메서드 선언 줄에 설정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Field Watchpoint"})}),e.jsx("td",{children:"필드 값이 변경될 때 멈춤"}),e.jsx("td",{children:"필드 선언 줄에 설정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Exception Breakpoint"})}),e.jsx("td",{children:"특정 예외 발생 시 멈춤"}),e.jsx("td",{children:"Run → View Breakpoints에서 설정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Conditional Breakpoint"})}),e.jsx("td",{children:"조건이 true일 때만 멈춤"}),e.jsx("td",{children:"브레이크포인트 우클릭 후 조건 입력"})]})]})]}),e.jsx("h3",{children:"디버깅 기본 흐름"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 디버깅 실습 코드 - DebugExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import java.util.ArrayList;
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
}`})})]}),e.jsx("h3",{children:"Step 명령어 이해"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Step Over (F8)"})," - 현재 줄을 실행하고 다음 줄로 이동. 메서드 호출이 있어도 내부로 들어가지 않음"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Step Into (F7)"})," - 메서드 호출이 있으면 해당 메서드 내부로 들어감"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Step Out (Shift+F8)"})," - 현재 메서드를 끝까지 실행하고 호출한 곳으로 돌아감"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Run to Cursor (Alt+F9)"})," - 커서 위치까지 실행 (임시 브레이크포인트처럼 동작)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Resume (F9)"})," - 다음 브레이크포인트까지 실행을 계속함"]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-sitemap"})," Step 명령어 동작 흐름"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 브레이크포인트가 Line A에 설정된 경우:

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
// Line D에서 Shift+F8 (Step Out) → Line B로 돌아감 (multiply 실행 완료 후)`})})]}),e.jsx("h3",{children:"Watch와 Evaluate Expression"}),e.jsx("p",{children:"디버깅 중 변수 값을 확인하고 표현식을 실행하는 강력한 기능입니다."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Variables 패널"})," - 현재 스코프의 모든 변수 값을 자동으로 표시"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Watches"})," - 특정 표현식의 값을 지속적으로 감시 (+ 버튼으로 추가)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Evaluate Expression (Alt+F8)"})," - 임의의 Java 코드를 실행하고 결과를 확인"]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-search"})," Evaluate Expression 활용 예시"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 디버깅 중 Alt+F8을 눌러 다음 표현식들을 실행할 수 있습니다:

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
String.format("합계: %d, 평균: %.1f", sum, (double)sum/numbers.size())`})})]}),e.jsx("h3",{children:"조건부 브레이크포인트"}),e.jsx("p",{children:"반복문이나 대량 데이터를 처리할 때, 모든 반복마다 멈추면 비효율적입니다. 조건부 브레이크포인트를 사용하면 특정 조건이 만족될 때만 실행이 멈춥니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 조건부 브레이크포인트 활용"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 브레이크포인트 설정 후 우클릭 → Condition 입력

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
// 로그 표현식: "현재 i 값: " + i`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 로깅 브레이크포인트의 활용"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Suspend를 해제"}),"하고 ",e.jsx("strong",{children:"Evaluate and log"}),"를 설정하면, 코드를 수정하지 않고도 원하는 위치에서 로그를 출력할 수 있습니다. 이는 ",e.jsx("code",{children:"System.out.println()"}),"을 추가하고 제거하는 것보다 훨씬 효율적이며, 프로덕션 코드를 전혀 건드리지 않아도 됩니다."]})]}),e.jsx("h2",{children:"7. 추천 플러그인"}),e.jsxs("p",{children:["IntelliJ IDEA의 기능을 더욱 확장해주는 필수 플러그인들을 소개합니다.",e.jsx("strong",{children:"File → Settings → Plugins → Marketplace"}),"에서 검색하여 설치할 수 있습니다."]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"플러그인"}),e.jsx("th",{children:"기능"}),e.jsx("th",{children:"추천도"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Lombok"})}),e.jsx("td",{children:"@Getter, @Setter, @Builder 등 어노테이션으로 보일러플레이트 코드 제거"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Rainbow Brackets"})}),e.jsx("td",{children:"중첩된 괄호를 색상별로 구분하여 가독성 향상"}),e.jsx("td",{children:"강력 추천"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Key Promoter X"})}),e.jsx("td",{children:"마우스 클릭 시 해당 단축키를 팝업으로 알려줌. 단축키 학습에 최고"}),e.jsx("td",{children:"강력 추천"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:".ignore"})}),e.jsx("td",{children:".gitignore 파일 문법 강조, 자동완성, 템플릿 제공"}),e.jsx("td",{children:"추천"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Presentation Assistant"})}),e.jsx("td",{children:"사용한 단축키를 화면 하단에 표시. 라이브 코딩이나 강의에 유용"}),e.jsx("td",{children:"추천"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"String Manipulation"})}),e.jsx("td",{children:"camelCase, snake_case, UPPER_CASE 등 문자열 변환"}),e.jsx("td",{children:"추천"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GenerateAllSetter"})}),e.jsx("td",{children:"객체의 모든 setter를 한 번에 생성"}),e.jsx("td",{children:"추천"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"GitToolBox"})}),e.jsx("td",{children:"에디터에서 Git blame 표시, 자동 fetch 등 Git 기능 강화"}),e.jsx("td",{children:"추천"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"SonarLint"})}),e.jsx("td",{children:"코드 품질 분석, 잠재적 버그 및 코드 스멜 감지"}),e.jsx("td",{children:"추천"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Lombok 플러그인 활용 예시"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import lombok.Getter;
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
System.out.println(student);             // toString 자동 호출`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," Lombok 사용 시 주의사항"]}),e.jsxs("p",{children:["Lombok을 사용하려면 IntelliJ에 ",e.jsx("strong",{children:"Lombok 플러그인"}),"을 설치하고,",e.jsx("strong",{children:"Settings → Build → Compiler → Annotation Processors"}),"에서",e.jsx("strong",{children:"Enable annotation processing"}),"을 반드시 활성화해야 합니다. 또한 프로젝트의 Maven/Gradle에 Lombok 의존성을 추가해야 합니다."]})]}),e.jsx("h2",{children:"8. 생산성을 높이는 추가 팁"}),e.jsx("h3",{children:"멀티 커서와 다중 선택"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Alt + 클릭"})," - 여러 위치에 커서 추가"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ctrl + Alt + Shift + 클릭"})," - 열(Column) 선택 모드"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Alt + J"})," (Mac: Ctrl+G) - 같은 단어 하나씩 추가 선택"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Ctrl + Alt + Shift + J"})," (Mac: Ctrl+Cmd+G) - 같은 단어 전체 선택"]})]}),e.jsx("h3",{children:"유용한 기능 모음"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"기능"}),e.jsx("th",{children:"단축키 (Windows)"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Quick Fix"})}),e.jsx("td",{children:"Alt + Enter"}),e.jsx("td",{children:"오류 수정, 코드 개선 제안 (가장 많이 쓰는 단축키!)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Surround With"})}),e.jsx("td",{children:"Ctrl + Alt + T"}),e.jsx("td",{children:"선택한 코드를 try-catch, if, for 등으로 감싸기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Find Action"})}),e.jsx("td",{children:"Ctrl + Shift + A"}),e.jsx("td",{children:"모든 IDE 액션을 이름으로 검색하여 실행"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Parameter Info"})}),e.jsx("td",{children:"Ctrl + P"}),e.jsx("td",{children:"메서드 파라미터 정보 표시"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Quick Documentation"})}),e.jsx("td",{children:"Ctrl + Q"}),e.jsx("td",{children:"Javadoc 빠르게 보기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Local History"})}),e.jsx("td",{children:"우클릭 → Local History"}),e.jsx("td",{children:"Git 없이도 파일 변경 이력 확인 및 복구"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Scratch File"})}),e.jsx("td",{children:"Ctrl + Alt + Shift + Insert"}),e.jsx("td",{children:"임시 파일 생성 (빠른 코드 테스트용)"})]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," Alt+Enter의 힘"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Alt+Enter"}),"는 IntelliJ에서 가장 강력한 단축키입니다. 빨간 줄(오류)이든 노란 줄(경고)이든, 커서를 올려놓고 Alt+Enter를 누르면 IntelliJ가 해결 방법을 제시합니다. import 추가, 변수 생성, 메서드 생성, 타입 변환, 코드 간소화 등 거의 모든 상황에서 활용할 수 있습니다. 의심이 들면 일단 ",e.jsx("strong",{children:"Alt+Enter"}),"를 눌러보세요!"]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"IntelliJ IDEA Community Edition을 설치하고, JDK 21을 다운로드하여 설정해보세요."}),e.jsxs("li",{children:["Maven 기반의 Java 프로젝트를 생성하고, ",e.jsx("code",{children:"Main.java"}),'에서 "Hello IntelliJ!"를 출력하는 프로그램을 작성하세요.']}),e.jsxs("li",{children:["다음 라이브 템플릿을 사용하여 코드를 빠르게 작성해보세요:",e.jsx("code",{children:"psvm"}),", ",e.jsx("code",{children:"sout"}),", ",e.jsx("code",{children:"fori"}),", ",e.jsx("code",{children:"soutv"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"Student"})," 클래스를 만들고, ",e.jsx("code",{children:"Alt+Insert"}),"를 사용하여 생성자, getter/setter, toString(), equals(), hashCode()를 자동 생성해보세요."]}),e.jsxs("li",{children:["아래 코드에 브레이크포인트를 설정하고, 디버그 모드로 실행하여 Step Over, Step Into, Step Out을 연습해보세요. Watch에 ",e.jsx("code",{children:"list.size()"}),"를 추가해보세요."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Key Promoter X"}),"와 ",e.jsx("strong",{children:"Rainbow Brackets"})," 플러그인을 설치하고, 10분간 마우스만 사용하여 코딩하면서 알림되는 단축키를 메모해보세요."]}),e.jsxs("li",{children:["커스텀 라이브 템플릿을 하나 만들어보세요. 예: ",e.jsx("code",{children:"logd"})," → ",e.jsx("code",{children:'System.out.println("[DEBUG] " + );'})]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${i("PR01")?"btn-primary":"btn-accent"}`,onClick:()=>r("PR01"),children:i("PR01")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/practical",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 실무 과정 목록"]}),e.jsxs(s,{to:"/practical/02",children:["다음: Git과 GitHub ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
