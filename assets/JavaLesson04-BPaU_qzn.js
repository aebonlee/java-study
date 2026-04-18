import{u as n,r as a,j as s,L as e}from"./index-mr2CxoUl.js";function t(){const{completeLesson:i,isLessonCompleted:r}=n();return a.useEffect(()=>{window.scrollTo(0,0)},[]),s.jsxs("main",{className:"java-lesson",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"breadcrumb",children:[s.jsx(e,{to:"/",children:"홈"}),s.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),s.jsx(e,{to:"/java-learning",children:"커리큘럼"}),s.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),s.jsx("span",{children:"Chapter 04"})]}),s.jsx("h1",{children:"Chapter 04. 배열과 문자열"}),s.jsx("p",{children:"배열, 다차원 배열, String 클래스의 핵심 기능을 다룹니다"})]})}),s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-content",children:[s.jsx("h2",{children:"1. 배열 선언과 초기화"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," ArrayBasics.java"]})}),s.jsx("pre",{children:s.jsx("code",{children:`// 선언과 생성
int[] numbers = new int[5];  // 크기 5, 기본값 0

// 선언과 동시에 초기화
int[] scores = {90, 85, 78, 92, 88};
String[] names = {"김철수", "이영희", "박민수"};

// 요소 접근 (0부터 시작)
System.out.println(scores[0]);  // 90
System.out.println(scores[4]);  // 88
scores[1] = 95;  // 값 변경

// 배열 길이
System.out.println(scores.length);  // 5

// 배열 순회
for (int i = 0; i < scores.length; i++) {
    System.out.println("점수[" + i + "] = " + scores[i]);
}

// for-each 순회
for (int score : scores) {
    System.out.println(score);
}`})})]}),s.jsx("h2",{children:"2. 다차원 배열"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," MultiArray.java"]})}),s.jsx("pre",{children:s.jsx("code",{children:`// 2차원 배열
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[1][2]);  // 6

// 순회
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.printf("%d ", matrix[i][j]);
    }
    System.out.println();
}

// 가변 배열 (각 행의 길이가 다름)
int[][] jagged = new int[3][];
jagged[0] = new int[]{1, 2};
jagged[1] = new int[]{3, 4, 5};
jagged[2] = new int[]{6};`})})]}),s.jsx("h2",{children:"3. Arrays 유틸리티 클래스"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," ArraysUtil.java"]})}),s.jsx("pre",{children:s.jsx("code",{children:`import java.util.Arrays;

int[] arr = {5, 3, 1, 4, 2};

// 정렬
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));  // [1, 2, 3, 4, 5]

// 이진 탐색 (정렬된 배열에서)
int index = Arrays.binarySearch(arr, 3);
System.out.println("index of 3: " + index);  // 2

// 채우기
int[] filled = new int[5];
Arrays.fill(filled, 7);
System.out.println(Arrays.toString(filled));  // [7, 7, 7, 7, 7]

// 복사
int[] copy = Arrays.copyOf(arr, 3);       // [1, 2, 3]
int[] range = Arrays.copyOfRange(arr, 1, 4); // [2, 3, 4]

// 비교
int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(Arrays.equals(a, b));  // true`})})]}),s.jsx("h2",{children:"4. String 클래스"}),s.jsxs("div",{className:"callout callout-info",children:[s.jsxs("div",{className:"callout-title",children:[s.jsx("i",{className:"fas fa-info-circle"})," String의 불변성"]}),s.jsxs("p",{children:["Java의 String은 ",s.jsx("strong",{children:"불변(immutable)"})," 객체입니다. 문자열을 변경하면 새로운 객체가 생성됩니다."]})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," StringMethods.java"]})}),s.jsx("pre",{children:s.jsx("code",{children:`String str = "Hello, Java!";

// 기본 메서드
str.length()           // 12
str.charAt(0)          // 'H'
str.indexOf("Java")    // 7
str.lastIndexOf("l")   // 3
str.contains("Java")   // true
str.isEmpty()          // false
str.isBlank()          // false (Java 11+)

// 추출
str.substring(7)       // "Java!"
str.substring(0, 5)    // "Hello"

// 변환
str.toUpperCase()      // "HELLO, JAVA!"
str.toLowerCase()      // "hello, java!"
str.trim()             // 앞뒤 공백 제거
str.strip()            // 유니코드 공백도 제거 (Java 11+)
str.replace("Java", "World")  // "Hello, World!"

// 분할과 결합
String csv = "사과,바나나,포도";
String[] fruits = csv.split(",");  // ["사과", "바나나", "포도"]
String joined = String.join(" | ", fruits);  // "사과 | 바나나 | 포도"

// 비교
"hello".equals("Hello")            // false
"hello".equalsIgnoreCase("Hello")  // true
"apple".compareTo("banana")        // 음수 (사전순 앞)

// 시작/끝 확인
"Hello.java".startsWith("Hello")   // true
"Hello.java".endsWith(".java")     // true`})})]}),s.jsx("h2",{children:"5. String vs StringBuilder vs StringBuffer"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"구분"}),s.jsx("th",{children:"String"}),s.jsx("th",{children:"StringBuilder"}),s.jsx("th",{children:"StringBuffer"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"가변성"})}),s.jsx("td",{children:"불변 (immutable)"}),s.jsx("td",{children:"가변 (mutable)"}),s.jsx("td",{children:"가변 (mutable)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"스레드 안전"})}),s.jsx("td",{children:"O"}),s.jsx("td",{children:"X"}),s.jsx("td",{children:"O (synchronized)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"성능"})}),s.jsx("td",{children:"반복 변경 시 느림"}),s.jsx("td",{children:"가장 빠름"}),s.jsx("td",{children:"StringBuilder보다 느림"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"사용 시점"})}),s.jsx("td",{children:"변경이 적을 때"}),s.jsx("td",{children:"단일 스레드에서 잦은 변경"}),s.jsx("td",{children:"멀티스레드에서 잦은 변경"})]})]})]}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," StringBuilderExample.java"]})}),s.jsx("pre",{children:s.jsx("code",{children:`// StringBuilder 사용
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.insert(5, ",");
System.out.println(sb.toString());  // "Hello, World"

sb.replace(7, 12, "Java");
System.out.println(sb);  // "Hello, Java"

sb.delete(5, 7);
System.out.println(sb);  // "HelloJava"

sb.reverse();
System.out.println(sb);  // "avaJolleH"

// 성능 차이 예시
// 나쁜 예 (매번 새 객체 생성)
String result = "";
for (int i = 0; i < 10000; i++) {
    result += i;  // 느림!
}

// 좋은 예 (하나의 객체에서 변경)
StringBuilder fast = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    fast.append(i);  // 빠름!
}`})})]}),s.jsx("h2",{children:"6. String 포맷팅"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:s.jsxs("span",{className:"file-name",children:[s.jsx("i",{className:"fas fa-file-code"})," StringFormat.java"]})}),s.jsx("pre",{children:s.jsx("code",{children:`String name = "홍길동";
int age = 25;
double score = 95.5;

// printf
System.out.printf("이름: %s, 나이: %d, 점수: %.1f%n", name, age, score);

// String.format
String info = String.format("이름: %s, 나이: %d세", name, age);
System.out.println(info);

// 주요 포맷 지정자
// %s : 문자열    %d : 정수     %f : 실수
// %c : 문자      %b : boolean  %n : 줄바꿈
// %10s : 오른쪽 정렬 (폭 10)
// %-10s : 왼쪽 정렬
// %.2f : 소수점 2자리`})})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsxs("h4",{children:[s.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),s.jsxs("ol",{children:[s.jsx("li",{children:"정수 배열에서 최대값과 최소값을 찾는 프로그램을 작성하세요."}),s.jsx("li",{children:"3x3 행렬의 전치 행렬(행과 열을 바꿈)을 구하세요."}),s.jsx("li",{children:"문자열을 입력받아 각 문자의 빈도수를 세는 프로그램을 만드세요."}),s.jsx("li",{children:"StringBuilder를 사용하여 문자열을 뒤집는 메서드를 작성하세요."})]})]}),s.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:s.jsx("button",{className:`btn ${r("04")?"btn-primary":"btn-accent"}`,onClick:()=>i("04"),children:r("04")?"✓ 학습 완료!":"학습 완료하기"})}),s.jsxs("div",{className:"lesson-nav",children:[s.jsxs(e,{to:"/java-learning/03",children:[s.jsx("i",{className:"fas fa-arrow-left"})," 이전: 연산자와 제어문"]}),s.jsxs(e,{to:"/java-learning/05",children:["다음: 클래스와 객체 ",s.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{t as default};
