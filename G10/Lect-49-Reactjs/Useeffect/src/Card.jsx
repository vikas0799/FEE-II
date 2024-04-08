import React, { useEffect, useState } from 'react'

function Card() {
   
    //   const[name,setName]=useState("");
    //   const [imgurl,setImg]=useState("");
    const [profile, setName] = useState({
        name: "",
        followers: 0,
        location: "",
        imgurl: "",
      });

    useEffect(()=>{
        fetch("https://api.github.com/users/vikas0799")
        .then((responce)=>{ return responce.json()})
        .then((data)=>{
            
            console.log(data);
            // setName(data.name);
            // setImg(data.avatar_url);
            setName({
                name: data.name,
                followers: data.followers,
                location: data.location,
                imgurl: data.avatar_url,
              });
        })
        .catch((err)=>{console.log("network errore");})
    },[]);

  return (
    <>
    <h1>Card component</h1>
          <h1>{profile.name}</h1> 
          <img src={profile.imgurl} alt="" />
          <h1>{profile.followers}</h1>
          <h1>{profile.location}</h1>

    </>
  )
}

export default Card