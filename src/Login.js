import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css"

function Login() {

    const signIn = ()=>{
        auth.signInWithPopup(provider)
            .catch(error=>alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Discord-logo.png"
                     alt=""
                />
            </div>
            <Button onClick={signIn}>SignIn</Button>
        </div>
    )
}

export default Login
