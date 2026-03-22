import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson09() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 09</span>
          </div>
          <h1>Chapter 09. 제네릭과 열거형</h1>
          <p>타입 안전성을 높이는 제네릭과 열거형(enum)을 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 제네릭 (Generics)</h2>
          <p>제네릭은 클래스나 메서드에서 사용할 타입을 매개변수화하여 <strong>타입 안전성</strong>을 보장합니다.</p>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> GenericBox.java</span></div>
            <pre><code>{`// 제네릭 클래스
public class Box<T> {
    private T content;

    public void put(T item) { this.content = item; }
    public T get() { return content; }

    @Override
    public String toString() {
        return "Box[" + content + "]";
    }
}

// 사용
Box<String> strBox = new Box<>();
strBox.put("Hello");
String s = strBox.get();  // 캐스팅 불필요

Box<Integer> intBox = new Box<>();
intBox.put(42);
int n = intBox.get();  // auto-unboxing

// 제네릭이 없었다면...
// Box oldBox = new Box();
// oldBox.put("Hello");
// String s = (String) oldBox.get();  // 캐스팅 필요, 런타임 오류 위험`}</code></pre>
          </div>

          <h2>2. 제네릭 메서드</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> GenericMethod.java</span></div>
            <pre><code>{`public class Util {
    // 제네릭 메서드
    public static <T> void printArray(T[] array) {
        for (T item : array) {
            System.out.print(item + " ");
        }
        System.out.println();
    }

    // 두 개의 타입 매개변수
    public static <K, V> void printPair(K key, V value) {
        System.out.println(key + " = " + value);
    }
}

Integer[] nums = {1, 2, 3};
String[] names = {"A", "B", "C"};
Util.printArray(nums);    // 1 2 3
Util.printArray(names);   // A B C
Util.printPair("name", "Java");  // name = Java`}</code></pre>
          </div>

          <h2>3. 와일드카드</h2>
          <table>
            <thead><tr><th>와일드카드</th><th>의미</th><th>읽기/쓰기</th></tr></thead>
            <tbody>
              <tr><td><code>{'<?>'}</code></td><td>모든 타입</td><td>읽기만 (Object로)</td></tr>
              <tr><td><code>{'<? extends T>'}</code></td><td>T 또는 T의 하위 타입</td><td>읽기만 (상한 제한)</td></tr>
              <tr><td><code>{'<? super T>'}</code></td><td>T 또는 T의 상위 타입</td><td>쓰기 가능 (하한 제한)</td></tr>
            </tbody>
          </table>

          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Wildcard.java</span></div>
            <pre><code>{`// ? extends T : 읽기용 (Producer)
public static double sum(List<? extends Number> list) {
    double total = 0;
    for (Number n : list) {
        total += n.doubleValue();
    }
    return total;
}

List<Integer> ints = List.of(1, 2, 3);
List<Double> doubles = List.of(1.5, 2.5);
sum(ints);     // OK
sum(doubles);  // OK

// ? super T : 쓰기용 (Consumer)
public static void addNumbers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
}

List<Number> numbers = new ArrayList<>();
addNumbers(numbers);  // OK`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> PECS 원칙</div>
            <p><strong>P</strong>roducer <strong>E</strong>xtends, <strong>C</strong>onsumer <strong>S</strong>uper — 데이터를 읽을 때는 extends, 쓸 때는 super를 사용합니다.</p>
          </div>

          <h2>4. 열거형 (Enum)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> EnumExample.java</span></div>
            <pre><code>{`// 기본 enum
public enum Season {
    SPRING, SUMMER, FALL, WINTER
}

Season s = Season.SPRING;
System.out.println(s);           // SPRING
System.out.println(s.name());    // SPRING
System.out.println(s.ordinal()); // 0

// switch와 함께
switch (s) {
    case SPRING -> System.out.println("봄");
    case SUMMER -> System.out.println("여름");
    case FALL -> System.out.println("가을");
    case WINTER -> System.out.println("겨울");
}

// 필드와 메서드를 가진 enum
public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.976e+24, 6.37814e6);

    private final double mass;
    private final double radius;

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }
}

System.out.println(Planet.EARTH.surfaceGravity());  // 약 9.8

// values(), valueOf()
for (Season season : Season.values()) {
    System.out.println(season);
}
Season spring = Season.valueOf("SPRING");`}</code></pre>
          </div>

          <h2>5. EnumSet & EnumMap</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> EnumCollections.java</span></div>
            <pre><code>{`import java.util.EnumSet;
import java.util.EnumMap;

// EnumSet: enum 전용 고성능 Set
EnumSet<Season> warmSeasons = EnumSet.of(Season.SPRING, Season.SUMMER);
EnumSet<Season> allSeasons = EnumSet.allOf(Season.class);
EnumSet<Season> noSeasons = EnumSet.noneOf(Season.class);

// EnumMap: enum 키 전용 Map
EnumMap<Season, String> descriptions = new EnumMap<>(Season.class);
descriptions.put(Season.SPRING, "따뜻한 봄");
descriptions.put(Season.SUMMER, "무더운 여름");`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li>두 개의 타입 매개변수를 가진 <code>{'Pair<K, V>'}</code> 클래스를 작성하세요.</li>
              <li>와일드카드를 사용하여 모든 숫자 리스트의 평균을 구하는 메서드를 만드세요.</li>
              <li>요일 enum을 만들고 평일/주말을 판별하는 메서드를 추가하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('09') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('09')}>
              {isLessonCompleted('09') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/08"><i className="fas fa-arrow-left"></i> 이전: 예외처리와 컬렉션</Link>
            <Link to="/java-learning/10">다음: 람다와 스트림 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
