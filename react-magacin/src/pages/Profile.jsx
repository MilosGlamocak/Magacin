import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import '../styles/Profile.css'
import { useAuth, useCounterStore } from '../store'
import { deleteSession, getCurrentUser } from '../lib/appwrite'
import SignIn from './SignIn'

function Profile() {

  const { email ,username, avatar, logIn, setEmail, setPassword, credentials, checkUser, sessionId, logOut} = useAuth((state) => state)

  useEffect(() => {
    checkUser()
  }, [sessionId])

  return (
    <Container className='profileCont'>
      <Container className='profileInfoCont'>
        {
          sessionId ? (
            <>
              <img src={avatar} alt="" className='icon'/>
              <h2 className='username'>{username}</h2>
              <h3 className='email'>{email}</h3>
              <button onClick={() => logOut(sessionId)}>Log Out</button>
            </>
          ) : (
            <SignIn />
          ) 
        }
        
      </Container>
    </Container>
  )
}

export default Profile