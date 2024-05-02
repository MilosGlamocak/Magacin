import React from 'react'
import '../styles/Armory.css'
import { Container } from '@mui/material'
import { colors } from '../assets/colors'


const {primaryBg, primaryText} = colors

function Armory() {
  return (
    <Container className='armoryCont' style={{backgroundColor: primaryBg}}>
    </Container>
  )
}

export default Armory