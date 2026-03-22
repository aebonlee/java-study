export const badges = [
  // === Bronze Tier ===
  {
    id: 'first-step',
    title: '첫 걸음',
    description: '첫 번째 레슨을 완료했습니다',
    icon: '🎯',
    tier: 'bronze',
    condition: { type: 'lessons_completed', count: 1 }
  },
  {
    id: 'hello-world',
    title: 'Hello, World!',
    description: 'Java 소개 레슨(Ch.01)을 완료했습니다',
    icon: '👋',
    tier: 'bronze',
    condition: { type: 'specific_lessons', lessons: ['01'] }
  },
  {
    id: 'code-runner',
    title: '코드 러너',
    description: '코드를 10번 이상 실행했습니다',
    icon: '💻',
    tier: 'bronze',
    condition: { type: 'code_runs', count: 10 }
  },
  {
    id: 'five-lessons',
    title: '다섯 고개',
    description: '5개 레슨을 완료했습니다',
    icon: '✋',
    tier: 'bronze',
    condition: { type: 'lessons_completed', count: 5 }
  },
  {
    id: 'first-quiz',
    title: '퀴즈 도전자',
    description: '첫 번째 퀴즈를 통과했습니다',
    icon: '📝',
    tier: 'bronze',
    condition: { type: 'quiz_passed', quizId: 'basics', minScore: 70 }
  },
  {
    id: 'spring-starter',
    title: 'Spring 입문',
    description: 'Spring 기초 레슨(Ch.15)을 완료했습니다',
    icon: '🍃',
    tier: 'bronze',
    condition: { type: 'specific_lessons', lessons: ['15'] }
  },

  // === Silver Tier ===
  {
    id: 'basics-master',
    title: '기초 마스터',
    description: '기초 과정(Ch.01-04)을 모두 완료했습니다',
    icon: '🌱',
    tier: 'silver',
    condition: { type: 'level_completed', level: 'basics' }
  },
  {
    id: 'ten-lessons',
    title: '열 걸음',
    description: '10개 레슨을 완료했습니다',
    icon: '🔟',
    tier: 'silver',
    condition: { type: 'lessons_completed', count: 10 }
  },
  {
    id: 'code-addict',
    title: '코딩 중독',
    description: '코드를 50번 이상 실행했습니다',
    icon: '⚡',
    tier: 'silver',
    condition: { type: 'code_runs', count: 50 }
  },
  {
    id: 'oop-hero',
    title: 'OOP 히어로',
    description: '중급 과정(OOP) 퀴즈를 통과했습니다',
    icon: '🧩',
    tier: 'silver',
    condition: { type: 'quiz_passed', quizId: 'intermediate', minScore: 70 }
  },
  {
    id: 'half-way',
    title: '절반 달성',
    description: '전체 레슨의 절반을 완료했습니다',
    icon: '⭐',
    tier: 'silver',
    condition: { type: 'lessons_completed', count: 9 }
  },
  {
    id: 'servlet-warrior',
    title: '서블릿 전사',
    description: '서블릿 기초(Ch.13)와 JSP(Ch.14)를 완료했습니다',
    icon: '🛡️',
    tier: 'silver',
    condition: { type: 'specific_lessons', lessons: ['13', '14'] }
  },
  {
    id: 'advanced-quiz',
    title: '고급 도전자',
    description: '고급 퀴즈를 통과했습니다',
    icon: '🎓',
    tier: 'silver',
    condition: { type: 'quiz_passed', quizId: 'advanced', minScore: 70 }
  },

  // === Gold Tier ===
  {
    id: 'intermediate-master',
    title: 'OOP 마스터',
    description: '중급 과정(Ch.05-08)을 모두 완료했습니다',
    icon: '🧬',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'intermediate' }
  },
  {
    id: 'advanced-master',
    title: '고급 마스터',
    description: '고급 과정(Ch.09-12)을 모두 완료했습니다',
    icon: '🚀',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'advanced' }
  },
  {
    id: 'web-master',
    title: '웹 개발 마스터',
    description: '웹 개발 과정(Ch.13-17)을 모두 완료했습니다',
    icon: '🌐',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'web' }
  },
  {
    id: 'perfect-basics',
    title: '기초 만점',
    description: '기초 퀴즈에서 100점을 달성했습니다',
    icon: '💯',
    tier: 'gold',
    condition: { type: 'quiz_perfect', quizId: 'basics' }
  },
  {
    id: 'web-quiz',
    title: '웹 전문가',
    description: '웹 개발 퀴즈를 통과했습니다',
    icon: '🏗️',
    tier: 'gold',
    condition: { type: 'quiz_passed', quizId: 'web', minScore: 70 }
  },
  {
    id: 'fifteen-lessons',
    title: '거의 다 왔어!',
    description: '15개 레슨을 완료했습니다',
    icon: '🏃',
    tier: 'gold',
    condition: { type: 'lessons_completed', count: 15 }
  },
  {
    id: 'code-master',
    title: '코딩 마스터',
    description: '코드를 100번 이상 실행했습니다',
    icon: '🔥',
    tier: 'gold',
    condition: { type: 'code_runs', count: 100 }
  },
  {
    id: 'spring-boot-pro',
    title: 'Spring Boot Pro',
    description: 'Spring Boot(Ch.16)와 Spring MVC(Ch.17)를 완료했습니다',
    icon: '🏆',
    tier: 'gold',
    condition: { type: 'specific_lessons', lessons: ['16', '17'] }
  },

  // === Platinum Tier ===
  {
    id: 'all-clear',
    title: 'ALL CLEAR!',
    description: '모든 레슨(17개)을 완료했습니다',
    icon: '☕',
    tier: 'platinum',
    condition: { type: 'all_completed' }
  },
  {
    id: 'quiz-champion',
    title: '퀴즈 챔피언',
    description: '모든 퀴즈를 통과했습니다',
    icon: '👑',
    tier: 'platinum',
    condition: { type: 'all_quizzes_passed' }
  },
  {
    id: 'perfect-master',
    title: '완벽주의자',
    description: '모든 퀴즈에서 만점을 달성했습니다',
    icon: '💎',
    tier: 'platinum',
    condition: { type: 'all_quizzes_perfect' }
  },
  {
    id: 'java-master',
    title: 'Java Master',
    description: '모든 레슨과 퀴즈를 완료한 진정한 Java Master!',
    icon: '🏅',
    tier: 'platinum',
    condition: { type: 'java_master' }
  }
]
