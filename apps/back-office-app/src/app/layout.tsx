import { JSX, ReactNode } from 'react';
import { Provider } from '@/common/provider';
import Script from 'next/script';
import { generatePublicConfigScripts } from '@/common/config';
import '@support/preset-style/styles';

/**
 * 모든 페이지에서 공통적으로 사용되는 루트 레이아웃
 * - Script 컴포넌트
 *    - 클라이언트 환경변수 주입에 사용.
 *    - next/script 컴포넌트는 XSS 공격 방지하기 위한 보안기능 내장.
 *    - strategy 옵션
 *       - beforeInteractive: 페이지 로딩 전에 최우선 로드(환경변수주입/쿠키/봇감지 등)
 *       - afterInteractive: 페이지 로딩 후에 로드(구글 애널리틱스/광고/트래킹 등)
 *       - lazyOnload: 페이지 로딩 후에 지연 로드(퍼포먼스 최적화/채팅/소셜 위젯 등)
 *       - worker: 웹 워커에서 스크립트 로드(실험적 기능 등)
 *
 * @param children
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang={'ko'}>
      <head>
        <title></title>
        <Script id={'public-config'} strategy={'beforeInteractive'}>
          {generatePublicConfigScripts()}
        </Script>
      </head>
      <body>
        <Provider.NuqsAdapter>
          <Provider.ReactQuery>{children}</Provider.ReactQuery>
        </Provider.NuqsAdapter>
      </body>
    </html>
  );
}
