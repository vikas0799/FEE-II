import { useEffect, useState } from 'react'
import './App.css'
import User from './User'

function App() {
//  const[cnt1,setCnt1]=useState(0);
//  const[cnt2,setCnt2]=useState(0);



  //  useEffect(()=>{
  //   console.log("helo 1");
  //  })

  //  useEffect(()=>{
  //   console.log("helo 2");
  //  },[])

  //  useEffect(()=>{
  //   console.log("helo 3");
  //  },[cnt1])
   

  return (
    <>
    <User/>
      {/* <h1>app cpmponent</h1>
      <h1>{cnt1}</h1>
      <h1>{cnt2}</h1>
      <button onClick={()=>{setCnt1(cnt1+1)}}>increase me</button>
     <button onClick={()=>{setCnt2(cnt2-1)}}>decrease me</button> */}
    </>
  )
}

export default App