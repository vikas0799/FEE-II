import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Jaskeerat from "./Jaskeerat";

function App() {
  // let a=89;
  // let [a, setA] = useState(1);
  // function increase() {
  //   console.log("hello");
  //   // a=a+1;
  //   console.log(a);
  //   a++;
  //   if(a<=10){
  //     setA(a);
  //   }
  // }
  
  const [isvisible,setVisible]=useState(false);

   function Toggle(){
     setVisible(!isvisible);
   }
  return (
    <>
      <button onClick={Toggle}>click Me</button>
      {
        isvisible && <Jaskeerat />
      }
      {/* <p>welcome {a}to g10</p>
      <h1>chitkara {a} university</h1>
      <p>punjab india</p>
      <button onClick={increase}>click me</button> */}
    </>
  );
}

export default App;
