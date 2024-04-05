import React from "react";
import './Profile.css'

function Profile(props) {
  let arr = props.array;
  console.log(arr);
  return (
    <>
      <h1>profile component</h1>
      {
         arr.map((value) => {
         return (
          <div className="box">
             <div className="boxin">
             profile data
            {value.name}
            {value.batch}
            {value.college}
            {value.age}
             </div>
            {
                <img src={value.image} alt=""  id="img"/>
            }
          </div>
         );
        })
      }
    </>
  );
}

export default Profile;
