/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.pexels.com', 'www.educative.io', 'loremflickr.com','localhost','www.codecademy.com'],
  },
}


module.exports = nextConfig
