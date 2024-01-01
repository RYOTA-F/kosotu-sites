/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui', 'logic', 'type'],
  experimental: {
    appDir: true,
  },
  output: 'export',
}

module.exports = nextConfig
