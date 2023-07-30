/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: '',
        pathname: '/coins/images/**',
      },
      {
        protocol: 'https',
        hostname: 'resources.cryptocompare.com',
        port: '',
        pathname: '/news/**',
      },
      {
        protocol: 'https',
        hostname: 'images.cryptocompare.com',
        port: '',
        pathname: '/news/default/**',
      },
    ],
  },
};

module.exports = nextConfig;
