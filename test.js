var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // 전역 변수
  let b = 22; // if 블록 변수

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2