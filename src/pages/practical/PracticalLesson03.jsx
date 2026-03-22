import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function PracticalLesson03() {
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
            <span>Lesson 03</span>
          </div>
          <h1>Lesson 03. Maven과 Gradle 빌드 도구</h1>
          <p>pom.xml/build.gradle, 의존성, 라이프사이클, 멀티모듈을 다룹니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          {/* ========== 1. 빌드 도구란? ========== */}
          <h2>1. 빌드 도구란?</h2>
          <p>
            Java 프로젝트가 커지면 소스 코드를 컴파일하고, 외부 라이브러리를 관리하고, 테스트를 실행하고,
            배포 가능한 아티팩트(JAR, WAR)를 생성하는 일련의 과정이 복잡해집니다.
            <strong>빌드 도구(Build Tool)</strong>는 이러한 반복적인 빌드 과정을 자동화해 주는 소프트웨어입니다.
          </p>

          <h3>빌드 도구가 하는 일</h3>
          <ul>
            <li><strong>컴파일</strong> - .java 파일을 .class 파일로 변환</li>
            <li><strong>의존성 관리</strong> - 외부 라이브러리를 자동으로 다운로드하고 클래스패스에 추가</li>
            <li><strong>테스트 실행</strong> - JUnit 등의 단위/통합 테스트를 자동 실행</li>
            <li><strong>패키징</strong> - JAR, WAR 등의 배포 파일을 생성</li>
            <li><strong>배포</strong> - 원격 저장소나 서버에 아티팩트를 업로드</li>
            <li><strong>코드 품질 검사</strong> - 정적 분석, 코드 커버리지 리포트 생성</li>
          </ul>

          <h3>Maven vs Gradle 비교</h3>
          <table>
            <thead>
              <tr><th>비교 항목</th><th>Maven</th><th>Gradle</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>출시</strong></td><td>2004년</td><td>2012년</td></tr>
              <tr><td><strong>설정 파일</strong></td><td>pom.xml (XML)</td><td>build.gradle (Groovy/Kotlin DSL)</td></tr>
              <tr><td><strong>빌드 방식</strong></td><td>선언적 (Convention over Configuration)</td><td>선언적 + 프로그래밍 방식</td></tr>
              <tr><td><strong>빌드 속도</strong></td><td>상대적으로 느림</td><td>빠름 (증분 빌드, 캐싱, 데몬)</td></tr>
              <tr><td><strong>유연성</strong></td><td>플러그인 중심, 커스터마이징 제한적</td><td>높은 유연성, 커스텀 태스크 쉬움</td></tr>
              <tr><td><strong>학습 곡선</strong></td><td>낮음 (XML 기반 단순 구조)</td><td>중간 (Groovy/Kotlin 문법 필요)</td></tr>
              <tr><td><strong>멀티모듈</strong></td><td>부모-자식 POM 상속</td><td>settings.gradle로 유연하게 구성</td></tr>
              <tr><td><strong>주요 사용처</strong></td><td>전통적 기업 프로젝트</td><td>Spring Boot, Android, 최신 프로젝트</td></tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 어떤 빌드 도구를 선택할까?</div>
            <p>
              신규 프로젝트라면 <strong>Gradle</strong>을 권장합니다. Spring Boot의 공식 생성기(Spring Initializr)도
              Gradle을 기본값으로 제공하며, 빌드 속도와 유연성 면에서 장점이 큽니다. 단, 기존 레거시 프로젝트의
              대부분은 Maven을 사용하므로 두 도구 모두 익혀두는 것이 좋습니다.
            </p>
          </div>

          {/* ========== 2. Maven 기초 ========== */}
          <h2>2. Maven 기초</h2>
          <p>
            <strong>Apache Maven</strong>은 프로젝트 객체 모델(POM, Project Object Model) 개념을 기반으로 하는
            빌드 자동화 도구입니다. "Convention over Configuration" 철학을 따르며,
            정해진 디렉토리 구조와 빌드 라이프사이클을 사용합니다.
          </p>

          <h3>Maven 설치</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> Maven 설치 및 확인</span>
            </div>
            <pre><code>{`# 1. Apache Maven 다운로드
# https://maven.apache.org/download.cgi 에서 Binary zip archive 다운로드

# 2. 환경변수 설정
# MAVEN_HOME = C:\\apache-maven-3.9.x
# PATH에 %MAVEN_HOME%\\bin 추가

# 3. 설치 확인
mvn --version
# Apache Maven 3.9.6
# Maven home: C:\\apache-maven-3.9.6
# Java version: 17.0.x, vendor: Eclipse Adoptium

# 4. 프로젝트 생성 (archetype 사용)
mvn archetype:generate \\
  -DgroupId=com.example \\
  -DartifactId=my-app \\
  -DarchetypeArtifactId=maven-archetype-quickstart \\
  -DarchetypeVersion=1.4 \\
  -DinteractiveMode=false`}</code></pre>
          </div>

          <h3>pom.xml 기본 구조</h3>
          <p>
            <code>pom.xml</code>은 Maven 프로젝트의 핵심 설정 파일입니다. 프로젝트 좌표(coordinates),
            의존성, 플러그인, 빌드 설정 등 모든 정보를 담고 있습니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> pom.xml</span>
            </div>
            <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <!-- POM 모델 버전 (항상 4.0.0) -->
    <modelVersion>4.0.0</modelVersion>

    <!-- ===== 프로젝트 좌표 (GAV) ===== -->
    <groupId>com.example</groupId>       <!-- 조직/그룹 식별자 -->
    <artifactId>my-app</artifactId>      <!-- 프로젝트 이름 -->
    <version>1.0.0-SNAPSHOT</version>    <!-- 버전 -->
    <packaging>jar</packaging>           <!-- 패키징 타입: jar, war, pom -->

    <!-- 프로젝트 정보 -->
    <name>My Application</name>
    <description>Maven 학습 프로젝트</description>

    <!-- 프로퍼티 (변수 정의) -->
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <junit.version>5.10.1</junit.version>
    </properties>

    <!-- 의존성 -->
    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>\${junit.version}</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <!-- 빌드 설정 -->
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
                <configuration>
                    <source>17</source>
                    <target>17</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>`}</code></pre>
          </div>

          <h3>Maven 표준 디렉토리 구조</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-folder-open"></i> Maven 프로젝트 구조</span>
            </div>
            <pre><code>{`my-app/
├── pom.xml                          # 프로젝트 설정 파일
├── src/
│   ├── main/
│   │   ├── java/                    # 메인 소스 코드
│   │   │   └── com/example/
│   │   │       └── App.java
│   │   └── resources/               # 설정 파일, 리소스
│   │       └── application.properties
│   └── test/
│       ├── java/                    # 테스트 소스 코드
│       │   └── com/example/
│       │       └── AppTest.java
│       └── resources/               # 테스트 리소스
└── target/                          # 빌드 결과물 (자동 생성)`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>
              Maven의 GAV 좌표(groupId, artifactId, version)는 아티팩트를 전 세계적으로 고유하게 식별합니다.
              <code>groupId</code>는 보통 역방향 도메인 형식(예: <code>com.example</code>)을 사용하고,
              <code>artifactId</code>는 프로젝트 이름을 소문자-하이픈 형식으로 작성합니다.
              버전에 <code>-SNAPSHOT</code>이 붙으면 아직 개발 중인 버전을 의미합니다.
            </p>
          </div>

          {/* ========== 3. Maven 의존성 관리 ========== */}
          <h2>3. Maven 의존성 관리</h2>
          <p>
            Maven의 가장 강력한 기능 중 하나는 <strong>의존성 자동 관리</strong>입니다.
            필요한 라이브러리의 좌표만 <code>pom.xml</code>에 선언하면, Maven이 원격 저장소에서
            자동으로 다운로드하고 클래스패스에 추가합니다.
          </p>

          <h3>의존성 추가</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> pom.xml - 의존성 선언</span>
            </div>
            <pre><code>{`<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>3.2.0</version>
    </dependency>

    <!-- Lombok (컴파일 시에만 필요) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.30</version>
        <scope>provided</scope>
    </dependency>

    <!-- MySQL JDBC 드라이버 (런타임에만 필요) -->
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <version>8.2.0</version>
        <scope>runtime</scope>
    </dependency>

    <!-- JUnit 5 (테스트에만 필요) -->
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.10.1</version>
        <scope>test</scope>
    </dependency>
</dependencies>`}</code></pre>
          </div>

          <h3>의존성 Scope</h3>
          <p>
            <code>scope</code>는 의존성이 어느 단계에서 사용되는지를 지정합니다.
            올바른 scope를 설정해야 최종 패키지 크기를 줄이고 충돌을 방지할 수 있습니다.
          </p>

          <table>
            <thead>
              <tr><th>Scope</th><th>컴파일</th><th>테스트</th><th>런타임</th><th>패키징</th><th>설명</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>compile</strong></td><td>O</td><td>O</td><td>O</td><td>O</td><td>기본값. 모든 단계에서 사용</td></tr>
              <tr><td><strong>provided</strong></td><td>O</td><td>O</td><td>X</td><td>X</td><td>컴파일 시 필요하나 런타임에 컨테이너가 제공 (예: Servlet API)</td></tr>
              <tr><td><strong>runtime</strong></td><td>X</td><td>O</td><td>O</td><td>O</td><td>컴파일 불필요, 실행 시 필요 (예: JDBC 드라이버)</td></tr>
              <tr><td><strong>test</strong></td><td>X</td><td>O</td><td>X</td><td>X</td><td>테스트에서만 사용 (예: JUnit)</td></tr>
              <tr><td><strong>system</strong></td><td>O</td><td>O</td><td>X</td><td>X</td><td>로컬 JAR 직접 지정 (권장하지 않음)</td></tr>
            </tbody>
          </table>

          <h3>의존성 트리 확인</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> 의존성 트리 분석</span>
            </div>
            <pre><code>{`# 전체 의존성 트리 출력
mvn dependency:tree

# 출력 예시:
# [INFO] com.example:my-app:jar:1.0.0-SNAPSHOT
# [INFO] +- org.springframework.boot:spring-boot-starter-web:jar:3.2.0:compile
# [INFO] |  +- org.springframework.boot:spring-boot-starter:jar:3.2.0:compile
# [INFO] |  |  +- org.springframework.boot:spring-boot:jar:3.2.0:compile
# [INFO] |  |  +- org.springframework.boot:spring-boot-autoconfigure:jar:3.2.0:compile
# [INFO] |  |  +- org.springframework:spring-core:jar:6.1.1:compile
# [INFO] |  +- org.springframework:spring-web:jar:6.1.1:compile
# [INFO] |  +- org.springframework:spring-webmvc:jar:6.1.1:compile

# 특정 라이브러리 의존 경로 확인
mvn dependency:tree -Dincludes=org.springframework:spring-core

# 의존성 충돌 분석
mvn dependency:analyze
# [WARNING] Unused declared dependencies:
# [WARNING]    com.mysql:mysql-connector-j:jar:8.2.0:runtime`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 주의: 의존성 충돌</div>
            <p>
              서로 다른 라이브러리가 같은 의존성의 다른 버전을 요구할 때 <strong>의존성 충돌</strong>이 발생합니다.
              Maven은 "가장 가까운 정의 우선(Nearest Definition Wins)" 규칙을 따릅니다.
              충돌을 해결하려면 <code>&lt;exclusions&gt;</code>로 전이 의존성을 제외하거나,
              <code>&lt;dependencyManagement&gt;</code>에서 버전을 명시적으로 통일하세요.
            </p>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> pom.xml - 의존성 충돌 해결</span>
            </div>
            <pre><code>{`<!-- 방법 1: exclusions로 전이 의존성 제외 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>3.2.0</version>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<!-- 방법 2: dependencyManagement로 버전 통일 -->
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-framework-bom</artifactId>
            <version>6.1.1</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>`}</code></pre>
          </div>

          {/* ========== 4. Maven 라이프사이클 ========== */}
          <h2>4. Maven 라이프사이클</h2>
          <p>
            Maven은 <strong>빌드 라이프사이클(Build Lifecycle)</strong>이라는 정의된 빌드 단계의 순서를 제공합니다.
            각 라이프사이클은 여러 <strong>페이즈(Phase)</strong>로 구성되며, 특정 페이즈를 실행하면
            해당 페이즈까지의 모든 이전 페이즈가 순서대로 실행됩니다.
          </p>

          <h3>3가지 빌드 라이프사이클</h3>
          <table>
            <thead>
              <tr><th>라이프사이클</th><th>목적</th><th>주요 페이즈</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>clean</strong></td>
                <td>이전 빌드 결과물 제거</td>
                <td>pre-clean, clean, post-clean</td>
              </tr>
              <tr>
                <td><strong>default</strong></td>
                <td>프로젝트 빌드 및 배포</td>
                <td>validate, compile, test, package, verify, install, deploy</td>
              </tr>
              <tr>
                <td><strong>site</strong></td>
                <td>프로젝트 문서 사이트 생성</td>
                <td>pre-site, site, post-site, site-deploy</td>
              </tr>
            </tbody>
          </table>

          <h3>default 라이프사이클의 주요 페이즈</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> Maven 빌드 명령어</span>
            </div>
            <pre><code>{`# validate: 프로젝트 구조가 올바른지 검증
mvn validate

# compile: src/main/java 소스를 컴파일 → target/classes
mvn compile

# test: src/test/java 테스트 실행
mvn test

# package: JAR/WAR 파일 생성 → target/my-app-1.0.0.jar
mvn package

# verify: 통합 테스트 실행 및 품질 검사
mvn verify

# install: 로컬 저장소(~/.m2/repository)에 아티팩트 설치
mvn install

# deploy: 원격 저장소에 아티팩트 배포
mvn deploy

# ===== 자주 사용하는 조합 =====

# 기존 빌드 결과 삭제 후 새로 패키징
mvn clean package

# 테스트 건너뛰고 패키징
mvn clean package -DskipTests

# 특정 테스트만 실행
mvn test -Dtest=UserServiceTest

# 프로파일 지정
mvn clean package -P production`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 페이즈 실행 순서</div>
            <p>
              <code>mvn package</code>를 실행하면 <code>validate → compile → test → package</code>가
              순서대로 모두 실행됩니다. 따라서 <code>mvn compile</code>을 별도로 실행할 필요 없이
              <code>mvn package</code>만 실행하면 컴파일이 자동으로 포함됩니다.
            </p>
          </div>

          <h3>플러그인과 골(Goal)</h3>
          <p>
            각 페이즈는 실제 작업을 수행하는 <strong>플러그인의 골(Goal)</strong>에 바인딩됩니다.
            예를 들어 <code>compile</code> 페이즈는 <code>maven-compiler-plugin:compile</code> 골을 실행합니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> pom.xml - 플러그인 설정</span>
            </div>
            <pre><code>{`<build>
    <plugins>
        <!-- 컴파일러 플러그인 -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.11.0</version>
            <configuration>
                <source>17</source>
                <target>17</target>
            </configuration>
        </plugin>

        <!-- Surefire 플러그인 (단위 테스트) -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.2.2</version>
        </plugin>

        <!-- JAR 플러그인 (실행 가능한 JAR 생성) -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-jar-plugin</artifactId>
            <version>3.3.0</version>
            <configuration>
                <archive>
                    <manifest>
                        <mainClass>com.example.App</mainClass>
                    </manifest>
                </archive>
            </configuration>
        </plugin>
    </plugins>
</build>`}</code></pre>
          </div>

          {/* ========== 5. Gradle 기초 ========== */}
          <h2>5. Gradle 기초</h2>
          <p>
            <strong>Gradle</strong>은 Groovy 또는 Kotlin DSL 기반의 빌드 자동화 도구입니다.
            Maven의 "Convention over Configuration" 장점을 계승하면서도 프로그래밍적 유연성을 제공합니다.
            <strong>증분 빌드</strong>, <strong>빌드 캐시</strong>, <strong>데몬 프로세스</strong> 등으로
            Maven보다 빠른 빌드 성능을 제공합니다.
          </p>

          <h3>Gradle 설치</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> Gradle 설치 및 확인</span>
            </div>
            <pre><code>{`# 방법 1: 직접 설치
# https://gradle.org/releases/ 에서 다운로드
# GRADLE_HOME 환경변수 설정, PATH에 %GRADLE_HOME%\\bin 추가

gradle --version
# Gradle 8.5
# Build time:   2023-11-29

# 방법 2: Gradle Wrapper 사용 (권장)
# 프로젝트에 포함된 Wrapper를 통해 Gradle 버전을 고정
./gradlew --version        # Linux/Mac
gradlew.bat --version      # Windows

# 새 프로젝트 생성
gradle init --type java-application --dsl groovy`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> Gradle Wrapper</div>
            <p>
              <strong>Gradle Wrapper</strong>(<code>gradlew</code>)는 프로젝트에 Gradle 버전을 내장하는 방식입니다.
              팀원 모두가 동일한 Gradle 버전을 사용하게 되어 "내 컴퓨터에서는 되는데..." 문제를 방지합니다.
              실무에서는 항상 Wrapper를 사용하세요. <code>gradle wrapper --gradle-version 8.5</code>로 생성합니다.
            </p>
          </div>

          <h3>build.gradle 기본 구조 (Groovy DSL)</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> build.gradle (Groovy DSL)</span>
            </div>
            <pre><code>{`// 플러그인 적용
plugins {
    id 'java'                        // Java 프로젝트
    id 'application'                 // 실행 가능한 애플리케이션
    id 'org.springframework.boot' version '3.2.0'  // Spring Boot
    id 'io.spring.dependency-management' version '1.1.4'
}

// 프로젝트 정보
group = 'com.example'
version = '1.0.0-SNAPSHOT'

// Java 버전 설정
java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

// 저장소 설정
repositories {
    mavenCentral()                   // Maven Central 저장소
    // mavenLocal()                  // 로컬 Maven 저장소
    // maven { url 'https://repo.example.com/maven' }  // 사설 저장소
}

// 의존성 선언
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
    runtimeOnly 'com.mysql:mysql-connector-j'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

// 메인 클래스 지정
application {
    mainClass = 'com.example.App'
}

// 테스트 설정
tasks.named('test') {
    useJUnitPlatform()
}`}</code></pre>
          </div>

          <h3>build.gradle.kts (Kotlin DSL)</h3>
          <p>
            Gradle 5.0부터 <strong>Kotlin DSL</strong>을 공식 지원합니다.
            IDE 자동완성과 타입 안전성이 뛰어나 최근 프로젝트에서 많이 사용됩니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> build.gradle.kts (Kotlin DSL)</span>
            </div>
            <pre><code>{`plugins {
    java
    application
    id("org.springframework.boot") version "3.2.0"
    id("io.spring.dependency-management") version "1.1.4"
}

group = "com.example"
version = "1.0.0-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    compileOnly("org.projectlombok:lombok")
    annotationProcessor("org.projectlombok:lombok")
    runtimeOnly("com.mysql:mysql-connector-j")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.test {
    useJUnitPlatform()
}

application {
    mainClass.set("com.example.App")
}`}</code></pre>
          </div>

          <h3>Groovy DSL vs Kotlin DSL</h3>
          <table>
            <thead>
              <tr><th>비교 항목</th><th>Groovy DSL (.gradle)</th><th>Kotlin DSL (.gradle.kts)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>문자열</strong></td><td>작은따옴표/큰따옴표 모두 가능</td><td>큰따옴표만 사용</td></tr>
              <tr><td><strong>함수 호출</strong></td><td>괄호 생략 가능</td><td>괄호 필수</td></tr>
              <tr><td><strong>IDE 지원</strong></td><td>제한적 자동완성</td><td>뛰어난 자동완성 및 타입 검사</td></tr>
              <tr><td><strong>학습 곡선</strong></td><td>쉬움 (간결한 문법)</td><td>Kotlin 문법 필요</td></tr>
              <tr><td><strong>빌드 성능</strong></td><td>약간 빠름</td><td>첫 빌드가 약간 느림</td></tr>
            </tbody>
          </table>

          {/* ========== 6. Gradle 의존성과 태스크 ========== */}
          <h2>6. Gradle 의존성과 태스크</h2>

          <h3>의존성 Configuration</h3>
          <p>
            Gradle은 Maven의 scope 대신 <strong>Configuration</strong>을 사용하여 의존성의 적용 범위를 지정합니다.
            Java 플러그인은 다양한 Configuration을 기본 제공합니다.
          </p>

          <table>
            <thead>
              <tr><th>Configuration</th><th>설명</th><th>Maven 대응</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>implementation</strong></td><td>컴파일 + 런타임에 사용. 전이 의존성 노출 안 함</td><td>compile (하위 모듈 노출 X)</td></tr>
              <tr><td><strong>api</strong></td><td>컴파일 + 런타임에 사용. 전이 의존성 노출</td><td>compile</td></tr>
              <tr><td><strong>compileOnly</strong></td><td>컴파일에만 사용</td><td>provided</td></tr>
              <tr><td><strong>runtimeOnly</strong></td><td>런타임에만 사용</td><td>runtime</td></tr>
              <tr><td><strong>testImplementation</strong></td><td>테스트 컴파일 + 런타임에 사용</td><td>test</td></tr>
              <tr><td><strong>annotationProcessor</strong></td><td>어노테이션 프로세서</td><td>-</td></tr>
            </tbody>
          </table>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> implementation vs api</div>
            <p>
              <code>implementation</code>은 해당 모듈에서만 의존성을 사용하고, 이 모듈을 사용하는 다른 모듈에게는
              의존성을 노출하지 않습니다. <code>api</code>는 전이적으로 의존성을 노출합니다.
              가능하면 <code>implementation</code>을 사용하세요. 불필요한 전이 의존성 노출은 빌드 시간을
              증가시키고 의존성 충돌 가능성을 높입니다.
            </p>
          </div>

          <h3>의존성 관리 명령어</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> Gradle 의존성 명령어</span>
            </div>
            <pre><code>{`# 전체 의존성 트리 확인
./gradlew dependencies

# 특정 Configuration의 의존성만 확인
./gradlew dependencies --configuration runtimeClasspath

# 의존성 검색 및 버전 확인
./gradlew dependencyInsight --dependency spring-core

# 의존성 충돌 해결: 강제 버전 지정
configurations.all {
    resolutionStrategy {
        force 'com.google.guava:guava:32.1.3-jre'
    }
}

# BOM(Bill of Materials) 사용
dependencies {
    implementation platform('org.springframework.boot:spring-boot-dependencies:3.2.0')
    implementation 'org.springframework.boot:spring-boot-starter-web'  // 버전 생략 가능
}`}</code></pre>
          </div>

          <h3>커스텀 태스크</h3>
          <p>
            Gradle의 큰 장점은 <strong>커스텀 태스크</strong>를 쉽게 작성할 수 있다는 점입니다.
            Groovy/Kotlin 코드를 사용하여 빌드 과정에 원하는 작업을 추가할 수 있습니다.
          </p>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> build.gradle - 커스텀 태스크</span>
            </div>
            <pre><code>{`// 기본 태스크 정의
tasks.register('hello') {
    group = 'custom'
    description = 'Prints a greeting message'
    doLast {
        println 'Hello, Gradle!'
    }
}

// 파일 복사 태스크
tasks.register('copyDocs', Copy) {
    from 'src/docs'
    into 'build/docs'
    include '**/*.md'
}

// 태스크 의존성 설정
tasks.register('deploy') {
    dependsOn 'build', 'copyDocs'
    doLast {
        println 'Deploying application...'
    }
}

// 빌드 정보를 리소스에 기록
tasks.register('generateBuildInfo') {
    def outputFile = file("\${buildDir}/resources/main/build-info.properties")
    outputs.file(outputFile)
    doLast {
        outputFile.parentFile.mkdirs()
        outputFile.text = """
            build.version=\${project.version}
            build.timestamp=\${new Date().format('yyyy-MM-dd HH:mm:ss')}
            build.jdk=\${System.getProperty('java.version')}
        """.stripIndent().trim()
    }
}
tasks.named('processResources') { dependsOn 'generateBuildInfo' }

// ===== 자주 사용하는 Gradle 명령어 =====
// ./gradlew tasks           # 사용 가능한 모든 태스크 목록
// ./gradlew build           # 전체 빌드 (컴파일 + 테스트 + JAR)
// ./gradlew clean build     # 클린 빌드
// ./gradlew test            # 테스트만 실행
// ./gradlew bootRun         # Spring Boot 애플리케이션 실행
// ./gradlew build -x test   # 테스트 건너뛰고 빌드`}</code></pre>
          </div>

          {/* ========== 7. 멀티모듈 프로젝트 ========== */}
          <h2>7. 멀티모듈 프로젝트</h2>
          <p>
            규모가 큰 프로젝트에서는 코드를 기능별로 <strong>여러 모듈</strong>로 나누어 관리합니다.
            멀티모듈 프로젝트는 코드 재사용성을 높이고, 팀 간 병렬 개발을 용이하게 하며,
            빌드 시간을 줄일 수 있습니다 (변경된 모듈만 재빌드).
          </p>

          <h3>Maven 멀티모듈</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-folder-open"></i> Maven 멀티모듈 구조</span>
            </div>
            <pre><code>{`my-project/                      # 부모 프로젝트 (루트)
├── pom.xml                      # 부모 POM
├── common/                      # 공통 모듈
│   ├── pom.xml
│   └── src/main/java/...
├── api/                         # API 모듈
│   ├── pom.xml
│   └── src/main/java/...
└── web/                         # 웹 모듈
    ├── pom.xml
    └── src/main/java/...`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 부모 pom.xml</span>
            </div>
            <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>my-project</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>pom</packaging>          <!-- 부모는 반드시 pom 패키징 -->

    <!-- 하위 모듈 선언 -->
    <modules>
        <module>common</module>
        <module>api</module>
        <module>web</module>
    </modules>

    <!-- 공통 프로퍼티 -->
    <properties>
        <java.version>17</java.version>
        <spring-boot.version>3.2.0</spring-boot.version>
    </properties>

    <!-- 의존성 버전 관리 (자식 모듈에서 버전 생략 가능) -->
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>\${spring-boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <!-- 내부 모듈 간 의존성 버전 관리 -->
            <dependency>
                <groupId>com.example</groupId>
                <artifactId>common</artifactId>
                <version>\${project.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 자식 모듈 api/pom.xml</span>
            </div>
            <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <!-- 부모 POM 지정 -->
    <parent>
        <groupId>com.example</groupId>
        <artifactId>my-project</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>

    <artifactId>api</artifactId>

    <dependencies>
        <!-- 내부 모듈 의존 (버전은 부모의 dependencyManagement에서 관리) -->
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>common</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>`}</code></pre>
          </div>

          <h3>Gradle 멀티모듈</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-folder-open"></i> Gradle 멀티모듈 구조</span>
            </div>
            <pre><code>{`my-project/
├── settings.gradle              # 프로젝트 구조 정의
├── build.gradle                 # 루트 빌드 스크립트
├── common/
│   ├── build.gradle
│   └── src/main/java/...
├── api/
│   ├── build.gradle
│   └── src/main/java/...
└── web/
    ├── build.gradle
    └── src/main/java/...`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> settings.gradle</span>
            </div>
            <pre><code>{`rootProject.name = 'my-project'

// 하위 모듈 선언
include 'common'
include 'api'
include 'web'`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 루트 build.gradle</span>
            </div>
            <pre><code>{`// 모든 하위 프로젝트에 공통 적용
subprojects {
    apply plugin: 'java'

    group = 'com.example'
    version = '1.0.0-SNAPSHOT'

    java {
        sourceCompatibility = JavaVersion.VERSION_17
    }

    repositories {
        mavenCentral()
    }

    dependencies {
        testImplementation 'org.junit.jupiter:junit-jupiter:5.10.1'
    }

    tasks.named('test') {
        useJUnitPlatform()
    }
}

// 특정 프로젝트에만 적용
project(':api') {
    dependencies {
        implementation project(':common')   // 내부 모듈 의존
    }
}

project(':web') {
    apply plugin: 'org.springframework.boot'
    apply plugin: 'io.spring.dependency-management'

    dependencies {
        implementation project(':common')
        implementation project(':api')
        implementation 'org.springframework.boot:spring-boot-starter-web'
    }
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 멀티모듈 설계 팁</div>
            <p>
              모듈을 나눌 때는 <strong>의존성 방향</strong>을 신중히 설계하세요.
              순환 의존성(A → B → A)은 절대 피해야 합니다. 일반적으로 <code>common</code> 모듈을
              가장 아래에 두고 다른 모듈이 이를 참조하는 구조로 설계합니다.
              또한 모듈 간 결합도를 낮추기 위해 인터페이스를 통한 의존성 역전 원칙(DIP)을 적용하면 좋습니다.
            </p>
          </div>

          <h3>Gradle 멀티모듈 빌드 명령어</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> 멀티모듈 빌드 명령어</span>
            </div>
            <pre><code>{`# 전체 프로젝트 빌드
./gradlew build

# 특정 모듈만 빌드
./gradlew :api:build

# 특정 모듈과 그 의존 모듈만 빌드
./gradlew :api:build --include-build common

# 특정 모듈의 테스트만 실행
./gradlew :api:test

# 병렬 빌드 (빌드 속도 향상)
./gradlew build --parallel

# 빌드 성능 분석
./gradlew build --scan`}</code></pre>
          </div>

          {/* ========== 8. 연습문제 ========== */}
          <h2>8. 연습문제</h2>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>
                <strong>[Maven 기초]</strong> Maven으로 새 프로젝트를 생성한 뒤, <code>pom.xml</code>에
                Gson 라이브러리(<code>com.google.code.gson:gson:2.10.1</code>)를 의존성으로 추가하고,
                JSON 문자열을 Java 객체로 변환하는 프로그램을 작성해 보세요.
              </li>
              <li>
                <strong>[의존성 Scope]</strong> 다음 라이브러리들의 적절한 Maven scope를 결정하고 이유를 설명하세요:
                <ul>
                  <li>Spring Boot Starter Web</li>
                  <li>Lombok</li>
                  <li>H2 Database (테스트 전용)</li>
                  <li>Servlet API (Tomcat이 제공)</li>
                  <li>PostgreSQL JDBC 드라이버</li>
                </ul>
              </li>
              <li>
                <strong>[Maven 라이프사이클]</strong> <code>mvn clean install</code> 명령을 실행하면
                어떤 페이즈들이 순서대로 실행되는지 나열하세요. 또한 <code>mvn package</code>와
                <code>mvn install</code>의 차이를 설명하세요.
              </li>
              <li>
                <strong>[Gradle 전환]</strong> 아래 Maven <code>pom.xml</code> 설정을 Gradle
                <code>build.gradle</code>로 변환해 보세요:
                <div className="code-block" style={{marginTop:'8px'}}>
                  <div className="code-header">
                    <span className="file-name"><i className="fas fa-file-code"></i> 변환할 pom.xml</span>
                  </div>
                  <pre><code>{`<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <scope>provided</scope>
    </dependency>
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>`}</code></pre>
                </div>
              </li>
              <li>
                <strong>[커스텀 태스크]</strong> Gradle에서 빌드할 때마다 <code>build-info.txt</code> 파일에
                프로젝트 이름, 버전, 빌드 시간을 기록하는 커스텀 태스크를 작성하세요.
              </li>
              <li>
                <strong>[멀티모듈]</strong> 다음 요구사항을 만족하는 Gradle 멀티모듈 프로젝트의
                <code>settings.gradle</code>과 각 모듈의 <code>build.gradle</code>을 작성해 보세요:
                <ul>
                  <li><code>domain</code> 모듈: JPA 엔티티 클래스를 포함, 다른 모듈에 의존하지 않음</li>
                  <li><code>service</code> 모듈: 비즈니스 로직, domain 모듈에 의존</li>
                  <li><code>web</code> 모듈: REST API 컨트롤러, service와 domain 모듈에 의존, Spring Boot 적용</li>
                </ul>
              </li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('PR03') ? 'btn-primary' : 'btn-accent'}`} onClick={() => completeLesson('PR03')}>
              {isLessonCompleted('PR03') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/practical/02"><i className="fas fa-arrow-left"></i> 이전: Git과 GitHub</Link>
            <Link to="/practical/04">다음: SQL 기초 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
