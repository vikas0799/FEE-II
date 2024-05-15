"use client"
import React, { useState } from 'react'
import Card from './components/Card';
import Home from './components/Home';
import Link from 'next/link';

function page() {
       const[count,setcount]=useState(0);
  

  return (
    <>
     <Link href='./about'>about</Link>
     <Link href='./services'>services</Link>
    <h1>home page</h1>
      {/* <h1>welocome to g30</h1>
      <p>hi everyone</p>

       <h1>{count}</h1>
       <button onClick={()=>{setcount(count+2)}}>increse me</button> */}
       {/* <Card />
       <Home /> */}

      
    </>
  )
}

export default page