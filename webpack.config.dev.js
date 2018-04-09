const path = require('path');

module.exports = {
    entry: './client/ts-for-modules/src/index.ts',
    devtool: 'inline-source-map',
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
        filename: 'dev-bundle-ts-modules.js',//输出文件名
        path: path.resolve(__dirname, './client/ts-for-modules/built')//输出路径
    }
};