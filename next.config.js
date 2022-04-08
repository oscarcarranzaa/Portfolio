/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'i.ibb.co'],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  }
}
module.exports = nextConfig
