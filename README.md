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

![High level overview](https://github.com/shinetext/torch/blob/main/images/example.png)

In order to pull content from staging to develop against, you can run:

```
$ CONTENTFUL_SPACE_ID=<contentful space id here> \
  CONTENTFUL_ACCESS_TOKEN=<contentful access token here> \
  npm run -- build-for-staging
```

Alternatively, if you find yourself needing to do this often, you can create commands to set the environment variables in a file like `npm-env`.

**npm-env** example:

```bash
CONTENTFUL_SPACE_ID=<contentful space id here>
CONTENTFUL_ACCESS_TOKEN=<contentful access token here>
```

And then `source` it once, after which you can `npm run` as often as needed.

```bash
$ source npm-env
$ npm run -- build-for-staging
```

## About

## License

MIT Licensed

To learn more see [the Hugo documentation](http://gohugo.io/themes/installing/) for more information.
