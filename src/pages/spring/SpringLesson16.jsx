import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'
import JavaCodeRunner from '../../components/JavaCodeRunner'

export default function SpringLesson16() {
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
            <span>Lesson 16</span>
          </div>
          <h1>Lesson 16. 배포 (Docker, CI/CD)</h1>
          <p>Spring Boot 애플리케이션을 Docker로 컨테이너화하고 CI/CD 파이프라인으로 자동 배포하는 방법을 배웁니다.</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. JAR 패키징과 실행</h2>
          <p>Spring Boot는 내장 서버를 포함한 <strong>실행 가능한 JAR(Fat JAR)</strong>로 패키징됩니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> JAR 빌드와 실행</span></div>
            <pre><code>{`# Gradle로 빌드
./gradlew clean build

# 또는 Maven으로 빌드
mvn clean package

# JAR 파일 실행
java -jar build/libs/my-app-0.0.1-SNAPSHOT.jar

# 프로파일 지정 실행
java -jar my-app.jar --spring.profiles.active=prod

# JVM 옵션과 함께 실행
java -Xmx512m -Xms256m -jar my-app.jar

# 빌드된 JAR 구조
my-app.jar
├── BOOT-INF/
│   ├── classes/     # 내 코드 (.class 파일)
│   └── lib/         # 의존성 라이브러리들
├── META-INF/
│   └── MANIFEST.MF  # Main-Class 정보
└── org/springframework/boot/loader/  # 부트 로더`}</code></pre>
          </div>

          <h2>2. Docker 기초</h2>
          <table className="info-table">
            <thead><tr><th>개념</th><th>설명</th><th>비유</th></tr></thead>
            <tbody>
              <tr><td><strong>이미지 (Image)</strong></td><td>애플리케이션과 실행 환경을 담은 읽기 전용 템플릿</td><td>설계도/레시피</td></tr>
              <tr><td><strong>컨테이너 (Container)</strong></td><td>이미지로부터 생성된 실행 인스턴스</td><td>설계도로 만든 실제 건물</td></tr>
              <tr><td><strong>Dockerfile</strong></td><td>이미지를 만드는 명령어 스크립트</td><td>설계도 작성 방법</td></tr>
              <tr><td><strong>Docker Hub</strong></td><td>이미지를 공유하는 레지스트리</td><td>앱스토어</td></tr>
              <tr><td><strong>Volume</strong></td><td>컨테이너 외부에 데이터를 저장</td><td>외장 하드</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Docker 기본 명령어</span></div>
            <pre><code>{`# 이미지 빌드
docker build -t my-app:latest .

# 컨테이너 실행
docker run -d -p 8080:8080 --name my-app my-app:latest

# 실행 중인 컨테이너 확인
docker ps

# 로그 확인
docker logs -f my-app

# 컨테이너 중지/삭제
docker stop my-app
docker rm my-app

# 이미지 목록/삭제
docker images
docker rmi my-app:latest`}</code></pre>
          </div>

          <h2>3. Spring Boot Dockerfile 작성 (Multi-Stage Build)</h2>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 실습 안내</div>
            <p>이 코드는 Spring Boot 프로젝트에서 실행해야 합니다. start.spring.io에서 프로젝트를 생성한 후 실습하세요.</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Dockerfile (기본)</span></div>
            <pre><code>{`# 단순 Dockerfile
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Dockerfile (Multi-Stage Build - 권장)</span></div>
            <pre><code>{`# Stage 1: 빌드 단계
FROM gradle:8-jdk17-alpine AS builder
WORKDIR /app
COPY build.gradle settings.gradle ./
COPY gradle ./gradle
# 의존성만 먼저 다운로드 (캐시 활용)
RUN gradle dependencies --no-daemon
COPY src ./src
RUN gradle clean build -x test --no-daemon

# Stage 2: 실행 단계 (빌드 도구 없이 가벼운 이미지)
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# 보안: non-root 사용자로 실행
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD wget -q --spider http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["java", "-Xmx512m", "-Xms256m", \\
  "-Djava.security.egd=file:/dev/./urandom", \\
  "-jar", "app.jar"]`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>Multi-Stage Build를 사용하면 빌드 도구(Gradle, JDK)를 최종 이미지에 포함하지 않아 이미지 크기가 크게 줄어듭니다. alpine 베이스 이미지를 사용하면 약 200MB 이하로 줄일 수 있습니다. .dockerignore 파일도 잊지 마세요.</p>
          </div>

          <h2>4. Docker Compose로 멀티 컨테이너</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> docker-compose.yml</span></div>
            <pre><code>{`version: '3.8'

services:
  # Spring Boot 애플리케이션
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/mydb
      - SPRING_DATASOURCE_USERNAME=root
      - SPRING_DATASOURCE_PASSWORD=secret
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped

  # MySQL 데이터베이스
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: mydb
    ports:
      - "3306:3306"
    volumes:
      - mysql-data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Redis 캐시
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  mysql-data:

# 실행: docker-compose up -d
# 중지: docker-compose down
# 로그: docker-compose logs -f app`}</code></pre>
          </div>

          <h2>5. GitHub Actions CI/CD 파이프라인</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> .github/workflows/ci-cd.yml</span></div>
            <pre><code>{`name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  # 1단계: 테스트
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: JDK 17 설정
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Gradle 캐시
        uses: actions/cache@v3
        with:
          path: ~/.gradle/caches
          key: gradle-\${{ hashFiles('**/*.gradle*') }}

      - name: 테스트 실행
        run: ./gradlew test

      - name: 테스트 리포트
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: test-report
          path: build/reports/tests/

  # 2단계: 빌드 & 배포
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4

      - name: Docker Hub 로그인
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}

      - name: Docker 이미지 빌드 & 푸시
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: myuser/my-app:latest

      - name: 서버에 배포
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.SERVER_HOST }}
          username: \${{ secrets.SERVER_USER }}
          key: \${{ secrets.SSH_KEY }}
          script: |
            docker pull myuser/my-app:latest
            docker-compose up -d app`}</code></pre>
          </div>

          <h2>6. 프로파일별 설정 (dev, prod)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 프로파일 설정 파일</span></div>
            <pre><code>{`# application.yml (공통 설정)
spring:
  profiles:
    active: dev  # 기본 프로파일

---
# application-dev.yml (개발 환경)
spring:
  config:
    activate:
      on-profile: dev
  datasource:
    url: jdbc:h2:mem:devdb
    driver-class-name: org.h2.Driver
  h2:
    console:
      enabled: true
  jpa:
    show-sql: true
    hibernate:
      ddl-auto: create-drop
logging:
  level:
    root: DEBUG

---
# application-prod.yml (운영 환경)
spring:
  config:
    activate:
      on-profile: prod
  datasource:
    url: jdbc:mysql://\${DB_HOST}:\${DB_PORT}/\${DB_NAME}
    username: \${DB_USERNAME}
    password: \${DB_PASSWORD}
  jpa:
    show-sql: false
    hibernate:
      ddl-auto: validate
logging:
  level:
    root: WARN

# 활성화 방법:
# java -jar app.jar --spring.profiles.active=prod
# 또는 환경변수: SPRING_PROFILES_ACTIVE=prod`}</code></pre>
          </div>

          <h2>7. 클라우드 배포 개요</h2>
          <table className="info-table">
            <thead><tr><th>서비스</th><th>설명</th><th>적합한 경우</th></tr></thead>
            <tbody>
              <tr><td><strong>AWS EC2</strong></td><td>가상 서버에 직접 배포</td><td>완전한 제어가 필요할 때</td></tr>
              <tr><td><strong>AWS ECS/EKS</strong></td><td>컨테이너 오케스트레이션</td><td>마이크로서비스 운영</td></tr>
              <tr><td><strong>AWS Elastic Beanstalk</strong></td><td>PaaS - 자동 스케일링</td><td>빠른 배포가 필요할 때</td></tr>
              <tr><td><strong>GCP Cloud Run</strong></td><td>서버리스 컨테이너</td><td>트래픽 변동이 큰 경우</td></tr>
              <tr><td><strong>GCP GKE</strong></td><td>관리형 Kubernetes</td><td>대규모 컨테이너 운영</td></tr>
              <tr><td><strong>Railway / Render</strong></td><td>간편한 PaaS</td><td>개인 프로젝트, 프로토타입</td></tr>
            </tbody>
          </table>

          <h2>8. 모니터링 (Actuator, Prometheus)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Actuator 설정</span></div>
            <pre><code>{`# build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-actuator'
    implementation 'io.micrometer:micrometer-registry-prometheus'  // Prometheus 연동
}

# application.yml
management:
  endpoints:
    web:
      exposure:
        include: health, info, metrics, prometheus
  endpoint:
    health:
      show-details: always
  metrics:
    tags:
      application: my-app

# Actuator 엔드포인트:
# /actuator/health     - 헬스 체크
# /actuator/info       - 애플리케이션 정보
# /actuator/metrics    - 메트릭 (JVM, HTTP 요청 등)
# /actuator/prometheus - Prometheus 형식 메트릭

# Prometheus + Grafana 연동
# prometheus.yml에 스크래핑 대상 추가:
# scrape_configs:
#   - job_name: 'spring-boot'
#     metrics_path: '/actuator/prometheus'
#     static_configs:
#       - targets: ['app:8080']`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 배포 체크리스트</div>
            <p>프로덕션 배포 전 확인사항: 1) application-prod.yml 환경변수 설정, 2) Swagger UI 비활성화, 3) 로그 레벨 조정 (WARN 이상), 4) CORS 설정 확인, 5) HTTPS 적용, 6) 헬스 체크 엔드포인트 설정, 7) 모니터링/알림 구성.</p>
          </div>

          <JavaCodeRunner defaultCode={`// Docker와 배포 개념을 코드로 이해하기
// Dockerfile 명령어와 CI/CD 흐름을 시뮬레이션합니다.

import java.util.*;

public class Main {

    // Dockerfile 명령어 시뮬레이션
    static class DockerImage {
        String baseImage;
        List<String> layers = new ArrayList<>();
        String entrypoint;
        int exposedPort;
        long sizeInMB;

        DockerImage(String base, long baseSize) {
            this.baseImage = base;
            this.sizeInMB = baseSize;
        }

        void copy(String src, String dest, long sizeMB) {
            layers.add("COPY " + src + " -> " + dest);
            sizeInMB += sizeMB;
        }

        void run(String command) {
            layers.add("RUN " + command);
        }

        void expose(int port) {
            this.exposedPort = port;
            layers.add("EXPOSE " + port);
        }

        void setEntrypoint(String cmd) {
            this.entrypoint = cmd;
            layers.add("ENTRYPOINT " + cmd);
        }

        void printInfo() {
            System.out.println("Base Image: " + baseImage);
            System.out.println("Layers:");
            for (String layer : layers) {
                System.out.println("  " + layer);
            }
            System.out.println("Total Size: ~" + sizeInMB + " MB");
        }
    }

    // CI/CD 파이프라인 시뮬레이션
    static class Pipeline {
        String name;
        List<String> steps = new ArrayList<>();

        Pipeline(String name) { this.name = name; }
        void addStep(String step) { steps.add(step); }

        void execute() {
            System.out.println("\\n=== Pipeline: " + name + " ===");
            for (int i = 0; i < steps.size(); i++) {
                System.out.println("  [" + (i + 1) + "/" + steps.size() + "] " + steps.get(i) + " ... OK");
            }
            System.out.println("  Pipeline 완료!");
        }
    }

    public static void main(String[] args) {
        // 1. Dockerfile 비교: 기본 vs Multi-Stage
        System.out.println("=== Docker 이미지 비교 ===\\n");

        System.out.println("[기본 Dockerfile]");
        DockerImage basic = new DockerImage("eclipse-temurin:17-jdk", 350);
        basic.copy("build/libs/*.jar", "app.jar", 80);
        basic.expose(8080);
        basic.setEntrypoint("java -jar app.jar");
        basic.printInfo();

        System.out.println("\\n[Multi-Stage Dockerfile]");
        DockerImage optimized = new DockerImage("eclipse-temurin:17-jre-alpine", 120);
        optimized.run("adduser -S appuser");
        optimized.copy("--from=builder app.jar", "app.jar", 80);
        optimized.expose(8080);
        optimized.setEntrypoint("java -Xmx512m -jar app.jar");
        optimized.printInfo();

        System.out.println("\\n=> Multi-Stage는 " + (350 + 80 - 120 - 80) + "MB 절약!");

        // 2. CI/CD 파이프라인
        Pipeline cicd = new Pipeline("Spring Boot CI/CD");
        cicd.addStep("코드 체크아웃 (git checkout)");
        cicd.addStep("JDK 17 설정");
        cicd.addStep("Gradle 의존성 캐시 복원");
        cicd.addStep("단위 테스트 실행 (./gradlew test)");
        cicd.addStep("JAR 빌드 (./gradlew build)");
        cicd.addStep("Docker 이미지 빌드");
        cicd.addStep("Docker Hub에 푸시");
        cicd.addStep("운영 서버에 배포");
        cicd.execute();

        // 3. 프로파일 설정
        System.out.println("\\n=== 프로파일별 설정 ===");
        Map<String, Map<String, String>> profiles = new LinkedHashMap<>();
        Map<String, String> dev = new LinkedHashMap<>();
        dev.put("DB", "H2 (인메모리)");
        dev.put("로그", "DEBUG");
        dev.put("Swagger", "활성화");
        profiles.put("dev", dev);

        Map<String, String> prod = new LinkedHashMap<>();
        prod.put("DB", "MySQL (외부 서버)");
        prod.put("로그", "WARN");
        prod.put("Swagger", "비활성화");
        profiles.put("prod", prod);

        for (var entry : profiles.entrySet()) {
            System.out.println("  [" + entry.getKey() + "] " + entry.getValue());
        }
    }
}`} title="Docker & CI/CD 개념 시뮬레이션" />

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>Spring Boot 프로젝트의 Dockerfile을 Multi-Stage Build로 작성하고 이미지를 빌드해 보세요.</li>
              <li>Docker Compose로 Spring Boot + MySQL + Redis 환경을 구성하고 실행해 보세요.</li>
              <li>GitHub Actions로 테스트 자동화 워크플로우를 작성해 보세요.</li>
              <li>application-dev.yml과 application-prod.yml을 분리하여 환경별 설정을 관리해 보세요.</li>
              <li>Actuator 엔드포인트를 설정하고 /actuator/health로 헬스 체크를 확인해 보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('SP16') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('SP16')}>
              {isLessonCompleted('SP16') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/spring/15"><i className="fas fa-arrow-left"></i> 이전: Swagger/OpenAPI 문서화</Link>
            <Link to="/spring">다음: 스프링 과정 홈 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
