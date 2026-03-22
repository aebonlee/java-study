import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function PracticalLesson10() {
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
            <span>Lesson 10</span>
          </div>
          <h1>Lesson 10. Linux와 서버 환경</h1>
          <p>Linux 명령어, Tomcat/WAS, JAR/WAR, 환경변수, 클라우드를 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          {/* 1. Linux 기초 */}
          <h2>1. Linux 기초</h2>
          <p>
            <strong>Linux</strong>는 Linus Torvalds가 1991년에 개발한 오픈소스 운영체제 커널입니다.
            서버, 임베디드 시스템, 클라우드 인프라 등 전 세계 서버의 90% 이상이 Linux를 사용합니다.
            Java 백엔드 개발자라면 Linux 환경에서의 작업이 필수입니다.
          </p>

          <h3>주요 Linux 배포판</h3>
          <table className="info-table">
            <thead>
              <tr><th>배포판</th><th>특징</th><th>사용 환경</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ubuntu</strong></td>
                <td>사용자 친화적, 최신 패키지, Debian 기반</td>
                <td>개발 서버, 클라우드, 개인 PC</td>
              </tr>
              <tr>
                <td><strong>CentOS / Rocky Linux</strong></td>
                <td>RHEL 호환, 안정적, 긴 지원 주기</td>
                <td>기업 운영 서버, 데이터센터</td>
              </tr>
              <tr>
                <td><strong>Amazon Linux</strong></td>
                <td>AWS에 최적화, RHEL 기반, 무료</td>
                <td>AWS EC2 인스턴스</td>
              </tr>
              <tr>
                <td><strong>Alpine Linux</strong></td>
                <td>초경량(5MB), 보안 중심, musl libc</td>
                <td>Docker 컨테이너</td>
              </tr>
            </tbody>
          </table>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 왜 서버에 Linux를 쓰는가?</div>
            <p>
              <strong>1) 안정성</strong> - 수년간 재부팅 없이 운영 가능합니다.<br/>
              <strong>2) 보안</strong> - 권한 시스템이 엄격하고 오픈소스라 취약점이 빠르게 패치됩니다.<br/>
              <strong>3) 무료</strong> - 라이선스 비용이 없어 수백 대의 서버를 운영해도 OS 비용이 0원입니다.<br/>
              <strong>4) 유연성</strong> - GUI 없이 CLI로만 운영하여 리소스를 애플리케이션에 집중할 수 있습니다.<br/>
              <strong>5) 생태계</strong> - Docker, Kubernetes, Nginx 등 거의 모든 서버 소프트웨어가 Linux를 기준으로 개발됩니다.
            </p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> Linux 버전 확인</span></div>
            <pre><code>{`# OS 정보 확인
$ cat /etc/os-release
NAME="Ubuntu"
VERSION="22.04.3 LTS (Jammy Jellyfish)"

# 커널 버전 확인
$ uname -r
5.15.0-88-generic

# CPU, 메모리 정보
$ lscpu | head -5
$ free -h`}</code></pre>
          </div>

          {/* 2. 필수 Linux 명령어 */}
          <h2>2. 필수 Linux 명령어</h2>
          <p>
            Java 개발자가 서버에서 가장 자주 사용하는 명령어들을 카테고리별로 정리합니다.
          </p>

          <h3>파일/디렉토리 관리</h3>
          <table className="info-table">
            <thead>
              <tr><th>명령어</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>ls</code></td><td>파일/디렉토리 목록</td><td><code>ls -la /opt/app/</code></td></tr>
              <tr><td><code>cd</code></td><td>디렉토리 이동</td><td><code>cd /var/log/</code></td></tr>
              <tr><td><code>pwd</code></td><td>현재 디렉토리 출력</td><td><code>pwd</code></td></tr>
              <tr><td><code>mkdir</code></td><td>디렉토리 생성</td><td><code>mkdir -p /opt/app/logs</code></td></tr>
              <tr><td><code>cp</code></td><td>파일/디렉토리 복사</td><td><code>cp -r src/ backup/</code></td></tr>
              <tr><td><code>mv</code></td><td>파일 이동/이름 변경</td><td><code>mv old.jar new.jar</code></td></tr>
              <tr><td><code>rm</code></td><td>파일/디렉토리 삭제</td><td><code>rm -rf /tmp/cache/</code></td></tr>
              <tr><td><code>find</code></td><td>파일 검색</td><td><code>find / -name "*.log" -mtime +7</code></td></tr>
              <tr><td><code>cat</code></td><td>파일 내용 출력</td><td><code>cat application.properties</code></td></tr>
              <tr><td><code>tail</code></td><td>파일 끝부분 출력</td><td><code>tail -f app.log</code> (실시간 로그 확인)</td></tr>
              <tr><td><code>grep</code></td><td>문자열 검색</td><td><code>grep -r "ERROR" /var/log/</code></td></tr>
              <tr><td><code>vi / vim</code></td><td>텍스트 편집기</td><td><code>vi server.xml</code></td></tr>
            </tbody>
          </table>

          <h3>권한 관리</h3>
          <table className="info-table">
            <thead>
              <tr><th>명령어</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>chmod</code></td><td>파일 권한 변경</td><td><code>chmod 755 deploy.sh</code></td></tr>
              <tr><td><code>chown</code></td><td>파일 소유자 변경</td><td><code>chown tomcat:tomcat app.jar</code></td></tr>
              <tr><td><code>sudo</code></td><td>관리자 권한 실행</td><td><code>sudo systemctl restart nginx</code></td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> Linux 권한 체계</span></div>
            <pre><code>{`# 파일 권한 구조: [타입][소유자][그룹][기타]
$ ls -la deploy.sh
-rwxr-xr-x 1 ubuntu ubuntu 1024 Mar 23 10:00 deploy.sh

# rwx = read(4) + write(2) + execute(1) = 7
# r-x = read(4) + execute(1)             = 5
# r-x = read(4) + execute(1)             = 5
# → chmod 755 deploy.sh

# 실행 권한 부여
$ chmod +x deploy.sh

# 소유자 변경 (재귀적으로)
$ sudo chown -R appuser:appgroup /opt/app/`}</code></pre>
          </div>

          <h3>프로세스 관리</h3>
          <table className="info-table">
            <thead>
              <tr><th>명령어</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>ps</code></td><td>실행 중인 프로세스 확인</td><td><code>ps -ef | grep java</code></td></tr>
              <tr><td><code>top / htop</code></td><td>실시간 시스템 모니터링</td><td><code>top -p $(pgrep java)</code></td></tr>
              <tr><td><code>kill</code></td><td>프로세스 종료</td><td><code>kill -9 12345</code></td></tr>
              <tr><td><code>nohup</code></td><td>백그라운드 실행 (로그아웃 후에도)</td><td><code>nohup java -jar app.jar &</code></td></tr>
              <tr><td><code>systemctl</code></td><td>시스템 서비스 관리</td><td><code>systemctl status myapp</code></td></tr>
            </tbody>
          </table>

          <h3>네트워크 명령어</h3>
          <table className="info-table">
            <thead>
              <tr><th>명령어</th><th>설명</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr><td><code>curl</code></td><td>HTTP 요청 전송</td><td><code>curl -X GET http://localhost:8080/api/health</code></td></tr>
              <tr><td><code>wget</code></td><td>파일 다운로드</td><td><code>wget https://example.com/jdk-17.tar.gz</code></td></tr>
              <tr><td><code>netstat / ss</code></td><td>네트워크 연결/포트 확인</td><td><code>ss -tlnp | grep 8080</code></td></tr>
              <tr><td><code>ping</code></td><td>네트워크 연결 확인</td><td><code>ping google.com</code></td></tr>
              <tr><td><code>ifconfig / ip</code></td><td>네트워크 인터페이스 정보</td><td><code>ip addr show</code></td></tr>
            </tbody>
          </table>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 주의</div>
            <p>
              <code>rm -rf /</code>는 시스템 전체를 삭제하는 매우 위험한 명령어입니다.
              운영 서버에서는 반드시 경로를 확인한 후 삭제 명령을 실행하세요.
              <code>kill -9</code>는 프로세스를 강제 종료하므로, 먼저 <code>kill -15</code>(SIGTERM)로
              정상 종료를 시도한 후 응답이 없을 때만 사용하세요.
            </p>
          </div>

          {/* 3. 셸 스크립트 기초 */}
          <h2>3. 셸 스크립트 기초</h2>
          <p>
            반복적인 서버 작업을 자동화하기 위해 <strong>bash 셸 스크립트</strong>를 작성합니다.
            배포, 로그 정리, 헬스 체크 등 다양한 운영 작업에 활용됩니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> deploy.sh - 배포 스크립트 예제</span></div>
            <pre><code>{`#!/bin/bash
# ===========================================
# Java 애플리케이션 배포 스크립트
# ===========================================

# 변수 선언
APP_NAME="my-application"
APP_DIR="/opt/app"
JAR_FILE="$APP_DIR/$APP_NAME.jar"
LOG_FILE="$APP_DIR/logs/app.log"
PID_FILE="$APP_DIR/app.pid"
JAVA_OPTS="-Xms512m -Xmx1024m -Dspring.profiles.active=prod"

# 색상 정의
RED='\\033[0;31m'
GREEN='\\033[0;32m'
NC='\\033[0m' # No Color

# 함수: 현재 실행 중인 PID 조회
get_pid() {
    if [ -f "$PID_FILE" ]; then
        cat "$PID_FILE"
    else
        echo ""
    fi
}

# 함수: 애플리케이션 중지
stop() {
    local pid=$(get_pid)
    if [ -z "$pid" ]; then
        echo -e "\${GREEN}애플리케이션이 실행 중이 아닙니다.\${NC}"
        return 0
    fi

    echo "애플리케이션 종료 중... (PID: $pid)"
    kill -15 "$pid"    # SIGTERM (graceful shutdown)

    # 최대 30초 대기
    for i in $(seq 1 30); do
        if ! kill -0 "$pid" 2>/dev/null; then
            echo -e "\${GREEN}정상 종료 완료\${NC}"
            rm -f "$PID_FILE"
            return 0
        fi
        sleep 1
    done

    # 강제 종료
    echo -e "\${RED}강제 종료 실행\${NC}"
    kill -9 "$pid"
    rm -f "$PID_FILE"
}

# 함수: 애플리케이션 시작
start() {
    local pid=$(get_pid)
    if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
        echo -e "\${RED}이미 실행 중입니다. (PID: $pid)\${NC}"
        return 1
    fi

    echo "애플리케이션 시작 중..."
    nohup java $JAVA_OPTS -jar "$JAR_FILE" > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    echo -e "\${GREEN}시작 완료 (PID: $!)\${NC}"
}

# 메인: 인자에 따라 분기
case "$1" in
    start)   start ;;
    stop)    stop ;;
    restart) stop && sleep 2 && start ;;
    status)
        pid=$(get_pid)
        if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
            echo -e "\${GREEN}실행 중 (PID: $pid)\${NC}"
        else
            echo -e "\${RED}중지 상태\${NC}"
        fi
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac`}</code></pre>
          </div>

          <h3>조건문과 반복문</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> bash 기본 문법</span></div>
            <pre><code>{`#!/bin/bash

# === 변수 ===
NAME="Java App"
VERSION=17
TODAY=$(date +%Y-%m-%d)
echo "앱: $NAME, JDK: $VERSION, 날짜: $TODAY"

# === 조건문 (if) ===
MEMORY_USAGE=$(free | awk '/Mem/{printf("%.0f"), $3/$2*100}')
if [ "$MEMORY_USAGE" -gt 90 ]; then
    echo "경고: 메모리 사용률 ${MEMORY_USAGE}%"
elif [ "$MEMORY_USAGE" -gt 70 ]; then
    echo "주의: 메모리 사용률 ${MEMORY_USAGE}%"
else
    echo "정상: 메모리 사용률 ${MEMORY_USAGE}%"
fi

# === 반복문 (for) ===
# 여러 서버에 헬스체크
SERVERS=("192.168.1.10" "192.168.1.11" "192.168.1.12")
for server in "\${SERVERS[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "http://$server:8080/health")
    if [ "$status" == "200" ]; then
        echo "$server: 정상"
    else
        echo "$server: 장애 (HTTP $status)"
    fi
done

# === 반복문 (while) - 로그 모니터링 ===
# tail -f app.log | while read line; do
#     if echo "$line" | grep -q "ERROR"; then
#         echo "[ALERT] $line" >> error_alert.log
#     fi
# done`}</code></pre>
          </div>

          <h3>cron 예약 작업</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> crontab 설정</span></div>
            <pre><code>{`# crontab 편집
$ crontab -e

# cron 표현식: 분 시 일 월 요일 명령
# ┌───────── 분 (0-59)
# │ ┌─────── 시 (0-23)
# │ │ ┌───── 일 (1-31)
# │ │ │ ┌─── 월 (1-12)
# │ │ │ │ ┌─ 요일 (0-7, 0과 7 = 일요일)
# │ │ │ │ │
# * * * * * 실행할 명령

# 매일 새벽 2시에 로그 정리
0 2 * * * /opt/app/scripts/cleanup-logs.sh

# 5분마다 헬스체크
*/5 * * * * /opt/app/scripts/health-check.sh >> /opt/app/logs/health.log 2>&1

# 매주 일요일 새벽 3시에 백업
0 3 * * 0 /opt/app/scripts/backup.sh

# 매월 1일 자정에 월간 리포트
0 0 1 * * /opt/app/scripts/monthly-report.sh

# 현재 등록된 cron 확인
$ crontab -l`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>
              cron 작업에서는 환경변수가 로그인 셸과 다를 수 있습니다.
              스크립트 상단에 <code>source /etc/profile</code>이나 <code>export PATH=...</code>를
              명시하거나, java 명령을 절대 경로(<code>/usr/bin/java</code>)로 지정하세요.
            </p>
          </div>

          {/* 4. WAS 구조 */}
          <h2>4. WAS(Web Application Server) 구조</h2>
          <p>
            웹 서비스는 보통 <strong>웹 서버</strong>(Nginx/Apache)와 <strong>WAS</strong>(Tomcat/WildFly)의
            2-tier 구조로 운영됩니다. Java 생태계에서 가장 많이 사용하는 WAS는 <strong>Apache Tomcat</strong>입니다.
          </p>

          <h3>웹 서버 vs WAS</h3>
          <table className="info-table">
            <thead>
              <tr><th>구분</th><th>웹 서버 (Nginx/Apache)</th><th>WAS (Tomcat/WildFly)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>역할</strong></td>
                <td>정적 리소스 제공 (HTML, CSS, JS, 이미지)</td>
                <td>동적 콘텐츠 생성 (Servlet, JSP, Spring)</td>
              </tr>
              <tr>
                <td><strong>프로토콜</strong></td>
                <td>HTTP / HTTPS</td>
                <td>HTTP, AJP</td>
              </tr>
              <tr>
                <td><strong>주요 기능</strong></td>
                <td>리버스 프록시, 로드밸런싱, SSL 종단</td>
                <td>서블릿 컨테이너, JDBC 풀, 세션 관리</td>
              </tr>
              <tr>
                <td><strong>대표 제품</strong></td>
                <td>Nginx, Apache HTTP Server</td>
                <td>Tomcat, WildFly, Jetty, Undertow</td>
              </tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 일반적인 웹 서비스 아키텍처</span></div>
            <pre><code>{`┌──────────┐     ┌──────────────┐     ┌──────────────┐     ┌────────┐
│  Client  │────▶│  Nginx       │────▶│  Tomcat      │────▶│  DB    │
│ (브라우저)│     │ (리버스 프록시)│     │  (WAS)       │     │(MySQL) │
└──────────┘     │              │     │              │     └────────┘
                 │ - SSL 처리    │     │ - Servlet    │
                 │ - 정적 파일   │     │ - Spring     │
                 │ - 로드밸런싱  │     │ - 비즈니스   │
                 │ - gzip 압축   │     │   로직 처리  │
                 └──────────────┘     └──────────────┘

# Nginx 리버스 프록시 설정 예시
# /etc/nginx/sites-available/myapp
server {
    listen 80;
    server_name myapp.example.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /static/ {
        root /var/www/myapp;   # 정적 파일은 Nginx가 직접 제공
        expires 30d;
    }
}`}</code></pre>
          </div>

          <h3>Tomcat 디렉토리 구조</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> Tomcat 디렉토리 구조</span></div>
            <pre><code>{`$CATALINA_HOME/                 # Tomcat 설치 루트
├── bin/                        # 실행 스크립트
│   ├── startup.sh              # Tomcat 시작
│   ├── shutdown.sh             # Tomcat 종료
│   ├── catalina.sh             # 주요 실행 스크립트
│   └── setenv.sh               # JVM 옵션 설정 (직접 생성)
├── conf/                       # 설정 파일
│   ├── server.xml              # 서버 설정 (포트, 커넥터, 가상호스트)
│   ├── web.xml                 # 글로벌 웹 설정
│   ├── context.xml             # 컨텍스트 설정 (DB 풀 등)
│   └── tomcat-users.xml        # 관리자 계정 설정
├── webapps/                    # 웹 애플리케이션 배포 디렉토리
│   ├── ROOT/                   # 기본 애플리케이션 (/)
│   ├── myapp/                  # /myapp 경로로 접근
│   └── myapp.war               # WAR 파일 → 자동 압축 해제
├── logs/                       # 로그 파일
│   ├── catalina.out            # 표준 출력/에러 로그
│   ├── catalina.2026-03-23.log # 일별 카탈리나 로그
│   ├── localhost_access_log.*  # 접근 로그
│   └── localhost.*.log         # 애플리케이션 로그
├── lib/                        # 공유 라이브러리 (JDBC 드라이버 등)
├── temp/                       # 임시 파일
└── work/                       # JSP 컴파일 결과 등`}</code></pre>
          </div>

          <h3>server.xml 핵심 설정</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> conf/server.xml 주요 설정</span></div>
            <pre><code>{`<?xml version="1.0" encoding="UTF-8"?>
<Server port="8005" shutdown="SHUTDOWN">

  <Service name="Catalina">

    <!-- HTTP 커넥터: 클라이언트 요청을 받는 포트 -->
    <Connector port="8080"
               protocol="HTTP/1.1"
               connectionTimeout="20000"
               maxThreads="200"
               minSpareThreads="25"
               acceptCount="100"
               URIEncoding="UTF-8"
               redirectPort="8443" />

    <!-- HTTPS 커넥터 (SSL/TLS) -->
    <!--
    <Connector port="8443"
               protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150"
               SSLEnabled="true"
               keystoreFile="/path/to/keystore.jks"
               keystorePass="changeit" />
    -->

    <!-- 엔진: 요청 처리 파이프라인 -->
    <Engine name="Catalina" defaultHost="localhost">
      <Host name="localhost" appBase="webapps"
            unpackWARs="true" autoDeploy="true">
      </Host>
    </Engine>

  </Service>
</Server>`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> bin/setenv.sh - JVM 옵션 설정</span></div>
            <pre><code>{`#!/bin/bash
# Tomcat JVM 옵션 설정
# 이 파일을 $CATALINA_HOME/bin/ 에 생성

# 힙 메모리 설정
CATALINA_OPTS="-Xms512m -Xmx2048m"

# GC 설정
CATALINA_OPTS="$CATALINA_OPTS -XX:+UseG1GC"

# GC 로그
CATALINA_OPTS="$CATALINA_OPTS -Xlog:gc*:file=/opt/tomcat/logs/gc.log"

# 프로파일 설정
CATALINA_OPTS="$CATALINA_OPTS -Dspring.profiles.active=prod"

# 인코딩
CATALINA_OPTS="$CATALINA_OPTS -Dfile.encoding=UTF-8"

export CATALINA_OPTS`}</code></pre>
          </div>

          {/* 5. JAR와 WAR */}
          <h2>5. JAR와 WAR</h2>
          <p>
            Java 애플리케이션을 배포할 때 사용하는 두 가지 패키징 형식입니다.
            현대적인 Spring Boot 프로젝트는 대부분 <strong>executable JAR</strong>로 배포합니다.
          </p>

          <table className="info-table">
            <thead>
              <tr><th>구분</th><th>JAR (Java ARchive)</th><th>WAR (Web Application ARchive)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>용도</strong></td>
                <td>라이브러리 또는 독립 실행형 애플리케이션</td>
                <td>웹 애플리케이션 (외부 WAS에 배포)</td>
              </tr>
              <tr>
                <td><strong>구조</strong></td>
                <td>classes/ + META-INF/MANIFEST.MF</td>
                <td>WEB-INF/(classes, lib, web.xml) + 정적 파일</td>
              </tr>
              <tr>
                <td><strong>실행</strong></td>
                <td><code>java -jar app.jar</code></td>
                <td>Tomcat webapps/에 배포</td>
              </tr>
              <tr>
                <td><strong>내장 WAS</strong></td>
                <td>포함 가능 (Spring Boot)</td>
                <td>외부 WAS 필요</td>
              </tr>
              <tr>
                <td><strong>배포 방식</strong></td>
                <td>파일 하나로 독립 실행</td>
                <td>WAS에 업로드/복사</td>
              </tr>
              <tr>
                <td><strong>현대적 추세</strong></td>
                <td>Spring Boot에서 권장</td>
                <td>레거시 프로젝트에서 주로 사용</td>
              </tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> JAR/WAR 빌드와 실행</span></div>
            <pre><code>{`# ===== Maven 빌드 =====

# JAR로 빌드 (pom.xml에 <packaging>jar</packaging>)
$ mvn clean package -DskipTests
$ ls target/
my-application-1.0.0.jar

# WAR로 빌드 (pom.xml에 <packaging>war</packaging>)
$ mvn clean package -DskipTests
$ ls target/
my-application-1.0.0.war


# ===== Gradle 빌드 =====

# JAR 빌드
$ ./gradlew clean bootJar
$ ls build/libs/
my-application-1.0.0.jar

# WAR 빌드
$ ./gradlew clean bootWar
$ ls build/libs/
my-application-1.0.0.war


# ===== 실행 =====

# JAR 실행 (Spring Boot - 내장 Tomcat 포함)
$ java -jar my-application-1.0.0.jar

# JVM 옵션 + 프로파일 지정
$ java -Xms512m -Xmx1024m \\
       -Dspring.profiles.active=prod \\
       -Dserver.port=8080 \\
       -jar my-application-1.0.0.jar

# WAR 배포 (외부 Tomcat)
$ cp my-application-1.0.0.war /opt/tomcat/webapps/myapp.war
$ /opt/tomcat/bin/startup.sh`}</code></pre>
          </div>

          <h3>Spring Boot Executable JAR 구조</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> Spring Boot FAT JAR 내부 구조</span></div>
            <pre><code>{`my-application-1.0.0.jar
├── BOOT-INF/
│   ├── classes/                    # 컴파일된 클래스 파일
│   │   ├── com/example/...
│   │   ├── application.properties
│   │   ├── application-prod.properties
│   │   └── static/                 # 정적 리소스
│   ├── lib/                        # 의존성 JAR 파일들
│   │   ├── spring-boot-3.2.0.jar
│   │   ├── spring-web-6.1.0.jar
│   │   ├── tomcat-embed-core-10.1.jar  ← 내장 Tomcat!
│   │   └── ... (수십~수백 개)
│   └── classpath.idx
├── META-INF/
│   └── MANIFEST.MF
│       Main-Class: org.springframework.boot.loader.JarLauncher
│       Start-Class: com.example.MyApplication
└── org/springframework/boot/loader/  # Spring Boot 로더

# JAR 내부 확인
$ jar tf my-application-1.0.0.jar | head -20

# 특정 설정 파일 추출
$ jar xf my-application-1.0.0.jar BOOT-INF/classes/application.properties`}</code></pre>
          </div>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> Spring Boot가 JAR를 권장하는 이유</div>
            <p>
              Spring Boot의 executable JAR는 내장 Tomcat을 포함하므로 별도의 WAS 설치가 필요 없습니다.
              <code>java -jar</code> 하나로 실행되어 배포가 단순하고, Docker 컨테이너화에도 적합합니다.
              WAR 배포는 여러 애플리케이션을 하나의 Tomcat에서 운영해야 하는 레거시 환경에서 사용합니다.
            </p>
          </div>

          {/* 6. 환경변수와 프로파일 */}
          <h2>6. 환경변수와 프로파일</h2>
          <p>
            개발, 테스트, 운영 환경마다 DB 접속 정보, API 키 등이 달라집니다.
            환경변수와 프로파일을 활용하면 <strong>코드 변경 없이</strong> 환경에 맞는 설정을 적용할 수 있습니다.
          </p>

          <h3>Linux 환경변수 설정</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 환경변수 설정 방법</span></div>
            <pre><code>{`# 현재 세션에서만 유효
$ export DB_HOST=192.168.1.100
$ export DB_PORT=3306
$ export DB_PASSWORD=secret123

# 영구 설정 (사용자별) - ~/.bashrc 또는 ~/.bash_profile
$ vi ~/.bashrc
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
export DB_HOST=192.168.1.100
export DB_PORT=3306
export SPRING_PROFILES_ACTIVE=prod

# 변경사항 즉시 적용
$ source ~/.bashrc

# 시스템 전체 설정
$ sudo vi /etc/environment
JAVA_HOME=/usr/lib/jvm/java-17-openjdk

# 환경변수 확인
$ echo $JAVA_HOME
/usr/lib/jvm/java-17-openjdk
$ env | grep DB_
DB_HOST=192.168.1.100
DB_PORT=3306

# Java 실행 시 환경변수 전달
$ DB_HOST=10.0.0.5 DB_PORT=3306 java -jar app.jar`}</code></pre>
          </div>

          <h3>Spring Boot 프로파일</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> application.properties 프로파일 설정</span></div>
            <pre><code>{`# === application.properties (공통 설정) ===
spring.application.name=my-application
server.port=8080
logging.level.root=INFO

# === application-dev.properties (개발 환경) ===
spring.datasource.url=jdbc:mysql://localhost:3306/mydb_dev
spring.datasource.username=dev_user
spring.datasource.password=dev_pass
spring.jpa.show-sql=true
logging.level.com.example=DEBUG

# === application-prod.properties (운영 환경) ===
spring.datasource.url=jdbc:mysql://db-master.internal:3306/mydb
spring.datasource.username=\${DB_USERNAME}       # 환경변수에서 읽기
spring.datasource.password=\${DB_PASSWORD}       # 환경변수에서 읽기
spring.jpa.show-sql=false
logging.level.com.example=WARN
server.tomcat.max-threads=200

# === application-test.properties (테스트 환경) ===
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver

# ─────────────────────────────────────────────
# 프로파일 활성화 방법 (우선순위: 아래로 갈수록 높음)
# ─────────────────────────────────────────────

# 1. application.properties에 지정
spring.profiles.active=dev

# 2. 환경변수로 지정
$ export SPRING_PROFILES_ACTIVE=prod

# 3. JVM 옵션으로 지정
$ java -Dspring.profiles.active=prod -jar app.jar

# 4. 커맨드라인 인자로 지정
$ java -jar app.jar --spring.profiles.active=prod`}</code></pre>
          </div>

          <h3>12-Factor App 원칙</h3>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 12-Factor App이란?</div>
            <p>
              Heroku에서 제시한 클라우드 네이티브 애플리케이션 설계 원칙 12가지입니다.
              현대적인 서버 애플리케이션을 만들 때 반드시 참고해야 하는 가이드라인입니다.
            </p>
          </div>

          <table className="info-table">
            <thead>
              <tr><th>#</th><th>원칙</th><th>설명</th><th>Java 적용 예시</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td><strong>코드베이스</strong></td><td>하나의 코드베이스를 버전 관리하고, 여러 환경에 배포</td><td>Git 저장소 하나, dev/staging/prod 배포</td></tr>
              <tr><td>2</td><td><strong>의존성</strong></td><td>명시적으로 의존성을 선언하고 격리</td><td>Maven pom.xml / Gradle build.gradle</td></tr>
              <tr><td>3</td><td><strong>설정</strong></td><td>설정을 코드가 아닌 환경변수에 저장</td><td><code>$&#123;DB_PASSWORD&#125;</code> 환경변수 참조</td></tr>
              <tr><td>4</td><td><strong>백엔드 서비스</strong></td><td>DB, 메시지 큐 등을 교체 가능한 리소스로 취급</td><td>DataSource URL만 바꿔서 DB 전환</td></tr>
              <tr><td>5</td><td><strong>빌드/릴리즈/실행</strong></td><td>빌드 → 릴리즈 → 실행 단계를 엄격히 분리</td><td>CI/CD 파이프라인 (Jenkins, GitHub Actions)</td></tr>
              <tr><td>6</td><td><strong>프로세스</strong></td><td>상태를 가지지 않는(stateless) 프로세스로 실행</td><td>세션은 Redis에, 파일은 S3에 저장</td></tr>
            </tbody>
          </table>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>
              운영 환경의 비밀번호, API 키 등 민감 정보를 코드에 하드코딩하지 마세요.
              환경변수, AWS Secrets Manager, HashiCorp Vault 같은 별도의 비밀 관리 서비스를 사용하는 것이 좋습니다.
              <code>application-prod.properties</code>에 비밀번호를 직접 기입하고 Git에 커밋하는 것은 보안 사고의 원인이 됩니다.
            </p>
          </div>

          {/* 7. 클라우드 배포 기초 */}
          <h2>7. 클라우드 배포 기초</h2>
          <p>
            AWS EC2를 기준으로 Java 애플리케이션을 클라우드에 배포하는 전체 플로우를 학습합니다.
          </p>

          <h3>AWS EC2 배포 플로우</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> 전체 배포 과정</span></div>
            <pre><code>{`# ===== 1단계: EC2 인스턴스 준비 =====

# SSH 키 페어로 EC2에 접속
$ ssh -i "my-keypair.pem" ec2-user@3.35.xxx.xxx

# 처음 접속 시 서버 초기 설정
$ sudo yum update -y                          # 패키지 업데이트 (Amazon Linux)
$ sudo yum install -y java-17-amazon-corretto  # JDK 17 설치
$ java -version
openjdk version "17.0.9"

# 애플리케이션 디렉토리 생성
$ sudo mkdir -p /opt/app/logs
$ sudo chown -R ec2-user:ec2-user /opt/app


# ===== 2단계: 로컬에서 서버로 파일 전송 =====

# SCP로 JAR 파일 전송 (로컬에서 실행)
$ scp -i "my-keypair.pem" \\
    target/my-application-1.0.0.jar \\
    ec2-user@3.35.xxx.xxx:/opt/app/

# 디렉토리 통째로 전송
$ scp -i "my-keypair.pem" -r \\
    scripts/ \\
    ec2-user@3.35.xxx.xxx:/opt/app/scripts/


# ===== 3단계: 서버에서 애플리케이션 실행 =====

# 환경변수 설정
$ export SPRING_PROFILES_ACTIVE=prod
$ export DB_HOST=my-rds-instance.xxxxxx.ap-northeast-2.rds.amazonaws.com
$ export DB_PASSWORD=prodPassword123

# 실행
$ cd /opt/app
$ nohup java -Xms512m -Xmx1024m \\
    -jar my-application-1.0.0.jar \\
    > logs/app.log 2>&1 &

# 실행 확인
$ curl http://localhost:8080/actuator/health
{"status":"UP"}`}</code></pre>
          </div>

          <h3>systemd 서비스 등록</h3>
          <p>
            <code>nohup</code> 대신 <strong>systemd</strong>를 사용하면 서버 재부팅 시 자동 시작,
            장애 시 자동 재시작, 로그 관리 등을 운영체제 레벨에서 관리할 수 있습니다.
          </p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> /etc/systemd/system/myapp.service</span></div>
            <pre><code>{`[Unit]
Description=My Java Application
After=network.target

[Service]
User=ec2-user
Group=ec2-user
Type=simple

# 환경변수 파일에서 로드
EnvironmentFile=/opt/app/env.conf

# 실행 명령
ExecStart=/usr/bin/java \\
    -Xms512m -Xmx1024m \\
    -Dspring.profiles.active=prod \\
    -jar /opt/app/my-application-1.0.0.jar

# 종료 시 graceful shutdown (30초 대기)
ExecStop=/bin/kill -15 $MAINPID
TimeoutStopSec=30

# 장애 시 자동 재시작 (10초 후)
Restart=on-failure
RestartSec=10

# 로그 설정
StandardOutput=journal
StandardError=journal
SyslogIdentifier=myapp

[Install]
WantedBy=multi-user.target`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> systemd 명령어</span></div>
            <pre><code>{`# 서비스 등록 및 시작
$ sudo systemctl daemon-reload          # 서비스 파일 변경 시 실행
$ sudo systemctl enable myapp           # 부팅 시 자동 시작 등록
$ sudo systemctl start myapp            # 서비스 시작

# 서비스 관리
$ sudo systemctl stop myapp             # 서비스 중지
$ sudo systemctl restart myapp          # 서비스 재시작
$ sudo systemctl status myapp           # 상태 확인

# 로그 확인
$ sudo journalctl -u myapp -f           # 실시간 로그 확인
$ sudo journalctl -u myapp --since "1 hour ago"  # 최근 1시간 로그
$ sudo journalctl -u myapp --since today         # 오늘 로그

# 서비스 상태 확인 출력 예시
● myapp.service - My Java Application
     Loaded: loaded (/etc/systemd/system/myapp.service; enabled)
     Active: active (running) since Mon 2026-03-23 10:00:00 KST
   Main PID: 12345 (java)
      Tasks: 42 (limit: 4657)
     Memory: 512.0M
     CGroup: /system.slice/myapp.service
             └─12345 /usr/bin/java -Xms512m -Xmx1024m -jar ...`}</code></pre>
          </div>

          <h3>배포 자동화 스크립트</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-terminal"></i> auto-deploy.sh - 원격 배포 자동화</span></div>
            <pre><code>{`#!/bin/bash
# CI/CD 또는 로컬에서 실행하는 자동 배포 스크립트

set -e  # 에러 발생 시 즉시 중단

# 설정
SERVER="ec2-user@3.35.xxx.xxx"
KEY="~/.ssh/my-keypair.pem"
APP_DIR="/opt/app"
JAR_NAME="my-application-1.0.0.jar"

echo "====== 1. 빌드 ======"
./gradlew clean bootJar
echo "빌드 완료: build/libs/$JAR_NAME"

echo "====== 2. 파일 전송 ======"
scp -i "$KEY" "build/libs/$JAR_NAME" "$SERVER:$APP_DIR/$JAR_NAME.new"
echo "전송 완료"

echo "====== 3. 원격 배포 ======"
ssh -i "$KEY" "$SERVER" << 'REMOTE_SCRIPT'
    cd /opt/app

    # 기존 JAR 백업
    if [ -f my-application-1.0.0.jar ]; then
        cp my-application-1.0.0.jar my-application-1.0.0.jar.backup
    fi

    # 새 JAR 교체
    mv my-application-1.0.0.jar.new my-application-1.0.0.jar

    # 서비스 재시작
    sudo systemctl restart myapp

    # 헬스체크 (최대 60초 대기)
    for i in $(seq 1 12); do
        sleep 5
        status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/actuator/health)
        if [ "$status" == "200" ]; then
            echo "배포 성공! 서버 정상 동작 중"
            exit 0
        fi
        echo "헬스체크 대기 중... ($i/12)"
    done

    echo "배포 실패! 이전 버전으로 롤백"
    cp my-application-1.0.0.jar.backup my-application-1.0.0.jar
    sudo systemctl restart myapp
    exit 1
REMOTE_SCRIPT

echo "====== 배포 완료 ======"
echo "서버: $SERVER"
echo "시간: $(date '+%Y-%m-%d %H:%M:%S')"
`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 보안 주의사항</div>
            <p>
              <strong>1)</strong> SSH 키 파일(.pem)의 권한은 반드시 <code>chmod 400</code>으로 설정하세요.<br/>
              <strong>2)</strong> EC2 보안 그룹에서 SSH(22번) 포트는 필요한 IP만 허용하세요.<br/>
              <strong>3)</strong> 비밀번호 인증 대신 SSH 키 인증만 사용하세요 (<code>/etc/ssh/sshd_config</code>에서 <code>PasswordAuthentication no</code>).<br/>
              <strong>4)</strong> 운영 환경에서는 root 계정으로 직접 접속하지 마세요.
            </p>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 다음 단계: CI/CD</div>
            <p>
              수동 배포에 익숙해졌다면, <strong>GitHub Actions</strong>나 <strong>Jenkins</strong>를 사용하여
              코드 푸시 시 자동으로 빌드/테스트/배포되는 CI/CD 파이프라인을 구축해보세요.
              Docker를 활용하면 환경 차이로 인한 문제를 더욱 줄일 수 있습니다.
            </p>
          </div>

          {/* 8. 연습문제 */}
          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>
                다음 Linux 명령어의 역할을 설명하세요:
                <ul>
                  <li><code>ps -ef | grep java</code></li>
                  <li><code>tail -f /var/log/app.log | grep ERROR</code></li>
                  <li><code>chmod 755 deploy.sh</code></li>
                  <li><code>nohup java -jar app.jar &amp;</code></li>
                  <li><code>ss -tlnp | grep 8080</code></li>
                </ul>
              </li>
              <li>
                <code>deploy.sh</code> 배포 스크립트를 참고하여, 로그 파일을 날짜별로 백업하고
                7일 이상 된 로그를 자동 삭제하는 <code>cleanup-logs.sh</code> 셸 스크립트를 작성하세요.
                <code>find</code> 명령어의 <code>-mtime</code> 옵션을 활용하세요.
              </li>
              <li>
                JAR와 WAR의 차이점을 정리하고, Spring Boot 프로젝트를 각각 JAR와 WAR로 빌드하여
                실행하는 방법을 설명하세요. WAR 배포 시 <code>SpringBootServletInitializer</code>를
                상속해야 하는 이유도 설명하세요.
              </li>
              <li>
                다음 환경을 위한 <code>application-dev.properties</code>와 <code>application-prod.properties</code>를
                작성하세요. 운영 환경에서는 민감 정보를 환경변수로 대체하세요:
                <ul>
                  <li>개발: H2 인메모리 DB, 로그 레벨 DEBUG, SQL 출력</li>
                  <li>운영: MySQL, 로그 레벨 WARN, SQL 미출력, 커넥션 풀 20개</li>
                </ul>
              </li>
              <li>
                EC2에 Spring Boot 애플리케이션을 배포하는 전체 과정을 순서대로 작성하세요.
                systemd 서비스 파일 작성, 환경변수 설정, 헬스체크까지 포함해야 합니다.
              </li>
              <li>
                다음 cron 표현식이 의미하는 실행 스케줄을 설명하세요:
                <ul>
                  <li><code>0 0 * * *</code></li>
                  <li><code>*/10 * * * *</code></li>
                  <li><code>0 2 * * 0</code></li>
                  <li><code>30 9 1 * *</code></li>
                </ul>
              </li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('PR10') ? 'btn-primary' : 'btn-accent'}`} onClick={() => completeLesson('PR10')}>
              {isLessonCompleted('PR10') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/practical/09"><i className="fas fa-arrow-left"></i> 이전: 날짜/시간 API</Link>
            <Link to="/practical"><i className="fas fa-list"></i> 실무 과정 목록</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
