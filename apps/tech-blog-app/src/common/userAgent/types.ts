/** 디바이스 유형 */
const DeviceType = {
  /** 모바일 앱 */
  MobileApp: 'mobileApp',
  /** 모바일 웹 */
  MobileWeb: 'mobileWeb',
  /** 데스크탑 */
  Desktop: 'desktop',
} as const;
type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/** 디바이스 운영체제 유형 */
const OSType = {
  iOS: 'ios',
  Android: 'android',
  Other: 'other',
} as const;
type OSType = (typeof OSType)[keyof typeof OSType];

/** 파싱된 UserAgent 정보 */
interface ParsedUserAgent {
  /** 디바이스 유형 */
  deviceType: DeviceType;
  /** 디바이스 운영체제 유형 */
  osType: OSType;
}

export { DeviceType, OSType };
export type { ParsedUserAgent };
