import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Navigation/Home'
import About from './Navigation/About'
import Content from './Navigation/Content'
// import Screen from './Screen'
import NavBar from './NavBar'
import PageNot from './Navigation/PageNot'
import './Navigation/Nav.css';
import Category from './Navigation/Category'
import Jewelery from './Navigation/Jewelery'
import Electronics from './Navigation/Electronics'
import Products from './Navigation/Products'
// import Products from './Navigation/Products'
import IndividualProduct from './Navigation/IndividualProduct'

export default function Navigation() {
  return (
    <div>
        <NavBar></NavBar>
      {/* <BrowserRouter> */}
      <Routes>
        {/* <Route path="/" element={<Screen />} /> */}
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/content' element={<Content/>} />
        <Route path='/*' element={<PageNot/>}></Route>
        <Route path='category' element={<Category/>}>
         <Route index element={<Jewelery/>} ></Route>
            <Route path='jewelery' element={<Jewelery/>}/>
            <Route path='electronics' element={<Electronics/> } />
        </Route>
        <Route path='products' element={<Products/>}>   </Route>
        
        <Route path='products/:productID' element={<IndividualProduct/>}></Route>
        {/* <Route path='products/2' element={<IndividualProduct/>}></Route>
        <Route path='products/3' element={<IndividualProduct/>}></Route> */}

     
        {/* <Route path=''></Route> */}

      </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}
