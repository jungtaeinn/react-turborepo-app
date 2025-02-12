import { Config, Env } from '@/common/config/types';
import { configs } from '@/common/config/envs';

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
export function getServerConfig(): Config {
  const isServer: boolean = typeof window === 'undefined';
  if (!isServer) throw new Error('getServerConfig is only available on the server side');
  const env = (process.env.NEXT_PUBLIC_ENV || 'dev') as Env;

  return configs[env as keyof typeof configs];
}

/**
 * 클라이언트 컴포넌트에서 사용할 publicConfig
 * @returs publicConfig 값을 window 객체에 추가하는 스크립트 태그
 */
export function generatePublicConfigScripts(): string {
  const env = (process.env.NEXT_PUBLIC_ENV || 'dev') as Env;
  const publicConfig = configs[env as keyof typeof configs].publicConfig;

  return `window.__PUBLIC_CONFIG__ = ${JSON.stringify(publicConfig)};`;
}
