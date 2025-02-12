import { Config } from '@/common/config/types';

declare global {
  interface Window {
    __PUBLIC_CONFIG__: Config['publicConfig'];
  }
}

/**
 * 클라이언트 컴포넌트에서 사용할 publicConfig
 * @example
 * ```ts
 * const publicConfig = getPublicConfig();
 * console.log(publicConfig.baseUrl);
 * ```
 */
export function getPublicConfig(): Config['publicConfig'] {
  const publicConfig = window.__PUBLIC_CONFIG__;
  if (!publicConfig) throw new Error('publicConfig is not defined');

  return publicConfig;
}
