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
    description: 'Spring 소개 레슨(SP01)을 완료했습니다',
    icon: '🍃',
    tier: 'bronze',
    condition: { type: 'specific_lessons', lessons: ['SP01'] }
  },
  {
    id: 'servlet-starter',
    title: '서블릿 입문',
    description: '서블릿 첫 레슨(S01)을 완료했습니다',
    icon: '🌊',
    tier: 'bronze',
    condition: { type: 'specific_lessons', lessons: ['S01'] }
  },

  {
    id: 'practical-starter',
    title: '실무 입문',
    description: '실무 Java 첫 레슨(PR01)을 완료했습니다',
    icon: '🔧',
    tier: 'bronze',
    condition: { type: 'specific_lessons', lessons: ['PR01'] }
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
    description: '전체 레슨의 절반(22개)을 완료했습니다',
    icon: '⭐',
    tier: 'silver',
    condition: { type: 'lessons_completed', count: 22 }
  },
  {
    id: 'servlet-warrior',
    title: '서블릿 전사',
    description: '서블릿 입문(S01~S03)을 완료했습니다',
    icon: '🛡️',
    tier: 'silver',
    condition: { type: 'specific_lessons', lessons: ['S01', 'S02', 'S03'] }
  },
  {
    id: 'advanced-quiz',
    title: '고급 도전자',
    description: '고급 퀴즈를 통과했습니다',
    icon: '🎓',
    tier: 'silver',
    condition: { type: 'quiz_passed', quizId: 'advanced', minScore: 70 }
  },
  {
    id: 'servlet-quiz',
    title: '서블릿 퀴즈 통과',
    description: '서블릿 퀴즈를 통과했습니다',
    icon: '🏹',
    tier: 'silver',
    condition: { type: 'quiz_passed', quizId: 'servlet', minScore: 70 }
  },
  {
    id: 'twenty-lessons',
    title: '스무 고개',
    description: '20개 레슨을 완료했습니다',
    icon: '📚',
    tier: 'silver',
    condition: { type: 'lessons_completed', count: 20 }
  },

  {
    id: 'practical-tools-master',
    title: '도구 마스터',
    description: '실무 도구 과정(PR01-PR03)을 모두 완료했습니다',
    icon: '🛠️',
    tier: 'silver',
    condition: { type: 'level_completed', level: 'practical-tools' }
  },
  {
    id: 'practical-data-master',
    title: '데이터 마스터',
    description: '데이터/SQL 과정(PR04-PR06)을 모두 완료했습니다',
    icon: '🗄️',
    tier: 'silver',
    condition: { type: 'level_completed', level: 'practical-data' }
  },
  {
    id: 'practical-quiz',
    title: '실무 퀴즈 통과',
    description: '실무 Java 퀴즈를 통과했습니다',
    icon: '🎯',
    tier: 'silver',
    condition: { type: 'quiz_passed', quizId: 'practical', minScore: 70 }
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
    title: '30개 돌파!',
    description: '30개 레슨을 완료했습니다',
    icon: '🏃',
    tier: 'gold',
    condition: { type: 'lessons_completed', count: 30 }
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
    description: 'Spring Boot(SP09)와 REST API(SP10)를 완료했습니다',
    icon: '🏆',
    tier: 'gold',
    condition: { type: 'specific_lessons', lessons: ['SP09', 'SP10'] }
  },
  {
    id: 'spring-quiz',
    title: 'Spring 퀴즈 통과',
    description: 'Spring 퀴즈를 통과했습니다',
    icon: '🍃',
    tier: 'gold',
    condition: { type: 'quiz_passed', quizId: 'spring', minScore: 70 }
  },
  {
    id: 'servlet-master',
    title: '서블릿 마스터',
    description: '서블릿 과정을 모두 완료했습니다',
    icon: '⚔️',
    tier: 'gold',
    condition: { type: 'multi_level_completed', levels: ['servlet-basic', 'servlet-advanced'] }
  },
  {
    id: 'spring-fw-master',
    title: 'Framework 마스터',
    description: 'Spring Framework 과정을 모두 완료했습니다',
    icon: '🌱',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'spring-framework' }
  },
  {
    id: 'spring-boot-master',
    title: 'Boot 마스터',
    description: 'Spring Boot 과정을 모두 완료했습니다',
    icon: '🚀',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'spring-boot' }
  },
  {
    id: 'forty-lessons',
    title: '40개 돌파!',
    description: '40개 레슨을 완료했습니다',
    icon: '🏃',
    tier: 'gold',
    condition: { type: 'lessons_completed', count: 40 }
  },

  {
    id: 'practical-quality-master',
    title: '품질 마스터',
    description: '코드 품질 과정(PR07-PR08)을 모두 완료했습니다',
    icon: '💎',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'practical-quality' }
  },
  {
    id: 'practical-all-master',
    title: '실무 마스터',
    description: '실무 Java 과정을 모두 완료했습니다',
    icon: '🏗️',
    tier: 'gold',
    condition: { type: 'multi_level_completed', levels: ['practical-tools', 'practical-data', 'practical-quality', 'practical-infra'] }
  },

  // === Platinum Tier ===
  {
    id: 'all-clear',
    title: 'ALL CLEAR!',
    description: '모든 레슨(53개)을 완료했습니다',
    icon: '☕',
    tier: 'platinum',
    condition: { type: 'all_completed' }
  },
  {
    id: 'quiz-champion',
    title: '퀴즈 챔피언',
    description: '모든 퀴즈(7개)를 통과했습니다',
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
