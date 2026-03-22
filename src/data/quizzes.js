export const quizzes = {
  basics: {
    title: 'Java 기초 퀴즈',
    description: 'Java 소개, 변수, 제어문, 배열 (Ch.01-04)',
    passingScore: 70,
    timeLimit: 600,
    questions: [
      {
        question: 'Java 프로그램의 진입점(Entry Point) 메서드 시그니처로 올바른 것은?',
        options: [
          'public static void main(String[] args)',
          'public void main(String args)',
          'static void main(String args[])',
          'public static int main(String[] args)'
        ],
        correct: 0,
        explanation: 'Java의 main 메서드는 반드시 public static void main(String[] args) 형태여야 합니다.'
      },
      {
        question: 'Java에서 정수형 기본 자료형이 아닌 것은?',
        options: ['byte', 'short', 'float', 'long'],
        correct: 2,
        explanation: 'float은 부동소수점(실수) 자료형입니다. 정수형은 byte, short, int, long입니다.'
      },
      {
        question: '다음 코드의 출력 결과는?\nint x = 10;\nSystem.out.println(x++);',
        options: ['10', '11', '9', '컴파일 에러'],
        correct: 0,
        explanation: 'x++은 후위 연산자로, 먼저 현재값(10)을 출력한 후 x를 증가시킵니다.'
      },
      {
        question: 'Java에서 문자열 비교 시 올바른 방법은?',
        options: [
          'str1.equals(str2)',
          'str1 == str2',
          'str1.compare(str2)',
          'str1 = str2'
        ],
        correct: 0,
        explanation: '문자열의 내용을 비교할 때는 equals() 메서드를 사용해야 합니다. ==는 참조를 비교합니다.'
      },
      {
        question: 'switch문에서 break를 생략하면 어떤 현상이 발생하는가?',
        options: [
          'fall-through (다음 case도 실행)',
          '컴파일 에러',
          '런타임 에러',
          '해당 case만 실행'
        ],
        correct: 0,
        explanation: 'break를 생략하면 fall-through가 발생하여 다음 case 블록도 연속 실행됩니다.'
      },
      {
        question: '배열 선언 중 올바른 것은?',
        options: [
          'int[] arr = new int[5];',
          'int arr = new int(5);',
          'int[] arr = new int[];',
          'int arr[] = new int{5};'
        ],
        correct: 0,
        explanation: 'Java에서 배열은 int[] arr = new int[크기]; 형태로 선언합니다.'
      },
      {
        question: 'for-each문의 올바른 사용법은?',
        options: [
          'for (int num : arr) { }',
          'for (int num in arr) { }',
          'for each (int num : arr) { }',
          'foreach (int num in arr) { }'
        ],
        correct: 0,
        explanation: 'Java의 향상된 for문은 for (타입 변수 : 배열/컬렉션) 형태입니다.'
      },
      {
        question: 'Java의 JVM(Java Virtual Machine)의 역할은?',
        options: [
          '바이트코드를 각 OS에 맞게 실행',
          '소스코드를 바이트코드로 컴파일',
          'Java 라이브러리 관리',
          'IDE 실행 환경 제공'
        ],
        correct: 0,
        explanation: 'JVM은 컴파일된 바이트코드(.class)를 각 운영체제에서 실행하는 역할을 합니다.'
      },
      {
        question: '다음 중 Java의 기본형(primitive type)이 아닌 것은?',
        options: ['String', 'boolean', 'char', 'double'],
        correct: 0,
        explanation: 'String은 참조형(Reference Type)입니다. 기본형은 boolean, char, byte, short, int, long, float, double 8가지입니다.'
      },
      {
        question: '다음 코드의 출력 결과는?\nint[] arr = {1, 2, 3};\nSystem.out.println(arr.length);',
        options: ['3', '2', '4', '컴파일 에러'],
        correct: 0,
        explanation: '배열의 length 속성은 배열의 크기를 반환합니다. {1, 2, 3}은 3개 요소이므로 3입니다.'
      }
    ]
  },

  intermediate: {
    title: 'Java 중급 퀴즈 (OOP)',
    description: '클래스, 상속, 인터페이스, 컬렉션 (Ch.05-08)',
    passingScore: 70,
    timeLimit: 600,
    questions: [
      {
        question: 'Java에서 생성자(Constructor)에 대한 설명으로 틀린 것은?',
        options: [
          '반환 타입을 void로 선언한다',
          '클래스 이름과 같은 이름을 가진다',
          '오버로딩이 가능하다',
          '기본 생성자는 자동 생성된다'
        ],
        correct: 0,
        explanation: '생성자는 반환 타입이 없습니다. void조차 선언하지 않습니다.'
      },
      {
        question: '다음 중 캡슐화(Encapsulation)와 관련된 접근 제어자 조합은?',
        options: [
          'private 필드 + public getter/setter',
          'public 필드 + public 메서드',
          'protected 필드 + private 메서드',
          'default 필드 + protected 메서드'
        ],
        correct: 0,
        explanation: '캡슐화는 필드를 private으로 숨기고 public 메서드로 접근하는 것입니다.'
      },
      {
        question: 'Java에서 다중 상속을 지원하는 방법은?',
        options: [
          '인터페이스를 여러 개 구현(implements)',
          '클래스를 여러 개 상속(extends)',
          'abstract 클래스를 여러 개 상속',
          'Java는 다중 상속 불가'
        ],
        correct: 0,
        explanation: 'Java는 클래스 다중 상속은 불가하지만, 인터페이스는 여러 개 구현(implements)할 수 있습니다.'
      },
      {
        question: '메서드 오버라이딩(Overriding)의 조건이 아닌 것은?',
        options: [
          '매개변수 타입을 변경할 수 있다',
          '부모 클래스의 메서드와 이름이 같다',
          '반환 타입이 같거나 하위 타입이다',
          '접근 제어자는 같거나 넓어야 한다'
        ],
        correct: 0,
        explanation: '오버라이딩은 매개변수 타입과 개수가 반드시 동일해야 합니다. 변경하면 오버로딩이 됩니다.'
      },
      {
        question: 'ArrayList와 LinkedList의 차이점은?',
        options: [
          'ArrayList는 인덱스 접근이 빠르고, LinkedList는 삽입/삭제가 빠르다',
          'ArrayList는 크기가 고정되고, LinkedList는 가변이다',
          'ArrayList는 동기화되고, LinkedList는 비동기화이다',
          'ArrayList는 정렬되고, LinkedList는 정렬되지 않는다'
        ],
        correct: 0,
        explanation: 'ArrayList는 배열 기반으로 인덱스 접근(O(1))이 빠르고, LinkedList는 노드 기반으로 삽입/삭제가 빠릅니다.'
      },
      {
        question: 'try-catch-finally에서 finally 블록의 특징은?',
        options: [
          '예외 발생 여부와 관계없이 항상 실행된다',
          '예외가 발생했을 때만 실행된다',
          '예외가 발생하지 않았을 때만 실행된다',
          'return문 이후에는 실행되지 않는다'
        ],
        correct: 0,
        explanation: 'finally 블록은 예외 발생 여부와 관계없이, return문이 있어도 항상 실행됩니다.'
      },
      {
        question: 'HashMap의 특징으로 올바른 것은?',
        options: [
          'key는 중복 불가, value는 중복 가능',
          'key와 value 모두 중복 가능',
          'key와 value 모두 중복 불가',
          'key는 중복 가능, value는 중복 불가'
        ],
        correct: 0,
        explanation: 'HashMap에서 key는 유일해야 하지만, value는 중복될 수 있습니다.'
      },
      {
        question: 'abstract 클래스에 대한 설명으로 맞는 것은?',
        options: [
          '인스턴스를 직접 생성할 수 없다',
          '모든 메서드가 추상 메서드여야 한다',
          '생성자를 가질 수 없다',
          '필드를 가질 수 없다'
        ],
        correct: 0,
        explanation: 'abstract 클래스는 직접 인스턴스화할 수 없고, 상속을 통해서만 사용합니다. 일반 메서드와 필드도 가질 수 있습니다.'
      },
      {
        question: 'this 키워드의 용도가 아닌 것은?',
        options: [
          '부모 클래스의 메서드를 호출한다',
          '현재 객체의 필드를 참조한다',
          '같은 클래스의 다른 생성자를 호출한다',
          '현재 객체 자신을 반환한다'
        ],
        correct: 0,
        explanation: '부모 클래스의 메서드를 호출하는 것은 super 키워드입니다. this는 현재 객체를 참조합니다.'
      },
      {
        question: 'Iterator 인터페이스의 주요 메서드가 아닌 것은?',
        options: ['size()', 'hasNext()', 'next()', 'remove()'],
        correct: 0,
        explanation: 'Iterator의 주요 메서드는 hasNext(), next(), remove()입니다. size()는 Collection의 메서드입니다.'
      }
    ]
  },

  advanced: {
    title: 'Java 고급 퀴즈',
    description: '제네릭, 람다, 스트림, 멀티스레드 (Ch.09-12)',
    passingScore: 70,
    timeLimit: 720,
    questions: [
      {
        question: '제네릭에서 와일드카드 <? extends Number>의 의미는?',
        options: [
          'Number 또는 Number의 하위 클래스 타입',
          'Number 또는 Number의 상위 클래스 타입',
          'Number 타입만 허용',
          '모든 타입 허용'
        ],
        correct: 0,
        explanation: '<? extends Number>는 상한 경계 와일드카드로, Number와 그 하위 클래스(Integer, Double 등)를 허용합니다.'
      },
      {
        question: '람다 표현식의 올바른 형태는?',
        options: [
          '(a, b) -> a + b',
          '(a, b) => a + b',
          'lambda a, b: a + b',
          'fn(a, b) { return a + b }'
        ],
        correct: 0,
        explanation: 'Java의 람다식은 (매개변수) -> 표현식 형태입니다. =>는 JavaScript, lambda는 Python 문법입니다.'
      },
      {
        question: 'Stream API에서 중간 연산이 아닌 것은?',
        options: ['collect()', 'filter()', 'map()', 'sorted()'],
        correct: 0,
        explanation: 'collect()는 최종 연산(terminal operation)입니다. filter, map, sorted는 중간 연산입니다.'
      },
      {
        question: 'enum(열거형)의 특징으로 틀린 것은?',
        options: [
          'new 키워드로 인스턴스를 생성할 수 있다',
          '생성자, 필드, 메서드를 가질 수 있다',
          '상수의 집합을 정의한다',
          'switch문에서 사용할 수 있다'
        ],
        correct: 0,
        explanation: 'enum은 new 키워드로 인스턴스를 생성할 수 없습니다. 열거 상수로만 인스턴스가 생성됩니다.'
      },
      {
        question: 'synchronized 키워드의 역할은?',
        options: [
          '스레드 간 동기화(상호 배제) 보장',
          '비동기 처리 활성화',
          '스레드 우선순위 설정',
          '스레드 생성 최적화'
        ],
        correct: 0,
        explanation: 'synchronized는 임계 영역(critical section)에 한 번에 하나의 스레드만 접근하도록 보장합니다.'
      },
      {
        question: 'Optional 클래스의 용도는?',
        options: [
          'NullPointerException을 방지하기 위한 래퍼',
          '동기화를 위한 유틸리티',
          '제네릭 타입 제한',
          '함수형 인터페이스 구현'
        ],
        correct: 0,
        explanation: 'Optional은 null일 수 있는 값을 안전하게 다루기 위해 Java 8에서 도입된 클래스입니다.'
      },
      {
        question: 'ExecutorService의 역할은?',
        options: [
          '스레드 풀 관리 및 작업 실행',
          '파일 입출력 처리',
          '데이터베이스 연결 관리',
          '네트워크 소켓 관리'
        ],
        correct: 0,
        explanation: 'ExecutorService는 스레드 풀을 관리하고 비동기 작업을 효율적으로 실행하는 인터페이스입니다.'
      },
      {
        question: '함수형 인터페이스(Functional Interface)의 조건은?',
        options: [
          '추상 메서드가 정확히 하나인 인터페이스',
          '모든 메서드가 default인 인터페이스',
          '@FunctionalInterface가 반드시 필요하다',
          '파라미터가 없는 메서드만 가진 인터페이스'
        ],
        correct: 0,
        explanation: '함수형 인터페이스는 추상 메서드가 정확히 하나인 인터페이스입니다. @FunctionalInterface는 선택사항입니다.'
      },
      {
        question: 'NIO(New I/O)의 핵심 구성요소가 아닌 것은?',
        options: ['OutputStream', 'Channel', 'Buffer', 'Selector'],
        correct: 0,
        explanation: 'OutputStream은 기존 I/O(java.io)의 클래스입니다. NIO는 Channel, Buffer, Selector를 사용합니다.'
      },
      {
        question: 'Stream의 parallelStream()에 대한 설명으로 맞는 것은?',
        options: [
          '멀티코어를 활용하여 병렬로 스트림 처리',
          '스트림을 직렬로 처리',
          '스트림 데이터를 정렬',
          '스트림을 비동기로 처리'
        ],
        correct: 0,
        explanation: 'parallelStream()은 ForkJoinPool을 사용하여 데이터를 병렬로 처리합니다.'
      }
    ]
  },

  web: {
    title: '웹 개발 퀴즈',
    description: '서블릿, JSP, Spring, Boot, MVC (Ch.13-17)',
    passingScore: 70,
    timeLimit: 720,
    questions: [
      {
        question: 'Servlet의 생명주기(Life Cycle) 순서로 올바른 것은?',
        options: [
          'init() → service() → destroy()',
          'service() → init() → destroy()',
          'init() → destroy() → service()',
          'create() → service() → close()'
        ],
        correct: 0,
        explanation: '서블릿은 init()으로 초기화, service()로 요청 처리, destroy()로 소멸됩니다.'
      },
      {
        question: 'JSP의 스크립틀릿(Scriptlet) 태그는?',
        options: ['<% %>', '<%! %>', '<%= %>', '<%@ %>'],
        correct: 0,
        explanation: '<% %>는 스크립틀릿, <%! %>는 선언문, <%= %>는 표현식, <%@ %>는 지시자입니다.'
      },
      {
        question: 'Spring의 IoC(Inversion of Control) 컨테이너의 역할은?',
        options: [
          '객체의 생성과 의존성 주입을 관리',
          'HTTP 요청을 라우팅',
          '데이터베이스 트랜잭션 관리',
          '뷰 템플릿 렌더링'
        ],
        correct: 0,
        explanation: 'IoC 컨테이너는 빈(Bean)의 생성, 관리, 의존성 주입을 담당합니다.'
      },
      {
        question: 'Spring에서 의존성 주입(DI) 방법이 아닌 것은?',
        options: [
          'Static 주입',
          '생성자 주입',
          'Setter 주입',
          '필드 주입(@Autowired)'
        ],
        correct: 0,
        explanation: 'Spring DI 방법은 생성자 주입, Setter 주입, 필드 주입입니다. Static 주입은 존재하지 않습니다.'
      },
      {
        question: '@RequestMapping의 역할은?',
        options: [
          'URL 패턴과 컨트롤러 메서드를 매핑',
          '빈(Bean)을 자동 등록',
          '트랜잭션을 설정',
          '보안 설정을 적용'
        ],
        correct: 0,
        explanation: '@RequestMapping은 HTTP 요청 URL과 컨트롤러의 메서드를 매핑하는 어노테이션입니다.'
      },
      {
        question: 'Spring Boot의 장점이 아닌 것은?',
        options: [
          'XML 설정이 반드시 필요하다',
          '내장 서버(Tomcat)를 포함한다',
          '자동 설정(Auto Configuration)을 제공한다',
          'starter 의존성으로 쉽게 시작할 수 있다'
        ],
        correct: 0,
        explanation: 'Spring Boot는 XML 설정 없이도 동작합니다. 어노테이션과 application.properties로 설정합니다.'
      },
      {
        question: 'REST API에서 리소스 삭제에 사용하는 HTTP 메서드는?',
        options: ['DELETE', 'POST', 'REMOVE', 'DESTROY'],
        correct: 0,
        explanation: 'REST에서 리소스 삭제는 DELETE 메서드를 사용합니다. GET(조회), POST(생성), PUT(수정), DELETE(삭제).'
      },
      {
        question: 'JPA에서 @Entity 어노테이션의 역할은?',
        options: [
          '클래스를 데이터베이스 테이블과 매핑',
          'REST 컨트롤러를 선언',
          '서비스 계층을 표시',
          '빈(Bean)을 등록'
        ],
        correct: 0,
        explanation: '@Entity는 해당 클래스가 JPA 엔티티임을 선언하여 DB 테이블과 매핑합니다.'
      },
      {
        question: 'MVC 패턴에서 Controller의 역할은?',
        options: [
          '사용자 요청을 받아 Model과 View를 연결',
          '데이터를 저장하고 관리',
          '화면(UI)을 렌더링',
          '데이터베이스에 직접 접근'
        ],
        correct: 0,
        explanation: 'Controller는 사용자의 요청을 받아 적절한 Model을 호출하고 View를 선택하여 응답합니다.'
      },
      {
        question: 'Spring Boot의 application.properties에서 서버 포트를 변경하는 속성은?',
        options: [
          'server.port',
          'spring.port',
          'app.server.port',
          'http.port'
        ],
        correct: 0,
        explanation: 'server.port 속성으로 내장 서버의 포트를 변경할 수 있습니다. (기본값: 8080)'
      }
    ]
  }
}
