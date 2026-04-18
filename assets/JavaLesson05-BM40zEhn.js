import{u as i,r as t,j as e,L as s}from"./index-mr2CxoUl.js";function a(){const{completeLesson:c,isLessonCompleted:n}=i();return t.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 05"})]}),e.jsx("h1",{children:"Chapter 05. 클래스와 객체"}),e.jsx("p",{children:"객체지향 프로그래밍의 기본, 클래스와 객체를 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 객체지향 프로그래밍 (OOP)"}),e.jsxs("p",{children:["객체지향 프로그래밍은 데이터와 기능을 ",e.jsx("strong",{children:"객체"}),"라는 단위로 묶어서 관리하는 패러다임입니다."]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"특성"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"캡슐화"})}),e.jsx("td",{children:"데이터와 메서드를 하나로 묶고, 외부 접근을 제한"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"상속"})}),e.jsx("td",{children:"기존 클래스의 속성과 기능을 물려받아 확장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"다형성"})}),e.jsx("td",{children:"같은 인터페이스로 다른 동작을 수행"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"추상화"})}),e.jsx("td",{children:"복잡한 내부를 숨기고 핵심만 노출"})]})]})]}),e.jsx("h2",{children:"2. 클래스와 객체 생성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Person.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Person {
    // 필드 (속성)
    String name;
    int age;

    // 메서드 (기능)
    void introduce() {
        System.out.println("안녕하세요, " + name + "(" + age + "세)입니다.");
    }

    void birthday() {
        age++;
        System.out.println(name + "의 생일! 이제 " + age + "세입니다.");
    }
}

// 사용
Person p1 = new Person();  // 객체 생성
p1.name = "홍길동";
p1.age = 25;
p1.introduce();  // 안녕하세요, 홍길동(25세)입니다.
p1.birthday();   // 홍길동의 생일! 이제 26세입니다.`})})]}),e.jsx("h2",{children:"3. 생성자 (Constructor)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Student.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Student {
    String name;
    int grade;
    String school;

    // 기본 생성자
    public Student() {
        this.name = "이름없음";
        this.grade = 1;
        this.school = "미정";
    }

    // 매개변수 생성자
    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
        this.school = "미정";
    }

    // 전체 매개변수 생성자
    public Student(String name, int grade, String school) {
        this.name = name;
        this.grade = grade;
        this.school = school;
    }

    // this()로 다른 생성자 호출
    public Student(String name) {
        this(name, 1, "기본학교");  // 3개짜리 생성자 호출
    }
}

// 사용
Student s1 = new Student();
Student s2 = new Student("김철수", 3);
Student s3 = new Student("이영희", 2, "서울고");`})})]}),e.jsx("h2",{children:"4. 접근 제어자"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"제어자"}),e.jsx("th",{children:"같은 클래스"}),e.jsx("th",{children:"같은 패키지"}),e.jsx("th",{children:"자식 클래스"}),e.jsx("th",{children:"전체"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"public"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"protected"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"(default)"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"X"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"private"})}),e.jsx("td",{children:"O"}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"X"}),e.jsx("td",{children:"X"})]})]})]}),e.jsx("h2",{children:"5. Getter/Setter와 캡슐화"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BankAccount.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class BankAccount {
    private String owner;
    private int balance;  // 외부에서 직접 접근 불가

    public BankAccount(String owner, int balance) {
        this.owner = owner;
        this.balance = balance;
    }

    // Getter
    public String getOwner() { return owner; }
    public int getBalance() { return balance; }

    // Setter (유효성 검사 포함)
    public void setBalance(int balance) {
        if (balance < 0) {
            System.out.println("잔액은 음수일 수 없습니다.");
            return;
        }
        this.balance = balance;
    }

    // 비즈니스 로직
    public void deposit(int amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + "원 입금. 잔액: " + balance);
        }
    }

    public void withdraw(int amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println(amount + "원 출금. 잔액: " + balance);
        } else {
            System.out.println("출금 불가!");
        }
    }
}`})})]}),e.jsx("h2",{children:"6. static 키워드"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Counter.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Counter {
    private static int count = 0;  // 클래스 변수 (모든 인스턴스 공유)
    private int id;                // 인스턴스 변수

    public Counter() {
        count++;
        this.id = count;
    }

    // static 메서드 (객체 없이 호출 가능)
    public static int getCount() {
        return count;
    }

    public int getId() { return id; }
}

// 사용
Counter c1 = new Counter();  // count = 1
Counter c2 = new Counter();  // count = 2
Counter c3 = new Counter();  // count = 3

System.out.println(Counter.getCount());  // 3 (클래스명으로 호출)
System.out.println(c1.getId());          // 1`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," static 메서드 주의사항"]}),e.jsx("p",{children:"static 메서드 안에서는 인스턴스 변수나 인스턴스 메서드에 직접 접근할 수 없습니다. static 멤버만 사용할 수 있습니다."})]}),e.jsx("h2",{children:"7. 메서드 오버로딩"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Calculator.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Calculator {
    // 같은 이름, 다른 매개변수 → 오버로딩
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    String add(String a, String b) { return a + b; }
}

Calculator calc = new Calculator();
calc.add(1, 2);        // 3     (int 버전)
calc.add(1.5, 2.5);   // 4.0   (double 버전)
calc.add(1, 2, 3);    // 6     (3개짜리)
calc.add("Hello", " World");  // "Hello World"`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Rectangle"})," 클래스를 만들어 넓이와 둘레를 구하는 메서드를 작성하세요."]}),e.jsx("li",{children:"학생 정보를 관리하는 클래스를 만들고 캡슐화를 적용하세요."}),e.jsx("li",{children:"static을 활용하여 객체 생성 횟수를 추적하는 클래스를 만드세요."}),e.jsxs("li",{children:["다양한 타입을 받는 오버로딩된 ",e.jsx("code",{children:"print"})," 메서드를 작성하세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${n("05")?"btn-primary":"btn-accent"}`,onClick:()=>c("05"),children:n("05")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/04",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 배열과 문자열"]}),e.jsxs(s,{to:"/java-learning/06",children:["다음: 상속과 다형성 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{a as default};
