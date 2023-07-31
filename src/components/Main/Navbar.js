import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import { navbarData } from './NavbarData';
import Films from '../pages/Films';
import People from '../pages/People';
import Planets from '../pages/Planets';
import Starships from '../pages/Starships';
import Vehicals from '../pages/Vehicals';
import './navbar.css'
import Species from '../pages/Species';
import { AiOutlineRight } from "react-icons/ai";
import Main from './Main';
import Dashboard from '../pages/Dashboard';


const Navbar = () => {
 

  return (
    <BrowserRouter>
    <div className='sidebar-container'>
     
      <ul className='nav-list'>
        {
          navbarData.map((item, index) => {
            return(
              <li className='item' key={index}>
                <NavLink to={item.path} className='nav-link' style={{textDecoration:"none"}}>
                  <div className='item-content'>
                    <span className='icons'>{item.icon}</span>
                    <span className='title'>{item.title}</span>
                    <span className='arrow'><AiOutlineRight/></span>
                  </div>
                </NavLink>

                
              </li>
            )
          })
        }
      </ul>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/films' element={<Films/>}></Route>
        <Route path='/people' element={<People/>}></Route>
        <Route path='/planets' element={<Planets/>}></Route>
        <Route path='/species' element={<Species/>}></Route>
        <Route path='/starships' element={<Starships/>}></Route>
        <Route path='/vehicals' element={<Vehicals/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Navbar