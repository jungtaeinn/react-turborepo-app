import { use, useMemo } from 'react';
import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { parseUserAgent } from '@/common/userAgent/userAgentParser';

const isServer = typeof window === 'undefined';

/**
 * UserAgent 정보를 파싱해서 가져오는 Hook
 * @returns UserAgent 정보
 */
function useUserAgent() {
  const userAgentOrigin = isServer ? use(getUserAgentOnServer()) : window.navigator.userAgent;

  return useMemo(() => parseUserAgent(userAgentOrigin), [userAgentOrigin]);
}

/**
 * 요청 헤더에서 user-agent 값을 가져오는 함수
 *
 * HACK: Client Components 도 서버에서 렌더링될 때 헤더정보를 읽을 수 있도록 require 함수를 이용해 동적으로 서버 기능을 사용할수 있게 함.
 * 서버함수를 이용하려 했으나 React 사용제한(클라이언트에서 첫 렌더링 시에 서버액션 사용금지)으로 인해 서버에서만 실행을 허용하는 일반함수 사용.
 */
async function getUserAgentOnServer() {
  if (!isServer) throw new Error('This function must be called on server side.');

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { headers } = require('next/headers');
  const headerList: ReadonlyHeaders = await headers();
  const userAgent = headerList.get('user-agent');
  if (typeof userAgent !== 'string') throw new Error('User-Agent header is not found.');

  return userAgent;
}

export { useUserAgent, getUserAgentOnServer };
