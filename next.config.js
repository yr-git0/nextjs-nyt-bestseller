/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/list",
        destination: `https://books-api.nomadcoders.workers.dev/lists`,
      },
      {
        source: "/api/list/:id",
        destination: `https://books-api.nomadcoders.workers.dev/list?name=:id`,
      },
    ];
  },
};

module.exports = nextConfig;
