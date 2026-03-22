import{u as n,r as c,j as e,L as s}from"./index-ClQdwy-A.js";function d(){const{completeLesson:l,isLessonCompleted:i}=n();return c.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 02"})]}),e.jsx("h1",{children:"Chapter 02. 변수와 자료형"}),e.jsx("p",{children:"Java의 기본 자료형과 변수 선언 방법을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 변수 선언과 초기화"}),e.jsx("p",{children:"변수(Variable)는 데이터를 저장하는 메모리 공간에 붙인 이름입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Variables.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 선언과 초기화
int age = 25;
String name = "홍길동";
double height = 175.5;
boolean isStudent = true;

// 선언 후 나중에 초기화
int score;
score = 100;

// 여러 변수 동시 선언
int x = 1, y = 2, z = 3;`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," 주의"]}),e.jsx("p",{children:"지역 변수는 반드시 초기화한 후에 사용해야 합니다. 초기화하지 않으면 컴파일 오류가 발생합니다."})]}),e.jsx("h2",{children:"2. 기본 자료형 (Primitive Types)"}),e.jsx("p",{children:"Java에는 8가지 기본 자료형이 있습니다."}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"타입"}),e.jsx("th",{children:"크기"}),e.jsx("th",{children:"범위"}),e.jsx("th",{children:"기본값"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{rowSpan:4,children:e.jsx("strong",{children:"정수"})}),e.jsx("td",{children:e.jsx("code",{children:"byte"})}),e.jsx("td",{children:"1바이트"}),e.jsx("td",{children:"-128 ~ 127"}),e.jsx("td",{children:"0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"short"})}),e.jsx("td",{children:"2바이트"}),e.jsx("td",{children:"-32,768 ~ 32,767"}),e.jsx("td",{children:"0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"int"})}),e.jsx("td",{children:"4바이트"}),e.jsx("td",{children:"약 -21억 ~ 21억"}),e.jsx("td",{children:"0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"long"})}),e.jsx("td",{children:"8바이트"}),e.jsx("td",{children:"약 -922경 ~ 922경"}),e.jsx("td",{children:"0L"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:2,children:e.jsx("strong",{children:"실수"})}),e.jsx("td",{children:e.jsx("code",{children:"float"})}),e.jsx("td",{children:"4바이트"}),e.jsx("td",{children:"±3.4×10³⁸"}),e.jsx("td",{children:"0.0f"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"double"})}),e.jsx("td",{children:"8바이트"}),e.jsx("td",{children:"±1.8×10³⁰⁸"}),e.jsx("td",{children:"0.0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"문자"})}),e.jsx("td",{children:e.jsx("code",{children:"char"})}),e.jsx("td",{children:"2바이트"}),e.jsx("td",{children:"0 ~ 65,535 (유니코드)"}),e.jsx("td",{children:"'\\u0000'"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"논리"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"1비트"}),e.jsx("td",{children:"true / false"}),e.jsx("td",{children:"false"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," PrimitiveTypes.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class PrimitiveTypes {
    public static void main(String[] args) {
        // 정수형
        byte b = 127;
        short s = 32000;
        int i = 2_000_000_000;  // 언더스코어로 가독성 향상
        long l = 9_000_000_000L;  // L 접미사 필수

        // 실수형
        float f = 3.14f;  // f 접미사 필수
        double d = 3.141592653589793;

        // 문자형
        char c = 'A';
        char korean = '가';
        char unicode = '\\u0041';  // 'A'

        // 논리형
        boolean flag = true;

        System.out.println("int: " + i);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + flag);
    }
}`})})]}),e.jsx("h2",{children:"3. 참조 자료형"}),e.jsx("p",{children:"기본 자료형 외의 모든 타입은 참조 자료형입니다. 객체의 주소(참조)를 저장합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ReferenceTypes.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// String (가장 많이 사용하는 참조 타입)
String greeting = "안녕하세요";
String name = new String("Java");

// 배열
int[] numbers = {1, 2, 3, 4, 5};
String[] fruits = new String[3];

// Wrapper 클래스 (기본형의 객체 버전)
Integer num = 42;       // auto-boxing
int value = num;        // auto-unboxing
Double pi = 3.14;

// null (참조 타입만 가능)
String str = null;  // OK
// int n = null;    // 컴파일 오류!`})})]}),e.jsx("h2",{children:"4. 리터럴"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Literals.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 정수 리터럴
int decimal = 42;         // 10진수
int binary = 0b101010;    // 2진수 (0b 접두사)
int octal = 052;          // 8진수 (0 접두사)
int hex = 0x2A;           // 16진수 (0x 접두사)

// 실수 리터럴
double d1 = 3.14;
double d2 = 3.14e2;      // 314.0 (지수 표기)
float f1 = 3.14f;

// 문자 리터럴
char c1 = 'A';
char c2 = '\\n';          // 이스케이프 문자 (줄바꿈)
char c3 = '\\t';          // 탭

// 문자열 리터럴
String s1 = "Hello";
String s2 = "줄바꿈\\n포함";

// Java 15+ 텍스트 블록
String json = """
        {
            "name": "Java",
            "version": 21
        }
        """;`})})]}),e.jsx("h2",{children:"5. 형변환 (Type Casting)"}),e.jsx("h3",{children:"자동 형변환 (묵시적/Widening)"}),e.jsx("p",{children:"작은 타입에서 큰 타입으로 자동 변환됩니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AutoCasting.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// byte → short → int → long → float → double
int i = 100;
long l = i;        // int → long (자동)
double d = l;      // long → double (자동)

char c = 'A';
int ascii = c;     // char → int (65)

System.out.println(l);      // 100
System.out.println(d);      // 100.0
System.out.println(ascii);  // 65`})})]}),e.jsx("h3",{children:"강제 형변환 (명시적/Narrowing)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ExplicitCasting.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`double d = 3.99;
int i = (int) d;     // 3 (소수점 버림, 반올림 아님!)

long l = 1000;
int j = (int) l;     // 1000

int big = 300;
byte b = (byte) big; // 44 (오버플로우 주의!)

// 정수 나눗셈 vs 실수 나눗셈
int a = 7, c = 2;
System.out.println(a / c);           // 3 (정수 나눗셈)
System.out.println((double) a / c);  // 3.5 (실수 나눗셈)`})})]}),e.jsxs("div",{className:"callout callout-danger",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-circle"})," 주의"]}),e.jsx("p",{children:"강제 형변환 시 데이터 손실이 발생할 수 있습니다. 특히 큰 값을 작은 타입으로 변환할 때 오버플로우에 주의하세요."})]}),e.jsx("h2",{children:"6. 상수 (final)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Constants.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// final 키워드로 상수 선언
final double PI = 3.141592;
final int MAX_SIZE = 100;
final String GREETING = "Hello";

// PI = 3.14;  // 컴파일 오류! 상수는 변경 불가

// 관례: 상수명은 대문자 + 밑줄
final int MAX_RETRY_COUNT = 3;
final String DB_URL = "jdbc:mysql://localhost:3306/mydb";`})})]}),e.jsx("h2",{children:"7. var 키워드 (Java 10+)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," VarKeyword.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 타입 추론 - 컴파일러가 타입을 추론
var name = "Java";        // String
var age = 25;             // int
var pi = 3.14;            // double
var list = new ArrayList<String>();  // ArrayList<String>

// 주의사항
// var x;              // 오류! 초기화 필수
// var y = null;       // 오류! 타입 추론 불가
// var 는 지역 변수에만 사용 가능 (필드, 매개변수 불가)`})})]}),e.jsx("h2",{children:"8. 변수의 스코프"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Scope.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Scope {
    static int classVar = 10;  // 클래스 변수 (static)
    int instanceVar = 20;      // 인스턴스 변수

    public void method() {
        int localVar = 30;     // 지역 변수

        if (true) {
            int blockVar = 40; // 블록 변수
            System.out.println(blockVar);  // OK
        }
        // System.out.println(blockVar);  // 오류! 블록 밖

        for (int i = 0; i < 5; i++) {
            // i는 for 블록 안에서만 유효
        }
        // System.out.println(i);  // 오류!
    }
}`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"8가지 기본 자료형을 각각 선언하고 값을 출력하는 프로그램을 작성하세요."}),e.jsxs("li",{children:[e.jsx("code",{children:"int"}),"형 변수에 2,000,000,000을 저장하고, 1,000,000,000을 더한 결과를 확인해보세요. (오버플로우)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"double"})," 값을 ",e.jsx("code",{children:"int"}),"로 형변환할 때 결과를 예측하고 확인해보세요."]}),e.jsxs("li",{children:[e.jsx("code",{children:"var"})," 키워드를 사용하여 다양한 타입의 변수를 선언해보세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${i("02")?"btn-secondary":"btn-accent"}`,onClick:()=>l("02"),children:i("02")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/01",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: Java 소개"]}),e.jsxs(s,{to:"/java-learning/03",children:["다음: 연산자와 제어문 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{d as default};
