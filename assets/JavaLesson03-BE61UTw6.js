import{u as a,r as l,j as e,L as s}from"./index-C8q_r35B.js";function r(){const{completeLesson:i,isLessonCompleted:n}=a();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 03"})]}),e.jsx("h1",{children:"Chapter 03. 연산자와 제어문"}),e.jsx("p",{children:"다양한 연산자와 조건문, 반복문을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 산술 연산자"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Arithmetic.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`int a = 10, b = 3;

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
System.out.println(++x);  // 7 (전위: 증가 후 사용)`})})]}),e.jsx("h2",{children:"2. 비교 연산자"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Comparison.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`int a = 10, b = 20;

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
System.out.println(s1.equals(s2)); // true  (값 비교)`})})]}),e.jsxs("div",{className:"callout callout-danger",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-circle"})," 중요"]}),e.jsxs("p",{children:["문자열 비교 시 ",e.jsx("code",{children:"=="}),"는 참조(주소)를 비교합니다. 값을 비교하려면 반드시 ",e.jsx("code",{children:".equals()"}),"를 사용하세요!"]})]}),e.jsx("h2",{children:"3. 논리 연산자"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Logical.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`boolean a = true, b = false;

System.out.println(a && b);  // false (AND: 둘 다 true여야 true)
System.out.println(a || b);  // true  (OR: 하나만 true면 true)
System.out.println(!a);      // false (NOT: 반전)

// 단축 평가 (Short-circuit evaluation)
// && : 왼쪽이 false면 오른쪽 평가 안 함
// || : 왼쪽이 true면 오른쪽 평가 안 함
int x = 0;
if (x != 0 && 10 / x > 1) {  // x가 0이면 나눗셈 실행 안 됨
    System.out.println("안전!");
}`})})]}),e.jsx("h2",{children:"4. 대입 연산자와 삼항 연산자"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Assignment.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 복합 대입 연산자
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
System.out.println(grade);   // B`})})]}),e.jsx("h2",{children:"5. if-else 문"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," IfElse.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`int score = 85;

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
}`})})]}),e.jsx("h2",{children:"6. switch 문"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Switch.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 전통적 switch
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
}`})})]}),e.jsx("h2",{children:"7. 반복문"}),e.jsx("h3",{children:"for 문"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ForLoop.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 기본 for
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
}`})})]}),e.jsx("h3",{children:"while / do-while"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," WhileLoop.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// while
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
} while (num < 3);`})})]}),e.jsx("h2",{children:"8. break와 continue"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BreakContinue.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// break: 반복문 탈출
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
// (0,0) (0,1) (0,2) (1,0)`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"1부터 100까지 짝수의 합을 구하는 프로그램을 작성하세요."}),e.jsx("li",{children:"switch 문으로 월(1~12)을 입력받아 해당 월의 계절을 출력하세요."}),e.jsx("li",{children:"구구단 중 3의 배수 단(3, 6, 9단)만 출력하세요."}),e.jsx("li",{children:"1부터 시작하여 합이 1000을 넘는 최초의 수를 찾으세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${n("03")?"btn-primary":"btn-accent"}`,onClick:()=>i("03"),children:n("03")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/02",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 변수와 자료형"]}),e.jsxs(s,{to:"/java-learning/04",children:["다음: 배열과 문자열 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{r as default};
