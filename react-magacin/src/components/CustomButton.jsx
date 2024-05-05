import { Button } from '@mui/material'
import '../styles/CustomButton.css'
import React from 'react'
import PropTypes from 'prop-types';

function CustomButton({text, onClick, width, height}) {
  return (
    <button className='customButton' variant='contained' style={{width: width, height: height}} onClick={onClick}>{text}</button>
  )
}

CustomButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.string,
    height: PropTypes.string
  };

export default CustomButton