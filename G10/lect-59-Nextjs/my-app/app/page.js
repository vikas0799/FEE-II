"use client"
import React, { useState } from 'react'
import Card from './components/Card';
import Nav from './components/Nav';
import Link from 'next/link';

function page() {
   const[count,setcount] =useState(0);

  return (
    <>
       <h1>G10 batch</h1>
       {/* <p>lorem20
         
       </p>
       <h1>{count}</h1>

       <button onClick={()=>{setcount(count+1)}}>click me</button>

       <Card /> */}
       {/* <a href='/services'>services</a>
       <a href='/About'>About</a> */}

       <Link href='./About'>About</Link>
       <Link href='./services'>services</Link>


       {/* <Nav /> */}
    </>
  )
}

export default page