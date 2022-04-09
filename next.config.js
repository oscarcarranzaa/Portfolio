/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'i.ibb.co'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  }
}
module.exports = nextConfig
