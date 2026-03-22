# 인증 시스템 가이드

## 개요
- **방식**: Supabase Auth (OAuth 2.0)
- **지원 프로바이더**: Google, Kakao
- **세션**: 30분 자동 만료, 5분 전 경고, 연장 가능
- **상태 관리**: AuthContext (React Context API)

## 파일 구조
| 파일 | 역할 |
|------|------|
| `src/contexts/AuthContext.jsx` | 인증 상태 관리, 세션 타이머, 로그인 모달 |
| `src/pages/Login.jsx` | 로그인 페이지 (`/login`) |
| `src/config/supabase.js` | Supabase 클라이언트 설정 |
| `src/styles/auth.css` | 로그인, 사용자 메뉴, 세션 경고, 모달 스타일 |

## AuthContext API

### 제공 값
| 속성/함수 | 타입 | 설명 |
|-----------|------|------|
| `user` | object/null | 현재 로그인된 Supabase 사용자 |
| `loading` | boolean | 세션 확인 중 여부 |
| `isAuthenticated` | boolean | 로그인 여부 |
| `isAdmin` | boolean | 관리자 여부 (aebon@kakao.com) |
| `isTeacher` | boolean | 선생님 역할 여부 |
| `signInWithGoogle()` | function | Google OAuth 로그인 |
| `signInWithKakao()` | function | Kakao OAuth 로그인 |
| `signOut()` | function | 로그아웃 |
| `requireAuth(callback)` | function | 로그인 필수 래퍼 (미로그인 시 모달) |
| `showLoginModal` | boolean | 로그인 모달 표시 여부 |
| `dismissLoginModal()` | function | 로그인 모달 닫기 |
| `sessionTimeLeft` | number/null | 세션 남은 시간 (ms) |
| `showSessionWarning` | boolean | 세션 경고 표시 여부 (5분 이하) |
| `extendSession()` | function | 세션 30분 연장 |

### 사용 예시
```jsx
import { useAuth } from '../contexts/AuthContext'

function MyComponent() {
  const { user, isAuthenticated, requireAuth, signOut } = useAuth()

  const handleAction = () => {
    requireAuth(() => {
      // 로그인된 상태에서만 실행
      console.log('인증 완료:', user.email)
    })
  }
}
```

## 세션 관리
- **세션 시간**: 30분 (SESSION_DURATION = 30 * 60 * 1000)
- **경고 시작**: 5분 전 (WARNING_THRESHOLD = 5 * 60 * 1000)
- **저장소**: localStorage(`javamaster-session-expiry`)
- **만료 시**: 자동 로그아웃
- **연장**: "연장하기" 버튼 클릭 시 30분 갱신

## UI 컴포넌트

### Navbar 사용자 메뉴
- **비로그인**: "로그인" 버튼 (pill 스타일)
- **로그인**: 사용자 아바타 → 클릭 시 풍선 드롭다운
  - 사용자 이름/이메일
  - 마이페이지 링크
  - 관리자 링크 (관리자만)
  - 로그아웃 버튼

### 세션 경고 배너
- 화면 최상단 고정 (z-index: 10000)
- 노란색 그라데이션 배경
- 남은 시간 카운트다운 + 연장 버튼

### 로그인 모달
- `requireAuth()` 호출 시 자동 표시
- 오버레이 + 중앙 모달
- Google/Kakao 로그인 버튼
- 로그인 완료 후 pending action 자동 실행

## Supabase 사용자 테이블
- `javamaster_users` 테이블에 사용자 정보 자동 upsert
- 저장 필드: id, email, name, avatar_url, provider, role, updated_at
- 기본 role: 'student'
- 관리자 이메일: `aebon@kakao.com` (코드 하드코딩)

## 다크 모드 대응
- 로그인 카드, 버튼, 풍선 메뉴, 세션 경고, 모달 모두 다크모드 스타일 포함
- `[data-theme="dark"]` 선택자 사용
