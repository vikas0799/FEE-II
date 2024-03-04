// Function simulating an asynchronous task
function asynchronousTask(callback) {
    setTimeout(function() {
      console.log("Asynchronous task completed");
      callback();
    }, 4000);
  }
  
  // Nested callbacks
  // callbackhell or pyramid of doom
  asynchronousTask(function() {
    console.log("First task completed");
    asynchronousTask(function() {
      console.log("Second task completed");
      asynchronousTask(function() {
        console.log("All tasks completed");
      });
    });
  });
  