// console.log("hello G7");
// function multiply(a,b){
// let ans=a*b;
// console.log(ans);
// }
// multiply(2,4);

// anonymus function
// let multiply=function(a,b){
//     let ans=a*b;
//     console.log(ans);
// }

// arrow function
// let multiply=(a,b)=>{
//     let ans=a*b;
//     console.log(ans);
// }
// console.log(multiply);
// console.log(multiply(2,2));

// let arr=[123,4553,"john","dhruv",true,"faahaam"];
// console.log(arr);
// arr.push("garima");
// arr.pop();
// arr.shift();
// arr.unshift("vikas");

// delete arr[3];
// console.log(typeof(arr));
// console.log(arr);


// let str="cHItkarA UnivERsiTY";
// let ans=str.toUpperCase();
// let ans=str.toLowerCase();
// let ans=str.slice(2,6);
// console.log(ans);

// let x=15;
// console.log(Math.sqrt(x));
// let y=9,z=7,w=765;
// let ans=Math.max(x,y,z,w);
// let ans=Math.min(x,y,z,w);
// console.log(ans);


// let y=-54;
// let y=90;
// console.log(Math.abs(y));


// let x=8.464;
// let ans=Math.round(x);
// console.log(ans);


// let nishtha={
//     name:"nishtha tandon",
//     roll:621,
//     age:20,
//     address:"panchkula"
// };
// console.log(nishtha);
// console.log(nishtha["roll"]);
// console.log(nishtha.address);


// let arr=Object.keys(nishtha);
// console.log(arr);
// let arr=Object.values(nishtha);
// console.log(arr);


let obj={
    name:"garima",
    roll:314,
    display:()=>{
        console.log("hello in object");
        return 34;
    },
    devansh:{
        name:"devansh gupta",
        roll:291,
        age:20
    },
    college:"chitkara university",
    salary:3234
};
// let ans=obj.devansh.roll;
// console.log(ans);
// let ans=obj.display();
// console.log(ans);
console.log(obj.display());