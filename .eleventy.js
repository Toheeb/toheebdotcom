module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/styles")
    eleventyConfig.addPassthroughCopy("_redirects")
    eleventyConfig.addPassthroughCopy("netlify.toml")

    return {
        dir: {
            input: "src",
        }
    }
}