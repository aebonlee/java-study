import{u as t,r as l,j as e,L as s}from"./index-CdClLn9b.js";function n(){const{completeLesson:r,isLessonCompleted:i}=t();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("main",{className:"java-lesson",children:[e.jsx("div",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"breadcrumb",children:[e.jsx(s,{to:"/",children:"홈"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx(s,{to:"/practical",children:"실무 Java"}),e.jsx("i",{className:"fas fa-chevron-right",style:{fontSize:"10px"}}),e.jsx("span",{children:"Lesson 07"})]}),e.jsx("h1",{children:"Lesson 07. 클린 코드와 리팩토링"}),e.jsx("p",{children:"네이밍, SOLID 5원칙, 리팩토링 기법, 코드 스멜을 배웁니다"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"1. 클린 코드란?"}),e.jsxs("p",{children:[e.jsx("strong",{children:"클린 코드(Clean Code)"}),"란 읽기 쉽고, 이해하기 쉬우며, 변경하기 쉬운 코드를 말합니다. Robert C. Martin(Uncle Bob)이 저서 ",e.jsx("em",{children:'"Clean Code: A Handbook of Agile Software Craftsmanship"'}),"에서 체계적으로 정리한 개념으로, 현대 소프트웨어 개발의 필수 덕목이 되었습니다."]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," 클린 코드의 정의"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"비야네 스트롭스트룹(C++ 창시자):"}),' "나는 우아하고 효율적인 코드를 좋아한다. 논리가 간단해야 버그가 숨어들지 못한다."',e.jsx("br",{}),e.jsx("strong",{children:"그래디 부치:"}),' "클린 코드는 잘 쓴 문장처럼 읽힌다."',e.jsx("br",{}),e.jsx("strong",{children:"로버트 C. 마틴:"}),' "클린 코드는 한 가지를 제대로 한다."']})]}),e.jsx("h3",{children:"클린 코드가 중요한 이유"}),e.jsxs("p",{children:["소프트웨어 개발에서 코드를 ",e.jsx("strong",{children:"작성하는 시간보다 읽는 시간이 10배 이상"})," 많습니다. 팀 프로젝트에서는 다른 개발자가 내 코드를 읽고, 내가 다른 개발자의 코드를 읽어야 합니다. 클린 코드는 생산성과 유지보수성을 극대화합니다."]}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"구분"}),e.jsx("th",{children:"클린 코드"}),e.jsx("th",{children:"나쁜 코드"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"가독성"})}),e.jsx("td",{children:"의도가 명확히 드러남"}),e.jsx("td",{children:"해독이 필요함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"유지보수"})}),e.jsx("td",{children:"수정이 쉽고 안전함"}),e.jsx("td",{children:"수정 시 사이드 이펙트 발생"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"버그"})}),e.jsx("td",{children:"버그가 숨을 곳이 적음"}),e.jsx("td",{children:"버그가 숨기 좋은 구조"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"협업"})}),e.jsx("td",{children:"새 팀원도 빠르게 이해"}),e.jsx("td",{children:"작성자 외에는 이해 불가"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"테스트"})}),e.jsx("td",{children:"테스트 작성이 쉬움"}),e.jsx("td",{children:"테스트가 어렵거나 불가능"})]})]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BadCode.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 나쁜 코드 - 의도를 알 수 없음
public List<int[]> getThem() {
    List<int[]> list1 = new ArrayList<>();
    for (int[] x : theList) {
        if (x[0] == 4) {
            list1.add(x);
        }
    }
    return list1;
}`})})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CleanCode.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ✅ 클린 코드 - 의도가 명확함
public List<Cell> getFlaggedCells() {
    List<Cell> flaggedCells = new ArrayList<>();
    for (Cell cell : gameBoard) {
        if (cell.isFlagged()) {
            flaggedCells.add(cell);
        }
    }
    return flaggedCells;
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 보이스카우트 규칙"]}),e.jsx("p",{children:'"캠프장은 처음 왔을 때보다 더 깨끗하게 해놓고 떠나라." - 코드를 수정할 때마다 조금씩 더 깨끗하게 만들어 놓으세요. 변수명 하나, 함수 하나라도 개선하면 됩니다.'})]}),e.jsx("h2",{children:"2. 네이밍 규칙"}),e.jsxs("p",{children:["좋은 이름은 코드의 ",e.jsx("strong",{children:"가독성을 결정하는 가장 중요한 요소"}),"입니다. 이름만 잘 지어도 주석이 필요 없고, 코드를 읽는 것만으로 의도를 파악할 수 있습니다."]}),e.jsx("h3",{children:"변수 네이밍"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," VariableNaming.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 나쁜 이름
int d;                    // 경과 시간 (일)
String s;                 // 사용자 이름
List<String> list1;       // 활성 사용자 목록
boolean flag;             // 관리자 여부
int temp;                 // 할인된 가격

// ✅ 좋은 이름
int elapsedTimeInDays;
String userName;
List<String> activeUsers;
boolean isAdmin;
int discountedPrice;`})})]}),e.jsx("h3",{children:"메서드 네이밍"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MethodNaming.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 나쁜 이름 - 동사가 없거나 의미가 모호함
public void process();         // 무엇을 처리?
public void doIt();            // 무엇을?
public List<User> data();      // 어떤 데이터?
public void manager();         // 동사가 아님

// ✅ 좋은 이름 - 동사로 시작, 구체적
public void calculateTotalPrice();
public void sendVerificationEmail();
public List<User> findActiveUsers();
public boolean isExpiredToken();

// 접두사 컨벤션
public User findUserById(Long id);     // find: 단일 조회
public List<User> getActiveUsers();    // get: 목록 조회
public User createUser(UserDto dto);   // create: 생성
public void updatePassword(Long id);   // update: 수정
public void deleteUser(Long id);       // delete: 삭제
public boolean hasPermission();        // has/is: boolean 반환
public int countByStatus(Status s);    // count: 개수 조회`})})]}),e.jsx("h3",{children:"클래스 네이밍"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ClassNaming.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 나쁜 이름
class Data { }              // 너무 모호
class Info { }              // 무슨 정보?
class Manager { }           // 모든 것의 Manager?
class Processor { }         // 무엇을 처리?
class Helper { }            // 무엇을 돕는?

// ✅ 좋은 이름 - 명사 또는 명사구, 구체적
class UserRepository { }
class OrderService { }
class PaymentProcessor { }
class EmailValidator { }
class ShoppingCart { }

// 네이밍 패턴
class UserController { }    // Controller: 요청 처리
class UserService { }       // Service: 비즈니스 로직
class UserRepository { }    // Repository: 데이터 접근
class UserDto { }           // DTO: 데이터 전송 객체
class UserMapper { }        // Mapper: 객체 변환
class UserNotFoundException extends RuntimeException { }  // 예외`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," 네이밍 안티패턴"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"헝가리안 표기법 지양:"})," ",e.jsx("code",{children:"strName"}),", ",e.jsx("code",{children:"intAge"})," 처럼 타입을 이름에 넣지 마세요. Java는 정적 타입 언어이므로 IDE가 타입을 알려줍니다.",e.jsx("br",{}),e.jsx("strong",{children:"축약어 지양:"})," ",e.jsx("code",{children:"usr"}),", ",e.jsx("code",{children:"cnt"}),", ",e.jsx("code",{children:"mgr"})," 대신 ",e.jsx("code",{children:"user"}),", ",e.jsx("code",{children:"count"}),", ",e.jsx("code",{children:"manager"}),"를 사용하세요.",e.jsx("br",{}),e.jsx("strong",{children:"일관성 유지:"})," 같은 개념에는 같은 단어를 사용하세요. ",e.jsx("code",{children:"fetch"}),", ",e.jsx("code",{children:"retrieve"}),", ",e.jsx("code",{children:"get"}),"을 섞어 쓰지 마세요."]})]}),e.jsx("h2",{children:"3. 함수(메서드) 설계"}),e.jsxs("p",{children:["함수는 프로그램의 가장 기본적인 단위입니다. 좋은 함수는 ",e.jsx("strong",{children:"한 가지만 하고"}),",",e.jsx("strong",{children:"작고"}),", ",e.jsx("strong",{children:"이름이 명확"}),"해야 합니다."]}),e.jsx("h3",{children:"단일 책임 원칙 (한 가지만 하라)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SingleResponsibility.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 여러 가지를 하는 함수
public void processOrder(Order order) {
    // 1. 재고 확인
    if (inventory.getStock(order.getProductId()) < order.getQuantity()) {
        throw new OutOfStockException();
    }

    // 2. 가격 계산
    double price = order.getQuantity() * product.getPrice();
    double tax = price * 0.1;
    double total = price + tax;

    // 3. 결제 처리
    paymentGateway.charge(order.getUserId(), total);

    // 4. 재고 차감
    inventory.decrease(order.getProductId(), order.getQuantity());

    // 5. 이메일 발송
    emailService.send(order.getUserEmail(), "주문 완료", "...");
}

// ✅ 각 함수가 한 가지만 수행
public void processOrder(Order order) {
    validateStock(order);
    double totalPrice = calculateTotalPrice(order);
    processPayment(order.getUserId(), totalPrice);
    decreaseStock(order);
    sendOrderConfirmation(order);
}

private void validateStock(Order order) {
    if (inventory.getStock(order.getProductId()) < order.getQuantity()) {
        throw new OutOfStockException();
    }
}

private double calculateTotalPrice(Order order) {
    double price = order.getQuantity() * product.getPrice();
    double tax = price * TAX_RATE;
    return price + tax;
}

private void processPayment(Long userId, double amount) {
    paymentGateway.charge(userId, amount);
}

private void decreaseStock(Order order) {
    inventory.decrease(order.getProductId(), order.getQuantity());
}

private void sendOrderConfirmation(Order order) {
    emailService.send(order.getUserEmail(), "주문 완료", "...");
}`})})]}),e.jsx("h3",{children:"파라미터 최소화"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ParameterMinimize.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 파라미터가 너무 많음 (3개 초과는 지양)
public User createUser(String name, String email, String phone,
                       String address, int age, String role) {
    // ...
}

// ✅ 객체로 묶기
public User createUser(CreateUserRequest request) {
    // ...
}

public class CreateUserRequest {
    private String name;
    private String email;
    private String phone;
    private String address;
    private int age;
    private String role;
    // getter, setter...
}`})})]}),e.jsx("h3",{children:"부수효과(Side Effect) 제거"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SideEffect.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 부수효과가 숨어있는 함수
public boolean checkPassword(String userName, String password) {
    User user = userRepository.findByName(userName);
    if (user != null) {
        String encodedPassword = encoder.encode(password);
        if (encodedPassword.equals(user.getPassword())) {
            Session.initialize();  // ← 부수효과! 이름에서 예상 불가
            return true;
        }
    }
    return false;
}

// ✅ 함수 이름이 하는 일을 정확히 표현
public boolean isPasswordValid(String userName, String password) {
    User user = userRepository.findByName(userName);
    if (user == null) return false;
    String encodedPassword = encoder.encode(password);
    return encodedPassword.equals(user.getPassword());
}

// 세션 초기화는 별도 함수로 분리
public void initializeSession(String userName) {
    Session.initialize();
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 함수 설계 팁"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"함수 길이:"})," 20줄 이내가 이상적입니다. 스크롤 없이 한눈에 볼 수 있어야 합니다.",e.jsx("br",{}),e.jsx("strong",{children:"들여쓰기:"})," 2단계 이하가 좋습니다. 중첩이 깊어지면 함수를 분리하세요.",e.jsx("br",{}),e.jsx("strong",{children:"반환값:"})," null 대신 Optional이나 빈 컬렉션을 반환하세요.",e.jsx("br",{}),e.jsx("strong",{children:"예외:"})," 오류 코드보다 예외(Exception)를 사용하세요."]})]}),e.jsx("h2",{children:"4. SOLID 5원칙"}),e.jsxs("p",{children:["SOLID는 객체 지향 설계의 5가지 기본 원칙으로, ",e.jsx("strong",{children:"Robert C. Martin"}),"이 정리했습니다. 이 원칙을 따르면 확장에 유연하고, 변경에 안전한 코드를 작성할 수 있습니다."]}),e.jsx("h3",{children:"SRP (Single Responsibility Principle) - 단일 책임 원칙"}),e.jsxs("p",{children:[e.jsx("strong",{children:'"클래스는 하나의 책임만 가져야 한다."'})," 변경의 이유가 하나뿐이어야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SRP.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ SRP 위반 - 하나의 클래스가 여러 책임을 가짐
public class UserService {
    public void createUser(User user) { /* 사용자 생성 */ }
    public void sendEmail(String to, String msg) { /* 이메일 발송 */ }
    public String generateReport() { /* 리포트 생성 */ }
    public void exportToPdf(String data) { /* PDF 변환 */ }
}

// ✅ SRP 준수 - 책임별로 클래스 분리
public class UserService {
    public void createUser(User user) { /* 사용자 관련 로직만 */ }
    public User findById(Long id) { /* ... */ }
}

public class EmailService {
    public void send(String to, String subject, String body) { /* ... */ }
}

public class ReportService {
    public String generateUserReport() { /* ... */ }
}

public class PdfExporter {
    public void export(String data, String filePath) { /* ... */ }
}`})})]}),e.jsx("h3",{children:"OCP (Open/Closed Principle) - 개방/폐쇄 원칙"}),e.jsxs("p",{children:[e.jsx("strong",{children:'"확장에는 열려 있고, 변경에는 닫혀 있어야 한다."'})," 새 기능을 추가할 때 기존 코드를 수정하지 않아야 합니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," OCP.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ OCP 위반 - 새 할인 유형 추가 시 기존 코드 수정 필요
public class DiscountService {
    public double calculate(Order order) {
        if (order.getType().equals("VIP")) {
            return order.getPrice() * 0.2;
        } else if (order.getType().equals("MEMBER")) {
            return order.getPrice() * 0.1;
        } else if (order.getType().equals("COUPON")) {    // 추가될 때마다
            return order.getPrice() * 0.15;               // if문이 늘어남
        }
        return 0;
    }
}

// ✅ OCP 준수 - 새 할인 정책은 인터페이스 구현으로 추가
public interface DiscountPolicy {
    double discount(Order order);
}

public class VipDiscount implements DiscountPolicy {
    @Override
    public double discount(Order order) {
        return order.getPrice() * 0.2;
    }
}

public class MemberDiscount implements DiscountPolicy {
    @Override
    public double discount(Order order) {
        return order.getPrice() * 0.1;
    }
}

// 새 할인 정책 추가 - 기존 코드 수정 없이 클래스만 추가
public class SeasonalDiscount implements DiscountPolicy {
    @Override
    public double discount(Order order) {
        return order.getPrice() * 0.3;
    }
}

public class DiscountService {
    private final DiscountPolicy policy;

    public DiscountService(DiscountPolicy policy) {
        this.policy = policy;
    }

    public double calculate(Order order) {
        return policy.discount(order);
    }
}`})})]}),e.jsx("h3",{children:"LSP (Liskov Substitution Principle) - 리스코프 치환 원칙"}),e.jsxs("p",{children:[e.jsx("strong",{children:'"자식 클래스는 부모 클래스를 대체할 수 있어야 한다."'})," 상속받은 클래스는 부모의 행동 규약을 깨뜨리면 안 됩니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," LSP.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ LSP 위반 - 정사각형은 직사각형의 행동을 깨뜨림
public class Rectangle {
    protected int width;
    protected int height;

    public void setWidth(int width) { this.width = width; }
    public void setHeight(int height) { this.height = height; }
    public int getArea() { return width * height; }
}

public class Square extends Rectangle {
    @Override
    public void setWidth(int width) {
        this.width = width;
        this.height = width;   // 예상치 못한 동작!
    }

    @Override
    public void setHeight(int height) {
        this.width = height;   // 예상치 못한 동작!
        this.height = height;
    }
}

// Rectangle r = new Square();
// r.setWidth(5);
// r.setHeight(3);
// r.getArea() == 15 ? → No! 9가 됨 (LSP 위반)

// ✅ LSP 준수 - 별도의 인터페이스로 분리
public interface Shape {
    int getArea();
}

public class Rectangle implements Shape {
    private final int width;
    private final int height;

    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public int getArea() { return width * height; }
}

public class Square implements Shape {
    private final int side;

    public Square(int side) { this.side = side; }

    @Override
    public int getArea() { return side * side; }
}`})})]}),e.jsx("h3",{children:"ISP (Interface Segregation Principle) - 인터페이스 분리 원칙"}),e.jsxs("p",{children:[e.jsx("strong",{children:'"클라이언트가 사용하지 않는 메서드에 의존하지 않아야 한다."'})," 하나의 범용 인터페이스보다 여러 개의 구체적인 인터페이스가 낫습니다."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ISP.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ ISP 위반 - 하나의 거대한 인터페이스
public interface Worker {
    void work();
    void eat();
    void sleep();
    void attendMeeting();
}

// 로봇은 eat(), sleep()을 구현할 수 없음
public class Robot implements Worker {
    @Override public void work() { /* 작업 수행 */ }
    @Override public void eat() { /* 불필요! */ }
    @Override public void sleep() { /* 불필요! */ }
    @Override public void attendMeeting() { /* 불필요! */ }
}

// ✅ ISP 준수 - 인터페이스를 역할별로 분리
public interface Workable {
    void work();
}

public interface Eatable {
    void eat();
}

public interface Sleepable {
    void sleep();
}

public interface MeetingAttendable {
    void attendMeeting();
}

// 사람: 모든 인터페이스 구현
public class HumanWorker implements Workable, Eatable,
                                    Sleepable, MeetingAttendable {
    @Override public void work() { /* ... */ }
    @Override public void eat() { /* ... */ }
    @Override public void sleep() { /* ... */ }
    @Override public void attendMeeting() { /* ... */ }
}

// 로봇: 필요한 인터페이스만 구현
public class RobotWorker implements Workable {
    @Override public void work() { /* ... */ }
}`})})]}),e.jsx("h3",{children:"DIP (Dependency Inversion Principle) - 의존 역전 원칙"}),e.jsxs("p",{children:[e.jsx("strong",{children:'"고수준 모듈이 저수준 모듈에 의존하면 안 된다. 둘 다 추상화에 의존해야 한다."'}),"구체적인 구현이 아닌 인터페이스(추상화)에 의존하세요."]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DIP.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ DIP 위반 - 고수준 모듈이 저수준 모듈에 직접 의존
public class OrderService {
    // 구체 클래스에 직접 의존 → MySQL을 바꾸면 코드 수정 필요
    private MySqlOrderRepository repository = new MySqlOrderRepository();
    private SmtpEmailSender emailSender = new SmtpEmailSender();

    public void placeOrder(Order order) {
        repository.save(order);
        emailSender.send(order.getUserEmail(), "주문 완료");
    }
}

// ✅ DIP 준수 - 추상화(인터페이스)에 의존
public interface OrderRepository {
    void save(Order order);
    Optional<Order> findById(Long id);
}

public interface NotificationSender {
    void send(String to, String message);
}

// 고수준 모듈: 인터페이스에만 의존
public class OrderService {
    private final OrderRepository repository;
    private final NotificationSender notificationSender;

    // 생성자 주입 (Spring이 자동으로 구현체를 주입)
    public OrderService(OrderRepository repository,
                        NotificationSender notificationSender) {
        this.repository = repository;
        this.notificationSender = notificationSender;
    }

    public void placeOrder(Order order) {
        repository.save(order);
        notificationSender.send(order.getUserEmail(), "주문 완료");
    }
}

// 저수준 모듈: 인터페이스 구현
public class MySqlOrderRepository implements OrderRepository { /* ... */ }
public class MongoOrderRepository implements OrderRepository { /* ... */ }
public class SmtpNotificationSender implements NotificationSender { /* ... */ }
public class SlackNotificationSender implements NotificationSender { /* ... */ }`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," SOLID 한눈에 보기"]}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"원칙"}),e.jsx("th",{children:"핵심 한줄 요약"}),e.jsx("th",{children:"위반 시 문제"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"SRP"})}),e.jsx("td",{children:"클래스는 하나의 책임만"}),e.jsx("td",{children:"한 곳 수정이 여러 곳에 영향"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"OCP"})}),e.jsx("td",{children:"확장에 열려있고 변경에 닫혀있어야"}),e.jsx("td",{children:"새 기능 추가 시 기존 코드 수정"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"LSP"})}),e.jsx("td",{children:"자식은 부모를 대체할 수 있어야"}),e.jsx("td",{children:"예상치 못한 동작, 타입 검사 남발"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"ISP"})}),e.jsx("td",{children:"불필요한 인터페이스에 의존하지 않도록"}),e.jsx("td",{children:"불필요한 메서드 강제 구현"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"DIP"})}),e.jsx("td",{children:"구현이 아닌 추상화에 의존"}),e.jsx("td",{children:"구현체 교체 시 대규모 수정"})]})]})]})]}),e.jsx("h2",{children:"5. 코드 스멜 (Code Smell)"}),e.jsxs("p",{children:[e.jsx("strong",{children:"코드 스멜"}),'이란 코드에서 나는 "나쁜 냄새"로, 당장 에러를 발생시키진 않지만 리팩토링이 필요하다는 신호입니다. Martin Fowler가 체계적으로 분류했습니다.']}),e.jsx("h3",{children:"주요 코드 스멜"}),e.jsx("h4",{children:"1) 긴 메서드 (Long Method)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," LongMethod.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 100줄이 넘는 메서드
public void generateMonthlyReport() {
    // ... 데이터 조회 (20줄)
    // ... 계산 로직 (30줄)
    // ... 포맷팅 (20줄)
    // ... 파일 출력 (30줄)
}

// ✅ 의미 있는 단위로 분리
public void generateMonthlyReport() {
    List<SalesData> data = fetchMonthlySalesData();
    ReportSummary summary = calculateSummary(data);
    String formatted = formatReport(summary);
    exportToFile(formatted);
}`})})]}),e.jsx("h4",{children:"2) 매직 넘버 (Magic Number)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MagicNumber.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 매직 넘버 - 숫자의 의미를 알 수 없음
if (user.getAge() >= 19) { ... }
if (order.getTotal() > 50000) { ... }
double tax = price * 0.1;
Thread.sleep(86400000);

// ✅ 상수로 의미 부여
private static final int ADULT_AGE = 19;
private static final int FREE_SHIPPING_THRESHOLD = 50_000;
private static final double TAX_RATE = 0.1;
private static final long ONE_DAY_MILLIS = 24 * 60 * 60 * 1000L;

if (user.getAge() >= ADULT_AGE) { ... }
if (order.getTotal() > FREE_SHIPPING_THRESHOLD) { ... }
double tax = price * TAX_RATE;
Thread.sleep(ONE_DAY_MILLIS);`})})]}),e.jsx("h4",{children:"3) 중복 코드 (Duplicated Code)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," DuplicatedCode.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 중복 코드 - 동일 로직이 여러 곳에 반복
public class AdminController {
    public void createPost(Post post) {
        if (post.getTitle() == null || post.getTitle().isBlank()) {
            throw new IllegalArgumentException("제목은 필수입니다");
        }
        if (post.getContent() == null || post.getContent().isBlank()) {
            throw new IllegalArgumentException("내용은 필수입니다");
        }
        // ... 로직
    }
}

public class UserController {
    public void writePost(Post post) {
        if (post.getTitle() == null || post.getTitle().isBlank()) {
            throw new IllegalArgumentException("제목은 필수입니다");
        }
        if (post.getContent() == null || post.getContent().isBlank()) {
            throw new IllegalArgumentException("내용은 필수입니다");
        }
        // ... 로직
    }
}

// ✅ 공통 로직을 추출하여 재사용
public class PostValidator {
    public static void validate(Post post) {
        if (post.getTitle() == null || post.getTitle().isBlank()) {
            throw new IllegalArgumentException("제목은 필수입니다");
        }
        if (post.getContent() == null || post.getContent().isBlank()) {
            throw new IllegalArgumentException("내용은 필수입니다");
        }
    }
}

// 사용
PostValidator.validate(post);`})})]}),e.jsx("h4",{children:"4) 과도한 주석"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BadComments.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ❌ 코드가 하는 일을 그대로 반복하는 주석
// 사용자를 찾는다
User user = userRepository.findById(id);

// 이름을 설정한다
user.setName(name);

// 저장한다
userRepository.save(user);

// ✅ 주석이 필요 없는 자명한 코드
User user = userRepository.findById(id);
user.setName(name);
userRepository.save(user);

// ✅ 유용한 주석: "왜"를 설명하는 주석
// 카카오 API 정책상 1초에 10회 이상 호출 시 차단됨
Thread.sleep(100);

// 레거시 DB 스키마 호환을 위해 날짜를 문자열로 저장
String dateStr = formatter.format(LocalDate.now());`})})]}),e.jsxs("div",{className:"callout callout-warning",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-exclamation-triangle"})," 주요 코드 스멜 목록"]}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"코드 스멜"}),e.jsx("th",{children:"증상"}),e.jsx("th",{children:"해결 방법"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Long Method"})}),e.jsx("td",{children:"메서드가 너무 길다"}),e.jsx("td",{children:"Extract Method"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Large Class"})}),e.jsx("td",{children:"클래스가 너무 크다"}),e.jsx("td",{children:"Extract Class"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Magic Number"})}),e.jsx("td",{children:"의미 없는 리터럴 값"}),e.jsx("td",{children:"상수로 추출"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Duplicated Code"})}),e.jsx("td",{children:"동일 코드 반복"}),e.jsx("td",{children:"공통 메서드 추출"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Feature Envy"})}),e.jsx("td",{children:"다른 클래스 데이터를 많이 사용"}),e.jsx("td",{children:"Move Method"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Data Clumps"})}),e.jsx("td",{children:"항상 함께 쓰이는 파라미터들"}),e.jsx("td",{children:"객체로 묶기"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Switch Statements"})}),e.jsx("td",{children:"반복되는 switch/if-else"}),e.jsx("td",{children:"다형성으로 대체"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Dead Code"})}),e.jsx("td",{children:"사용하지 않는 코드"}),e.jsx("td",{children:"삭제"})]})]})]})]}),e.jsx("h2",{children:"6. 리팩토링 기법"}),e.jsxs("p",{children:[e.jsx("strong",{children:"리팩토링(Refactoring)"}),"이란 외부 동작은 변경하지 않으면서 내부 구조를 개선하는 것입니다. 코드의 가독성, 유지보수성을 높이면서 기능은 그대로 유지합니다."]}),e.jsx("h3",{children:"Extract Method (메서드 추출)"}),e.jsx("p",{children:"가장 빈번하게 사용하는 리팩토링 기법입니다. 코드 블록을 의미 있는 이름의 메서드로 추출합니다."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ExtractMethod.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Before: 한 메서드에 모든 로직
public void printOwing() {
    // 배너 출력
    System.out.println("*****************************");
    System.out.println("***** Customer Owes *********");
    System.out.println("*****************************");

    // 미결제 금액 계산
    double outstanding = 0.0;
    for (Order order : orders) {
        outstanding += order.getAmount();
    }

    // 상세 출력
    System.out.println("name: " + name);
    System.out.println("amount: " + outstanding);
}

// After: 의미 있는 단위로 메서드 추출
public void printOwing() {
    printBanner();
    double outstanding = calculateOutstanding();
    printDetails(outstanding);
}

private void printBanner() {
    System.out.println("*****************************");
    System.out.println("***** Customer Owes *********");
    System.out.println("*****************************");
}

private double calculateOutstanding() {
    return orders.stream()
        .mapToDouble(Order::getAmount)
        .sum();
}

private void printDetails(double outstanding) {
    System.out.println("name: " + name);
    System.out.println("amount: " + outstanding);
}`})})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," IntelliJ에서 Extract Method"]}),e.jsxs("p",{children:["추출할 코드 블록을 선택한 후 ",e.jsx("strong",{children:"Ctrl + Alt + M"})," (Mac: Cmd + Option + M)을 누르면 자동으로 메서드를 추출해줍니다. IntelliJ가 파라미터와 반환값도 자동으로 분석합니다."]})]}),e.jsx("h3",{children:"Rename (이름 변경)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," Rename.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Before: 의미 없는 이름
public class Mgr {
    private List<String> lst;

    public String fn(int idx) {
        return lst.get(idx);
    }

    public void proc(String val) {
        lst.add(val);
    }
}

// After: 의미 있는 이름으로 변경
public class EmployeeManager {
    private List<String> employeeNames;

    public String findEmployeeName(int index) {
        return employeeNames.get(index);
    }

    public void addEmployee(String employeeName) {
        employeeNames.add(employeeName);
    }
}
// IntelliJ 단축키: Shift + F6`})})]}),e.jsx("h3",{children:"Replace Conditional with Polymorphism (조건문을 다형성으로 대체)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ReplaceConditional.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Before: 타입에 따른 분기문이 여러 곳에서 반복됨
public class PaymentService {
    public void pay(String type, int amount) {
        if (type.equals("CARD")) {
            System.out.println("카드 결제: " + amount + "원");
            // 카드 결제 로직 ...
        } else if (type.equals("BANK")) {
            System.out.println("계좌이체: " + amount + "원");
            // 계좌이체 로직 ...
        } else if (type.equals("KAKAO")) {
            System.out.println("카카오페이: " + amount + "원");
            // 카카오페이 로직 ...
        }
    }

    public void refund(String type, int amount) {
        if (type.equals("CARD")) { /* 카드 환불 */ }
        else if (type.equals("BANK")) { /* 계좌 환불 */ }
        else if (type.equals("KAKAO")) { /* 카카오 환불 */ }
    }
}

// After: 다형성 활용
public interface PaymentMethod {
    void pay(int amount);
    void refund(int amount);
}

public class CardPayment implements PaymentMethod {
    @Override
    public void pay(int amount) {
        System.out.println("카드 결제: " + amount + "원");
    }

    @Override
    public void refund(int amount) {
        System.out.println("카드 환불: " + amount + "원");
    }
}

public class KakaoPayPayment implements PaymentMethod {
    @Override
    public void pay(int amount) {
        System.out.println("카카오페이: " + amount + "원");
    }

    @Override
    public void refund(int amount) {
        System.out.println("카카오페이 환불: " + amount + "원");
    }
}

// 사용: 새 결제 수단 추가 시 기존 코드 수정 없음
public class PaymentService {
    private final PaymentMethod paymentMethod;

    public PaymentService(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void pay(int amount) {
        paymentMethod.pay(amount);
    }

    public void refund(int amount) {
        paymentMethod.refund(amount);
    }
}`})})]}),e.jsx("h3",{children:"Move Method (메서드 이동)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," MoveMethod.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// Before: Order의 데이터를 Customer에서 조작 (Feature Envy)
public class Customer {
    public double getOrderDiscount(Order order) {
        double base = order.getQuantity() * order.getItemPrice();
        double discount = Math.max(0, order.getQuantity() - 500)
                          * order.getItemPrice() * 0.05;
        double shipping = Math.min(base * 0.1, 100.0);
        return base - discount + shipping;
    }
}

// After: 메서드를 데이터가 있는 클래스로 이동
public class Order {
    private int quantity;
    private double itemPrice;

    public double calculateTotal() {
        double base = quantity * itemPrice;
        double discount = Math.max(0, quantity - 500) * itemPrice * 0.05;
        double shipping = Math.min(base * 0.1, 100.0);
        return base - discount + shipping;
    }
}

// Customer는 위임만 함
public class Customer {
    public double getOrderTotal(Order order) {
        return order.calculateTotal();
    }
}`})})]}),e.jsxs("div",{className:"callout callout-info",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-info-circle"})," IntelliJ 리팩토링 단축키 모음"]}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"리팩토링"}),e.jsx("th",{children:"Windows / Linux"}),e.jsx("th",{children:"Mac"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Rename"})}),e.jsx("td",{children:"Shift + F6"}),e.jsx("td",{children:"Shift + F6"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Extract Method"})}),e.jsx("td",{children:"Ctrl + Alt + M"}),e.jsx("td",{children:"Cmd + Option + M"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Extract Variable"})}),e.jsx("td",{children:"Ctrl + Alt + V"}),e.jsx("td",{children:"Cmd + Option + V"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Extract Constant"})}),e.jsx("td",{children:"Ctrl + Alt + C"}),e.jsx("td",{children:"Cmd + Option + C"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Extract Field"})}),e.jsx("td",{children:"Ctrl + Alt + F"}),e.jsx("td",{children:"Cmd + Option + F"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Inline"})}),e.jsx("td",{children:"Ctrl + Alt + N"}),e.jsx("td",{children:"Cmd + Option + N"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Move"})}),e.jsx("td",{children:"F6"}),e.jsx("td",{children:"F6"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"리팩토링 메뉴"})}),e.jsx("td",{children:"Ctrl + Alt + Shift + T"}),e.jsx("td",{children:"Ctrl + T"})]})]})]})]}),e.jsx("h2",{children:"7. 클린 코드 체크리스트"}),e.jsx("p",{children:"실무에서 코드 리뷰나 자기 점검 시 바로 활용할 수 있는 체크리스트입니다. Pull Request를 올리기 전에 아래 항목들을 확인해보세요."}),e.jsxs("table",{className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"카테고리"}),e.jsx("th",{children:"체크 항목"}),e.jsx("th",{children:"우선순위"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"4",children:e.jsx("strong",{children:"네이밍"})}),e.jsx("td",{children:"변수/메서드/클래스 이름이 의도를 명확히 전달하는가?"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"축약어 없이 전체 단어를 사용했는가?"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"boolean 변수는 is/has/can 접두사를 사용했는가?"}),e.jsx("td",{children:"권장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"같은 개념에 일관된 용어를 사용했는가?"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"4",children:e.jsx("strong",{children:"함수"})}),e.jsx("td",{children:"함수가 한 가지 일만 하는가?"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"함수 길이가 20줄 이내인가?"}),e.jsx("td",{children:"권장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"파라미터가 3개 이하인가?"}),e.jsx("td",{children:"권장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"부수효과(Side Effect)가 없는가?"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",children:e.jsx("strong",{children:"코드 구조"})}),e.jsx("td",{children:"중복 코드가 없는가? (DRY 원칙)"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"매직 넘버 대신 상수를 사용했는가?"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"들여쓰기 깊이가 2단계 이하인가?"}),e.jsx("td",{children:"권장"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",children:e.jsx("strong",{children:"설계"})}),e.jsx("td",{children:"SOLID 원칙을 위반하지 않았는가?"}),e.jsx("td",{children:"권장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"구현이 아닌 인터페이스에 의존하는가?"}),e.jsx("td",{children:"권장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"적절한 예외 처리를 했는가?"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"3",children:e.jsx("strong",{children:"기타"})}),e.jsx("td",{children:"불필요한 주석을 제거했는가?"}),e.jsx("td",{children:"권장"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"사용하지 않는 코드(Dead Code)를 삭제했는가?"}),e.jsx("td",{children:"필수"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"테스트 코드를 작성했는가?"}),e.jsx("td",{children:"권장"})]})]})]}),e.jsxs("div",{className:"callout callout-tip",children:[e.jsxs("div",{className:"callout-title",children:[e.jsx("i",{className:"fas fa-lightbulb"})," 코드 리뷰 팁"]}),e.jsxs("p",{children:['코드 리뷰에서 "이 변수명이 좀 더 명확했으면 좋겠어요"는 좋은 피드백입니다. 하지만 "이건 왜 이렇게 짰어요?"는 공격적으로 들릴 수 있습니다.',e.jsx("strong",{children:'"~하면 어떨까요?"'})," 형태로 제안하는 것이 좋은 코드 리뷰 문화입니다. 비판이 아닌 ",e.jsx("strong",{children:"개선 제안"}),"으로 표현하세요."]})]}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," CleanCodeExample.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`// ✅ 클린 코드 체크리스트를 모두 적용한 예시

public class OrderService {

    private static final double TAX_RATE = 0.1;
    private static final int FREE_SHIPPING_THRESHOLD = 50_000;

    private final OrderRepository orderRepository;
    private final PaymentProcessor paymentProcessor;
    private final NotificationService notificationService;

    // 생성자 주입 (DIP 준수)
    public OrderService(OrderRepository orderRepository,
                        PaymentProcessor paymentProcessor,
                        NotificationService notificationService) {
        this.orderRepository = orderRepository;
        this.paymentProcessor = paymentProcessor;
        this.notificationService = notificationService;
    }

    // 명확한 메서드명, 한 가지 일만 수행
    public OrderResult placeOrder(OrderRequest request) {
        validateOrder(request);
        Order order = createOrder(request);
        processPayment(order);
        Order savedOrder = orderRepository.save(order);
        notificationService.sendOrderConfirmation(savedOrder);
        return OrderResult.success(savedOrder.getId());
    }

    private void validateOrder(OrderRequest request) {
        if (request.getItems().isEmpty()) {
            throw new InvalidOrderException("주문 항목이 비어있습니다");
        }
    }

    private Order createOrder(OrderRequest request) {
        double subtotal = calculateSubtotal(request.getItems());
        double tax = subtotal * TAX_RATE;
        double shipping = calculateShipping(subtotal);
        return new Order(request.getUserId(),
                         request.getItems(), subtotal, tax, shipping);
    }

    private double calculateSubtotal(List<OrderItem> items) {
        return items.stream()
            .mapToDouble(item -> item.getPrice() * item.getQuantity())
            .sum();
    }

    private double calculateShipping(double subtotal) {
        return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 3_000;
    }

    private void processPayment(Order order) {
        paymentProcessor.process(order.getTotalAmount());
    }
}`})})]}),e.jsx("h2",{children:"8. 연습문제"}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 1: 코드 스멜 찾기"}),e.jsx("p",{children:"다음 코드에서 코드 스멜을 모두 찾고, 어떻게 개선할 수 있는지 설명하세요."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," SmellFinder.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Utils {
    // 사용자 처리
    public void proc(String n, String e, int a) {
        // 나이 체크
        if (a >= 19) {
            System.out.println(n + "님 성인입니다");
            // 이메일 보내기
            String s = "admin@test.com";
            // 메일 발송 코드...
        } else {
            System.out.println(n + "님 미성년자입니다");
        }
        // DB 저장
        // ... 30줄의 저장 로직
        // 로그 기록
        // ... 20줄의 로그 로직
    }
}`})})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"힌트:"})," 최소 5개 이상의 코드 스멜이 있습니다. (네이밍, 매직 넘버, SRP 위반, 긴 메서드, 과도한 주석 등)"]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 2: 리팩토링 실습"}),e.jsx("p",{children:"다음 코드를 SOLID 원칙과 클린 코드 원칙에 맞게 리팩토링하세요."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," NotificationService.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class NotificationService {

    public void sendNotification(String type, String to, String msg) {
        if (type.equals("EMAIL")) {
            // 이메일 설정
            Properties props = new Properties();
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.port", "587");
            Session session = Session.getInstance(props);
            // ... 이메일 발송 로직 (20줄)
            System.out.println("이메일 발송 완료: " + to);

        } else if (type.equals("SMS")) {
            // SMS API 호출
            HttpClient client = HttpClient.newHttpClient();
            String body = "{\\"to\\":\\"" + to + "\\",\\"msg\\":\\"" + msg + "\\"}";
            // ... SMS 발송 로직 (15줄)
            System.out.println("SMS 발송 완료: " + to);

        } else if (type.equals("PUSH")) {
            // FCM 푸시 알림
            FirebaseMessaging messaging = FirebaseMessaging.getInstance();
            // ... 푸시 발송 로직 (15줄)
            System.out.println("푸시 발송 완료: " + to);
        }
    }
}`})})]}),e.jsx("p",{children:e.jsx("strong",{children:"요구사항:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"OCP를 적용하여 새 알림 채널 추가 시 기존 코드를 수정하지 않도록 설계하세요"}),e.jsx("li",{children:"DIP를 적용하여 인터페이스에 의존하도록 변경하세요"}),e.jsx("li",{children:"각 알림 채널의 발송 로직을 개별 클래스로 분리하세요"})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 3: 네이밍 개선"}),e.jsx("p",{children:"다음 코드의 모든 이름(클래스, 메서드, 변수)을 클린 코드 원칙에 맞게 개선하세요."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," BadNaming.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class Mgr {
    private List<String[]> d = new ArrayList<>();

    public void add(String n, String p, String e) {
        String[] info = {n, p, e};
        d.add(info);
    }

    public String[] get(int i) {
        return d.get(i);
    }

    public boolean chk(String n, String p) {
        for (String[] x : d) {
            if (x[0].equals(n) && x[1].equals(p)) {
                return true;
            }
        }
        return false;
    }

    public int cnt() {
        return d.size();
    }
}`})})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"추가 과제:"})," String 배열 대신 적절한 클래스를 만들어 타입 안전성을 확보하세요."]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습 4: SOLID 원칙 적용"}),e.jsx("p",{children:"다음 클래스가 위반하고 있는 SOLID 원칙을 모두 찾고, 원칙에 맞게 재설계하세요."}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:e.jsxs("span",{className:"file-name",children:[e.jsx("i",{className:"fas fa-file-code"})," ReportGenerator.java"]})}),e.jsx("pre",{children:e.jsx("code",{children:`public class ReportGenerator {

    public String generate(String type, List<Data> dataList) {
        // 1. 데이터 필터링
        List<Data> filtered = new ArrayList<>();
        for (Data d : dataList) {
            if (d.isValid()) filtered.add(d);
        }

        // 2. 데이터 가공
        StringBuilder sb = new StringBuilder();
        if (type.equals("HTML")) {
            sb.append("<html><body><table>");
            for (Data d : filtered) {
                sb.append("<tr><td>").append(d.getName())
                  .append("</td><td>").append(d.getValue())
                  .append("</td></tr>");
            }
            sb.append("</table></body></html>");
        } else if (type.equals("CSV")) {
            sb.append("Name,Value\\n");
            for (Data d : filtered) {
                sb.append(d.getName()).append(",")
                  .append(d.getValue()).append("\\n");
            }
        } else if (type.equals("JSON")) {
            // JSON 변환 로직 ...
        }

        // 3. 파일 저장
        Files.write(Path.of("report." + type.toLowerCase()),
                    sb.toString().getBytes());

        // 4. 이메일 발송
        sendEmail("admin@company.com", "리포트 생성 완료",
                  sb.toString());

        return sb.toString();
    }

    private void sendEmail(String to, String subject, String body) {
        // 이메일 발송 로직 ...
    }
}`})})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"힌트:"})," SRP, OCP, DIP를 모두 위반하고 있습니다. 데이터 필터링, 포맷팅, 저장, 알림을 각각 분리하세요."]})]}),e.jsx("div",{style:{marginTop:"32px",textAlign:"center"},children:e.jsx("button",{className:`btn ${i("PR07")?"btn-primary":"btn-accent"}`,onClick:()=>r("PR07"),children:i("PR07")?"✓ 학습 완료!":"학습 완료하기"})}),e.jsxs("div",{className:"lesson-nav",children:[e.jsxs(s,{to:"/practical/06",children:[e.jsx("i",{className:"fas fa-arrow-left"})," 이전: JSON 처리"]}),e.jsxs(s,{to:"/practical/08",children:["다음: 로깅과 디버깅 ",e.jsx("i",{className:"fas fa-arrow-right"})]})]})]})})]})}export{n as default};
