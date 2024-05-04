import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import '../styles/Profile.css'
import { useAuth, useCounterStore } from '../store'
import { deleteSession, getCurrentUser } from '../lib/appwrite'
import SignIn from './SignIn'

function Profile() {

  const { email ,username, avatar, checkUser, sessionId, logOut} = useAuth((state) => state)

  useEffect(() => {
    setTimeout(() => {
      checkUser()
    }, 1000)
  }, [sessionId])

  function handleLogOut() {
    logOut(sessionId);
  }

  return (
    <Container className='profileCont'>
      <Container className='profileInfoCont'>
        {
          sessionId ? (
            <>
              <img src={avatar} alt="" className='profileIcon'/>
              <h2 className='username'>{username}</h2>
              <h3 className='email'>{email}</h3>
              <button onClick={handleLogOut}>Log Out</button>
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