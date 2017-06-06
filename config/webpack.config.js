const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    BROWSERSLIST: ['> 1%', 'last 2 versions']
  }
})

let extractSCSS = new ExtractTextPlugin('css/[name].css'/*, {allChunks: true}*/);
let extractLESS = new ExtractTextPlugin('css/[name]-less.css'/*, {allChunks: true}*/);


module.exports = {
    entry: [
        __dirname + '/../src/sass/style.scss',
        __dirname + '/../src/less/importer.less',
        __dirname + '/../src/js/main.js',
    ],
    output: {
        path: path.resolve(__dirname, '../public/'),
        filename: 'js/bundle.js',
    },
    devtool: 'source-map',
    devServer:{
        contentBase: 'public/'
    },
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
                test: /\.scss$/,
                loader: extractSCSS.extract({
                fallback: 'style-loader',
                //resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader', 'sass-loader']
              })
            },
            {
              test: /\.less$/i,
              use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            }
        ]
    },
    plugins: [
        extractSCSS,
        extractLESS,
        new webpack.ProvidePlugin({
            Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};
