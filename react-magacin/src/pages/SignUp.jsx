import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import '../styles/SignUp.css'
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import { getAllItems, getCurrentUser, createUser, signIn } from '../lib/appwrite';
import { useAuth } from '../store'
import Profile from './Profile';

function SignUp() {

    const { sessionId, checkUser } = useAuth((state) => state);

    useEffect(() => {
        checkUser().then((res) => console.log(res))
    }, [sessionId])

    const [credentials, setCredentials] = useState({email: '', password: '', username: ''})

    const handleSetCredentials = (e) => {
        const { id, value } = e.target;
        setCredentials({...credentials, [id]: value});
      }

    const handleSignUp = () => {
    createUser(credentials.email, credentials.password, credentials.username).then((res) => {
        alert(`Succesfully Signed Up!\nEmail: '${res.email}'\nUsername: '${res.username}'`);
        setUser(res.username)
    })
    }

    const inputs = [
        {id: 'username', placeholder: 'Username', onChange: handleSetCredentials, type: 'text'},
        {id: 'email', placeholder: 'Email', onChange: handleSetCredentials, type: 'email'},
        {id: 'password', placeholder: 'Password', onChange: handleSetCredentials, type: 'password'},
        {id: 'passwordRep', placeholder: 'Repeat password', onChange: handleSetCredentials, type: 'password'},
    ]

  return ( sessionId ? (<Profile />) : (
<Container className='signupCont'>
        <Container className='signupHeading'>
            <h3 className='headingSmall'>New to</h3>
            <h2 className='headingLarge'>Liberty Lockbox?</h2>
        </Container>
        <Container className='signupInputForm'>
            {inputs.map((item) => {
                return <InputField id={item.id} placeholder={item.placeholder} key={item.id} onChange={item.onChange} type={item.type}/>
            })}
            <CustomButton text={'Sign Up'} onClick={handleSignUp}/>
        </Container>
        <Container className='signupFooter'>
            <h3 className='footerSmall'>Already have an Account?</h3>
            <Link to="/login" className='link'><h2 className='footerLink'>Log In</h2></Link>
            
        </Container> 
    </Container>
  )
    
    
  )
}
 
export default SignUp