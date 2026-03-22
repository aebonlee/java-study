import{u as l,r as c,j as e,L as s}from"./index-CcX9Sl05.js";function a(){const{completeLesson:r,isLessonCompleted:i}=l();return c.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 07"})]}),e.jsx("h1",{children:"Chapter 07. 인터페이스와 추상클래스"}),e.jsx("p",{children:"추상화의 두 가지 핵심 도구를 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 추상 클래스 (Abstract Class)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," AbstractExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 추상 클래스: 직접 인스턴스 생성 불가
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
}`})})]}),e.jsx("h2",{children:"2. 인터페이스 (Interface)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," InterfaceExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public interface Flyable {
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
duck.dive();  // 잠수합니다. (default)`})})]}),e.jsx("h2",{children:"3. 추상 클래스 vs 인터페이스"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"추상 클래스"}),e.jsx("th",{children:"인터페이스"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"키워드"})}),e.jsx("td",{children:e.jsx("code",{children:"abstract class"})}),e.jsx("td",{children:e.jsx("code",{children:"interface"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"다중 상속"})}),e.jsx("td",{children:"단일 상속만"}),e.jsx("td",{children:"다중 구현 가능"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"생성자"})}),e.jsx("td",{children:"가질 수 있음"}),e.jsx("td",{children:"가질 수 없음"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"필드"})}),e.jsx("td",{children:"인스턴스 변수 가능"}),e.jsx("td",{children:"상수(static final)만"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"메서드"})}),e.jsx("td",{children:"추상 + 일반 메서드"}),e.jsx("td",{children:"추상 + default + static"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"접근 제어자"})}),e.jsx("td",{children:"모든 제어자 가능"}),e.jsx("td",{children:"public만 (메서드)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"용도"})}),e.jsx("td",{children:"IS-A 관계, 공통 기반"}),e.jsx("td",{children:"CAN-DO 관계, 행위 정의"})]})]})]}),e.jsx("h2",{children:"4. 함수형 인터페이스"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," FunctionalInterface.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 추상 메서드가 하나뿐인 인터페이스
@FunctionalInterface
public interface MathOperation {
    int operate(int a, int b);
}

// 람다 표현식으로 구현 가능 (Chapter 10에서 자세히)
MathOperation add = (a, b) -> a + b;
MathOperation multiply = (a, b) -> a * b;

System.out.println(add.operate(5, 3));      // 8
System.out.println(multiply.operate(5, 3)); // 15`})})]}),e.jsx("h2",{children:"5. 내부 클래스"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," InnerClass.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Outer {
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
Outer.StaticInner si = new Outer.StaticInner();`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Comparable"})," 인터페이스를 구현하여 ",e.jsx("code",{children:"Student"})," 객체를 성적순으로 정렬하세요."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Printable"}),", ",e.jsx("code",{children:"Saveable"})," 두 인터페이스를 만들고 다중 구현하는 ",e.jsx("code",{children:"Document"})," 클래스를 작성하세요."]}),e.jsxs("li",{children:["추상 클래스 ",e.jsx("code",{children:"Vehicle"}),"과 인터페이스 ",e.jsx("code",{children:"Electric"}),"을 조합하여 ",e.jsx("code",{children:"ElectricCar"})," 클래스를 만드세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${i("07")?"btn-primary":"btn-accent"}`,onClick:()=>r("07"),children:i("07")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/06",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 상속과 다형성"]}),e.jsxs(s,{to:"/java-learning/08",children:["다음: 예외처리와 컬렉션 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{a as default};
