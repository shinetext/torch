var statusCode = 200;
var headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = function(event, context, callback) {
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: 'Post Request Only',
    });
    return;
  }

  // const data = JSON.parse(event.body);

  callback(null, {
    statusCode,
    headers,
    body: 'Let there be light!',
  });
};
