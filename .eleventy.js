module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/styles")
    eleventyConfig.addPassthroughCopy("_redirects")

    return {
        dir: {
            input: "src",
        }
    }
}