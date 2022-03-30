ex03: Component - React Event

01: Inline Handler
02: Function Handler
03: Synthetic Event(이벤트 합성)
04: Event Handler 예제들
05: Event Hanlder에서 'ref'를 사용하기: Functional Component
06: Event Hanlder에서 'ref'를 사용하기: Class Component

1. 설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
<<<<<<< HEAD
$ npm i react react-dom prop-types
=======
$ npm i react react-dom
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

2. 설정
config/babel.config.json
config/webpack.config.js

3. npm 스크립팅
  "scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
    "build": "npx webpack"
  }

4. 실행
<<<<<<< HEAD
$ npm run debug src={01|02|03|04|... }
=======
$ npm run debug src={01|02|03|04|... }
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
