// console.log("hello g10");
// let arr=[12,5,4444,3,6];
// let brr=arr.map((x)=>{
//     return x*2;
// });
// console.log(brr);

// let arr=[12,5,4444,43,6];
// function vikas(a,b){
//  return a-b;
// }
// let vikas=(a,b)=>{
//     return a-b;
// }
// // arr.sort(vikas);
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);
// let arr=[2,5,44,22,8,3];
// let out=arr.filter((x)=>{
//     return x%3==0;
// });
// console.log(out);



// let arr=[3,6,4];
// function sum(acc,curr){
//     acc=acc+curr;
//     return acc;
// }
// let output=arr.reduce(sum,0);
// console.log(output);

// setTimeout(()=>{
//   console.log("hello");
// },3000);

// function alertAfter3Seconds() { 
// 	alert("Hi, 3 Second completed!"); 
// } 
// const timerId = setTimeout(alertAfter3Seconds, 3000); 
// clearTimeout(timerId); 





let ans=setInterval(() => {
    console.log("into settimeinterval");
}, 4000);

clearInterval(ans);
console.log("Timer has been Canceled");











