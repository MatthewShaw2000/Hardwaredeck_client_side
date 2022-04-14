//React Components
import React, {useState, useEffect} from 'react';

//Page comonents
import Login from './Login';
import Register from './Register';

//CSS 
import '../css/style.css';

//Images
import logo from '../images/logoA.png';


export default function LoginRegisterOverlay({user, setLoggedIn, setShowLoginRegister})
{
    const [registerForm, showRegisterForm] = useState(false);



    useEffect(() => {
        document.title = "Hardwaredeck | Sign In";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.add("stopScroll");
    }, []);



    //close login form
    function closeLogin()
    {
        setShowLoginRegister(false);
        document.body.classList.remove("stopScroll");
    }



    //test for logging in (placeholder)
    const login = async event =>
    {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if(email !== user.email || password !== user.password)
        {
            alert('try again');
            setLoggedIn(false);
        }
        else
        {
            //store user in local storage
            localStorage.setItem('logged_in', true);
            setLoggedIn(true);
            closeLogin();
        }
    };



    return (
        <>
            <div className='loginRegisterOverlay'>
                <div onClick={closeLogin}><img src={logo} className='pageLogo' alt='Logo'/></div>
                {
                    registerForm ? <Register/> : <Login loginMethod={login}/>
                }
                {
                    registerForm 
                    ?
                    <div className='registerLink' onClick={() => showRegisterForm(false)}>Sign in</div>
                    :
                    <div className='registerLink' onClick={() => showRegisterForm(true)}>Create New Account</div>
                }
            </div>
        </>
    );
}