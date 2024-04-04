import React from 'react'
import Lakshay from './Lakshay';

function Card(props) {
    let x=props.data;
    console.log(x);

  return (
   <>
     <h1>chitkara university</h1>
    {/* <div>
    Card{props.data}
    </div> */}
    {/* <p>{props.data.roll}</p> */}
    <h2>{props.data.dist}</h2>
    {/* <h1>{props.data.name}</h1> */}
    <Lakshay userdata={props.data} />
   </>
  )
}

export default Card