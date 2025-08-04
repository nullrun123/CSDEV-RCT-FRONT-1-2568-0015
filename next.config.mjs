/** @type {import('next').NextConfig} */
const nextConfig = {
     async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://recruit.cskmitl.com/:path*',
          },
        ]
      },
};

export default nextConfig;
