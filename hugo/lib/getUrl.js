const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));

/**
  * Get the current base for the hugo config and baseURL from Netlify ENV
  * prepend baseURL either staging or production URL to hugo config base
  * Create a robot text file for staging/deploy preview branches of blog
*/
let hugoConfig;
const baseURL = process.env.BASE_URL
  ? `baseURL = "${process.env.BASE_URL}"\n` //format baseURL for toml file
  : `baseURL = "\/"\n`;

fs
  .readFileAsync(__dirname + "/../../config/hugo.config.base.toml")
  .then(function(configData) {
    hugoConfig = baseURL + configData.toString(); // concat baseURL and base config file
  })
  .then(function() {
    // Write hugo config file to config folder
    fs.writeFile(__dirname + "/../../config/hugo.config.toml", hugoConfig);
    // Write robots.txt file to static directory
    let robotFileText = "User-agent: * \nDisallow: /";
    if (baseURL !== "https://advice.shinetext.com/") {
      fs.writeFile(__dirname + "/../static/robots.txt", robotFileText);
    }
  })
  .catch(function(error) {
    console.error(error);
    process.exit(1);
  });
