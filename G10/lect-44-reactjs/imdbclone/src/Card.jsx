import React from 'react'
import reactLogo1 from './assets/react.svg'
import './Card.css'
import Joy from './Joy'

function Card(props) {
  return (
    <>
     {/* <img src={reactLogo1}  alt="" />
    <div>Card</div> */}
    <main>
    <p>card component</p>
    <p>roll no={props.userdata.name}</p>
    {/* <Joy data={props.userdata} /> */}
    </main>
   
    </>
   
  )
}

export default Card