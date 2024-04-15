import { useState } from "react";
import "./App.css";
import Products from "./Products";
import Form from "./Form";
import Form1 from "./Form1";

function App() {
  const dummy_arr = [
    {
      name: "vikas patel",
      // image:"https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
      image:
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
      age: 26,
    },
    {
      name: "rohit patel",
      image:
        "https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
      age: 21,
    },
    {
      name: "akash patel",
      image:
        "https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png",
      age: 18,
    },
  ];
  const [arr, setArr] = useState(dummy_arr);

  function addproducts(profile) {
    let brr = [...arr, profile];
    console.log(brr);
    setArr(brr);
  }

  return (
    <>
      <h1>App component</h1>
      <Form fun={addproducts} />
      <Form1  fun={addproducts}/>
      <Products arr={arr} />
    </>
  );
}

export default App;
