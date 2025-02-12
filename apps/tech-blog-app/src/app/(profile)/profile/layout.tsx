import { Metadata } from 'next';
import { ReactNode } from 'react';

/**
 * 메타데이터
 */
export const metadata: Metadata = {
  title: 'Profile',
  description: 'Profile page',
};

/**
 * 레이아웃 컴포넌트
 * @param children - The children to render
 */
export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <section className={'wrap'}>{children}</section>;
}
