import React, { useEffect } from 'react'

function API() {
      

      useEffect(()=>{
               fetch("http://localhost:3000/Userchitkara")
               .then((res)=>{return res.json()})
               .then((data)=>{
                console.log(data);
               })
               .catch((err)=>{console.log("network error");})
      },[])

  return (
    <>
       <h1>API componnet</h1>
    </>
  )
}

export default API