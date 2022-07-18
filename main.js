// 引数の文字数が5文字以上かつ10文字未満ならtrueを返す関数を作る
// const judgeLength = (str) => {
//   if(5 <= str.length && str.length < 10) {
//     return true
//   } else {
//     return false
//   }
// };
// console.log(judgeLength("apple"));

// 三項演算子で記述
// const judgeLength = (str) => {
//   return 5 <= str.length && str.length < 10 ? true : false;
// };
// console.log(judgeLength("apple"));

// 三項演算子はreturnを省略できる
const judgeLength = (str) => {
  return 5 <= str.length && str.length < 10 ? true : false;
};
console.log(judgeLength("apple"));
