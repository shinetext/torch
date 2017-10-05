#!/bin/bash
# Step One Build base URl & hugo config file using env variable
# Step Two Fetch Article Data from Contentful
# IF either steps fail kill build process

set -euo pipefail

node getArticles.js $1
node getUrl.js

# Clear any existing robots.txt
rm -f ../static/robots.txt

EXIT_STATUS=$?

exit $EXIT_STATUS
