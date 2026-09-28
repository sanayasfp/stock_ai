/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // https://via.placeholder.com/150
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
