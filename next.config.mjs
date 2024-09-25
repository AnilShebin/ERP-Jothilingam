/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/6.x/**', // Allows paths like /6.x/identicon/svg
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**', // Allows any path from via.placeholder.com
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // Add this line to allow GitHub avatars
        pathname: '/**', // Allows any path from avatars.githubusercontent.com
      },
    ],
    dangerouslyAllowSVG: true, // Enable SVG support
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Additional security measure for SVGs
  },
};

export default nextConfig;
