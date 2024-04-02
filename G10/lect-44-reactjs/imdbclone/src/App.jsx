import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)
    // const a="chitkara university";
    const user={
      name:"john wick",
      roll:56,
      dist:"azamgarh"
    };
  return (
    <>
      <p>welcome to g10</p>
      <Card userdata={user} />
      {/* <Card userdata={345}/> */}
      {/* <Xyz age={76}/> */}
    </>
  )
}

export default App
