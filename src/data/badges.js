export const badges = [
  {
    id: 'first-step',
    name: '첫 걸음',
    description: '첫 번째 레슨을 완료했습니다',
    icon: '🎯',
    tier: 'bronze',
    condition: { type: 'lessons_completed', count: 1 }
  },
  {
    id: 'basics-master',
    name: '기초 마스터',
    description: '기초 과정을 모두 완료했습니다',
    icon: '🌱',
    tier: 'silver',
    condition: { type: 'level_completed', level: 'basics' }
  },
  {
    id: 'oop-master',
    name: 'OOP 마스터',
    description: '중급 과정(OOP)을 모두 완료했습니다',
    icon: '🧩',
    tier: 'silver',
    condition: { type: 'level_completed', level: 'intermediate' }
  },
  {
    id: 'advanced-master',
    name: '고급 마스터',
    description: '고급 과정을 모두 완료했습니다',
    icon: '🚀',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'advanced' }
  },
  {
    id: 'web-master',
    name: '웹 개발 마스터',
    description: '웹 개발 과정을 모두 완료했습니다',
    icon: '🌐',
    tier: 'gold',
    condition: { type: 'level_completed', level: 'web' }
  },
  {
    id: 'half-way',
    name: '절반 달성',
    description: '전체 레슨의 절반을 완료했습니다',
    icon: '⭐',
    tier: 'silver',
    condition: { type: 'lessons_completed', count: 9 }
  },
  {
    id: 'java-master',
    name: 'Java Master',
    description: '모든 레슨을 완료했습니다!',
    icon: '☕',
    tier: 'platinum',
    condition: { type: 'lessons_completed', count: 17 }
  },
  {
    id: 'quiz-starter',
    name: '퀴즈 도전자',
    description: '첫 퀴즈를 통과했습니다',
    icon: '📝',
    tier: 'bronze',
    condition: { type: 'quiz_passed', count: 1 }
  },
  {
    id: 'code-runner',
    name: '코드 러너',
    description: '코드를 50번 이상 실행했습니다',
    icon: '💻',
    tier: 'bronze',
    condition: { type: 'code_runs', count: 50 }
  },
  {
    id: 'spring-beginner',
    name: 'Spring 입문자',
    description: 'Spring 관련 레슨을 시작했습니다',
    icon: '🍃',
    tier: 'silver',
    condition: { type: 'specific_lessons', lessons: ['15'] }
  }
]
