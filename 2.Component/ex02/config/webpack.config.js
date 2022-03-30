const path = require('path');

module.exports = function(env) { 
    return {
        mode: 'development',
        entry: path.resolve(`src/${env.src}/index.js`),
        output: {
            path: path.resolve('public'),
            filename: 'main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules:[{
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            }, {
                test: /\.(sa|sc|c)ss$/i,
                use: [
<<<<<<< HEAD
                    'style-loader',
                    {loader: 'css-loader', options: {modules: env['css-modules'] !== 'false'}},
=======
                    'style-loader', 
                    {loader: 'css-loader', options: {modules: env['css-modules'] !== 'false'}}, 
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
                    'sass-loader']
            }, {
                test: /\.(png|git|jpe?g|svg|ico|tiff?|bmp)$/i,
                type: 'asset/resource'
            }]
        },
        devServer: {
            host: '0.0.0.0',
            port: 9090,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        } 
    };
<<<<<<< HEAD
}
=======
}
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
