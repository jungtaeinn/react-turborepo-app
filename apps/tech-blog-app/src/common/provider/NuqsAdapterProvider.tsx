import { JSX, ReactNode } from 'react';

/**
 * nuqs 라이브러리는 URL 쿼리 문자열을 쉽게 관리하고 상태로 사용합니다.
 * - useQueryState Hook: 쿼리 문자열을 상태로 관리할 수 있게 해주는 훅
 * @param children
 * @example
 * ```tsx
 * import { useQueryState } from 'nuqs';
 *
 * export function ExampleComponent() {
 *    const [name, setName] = useQueryState('name');
 *    return (
 *       <>
 *         <input value={name || ''} onChange={(e) => setName(e.target.value)} />
 *         <button onClick={() => setName('')}>Clear</button>
 *         <p>Hello, {name || 'anonymous visitor'}!</p>
 *       </input>
 *    );
 * }
 * ```
 * @see https://nuqs.47ng.com/docs/basic-usage
 */
export function NuqsAdapterProvider({ children }: { children: ReactNode }): JSX.Element {
  return <NuqsAdapterProvider>{children}</NuqsAdapterProvider>;
}
