// console.log("hello g10");

// let x="kartik";
// console.log(`hi g10 is bad batch ${x} chitkara university`);

// let arr=[1,2,3];
// let brr=[1,2,3];
// console.log(arr==brr);  //false

// console.log(11=="11");  //true
// console.log(11==="11"); //false



// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];
// const array3 = array1;

// console.log(array1 === array2); // Output: false (Different objects)
// console.log(array1 === array3); // Output: true (Same object)







// A closure is the combination of a function bundled
//  together(enclosed) with references to 
// its surrounding state(the lexical environment).
// In other words, a closure gives you access to an
//  outer function's scope from an inner function.

// function kartik() {
//     console.log("hi kartik from g10");
//     let ans = 8;
//     return function joy() {
//         console.log(ans);
//     }
// }
// let result = kartik();
// console.log(result);
// result();


// function createMultiplier(multiplier,number) {
//     console.log(multiplier);
//     console.log(number);
//     return function (number2) {
//         console.log(multiplier);
//         console.log(number2);
//       return number2 * multiplier;
//     };
//   }
//   const double = createMultiplier(2,6);
//   let ans=double(12);
//   console.log(ans);


// DRY-do not repeat youself
// let arr=[1,3,5,12,5,6];
// let out=arr.forEach(element => {
//     out.push(element*2);
// });
// let out=arr.forEach(element => {
//     out.push(element*3);
// });
// let out=arr.forEach(element => {
//     out.push(element*element);
// });


let arr=[1,3,5,7,8];
// function double(x){
//     return x*3;
// }
// let output=arr.map(function double(x){
//     return x*x;
// });
let output=arr.map((x)=>{
    return x*x*x;
});
console.log(output);

