import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import CounterClass from './CounterClass'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>class component</h1>
      <Card />
      <CounterClass />
    </>
  )
}

export default App
