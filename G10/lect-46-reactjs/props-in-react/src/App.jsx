import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Properties from './Properties'

function App() {
  
//  const user={
//   name:"vikas",
//   roll:654,
//   dist:"azamgarh"
//  };
// const arr=[" marvel","john wick","nobody","saitan","300","pirates"];
  return (
    <>
     {/* <Card userdata={arr}/> */}
     <Properties />
    </>
  )
}

export default App
