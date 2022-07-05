const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
      config.plugins.push(
        new NodePolyfillPlugin({
          excludeAliases: ['console'],
        })
      );
    }

    return config;
  },
  reactStrictMode: true,
  env: {},
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ];
  },
};
