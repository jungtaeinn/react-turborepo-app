# Demo Frontend

demo 서비스를 구성하는 프론트엔드 프로젝트입니다.


![React](https://img.shields.io/badge/react-19-blue.svg)
![Next.js](https://img.shields.io/badge/next.js-15-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.5.4-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.4.7-teal.svg)
![Storybook](https://img.shields.io/badge/Storybook--teal.svg)
![Zustand](https://img.shields.io/badge/zustand-4.5.4-D91656.svg)
![tanstack](https://img.shields.io/badge/tanstack-5.62.8-orange.svg)
![Lodash](https://img.shields.io/badge/lodash-4.17.21-orange.svg)
![@next/third-parties](https://img.shields.io/badge/@next/third--parties-15.1.7-orange.svg)
![eslint](https://img.shields.io/badge/eslint-8.57.0-4379F2.svg)
![prettier](https://img.shields.io/badge/prettier-3.3.3-4379F2.svg)
![Jest](https://img.shields.io/badge/Jest-29.7.0-674188.svg) ![Cypress](https://img.shields.io/badge/Cypress-13.17.0-674188.svg)

## 목차

- [폴더 구조](#폴더-구조)
- [API Swagger URL](#api-swagger-url)
- [기획 문서 URL](#기획-문서-url)
- [디자인 URL](#디자인-url)
- [DevOps 정보](#devops-정보)
- [실행 방법](#실행-방법)
- [IDE 설정](#ide-설정)
- [개발 컨벤션](#개발-컨벤션)
- [FAQ](#faq)

## 폴더 구조

폴더 구조에 따른 설명은 개발 컨벤션 내 폴더 및 파일 생성/관리 항목을 참고해주세요.

## API Swagger URL

- Demo

## 기획 문서 URL

## 디자인 URL

## DevOps 정보

## 실행 방법
```shell
/**
* (MAC 기준)
* 1. node 설치
* 2. pnpm 설치
* 3. 패키지 설치
* 4. 개발 서버 실행
     */

// (옵션) node 버전 확인
$ node -v

// (옵션) node 버전 확인(nvm 사용 시)
$ nvm ls

// (옵션) brew 통해 nvm 설치
$ brew install nvm

// (옵션) nvm 통해 설치된 node 버전 변경
$ nvm use 18 or $ nvm use {installed node version}

// node 버전을 18 이상으로 설치합니다.(nvm 사용 시, nvm 20 권장)
$ nvm install 18 or $ nvm install 20

// corepack을 활성화합니다.
$ corepack enable

// 패키지 설치
$ pnpm install

// 개발 서버 실행
$ pnpm run dev:demo
```

## IDE 설정

### Visual Studio Code

- [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 설치 후 useFlatConfig 설정을 활성화
```
{
"eslint.experimental.useFlatConfig": true
}
```

### IntelliJ IDEA

- 별다른 설정이 필요치 않음.

## 개발 컨벤션

1. 라이브러리 관리
   1. `app/{service}/package.json`에 라이브러리 설치는 최대한 자제하며, 필요한 라이브러리는 `모든 팀원의 동의`를 얻어야만 설치가 가능합니다.
   2. 라이브러리 `dependency 최소화`를 `지향`합니다.
2. 디렉토리 설명
    1. `_ui`: UI 컴포넌트 관리
       1. `_ui` 폴더 하위에는 해당 페이지에서 사용되는 `최소 단위로 그룹핑된 폴더`(ex. buttons, flags 등)들과 이를 통해 조합된 `(stories)`폴더로 구성됩니다.
       2. `_ui`폴더에는 비즈니스 로직이 없는 순수 ui 컴포넌트로 구성되며, 이를 _components` 폴더에서 비즈니스 로직과 함께 조합하여 사용합니다.
       3. (stories) 라는 폴더 하위는 해당 페이지에서 사용되는 컴포넌트들을 `스토리북`형태의 `마크업 가이드`페이지로 사용합니다.
    2. `_component`: 컴포넌트 관리
       1. _components`폴더는 _ui`폴더를 import 하여 대상 `page`에서 사용하는 비즈니스 로직이 포함된 컴포넌트 폴더입니다.
       2. (stories)`에 있는 _ui` 컴포넌트를 조합한 템플릿을 참고하여 작업하되, `(stories)`를 직접 import 하지 마세요.
    3. `_hooks`: 커스텀 훅 관리
       1. `_hooks`폴더는 `커스텀 훅`을 관리하는 폴더입니다.
       2. `커스텀 훅`은 `비즈니스 로직`을 `재사용`하기 위해 사용합니다.
    4. `_const`: 상수 관리
       1. `_const`폴더는 `상수`를 관리하는 폴더입니다.

3. common 관리 
4. lib 관리

## FAQ

1. tailwind.config.js와 postcss.config.js 파일이 왜 ts가 아닌 js인 이유?
   > A. tailwindcss 와 postcss 는 js 파일만 인식하기 때문에 js 파일로 작성해야 합니다.