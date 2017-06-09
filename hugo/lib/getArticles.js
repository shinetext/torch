'use strict';

const contentful = require('contentful');
const createArticle = require('./createArticle');
let cms;

/**
* Establish connection to contentful
* get all article entries and create markdown file
*/


if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  cms = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
}

cms.getEntries({ content_type: 'article' })
.then(function (entries) {
  entries.items.forEach(entry => {
    // Take article and create  markdown template
    createArticle(entry)
  })
})
.catch(err => (console.error(err)));
