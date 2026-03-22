import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson02() {
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
            <span>Chapter 02</span>
          </div>
          <h1>Chapter 02. 변수와 자료형</h1>
          <p>Java의 기본 자료형과 변수 선언 방법을 학습합니다</p>
        </div>
      </div>

      <div className="container">
        <div className="lesson-content">

          <h2>1. 변수 선언과 초기화</h2>
          <p>변수(Variable)는 데이터를 저장하는 메모리 공간에 붙인 이름입니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Variables.java</span></div>
            <pre><code>{`// 선언과 초기화
int age = 25;
String name = "홍길동";
double height = 175.5;
boolean isStudent = true;

// 선언 후 나중에 초기화
int score;
score = 100;

// 여러 변수 동시 선언
int x = 1, y = 2, z = 3;`}</code></pre>
          </div>

          <div className="callout callout-warning">
            <div className="callout-title"><i className="fas fa-exclamation-triangle"></i> 주의</div>
            <p>지역 변수는 반드시 초기화한 후에 사용해야 합니다. 초기화하지 않으면 컴파일 오류가 발생합니다.</p>
          </div>

          <h2>2. 기본 자료형 (Primitive Types)</h2>
          <p>Java에는 8가지 기본 자료형이 있습니다.</p>

          <table>
            <thead>
              <tr><th>구분</th><th>타입</th><th>크기</th><th>범위</th><th>기본값</th></tr>
            </thead>
            <tbody>
              <tr><td rowSpan={4}><strong>정수</strong></td><td><code>byte</code></td><td>1바이트</td><td>-128 ~ 127</td><td>0</td></tr>
              <tr><td><code>short</code></td><td>2바이트</td><td>-32,768 ~ 32,767</td><td>0</td></tr>
              <tr><td><code>int</code></td><td>4바이트</td><td>약 -21억 ~ 21억</td><td>0</td></tr>
              <tr><td><code>long</code></td><td>8바이트</td><td>약 -922경 ~ 922경</td><td>0L</td></tr>
              <tr><td rowSpan={2}><strong>실수</strong></td><td><code>float</code></td><td>4바이트</td><td>±3.4×10³⁸</td><td>0.0f</td></tr>
              <tr><td><code>double</code></td><td>8바이트</td><td>±1.8×10³⁰⁸</td><td>0.0</td></tr>
              <tr><td><strong>문자</strong></td><td><code>char</code></td><td>2바이트</td><td>0 ~ 65,535 (유니코드)</td><td>'\u0000'</td></tr>
              <tr><td><strong>논리</strong></td><td><code>boolean</code></td><td>1비트</td><td>true / false</td><td>false</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> PrimitiveTypes.java</span></div>
            <pre><code>{`public class PrimitiveTypes {
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
}`}</code></pre>
          </div>

          <h2>3. 참조 자료형</h2>
          <p>기본 자료형 외의 모든 타입은 참조 자료형입니다. 객체의 주소(참조)를 저장합니다.</p>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ReferenceTypes.java</span></div>
            <pre><code>{`// String (가장 많이 사용하는 참조 타입)
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
// int n = null;    // 컴파일 오류!`}</code></pre>
          </div>

          <h2>4. 리터럴</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Literals.java</span></div>
            <pre><code>{`// 정수 리터럴
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
        """;`}</code></pre>
          </div>

          <h2>5. 형변환 (Type Casting)</h2>

          <h3>자동 형변환 (묵시적/Widening)</h3>
          <p>작은 타입에서 큰 타입으로 자동 변환됩니다.</p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> AutoCasting.java</span></div>
            <pre><code>{`// byte → short → int → long → float → double
int i = 100;
long l = i;        // int → long (자동)
double d = l;      // long → double (자동)

char c = 'A';
int ascii = c;     // char → int (65)

System.out.println(l);      // 100
System.out.println(d);      // 100.0
System.out.println(ascii);  // 65`}</code></pre>
          </div>

          <h3>강제 형변환 (명시적/Narrowing)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ExplicitCasting.java</span></div>
            <pre><code>{`double d = 3.99;
int i = (int) d;     // 3 (소수점 버림, 반올림 아님!)

long l = 1000;
int j = (int) l;     // 1000

int big = 300;
byte b = (byte) big; // 44 (오버플로우 주의!)

// 정수 나눗셈 vs 실수 나눗셈
int a = 7, c = 2;
System.out.println(a / c);           // 3 (정수 나눗셈)
System.out.println((double) a / c);  // 3.5 (실수 나눗셈)`}</code></pre>
          </div>

          <div className="callout callout-danger">
            <div className="callout-title"><i className="fas fa-exclamation-circle"></i> 주의</div>
            <p>강제 형변환 시 데이터 손실이 발생할 수 있습니다. 특히 큰 값을 작은 타입으로 변환할 때 오버플로우에 주의하세요.</p>
          </div>

          <h2>6. 상수 (final)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Constants.java</span></div>
            <pre><code>{`// final 키워드로 상수 선언
final double PI = 3.141592;
final int MAX_SIZE = 100;
final String GREETING = "Hello";

// PI = 3.14;  // 컴파일 오류! 상수는 변경 불가

// 관례: 상수명은 대문자 + 밑줄
final int MAX_RETRY_COUNT = 3;
final String DB_URL = "jdbc:mysql://localhost:3306/mydb";`}</code></pre>
          </div>

          <h2>7. var 키워드 (Java 10+)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> VarKeyword.java</span></div>
            <pre><code>{`// 타입 추론 - 컴파일러가 타입을 추론
var name = "Java";        // String
var age = 25;             // int
var pi = 3.14;            // double
var list = new ArrayList<String>();  // ArrayList<String>

// 주의사항
// var x;              // 오류! 초기화 필수
// var y = null;       // 오류! 타입 추론 불가
// var 는 지역 변수에만 사용 가능 (필드, 매개변수 불가)`}</code></pre>
          </div>

          <h2>8. 변수의 스코프</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Scope.java</span></div>
            <pre><code>{`public class Scope {
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
}`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>8가지 기본 자료형을 각각 선언하고 값을 출력하는 프로그램을 작성하세요.</li>
              <li><code>int</code>형 변수에 2,000,000,000을 저장하고, 1,000,000,000을 더한 결과를 확인해보세요. (오버플로우)</li>
              <li><code>double</code> 값을 <code>int</code>로 형변환할 때 결과를 예측하고 확인해보세요.</li>
              <li><code>var</code> 키워드를 사용하여 다양한 타입의 변수를 선언해보세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button
              className={`btn ${isLessonCompleted('02') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('02')}
            >
              {isLessonCompleted('02') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>

          <div className="lesson-nav">
            <Link to="/java-learning/01"><i className="fas fa-arrow-left"></i> 이전: Java 소개</Link>
            <Link to="/java-learning/03">다음: 연산자와 제어문 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
