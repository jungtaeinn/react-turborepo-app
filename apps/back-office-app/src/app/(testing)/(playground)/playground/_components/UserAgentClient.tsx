'use client';

import { useUserAgent } from '@/common/userAgent';

export function UserAgentClient() {
  const userAgent = useUserAgent();

  return (
    <div>
      <h3>UserAgent Client Test</h3>
      <p>deviceType: {userAgent.deviceType}</p>
      <p>osType: {userAgent.osType}</p>
    </div>
  );
}
