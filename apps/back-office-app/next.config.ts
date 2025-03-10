import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  basePath: process.env.BASE_PATH || '',
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    },
  },
  async headers() {
    return [
      {
        // 특정 경로에 Header 설정 (모든 경로에 설정하려면 / 사용)
        source: '/(.*)', // 모든 경로에 적용
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src *; img-src *; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // 또는 특정 도메인
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // CSS 관련 경고 무시
    if (dev && !isServer) {
      config.ignoreWarnings = [{ message: /css/i }, { message: /postcss/i }];
    }
    return config;
  },
};

export default nextConfig;
