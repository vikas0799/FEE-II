import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card';
import Properties from './Properties';
import Vikas from './Vikas';

function App() {
  
  // let name="vikas";
//  const user={
//   name:"vikas",
//   roll:654,
//   dist:"azamgarh"
//  };
let arr=["john","wick","vikas","dhruv","dipankar"];
  return (
    <>
      <h1>welcome to g30</h1>
      <Vikas  arr={arr}/>
      {/* <Properties /> */}
      {/* <Card  data={name} age={30}/> */}
      {/* <Card data={user}  /> */}
    </>
  )
}

export default App
