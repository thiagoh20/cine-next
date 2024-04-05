/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "https://archivos-cms.cinecolombia.com",
          },
        ],
      },
};

export default nextConfig;
