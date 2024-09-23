/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.dicebear.com',
          pathname: '/6.x/**', // Allows paths like /6.x/identicon/svg
        },
      ],
      dangerouslyAllowSVG: true, // Enable SVG support
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Additional security measure for SVGs
    },
  };
  
  export default nextConfig;
  