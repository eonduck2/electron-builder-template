
## 주요 의존성 설명

### devDependencies

- **@babel/core**: Babel의 핵심 라이브러리로, JavaScript 코드를 변환하는 데 사용됩니다.
  
- **@babel/preset-env**: 최신 JavaScript 문법을 변환하기 위한 Babel 프리셋으로, 다양한 브라우저 환경에 맞춰 코드를 변환합니다.

- **@babel/preset-react**: React JSX 문법을 변환하기 위한 Babel 프리셋으로, React 컴포넌트를 작성할 때 사용됩니다.

- **@types/electron**: Electron의 TypeScript 타입 정의 파일로, Electron API를 TypeScript에서 사용할 수 있도록 지원합니다.

- **@types/node**: Node.js의 TypeScript 타입 정의 파일로, Node.js API를 TypeScript에서 사용할 수 있도록 지원합니다.

- **@types/react**: React의 TypeScript 타입 정의 파일로, React API를 TypeScript에서 사용할 수 있도록 지원합니다.

- **@types/react-dom**: React DOM의 TypeScript 타입 정의 파일로, React DOM API를 TypeScript에서 사용할 수 있도록 지원합니다.

- **babel-loader**: Webpack과 함께 사용되는 Babel 로더로, JavaScript 및 TypeScript 파일을 변환하여 번들링합니다.

- **concurrently**: 여러 명령을 동시에 실행할 수 있게 해주는 유틸리티로, 개발 중 여러 프로세스를 동시에 관리할 수 있습니다.

- **electron**: Electron 프레임워크로, 웹 기술을 사용하여 크로스 플랫폼 데스크톱 애플리케이션을 개발할 수 있게 해줍니다.

- **electron-builder**: Electron 애플리케이션을 패키징하고 배포하기 위한 도구로, 다양한 플랫폼에 맞춰 애플리케이션을 빌드할 수 있습니다.

- **html-webpack-plugin**: Webpack과 함께 사용되는 플러그인으로, HTML 파일을 생성하고 자동으로 번들된 JavaScript 파일을 포함합니다.

- **react**: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리로, 컴포넌트 기반의 UI 개발을 지원합니다.

- **react-dom**: React 애플리케이션을 DOM에 렌더링하기 위한 라이브러리로, React 컴포넌트를 실제 DOM에 연결합니다.

- **typescript**: JavaScript의 슈퍼셋 언어로, 정적 타입을 지원하여 코드의 안정성을 높입니다.

- **webpack**: 모듈 번들러로, 애플리케이션의 자산을 관리하고 최적화합니다.

- **webpack-cli**: Webpack을 명령줄에서 사용할 수 있도록 해주는 도구로, Webpack의 다양한 명령을 실행할 수 있습니다.

## 프로젝트 구조

- `src/`: React 애플리케이션 소스 코드
- `src/electron.ts`: Electron 메인 프로세스 파일
- `src/preload.ts`: Electron 프리로드 스크립트
- `public/`: 정적 파일
- `dist/`: 빌드된 애플리케이션

