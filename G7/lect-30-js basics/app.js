// console.log("hello g7");

// let x="vikas";
// console.log(`hi  my roll no is ${x} in chitkara`);


// function fahaam(){
//     let ans=9;
//     function garima(){
//         console.log(ans);
//     }
//     return garima;
// }
// let result=fahaam();
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
//   const double = createMultiplier(4,6);
//   console.log(double);
// let ans=double(4);
//   console.log(ans);


// console.log(11=="11");  //true
// console.log(11==="11"); //false


// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];
// const array3 = array1;

// console.log(array1 === array2); // Output: false (Different objects)
// console.log(array1 === array3); // Output: true (Same object)


// DRT-do not repeat youself
// let arr=[3,2,65,2,4,8];
// let ans=[];
// arr.forEach(element => {
//     ans.push(element*2);
// });
// let brr=[];
// arr.forEach(element => {
//     ans.push(element*3);
// });

// let crr=[];
// arr.forEach(element => {
//     ans.push(element*element);
// });


let arr=[3,2,65,2,4,8];
// function double(x){
//     return x*2;
// }

// let out=arr.map(double);
// let out=arr.map(function double(x){
//     return x*3;
// });
let out=arr.map((x)=>{
    return x*4;
})
console.log(out);










