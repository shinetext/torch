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
    metaTitle,
    description,
    canonical,
  } = content;
  let cleanTitle = title.replace(/\"/g, '\\"').trim();
  let cleanDescription = description.replace(/\"/g, '\\"').trim();
  let cleanBody = marked(body);
  let headerPhotoInfo = content.headerPhoto.fields;

  // Grab Author information
  let { bio, name, twitter, facebook, instagram, linkedin } =
    content.author.fields;
  let authorImageInfo = content.author.fields.picture.fields;
  // Use title for the filename. Lowercase, replace ' ' with '-', and only keep alphanumeric characters
  let filename;
  if (slug) {
    filename = slug;
  } else {
    filename = title
      .toLowerCase()
      .replace(/\ /g, '-')
      .replace(/[^0-9a-zA-Z_-]/g, '');
  }

  // create markdown. There has to be a way to do this better
  const templateData = `+++
  date = "${moment(date).format()}"
  title = "${cleanTitle}"
  metaTitle = "${metaTitle ? metaTitle : ''}"
  description = "${cleanDescription}"
  slug = "${slug}"
  categories = ["${category}"]
  image = "${headerPhotoInfo.file.url}"
  imageContentType = "${headerPhotoInfo.file.contentType}"
  imageSize = "${headerPhotoInfo.file.details.size}"
  authorImage = "${authorImageInfo.file.url}"
  featured = false
  tags = ${JSON.stringify(tags)}
  author = "${name}"
  bio = ['${marked(bio).trim().replace(/\n/, '')}']
  canonicalLink = "${canonical ? canonical : ''}"
  twitter = "${twitter ? twitter : ''}"
  instagram = "${instagram ? instagram : ''}"
  facebook = "${facebook ? facebook : ''}"
  linkedin = "${linkedin ? linkedin : ''}"
+++\n
${cleanBody}
`;
  // Render content into the markdown template
  return fs.writeFile(
    __dirname + `/../content/post/${filename}.md`,
    templateData,
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
};
