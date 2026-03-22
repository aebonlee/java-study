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
- GitHub 리포지토리에 CNAME 파일: `java-study.dreamitbiz.com`
- DNS에 CNAME 레코드 추가: `java-study.dreamitbiz.com` → `aebonlee.github.io`

## OG 이미지 생성
1. `public/og-image-generator.html`을 브라우저에서 열기
2. 1200x630 크기로 스크린샷 촬영
3. `public/og-image.png`로 저장
4. 빌드 & 배포

## SPA 라우팅 (GitHub Pages)
- `public/404.html`: SPA 리다이렉트 처리
- `index.html`: sessionStorage 기반 경로 복원
- React Router의 BrowserRouter 사용
