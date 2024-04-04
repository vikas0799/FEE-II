import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dhruv from "./Dhruv";

function App() {
//  let cnt=1;
// const [cnt, setCnt] = useState(1);
// function Add() {
//   console.log("hello g7");
//   cnt++;
//   console.log(cnt);
//   if (cnt <= 10) {
//     setCnt(cnt);
//   }
// }
// function Remove() {
//   setCnt(cnt - 1);
// }


  const [isvisible,setVisible]=useState(false);

   function Toggle(){
     setVisible(! isvisible);
   }
  return (
    <>
    <button onClick={Toggle}>click Me</button>
      {
        isvisible && <Dhruv />
      }
      {/* <h1>welcome {cnt} to g7</h1>
      <p>chitkara {cnt} nunivesty</p>
      <h1>{cnt}</h1>
      <button onClick={Add}>increase</button>
      <button onClick={Remove}>decrease</button> */}
    </>
  );
}

export default App;
