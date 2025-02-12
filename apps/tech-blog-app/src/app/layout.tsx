import { JSX, ReactNode } from 'react';
import { Provider } from '@/common/provider';

/**
 * 모든 페이지에서 공통적으로 사용되는 루트 레이아웃
 * @param children
 */
export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang={'ko'}>
      <head>
        <title></title>
      </head>
      <body>
        <Provider.NuqsAdapter>{children}</Provider.NuqsAdapter>
      </body>
    </html>
  );
}
