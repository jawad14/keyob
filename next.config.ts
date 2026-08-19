import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Default static mime for .vcf is text/x-vcard; RFC 6350 text/vcard is
        // what iOS/Android need to offer "Add to Contacts" instead of downloading.
        source: '/vcard/:file*.vcf',
        headers: [
          { key: 'Content-Type', value: 'text/vcard; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  },
};

export default nextConfig;
