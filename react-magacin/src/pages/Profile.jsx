import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import '../styles/Profile.css'
import { useAuth, useCounterStore } from '../store'

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
          ) : (
            <>
              <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
              <button onClick={() => logIn(credentials.email, credentials.password)}>Log In</button>
            </>
          )
        }
        
      </Container>
    </Container>
  )
}

export default Profile