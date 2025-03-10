import { getPublicConfig, getServerConfig, ServerConfig } from '@/common/config';
import { fetcher } from '@/common/fetch/fetcher';

const isServer = typeof window === 'undefined';

/**
 * 환경에 따른 API Base URL 을 가져옵니다.
 * - 서버 환경: serverConfig 내부 통신용 게이트웨이 URL 사용
 * - 클라이언트 환경: publicConfig 외부 통신용 게이트웨이 URL 사용
 */
function getAPIGatewayBaseUrl() {
  if (isServer) {
    const serverConfig: ServerConfig = getServerConfig();
    return serverConfig.api.baseUrl;
  }

  const publicConfig = getPublicConfig();
  return publicConfig.api.baseUrl;
}

/**
 * Demo API
 * - Swagger: https://api.dev.example.com/demo/swagger-ui.html
 * - Commend: ./cmd/generateAPI/generateAPI.sh -input ./api/demo.yaml -output apps/tech-blog-app/src/lib/api/demo
 */
export const getDemoAPI = () => {
  // const config = new Demo.Configuration({
  //   basePath: `${getAPIGatewayBaseUrl()}/demo`,
  //   fetchApi: fetcher,
  // });
  //
  // return {
  //   default: new Demo.DefaultApi(config),
  // };
};
