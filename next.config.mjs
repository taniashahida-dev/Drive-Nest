/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
    
      },
      {
        protocol: 'http',
        hostname: '**',
    
      },
    
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
