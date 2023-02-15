for(let i=0; i<10; i++){
  console.log(i);
}
console.log(i); // ReferenceError: i is not defined


loading = false;

if(!loading){
  const limit = 5;
  const result = makeSomething(limit);

  console.log(result);
}

console.log(limit); // ReferenceError: limit is not defined