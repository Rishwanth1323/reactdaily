import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Category = () => {
  return (
    <div>
      <h1>Category Screen</h1>
      <NavLink to={"jewelery"} >JEWELERRY</NavLink>
      <NavLink to={"electronics"} >ELECTRONICS</NavLink>
      <Outlet></Outlet>
    </div>
  )
}

export default Category
