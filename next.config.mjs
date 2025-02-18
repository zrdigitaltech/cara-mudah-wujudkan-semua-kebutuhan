/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/",
  output: "export",
  swcMinify: true,
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: ''
  },
  webpack: (config) => {
    // Optimize and reduce bundle size
    config.optimization.splitChunks = {
      chunks: 'all',
    };

    // Customize Webpack configuration if needed
    return config;
  },
  generateMetadata: true,
};

export default nextConfig;

