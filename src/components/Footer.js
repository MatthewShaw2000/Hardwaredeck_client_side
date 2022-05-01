//React Components
import React from 'react';
import { Link } from 'react-router-dom';

//CSS 
import '../css/style.css';




export default function Footer({user})
{
    return (
        <>
            <footer>
                <div className='spacer footerBorder'></div>
                <div className='innerFooter'>
                    <ul>
                        <li><b>Information</b></li>
                        <li>About us</li>
                        <li>Who we are</li>
                        <li>Conditions</li>
                        <li>Catelogue</li>
                        <li>Deals</li>
                        <li>Events</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li><b>Links</b></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Products</Link></li>
                        <li><Link to={user ? "/my_account/" + user.fname + "_" + user.lname : "/signin"}>My Account</Link></li>
                    </ul>

                    <ul>
                        <li><b>My Account</b></li>
                        <li>Login</li>
                        <li>Create account</li>
                        <li>Order history</li>
                    </ul>

                    <ul>
                        <li><b>Find us</b></li>
                        <li>Email</li>
                        <li>Number: 00000000000</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </footer>
        </>
    );
}