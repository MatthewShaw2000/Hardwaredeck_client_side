//React Components
import React, { useState } from 'react';

//CSS 
import '../css/style.css';

//font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';


export default function BackToTop()
{
    const [backToTopBTN, setBackToTopBTN] = useState(false);

    //Onscroll to display button to go back to top
    window.onscroll = function()
    {
        if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
        {
        setBackToTopBTN(true);
        }
        else
        {
        setBackToTopBTN(false);
        }
    }


    function scrollToTop()
    {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
            {
                backToTopBTN
                ?
                <div className='backToTop' onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
                :
                null
            }
        </>
    );

}