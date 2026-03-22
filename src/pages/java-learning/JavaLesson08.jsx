import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson08() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 08</span>
          </div>
          <h1>Chapter 08. 예외처리와 컬렉션</h1>
          <p>안전한 코드 작성을 위한 예외처리와 자료구조 컬렉션을 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 예외 계층 구조</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> 예외 계층</span></div>
            <pre><code>{`Throwable
├── Error (시스템 오류 - 처리 불가)
│   ├── OutOfMemoryError
│   └── StackOverflowError
└── Exception (처리 가능한 예외)
    ├── Checked Exception (컴파일 시 검사)
    │   ├── IOException
    │   ├── SQLException
    │   └── ClassNotFoundException
    └── RuntimeException (Unchecked - 실행 시 발생)
        ├── NullPointerException
        ├── ArrayIndexOutOfBoundsException
        ├── ArithmeticException
        └── ClassCastException`}</code></pre>
          </div>

          <h2>2. try-catch-finally</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> TryCatch.java</span></div>
            <pre><code>{`try {
    int[] arr = {1, 2, 3};
    System.out.println(arr[5]);  // ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("배열 범위 초과: " + e.getMessage());
} catch (Exception e) {
    System.out.println("기타 예외: " + e.getMessage());
} finally {
    System.out.println("항상 실행됩니다.");
}

// 멀티 catch (Java 7+)
try {
    // ...
} catch (IOException | SQLException e) {
    System.out.println("I/O 또는 DB 오류: " + e.getMessage());
}`}</code></pre>
          </div>

          <h2>3. throws와 throw</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ThrowExample.java</span></div>
            <pre><code>{`// throws: 예외를 호출자에게 위임
public static int divide(int a, int b) throws ArithmeticException {
    if (b == 0) {
        throw new ArithmeticException("0으로 나눌 수 없습니다.");
    }
    return a / b;
}

// 사용자 정의 예외
public class InsufficientBalanceException extends Exception {
    private int amount;

    public InsufficientBalanceException(String msg, int amount) {
        super(msg);
        this.amount = amount;
    }

    public int getAmount() { return amount; }
}

// try-with-resources (Java 7+)
try (FileReader fr = new FileReader("data.txt");
     BufferedReader br = new BufferedReader(fr)) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}  // 자동으로 close() 호출`}</code></pre>
          </div>

          <h2>4. Collection Framework</h2>
          <div className="callout callout-info">
            <div className="callout-title"><i className="fas fa-info-circle"></i> 컬렉션 구조</div>
            <p><strong>Collection</strong>: List, Set, Queue<br/>
            <strong>Map</strong>: 키-값 쌍 (Collection 인터페이스와 별도)</p>
          </div>

          <h3>List (순서 O, 중복 O)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> ListExample.java</span></div>
            <pre><code>{`import java.util.*;

// ArrayList (배열 기반, 랜덤 접근 빠름)
List<String> names = new ArrayList<>();
names.add("홍길동");
names.add("김철수");
names.add("이영희");

System.out.println(names.get(0));  // 홍길동
System.out.println(names.size());  // 3
names.remove("김철수");
names.contains("이영희");  // true

// 순회
for (String name : names) {
    System.out.println(name);
}

// List.of (불변 리스트, Java 9+)
List<Integer> immutable = List.of(1, 2, 3);
// immutable.add(4);  // UnsupportedOperationException!

// LinkedList (삽입/삭제 빠름)
List<String> linked = new LinkedList<>();
linked.add("A");
linked.add(0, "B");  // 맨 앞에 삽입`}</code></pre>
          </div>

          <h3>Set (순서 X, 중복 X)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> SetExample.java</span></div>
            <pre><code>{`// HashSet (해시 기반, 순서 없음)
Set<String> fruits = new HashSet<>();
fruits.add("사과");
fruits.add("바나나");
fruits.add("사과");  // 중복 무시
System.out.println(fruits.size());  // 2

// TreeSet (정렬된 순서)
Set<Integer> sorted = new TreeSet<>();
sorted.add(3); sorted.add(1); sorted.add(2);
System.out.println(sorted);  // [1, 2, 3]

// LinkedHashSet (삽입 순서 유지)
Set<String> ordered = new LinkedHashSet<>();
ordered.add("C"); ordered.add("A"); ordered.add("B");
System.out.println(ordered);  // [C, A, B]`}</code></pre>
          </div>

          <h3>Map (키-값 쌍)</h3>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MapExample.java</span></div>
            <pre><code>{`// HashMap
Map<String, Integer> scores = new HashMap<>();
scores.put("홍길동", 90);
scores.put("김철수", 85);
scores.put("이영희", 95);

System.out.println(scores.get("홍길동"));  // 90
scores.containsKey("김철수");  // true
scores.getOrDefault("박민수", 0);  // 0

// 순회
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// forEach (Java 8+)
scores.forEach((name, score) ->
    System.out.println(name + " = " + score));

// Map.of (불변, Java 9+)
Map<String, String> config = Map.of("host", "localhost", "port", "3306");

// TreeMap (키 정렬)
Map<String, Integer> sorted = new TreeMap<>(scores);`}</code></pre>
          </div>

          <h2>5. Collections 유틸리티</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> CollectionsUtil.java</span></div>
            <pre><code>{`List<Integer> list = new ArrayList<>(List.of(3, 1, 4, 1, 5));

Collections.sort(list);           // [1, 1, 3, 4, 5]
Collections.reverse(list);        // [5, 4, 3, 1, 1]
Collections.shuffle(list);        // 무작위 섞기
Collections.max(list);            // 5
Collections.min(list);            // 1
Collections.frequency(list, 1);   // 2 (1의 개수)
Collections.unmodifiableList(list); // 읽기 전용 래퍼`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>사용자 정의 예외 <code>InvalidAgeException</code>을 만들어 나이 유효성 검사에 사용하세요.</li>
              <li>ArrayList에 학생 이름을 저장하고 알파벳순으로 정렬하여 출력하세요.</li>
              <li>HashMap으로 전화번호부를 구현하세요 (이름-번호 저장, 검색, 삭제).</li>
              <li>HashSet으로 두 리스트의 교집합, 합집합, 차집합을 구하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('08') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('08')}>
              {isLessonCompleted('08') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/07"><i className="fas fa-arrow-left"></i> 이전: 인터페이스와 추상클래스</Link>
            <Link to="/java-learning/09">다음: 제네릭과 열거형 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
