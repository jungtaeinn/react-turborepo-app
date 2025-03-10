import { Fetcher } from '@/common/fetch/types';
import { getUserAgentOnServer, parseUserAgent } from '@/common/userAgent';

const isServer = typeof window === 'undefined';

/**
 * 서버와 클라이언트 환경에서 모두 사용할 수 있는 fetch wrapper 입니다.
 * - 서버 환경에서는 fetcher 또는 fetch 함수를 사용하세요.
 * - 클라이언트 환경에서는 useReactQuery 함수를 사용하되, queryFn 에 fetcher 를 넣어주세요.
 * @param input - fetch 요청의 URL 또는 Request 객체
 * @param init - fetch 요청의 설정 객체 (optional)
 * @example
 * ```tsx
 * // _api/demo.server.tsx
 * const response = await fetcher('/api/demo', {
 *  method: 'POST',
 * });
 * ```
 * ```tsx
 * // _api/demo.client.tsx
 * const { data } = useQuery({
 *  queryKey: ['demo'],
 *  queryFn: () => fetcher('/api/demo', {
 *    method: 'POST',
 *  }).then(res => res.json()),
 * });
 * ```
 */
const fetcher: Fetcher = async (input, init) => {
  const userAgentOrigin = isServer ? await getUserAgentOnServer() : window.navigator.userAgent;
  const { deviceType } = parseUserAgent(userAgentOrigin);

  const bearerToken = isServer ? '' : '';

  const timeout = init?.timeout ?? 10000;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const overrideInput = input;
  const overrideInit = {
    ...init,
    signal: controller.signal,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
      'X-Device-Type': deviceType,
      ...(bearerToken ? { Authorization: `Bearer ${bearerToken}` } : {}),
    },
  };

  try {
    return await fetch(overrideInput, overrideInit);
  } catch (error) {
    console.log('fetcher function failed. ', error);
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
};

export { fetcher };
