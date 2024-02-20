// // console.log("hello g7");


// // HOF
// function devansh(){
//     console.log("devansh g7")
//     // return 8;
//     return function xyz(){
//         console.log("hello xyz");
//         return 90;
//     }
// }
// let ans=devansh();
// console.log(ans());
// // ans();



function higherOrderFunction(callback) {
    console.log("Executing hof");
    console.log(callback);
    callback();
    console.log(callback());
  }
  
  function callbackFunction() {
    console.log("Executing the callback function");
    return "garima";
  }

  higherOrderFunction(callbackFunction);



// function higherOrderFunction(callback) {
//     console.log("Executing hof");
//     console.log(callback+2);
//   }
  
//   let callbackFunction=98;
//   higherOrderFunction(callbackFunction);