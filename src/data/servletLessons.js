export const servletLevels = [
  {
    id: 'servlet-basic',
    title: '서블릿 기초',
    description: 'HTTP와 서블릿의 기본 개념을 학습합니다',
    icon: 'fa-server',
    color: '#E76F00',
    lessons: [
      { id: 'S01', title: '서블릿 개요와 환경설정', desc: 'Servlet이란 무엇인지, Tomcat 설치와 프로젝트 구성을 배웁니다', difficulty: 'beginner' },
      { id: 'S02', title: 'HTTP 프로토콜과 요청/응답', desc: 'HTTP 메서드, 헤더, 상태코드와 요청/응답 구조를 학습합니다', difficulty: 'beginner' },
      { id: 'S03', title: '서블릿 생명주기', desc: 'init, service, destroy 메서드와 서블릿 컨테이너를 이해합니다', difficulty: 'beginner' },
      { id: 'S04', title: '폼 처리와 파라미터', desc: 'HTML 폼 데이터를 서블릿으로 전달하고 처리하는 방법을 배웁니다', difficulty: 'beginner' },
      { id: 'S05', title: '세션과 쿠키', desc: 'HttpSession과 Cookie를 활용한 상태 관리를 학습합니다', difficulty: 'intermediate' },
    ]
  },
  {
    id: 'servlet-advanced',
    title: '서블릿 심화',
    description: '필터, JSP, MVC 패턴 등 서블릿 심화 과정을 학습합니다',
    icon: 'fa-layer-group',
    color: '#C45D00',
    lessons: [
      { id: 'S06', title: '필터와 리스너', desc: 'Filter, Listener를 활용한 요청 전후 처리를 배웁니다', difficulty: 'intermediate' },
      { id: 'S07', title: 'JSP 기초와 EL/JSTL', desc: 'JSP 문법, Expression Language, JSTL 태그 라이브러리를 학습합니다', difficulty: 'intermediate' },
      { id: 'S08', title: 'MVC 패턴 구현', desc: 'Model-View-Controller 패턴으로 웹 애플리케이션을 설계합니다', difficulty: 'advanced' },
      { id: 'S09', title: '파일 업로드와 DB 연동', desc: 'Multipart 파일 처리와 JDBC 데이터베이스 연동을 배웁니다', difficulty: 'advanced' },
      { id: 'S10', title: '미니 프로젝트: CRUD 게시판', desc: '서블릿으로 완전한 CRUD 게시판을 구현합니다', difficulty: 'advanced' },
    ]
  }
]

export const allServletLessons = servletLevels.flatMap(level =>
  level.lessons.map(lesson => ({ ...lesson, level: level.id, levelTitle: level.title }))
)

export function getServletLessonById(id) {
  return allServletLessons.find(l => l.id === id)
}

export function getAdjacentServletLessons(id) {
  const idx = allServletLessons.findIndex(l => l.id === id)
  return {
    prev: idx > 0 ? allServletLessons[idx - 1] : null,
    next: idx < allServletLessons.length - 1 ? allServletLessons[idx + 1] : null
  }
}
