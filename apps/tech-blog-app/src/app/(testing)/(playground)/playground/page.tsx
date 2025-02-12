import { UserAgentClient } from '@/app/(testing)/(playground)/playground/_components/UserAgentClient';

/**
 * 플레이그라운드 페이지입니다.
 * @page /playground
 */
export default function Playground() {
  return (
    <div>
      <h1>Playground</h1>
      <hr />

      {/* 자유롭게 테스트 해주세요 START */}
      <UserAgentClient />
      {/* 자유롭게 테스트 해주세요 END */}
    </div>
  );
}
