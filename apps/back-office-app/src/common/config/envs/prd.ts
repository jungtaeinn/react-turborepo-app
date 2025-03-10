import { Config } from '@/common/config/types';

/**
 * prd 환경변수 설정객체를 관리하는 설정
 */
export const envConfig: Config = {
  serverConfig: {
    api: {
      host: 'https://api.example.com',
    },
  },
  publicConfig: {
    env: 'prd',
    basePath: '/',
    baseUrl: 'https://prd.example.com',
    api: {
      host: 'https://api.example.com',
    },
    image: {
      cloudFrontBaseUrl: 'https://cdn.example.com',
    },
    cookie: {
      envPrefix: '',
      measurementId: 'G-XXXXXXX',
    },
    auth: {
      clientId: '',
    },
  },
};
