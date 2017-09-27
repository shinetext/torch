'use strict';

const fs = require('fs');

/**
 * Write robots.txt file for non-production builds.
 */
const env = process.argv.slice(2)[0];
if (env !== '--production') {
  console.log('Writing robots.txt file');
  const content = `User-agent: *\nDisallow: /`;
  fs.writeFile(`${__dirname}/../static/robots.txt`, content);
}
