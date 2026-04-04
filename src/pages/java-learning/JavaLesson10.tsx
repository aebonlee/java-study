import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson10() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 10</span>
          </div>
          <h1>Chapter 10. 람다와 스트림 API</h1>
          <p>함수형 프로그래밍과 Stream API를 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 람다 표현식</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Lambda.java</span></div>
            <pre><code>{`// 기본 문법: (매개변수) -> { 본문 }
Runnable r = () -> System.out.println("Hello Lambda!");
r.run();

// 매개변수가 하나면 괄호 생략 가능
Consumer<String> printer = s -> System.out.println(s);
printer.accept("람다 표현식");

// 여러 줄
Comparator<String> comp = (a, b) -> {
    int result = a.length() - b.length();
    return result;
};

// 간단한 경우 한 줄로
Comparator<String> comp2 = (a, b) -> a.length() - b.length();`}</code></pre>
          </div>

          <h2>2. 주요 함수형 인터페이스</h2>
          <table>
            <thead><tr><th>인터페이스</th><th>메서드</th><th>용도</th></tr></thead>
            <tbody>
              <tr><td><code>{'Predicate<T>'}</code></td><td><code>boolean test(T)</code></td><td>조건 검사</td></tr>
              <tr><td><code>{'Function<T,R>'}</code></td><td><code>R apply(T)</code></td><td>변환</td></tr>
              <tr><td><code>{'Consumer<T>'}</code></td><td><code>void accept(T)</code></td><td>소비 (반환값 없음)</td></tr>
              <tr><td><code>{'Supplier<T>'}</code></td><td><code>T get()</code></td><td>생산 (입력 없음)</td></tr>
              <tr><td><code>{'UnaryOperator<T>'}</code></td><td><code>T apply(T)</code></td><td>단항 연산</td></tr>
              <tr><td><code>{'BinaryOperator<T>'}</code></td><td><code>T apply(T,T)</code></td><td>이항 연산</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> FunctionalInterfaces.java</span></div>
            <pre><code>{`Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true

Function<String, Integer> strLen = String::length;
System.out.println(strLen.apply("Hello"));  // 5

Consumer<String> shout = s -> System.out.println(s.toUpperCase());
shout.accept("hello");  // HELLO

Supplier<Double> random = Math::random;
System.out.println(random.get());  // 0.xxx`}</code></pre>
          </div>

          <h2>3. 메서드 참조 (::)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> MethodReference.java</span></div>
            <pre><code>{`// 정적 메서드 참조
Function<String, Integer> parseInt = Integer::parseInt;

// 인스턴스 메서드 참조
Function<String, String> toUpper = String::toUpperCase;

// 생성자 참조
Supplier<ArrayList<String>> listFactory = ArrayList::new;
List<String> list = listFactory.get();

// 비교
List<String> names = List.of("Charlie", "Alice", "Bob");
// 람다
names.stream().sorted((a, b) -> a.compareTo(b));
// 메서드 참조
names.stream().sorted(String::compareTo);`}</code></pre>
          </div>

          <h2>4. Stream API</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> StreamBasics.java</span></div>
            <pre><code>{`List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 짝수만 골라서 제곱하고 합산
int sum = numbers.stream()
    .filter(n -> n % 2 == 0)      // 2, 4, 6, 8, 10
    .map(n -> n * n)               // 4, 16, 36, 64, 100
    .reduce(0, Integer::sum);      // 220
System.out.println(sum);

// 문자열 처리
List<String> names = List.of("홍길동", "김철수", "이영희", "박민수", "김영희");

List<String> kimNames = names.stream()
    .filter(name -> name.startsWith("김"))
    .sorted()
    .collect(Collectors.toList());
System.out.println(kimNames);  // [김영희, 김철수]`}</code></pre>
          </div>

          <h2>5. 주요 Stream 연산</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> StreamOperations.java</span></div>
            <pre><code>{`List<String> words = List.of("Hello", "World", "Java", "Stream", "API");

// 중간 연산 (Intermediate)
words.stream().filter(w -> w.length() > 4)     // 조건 필터
words.stream().map(String::toUpperCase)         // 변환
words.stream().sorted()                         // 정렬
words.stream().distinct()                       // 중복 제거
words.stream().limit(3)                         // 개수 제한
words.stream().skip(2)                          // 건너뛰기
words.stream().peek(System.out::println)        // 엿보기 (디버깅)

// 최종 연산 (Terminal)
words.stream().forEach(System.out::println);    // 반복
words.stream().count();                         // 개수
words.stream().collect(Collectors.toList());    // 리스트로
words.stream().toArray(String[]::new);          // 배열로
words.stream().findFirst();                     // 첫 번째
words.stream().anyMatch(w -> w.startsWith("J")); // 하나라도 매칭?
words.stream().allMatch(w -> w.length() > 2);    // 모두 매칭?

// Collectors
Map<Integer, List<String>> byLength = words.stream()
    .collect(Collectors.groupingBy(String::length));

String joined = words.stream()
    .collect(Collectors.joining(", "));  // "Hello, World, Java, Stream, API"`}</code></pre>
          </div>

          <h2>6. Optional</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> OptionalExample.java</span></div>
            <pre><code>{`import java.util.Optional;

// 생성
Optional<String> opt1 = Optional.of("Hello");
Optional<String> opt2 = Optional.empty();
Optional<String> opt3 = Optional.ofNullable(null);

// 값 가져오기
opt1.get();                      // "Hello"
opt2.orElse("기본값");           // "기본값"
opt2.orElseGet(() -> "생성된 값"); // 람다로 기본값

// 조건부 처리
opt1.ifPresent(val -> System.out.println(val));

// 변환
Optional<Integer> len = opt1.map(String::length);  // Optional[5]

// 체이닝
String result = Optional.ofNullable(getUserName())
    .map(String::trim)
    .filter(name -> !name.isEmpty())
    .orElse("Anonymous");`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>정수 리스트에서 홀수만 골라 3배한 결과를 새 리스트로 만드세요.</li>
              <li>문자열 리스트에서 가장 긴 문자열을 Optional로 찾으세요.</li>
              <li>학생 리스트를 성적순으로 정렬하고, 상위 3명을 출력하세요.</li>
              <li>Map으로 단어 빈도수를 세는 스트림 파이프라인을 작성하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('10') ? 'btn-primary' : 'btn-accent'}`}
              onClick={() => completeLesson('10')}>
              {isLessonCompleted('10') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/09"><i className="fas fa-arrow-left"></i> 이전: 제네릭과 열거형</Link>
            <Link to="/java-learning/11">다음: 멀티스레드 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
