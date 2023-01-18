const obj = {};

const mySymbol1 = Symbol("test");
const mySymbol2 = Symbol("test");
obj[mySymbol1] = "test1";
obj[mySymbol2] = "test2";

console.log(obj); // { [Symbol(test)]: "test1", [Symbol(test)]: "test2" }
console.log(obj[mySymbol1]); // "test1"
console.log(obj[mySymbol2]); // "test2"
console.log(mySymbol1);
console.log(mySymbol2);