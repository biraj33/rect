import React from 'react'
import { NavLink } from 'react-router-dom'

const Mylinks = () => {
  return (
    <div>
      <NavLink style={{marginRight: "10px"}} to="/user">Read All User</NavLink>
      <NavLink style={{marginRight: "10px"}} to="/user/create">Create User</NavLink>
      <NavLink style={{marginRight: "10px"}} to="/product/create">Create Product</NavLink>
      <NavLink style={{marginRight: "10px"}} to="/product">View all Product</NavLink>
    </div>
  )
}

export default Mylinks
