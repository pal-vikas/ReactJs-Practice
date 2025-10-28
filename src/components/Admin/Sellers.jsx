import React, { useEffect, useState } from 'react'

function Sellers() {
  const [name, setName] = useState("");

  useEffect(()=>{


    // document.title=`Your name is ${name}`;
    // const heading = document.querySelector("h4");
    // heading.style.color="red";
    console.log("Mounting Sellers Component......");
    return ()=>{
            console.log("Unmounting Sellers Component......");
    }
  },[name])

  return (
    <>
                <h4>Admin Sellers Page</h4>
                <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name '  />
                
    </>
  )
}

export default Sellers
