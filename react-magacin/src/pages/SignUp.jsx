import { Container } from '@mui/material'
import React from 'react'
import '../styles/SignUp.css'
import TextField from '@mui/material/TextField';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Outlet, Link } from "react-router-dom";

function SignUp() {

    const inputs = [
        {id: 'username', placeholder: 'Username', /*onChange: handleOnChange*/},
        {id: 'email', placeholder: 'Email', /*onChange: handleOnChange*/},
        {id: 'password', placeholder: 'Password', /*onChange: handleOnChange*/},
        {id: 'passwordRep', placeholder: 'Repeat password', /*onChange: handleOnChange*/},
    ]

  return (
    <Container className='signupCont'>
        <Container className='signupHeading'>
            <h3 className='headingSmall'>New to</h3>
            <h2 className='headingLarge'>Liberty Lockbox?</h2>
        </Container>
        <Container className='signupInputForm'>
            {inputs.map((item) => {
                return <InputField id={item.id} placeholder={item.placeholder} key={item.id} /*onChange={item.onChange}*//>
            })}
            <CustomButton text={'Sign Up'}/>
        </Container>
        <Container className='signupFooter'>
            <h3 className='footerSmall'>Already have an Account?</h3>
            <h2 className='footerLink'>Log In</h2>
        </Container> 
    </Container>
    
  )
}
 
export default SignUp