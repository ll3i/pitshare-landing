// Next.js configuration for static export
const nextConfig = {
  output: 'export',
  basePath: '/pitshare-landing',
  assetPrefix: '/pitshare-landing/',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig; 