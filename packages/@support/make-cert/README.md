# @support/make-cert

이 패키지는 SSL 인증서를 생성하는 데 사용됩니다.

이 패키지는 `mkcert`를 이용합니다. 따라서 `mkcert`가 사전에 설치가 되어있어야 합니다. `brew` 등을 이용하여 각 환경에 맞게 `mkcert`를 설치해 주세요. [mkcert 설치하기 🔗](https://github.com/FiloSottile/mkcert?tab=readme-ov-file#installation)

## 사용법

### 직접 실행

```bash
# monorepo 내부에서 사용 시
pnpm --filter @support/make-cert start {생성경로}

# 외부에서 사용 시
pnpm dlx @support/make-cert {생성경로}
```

### 각 패키지에 task로 추가

```json
// package.json
{
  "scripts": {
    // monorepo 내부에서 사용 시
    "mkcert": "pnpm --filter @support/make-cert start {생성경로}",
    // 외부에서 사용 시
    "mkcert": "pnpm dlx @support/make-cert {생성경로}"
  }
}
```

### 전역 인증서 설치

```bash
mkcert -install
```

위 명령을 통해 `전역 인증서`를 설치합니다. 설치 시에는 `관리자 권한`이 필요합니다.

`전역 인증서`를 설치하지 않으면 안전하지 않은 연결로 인식되어 브라우저에서 경고가 발생합니다.

### 인증서 생성 스크립트 실행

```bash
pnpm mkcert
```