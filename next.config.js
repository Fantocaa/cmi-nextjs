/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "http://127.0.0.1:8000/",
        permanent: false,
        basePath: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "images.unsplash.com",
        hostname: "fakestoreapi.com",
        // domains: ["localhost", "127.0.0.1"],
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
