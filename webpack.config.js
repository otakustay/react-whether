/**
 * @file 基础webpack配置
 * @author zhanglili
 */

const {LoaderOptionsPlugin} = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: __dirname,
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        library: 'reactWhether',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules']
    },
    externals: {
        'react': {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'},
        'prop-types': {root: 'propTypes', commonjs2: 'prop-types', commonjs: 'prop-types', amd: 'prop-types'}
    },
    plugins: [
        new UglifyJSPlugin({sourceMap: true}),
        new LoaderOptionsPlugin({minimize: true, debug: false}),
        new CaseSensitivePathsPlugin()
    ]
};
