import { NuqsAdapterProvider } from '@/common/provider/NuqsAdapterProvider';
import { ReactQueryProvider } from '@/common/provider/ReactQueryProvider';

/**
 * 애플리케이션에 사용되는 Provider 컴포넌트를 관리하는 객체
 * @property NuqsAdapter - URL 쿼리 문자열을 쉽게 관리하고 상태로 사용할 수 있는 nuqs 라이브러리를 애플리케이션에 통합하기 위한 어댑터 컴포넌트
 * @property ReactQuery - ReactQuery 의 QueryClient 를 하위 컨포넌트에 제공합니다.
 */
export const Provider = {
  /**
   * URL 쿼리 문자열을 쉽게 관리하고 상태로 사용할 수 있는 nuqs 라이브러리를 애플리케이션에 통합하기 위한 어댑터 컴포넌트
   * - useQueryState Hook: 쿼리 문자열을 상태로 관리할 수 있게 해주는 훅
   */
  NuqsAdapter: NuqsAdapterProvider,

  /**
   * ReactQuery 의 QueryClient 를 하위 컨포넌트에 제공합니다.
   */
  ReactQuery: ReactQueryProvider,
};
