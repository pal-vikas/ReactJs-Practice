import {Routes, Route} from 'react-router-dom'
import Home from "../Home/Home"
import Products from "../Product/Products"
import Articles from "../Articles/Articles"
import Admin from "../Admin/Admin"
import PageNotFound from "../NotFound/PageNotFound"
import Contacts from "../Contacts/Contacts"
import SingleProduct from "../Product/SingleProduct"
import Sells from '../Admin/Sales'
import Sellers from '../Admin/Sellers'

function RoutesAll() {
  return (
    <div>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/admin' element={<Admin/>}>
          <Route path='sells' element={<Sells/>}/>
          <Route path='sellers' element={<Sellers/>}/>
          </Route>
          <Route path='/contacts' element={<Contacts/>}/>

          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default RoutesAll
