import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const [name, setName] = useState("");
  const [imgurl, setImg] = useState("");
  const [age, setAge] = useState(0);

  function formhandler(e) {
    e.preventDefault();
    // console.log(name, imgurl, age);
    let obj={
        name:name,
        image:imgurl,
        age:age
    }
    console.log(obj);
    props.fun(obj);
    setName("");
    setImg("");
    setAge(0);
    // console.log(name,imgurl,age);
  }

  return (
    <>
      <form action="" onSubmit={formhandler}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>

        <div>
          <label htmlFor="">imageURL</label>
          <input
            type="text"
            onChange={(e) => {
              setImg(e.target.value);
            }}
            value={imgurl}
          />
        </div>

        <div>
          <label htmlFor="">Age</label>
          <input
            type="number"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
          />
        </div>

        <button>Add Profile Data</button>
      </form>
    </>
  );
}

export default Form;
