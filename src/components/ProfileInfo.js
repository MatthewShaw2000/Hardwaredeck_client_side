//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Images
import profileImg from '../images/profileImg.png';



export default function ProfileInfo({user})
{
    return (
        <>
            <section className='accountSection userInfo'>
                <h2>My Details</h2>
                <img className='profileImg' src={profileImg} alt='profile'/>
                <div className='userText'>
                    <p><strong>{user.fname} {user.lname}</strong></p>
                    <p><i>Account Type: </i> {user.type}</p>
                    <p><i>Email: </i> {user.email}</p>
                    <p><i>phone Number: </i> {user.phone}</p>
                </div>
            </section>
        </>
    );
}