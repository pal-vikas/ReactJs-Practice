import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '../common/Loader';


function Sellers() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors]= useState("");
  const [email, setEmail] = useState("");
  // useEffect(()=>{
  //   // document.title=`Your name is ${name}`;
  //   // const heading = document.querySelector("h4");
  //   // heading.style.color="red";
  //   console.log("Mounting Sellers Component......");
  //   return ()=>{

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
        setIsLoading(false);

      }catch(error){
       setIsLoading(false)
        setErrors(error.message)
      }
  }

  const addUser = ()=>{

    const newUser ={
      name,
      email,
      id:users.length +1,
    };
    setUsers([newUser, ...users]); // 1
    axios.post("https://jsonplaceholder.typicode.com/users",newUser)
    .then((res)=>{
      setUsers([res.data, ...users]) // 2
      setName("");
      setEmail("");
    }).catch((errors)=>{
      setErrors(errors.message)
      setUsers(users)
    })
  }

  return (
    <>
                <h1>Admin Sellers Page</h1>
                <input type="text" name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Name '/>
                <input type="email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Email' />
                <button onClick={addUser}>Add User</button>
                <br/><br/>
                {errors && <em style={{color:"red", fontWeight:"bold"}}>{errors}</em>}
                {isLoading && <Loader/>}
                {users.map((user)=>(
                    <p key={user.id}>{user.name}, {user.email}</p>
                ))
                }
    </>
  )
}

export default Sellers
