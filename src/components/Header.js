//React Components
import React from 'react';
import { Link } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Page Components
import MenuBtn from './MenuBtn';

//Images
import logo from '../images/logoA.png';

//font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';



export default function Header({displayNavMethod, dislayLogin, loggedIn, userDetails})
{
    return (
        <>
            <header>
                <div className='headerInner'>
                    <Link to='/' className='logo'>
                        <img src={logo} alt='Logo'/>
                    </Link>

                    <div className='icons'>
                        {
                            loggedIn
                            ?
                            <Link to={'/my_account/' + userDetails.fname + '_' + userDetails.lname} state={userDetails} className='icon'>
                                <FontAwesomeIcon icon={faUser}/>
                            </Link>
                            :
                            <div className='icon'>
                                <FontAwesomeIcon icon={faUser} onClick={() => dislayLogin(true)}/>
                            </div>
                        }

                        <Link to='/checkout' className='icon'>
                            <FontAwesomeIcon icon={faCartShopping}/>
                        </Link>
                        <MenuBtn displayNavMethod={displayNavMethod}/>
                    </div>
                </div>

                <div className='spacer headerBorder'></div>

            </header>
        </>
    );
}