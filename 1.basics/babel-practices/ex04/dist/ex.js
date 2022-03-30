"use strict";

<<<<<<< HEAD
// 블록 스코프 변수(es6)
=======
// 블록 스코프 변수(ES6)
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
var users = [{
  no: 1,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dooly@gmail.com'
<<<<<<< HEAD
}]; // 객체분해(es6)
=======
}];
var no = users[0].no;
console.log(no); // 객체 분해(ES6)
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

function print(_ref) {
  var no = _ref.no,
      name = _ref.name,
      email = _ref.email;
<<<<<<< HEAD
  // 템플릿 문자열(es6)
  console.log("".concat(no, ", ").concat(name, ", ").concat(email));
} // for..of(es6)
=======
  // 템플릿 문자열(ES6)
  // console.log(o.no + ", " + o.name + ", " + o.email);
  console.log("".concat(no, ", ").concat(name, ", ").concat(email));
} // for..of(ES6)     
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb


for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
<<<<<<< HEAD
=======
  // 변수에는 let 상수에는 const
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
  print(user);
}
