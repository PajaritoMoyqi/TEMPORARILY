const slowExecution = async () => { 
  console.log("Start"); 
  await setTimeout(() => { 
      console.log("This will run after 1 second"); 
  }, 1000);
  console.log("End"); 
} 

slowExecution(); 