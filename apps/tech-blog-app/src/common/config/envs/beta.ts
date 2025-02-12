import { Config } from '@/common/config/types';

/**
 * beta 환경변수 설정객체를 관리하는 설정
 */
export const envConfig: Config = {
  serverConfig: {
    api: {
      host: 'https://api.beta.example.com',
    },
  },
  publicConfig: {
    env: 'beta',
    basePath: '/',
    baseUrl: 'https://beta.example.com',
    api: {
      host: 'https://api.beta.example.com',
    },
    image: {
      cloudFrontBaseUrl: 'https://cdn.beta.example.com',
    },
    cookie: {
      envPrefix: 'beta',
      measurementId: 'G-XXXXXXX',
    },
    auth: {
      clientId: '',
    },
  },
};
