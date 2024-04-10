import React, { useState } from 'react'
import './Form.css'

function Form(props) {

 const[name,setName]=useState("");
 const[imgurl,setImg]=useState("");
 const[age,setAge]=useState(0);


  function formHandler(event){
      event.preventDefault();
    //   console.log(name,age,imgurl);
       let obj={
        name:name,
        image:imgurl,
        age:age
       }
       props.fun(obj);
       console.log(obj);


      setName("");
      setImg("");
      setAge(0);
  }

  return (
     <>
       <form action="" onSubmit={formHandler}>

        <label htmlFor="">Name</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}  value={name}/>

        <label htmlFor="">imgURL</label>
        <input type="text" onChange={(e)=>{setImg(e.target.value)}}  value={imgurl}/>

        <label htmlFor="">Age</label>
        <input type="number" onChange={(e)=>{setAge(e.target.value)}}  value={age} />

        <button>AddProfileData</button>
       </form>
     </>
  )
}

export default Form