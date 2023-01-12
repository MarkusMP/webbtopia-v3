/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000/',
  generateRobotsTxt: true, // (optional)
  exclude: ['/404', '/sv/404'],
  // ...other options
}
