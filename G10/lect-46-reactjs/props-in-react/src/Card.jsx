import React from "react";

function Card(props) {
  console.log(props.userdata);
  const arr = props.userdata;
  return (
    <div>
      {
       arr.map((value,idx) => {
         return (

          <div key={idx}>
            <p>bollywood movie from india</p>
            {value}
            <h1>hollywood movie</h1>
          </div>
         );
       })
     }
    </div>
  );
}

export default Card;
