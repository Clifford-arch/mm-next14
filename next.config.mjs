/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/", // Match all paths
        destination: "/stock-research", // Redirect to this specific page
        permanent: false, // Temporary redirect, use true for permanent
      },
    ];
  },
};

export default nextConfig;
