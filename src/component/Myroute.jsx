import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Createuser from './user/Createuser'
import Readalluser from './user/Readalluser'
import ReadProduct from './product/ReadProduct'
import CreateProduct from './product/CreateProduct'
import SpecificUser from './user/SpecificUser'
import UpdateUser from './user/UpdateUser'
import UpdateProduct from './product/UpdateProduct'
import SpecificProduct from './product/SpecificProduct'

const Myroute = () => {
  return (
    <div>
        <Routes>
            <Route path="/user/create" element={<Createuser></Createuser>} />
            <Route path='/user' element = {<Readalluser></Readalluser>}></Route>
            <Route path = '/product' element={<ReadProduct></ReadProduct>}></Route>
            <Route path = '/product/create' element={<CreateProduct></CreateProduct>}></Route>
            <Route path = '/user/view/:id' element={<SpecificUser></SpecificUser>}></Route>
            <Route path = '/user/edit/:id' element={<UpdateUser></UpdateUser>}></Route>
            <Route path = '/product/view/:id' element={<SpecificProduct></SpecificProduct>}></Route>
            <Route path = '/product/edit/:id' element={<UpdateProduct></UpdateProduct>}></Route>
            
        </Routes>
    </div>
  )
}

export default Myroute
