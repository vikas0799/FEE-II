// // console.log("hello h30");


// let obj={
//     name:"vikas",
//     roll:67,
//     dist:"Azamgarh",
//     display:function (){
//         console.log("Hello G22");
//         return 78;
//     },
//     faham:{
//         name:"Faham Khan",
//         roll:309,
//         dist:"patiyala"
//     },
//     pre:true
// };
// console.log(obj.display());

// // let arr=Object.keys(obj);
// // console.log(arr);
// let arr=Object.values(obj);
// console.log(arr);


// HOF
// function display(){
//     console.log("hello g30");
//     // return 87;
//     return function add(){
//         console.log("hello add function");
//         return "vikas";
//     }

// }
// let ans=display();
// console.log(ans);
// let y=ans();
// console.log(y);
// // console.log(ans);




// function higherOrderFunction(callback) {
//     console.log("Executing the higher-order function");
//     console.log(callback+2);
//   }

//    let callbackFunction=98;
  
//   higherOrderFunction(callbackFunction);

function higherOrderFunction(callback) {
    console.log("Executing the higher-order function");
     callback(); // calling the callback function
    // console.log(callback);
  }
  
  function callbackFunction() {
    console.log("Executing the callback function");
  }
  
  // Passing callbackFunction as an argument to higherOrderFunction
  higherOrderFunction(callbackFunction);