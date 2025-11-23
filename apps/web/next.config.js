const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@hummingbird/ui', '@hummingbird/types'],
  images: {
    domains: ['cloudflare-ipfs.com'], // Add Cloudflare Images domain
  },
};

module.exports = withPWA(nextConfig);
