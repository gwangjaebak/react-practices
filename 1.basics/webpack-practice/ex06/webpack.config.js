const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules:[{
            test: /\.(sa|sc|c)ss$/i,       // /\.css$/: ".css"로 끝난다, i: ignore
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|gif|jp?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        liveReload: true,
        hot: false,
        compress: true
    }
}