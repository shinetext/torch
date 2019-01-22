'use strict';

const Promise = require('bluebird');
const contentful = require('contentful');
const createArticle = require('./createArticle');
const createPromotedJson = require('./createPromotedJson');

// Need to specify what environment to pull content for
const contentEnv = process.argv.slice(2)[0];
if (
  contentEnv !== '--staging' &&
  contentEnv !== '--production' &&
  contentEnv !== '--all'
) {
  console.log(`
    You need to specify the environment to pull content for.

      Usage:
        $ npm getArticles.js --staging

      Flags:
        --staging     Fetches articles set to publish to staging
        --production  Fetches articles set to publish to production
        --all         Fetches all articles
    `);

  process.exit();
}

// Need to set Contentful space ID and access token to fetch data
if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  console.error(
    'Missing environment variables CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN'
  );
  process.exit(1);
}

// Fetch articles from Contentful and write them to the filesystem
Promise.coroutine(function*() {
  try {
    const cms = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    let query = {
      content_type: 'article',
      limit: 250, // default is 100. max is 1000
      skip: 0,
    };

    if (contentEnv === '--staging') {
      query['fields.publishTo[in]'] = 'staging';
      console.log('Fetching all published articles for staging');
    } else if (contentEnv === '--production') {
      query['fields.publishTo[in]'] = 'production';
      console.log('Fetching all published articles for production');
    } else {
      console.log('Fetching all published articles');
    }

    let entries = [];
    let moreEntries = true;
    while (moreEntries) {
      const result = yield cms.getEntries(query);
      if (result.items) {
        entries = entries.concat(result.items);
      }

      if (result.total > result.skip + result.limit) {
        let lastSkip = result.skip;
        query.skip = result.skip + result.limit;
      } else {
        moreEntries = false;
      }
    }
    console.log(`Fetched ${entries.length} articles to publish`);
    entries.forEach(entry => {
      // Take article and create markdown template
      createArticle(entry);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  try {
    const cms = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    // query for promoted articles
    let promotedQuery = {
      content_type: 'article',
      limit: 6, // default is 100. max is 1000
      skip: 0,
      order: '-sys.createdAt',
      'fields.promoted': true,
      'fields.publishTo[in]': 'production',
    };
    // query contentful for latest articles for shinetext article feed
    let promotedEntries = yield cms.getEntries(promotedQuery);
    promotedEntries
      ? console.log(
          `Fetched recent promoted articles for shinetext.com artices feed`
        )
      : console.log(
          `Error fetching recent promoted articles for shinetext.com artices feed`
        );
    let promoted = []; // format entries for aurora
    promotedEntries.items.forEach(entry => {
      promoted.push(entry.fields);
    });
    createPromotedJson(promoted);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
