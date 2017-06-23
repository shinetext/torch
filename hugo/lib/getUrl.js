const fs = require('fs');

/**
  * Get the current base for the hugo config and baseURL from Netlify ENV
  * prepend baseURL either staging or production URL to hugo config base
*/
// baseURL = "https://advice-staging.shinetext.com"

const hugoConfigBase = fs.readFileSync(__dirname + '/../../config/hugo.config.base.toml');
const baseURL = process.env.BASE_URL ? `baseURL = "${process.env.BASE_URL}"\n` //format baseURL for toml file
                : `baseURL = "\/"\n`;

const hugoConfig = baseURL + hugoConfigBase.toString();

// Write hugo config file to config folder
fs.writeFileSync(__dirname + '/../../config/hugo.config.toml', hugoConfig, function(err) {
  if (err) {
    console.log(err)
  }
});
