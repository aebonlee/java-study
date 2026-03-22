import{u as i,r as l,j as e,L as s}from"./index-ng2oLB6S.js";function t(){const{completeLesson:a,isLessonCompleted:n}=i();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 09"})]}),e.jsx("h1",{children:"Chapter 09. 제네릭과 열거형"}),e.jsx("p",{children:"타입 안전성을 높이는 제네릭과 열거형(enum)을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 제네릭 (Generics)"}),e.jsxs("p",{children:["제네릭은 클래스나 메서드에서 사용할 타입을 매개변수화하여 ",e.jsx("strong",{children:"타입 안전성"}),"을 보장합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," GenericBox.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 제네릭 클래스
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
// String s = (String) oldBox.get();  // 캐스팅 필요, 런타임 오류 위험`})})]}),e.jsx("h2",{children:"2. 제네릭 메서드"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," GenericMethod.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Util {
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
Util.printPair("name", "Java");  // name = Java`})})]}),e.jsx("h2",{children:"3. 와일드카드"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"와일드카드"}),e.jsx("th",{children:"의미"}),e.jsx("th",{children:"읽기/쓰기"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<?>"})}),e.jsx("td",{children:"모든 타입"}),e.jsx("td",{children:"읽기만 (Object로)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<? extends T>"})}),e.jsx("td",{children:"T 또는 T의 하위 타입"}),e.jsx("td",{children:"읽기만 (상한 제한)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<? super T>"})}),e.jsx("td",{children:"T 또는 T의 상위 타입"}),e.jsx("td",{children:"쓰기 가능 (하한 제한)"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Wildcard.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ? extends T : 읽기용 (Producer)
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
addNumbers(numbers);  // OK`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," PECS 원칙"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"P"}),"roducer ",e.jsx("strong",{children:"E"}),"xtends, ",e.jsx("strong",{children:"C"}),"onsumer ",e.jsx("strong",{children:"S"}),"uper — 데이터를 읽을 때는 extends, 쓸 때는 super를 사용합니다."]})]}),e.jsx("h2",{children:"4. 열거형 (Enum)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," EnumExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 기본 enum
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
Season spring = Season.valueOf("SPRING");`})})]}),e.jsx("h2",{children:"5. EnumSet & EnumMap"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," EnumCollections.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import java.util.EnumSet;
import java.util.EnumMap;

// EnumSet: enum 전용 고성능 Set
EnumSet<Season> warmSeasons = EnumSet.of(Season.SPRING, Season.SUMMER);
EnumSet<Season> allSeasons = EnumSet.allOf(Season.class);
EnumSet<Season> noSeasons = EnumSet.noneOf(Season.class);

// EnumMap: enum 키 전용 Map
EnumMap<Season, String> descriptions = new EnumMap<>(Season.class);
descriptions.put(Season.SPRING, "따뜻한 봄");
descriptions.put(Season.SUMMER, "무더운 여름");`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["두 개의 타입 매개변수를 가진 ",e.jsx("code",{children:"Pair<K, V>"})," 클래스를 작성하세요."]}),e.jsx("li",{children:"와일드카드를 사용하여 모든 숫자 리스트의 평균을 구하는 메서드를 만드세요."}),e.jsx("li",{children:"요일 enum을 만들고 평일/주말을 판별하는 메서드를 추가하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${n("09")?"btn-primary":"btn-accent"}`,onClick:()=>a("09"),children:n("09")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/08",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 예외처리와 컬렉션"]}),e.jsxs(s,{to:"/java-learning/10",children:["다음: 람다와 스트림 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{t as default};
