import { Container } from '@mui/material'
import React from 'react'
import '../styles/LogIn.css'
import TextField from '@mui/material/TextField';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Outlet, Link } from "react-router-dom";

function LogIn() {

    const inputs = [
        {id: 'email', placeholder: 'Email', /*onChange: handleOnChange*/},
        {id: 'password', placeholder: 'Password', /*onChange: handleOnChange*/},
    ]

  return (
    <Container className='loginCont'>
        <Container className='loginHeading'>
            <h3 className='headingSmall'>Log In to</h3>
            <h2 className='headingLarge'>Liberty Lockbox</h2>
        </Container>
        <Container className='loginInputForm'>
            {inputs.map((item) => {
                return <InputField id={item.id} placeholder={item.placeholder} key={item.id} /*onChange={item.onChange}*//>
            })}
            <CustomButton text={'Log In'}/>
        </Container>
        <Container className='loginFooter'>
            <h3 className='footerSmall'>New here?</h3>
            <Link to="/signup" className='link'><h2 className='footerLink'>Create an Account</h2></Link>
        </Container> 
    </Container>
  )
}
 
export default LogIn