import{u as t,r as a,j as e,L as s}from"./index-CdClLn9b.js";function i(){const{completeLesson:n,isLessonCompleted:r}=t();return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 10"})]}),e.jsx("h1",{children:"Chapter 10. 람다와 스트림 API"}),e.jsx("p",{children:"함수형 프로그래밍과 Stream API를 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 람다 표현식"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Lambda.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 기본 문법: (매개변수) -> { 본문 }
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
Comparator<String> comp2 = (a, b) -> a.length() - b.length();`})})]}),e.jsx("h2",{children:"2. 주요 함수형 인터페이스"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"인터페이스"}),e.jsx("th",{children:"메서드"}),e.jsx("th",{children:"용도"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Predicate<T>"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean test(T)"})}),e.jsx("td",{children:"조건 검사"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Function<T,R>"})}),e.jsx("td",{children:e.jsx("code",{children:"R apply(T)"})}),e.jsx("td",{children:"변환"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Consumer<T>"})}),e.jsx("td",{children:e.jsx("code",{children:"void accept(T)"})}),e.jsx("td",{children:"소비 (반환값 없음)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Supplier<T>"})}),e.jsx("td",{children:e.jsx("code",{children:"T get()"})}),e.jsx("td",{children:"생산 (입력 없음)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"UnaryOperator<T>"})}),e.jsx("td",{children:e.jsx("code",{children:"T apply(T)"})}),e.jsx("td",{children:"단항 연산"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"BinaryOperator<T>"})}),e.jsx("td",{children:e.jsx("code",{children:"T apply(T,T)"})}),e.jsx("td",{children:"이항 연산"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," FunctionalInterfaces.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true

Function<String, Integer> strLen = String::length;
System.out.println(strLen.apply("Hello"));  // 5

Consumer<String> shout = s -> System.out.println(s.toUpperCase());
shout.accept("hello");  // HELLO

Supplier<Double> random = Math::random;
System.out.println(random.get());  // 0.xxx`})})]}),e.jsx("h2",{children:"3. 메서드 참조 (::)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MethodReference.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 정적 메서드 참조
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
names.stream().sorted(String::compareTo);`})})]}),e.jsx("h2",{children:"4. Stream API"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," StreamBasics.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

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
System.out.println(kimNames);  // [김영희, 김철수]`})})]}),e.jsx("h2",{children:"5. 주요 Stream 연산"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," StreamOperations.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`List<String> words = List.of("Hello", "World", "Java", "Stream", "API");

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
    .collect(Collectors.joining(", "));  // "Hello, World, Java, Stream, API"`})})]}),e.jsx("h2",{children:"6. Optional"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," OptionalExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`import java.util.Optional;

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
    .orElse("Anonymous");`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsx("li",{children:"정수 리스트에서 홀수만 골라 3배한 결과를 새 리스트로 만드세요."}),e.jsx("li",{children:"문자열 리스트에서 가장 긴 문자열을 Optional로 찾으세요."}),e.jsx("li",{children:"학생 리스트를 성적순으로 정렬하고, 상위 3명을 출력하세요."}),e.jsx("li",{children:"Map으로 단어 빈도수를 세는 스트림 파이프라인을 작성하세요."})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${r("10")?"btn-primary":"btn-accent"}`,onClick:()=>n("10"),children:r("10")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/09",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 제네릭과 열거형"]}),e.jsxs(s,{to:"/java-learning/11",children:["다음: 멀티스레드 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{i as default};
