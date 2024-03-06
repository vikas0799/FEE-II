// console.log("hello");
// fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

// async function depankar(){
//    try {
//     let responce= await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");   
// //    console.log(responce);
//     let x=await responce.json();
//     console.log(x);
//     document.getElementsByTagName("h1")[0].innerHTML=x.bpi.USD.rate;
//    } catch (error) {
//     console.log("network error occured")
//    }
    
// }
// depankar();
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then((responce)=>{
   return responce.json();
})
.then((data) => {
console.log(data)
})
.catch(error => {
console.log("error occured")
});


const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/john%20wick';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '50c7bb8858msh266ff9325450134p130a35jsnfb3263b5bbf5',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};


async function vishal(){
    
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
vishal();