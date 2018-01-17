const { environment } = require("@rails/webpacker");

const babelLoader = environment.loaders.get("babel");
babelLoader.include = /node_modules\/foundation-sites/;

module.exports = environment;
