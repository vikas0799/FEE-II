import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Profile'

function App() {
   let arr=[
    {
      name:"jaskirat",
      batch:"G10",
      college:"chitkara university",
      age:20,
      image:"https://th.bing.com/th/id/OIP.aE-HyFmf7B1tyymQvcpINQHaL2?rs=1&pid=ImgDetMain"
    },
    {
      name:"vikas",
      batch:"G20",
      college:"punjab university",
      age:26,
      image:"https://th.bing.com/th/id/OIP.YObTqUhfN6KsZItR5q6XNgHaEK?rs=1&pid=ImgDetMain"
    },
    {
      name:"joy",
      batch:"G2",
      college:"himanchal university",
      age:21,
      image:"https://th.bing.com/th/id/OIP.pgRP9JLFKOCT6ktcgPtSQwHaLH?rs=1&pid=ImgDetMain"
    },
    {
      name:"garima",
      batch:"g7",
      age:20,
      image:"https://th.bing.com/th/id/OIP.Pez8wXgA1DNSHDevLGRZtAHaHa?w=600&h=600&rs=1&pid=ImgDetMain"
    }
   ]  

  return (
    <>
      <h1>app jsx file</h1>
      <Profile array={arr}/>
    </>
  )
}

export default App
