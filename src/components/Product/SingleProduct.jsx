import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function SingleProduct() {
  
   const {id} = useParams();
   const navigate = useNavigate();

   const GoHandler =()=>{
          navigate(-1);
   }
  return (
    <div>
            <h1>Single Product {id}</h1>
            <button onClick={GoHandler}
            style={{color:"white", backgroundColor:"black", 
              padding:"5px 10px", borderRadius:"4px", cursor:"pointer"}}
            >Go Back</button>
    </div>
  )
}

export default SingleProduct
