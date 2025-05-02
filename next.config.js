// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',        // static export mode
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.pexels.com',
//       },
//     ],
//   },
//   transpilePackages: ['lucide-react'],
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@babel/runtime': '@babel/runtime-corejs3',
//     };
//     return config;
//   },
// };

// module.exports = nextConfig;

// next.config.js
const path = require('path');                   // ← add this!

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },

  transpilePackages: ['lucide-react'],

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),               
      '@babel/runtime': '@babel/runtime-corejs3',
    };
    return config;
  },
};

module.exports = nextConfig;
