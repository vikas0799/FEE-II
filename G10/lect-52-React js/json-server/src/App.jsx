import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 const[name,setName]=useState("");
  useEffect(()=>{
    fetch("http://localhost:3000/user")
    .then((responce)=>{return responce.json()})
    .then((data)=>{
      console.log(data);
      setName(data[0].name)
    })
    .catch((err)=>{console.log("network error");})
  },[])
  return (
    <>
        <h1>{name}</h1>
    </>
  )
}

export default App
