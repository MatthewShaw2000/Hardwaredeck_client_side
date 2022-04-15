//React Components
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Images
import logo from '../images/logoA.png';


export default function NavMenu({displayNav, displayNavMethod, loggedIn, userDetails})
{
    return (
        <>

            {displayNav && <div className='sidebarBackground' onClick={displayNavMethod}></div>}

            <nav id='navBar' className={displayNav ? 'activeSidebar' : ''}>
                <div className='innerNav'>
                    <Link to='/'>
                        <img src={logo} className='pageLogo' alt='Logo'/>
                    </Link>
                    <ul>
                        <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                        <hr/>
                        <li><NavLink activeClassName="active" to="/products">Product list</NavLink></li>
                        <hr/>
                        <li><NavLink activeClassName="active" to="/view">Product</NavLink></li>
                        <hr/>
                        <li>
                            {
                                loggedIn
                                ?
                                <NavLink activeClassName="active" to={"/my_account/" + userDetails.fname + "_" + userDetails.lname} state={userDetails}>Your Account</NavLink>
                                :
                                <NavLink activeClassName="active" to='/signin'>Sign in</NavLink>
                            }
                        </li>
                        <hr/>
                        <li><NavLink activeClassName="active" to="/checkout">Checkout</NavLink></li>
                    </ul>
                </div>

                <div className='spacer2 navBorder'></div>

            </nav>
        </>
    );
}