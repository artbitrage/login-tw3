/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = nextConfig, withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: ''
})
