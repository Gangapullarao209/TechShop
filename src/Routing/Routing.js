import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Search from '../pages/searchBar'
import Cart from '../pages/cart'
// import User from '../pages/User'
export default function Routing() {
  return (
    <div>
        <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Search' element={<Search/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            {/* <Route path='/User' element={<User/>}/> */}
        </Routes>
        </Router>
    </div>
  )
}
