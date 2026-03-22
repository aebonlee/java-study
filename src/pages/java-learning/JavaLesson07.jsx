import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../../contexts/ProgressContext'

export default function JavaLesson07() {
  const { completeLesson, isLessonCompleted } = useProgress()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="java-lesson">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">홈</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <Link to="/java-learning">커리큘럼</Link><i className="fas fa-chevron-right" style={{fontSize:'10px'}}></i>
            <span>Chapter 07</span>
          </div>
          <h1>Chapter 07. 인터페이스와 추상클래스</h1>
          <p>추상화의 두 가지 핵심 도구를 학습합니다</p>
        </div>
      </div>
      <div className="container">
        <div className="lesson-content">

          <h2>1. 추상 클래스 (Abstract Class)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> AbstractExample.java</span></div>
            <pre><code>{`// 추상 클래스: 직접 인스턴스 생성 불가
public abstract class Shape {
    String color;

    public Shape(String color) {
        this.color = color;
    }

    // 추상 메서드: 구현 없이 선언만
    public abstract double area();
    public abstract double perimeter();

    // 일반 메서드: 구현 포함 가능
    public void describe() {
        System.out.println(color + " 도형, 넓이: " + area());
    }
}

public class Circle extends Shape {
    double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double area() { return Math.PI * radius * radius; }

    @Override
    public double perimeter() { return 2 * Math.PI * radius; }
}

public class Rectangle extends Shape {
    double width, height;

    public Rectangle(String color, double w, double h) {
        super(color);
        this.width = w; this.height = h;
    }

    @Override
    public double area() { return width * height; }

    @Override
    public double perimeter() { return 2 * (width + height); }
}`}</code></pre>
          </div>

          <h2>2. 인터페이스 (Interface)</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> InterfaceExample.java</span></div>
            <pre><code>{`public interface Flyable {
    // 추상 메서드 (public abstract 생략 가능)
    void fly();
    int getAltitude();

    // 상수 (public static final 생략 가능)
    int MAX_ALTITUDE = 10000;

    // default 메서드 (Java 8+) - 구현 포함 가능
    default void land() {
        System.out.println("착륙합니다.");
    }

    // static 메서드 (Java 8+)
    static boolean canFly(Object obj) {
        return obj instanceof Flyable;
    }
}

public interface Swimmable {
    void swim();
    default void dive() {
        System.out.println("잠수합니다.");
    }
}

// 다중 구현
public class Duck implements Flyable, Swimmable {
    @Override
    public void fly() { System.out.println("오리가 날아갑니다."); }

    @Override
    public int getAltitude() { return 100; }

    @Override
    public void swim() { System.out.println("오리가 수영합니다."); }
}

Duck duck = new Duck();
duck.fly();   // 오리가 날아갑니다.
duck.swim();  // 오리가 수영합니다.
duck.land();  // 착륙합니다. (default)
duck.dive();  // 잠수합니다. (default)`}</code></pre>
          </div>

          <h2>3. 추상 클래스 vs 인터페이스</h2>
          <table>
            <thead><tr><th>구분</th><th>추상 클래스</th><th>인터페이스</th></tr></thead>
            <tbody>
              <tr><td><strong>키워드</strong></td><td><code>abstract class</code></td><td><code>interface</code></td></tr>
              <tr><td><strong>다중 상속</strong></td><td>단일 상속만</td><td>다중 구현 가능</td></tr>
              <tr><td><strong>생성자</strong></td><td>가질 수 있음</td><td>가질 수 없음</td></tr>
              <tr><td><strong>필드</strong></td><td>인스턴스 변수 가능</td><td>상수(static final)만</td></tr>
              <tr><td><strong>메서드</strong></td><td>추상 + 일반 메서드</td><td>추상 + default + static</td></tr>
              <tr><td><strong>접근 제어자</strong></td><td>모든 제어자 가능</td><td>public만 (메서드)</td></tr>
              <tr><td><strong>용도</strong></td><td>IS-A 관계, 공통 기반</td><td>CAN-DO 관계, 행위 정의</td></tr>
            </tbody>
          </table>

          <h2>4. 함수형 인터페이스</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> FunctionalInterface.java</span></div>
            <pre><code>{`// 추상 메서드가 하나뿐인 인터페이스
@FunctionalInterface
public interface MathOperation {
    int operate(int a, int b);
}

// 람다 표현식으로 구현 가능 (Chapter 10에서 자세히)
MathOperation add = (a, b) -> a + b;
MathOperation multiply = (a, b) -> a * b;

System.out.println(add.operate(5, 3));      // 8
System.out.println(multiply.operate(5, 3)); // 15`}</code></pre>
          </div>

          <h2>5. 내부 클래스</h2>
          <div className="code-block">
            <div className="code-header"><span className="file-name"><i className="fas fa-file-code"></i> InnerClass.java</span></div>
            <pre><code>{`public class Outer {
    private int x = 10;

    // 1. 내부 클래스 (인스턴스)
    class Inner {
        void show() {
            System.out.println("x = " + x);  // 외부 필드 접근 가능
        }
    }

    // 2. 정적 내부 클래스
    static class StaticInner {
        void show() {
            System.out.println("정적 내부 클래스");
        }
    }

    // 3. 익명 클래스
    public void doSomething() {
        Runnable r = new Runnable() {
            @Override
            public void run() {
                System.out.println("익명 클래스 실행!");
            }
        };
        r.run();
    }
}

Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
Outer.StaticInner si = new Outer.StaticInner();`}</code></pre>
          </div>

          <div className="exercise-box">
            <h4><i className="fas fa-pencil-alt"></i> 연습문제</h4>
            <ol>
              <li><code>Comparable</code> 인터페이스를 구현하여 <code>Student</code> 객체를 성적순으로 정렬하세요.</li>
              <li><code>Printable</code>, <code>Saveable</code> 두 인터페이스를 만들고 다중 구현하는 <code>Document</code> 클래스를 작성하세요.</li>
              <li>추상 클래스 <code>Vehicle</code>과 인터페이스 <code>Electric</code>을 조합하여 <code>ElectricCar</code> 클래스를 만드세요.</li>
            </ol>
          </div>

          <div style={{marginTop:'32px', textAlign:'center'}}>
            <button className={`btn ${isLessonCompleted('07') ? 'btn-secondary' : 'btn-accent'}`}
              onClick={() => completeLesson('07')}>
              {isLessonCompleted('07') ? '✓ 학습 완료!' : '학습 완료하기'}
            </button>
          </div>
          <div className="lesson-nav">
            <Link to="/java-learning/06"><i className="fas fa-arrow-left"></i> 이전: 상속과 다형성</Link>
            <Link to="/java-learning/08">다음: 예외처리와 컬렉션 <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
