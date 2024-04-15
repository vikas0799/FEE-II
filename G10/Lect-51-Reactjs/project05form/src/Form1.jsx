import React, { useState } from 'react'

function Form1(props) {
 
    const [name, setName] = useState("");
    const [imgurl, setImg] = useState("");
    const [age, setAge] = useState(0);

    function FormHandler(event){
        console.log("submitted");
        event.preventDefault();
        // console.log(name);
        // console.log(imgurl);
        // console.log(age);


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

    }

  return (
    <>
     <form action="" onSubmit={FormHandler}>
       <label htmlFor="">Name</label>
       <input type="text"  onChange={(e)=>{setName(e.target.value)}} value={name} />

       <label htmlFor="">Image</label>
       <input type="text" onChange={(e)=>{setImg(e.target.value)}} value={imgurl} />
       
       <label htmlFor="">Age</label>
       <input type="number" onChange={(e)=>{setAge(e.target.value)}}  value={age}/>

       <button>Add Data</button>
     </form>
    </>
  )
}

export default Form1