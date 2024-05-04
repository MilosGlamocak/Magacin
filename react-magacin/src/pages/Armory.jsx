import React from 'react'
import '../styles/Armory.css'
import { Container } from '@mui/material'
import { colors } from '../assets/colors'
import { useAuth } from '../store'



const {primaryBg, primaryText} = colors

function Armory() {

  const {username, avatar, checkUser, sessionId, logOut} = useAuth((state) => state)
  return (
    <Container className='armoryCont' style={{backgroundColor: primaryBg}}>
      {sessionId ? (
        <h2>Hello, {username}</h2>
      ) : (
        <h2>Please log in</h2>
      )}
    </Container>
  )
}

export default Armory