# 배포 가이드

## 기술 스택
- **프레임워크**: React 19 + Vite 7
- **배포**: GitHub Pages (gh-pages 패키지)
- **도메인**: java-study.dreamitbiz.com (CNAME)

## 개발 환경 실행
```bash
npm install
npm run dev
# http://localhost:5173 에서 확인
```

## 빌드
```bash
npm run build
# dist/ 폴더에 빌드 결과물 생성
```

## 배포
```bash
npm run deploy
# 자동으로 빌드 후 gh-pages 브랜치에 배포
```

## 배포 과정
1. `npm run predeploy` → `vite build` 실행
2. `npm run deploy` → `gh-pages -d dist` 실행
3. dist/ 내용이 gh-pages 브랜치에 푸시됨
4. GitHub Pages가 자동으로 해당 브랜치에서 서빙

## CNAME 설정
- `public/CNAME` 파일: `java-study.dreamitbiz.com`
- DNS에 CNAME 레코드 추가: `java-study.dreamitbiz.com` → `aebonlee.github.io`
- ⚠️ `public/CNAME` 파일이 없으면 배포 시 404 에러 발생

## OG 이미지 생성
### 스크립트 (권장)
```bash
node scripts/generate-og-image.mjs
# public/og-image.png 자동 생성
```

### 브라우저 (대안)
1. `public/og-image-generator.html`을 브라우저에서 열기
2. **"PNG 다운로드"** 버튼 클릭
3. 다운로드된 `og-image.png`를 `public/` 폴더에 저장
4. 빌드 & 배포
5. 카카오 디버거에서 캐시 초기화

## SPA 라우팅 (GitHub Pages)
- `public/404.html`: SPA 리다이렉트 처리
- `index.html`: sessionStorage 기반 경로 복원
- React Router의 BrowserRouter 사용

## 전체 라우트 목록
| 경로 | 페이지 |
|------|--------|
| `/` | 홈 (랜딩 페이지) |
| `/java-learning` | Java 커리큘럼 허브 |
| `/java-learning/01~17` | Java 레슨 (17개) |
| `/servlet` | 서블릿 과정 허브 |
| `/servlet/01~10` | 서블릿 레슨 (10개) |
| `/spring` | 스프링 과정 허브 |
| `/spring/01~16` | 스프링 레슨 (16개) |
| `/quiz` | 퀴즈 센터 |
| `/badges` | 도장깨기 (배지) |
| `/my` | 마이페이지 |
| `/guide` | 이용 가이드 |
| `/login` | 로그인 |

## 트러블슈팅
- **404 에러**: `public/CNAME` 파일 존재 확인
- **OG 미리보기 안됨**: `public/og-image.png` (PNG 파일) 존재 확인, 카카오 디버거 캐시 초기화
- **SPA 라우팅 안됨**: `public/404.html` 존재 확인
