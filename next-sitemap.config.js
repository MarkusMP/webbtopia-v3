/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://webbtopia.com/',
  generateRobotsTxt: true, // (optional)
  exclude: ['/404', '/sv/404', 'blogg/[slug]', '/[slug]', '/blog/[slug]'],
  // ...other options
}
