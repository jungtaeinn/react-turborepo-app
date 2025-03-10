import type { Config, PublicConfig, ServerConfig } from '@/common/config/types';

const isServer = typeof window === 'undefined';
const ENV = process.env.NEXT_PUBLIC_ENV || 'dev';

/**
 * 서버에서 사용할 환경변수 설정객체를 반환
 * - serverConfig 변수명으로 할당하여 사용하는 것을 권장합니다.
 * - 서버 컴포넌트나 서버 액션 내에서만 사용해야 하며, 클라이언트 컴포넌트에 주입하지 마세요.
 * @returns 서버에서 사용할 환경변수 설정객체
 * @example
 * ```tsx
 * // 올바른 사용법: 해당 함수는 서버 컴포넌트/서버 액션 내에서만 사용
 * const serverConfig = getServerConfig();
 * ```
 */
export function getServerConfig(): ServerConfig {
  if (!isServer) throw new Error('getServerConfig is only available on the server side');
  return getConfigFromFile(ENV).serverConfig;
}

/**
 * 서버/클라이언트 컴포넌트에서 사용할 publicConfig
 * @example
 * ```ts
 * const publicConfig = getPublicConfig();
 * console.log(publicConfig.baseUrl);
 * ```
 */
export function getPublicConfig(): PublicConfig {
  if (isServer) return getConfigFromFile(ENV).publicConfig;

  const publicConfig = window.__PUBLIC_CONFIG__;
  if (!publicConfig) throw new Error('publicConfig is not defined');

  return publicConfig;
}

/**
 * 서버에서 호출되어 클라이언트 컴포넌트에서 사용할 publicConfig
 * @returs publicConfig 값을 window 객체에 추가하는 스크립트 태그
 */
export function generatePublicConfigScripts(): string {
  if (!isServer) throw new Error('generatePublicConfigScripts is only available on the server side');

  const publicConfig = getPublicConfig();
  return `window.__PUBLIC_CONFIG__ = ${JSON.stringify(publicConfig)};`;
}

/** 특정 환경의 config 파일 읽어 변환 */
function getConfigFromFile(env: string) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require(`./envs/${env}.ts`).envConfig as Config;
}

declare global {
  interface Window {
    __PUBLIC_CONFIG__: PublicConfig;
  }
}
