/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    unoptimized: true, // disable Vercel image optimization — saves ~$19/month in transforms
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/rank", destination: "/rank-your-school", permanent: true },
      { source: "/is-college-worth-it-2026", destination: "/is-college-worth-it-2025", permanent: true },
      { source: "/trade-school-vs-college-salary-2026", destination: "/trade-school-vs-college-salary-2025", permanent: true },
    ];
  },
};

module.exports = nextConfig;
