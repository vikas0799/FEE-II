import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User";

function App() {
  // const [cnt1, setCnt1] = useState(0);
  // const [cnt2, setCnt2] = useState(0);
  //  function display(){
  //   setCnt1(cnt1+1);
  //  }

  // useEffect(() => {
  //   console.log("each time run when satate change");
  // });

  // useEffect(() => {
  //   console.log("empty dependancy array so run one time render");
  // }, []);

  // useEffect(() => {
  //   console.log(
  //     "run one time in start when cnt1 render and also run each time when cnt1 state change"
  //   );
  // }, [cnt1]);

  return (
    <>
     <User />
      {/* <h1>welcome to g7</h1>
      <h1>{cnt1}</h1>
      {/* <button onClick={display}>increase cnt1</button> */}
      {/* <h1>{cnt2}</h1>
      <button
        onClick={() => {
          setCnt1(cnt1 + 1);
        }}
      >
        increase cnt1
      </button>
      <button onClick={()=>{setCnt2(cnt2-1)}}>decrese me</button> */}
    </> 
  );
}

export default App;
