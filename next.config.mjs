/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/for-schools", destination: "/schools", permanent: true },
      { source: "/partner", destination: "/schools#partner", permanent: true },
      { source: "/research", destination: "/#research", permanent: true },
    ];
  },
};

export default nextConfig;
