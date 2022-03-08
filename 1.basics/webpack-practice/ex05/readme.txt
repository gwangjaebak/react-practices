SASS/SCSS 모듈 번들링하기

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader

2. SASS/SCSS Loader 설정(webpack.config.js)
    module: {
        rules:[{
            test: /\.(sa|sc|c)ss$/i,       // /\.css$/: ".css"로 끝난다, i: ignore
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }

3. 개발 서버 실행
$ npm start