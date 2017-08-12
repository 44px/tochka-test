const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: {
        app: './src/app'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        // Move all files from node modules to 'lib' chunk
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            minChunks: (module) => {
                return module.context && (module.context.indexOf('node_modules') !== -1);
            }
        }),
        new HtmlPlugin({
            title: 'Tochka Bank Test App'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }
};

module.exports = config;
