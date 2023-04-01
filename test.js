for (let i=1; i<=5; i++) {
  setTimeout( function timer() {
    console.log(i);
  }, i*1000);
}

const array = [
  
]

const fn10 = (arr) => {
  arr.forEach(val => {
    console.log(val);
  })
}

fn10(array);