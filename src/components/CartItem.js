//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Images
import img from '../images/motherboard.jpg';

//font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';



export default function CartItem()
{
    return (
        <>
            <div className='cartItem'>
                <div className='cartImg'>
                    <img src={img} alt='test'/>
                </div>

                <div className='cartName'>
                    <strong>Item Name</strong>
                </div>

                <div className='cartPrice'><i>£6.45</i></div>

                <div className='cartQuantity'>x2</div>

                <div className='cartRemove'>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        </>
    );

}