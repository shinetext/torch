const fs = require('fs')

/**
 * Write Promoted articles to a json file in hugo/static directory
 * can be found at baseURL/promoted.json
*/

module.exports = (articles) => {
  return fs.writeFile(
    __dirname + '/../static/promoted.json',
    JSON.stringify(articles),
    function(err) {
      if (err) {
        console.log(err);
      }
    }
  );
}
