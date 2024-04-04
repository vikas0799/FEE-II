import React from "react";

function Vikas(props) {
  let arr = props.arr;
  console.log(arr);
  return (
    <>
      {/* <h1>vikas component</h1> */}
      {
      arr.map((value,idx) => {
        return (
          <div key={idx} >
            <h1>bollywood movie from india</h1>
            {value}
            <h1>hollywood movie</h1>
          </div>
        );
       }
       )
      }
    </>
  );
}

export default Vikas;
