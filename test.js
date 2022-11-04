const go = () => {
  const list = [1, 2, 3]
  const a = [];
	
  for (const prop of list) {
    console.log(prop)
    console.log(a.push(prop))
  }
  
  console.log('done all')

  console.log(a);
}

go();
// do nothing below