import{u as n,r as l,j as e,L as s}from"./index-FyFCdlVD.js";function r(){const{completeLesson:i,isLessonCompleted:a}=n();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/java-learning",children:"커리큘럼"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Chapter 06"})]}),e.jsx("h1",{children:"Chapter 06. 상속과 다형성"}),e.jsx("p",{children:"OOP의 핵심인 상속, 오버라이딩, 다형성을 학습합니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 상속 (Inheritance)"}),e.jsx("p",{children:"상속은 기존 클래스(부모)의 필드와 메서드를 새 클래스(자식)가 물려받는 것입니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Inheritance.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 부모 클래스
public class Animal {
    String name;
    int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println(name + "이(가) 먹이를 먹습니다.");
    }

    public void sleep() {
        System.out.println(name + "이(가) 잠을 잡니다.");
    }
}

// 자식 클래스
public class Dog extends Animal {
    String breed;

    public Dog(String name, int age, String breed) {
        super(name, age);  // 부모 생성자 호출
        this.breed = breed;
    }

    public void bark() {
        System.out.println(name + "이(가) 멍멍 짖습니다!");
    }
}

// 사용
Dog dog = new Dog("바둑이", 3, "진돗개");
dog.eat();   // 부모로부터 상속
dog.sleep(); // 부모로부터 상속
dog.bark();  // 자식 고유 메서드`})})]}),e.jsx("h2",{children:"2. 메서드 오버라이딩"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Override.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Cat extends Animal {
    public Cat(String name, int age) {
        super(name, age);
    }

    @Override  // 부모 메서드를 재정의
    public void eat() {
        System.out.println(name + "이(가) 생선을 먹습니다.");
    }

    public void purr() {
        System.out.println("그르르르...");
    }
}

Cat cat = new Cat("나비", 2);
cat.eat();  // "나비이(가) 생선을 먹습니다." (오버라이딩된 버전)`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 오버로딩 vs 오버라이딩"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"오버로딩(Overloading)"}),": 같은 클래스에서 같은 이름, 다른 매개변수",e.jsx("br",{}),e.jsx("strong",{children:"오버라이딩(Overriding)"}),": 자식 클래스에서 부모 메서드를 재정의"]})]}),e.jsx("h2",{children:"3. 다형성 (Polymorphism)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Polymorphism.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// 업캐스팅: 자식 → 부모 타입 (자동)
Animal a1 = new Dog("바둑이", 3, "진돗개");
Animal a2 = new Cat("나비", 2);

a1.eat();  // Dog의 eat (오버라이딩했다면)
a2.eat();  // "나비이(가) 생선을 먹습니다." (Cat의 eat)

// 다형성 활용: 부모 타입 배열에 다양한 자식 저장
Animal[] animals = {
    new Dog("멍멍이", 3, "리트리버"),
    new Cat("야옹이", 2),
    new Dog("초코", 1, "푸들")
};

for (Animal animal : animals) {
    animal.eat();  // 각 객체의 오버라이딩된 메서드 호출
}

// 다운캐스팅: 부모 → 자식 타입 (명시적)
Animal a = new Dog("바둑이", 3, "진돗개");
if (a instanceof Dog) {
    Dog d = (Dog) a;  // 다운캐스팅
    d.bark();         // Dog 고유 메서드 사용 가능
}

// Java 16+ 패턴 매칭
if (a instanceof Dog d) {
    d.bark();  // 바로 사용 가능
}`})})]}),e.jsx("h2",{children:"4. Object 클래스"}),e.jsxs("p",{children:["모든 Java 클래스는 암묵적으로 ",e.jsx("code",{children:"Object"})," 클래스를 상속합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ObjectMethods.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Point {
    int x, y;

    public Point(int x, int y) {
        this.x = x; this.y = y;
    }

    @Override
    public String toString() {
        return "Point(" + x + ", " + y + ")";
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Point other)) return false;
        return this.x == other.x && this.y == other.y;
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(x, y);
    }
}

Point p1 = new Point(1, 2);
Point p2 = new Point(1, 2);
System.out.println(p1);            // Point(1, 2)
System.out.println(p1.equals(p2)); // true`})})]}),e.jsx("h2",{children:"5. final 키워드"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," FinalKeyword.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// final 클래스: 상속 불가
final class Utility {
    public static int max(int a, int b) { return a > b ? a : b; }
}
// class ExtendedUtility extends Utility {}  // 컴파일 오류!

// final 메서드: 오버라이딩 불가
class Parent {
    public final void criticalMethod() {
        System.out.println("변경 불가능한 메서드");
    }
}

// final 변수: 상수
final int MAX_VALUE = 100;
// MAX_VALUE = 200;  // 컴파일 오류!`})})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsxs("h4",{children:[e.jsx("i",{className:"fas fa-pencil-alt"})," 연습문제"]}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Shape"})," 부모 클래스를 만들고 ",e.jsx("code",{children:"Circle"}),", ",e.jsx("code",{children:"Rectangle"})," 자식 클래스에서 ",e.jsx("code",{children:"area()"}),"를 오버라이딩하세요."]}),e.jsxs("li",{children:["다형성을 활용하여 ",e.jsx("code",{children:"Shape[]"})," 배열의 모든 도형 넓이를 합산하세요."]}),e.jsxs("li",{children:[e.jsx("code",{children:"toString()"}),"과 ",e.jsx("code",{children:"equals()"}),"를 오버라이딩하는 ",e.jsx("code",{children:"Student"})," 클래스를 만드세요."]})]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${a("06")?"btn-primary":"btn-accent"}`,onClick:()=>i("06"),children:a("06")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/java-learning/05",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: 클래스와 객체"]}),e.jsxs(s,{to:"/java-learning/07",children:["다음: 인터페이스와 추상클래스 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{r as default};
