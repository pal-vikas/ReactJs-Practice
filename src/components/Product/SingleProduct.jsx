import React from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  
   const {id} = useParams();
  return (
    <div>
            <h1>Single Product -{id}</h1>
    </div>
  )
}

export default SingleProduct
