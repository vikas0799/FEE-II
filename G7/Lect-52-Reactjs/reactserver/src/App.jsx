import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   useEffect(()=>{
    fetch("http://localhost:3000/posts")
    .then((res)=>{return res.json()})
    .then
   })

  return (
    <>
      
    </>
  )
}

export default App
