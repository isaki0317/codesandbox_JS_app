//********テンプレート文字列
// const name = "いさき";
// const age = 22;

// const message = `私は${name}です。年齢は${age}です。`;
// console.log(message);

//*******アロー関数
//従来
// function fn1(str) {
//   return str;
// }
// const fn1 = function(str) {
//   return str;
// };
//console.log(fn1("fn1です"));

//アロー関数
//引数1つなら()省略可、処理が一つなら{}、return無しも可
// const fn2 = (str) => {
//   return str;
// };
// console.log(fn2("fn2です"));

// const fn3 = (num1, num2) => num1 + num2;
// console.log(fn3(5, 4));

//*********分割代入
// const myProfile = {
//   name: "イサキ",
//   age: 22
// };
//オブジェクト長くなる例
// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message);

//オブジェクト改善例
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["イサキ", 22];
//配列長くなる例
// const message3 = `名前は${myProfile[0]}です、年齢は${myProfile[1]}です。`;
// console.log(message3);
//配列改善例
// const [name, age] = myProfile;
// const message4 = `名前は${name}です、年齢は${age}です。`;
// console.log(message4);
