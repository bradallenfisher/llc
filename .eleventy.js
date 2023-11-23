module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets")
	
  // Copy `img/favicon/` to `_site/`
  eleventyConfig.addPassthroughCopy({ "./assets/img/favicon": "/" });
  
  return {
    passthroughFileCopy: true,
  }

}
