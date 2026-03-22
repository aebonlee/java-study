# Open Graph 메타 태그 가이드

## 현재 설정 (index.html)

```html
<!-- Open Graph -->
<meta property="og:url" content="https://java-study.dreamitbiz.com" />
<meta property="og:type" content="website" />
<meta property="og:title" content="JavaMaster - Java 학습 플랫폼" />
<meta property="og:description" content="Java 기초부터 Spring Boot까지, 체계적인 17개 챕터 Java 학습 플랫폼" />
<meta property="og:image" content="https://java-study.dreamitbiz.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="JavaMaster" />
<meta property="og:locale" content="ko_KR" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="JavaMaster - Java 학습 플랫폼" />
<meta name="twitter:description" content="Java 기초부터 Spring Boot까지" />
<meta name="twitter:image" content="https://java-study.dreamitbiz.com/og-image.png" />
```

## OG 이미지 사양
- **크기**: 1200 x 630px (권장)
- **포맷**: PNG 또는 JPG (SVG 미지원)
- **파일 위치**: `public/og-image.png`

## 디버거 도구
- **카카오**: https://developers.kakao.com/tool/debugger/sharing
- **페이스북**: https://developers.facebook.com/tools/debug/
- **트위터**: https://cards-dev.twitter.com/validator

## OG 이미지 생성 방법
1. `public/og-image-generator.html`을 브라우저에서 열기
2. Canvas 기반으로 자동 렌더링됨 (다크블루 그라데이션 배경)
3. **"PNG 다운로드"** 버튼 클릭
4. 다운로드된 `og-image.png`를 `public/` 폴더에 저장
5. `npm run deploy`로 배포
6. 카카오 디버거에서 URL 입력 후 캐시 초기화

## ⚠️ 주의사항
- og:image는 반드시 **절대 URL** 사용
- 이미지는 **PNG/JPG만 지원** (SVG 불가)
- 현재 `og-image.svg`만 있고 `og-image.png`가 없으면 미리보기 안됨
- 카카오는 캐시가 있으므로 변경 시 디버거에서 초기화 필요
- 이미지 용량은 5MB 이하 권장
