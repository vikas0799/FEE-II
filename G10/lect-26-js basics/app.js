// // console.log("hello");
// // var , let const
// // x=8;
// console.log(x);
// const x;

// display("Lion");
// function display(inputString) {
// console.log(inputString); 
// }

// console.log(x) // 'undefined' is logged from hoisted var declaration (instead of 7)
// var x // Declaration of variable x
// x = 7; // Initialization of variable x to a value 7
// console.log(x); //

// let a = 'a';
// function foo() {
// let b = 'b';
// console.log(b); // 'b' gets logged
// console.log(a); // 'a' gets logged
// randomNumber = 33;
// console.log(randomNumber); // 33 gets logged
// }
// foo();


// {
//     let hello = 'Hello!';
//     var language = 'Hindi';
//     console.log(hello); // 'Hello!' gets logged
// }
//     console.log(language); // 'Hindi!' gets logged
//     console.log(hello); // Uncaught ReferenceError: hello is not defined


// let n=21;
// if(n==1){
//     console.log("Not Prime")
// }else if(n==2){
//     console.log("Is prime")
// }else{
//     let isPrime=true;
//     if(n%2==0){
//         isPrime=false;
//     }else{
//     for(let i=3;i<n/2;i+=2){
//         if(n%i==0){
//             isPrime=false;
//             break;
//         }
//     }
//     }
//     if(isPrime){
//         console.log("Is Prime");
//     }else{
//         console.log("Not Prime")
//     }
// }