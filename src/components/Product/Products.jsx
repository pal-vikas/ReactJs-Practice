import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Products.css"
import SingleProduct from './SingleProduct'

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <ul className='project_list'>
        <li>
          <Link style={{textDecoration:"none"}} to={"/products/1"}>Project 1</Link>
        </li>
        <li>
          <Link style={{textDecoration:"none"}} to={"/products/2"}>Project 2</Link>
        </li>
        <li>
          <Link style={{textDecoration:"none"}} to={"/products/3"}>Project 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Products
