/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.arellano.edu.ph",
      },
      {
        protocol: "https",
        hostname: "www.dbm.gov.ph",
      },
    ],
  },
};

export default nextConfig;
