const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './client/ts/src/hello.ts',
    //devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {//输出
        filename: 'bundle.js',//输出文件名
        path: path.resolve(__dirname, './client/ts/built/for-prod')//输出路径
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
};