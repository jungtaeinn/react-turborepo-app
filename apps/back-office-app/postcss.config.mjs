/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      browsers: '< 99.5% in KR',
    },
  },
};

export default config;
