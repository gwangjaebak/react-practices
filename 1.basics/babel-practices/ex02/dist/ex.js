<<<<<<< HEAD
// 블록 스코프 변수(es6)
=======
// 블록 스코프 변수(ES6)
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
const users = [{
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
const {
  no
} = users[0];
console.log(no); // 객체 분해(ES6)
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

function print({
  no,
  name,
  email
}) {
<<<<<<< HEAD
  // 템플릿 문자열(es6)
  console.log(`${no}, ${name}, ${email}`);
} // for..of(es6)


for (let user of users) {
=======
  // 템플릿 문자열(ES6)
  // console.log(o.no + ", " + o.name + ", " + o.email);
  console.log(`${no}, ${name}, ${email}`);
} // for..of(ES6)     


for (let user of users) {
  // 변수에는 let 상수에는 const
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb
  print(user);
}