const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const webpackAssetManifestPlugin =  new WebpackAssetsManifest({
  output: '../hugo/data/path/manifest.json',
  replacer: null, 
  space: 2,
  writeToDisk: false,
  fileExtRegex: /\.\w{2,4}\.(?:map|gz)$|\.\w+$/i,
  sortManifest: true,
  merge: false,
  publicPath: null,
  customize: function(key, value) {
    // You can prevent adding items to the manifest by returning false.
    if ( key.toLowerCase().endsWith('.map') ) {
      return false;
    }

    // To alter the key/value, return an object with a key/value property.
    // The key should be a string and the value can be anything that can be JSON stringified.
    // If something else (or nothing) is returned, this callback will do nothing
    // manifest will add the entry normally.
    return {
      key: key.replace('.', ''),
      value: value,
    };
  },
  contextRelativeKeys: false,
});

let extractLESS = new ExtractTextPlugin('css/[name]-less.[hash].css'/*, {allChunks: true}*/);


module.exports = {
    entry: [
        __dirname + '/../src/less/importer.less',
        __dirname + '/../src/js/main.js',
    ],
    output: {
        path: path.resolve(__dirname, '../public/'),
        filename: 'js/bundle.[hash].js',
    },
    devtool: 'source-map',
    devServer:{
        contentBase: 'public/'
    },
    target: 'web',
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
              test: /\.less$/i,
              use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            }
        ]
    },
    plugins: [
        extractLESS,
        definePlugin,
        webpackAssetManifestPlugin,
        new webpack.ProvidePlugin({
            Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};
