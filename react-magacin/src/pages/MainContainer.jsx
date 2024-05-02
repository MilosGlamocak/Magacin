import React from 'react'
import '../styles/MainContainer.css'
import { Outlet, Link } from "react-router-dom";
import {Container} from '@mui/material'

function MainContainer() {
  return (
    <Container className='mainContainer'>
      <Container className='menuContainer'>
      <h1 className='menuHeader'>Liberty Lockbox</h1>
      
      <nav>
        <ul className='menu'>
          <li className='menuLine'>
            <Link to="/profile" className='link'>Profile</Link>
          </li>
          <li className='menuLine'>
            <Link to="/" className='link'>Armory</Link>
          </li>
          <li className='menuLine'>
            <Link to="/cart" className='link'>Cart</Link>
          </li>
        </ul>
      </nav>
      
      </Container>
      <Outlet />  
    </Container>
  )
}


export default MainContainer