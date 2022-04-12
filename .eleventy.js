const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Glossary',
      organisationName: 'DWP Health data',
      organisationLogo: false,
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      },
    },
    brandColour: '#37807b',
  });

    // Collections
    eleventyConfig.addCollection('layout', collection =>
    collection.getFilteredByTag('layout')
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )
  eleventyConfig.addCollection('homepage', collection =>
    collection.getFilteredByTag('homepage')
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  // Copy `assets/images/` to `_site/assets/images/`
  eleventyConfig.addPassthroughCopy("assets/images");

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // Use layouts from the plugin
      layouts: './node_modules/govuk-eleventy-plugin/layouts',
    }
  }
};