import React from 'react'
import '../styles/InputField.css'
import PropTypes from 'prop-types';

function InputField({id, placeholder, onChange, height, width, type}) {
  return (
    <input className='inputField' id={id} placeholder={placeholder} onChange={onChange} style={{width: width, height: height}} type={type}/>
  )
}

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
}

export default InputField