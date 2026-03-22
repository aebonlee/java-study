import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson03() {
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
            <span>Chapter 03</span>
          </div>
          <h1>Chapter 03. 연산자와 제어문</h1>
          <p>다양한 연산자와 조건문, 반복문을 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 산술 연산자</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Arithmetic.java</span></div>
            <pre><code>{`int a = 10, b = 3;

System.out.println(a + b);   // 13  (덧셈)
System.out.println(a - b);   // 7   (뺄셈)
System.out.println(a * b);   // 30  (곱셈)
System.out.println(a / b);   // 3   (나눗셈 - 정수끼리는 정수 결과)
System.out.println(a % b);   // 1   (나머지)

// 실수 나눗셈
System.out.println(10.0 / 3);    // 3.3333...
System.out.println((double) a / b); // 3.3333...

// 증감 연산자
int x = 5;
System.out.println(x++);  // 5 (후위: 사용 후 증가)
System.out.println(x);    // 6
System.out.println(++x);  // 7 (전위: 증가 후 사용)`}</code></pre>
          </div>

          <h2>2. 비교 연산자</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Comparison.java</span></div>
            <pre><code>{`int a = 10, b = 20;

System.out.println(a == b);   // false
System.out.println(a != b);   // true
System.out.println(a > b);    // false
System.out.println(a < b);    // true
System.out.println(a >= 10);  // true
System.out.println(a <= 5);   // false

// 문자열 비교: == 대신 equals() 사용!
String s1 = "hello";
String s2 = new String("hello");
System.out.println(s1 == s2);      // false (주소 비교)
System.out.println(s1.equals(s2)); // true  (값 비교)`}</code></pre>
          </div>

          <div className="callout callout-danger">
            <div className="callout-title"><i className="fas fa-exclamation-circle"></i> 중요</div>
            <p>문자열 비교 시 <code>==</code>는 참조(주소)를 비교합니다. 값을 비교하려면 반드시 <code>.equals()</code>를 사용하세요!</p>
          </div>

          <h2>3. 논리 연산자</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Logical.java</span></div>
            <pre><code>{`boolean a = true, b = false;

System.out.println(a && b);  // false (AND: 둘 다 true여야 true)
System.out.println(a || b);  // true  (OR: 하나만 true면 true)
System.out.println(!a);      // false (NOT: 반전)

// 단축 평가 (Short-circuit evaluation)
// && : 왼쪽이 false면 오른쪽 평가 안 함
// || : 왼쪽이 true면 오른쪽 평가 안 함
int x = 0;
if (x != 0 && 10 / x > 1) {  // x가 0이면 나눗셈 실행 안 됨
    System.out.println("안전!");
}`}</code></pre>
          </div>

          <h2>4. 대입 연산자와 삼항 연산자</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Assignment.java</span></div>
            <pre><code>{`// 복합 대입 연산자
int n = 10;
n += 5;   // n = n + 5  → 15
n -= 3;   // n = n - 3  → 12
n *= 2;   // n = n * 2  → 24
n /= 4;   // n = n / 4  → 6
n %= 4;   // n = n % 4  → 2

// 삼항 연산자: 조건 ? 참일때 : 거짓일때
int age = 20;
String result = (age >= 18) ? "성인" : "미성년자";
System.out.println(result);  // 성인

int score = 85;
String grade = (score >= 90) ? "A" : (score >= 80) ? "B" : "C";
System.out.println(grade);   // B`}</code></pre>
          </div>

          <h2>5. if-else 문</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> IfElse.java</span></div>
            <pre><code>{`int score = 85;

// 단순 if
if (score >= 90) {
    System.out.println("우수");
}

// if-else
if (score >= 60) {
    System.out.println("합격");
} else {
    System.out.println("불합격");
}

// if-else if-else
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else if (score >= 60) {
    System.out.println("D");
} else {
    System.out.println("F");
}`}</code></pre>
          </div>

          <h2>6. switch 문</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Switch.java</span></div>
            <pre><code>{`// 전통적 switch
int day = 3;
switch (day) {
    case 1: System.out.println("월요일"); break;
    case 2: System.out.println("화요일"); break;
    case 3: System.out.println("수요일"); break;
    case 4: System.out.println("목요일"); break;
    case 5: System.out.println("금요일"); break;
    default: System.out.println("주말");
}

// Java 14+ Enhanced switch (화살표 구문)
String dayName = switch (day) {
    case 1 -> "월요일";
    case 2 -> "화요일";
    case 3 -> "수요일";
    case 4 -> "목요일";
    case 5 -> "금요일";
    case 6, 7 -> "주말";
    default -> "알 수 없음";
};
System.out.println(dayName);  // 수요일

// String switch (Java 7+)
String command = "start";
switch (command) {
    case "start" -> System.out.println("시작합니다");
    case "stop" -> System.out.println("정지합니다");
    case "restart" -> System.out.println("재시작합니다");
    default -> System.out.println("알 수 없는 명령");
}`}</code></pre>
          </div>

          <h2>7. 반복문</h2>
          <h3>for 문</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ForLoop.java</span></div>
            <pre><code>{`// 기본 for
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}

// 1부터 100까지 합
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
System.out.println("합계: " + sum);  // 5050

// 구구단
for (int dan = 2; dan <= 9; dan++) {
    for (int i = 1; i <= 9; i++) {
        System.out.printf("%d x %d = %d%n", dan, i, dan * i);
    }
}

// Enhanced for (for-each)
int[] nums = {10, 20, 30, 40, 50};
for (int n : nums) {
    System.out.println(n);
}`}</code></pre>
          </div>

          <h3>while / do-while</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> WhileLoop.java</span></div>
            <pre><code>{`// while
int count = 0;
while (count < 5) {
    System.out.println("count: " + count);
    count++;
}

// do-while (최소 1번 실행)
int num = 0;
do {
    System.out.println("num: " + num);
    num++;
} while (num < 3);`}</code></pre>
          </div>

          <h2>8. break와 continue</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> BreakContinue.java</span></div>
            <pre><code>{`// break: 반복문 탈출
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.println(i);  // 0, 1, 2, 3, 4
}

// continue: 현재 반복 건너뛰기
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;  // 짝수 건너뛰기
    System.out.println(i);  // 1, 3, 5, 7, 9
}

// 레이블을 사용한 중첩 반복문 탈출
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) break outer;
        System.out.printf("(%d, %d) ", i, j);
    }
}
// (0,0) (0,1) (0,2) (1,0)`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>1부터 100까지 짝수의 합을 구하는 프로그램을 작성하세요.</li>
              <li>switch 문으로 월(1~12)을 입력받아 해당 월의 계절을 출력하세요.</li>
              <li>구구단 중 3의 배수 단(3, 6, 9단)만 출력하세요.</li>
              <li>1부터 시작하여 합이 1000을 넘는 최초의 수를 찾으세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('03') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('03')}>
              {isLessonCompleted('03') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/02"><i className="fas fa-arrow-left"></i> 이전: 변수와 자료형</Link>
            <Link to="/java-learning/04">다음: 배열과 문자열 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
