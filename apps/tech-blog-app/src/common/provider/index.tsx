import { NuqsAdapterProvider } from '@/common/provider/NuqsAdapterProvider';

export const Provider = {
  /**
   * URL 쿼리 문자열을 쉽게 관리하고 상태로 사용할 수 있는 nuqs 라이브러리를 애플리케이션에 통합하기 위한 어댑터 컴포넌트
   * - useQueryState Hook: 쿼리 문자열을 상태로 관리할 수 있게 해주는 훅
   */
  NuqsAdapter: NuqsAdapterProvider,
};
