import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Navigation/Home'
import About from './Navigation/About'


export default function NavBar() {
  return (
    <div>
      <>
  {/* A grey horizontal navbar that becomes vertical on small screens */}
  <nav className="navbar navbar-expand-sm bg-light">
    <div className="container-fluid">
      {/* Links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={"/home"} >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/about"} >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/content"} >Content</NavLink>
        </li>
        <li>
            <NavLink to={"category"} >Category</NavLink>
        </li>
        <li>
            <NavLink to={'products'} >Products</NavLink>
        </li>
      </ul>
    </div>
  </nav>
</>

    </div>
  )
}
