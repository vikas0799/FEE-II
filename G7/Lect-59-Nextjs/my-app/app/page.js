"use client"
import React, { useState } from 'react'
import Card from './components/Card'
import Home from './components/Home'
import Link from 'next/link';

function page() {

    const[count,setcount]= useState(0);
  return (
    <>
      <h1>welcome to g7</h1>
      {/* <Card />
      <Home /> */}
    {/* <h1>{count}</h1>
    <button onClick={()=>{setcount(count+1)}}>click me</button> */}
      <Link href='./About'>About</Link>
      <Link href='./Services'>Services</Link>
      <Link href='./contact'>contact</Link>

    </>
  )
}

export default page