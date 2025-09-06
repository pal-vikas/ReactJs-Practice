import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterApp from './components/CounterApp'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home"
import Products from "./components/Product/Products"
import Articles from "./components/Articles/Articles"
import Admin from "./components/Admin/Admin"
import PageNotFound from "./components/NotFound/PageNotFound"
import Contacts from "./components/Contacts/Contacts"
import SingleProduct from "./components/Product/SingleProduct"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <main className='app_main'>{
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<Products/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/contacts' element={<Contacts/>}/>

          <Route path='*' element={<PageNotFound/>}/>
        </Routes>

        
        }</main>
    </>
  )
}

export default App
