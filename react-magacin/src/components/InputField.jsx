import React from 'react'
import '../styles/InputField.css'
import PropTypes from 'prop-types';

function InputField({id, placeholder, onChange, height, width}) {
  return (
    <input className='inputField' id={id} placeholder={placeholder} onChange={onChange} style={{width: width, height: height}}/>
  )
}

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

export default InputField