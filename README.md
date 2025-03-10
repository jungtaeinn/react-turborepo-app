# React Turborepo Frontend

프론트엔드 서비스들을 `MonoRepo(w/ TurboRepo)`를 통해 관리합니다.


![Turbo](https://img.shields.io/badge/turbo-latest-blue.svg)
![Pnpm](https://img.shields.io/badge/pnpm-10.0.0-blue.svg)
![Husky](https://img.shields.io/badge/husky-9.1.7-blue.svg)
![Lint-staged](https://img.shields.io/badge/lint--staged-15.2.7-blue.svg)

## 목차

- [폴더 구조](#폴더-구조)
- [실행 방법](#실행-방법)
- [gitignore 설정](#gitignore-설정)
- [Authors](#authors)

## 폴더 구조

## 실행 방법
```bash
// (옵션) node 버전 확인
$ node -v

// (옵션) node 버전 확인(nvm 사용 시)
$ nvm ls

// (옵션) brew 통해 nvm 설치
$ brew install nvm

// (옵션) nvm 통해 설치된 node 버전 변경
$ nvm use 20 or $ nvm use {installed node version}

// node 버전을 20 이상으로 설치합니다.
$ nvm install 20

// corepack을 활성화합니다.
$ corepack enable

// pnpm 설치
$ brew install pnpm

// 라이브러리 설치(해당 프로젝트는 npm 이 아닌 pnpm 패키지 매니저를 사용한다)
$ pnpm install

// demo 개발 서버 실행
$ pnpm run dev:demo

// demo 스토리북 서버 실행
$ pnpm run storybook:demo
```

## gitignore 설정

.gitignore 파일에 다음과 같이 설정합니다.

- 공통

    - `toptal`에서 제공하는 gitignore.io 자동 생성기를 통해 추가합니다.
    ```
    // example {node,turbo,macos,windows,linux,certificates} 적용하는 경우
    https://www.toptal.com/developers/gitignore?templates=node,turbo,macos,windows,linux,certificates
    ```

- root/.gitignore
    - apps 하위 모든 서비스들과 해당 프로젝트에서 `공통`으로 제외해야할 ignore 설정을 추가합니다.
    - 자동 생성기를 통해 node,`turbo`,`macos`,`windows`,`linux`,`certificates`를 적용합니다.
    - 자동 생성기로 외에 커스터마이징이 필요한 vscode,`.idea`를 위 자동 생성기로 생성한 내용 하위(# End of ... 주석 하단)에 추가합니다.
- apps/{service}/.gitignore
    - 각 서비스별로 필요한 ignore 설정을 추가합니다.
    - amoremall 의 경우, nextjs 를 사용하므로 `nextjs`를 자동 생성기를 통해 추가합니다.

## Authors

- 정태인 [JungTaeinn](mailto:asgard5493@gmail.com)
- 김윤아 [KimYuna](mailto:https://github.com/namakemono-k)