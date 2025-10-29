import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../common/Loader';


function Sellers() {
  // const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors]= useState("");
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
    fetchUser();
      // setIsLoading(true);
      // axios.get('https://jsonplaceholder.typicode.com/users')
      // .then((res)=>{
      //   setUsers(res.data)
      //   console.log()
      //   setIsLoading(false);
      // })
      // .catch((error)=>{
      //   setIsLoading(false)
      //   setErrors(error.message)
      // });
      
  },[]);

  const fetchUser = async ()=>{

      try{
       setIsLoading(true);
       const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
        console.log(res.data)
        setIsLoading(false);

      }catch(error){
       setIsLoading(false)
        setErrors(error.message)
      }
  }
  return (
    <>
                <h4>Admin Sellers Page</h4>
                <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name '  /><br/><br/>
                {errors && <em style={{color:"red", fontWeight:"bold"}}>{errors}</em>}
                {isLoading && <Loader/>}
                {users.map((user)=>(
                    <p key={user.id}>{user.name}</p>
                ))
                }
    </>
  )
}

export default Sellers
