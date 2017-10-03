'use strict';

const fs = require('fs');

/**
 * Write robots.txt file for non-production builds.
 */
const env = process.argv.slice(2)[0];
if (env === '--production') {
  // Allow robots complete access
  const content = `User-agent: *\nDisallow:`;
  console.log(`Writing robots.txt file:\t${content}`);
  fs.writeFile(`${__dirname}/../static/robots.txt`, content);
} else {
  // Disallow robot access
  const content = `User-agent: *\nDisallow: /`;
  console.log(`Writing robots.txt file:\t${content}`);
  fs.writeFile(`${__dirname}/../static/robots.txt`, content);
}
