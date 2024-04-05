import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let cnt=0;
        let [cnt,setCnt] =useState(0); 

   function increase(){
    console.log("hello g30");
    cnt++;
    console.log(cnt);
    setCnt(cnt);
   }
  
  return (
    <>
      <h1>welcome {cnt} to g30</h1>
      <h2>chitkara university</h2>
       <h1>{cnt}</h1>
      <button onClick={increase}>click me</button>
    </>
  )
}

export default App
