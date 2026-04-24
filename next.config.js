/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/deja-brew',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig