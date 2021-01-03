const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/_theme/_assets")
    eleventyConfig.addPassthroughCopy("netlify.toml")
    eleventyConfig.addPlugin(eleventyNavigationPlugin)
    eleventyConfig.addLayoutAlias('post', '_page-post.njk')

    return {
        dir: {
            input: "src",
            includes: "_theme/_includes",
        }
    }
}