module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    // Perform customizations to webpack config

    return config;
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove the X-Powered-By header
};
