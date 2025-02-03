// generate-sitemap.js (using CommonJS syntax)
const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const generateSitemap = () => {
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/angular', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/cms', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/contao', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/drupal', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/joomla', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/laravel', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/matomo', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/react', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/symfony', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/vue-js', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/web-accessibility', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/web-app', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/web', changefreq: 'daily', priority: 1.0 },
    { url: '/agency/wordpress', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    // Add all other pages dynamically or statically
  ];

  const sitemap = new SitemapStream({ hostname: 'https://webinnovatorspro.com' });

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
