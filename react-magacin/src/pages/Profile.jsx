import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import '../styles/Profile.css'
import { useAuth, useCounterStore } from '../store'
import { deleteSession, getCurrentUser } from '../lib/appwrite'
import SignIn from './SignIn'
import SignUp from './SignUp'

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
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : /*(
            <SignIn />
          ) */ <SignUp /> 
        }
        
      </Container>
    </Container>
  )
}

export default Profile