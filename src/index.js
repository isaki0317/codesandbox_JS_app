//********テンプレート文字列
/*
// const name = "いさき";
// const age = 22;

// const message = `私は${name}です。年齢は${age}です。`;
// console.log(message);

//*******アロー関数
/*
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
/*
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

//********デフォルト値
/*
// const sayHello = (name = "ゲスト") => console.log(`こんにちわ${name}さん`);
// sayHello();

///********スプレッド構文 
*/
//配列の展開
// const arry1 = [1, 2];
// // console.log(arry1);
// // console.log(...arry1);

// const sumFn = (num1, num2) => console.log(num1 + num2);
// sumFn(arry1[0], arry1[1]);

// sumFn(...arry1);

//配列にまとめる
// const arry2 = [1, 2, 3, 4];
// const [num1, num2, ...arry3] = arry2;
// console.log(num1);
// console.log(arry3);

//配列のコピーや結合
// const arry4 = [10, 20];
// const arry5 = [30, 40];

// const arry6 = [...arry4];
// console.log(arry6);

// const arry7 = [...arry4, ...arry5];
// console.log(arry7);

///*******mapやfilterを使った配列の処理
/** */
//const nameArry = ["田中", "松尾", "小松"];
//従来for
// for (let index = 0; index < nameArry.length; index++) {
//   console.log(`${index + 1}番目は、${nameArry[index]}です`);
// }
//map
// const nameArry2 = nameArry.map((name) => {
//   return name;
// });
// console.log(nameArry2);

//nameArry.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));

//filter
// const numArry = [1, 2, 3, 4, 5];
// const newNumArry = numArry.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArry);

// const newNameArry = nameArry.map((name) => {
//   if (name === "松尾") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArry);

//********三項演算子
//*
//ある条件? 条件がtrueの時:条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// //console.log(num.toLocaleString());

// const FormattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(FormattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));

//********論理演算子の本当の意味を知ろう
//*
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrueです");
// }
// if (flag1 && flag2) {
//   console.log("1と2はtrueです");
// } else {
//   console.log("falseが存在します");
// }

//// ||は左側がfalseになるときに右側を返す(nullはfalse)
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num = 100;
// const fee = num && "何か設定されました";
// console.log(fee);
