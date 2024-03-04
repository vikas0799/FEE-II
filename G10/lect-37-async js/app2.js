// Function simulating an asynchronous task
function asynchronousTask() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log("Asynchronous task completed");
        resolve();
      }, 1000);
    });
  }
  // Using promises to handle asynchronous tasks sequentially
  asynchronousTask()
    .then(function() {
      console.log("First task completed");
      return asynchronousTask();
    })
    .then(function() {
      console.log("Second task completed");
      return asynchronousTask();
    })
    .then(function() {
      console.log("All tasks completed");
    })
    .catch(function(error) {
      console.error("An error occurred:", error);
    });
  