/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const config = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.hdwallpapers.in',
            port: '',
            pathname:'/thumbs/**',
          },
         
        ],
      },
    // your next config
};

export default withPlaiceholder(config);