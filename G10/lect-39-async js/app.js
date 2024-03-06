// async function vikas(){
//   try {
//     let responce=await fetch("https://dog.ceo/api/breeds/image/random")
//     let data=await  responce.json();
//     console.log(data);
//     document.getElementsByTagName("img")[0].src=data.message;
//   } catch (error) {
//     console.log("error occured")
//   }
// }
// vikas();


fetch("https://dog.ceo/api/breeds/image/random")
.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log(data);
    document.getElementsByTagName("img")[0].src=data.message;
})
.catch(()=>{
    console.log("network eror")
})