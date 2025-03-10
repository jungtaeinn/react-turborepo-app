import { NextRequest, NextResponse, userAgent as NextUserAgent } from 'next/server';
import { parseUserAgent } from '@/common/userAgent';

export function middleware(request: NextRequest): NextResponse {
  const response = NextResponse.next();
  const { ua } = NextUserAgent(request);

  /**
   * userAgent 정보를 조회하여 response 헤더에 추가한다.
   */
  const userAgent = parseUserAgent(ua);

  response.headers.set('x-device-type', userAgent.deviceType);
  response.headers.set('x-device-os', userAgent.osType);

  /**
   * 토큰 검증 체크 및 갱신 API 호출
   */

  /**
   * metadata 에 request url 추가를 위한 x-url 헤더추가
   */
  response.headers.set('x-url', request.url);

  /**
   * HTTP 요청에 대한 접근 로그를 기록
   */
  logRequestAccess(request);

  return response;
}

/**
 * middleware config
 * @matcher middleware 적용될 경로를 정의합니다.
 */
export const config = {
  /**
   * middleware 적용될 경로를 정의합니다.
   * - api (API routes)
   * - _next/static (Next.js static files)
   * - _next/image (Next.js image optimization)
   * - favicon.ico (Favicon)
   * - public/static (Public static files)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public/static).*)'],
};

function logRequestAccess(request: NextRequest): void {
  const timestamp = new Date(new Date().getTime() + 9 * 60 * 60 * 1000).toISOString().replace('Z', '');
  const ip = request.headers.get('X-Forwarded-For');
  const method = request.method;
  const url = request.nextUrl.pathname;

  return console.log(`[${timestamp}] ${ip} ${method} ${url}`);
}
