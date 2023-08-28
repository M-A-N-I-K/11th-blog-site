const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/webfonts");
    eleventyConfig.addPassthroughCopy("./src/blog");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL)
    });
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};