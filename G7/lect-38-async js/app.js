// // console.log("hello g7");
//  async function getData(){

//     let x=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
//     // console.log(x);
//     let actualdata= await  x.json();
//     // console.log(actualdata);
//     console.log(actualdata.bpi.EUR.rate);
//     document.getElementById("xyz").innerHTML=actualdata.disclaimer;
//  }
//  getData();
async function getData(){

    let x=await fetch(async function getData(){

        let x=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        // console.log(x);
        let actualdata= await  x.json();
        // console.log(actualdata);
        console.log(actualdata.bpi.EUR.rate);
        document.getElementById("xyz").innerHTML=actualdata.disclaimer;
     }
     getData(););
    // console.log(x);
    let actualdata= await  x.json();
    // console.log(actualdata);
    console.log(actualdata.bpi.EUR.rate);
    document.getElementById("xyz").innerHTML=actualdata.disclaimer;
 }
 getData();