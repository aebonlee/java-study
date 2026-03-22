import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson04() {
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
            <span>Chapter 04</span>
          </div>
          <h1>Chapter 04. 배열과 문자열</h1>
          <p>배열, 다차원 배열, String 클래스의 핵심 기능을 다룹니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 배열 선언과 초기화</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ArrayBasics.java</span></div>
            <pre><code>{`// 선언과 생성
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
}`}</code></pre>
          </div>

          <h2>2. 다차원 배열</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MultiArray.java</span></div>
            <pre><code>{`// 2차원 배열
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
jagged[2] = new int[]{6};`}</code></pre>
          </div>

          <h2>3. Arrays 유틸리티 클래스</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ArraysUtil.java</span></div>
            <pre><code>{`import java.util.Arrays;

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
System.out.println(Arrays.equals(a, b));  // true`}</code></pre>
          </div>

          <h2>4. String 클래스</h2>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> String의 불변성</div>
            <p>Java의 String은 <strong>불변(immutable)</strong> 객체입니다. 문자열을 변경하면 새로운 객체가 생성됩니다.</p>
          </div>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> StringMethods.java</span></div>
            <pre><code>{`String str = "Hello, Java!";

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
"Hello.java".endsWith(".java")     // true`}</code></pre>
          </div>

          <h2>5. String vs StringBuilder vs StringBuffer</h2>
          <table>
            <thead>
              <tr><th>구분</th><th>String</th><th>StringBuilder</th><th>StringBuffer</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>가변성</strong></td><td>불변 (immutable)</td><td>가변 (mutable)</td><td>가변 (mutable)</td></tr>
              <tr><td><strong>스레드 안전</strong></td><td>O</td><td>X</td><td>O (synchronized)</td></tr>
              <tr><td><strong>성능</strong></td><td>반복 변경 시 느림</td><td>가장 빠름</td><td>StringBuilder보다 느림</td></tr>
              <tr><td><strong>사용 시점</strong></td><td>변경이 적을 때</td><td>단일 스레드에서 잦은 변경</td><td>멀티스레드에서 잦은 변경</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> StringBuilderExample.java</span></div>
            <pre><code>{`// StringBuilder 사용
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
}`}</code></pre>
          </div>

          <h2>6. String 포맷팅</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> StringFormat.java</span></div>
            <pre><code>{`String name = "홍길동";
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
// %.2f : 소수점 2자리`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>정수 배열에서 최대값과 최소값을 찾는 프로그램을 작성하세요.</li>
              <li>3x3 행렬의 전치 행렬(행과 열을 바꿈)을 구하세요.</li>
              <li>문자열을 입력받아 각 문자의 빈도수를 세는 프로그램을 만드세요.</li>
              <li>StringBuilder를 사용하여 문자열을 뒤집는 메서드를 작성하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('04') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('04')}>
              {isLessonCompleted('04') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/03"><i className="fas fa-arrow-left"></i> 이전: 연산자와 제어문</Link>
            <Link to="/java-learning/05">다음: 클래스와 객체 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
