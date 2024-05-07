import React, { useState, useEffect } from 'react';
import { getAllItems, getCurrentUser, createUser, signIn } from '../lib/appwrite';

function SignIn() {
    const [loggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
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
  
    const handleSignIn =() => {
      signIn(credentials.email, credentials.password).then(() => {
        GetCurrentUser().then((res) => {
          console.log(res)
          setUser(res.username)
        })
        
      })
    } 
  
    const handleGetAllItems =() => {
      GetAllItems().then((res) => {
        console.log(res.documents)
      })
    }
  
    return (
      <div>
        {user && (<h1>Hello, {user}</h1>)}
        <input type="text" placeholder='email' id='email' onChange={ handleSetCredentials}/>
        <input type="text" placeholder='username' id='username' onChange={ handleSetCredentials}/>
        <input type="password" placeholder='password' id='password' onChange={handleSetCredentials}/>
        <button onClick={handleSignUp}>Sign Up</button>
<<<<<<< Updated upstream
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleGetAllItems}>Log Items</button>
      </div>
=======
        <button onClick={() => signIn(credentials.email, credentials.password)}>Sign In</button>
        
        <button >Add item</button>
      </Container>
>>>>>>> Stashed changes
    );
  };


export default SignIn