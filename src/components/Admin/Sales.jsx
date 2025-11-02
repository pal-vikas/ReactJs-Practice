import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../common/Loader';

function Sales() {

  const[users, setUsers]=useState([]);
  const[errors, setErrors]=useState("");
  const[isLoading, setIsLoading]=useState(false);



useEffect(()=>{
  fetchUser();
},[])

const fetchUser = async ()=>{
  try {
    setIsLoading(true)
    const res = await axios.get(`https://jsonplaceholder.typicode.com/userssss`)
      .then((res)=>{
        setUsers(res.data);
        setIsLoading(false);
      })
    
  }catch (error) {
      setIsLoading(false)
      setErrors(error.message);
      setUsers(users);
  }
}

  return (
    <div>
                <h1>Admin Sales Page</h1>
                {isLoading && <Loader/>}
                {errors && <em>{errors}</em>}
               {users.map((user)=>(
                <p key={user.id}>{user.name}</p>
               ))}

    </div>
  )
}

export default Sales
