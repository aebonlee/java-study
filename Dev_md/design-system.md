# JavaMaster 디자인 시스템

## 컬러 팔레트

### 브랜드 컬러
| 이름 | 값 | 용도 |
|------|-----|------|
| Primary | `#5382A1` | 메인 컬러, 링크, 강조 |
| Primary Dark | `#3A6186` | 호버 상태 |
| Primary Light | `#6B9DC2` | 밝은 강조 |
| Accent (Java Orange) | `#E76F00` | 버튼, 로고, CTA |
| Accent Dark | `#C45D00` | 버튼 호버 |
| Accent Light | `#F4943E` | 밝은 강조 |

### 배경 그라데이션
- **Hero**: `#0f1f2e → #1a3a52 → #2d5a7b → #3a6d94` (다크블루 계열)
- **CTA**: `#0f1f2e → #2d5a7b`
- **Footer**: `#1a2332 → #0f1722`
- ⚠️ 그라데이션에 주황색 사용하지 않음 (다크블루만)

### 중립 컬러
| 변수 | 라이트 | 다크 |
|------|--------|------|
| `--bg-white` | `#FFFFFF` | `#111827` |
| `--bg-light` | `#F7F9FC` | `#1F2937` |
| `--bg-medium` | `#E8EDF2` | `#374151` |
| `--text-primary` | `#111827` | `#F9FAFB` |
| `--text-secondary` | `#4B5563` | `#D1D5DB` |
| `--text-light` | `#5B6370` | `#9CA3AF` |

### 상태 컬러
| 이름 | 값 | 용도 |
|------|-----|------|
| Success | `#10B981` | 합격, 완료 |
| Warning | `#F59E0B` | 경고 |
| Error | `#EF4444` | 오류, 불합격 |
| Info | `#3B82F6` | 정보 |

### 배지 등급 컬러
| 등급 | 배경 | 텍스트 |
|------|------|--------|
| Bronze | `#CD7F32` | white |
| Silver | `#C0C0C0` | #333 |
| Gold | `#FFD700` | #333 |
| Platinum | `#a78bfa → #818cf8` | white |

---

## 타이포그래피

### 브랜드 로고
- **구조**: `<h1>` 텍스트 로고 (PyMaster와 동일 패턴, 아이콘 없음)
- **Navbar**: "Java" = `var(--primary)` 블루 + "Master" = `var(--accent-dark)` 주황
- **Footer**: "Java" = `var(--accent)` 주황 + "Master" = 흰색
- **Login**: "Java" = `var(--primary)` 블루 + "Master" = `var(--accent-dark)` 주황
- **font-size**: 26px, **font-weight**: 800
- **파비콘**: 순수 주황색 (#E76F00) 배경, 흰색 J (그라데이션 없음)

### 폰트 패밀리
- **본문**: `'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif`
- **코드**: `'JetBrains Mono', 'Fira Code', monospace`
- **로고 아이콘**: `Georgia, serif` (J 글자)

### 폰트 크기
| 변수 | 크기 | 용도 |
|------|------|------|
| `--font-size-xs` | 0.75rem | 태그, 메타 |
| `--font-size-sm` | 0.875rem | 본문 보조 |
| `--font-size-base` | 1rem | 기본 본문 |
| `--font-size-lg` | 1.125rem | 큰 본문 |
| `--font-size-xl` | 1.25rem | 소제목 |
| `--font-size-2xl` | 1.5rem | 제목 |
| `--font-size-3xl` | 1.875rem | 섹션 제목 |
| `--font-size-hero` | 3.5rem | 히어로 제목 |

---

## 간격 & 레이아웃

### 라운딩
| 변수 | 값 | 용도 |
|------|-----|------|
| `--radius-sm` | 8px | 버튼, 입력 |
| `--radius-md` | 12px | 카드, 드롭다운 |
| `--radius-lg` | 16px | 큰 카드 |
| `--radius-xl` | 20px | 모달, 팝업 |
| `--radius-full` | 9999px | 원형 배지, 태그 |

### 그림자
| 변수 | 용도 |
|------|------|
| `--shadow-sm` | 카드 기본 |
| `--shadow-md` | 호버 상태 |
| `--shadow-lg` | 드롭다운, 플로팅 |
| `--shadow-xl` | 모달, 팝업 |

### 기타
- **Nav Height**: 72px
- **Container Max**: 1280px
- **Transition**: `0.3s cubic-bezier(0.4, 0, 0.2, 1)`

---

## 아이콘
- **Font Awesome 6.5.1** (CDN)
- 사용 예: `fas fa-book`, `fas fa-trophy`, `fas fa-rocket`
- 배지 아이콘: 이모지 사용 (🎯, 🏆, ☕ 등)

---

## 반응형 브레이크포인트
| 이름 | 너비 | 변경 사항 |
|------|------|-----------|
| 데스크톱 | > 1100px | 전체 레이아웃 |
| 태블릿 | ≤ 1024px | 2열 그리드, 모바일 메뉴 |
| 모바일 | ≤ 768px | 1열, 축소 폰트 |
| 소형 | ≤ 480px | 최소 패딩, 축소 |

---

## 컴포넌트 패턴

### 버튼
```css
.btn-primary    /* 파란 버튼 (Primary) */
.btn-accent     /* 주황 버튼 (Accent) */
.btn-outline    /* 테두리 버튼 */
.btn-sm         /* 작은 버튼 */
.btn-lg         /* 큰 버튼 */
```

### 메가 드롭다운
```css
.dropdown-mega           /* 3열 플렉스 레이아웃, 480px 너비 */
.dropdown-mega-section   /* 각 섹션 (기초/중급/고급) */
.dropdown-section-header /* 컬러 헤더 (초록/파랑/주황) */
```
- 기초 헤더: `#10B981` (Success 초록)
- 중급 헤더: `#3B82F6` (Info 파랑)
- 고급 헤더: `#E76F00` (Accent 주황)

### 카드
- 배경: `var(--bg-white)`
- 테두리: `1px solid var(--border-light)`
- 라운딩: `var(--radius-lg)`
- 호버: `translateY(-4px) + shadow-lg`

### 페이지 헤더
- 배경: 연한 블루 그라데이션
- 아이콘: 그라데이션 박스 (52×52)
- 제목 + 설명
