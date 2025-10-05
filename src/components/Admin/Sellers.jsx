import React, { useEffect, useState } from 'react'

function Sellers() {
  const [name, setName] = useState("");

  useEffect(()=>{

    console.log("Mounting Sellers Component......");
  },[])

  return (
    <div>
                <h4>Admin Sellers Page</h4>
                <h5>{name}</h5>
                <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}}  />
                
    </div>
  )
}

export default Sellers
