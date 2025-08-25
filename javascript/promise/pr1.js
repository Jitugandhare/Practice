let promise = new Promise(function(resolve, reject) {
  let success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Something went wrong.");
  }
});

promise
  .then(function(result) {
    console.log(result); 
  })
  .catch(function(error) {
    console.error(error); 
  });
