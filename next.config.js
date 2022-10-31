/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
    images: {
      loader: 'akamai',
      path: '',
    },
    env: {
      BACKEND_URL: '/portfolio',
    },
  };
  
  module.exports = nextConfig;
