/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    BACKEND_URL: '',
  },
};

module.exports = nextConfig;
