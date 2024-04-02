import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)
  const obj={
    name:"nishtha",
    roll:621,
    dist:"panchkula"
  }
   
  return (
    <>
    {/* <Card  userdata={236} name="vikas patel" /> */}
    <Card userdata={obj}   age={21}/>
    {/* <Card/> */}

    {/* <p>Lorem, ipsum dolor.</p> */}
    </>
  )
}

export default App
