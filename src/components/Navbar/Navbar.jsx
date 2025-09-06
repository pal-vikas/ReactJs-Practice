import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <ul className='navbar_list'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/articles">Articles</NavLink>
                </li>
                <li>
                    <NavLink to="/admin">Admin</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
