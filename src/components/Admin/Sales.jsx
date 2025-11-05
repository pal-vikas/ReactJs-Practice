import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../common/Loader';

function Sales() {

  const [users, setUsers]=useState([]);
  const [errors, setErrors]=useState("");
  const [isLoading, setIsLoading]=useState(false);
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");

  const AddUser =()=>{
        const newUsers = {
          name, 
          email, 
          id:users.length + 1,
        };
        setUsers([newUsers, ...users]);
        axios.post(`https://jsonplaceholder.typicode.com/users`,newUsers)
        .then((res)=>{
          setUsers([res.data, ...users]);
          setName("")
          setEmail("");
        })
        .catch((error)=>{
          setErrors(error.message)
          setUsers(users)
        })
  }

useEffect(()=>{
  fetchUser();
},[])

const fetchUser = async ()=>{
  try {
    setIsLoading(true)
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
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

 const deleteUser =(id)=>{

      setUsers(users.filter((u)=> u.id!==id))
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .catch((errors)=>{
        setErrors(errors.email);
        setName(users, ...users);
      })
 }

  return (
    <div>
                <h1>Admin Sales Page</h1>
                <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
                <input type="text" placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <button onClick={AddUser}>Add User</button>
                {isLoading && <Loader/>}
                {errors && <em>{errors}</em>}
               {users.map((user)=>(
                <table key={user.id}>
                  <thead>
                    <tr key={user.id}>
                      <td>
                          <p key={user.id}>{user.name}, {user.email}</p>
                      </td>
                     
                      <td>
                        <button onClick={()=>{deleteUser(user.id)}}>Delete</button>
                    </td>
                     </tr>
                  </thead>
                </table>
               ))}
    </div>
  )
}

export default Sales
