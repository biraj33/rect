import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Createuser from './user/Createuser'
import Readalluser from './user/Readalluser'
import ReadProduct from './product/ReadProduct'
import CreateProduct from './product/CreateProduct'

const Myroute = () => {
  return (
    <div>
        <Routes>
            <Route path="/user/create" element={<Createuser></Createuser>} />
            <Route path='/user' element = {<Readalluser></Readalluser>}></Route>
            <Route path = '/product' element={<ReadProduct></ReadProduct>}></Route>
            <Route path = '/product/create' element={<CreateProduct></CreateProduct>}></Route>
        </Routes>
    </div>
  )
}

export default Myroute
