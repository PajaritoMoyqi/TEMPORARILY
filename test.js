function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo,
  baz: function() {
    console.log(this.a);
  }
}

var bar = obj.foo;
var bar2 = obj.baz;
var a = "전역";

bar2();
foo();
bar();