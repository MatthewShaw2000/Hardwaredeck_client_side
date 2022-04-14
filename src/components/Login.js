//React Components
import React from 'react';

//CSS 
import '../css/style.css';


export default function Login({loginMethod})
{
    function showPassword()
    {
        const password = document.getElementById('password');
        if(password.type === "password")
        {
            password.type = "text";
        }
        else
        {
            password.type = "password";
        }
    }

    return (
        <>
            <form onSubmit={loginMethod} className='innerLoginRegister'>
                <h1>Sign In</h1>

                <label>Email</label>
                <input type='email' id='email' name='email' required/>
            
                <label>Password <span>Forgot Password</span></label>
                <input type='password' id='password' name='password' required/>

                <div className='passShow'>
                    <input type='checkbox' onClick={showPassword} name='passwordShow'/>
                    <span>Password</span>
                </div>

                <p>
                    By signing-in you agree to Hardwaredeck's Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            
                <input type='submit' value='Sign-in'/>
            </form>

            <div className='dividerContainer'>
                <span>New to Hardwaredeck?</span>
            </div>
        </>
    );
}