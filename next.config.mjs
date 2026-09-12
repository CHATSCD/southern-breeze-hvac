/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Keep the page payload tiny: no image optimizer needed, everything is inline SVG / CSS.
  productionBrowserSourceMaps: false,
};

export default nextConfig;
