import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Sellers() {
  // const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  // useEffect(()=>{
  //   // document.title=`Your name is ${name}`;
  //   // const heading = document.querySelector("h4");
  //   // heading.style.color="red";
  //   console.log("Mounting Sellers Component......");
  //   return ()=>{
  //           console.log("Unmounting Sellers Component......");
  //   }
  // },[name])

  useEffect(()=>{
      // fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
      // .then((data)=>console.log(data))
      // .catch((error)=>console.log(error));

      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{
        setUsers(res.data)
        console.log(res.data)
      })
      .catch((error)=>console.log(error));
      
  },[]);

  return (
    <>
                <h4>Admin Sellers Page</h4>
                <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name '  />
                {users.map((user)=>(
                    <p key={user.id}>{user.name}</p>
                ))
                }
    </>
  )
}

export default Sellers
