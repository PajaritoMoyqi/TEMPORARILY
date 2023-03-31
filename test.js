var a = [21];
var b = ["22"];

a > b; // true
b > a; // false

var c = ["10"];
var d = ["9"];

c > d; // false
d > c; // true

const array = [
  a > b,// true
b > a,// false

c > d,// false
d > c,// true
]

const fn = (arr) => {
  arr.forEach(val => {
    console.log(val);
  })
}

fn(array);