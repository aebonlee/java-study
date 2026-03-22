import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson05() {
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
            <span>Chapter 05</span>
          </div>
          <h1>Chapter 05. 클래스와 객체</h1>
          <p>객체지향 프로그래밍의 기본, 클래스와 객체를 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 객체지향 프로그래밍 (OOP)</h2>
          <p>객체지향 프로그래밍은 데이터와 기능을 <strong>객체</strong>라는 단위로 묶어서 관리하는 패러다임입니다.</p>
          <table>
            <thead><tr><th>특성</th><th>설명</th></tr></thead>
            <tbody>
              <tr><td><strong>캡슐화</strong></td><td>데이터와 메서드를 하나로 묶고, 외부 접근을 제한</td></tr>
              <tr><td><strong>상속</strong></td><td>기존 클래스의 속성과 기능을 물려받아 확장</td></tr>
              <tr><td><strong>다형성</strong></td><td>같은 인터페이스로 다른 동작을 수행</td></tr>
              <tr><td><strong>추상화</strong></td><td>복잡한 내부를 숨기고 핵심만 노출</td></tr>
            </tbody>
          </table>

          <h2>2. 클래스와 객체 생성</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Person.java</span></div>
            <pre><code>{`public class Person {
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
p1.birthday();   // 홍길동의 생일! 이제 26세입니다.`}</code></pre>
          </div>

          <h2>3. 생성자 (Constructor)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Student.java</span></div>
            <pre><code>{`public class Student {
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
Student s3 = new Student("이영희", 2, "서울고");`}</code></pre>
          </div>

          <h2>4. 접근 제어자</h2>
          <table>
            <thead><tr><th>제어자</th><th>같은 클래스</th><th>같은 패키지</th><th>자식 클래스</th><th>전체</th></tr></thead>
            <tbody>
              <tr><td><code>public</code></td><td>O</td><td>O</td><td>O</td><td>O</td></tr>
              <tr><td><code>protected</code></td><td>O</td><td>O</td><td>O</td><td>X</td></tr>
              <tr><td><code>(default)</code></td><td>O</td><td>O</td><td>X</td><td>X</td></tr>
              <tr><td><code>private</code></td><td>O</td><td>X</td><td>X</td><td>X</td></tr>
            </tbody>
          </table>

          <h2>5. Getter/Setter와 캡슐화</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> BankAccount.java</span></div>
            <pre><code>{`public class BankAccount {
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
}`}</code></pre>
          </div>

          <h2>6. static 키워드</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Counter.java</span></div>
            <pre><code>{`public class Counter {
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
System.out.println(c1.getId());          // 1`}</code></pre>
          </div>

          <div className="callout callout-tip">
            <div className="callout-title"><i className="fas fa-lightbulb"></i> static 메서드 주의사항</div>
            <p>static 메서드 안에서는 인스턴스 변수나 인스턴스 메서드에 직접 접근할 수 없습니다. static 멤버만 사용할 수 있습니다.</p>
          </div>

          <h2>7. 메서드 오버로딩</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> Calculator.java</span></div>
            <pre><code>{`public class Calculator {
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
calc.add("Hello", " World");  // "Hello World"`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li><code>Rectangle</code> 클래스를 만들어 넓이와 둘레를 구하는 메서드를 작성하세요.</li>
              <li>학생 정보를 관리하는 클래스를 만들고 캡슐화를 적용하세요.</li>
              <li>static을 활용하여 객체 생성 횟수를 추적하는 클래스를 만드세요.</li>
              <li>다양한 타입을 받는 오버로딩된 <code>print</code> 메서드를 작성하세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('05') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('05')}>
              {isLessonCompleted('05') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/04"><i className="fas fa-arrow-left"></i> 이전: 배열과 문자열</Link>
            <Link to="/java-learning/06">다음: 상속과 다형성 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
