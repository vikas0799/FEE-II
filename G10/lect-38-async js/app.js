// console.log("hello g10");

// async function getData(){
//    let x= await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
//    console.log(x);
//   let y= x.json();
//   console.log(y);
// }
// getData();
let disclaimer;
async function fetchData() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await response.json();
    // Handle data
    // console.log(data);
    // console.log(data.disclaimer)
    //  disclaimer=data.disclaimer;
    //  document.getElementsByTagName("h1")[0].innerHTML=data.bpi.USD.rate;
    document.getElementById("xyz").innerHTML=data.bpi.USD.rate;
    
}
    fetchData();

