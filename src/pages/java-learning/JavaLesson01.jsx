import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson01() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link>
            <i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 01</span>
          </div>
          <h1>Chapter 01. Java 소개 및 환경설정</h1>
          <p>Java의 역사와 특징을 이해하고, 개발 환경을 설정합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          <h2>1. Java란?</h2>
          <p>
            Java는 1995년 Sun Microsystems의 <strong>제임스 고슬링(James Gosling)</strong>이 개발한 객체지향 프로그래밍 언어입니다.
            현재 Oracle이 관리하며, 전 세계에서 가장 많이 사용되는 프로그래밍 언어 중 하나입니다.
          </p>

          <h3>Java의 주요 특징</h3>
          <ul>
            <li><strong>Write Once, Run Anywhere (WORA)</strong> - JVM 위에서 실행되므로 운영체제에 독립적입니다</li>
            <li><strong>객체지향</strong> - 캡슐화, 상속, 다형성, 추상화를 지원합니다</li>
            <li><strong>강력한 타입 시스템</strong> - 컴파일 시점에 타입 오류를 잡아줍니다</li>
            <li><strong>자동 메모리 관리</strong> - 가비지 컬렉터(GC)가 메모리를 자동으로 관리합니다</li>
            <li><strong>멀티스레드 지원</strong> - 동시성 프로그래밍을 기본 지원합니다</li>
            <li><strong>풍부한 표준 라이브러리</strong> - 방대한 API를 제공합니다</li>
          </ul>

          <h3>Java 에디션</h3>
          <table>
            <thead>
              <tr><th>에디션</th><th>설명</th><th>용도</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Java SE</strong></td><td>Standard Edition</td><td>일반 애플리케이션 개발</td></tr>
              <tr><td><strong>Java EE</strong></td><td>Enterprise Edition (현 Jakarta EE)</td><td>대규모 엔터프라이즈 웹 애플리케이션</td></tr>
              <tr><td><strong>Java ME</strong></td><td>Micro Edition</td><td>임베디드, 모바일 기기</td></tr>
            </tbody>
          </table>

          <h2>2. JDK, JRE, JVM의 차이</h2>

          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 핵심 개념</div>
            <p><strong>JVM</strong> (Java Virtual Machine) - Java 바이트코드를 실행하는 가상 머신<br/>
            <strong>JRE</strong> (Java Runtime Environment) = JVM + 표준 라이브러리<br/>
            <strong>JDK</strong> (Java Development Kit) = JRE + 개발 도구 (컴파일러, 디버거 등)</p>
          </div>

          <p>Java 프로그램의 실행 과정:</p>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> 실행 과정</span>
            </div>
            <pre><code>{`소스코드(.java) → javac 컴파일 → 바이트코드(.class) → JVM 실행

예시:
Hello.java → javac Hello.java → Hello.class → java Hello`}</code></pre>
          </div>

          <h2>3. JDK 설치</h2>
          <p>Java 개발을 위해 JDK를 설치해야 합니다. OpenJDK 또는 Oracle JDK를 사용할 수 있습니다.</p>

          <h3>OpenJDK 설치 (추천)</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> Windows - winget</span>
            </div>
            <pre><code>{`# OpenJDK 21 설치 (LTS 버전)
winget install Microsoft.OpenJDK.21

# 또는 Eclipse Temurin
winget install EclipseAdoptium.Temurin.21.JDK`}</code></pre>
          </div>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> macOS - Homebrew</span>
            </div>
            <pre><code>{`brew install openjdk@21`}</code></pre>
          </div>

          <h3>환경변수 설정</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> 환경변수 (Windows)</span>
            </div>
            <pre><code>{`# 시스템 환경변수에 추가
JAVA_HOME = C:\\Program Files\\Microsoft\\jdk-21
PATH에 추가: %JAVA_HOME%\\bin

# 설치 확인
java -version
javac -version`}</code></pre>
          </div>

          <h2>4. 첫 번째 프로그램: Hello World</h2>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> Hello.java</span>
            </div>
            <pre><code>{`public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`}</code></pre>
          </div>

          <h3>컴파일 및 실행</h3>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-terminal"></i> 터미널</span>
            </div>
            <pre><code>{`# 컴파일
javac Hello.java

# 실행
java Hello

# 출력: Hello, Java!`}</code></pre>
          </div>

          <h2>5. Java 프로그램의 기본 구조</h2>

          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> MyProgram.java</span>
            </div>
            <pre><code>{`package com.example;  // 패키지 선언

import java.util.Scanner;  // 외부 클래스 임포트

public class MyProgram {  // 클래스 선언 (파일명과 동일해야 함)

    // 프로그램의 시작점: main 메서드
    public static void main(String[] args) {
        // public: 어디서든 접근 가능
        // static: 객체 생성 없이 실행
        // void: 반환값 없음
        // String[] args: 명령행 인자

        System.out.println("안녕하세요!");

        Scanner sc = new Scanner(System.in);
        System.out.print("이름을 입력하세요: ");
        String name = sc.nextLine();
        System.out.println("환영합니다, " + name + "님!");
        sc.close();
    }
}`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> 팁</div>
            <p>파일명은 반드시 <code>public class</code>의 이름과 같아야 합니다. <code>MyProgram</code> 클래스는 <code>MyProgram.java</code> 파일에 저장해야 합니다.</p>
          </div>

          <h2>6. IDE 설치</h2>
          <p>텍스트 에디터로도 개발할 수 있지만, IDE를 사용하면 생산성이 크게 향상됩니다.</p>

          <table>
            <thead>
              <tr><th>IDE</th><th>특징</th><th>추천 대상</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>IntelliJ IDEA</strong></td><td>강력한 자동완성, 리팩토링</td><td>실무 개발자 (Community 무료)</td></tr>
              <tr><td><strong>Eclipse</strong></td><td>무료, 플러그인 풍부</td><td>학습용, 레거시 프로젝트</td></tr>
              <tr><td><strong>VS Code</strong></td><td>가볍고 빠름, Extension Pack</td><td>가벼운 개발, 학습용</td></tr>
            </tbody>
          </table>

          <h2>7. 주석</h2>
          <div className="code-block">
            <div className="code-header">
              <span className="file-name"><i className="fas fa-file-code"></i> Comments.java</span>
            </div>
            <pre><code>{`// 한 줄 주석

/* 여러 줄
   주석 */

/**
 * Javadoc 주석
 * API 문서를 자동 생성할 때 사용합니다
 * @author JavaMaster
 * @version 1.0
 */
public class Comments {
    /**
     * 두 수를 더합니다
     * @param a 첫 번째 수
     * @param b 두 번째 수
     * @return 합계
     */
    public int add(int a, int b) {
        return a + b;
    }
}`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>JDK를 설치하고 <code>java -version</code> 명령어로 버전을 확인해보세요.</li>
              <li>"Hello, World!"를 출력하는 프로그램을 작성하고 컴파일, 실행해보세요.</li>
              <li>자신의 이름과 나이를 출력하는 프로그램을 작성해보세요.</li>
              <li>Scanner를 사용하여 사용자 입력을 받아 인사하는 프로그램을 만들어보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('01') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('01')}
            >
              {isLessonCompleted('01') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/"><i className="fas fa-arrow-left"></i> 홈으로</Link>
            <Link to="/java-learning/02">다음: 변수와 자료형 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
