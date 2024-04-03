import React from "react";
import "./Card.css";

function Card(props) {
  const arr = props.movie;
  console.log(arr);

  return (
    <>
      <main>
        {arr.map((value,idx) => {
          return (
            <>
              <div className="box" key={idx}>
                <h1>Card component</h1>
                <h1>{value}</h1>
              </div>
            </>
          );
        })}
      </main>
    </>
  );
}

export default Card;
