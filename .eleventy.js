module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/_theme/styles")
    eleventyConfig.addPassthroughCopy("netlify.toml")

    return {
        dir: {
            input: "src",
            includes: "_theme/templates",
        }
    }
}