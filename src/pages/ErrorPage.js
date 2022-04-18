//React Components
import React, { useEffect } from 'react';

//CSS 
import '../css/style.css';

//font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRobot} from '@fortawesome/free-solid-svg-icons';




export default function ErrorPage()
{

    useEffect(() => {
        document.title = "Error 404";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);


    return (
        <>
            <main>

                <section className='errorPage'>
                    <h1>OOPS PAGE NOT FOUND</h1>
                    <FontAwesomeIcon icon={faRobot} />
                    <h2>Error 404</h2>
                </section>

            </main>
        </>
    );

}