import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavContents } from '../Components/NavContents'
import { Products } from '../Pages/ProductPage/Products'

export const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<NavContents/>} />
    <Route path='/products'  element={<Products/>}/>
    <Route path='*' element={<h2>Page Not Found</h2>}/>
   </Routes>
  )
}
