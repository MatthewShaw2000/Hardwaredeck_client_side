//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Images
import profileImg from '../images/profileImg.png';



export default function ProfileInfo({name, userDetails})
{
    return (
        <>
            <section className='accountSection userInfo'>
                <h2>My Details</h2>
                <img className='profileImg' src={profileImg} alt='profile'/>
                <div className='userText'>
                    <p><strong>{name[0]} {name[1]}</strong></p>
                    <p><i>Account Type: </i> {userDetails.type}</p>
                    <p><i>Email: </i> {userDetails.email}</p>
                    <p><i>phone Number: </i> {userDetails.phone}</p>
                </div>
            </section>
        </>
    );
}