import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import '../styles/Profile.css'
<<<<<<< Updated upstream
import { useAuth, useCounterStore } from '../store'
=======
import { useAuth } from '../store'
import { deleteSession, getCurrentUser } from '../lib/appwrite'
import SignIn from './SignIn'
import LogIn from './LogIn'
>>>>>>> Stashed changes

function Profile() {

  const {loggedIn, email ,username, avatar, logIn, setEmail, setPassword, credentials, checkUser} = useAuth((state) => state)

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <Container className='profileCont'>
      <Container className='profileInfoCont'>
        {
          loggedIn ? (
            <>
              <img src={avatar} alt="" className='icon'/>
              <h2 className='username'>{username}</h2>
              <h3 className='email'>{email}</h3>
            </>
<<<<<<< Updated upstream
          ) : (
            <>
              <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
              <button onClick={() => logIn(credentials.email, credentials.password)}>Log In</button>
            </>
          )
=======
          ) : /*(
            <SignIn />
          ) */ <LogIn/> 
>>>>>>> Stashed changes
        }
        
      </Container>
    </Container>
  )
}

export default Profile