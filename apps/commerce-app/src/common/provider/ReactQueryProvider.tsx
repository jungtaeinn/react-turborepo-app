'use client';

import { JSX, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

/**
 * ReactQuery 클라이언트 인스턴스를 생성하는 함수
 * @returns {QueryClient} 설정된 ReactQuery 클라이언트 인스턴스
 * @property defaultOptions - ReactQuery 클라이언트의 기본 옵션
 * @property defaultOptions.queries.staleTime - 데이터가 'stale' 상태로 간주되기까지의 시간(캐싱 시간: 10초)
 */
function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 1000,
      },
    },
  });
}

/**
 * ReactQuery 의 QueryClient 를 하위 컨포넌트에 제공합니다.
 * @param children - 하위 컴포넌트
 * @returns {JSX.Element} ReactQueryProvider 컴포넌트
 */
export function ReactQueryProvider({ children }: { children: ReactNode }): JSX.Element {
  const [queryClient] = useState(makeQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
