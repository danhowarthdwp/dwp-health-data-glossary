const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Glossary',
      organisationName: 'DWP Health data',
      organisationLogo: false,
    },
    brandColour: '#37807b',
  });

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