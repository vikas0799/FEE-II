import React from 'react'
import './Card.css'
import reactLogo from './assets/react.svg'
import Dhruv from './Dhruv'

function Card(props) {
  return (
     <>
     {/* <img src={reactLogo} alt="" />
     <main>
     <h1>chitkara university</h1>
     <p>vikas patel</p> */}
     {/* </main> */}
     <Dhruv  data={props.userdata.name} />
      <p>hi this is {props.userdata.name} chitkara univesrity {props.userdata.roll} </p>
      <p>myage={props.age}</p>
     </>
    )
}

export default Card