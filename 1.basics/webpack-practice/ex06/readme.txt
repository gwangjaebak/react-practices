이미지 로더 설정하기

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2. Image Loader 설정(webpack.config.js)
    output: {
        .
        [생략]
        .
        assetModuleFilename: 'assets/images/[hash][ext]'
    }
    
    module: {
        rules:[{
            test: /\.(png|gif|jp?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    }

3. 개발 서버 실행
$ npm start