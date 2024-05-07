import React, { useState, useEffect } from 'react';
import SignIn from './pages/SignIn';
import MainContainer from './pages/MainContainer';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Armory from './pages/Armory';
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';



const App = () => {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<MainContainer/>}>
          <Route index element={<Armory/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='login' element={<LogIn/>}/>
          <Route path='cart' element={<Cart/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
