import{u as i,r as c,j as s,L as e}from"./index-67ilme4E.js";function r(){const{completeLesson:a,isLessonCompleted:l}=i();return c.useEffect(()=>{window.scrollTo(0,0)},[]),s.jsxs("main",{className:"java-lesson",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"breadcrumb",children:[s.jsx(e,{to:"/",children:"홈"}),s.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),s.jsx(e,{to:"/java-learning",children:"커리큘럼"}),s.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),s.jsx("span",{children:"Chapter 01"})]}),s.jsx("h1",{children:"Chapter 01. Java 소개 및 환경설정"}),s.jsx("p",{children:"Java의 역사와 특징을 이해하고, 개발 환경을 설정합니다"})]})}),s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-content",children:[s.jsx("h2",{children:"1. Java란?"}),s.jsxs("p",{children:["Java는 1995년 Sun Microsystems의 ",s.jsx("strong",{children:"제임스 고슬링(James Gosling)"}),"이 개발한 객체지향 프로그래밍 언어입니다. 현재 Oracle이 관리하며, 전 세계에서 가장 많이 사용되는 프로그래밍 언어 중 하나입니다."]}),s.jsx("h3",{children:"Java의 주요 특징"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Write Once, Run Anywhere (WORA)"})," - JVM 위에서 실행되므로 운영체제에 독립적입니다"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"객체지향"})," - 캡슐화, 상속, 다형성, 추상화를 지원합니다"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"강력한 타입 시스템"})," - 컴파일 시점에 타입 오류를 잡아줍니다"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"자동 메모리 관리"})," - 가비지 컬렉터(GC)가 메모리를 자동으로 관리합니다"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"멀티스레드 지원"})," - 동시성 프로그래밍을 기본 지원합니다"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"풍부한 표준 라이브러리"})," - 방대한 API를 제공합니다"]})]}),s.jsx("h3",{children:"Java 에디션"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"에디션"}),s.jsx("th",{children:"설명"}),s.jsx("th",{children:"용도"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Java SE"})}),s.jsx("td",{children:"Standard Edition"}),s.jsx("td",{children:"일반 애플리케이션 개발"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Java EE"})}),s.jsx("td",{children:"Enterprise Edition (현 Jakarta EE)"}),s.jsx("td",{children:"대규모 엔터프라이즈 웹 애플리케이션"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Java ME"})}),s.jsx("td",{children:"Micro Edition"}),s.jsx("td",{children:"임베디드, 모바일 기기"})]})]})]}),s.jsx("h2",{children:"2. JDK, JRE, JVM의 차이"}),s.jsxs("div",{className:"callout callout-info",children:[s.jsxs("div",{className:"callout-title",children:[s.jsx("i",{className:"fas fa-info-circle"})," 핵심 개념"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"JVM"})," (Java Virtual Machine) - Java 바이트코드를 실행하는 가상 머신",s.jsx("br",{}),s.jsx("strong",{children:"JRE"})," (Java Runtime Environment) = JVM + 표준 라이브러리",s.jsx("br",{}),s.jsx("strong",{children:"JDK"})," (Java Development Kit) = JRE + 개발 도구 (컴파일러, 디버거 등)"]})]}),s.jsx("p",{children:"Java 프로그램의 실행 과정:"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," 실행 과정"]})}),s.jsx("pre",{children:s.jsx("code",{children:`소스코드(.java) → javac 컴파일 → 바이트코드(.class) → JVM 실행

예시:
Hello.java → javac Hello.java → Hello.class → java Hello`})})]}),s.jsx("h2",{children:"3. JDK 설치"}),s.jsx("p",{children:"Java 개발을 위해 JDK를 설치해야 합니다. OpenJDK 또는 Oracle JDK를 사용할 수 있습니다."}),s.jsx("h3",{children:"OpenJDK 설치 (추천)"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-terminal"})," Windows - winget"]})}),s.jsx("pre",{children:s.jsx("code",{children:`# OpenJDK 21 설치 (LTS 버전)
winget install Microsoft.OpenJDK.21

# 또는 Eclipse Temurin
winget install EclipseAdoptium.Temurin.21.JDK`})})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-terminal"})," macOS - Homebrew"]})}),s.jsx("pre",{children:s.jsx("code",{children:"brew install openjdk@21"})})]}),s.jsx("h3",{children:"환경변수 설정"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-terminal"})," 환경변수 (Windows)"]})}),s.jsx("pre",{children:s.jsx("code",{children:`# 시스템 환경변수에 추가
JAVA_HOME = C:\\Program Files\\Microsoft\\jdk-21
PATH에 추가: %JAVA_HOME%\\bin

# 설치 확인
java -version
javac -version`})})]}),s.jsx("h2",{children:"4. 첫 번째 프로그램: Hello World"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," Hello.java"]})}),s.jsx("pre",{children:s.jsx("code",{children:`public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`})})]}),s.jsx("h3",{children:"컴파일 및 실행"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-terminal"})," 터미널"]})}),s.jsx("pre",{children:s.jsx("code",{children:`# 컴파일
javac Hello.java

# 실행
java Hello

# 출력: Hello, Java!`})})]}),s.jsx("h2",{children:"5. Java 프로그램의 기본 구조"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," MyProgram.java"]})}),s.jsx("pre",{children:s.jsx("code",{children:`package com.example;  // 패키지 선언

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
}`})})]}),s.jsxs("div",{className:"callout callout-tip",children:[s.jsxs("div",{className:"callout-title",children:[s.jsx("i",{className:"fas fa-lightbulb"})," 팁"]}),s.jsxs("p",{children:["파일명은 반드시 ",s.jsx("code",{children:"public class"}),"의 이름과 같아야 합니다. ",s.jsx("code",{children:"MyProgram"})," 클래스는 ",s.jsx("code",{children:"MyProgram.java"})," 파일에 저장해야 합니다."]})]}),s.jsx("h2",{children:"6. IDE 설치"}),s.jsx("p",{children:"텍스트 에디터로도 개발할 수 있지만, IDE를 사용하면 생산성이 크게 향상됩니다."}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"IDE"}),s.jsx("th",{children:"특징"}),s.jsx("th",{children:"추천 대상"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"IntelliJ IDEA"})}),s.jsx("td",{children:"강력한 자동완성, 리팩토링"}),s.jsx("td",{children:"실무 개발자 (Community 무료)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Eclipse"})}),s.jsx("td",{children:"무료, 플러그인 풍부"}),s.jsx("td",{children:"학습용, 레거시 프로젝트"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"VS Code"})}),s.jsx("td",{children:"가볍고 빠름, Extension Pack"}),s.jsx("td",{children:"가벼운 개발, 학습용"})]})]})]}),s.jsx("h2",{children:"7. 주석"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," Comments.java"]})}),s.jsx("pre",{children:s.jsx("code",{children:`// 한 줄 주석

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
}`})})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsxs("h4",{children:[s.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),s.jsxs("ol",{children:[s.jsxs("li",{children:["JDK를 설치하고 ",s.jsx("code",{children:"java -version"})," 명령어로 버전을 확인해보세요."]}),s.jsx("li",{children:'"Hello, World!"를 출력하는 프로그램을 작성하고 컴파일, 실행해보세요.'}),s.jsx("li",{children:"자신의 이름과 나이를 출력하는 프로그램을 작성해보세요."}),s.jsx("li",{children:"Scanner를 사용하여 사용자 입력을 받아 인사하는 프로그램을 만들어보세요."})]})]}),s.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:s.jsx("button",{className:`btn ${l("01")?"btn-primary":"btn-accent"}`,onClick:()=>a("01"),children:l("01")?"✓ 학습 완료!":"학습 완료하기"})}),s.jsxs("div",{className:"lesson-nav",children:[s.jsxs(e,{to:"/",children:[s.jsx("i",{className:"fas fa-arrow-left"})," 홈으로"]}),s.jsxs(e,{to:"/java-learning/02",children:["다음: 변수와 자료형 ",s.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{r as default};
