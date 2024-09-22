/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_TINA_PUBLIC_CLIENT_ID:
      process.env.NEXT_PUBLIC_TINA_PUBLIC_CLIENT_ID,
    TINA_TOKEN: process.env.TINA_TOKEN,
  },
  output: "export",
  images: {
    domains: ["assets.tina.io"],
    unoptimized: true,
  },
};

export default nextConfig;
