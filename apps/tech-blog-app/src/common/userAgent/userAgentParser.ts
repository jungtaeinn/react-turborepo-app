import { DeviceType, OSType, ParsedUserAgent } from '@/common/userAgent/types';

/**
 * string 타입의 UserAgent 값을 객체 형태의 UserAgent 변환
 * @param userAgent - string 타입의 userAgent
 */
export function parseUserAgent(userAgent: string): ParsedUserAgent {
  return {
    deviceType: UserAgentUtil.getDeviceType(userAgent),
    osType: UserAgentUtil.getOSType(userAgent),
  };
}

/**
 * UserAgent 의 Device 정보와 OS 정보를 가져오는 유틸리티
 */
const UserAgentUtil = {
  getDeviceType: (userAgent: string): DeviceType => {
    if (matchPattern('IOS_APP', userAgent) || matchPattern('ANDROID_APP', userAgent)) return DeviceType.MobileApp;
    if (matchPattern('MOBILE', userAgent)) return DeviceType.MobileWeb;
    return DeviceType.Desktop;
  },
  getOSType: (userAgent: string): OSType => {
    if (matchPattern('IOS', userAgent)) return OSType.iOS;
    if (matchPattern('ANDROID', userAgent)) return OSType.Android;
    return OSType.Other;
  },
};

/**
 * UserAgent 분류하기 위한 패턴
 */
const UA_PATTERNS = {
  IOS: /iphone|ipad|ipod/i,
  ANDROID: /android/i,
  MOBILE: /mobile|iphone|ipad|ipod|android|webos|blackberry|iemobile|opera mini/i,
  IOS_APP: /device=ios/i,
  ANDROID_APP: /device=android/i,
} as const;

/**
 * userAgent 가 디바이스 패턴과 일치하는지 확인
 * @param patternName
 * @param userAgent
 */
function matchPattern(patternName: keyof typeof UA_PATTERNS, userAgent: string): boolean {
  return UA_PATTERNS[patternName].test(userAgent.toLowerCase());
}
