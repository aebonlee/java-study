# JavaCodeRunner 기술 가이드

## 개요
브라우저에서 Java 코드를 작성하고 실행할 수 있는 컴포넌트입니다.
외부 Piston API를 사용하여 서버 없이 Java 코드를 실행합니다.

## 컴포넌트 정보
- **파일**: `src/components/JavaCodeRunner.jsx`
- **의존성**: `react-simple-code-editor`, `prismjs`
- **API**: Piston API (https://emkc.org/api/v2/piston/execute)

## Props
| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `defaultCode` | string | 필수 | 기본 Java 코드 |
| `title` | string | `''` | 실행기 제목 |
| `readOnly` | boolean | `false` | 읽기 전용 모드 |

## 사용 예시
```jsx
import JavaCodeRunner from '../components/JavaCodeRunner'

<JavaCodeRunner
  defaultCode={`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`}
  title="Hello World 실행"
/>
```

## 기능
1. **코드 편집**: PrismJS Java 구문 강조, 줄번호 표시
2. **실행 (Run)**: Piston API로 Java 코드 전송 후 결과 표시
3. **초기화 (Reset)**: defaultCode로 되돌리기
4. **출력**: 실행 결과 또는 에러 메시지 (에러 시 빨간색)
5. **코드 실행 횟수**: `ProgressContext.incrementCodeRuns()` 호출

## Piston API
### 요청
```javascript
fetch('https://emkc.org/api/v2/piston/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    language: 'java',
    version: '15.0.2',
    files: [{ name: 'Main.java', content: code }]
  })
})
```

### 응답
```javascript
{
  run: {
    stdout: "실행 결과",    // 정상 출력
    stderr: "에러 메시지",   // 에러 출력
    code: 0                 // 종료 코드 (0=성공)
  }
}
```

### 제한사항
- **무료 API**: 인증 불필요, 요청 제한 있음
- **Java 15.0.2**: 최신 문법 일부 미지원 가능
- **클래스명**: 반드시 `Main`이어야 함 (파일명 Main.java)
- **네트워크**: 인터넷 연결 필요
- **타임아웃**: 실행 시간 제한 있음 (약 10초)

## CSS 스타일
기존 `src/styles/editor.css` 스타일을 활용합니다:
- `.code-runner` - 전체 컨테이너
- `.code-runner-header` - 제목 + 버튼 영역
- `.code-runner-editor` - 코드 편집 영역
- `.code-runner-output` - 출력 영역
- `.code-runner-output.error` - 에러 출력 (빨간색)

## 레슨별 활용 패턴

### 순수 Java 실습
대부분의 레슨에서 사용. Java 기초 문법, 자료구조, 알고리즘 등:
```jsx
<JavaCodeRunner defaultCode={`public class Main {
    public static void main(String[] args) {
        // 실습 코드
    }
}`} title="실습 제목" />
```

### 개념 시뮬레이션 (서블릿/스프링)
서블릿/스프링 코드는 Tomcat/Spring Boot 없이 실행 불가하므로,
순수 Java로 핵심 개념을 시뮬레이션:
```jsx
// 서블릿 생명주기 시뮬레이션
// Spring DI 시뮬레이션
// MVC 패턴 시뮬레이션 등
```
실제 서블릿/스프링 프로젝트는 callout-info로 실습 안내 제공.

## 트러블슈팅
| 문제 | 원인 | 해결 |
|------|------|------|
| "실행 중..." 무한 로딩 | Piston API 응답 없음 | 네트워크 확인, 잠시 후 재시도 |
| 컴파일 에러 | 클래스명이 Main이 아님 | `public class Main` 확인 |
| 한글 깨짐 | 인코딩 문제 | UTF-8로 저장 (기본 지원) |
| 템플릿 리터럴 에러 | JSX에서 `${}` 미이스케이프 | `\${}` 로 이스케이프 |
