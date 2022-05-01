//React Components
import React from 'react';

//CSS 
import '../css/style.css';


export default function UpdateProfile()
{
    return (
        <>
            <section className='accountSection'>
                <h2>Edit Profile</h2>

                {
                    /*
                    <form onSubmit={updateUser}>

                        <label>First name</label>
                        <input type='text' onChange={(event) => setFname(event.target.value)} name='fname' required/>

                        <label>Surname</label>
                        <input type='text' onChange={(event) => setlname(event.target.value)} name='lname' required/>

                        <label>Email</label>
                        <input type='email' onChange={(event) => setEmail(event.target.value)} name='email' required/>

                        <label>Phone number</label>
                        <input type='number' onChange={(event) => setNumber(event.target.value)} name='phone' required/>

                    
                        <input type='submit' value='Save changes'/>
                    </form>
                    */
                }
                
            </section>
        </>
    );
}