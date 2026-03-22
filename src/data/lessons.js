export const levels = [
  {
    id: 'basics',
    title: '기초',
    description: 'Java 프로그래밍의 기본 문법과 개념을 학습합니다',
    icon: 'fa-seedling',
    color: '#10B981',
    lessons: [
      { id: '01', title: 'Java 소개 및 환경설정', desc: 'Java의 역사와 개발 환경을 설정합니다', difficulty: 'beginner' },
      { id: '02', title: '변수와 자료형', desc: '기본 자료형과 변수 선언 방법을 배웁니다', difficulty: 'beginner' },
      { id: '03', title: '연산자와 제어문', desc: '조건문, 반복문, 연산자를 학습합니다', difficulty: 'beginner' },
      { id: '04', title: '배열과 문자열', desc: '배열, 다차원 배열, String 클래스를 다룹니다', difficulty: 'beginner' },
    ]
  },
  {
    id: 'intermediate',
    title: '중급',
    description: '객체지향 프로그래밍(OOP)의 핵심을 익힙니다',
    icon: 'fa-code',
    color: '#3B82F6',
    lessons: [
      { id: '05', title: '클래스와 객체', desc: '클래스 정의, 생성자, 메서드를 학습합니다', difficulty: 'intermediate' },
      { id: '06', title: '상속과 다형성', desc: '상속, 오버라이딩, 다형성 개념을 배웁니다', difficulty: 'intermediate' },
      { id: '07', title: '인터페이스와 추상클래스', desc: '추상화와 인터페이스 활용법을 익힙니다', difficulty: 'intermediate' },
      { id: '08', title: '예외처리와 컬렉션', desc: 'try-catch와 List, Map, Set을 다룹니다', difficulty: 'intermediate' },
    ]
  },
  {
    id: 'advanced',
    title: '고급',
    description: 'Java의 고급 기능과 모던 문법을 학습합니다',
    icon: 'fa-rocket',
    color: '#E76F00',
    lessons: [
      { id: '09', title: '제네릭과 열거형', desc: '타입 안전성과 enum 활용을 배웁니다', difficulty: 'advanced' },
      { id: '10', title: '람다와 스트림 API', desc: '함수형 프로그래밍과 Stream을 학습합니다', difficulty: 'advanced' },
      { id: '11', title: '멀티스레드와 동시성', desc: 'Thread, synchronized, ExecutorService를 다룹니다', difficulty: 'advanced' },
      { id: '12', title: '파일 I/O와 네트워크', desc: 'NIO, Socket 프로그래밍을 학습합니다', difficulty: 'advanced' },
    ]
  },
  {
    id: 'web',
    title: '웹 개발',
    description: 'Servlet부터 Spring Boot까지 웹 개발을 학습합니다',
    icon: 'fa-globe',
    color: '#EF4444',
    lessons: [
      { id: '13', title: '서블릿 기초', desc: 'HttpServlet, 요청/응답 처리를 배웁니다', difficulty: 'advanced' },
      { id: '14', title: 'JSP와 MVC 패턴', desc: 'JSP 문법과 MVC 아키텍처를 학습합니다', difficulty: 'advanced' },
      { id: '15', title: 'Spring Framework 기초', desc: 'IoC, DI, AOP 핵심 개념을 익힙니다', difficulty: 'expert' },
      { id: '16', title: 'Spring Boot와 REST API', desc: 'Spring Boot로 REST API를 만듭니다', difficulty: 'expert' },
      { id: '17', title: 'Spring MVC와 데이터 접근', desc: 'Spring MVC, JPA, MyBatis를 학습합니다', difficulty: 'expert' },
    ]
  }
]

export const allLessons = levels.flatMap(level =>
  level.lessons.map(lesson => ({ ...lesson, level: level.id, levelTitle: level.title }))
)

export function getLessonById(id) {
  return allLessons.find(l => l.id === id)
}

export function getAdjacentLessons(id) {
  const idx = allLessons.findIndex(l => l.id === id)
  return {
    prev: idx > 0 ? allLessons[idx - 1] : null,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1] : null
  }
}
