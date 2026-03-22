import{u as n,r as t,j as e,L as s}from"./index-Cm0zx3b8.js";function l(){const{completeLesson:i,isLessonCompleted:a}=n();return t.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 08"})]}),e.jsx("h1",{children:"Chapter 08. 예외처리와 컬렉션"}),e.jsx("p",{children:"안전한 코드 작성을 위한 예외처리와 자료구조 컬렉션을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 예외 계층 구조"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," 예외 계층"]})}),e.jsx("pre",{children:e.jsx("code",{children:`Throwable
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
        └── ClassCastException`})})]}),e.jsx("h2",{children:"2. try-catch-finally"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," TryCatch.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`try {
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
}`})})]}),e.jsx("h2",{children:"3. throws와 throw"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ThrowExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// throws: 예외를 호출자에게 위임
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
}  // 자동으로 close() 호출`})})]}),e.jsx("h2",{children:"4. Collection Framework"}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 컬렉션 구조"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Collection"}),": List, Set, Queue",e.jsx("br",{}),e.jsx("strong",{children:"Map"}),": 키-값 쌍 (Collection 인터페이스와 별도)"]})]}),e.jsx("h3",{children:"List (순서 O, 중복 O)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ListExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import java.util.*;

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
linked.add(0, "B");  // 맨 앞에 삽입`})})]}),e.jsx("h3",{children:"Set (순서 X, 중복 X)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SetExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// HashSet (해시 기반, 순서 없음)
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
System.out.println(ordered);  // [C, A, B]`})})]}),e.jsx("h3",{children:"Map (키-값 쌍)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MapExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// HashMap
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
Map<String, Integer> sorted = new TreeMap<>(scores);`})})]}),e.jsx("h2",{children:"5. Collections 유틸리티"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CollectionsUtil.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`List<Integer> list = new ArrayList<>(List.of(3, 1, 4, 1, 5));

Collections.sort(list);           // [1, 1, 3, 4, 5]
Collections.reverse(list);        // [5, 4, 3, 1, 1]
Collections.shuffle(list);        // 무작위 섞기
Collections.max(list);            // 5
Collections.min(list);            // 1
Collections.frequency(list, 1);   // 2 (1의 개수)
Collections.unmodifiableList(list); // 읽기 전용 래퍼`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:["사용자 정의 예외 ",e.jsx("code",{children:"InvalidAgeException"}),"을 만들어 나이 유효성 검사에 사용하세요."]}),e.jsx("li",{children:"ArrayList에 학생 이름을 저장하고 알파벳순으로 정렬하여 출력하세요."}),e.jsx("li",{children:"HashMap으로 전화번호부를 구현하세요 (이름-번호 저장, 검색, 삭제)."}),e.jsx("li",{children:"HashSet으로 두 리스트의 교집합, 합집합, 차집합을 구하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${a("08")?"btn-primary":"btn-accent"}`,onClick:()=>i("08"),children:a("08")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/07",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 인터페이스와 추상클래스"]}),e.jsxs(s,{to:"/java-learning/09",children:["다음: 제네릭과 열거형 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{l as default};
