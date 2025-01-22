// generate-sitemap.js (using CommonJS syntax)
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const generateSitemap = () => {
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    // Add all other pages dynamically or statically
  ];

  const sitemap = new SitemapStream({ hostname: 'https://yourwebsite.com' });

  pages.forEach((page) => {
    sitemap.write(page);
  });

  sitemap.end();

  // Save sitemap to public directory
  streamToPromise(sitemap)
    .then((data) => {
      fs.writeFileSync('./public/sitemap.xml', data);
    })
    .catch((err) => {
      console.error('Error generating sitemap:', err);
    });
};

generateSitemap();
