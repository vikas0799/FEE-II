import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Goyal from './Goyal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <main>
   <Goyal/>
    <Goyal />
    <Goyal />
    <Goyal />
    <Goyal />
    <Goyal />
    <Goyal />
    <Goyal />
    <Goyal />
    <Goyal />
   </main>

    <p>Lorem ipsum dolor sit.</p>
    <div>
      <ul>
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
        <li>item-4</li>
      </ul>
    </div>
    </>
  )
}

export default App
