//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';


export default function BackToTop()
{
    function scrollToTop()
    {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            <div className='backToTop' onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </>
    );

}