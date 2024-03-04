const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation
    setTimeout(() => {
      // Simulate success
    //   resolve('Operation completed successfully');
      
      // Simulate failure
      reject(new Error('Operation failed'));
    }, 3000);
  });
  
//   console.log(myPromise);
  // Consuming the promise
  myPromise.then((result) => {
    console.log(result); // Output: Operation completed successfully
  }).catch((error) => {
    console.error(error); // Output: Error: Operation failed
  });