# torch

## Installation

First to install hugo simply run `brew install hugo v0.20.7` or `brew install hugo` for the latest stable version

```
    $ git clone https://github.com/shinetext/torch.git
    $ npm i || yarn
    $ npm run hugo-server
          Concurrently in a seperate tab
    $ npm run webpack-watcher
```

The page will then be available at http://localhost:1313.

## Netlify & HUGO & Contentful & Github

![High level overview](https://github.com/shinetext/torch/blob/master/images/example.png)

In order to pull content from staging to develop against, you can run:

```
$ CONTENTFUL_SPACE_ID=<contentful space id here> \
  CONTENTFUL_ACCESS_TOKEN=<contentful access token here> \
  npm run -- build-for-staging
```

## About

## License

MIT Licensed

To learn more see [the Hugo documentation](http://gohugo.io/themes/installing/) for more information.
