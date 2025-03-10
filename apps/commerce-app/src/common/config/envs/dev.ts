import { Config } from '@/common/config/types';

/**
 * dev 환경변수 설정객체를 관리하는 설정
 */
export const envConfig: Config = {
  serverConfig: {
    api: {
      baseUrl: 'https://api.dev.example.com',
    },
  },
  publicConfig: {
    env: 'dev',
    basePath: '/',
    baseUrl: 'https://dev.example.com',
    api: {
      baseUrl: 'https://api.dev.example.com',
    },
    image: {
      cloudFrontBaseUrl: 'https://cdn.dev.example.com',
    },
    cookie: {
      envPrefix: 'dev',
      measurementId: 'G-XXXXXXX',
    },
    auth: {
      clientId: '',
    },
  },
};
