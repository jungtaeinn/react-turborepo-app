# @support/preset-style

이 패키지는 `tailwindcss v4.0`을 이용하여 구성하였고 postcss 설정과 글로벌 스타일을 제공합니다.
각 프로젝트에서 추가 설정이 필요한 경우, 기본 설정에서 확장하여 사용합니다.

## 사용법

### 라이브러리 관리

1. `@support/preset-style` 라이브러리를 설치합니다.
   ```bash
   pnpm add --workspace=@support/preset-style
   ```

### 라이브러리 사용

1.  대상 서비스 내에 `@support/preset-style` 라이브러리를 설치합니다. (ex. `tech-blog-app`)
    ```bash
    pnpm add @support/preset-style --workspace=tech-blog-app
    ```
2.  코드 사용 방안

    1. 라이브러리의 `globals.css`를 사용하는 방법

       1. 기본 사용법

       ```tsx
       // apps/tech-blog-app/src/app/layout.tsx

       import '@support/preset-style/styles';
       ```

       2. 사용자 정의 사용법

       ```css
       /* apps/tech-blog-app/app/globals.css */

       @import '@support/preset-style/css/globals.css';

       :root {
         --blog-background: #333;
         --blog-foreground: #eee;
       }
       ```

## IDE 설정

### Visual Studio Code

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 설치 후
  cva 함수 내부에서 tailwind intellisense 활성화를 위해 setting.json에 아래 항목 추가

  ```json
  {
    ...
    "tailwindCSS.experimental.classRegex": [
      ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
    ]
  }
  ```
