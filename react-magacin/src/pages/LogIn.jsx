import { Container } from '@mui/material'
import React, { useState } from 'react'
import '../styles/LogIn.css'
import TextField from '@mui/material/TextField';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { Outlet, Link } from "react-router-dom";
import { getAllItems, getCurrentUser, createUser, signIn } from '../lib/appwrite';
import { useAuth } from '../store'

function LogIn() {

    const { sessionId } = useAuth((state) => state)

    const [credentials, setCredentials] = useState({email: '', password: ''})

    const handleSetCredentials = (e) => {
        const { id, value } = e.target;
        setCredentials({...credentials, [id]: value});
      }

    const inputs = [
        {id: 'email', placeholder: 'Email', onChange: handleSetCredentials, type: 'email'},
        {id: 'password', placeholder: 'Password', onChange: handleSetCredentials, type: 'password'},
    ]

    const handleSignIn = () => {
        signIn(credentials.email, credentials.password)
      }

      return (
        sessionId ? (<Profile />) : (
            <Container className='loginCont'>
                <Container className='loginHeading'>
                    <h3 className='headingSmall'>Log In to</h3>
                    <h2 className='headingLarge'>Liberty Lockbox</h2>
                </Container>
                <Container className='loginInputForm'>
                    {inputs.map((item) => {
                        return <InputField id={item.id} placeholder={item.placeholder} key={item.id} onChange={item.onChange} type={item.type}/>
                    })}
                    <CustomButton text={'Log In'} onClick={handleSignIn}/>
                </Container>
                <Container className='loginFooter'>
                    <h3 className='footerSmall'>New here?</h3>
                    <Link to="/signup" className='link'><h2 className='footerLink'>Create an Account</h2></Link>
                </Container> 
            </Container>
        )
    );
    

    
}
 
export default LogIn