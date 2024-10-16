/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  future: {
    // Ensure webpack5 is used
    webpack5: true,
  },
  webpack: (config) => {
    // Perform customizations to webpack config

    return config;
  },
  // Enable gzip compression
  compress: true, 
  // Remove the X-Powered-By header
  poweredByHeader: false
}

module.exports = nextConfig;