/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {

  // Enable gzip compression
  compress: true, 
  // Remove the X-Powered-By header
  poweredByHeader: false,
}

module.exports = nextConfig;