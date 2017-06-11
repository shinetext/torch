const moment = require('moment');
const marked = require('marked');
const fs = require('fs');

module.exports = (entry) => {
  let content = entry.fields;

  // Grab Article information used build template meta data
  let {
    title,
    body,
    date,
    category,
    tags,
    slug,
    description
  } = content;
  let type = 'article';
  let cleanTitle = title.replace(/\"/g, '\\"');
  let cleanDescription = description.replace(/\"/g, '\\"');
  let cleanBody = marked(body);
  let headerPhotoInfo = content.headerPhoto.fields;

  // Grab Author information
  let {bio, name} = content.author.fields;
  let authorImageInfo = content.author.fields.picture.fields;

  // Use title for the filename. Lowercase, replace ' ' with '-', and only keep alphanumeric characters
  let filename;
  if (slug) {
    filename = slug;
  } else {
    filename = title.toLowerCase().replace(/\ /g, '-').replace(/[^0-9a-zA-Z_-]/g, '');
  }
  // create markdown. There has to be a way to do this better
  const templateData = `+++
  date = "${moment(date).format()}"
  title = "${cleanTitle}"
  categories = ["${category}"]
  image = "${headerPhotoInfo.file.url}"
  authorImage = "${authorImageInfo.file.url}"
  featured = false
  tags = ${JSON.stringify(tags)}
  author = "${name}"
  bio = ['${marked(bio)}']
+++\n
${cleanBody}
`;
  // Render content into the markdown template
  return fs.writeFile( __dirname+`/../content/post/${filename}.md`, templateData, function(err) {
    if (err) {
      console.log(err)
    }
  });
}
