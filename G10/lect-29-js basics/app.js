// console.log("hello g10");

// function outerfun(){
//     console.log("hello g1");
//     return function add(){
//         console.log("hello g2")
//     };
// }

// let ans=outerfun();
// console.log(ans);
// ans();


// function Fun(){
//     function innerfun(){
//         console.log("innerfunction in console");
//     }
//     return innerfun;
//     // return 9;
// }
// let x=Fun();
// console.log(x);
// console.log(x());


// function add(){
//     console.log("hello");
//     return 2;
// }
// console.log(add());

function higherOrderFunction(callback) {
    console.log("Executing the higher-order function");
    console.log(callback);
    callback(); // calling the callback function
  }
  
  function callbackFunction() {
    console.log("Executing the callback function");
  }
  
  // Passing callbackFunction as an argument to higherOrderFunction
  higherOrderFunction(callbackFunction);


//   function higherOrderFunction(callback) {
//     console.log("Executing the higher-order function");
//     console.log(callback); 
//   }

//   let callbackFunction="vikas";
//   higherOrderFunction(callbackFunction);

  






