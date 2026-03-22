# Supabase 진도 동기화 가이드

## 개요
v3.4.0부터 로그인 사용자의 학습 진도와 배지가 Supabase DB에 동기화됩니다.
비로그인 사용자는 기존과 동일하게 localStorage만 사용합니다.

## 동기화 대상
| 데이터 | localStorage 키 | Supabase 테이블 |
|--------|-----------------|-----------------|
| 완료 레슨, 코드 실행 수 | `javamaster-progress` | `javamaster_progress` |
| 퀴즈 점수 | `javamaster-progress` (quizScores) | `javamaster_quiz_scores` |
| 배지 | `javamaster-badges` | `javamaster_badges` |

## 동기화 흐름

### 로그인 시 (user 변경 감지)
```
1. Supabase에서 데이터 로드
2. localStorage 데이터와 병합 (합집합)
3. 병합 결과를 localStorage + Supabase 양쪽에 저장
```

### 데이터 변경 시
```
1. React state 업데이트
2. localStorage에 저장 (useEffect)
3. 로그인 상태면 Supabase에도 저장
```

### 로그아웃 시
- syncedUserRef 리셋
- localStorage 데이터는 유지 (다음 로그인 시 병합)

## 병합 전략 (Union Merge)

### completedLessons
- `Set` 합집합: 로컬 + 원격 중복 제거
- 예: 로컬 `[01, 02]` + 원격 `[02, 03]` → `[01, 02, 03]`

### codeRuns
- `Math.max(local, remote)` — 더 큰 값 사용

### quizScores
- 퀴즈별 `bestScore`: `Math.max` 사용
- `attempts`: 날짜 기준 중복 제거 후 합치기

### badges
- `Set` 합집합: 로컬 + 원격 중복 제거

## ProgressContext 핵심 함수

| 함수 | 설명 | Supabase 호출 |
|------|------|---------------|
| `completeLesson(id)` | 레슨 완료 | `javamaster_progress` upsert |
| `uncompleteLesson(id)` | 레슨 완료 취소 | `javamaster_progress` upsert |
| `saveQuizScore(quizId, score)` | 퀴즈 점수 저장 | `javamaster_quiz_scores` insert |
| `incrementCodeRuns()` | 코드 실행 수 +1 | `javamaster_progress` upsert |

## BadgeContext 동기화

| 이벤트 | 동작 |
|--------|------|
| 로그인 | Supabase에서 배지 로드 → localStorage 병합 → 로컬 전용 배지 업로드 |
| 배지 획득 | `javamaster_badges`에 upsert |

## 오프라인 안전성
- 모든 Supabase 호출은 `try/catch`로 감싸짐
- 네트워크 오류 시 console.error만 출력, localStorage 동작은 영향 없음
- Supabase 미설정(`isSupabaseEnabled() === false`) 시 모든 원격 호출 스킵

## 중복 동기화 방지
- `syncedUserRef`로 동일 user.id에 대한 재동기화 방지
- 로그아웃 시 ref 리셋 → 다시 로그인하면 새로 동기화

## 프로바이더 순서
```
ThemeProvider > AuthProvider > ProgressProvider > BadgeProvider
```
- AuthProvider가 가장 바깥: ProgressContext/BadgeContext에서 `useAuth()` 접근 가능
- v3.3.0 이전: `ThemeProvider > ProgressProvider > BadgeProvider > AuthProvider`

## Supabase 테이블 스키마

### javamaster_progress
| 컬럼 | 타입 | 설명 |
|------|------|------|
| user_id | UUID (PK) | auth.users 참조 |
| completed_lessons | text[] | 완료 레슨 ID 배열 |
| code_runs | integer | 코드 실행 횟수 |
| updated_at | timestamptz | 마지막 수정 시간 |

### javamaster_quiz_scores
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | UUID (PK) | 자동 생성 |
| user_id | UUID | auth.users 참조 |
| quiz_id | text | 퀴즈 ID (basics, intermediate, ...) |
| score | integer | 점수 |
| created_at | timestamptz | 응시 시간 |

### javamaster_badges
| 컬럼 | 타입 | 설명 |
|------|------|------|
| user_id | UUID | auth.users 참조 |
| badge_id | text | 배지 ID |
| earned_at | timestamptz | 획득 시간 |
| **UNIQUE** | (user_id, badge_id) | 중복 방지 |
