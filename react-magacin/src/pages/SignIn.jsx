import React, { useState, useEffect } from 'react';
import { getAllItems, getCurrentUser, createUser, signIn } from '../lib/appwrite';
import { Container } from '@mui/material';
import '../styles/SignIn.css'

function SignIn() {
    const [credentials, setCredentials] = useState({
      password: '',
      username: '',
      email: ''
    })
  
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
  
    /*const handleSignIn =() => {
      signIn(credentials.email, credentials.password).then(() => {
        getCurrentUser().then((res) => {
          console.log(res)
          setUser(res.username)
        })
        
      })
    } */
  
   /* const handleGetAllItems =() => {
      getAllItems().then((res) => {
        console.log(res.documents)
      })
    }
    <button onClick={handleGetAllItems}>Log Items</button>*/


    return (
      <Container className='signinCont'>
        <input type="text" placeholder='email' id='email' onChange={ handleSetCredentials}/>
        <input type="text" placeholder='username' id='username' onChange={ handleSetCredentials}/>
        <input type="password" placeholder='password' id='password' onChange={handleSetCredentials}/>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={() => signIn(credentials.email, credentials.password)}>Sign In</button>
        
      </Container>
    );
  };


export default SignIn