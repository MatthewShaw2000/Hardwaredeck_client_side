//React Components
import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Images
import logo from '../images/logoA.png';


export default function Login({setUser})
{
    useEffect(() => {
        document.title = "Hardwaredeck | Sign In";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.add("stopScroll");
    }, []);



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


    const navigate = useNavigate();

    //function to got back to home page
    function backToHome()
    {
        document.body.classList.remove("stopScroll");
        navigate('/');
    }


    const tempUser = {
        fname: "Matthew",
        lname: "Shaw",
        email: "test@test.com",
        password: "password",
        type: "admin",
        phone: 354456453
      };


    //test for logging in (placeholder)
    const login = async event =>
    {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        if(email !== tempUser.email || password !== tempUser.password)
        {
            alert('try again');
        }
        else
        {
            const user = {
                fname: tempUser.fname,
                lname: tempUser.lname,
                email: tempUser.email,
                type: tempUser.type,
                phone: tempUser.phone
            }


            //store user in local storage
            sessionStorage.setItem('user', JSON.stringify(user));

            //set state of the user
            setUser(user);
            document.body.classList.remove("stopScroll");
            navigate('/');
            alert("Welcome " + user.fname + " " + user.lname);
        }
    };



    return (
        <>
            <main className='loginRegisterPage'>
                <div onClick={backToHome}>
                    <img src={logo} className='pageLogo' alt='Logo'/>
                </div>

                <form onSubmit={login} className='innerLoginRegister'>
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

                <Link to={'/register'} className='registerLink'>Register</Link>
            </main>
        </>
    );
}