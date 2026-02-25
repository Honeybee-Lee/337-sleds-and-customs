/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'grainy-gradients.vercel.app' },
    ],
  },
  allowedDevOrigins: [
    "https://*.replit.dev",
    "https://*.worf.replit.dev",
    "http://127.0.0.1",
  ],
};

export default nextConfig;
