/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ビルド時の型チェックをスキップ
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
