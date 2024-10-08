/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'legendaryladieshub.com',
          },
          {
              protocol: 'https',
              hostname: 'mythlok.b-cdn.net',
          },
          {
              protocol: 'https',
              hostname: 'www.greekmythology.com',
          },
          {
              protocol: 'https',
              hostname: 'mythlok.com',
          },
          {
              protocol: 'https',
              hostname: 'encrypted-tbn0.gstatic.com',
          },
          {
              protocol: 'https',
              hostname: 'www.shutterstock.com',
          },
          {
            protocol: 'https',
            hostname: 'static1.cbrimages.com',
        },
        {
            protocol: 'https',
            hostname: 'static1.cbrimages.com',
        },
        {
            protocol: 'https',
            hostname: 'animemangatoon.com',
        },
        ],
      },
};

export default nextConfig;
