import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card/>
    <Card/>

    <p>Lorem, ipsum dolor.</p>
    </>
  )
}

export default App
