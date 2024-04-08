import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  //   const [cnt1,setCnt1]=useState(0);
  //   const [cnt2,setCnt2]=useState(0);


  // useEffect(()=>{
  //   console.log("hello 1");
  // })

  // useEffect(()=>{
  //   console.log("hello 2");
  // },[])

  // useEffect(()=>{
  //   console.log("hello 3");
  // },[cnt1,cnt2])

  // function increase(){
  //   setCnt1(cnt1+1);
  // }

  return (
    <>
      <Card />
      {/* <h1>welocome to g10</h1>
        <h1>{cnt1}</h1>
        <h1>{cnt2}</h1>
     <button onClick={()=>{setCnt1(cnt1+1)}}>increase me</button>
     <button onClick={()=>{setCnt2(cnt2-1)}}>decrease me</button> */}
      {/* <button onClick={increase}>increase me</button> */}
    </>
  );
}

export default App;
