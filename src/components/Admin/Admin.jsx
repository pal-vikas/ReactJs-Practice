import React from 'react'
import {Link, Outlet} from "react-router-dom"

function Admin() {
  return (
    <div>
            <h1>Admin Panel</h1>
            <ul>
              <li>
                  <Link style={{textDecoration:"none"}} to="/admin/sells"> Sell</Link>
              </li>
              <li>
                <Link style={{textDecoration:"none"}} to="/admin/sellers">Seller</Link>
              </li>
            </ul>
      <Outlet/>
    </div>
  )
}

export default Admin
