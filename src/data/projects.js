export const projectLevels = [
  {
    id: 'project-basic',
    title: 'Java 기초 프로젝트',
    description: 'Java 기초 문법을 활용한 콘솔 애플리케이션 프로젝트',
    icon: 'fa-seedling',
    color: '#10B981',
    projects: [
      {
        id: 'PJ01',
        title: '콘솔 주소록',
        desc: '연락처를 추가/수정/삭제/검색하는 콘솔 주소록 프로그램을 만듭니다',
        difficulty: 'beginner',
        prerequisites: ['01', '02', '03', '04', '05', '06', '08'],
        prerequisiteLabel: 'Ch01-06, Ch08',
        tools: ['JDK 21', 'IntelliJ IDEA'],
        features: ['연락처 CRUD', '검색/정렬', '파일 저장/불러오기', '입력 검증']
      },
      {
        id: 'PJ02',
        title: '학생 성적 관리 시스템',
        desc: '학생 정보와 성적을 관리하고 통계를 제공하는 시스템을 구현합니다',
        difficulty: 'beginner',
        prerequisites: ['01', '02', '03', '04', '05', '06', '07', '08'],
        prerequisiteLabel: 'Ch01-08',
        tools: ['JDK 21', 'IntelliJ IDEA'],
        features: ['학생/성적 CRUD', '평균/석차 계산', '과목별 통계', '파일 저장']
      }
    ]
  },
  {
    id: 'project-advanced',
    title: 'Java 심화 프로젝트',
    description: 'Java 고급 기능과 외부 라이브러리를 활용한 프로젝트',
    icon: 'fa-flask',
    color: '#3B82F6',
    projects: [
      {
        id: 'PJ03',
        title: '도서 관리 시스템',
        desc: 'JDBC와 H2 DB를 활용한 도서 관리 시스템을 구현합니다',
        difficulty: 'intermediate',
        prerequisites: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', 'PR01', 'PR03', 'PR04', 'PR05'],
        prerequisiteLabel: 'Ch01-12, PR01/03/04/05',
        tools: ['JDK 21', 'IntelliJ IDEA', 'Maven', 'H2 Database'],
        features: ['도서 CRUD', 'JDBC + H2 DB', '카테고리/검색', '대출/반납 관리']
      },
      {
        id: 'PJ04',
        title: '멀티스레드 채팅 애플리케이션',
        desc: 'Socket과 멀티스레드를 활용한 채팅 프로그램을 구현합니다',
        difficulty: 'intermediate',
        prerequisites: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', 'PR01', 'PR07', 'PR08'],
        prerequisiteLabel: 'Ch01-12, PR01/07/08',
        tools: ['JDK 21', 'IntelliJ IDEA', 'Maven', 'SLF4J'],
        features: ['TCP 소켓 통신', '멀티스레드 서버', '다중 클라이언트', '채팅방 관리']
      }
    ]
  },
  {
    id: 'project-web',
    title: '웹 프로젝트',
    description: '서블릿과 JSP를 활용한 웹 애플리케이션 프로젝트',
    icon: 'fa-globe',
    color: '#E76F00',
    projects: [
      {
        id: 'PJ05',
        title: '서블릿 게시판',
        desc: '서블릿과 JSP로 CRUD 게시판을 구현합니다',
        difficulty: 'advanced',
        prerequisites: ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10', 'PR04', 'PR05', 'PR06'],
        prerequisiteLabel: 'S01-S10, PR04/05/06',
        tools: ['JDK 21', 'Tomcat 10.1', 'MySQL', 'Maven'],
        features: ['게시글 CRUD', '페이징', '검색/필터링', '파일 업로드', '세션 인증']
      },
      {
        id: 'PJ06',
        title: '서블릿 쇼핑몰',
        desc: '서블릿 기반의 온라인 쇼핑몰을 구현합니다',
        difficulty: 'advanced',
        prerequisites: ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10', 'PR04', 'PR05', 'PR06', 'PR07'],
        prerequisiteLabel: 'S01-S10, PR04/05/06/07',
        tools: ['JDK 21', 'Tomcat 10.1', 'MySQL', 'Maven'],
        features: ['상품 관리', '장바구니', '주문/결제 흐름', '회원 관리', '관리자 페이지']
      }
    ]
  },
  {
    id: 'project-spring',
    title: 'Spring 프로젝트',
    description: 'Spring Boot를 활용한 현대적 웹 애플리케이션 프로젝트',
    icon: 'fa-leaf',
    color: '#6DB33F',
    projects: [
      {
        id: 'PJ07',
        title: 'Spring REST 블로그 API',
        desc: 'Spring Boot로 RESTful 블로그 API를 구현합니다',
        difficulty: 'expert',
        prerequisites: ['SP01', 'SP02', 'SP03', 'SP04', 'SP05', 'SP06', 'SP07', 'SP08', 'SP09', 'SP10', 'SP11', 'SP12', 'SP13', 'SP14', 'SP15', 'PR02', 'PR03', 'PR04'],
        prerequisiteLabel: 'SP01-SP15, PR02/03/04',
        tools: ['Spring Boot 3.x', 'H2/MySQL', 'Postman', 'Swagger'],
        features: ['게시글 REST API', 'Spring Data JPA', 'JWT 인증', 'Swagger 문서화', '예외처리']
      },
      {
        id: 'PJ08',
        title: 'Spring E-Commerce 플랫폼',
        desc: 'Spring Boot 기반의 종합 이커머스 플랫폼을 구현합니다',
        difficulty: 'expert',
        prerequisites: ['SP01', 'SP02', 'SP03', 'SP04', 'SP05', 'SP06', 'SP07', 'SP08', 'SP09', 'SP10', 'SP11', 'SP12', 'SP13', 'SP14', 'SP15', 'SP16', 'PR02', 'PR03', 'PR04', 'PR10'],
        prerequisiteLabel: 'SP01-SP16, PR02/03/04/10',
        tools: ['Spring Boot 3.x', 'MySQL', 'Redis', 'Docker'],
        features: ['상품/카테고리 API', '주문/결제 시스템', 'Spring Security', 'Redis 캐싱', 'Docker 배포']
      }
    ]
  }
]

export const allProjects = projectLevels.flatMap(level =>
  level.projects.map(project => ({ ...project, level: level.id, levelTitle: level.title, levelColor: level.color }))
)

export function getProjectById(id) {
  return allProjects.find(p => p.id === id)
}

export function getAdjacentProjects(id) {
  const idx = allProjects.findIndex(p => p.id === id)
  return {
    prev: idx > 0 ? allProjects[idx - 1] : null,
    next: idx < allProjects.length - 1 ? allProjects[idx + 1] : null
  }
}
