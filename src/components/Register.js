//React Components
import React from 'react';

//CSS 
import '../css/style.css';


export default function Register()
{
    //check to see if password and confirm password match
    function passwordMatch()
    {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const passwordMessage = document.getElementById('confirmMessage');
        const registerBtn = document.getElementById('register');

        if(confirmPassword !== "")
        {
            if(password !== confirmPassword)
            {
                passwordMessage.setAttribute("style", "color: red;");
                passwordMessage.innerHTML = "Passwords do not match!";
                registerBtn.disabled = true;
            }
            else
            {
                passwordMessage.setAttribute("style", "color: green;");
                passwordMessage.innerHTML = "Passwords match";
                registerBtn.disabled = false;
            }
        }
        else
        {
            passwordMessage.innerHTML = "";
            registerBtn.disabled = true;
        }
    }

    return (
        <>
            <form onSubmit={(event) => (event.preventDefault)} method='post' className='innerLoginRegister'>
                <h1>Register</h1>

                <label>First name</label>
                <input type='text' id='fname' name='fname' required/>

                <label>Surname</label>
                <input type='text' id='lname' name='lname' required/>

                <label>Email</label>
                <input type='email' id='email' name='email' required/>
            
                <label>Password</label>
                <input type='password' className='password' id='password' name='password' required/>

                <label>Confirm password</label>
                <input type='password' id='confirmPassword' onKeyUp={passwordMatch} name='confirmPassword' required/>

                <div id='confirmMessage'></div>

                <p>
                    By creating an account you agree to Hardwaredeck's Conditions of Use & Sale. 
                    Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <input type='submit' id='register' value='Register'/>
            </form>

            <div className='dividerContainer'>
                <span>Already have an account?</span>
            </div>
        </>
    );
}