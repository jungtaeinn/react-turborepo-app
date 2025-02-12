/**
 * 서버 빌드/런타임 환경변수
 */
interface ServerConfig {
  /** API 정보 */
  api: object;
}

/**
 * 클라이언트 빌드/런타임 환경변수
 */
interface PublicConfig {
  /** 개발 환경변수 */
  env: Env;
  /** 기본경로 */
  basePath: string;
  /** 기본 URL */
  baseUrl: string;
  /** API 설정 */
  api: object;
  /** 이미지 설정 */
  image: {
    /** CloudFront 기본 URL */
    cloudFrontBaseUrl: string;
  };
  /** 쿠키 설정 */
  cookie: {
    /** 쿠키 환경변수 접두사 */
    envPrefix: string;
    /** GoogleAnalytics 측정 ID */
    measurementId: string;
  };
  /** 인증 설정 */
  auth: object;
}

/** 서버,클라이언트 빌드/런타임 환경변수 */
interface Config {
  serverConfig: ServerConfig;
  publicConfig: PublicConfig;
}

/**
 * 개발 환경변수
 * @type Env
 */
type Env = 'dev' | 'qa' | 'beta' | 'prd';

export type { Config, ServerConfig, PublicConfig, Env };
