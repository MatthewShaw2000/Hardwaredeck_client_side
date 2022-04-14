//React Components
import React from 'react';

//CSS 
import '../css/style.css';


export default function Header({displayNavMethod})
{

    return (
        <>
            <div className='menu_btn' id='menu_btn' onClick={displayNavMethod}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>    
        </>
    );
}