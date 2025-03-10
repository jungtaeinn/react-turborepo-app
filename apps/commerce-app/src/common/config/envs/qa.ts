import { Config } from '@/common/config/types';

/**
 * qa 환경변수 설정객체를 관리하는 설정
 */
export const envConfig: Config = {
  serverConfig: {
    api: {
      host: 'https://api.qa.example.com',
    },
  },
  publicConfig: {
    env: 'qa',
    basePath: '/',
    baseUrl: 'https://qa.example.com',
    api: {
      host: 'https://api.qa.example.com',
    },
    image: {
      cloudFrontBaseUrl: 'https://cdn.qa.example.com',
    },
    cookie: {
      envPrefix: 'qa',
      measurementId: 'G-XXXXXXX',
    },
    auth: {
      clientId: '',
    },
  },
};
