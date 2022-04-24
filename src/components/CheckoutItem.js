//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Images
import img from '../images/motherboard.jpg';



export default function CheckoutItem({item})
{
    return (
        <>
            <div className='cartItem'>
                <div className='cartImg'>
                    <img src={img} alt='test'/>
                </div>

                <div className='cartName'>
                    <strong>{item.name}</strong>
                </div>

                <div className='cartPrice'><i>£{item.price}</i></div>

                <div className='cartQuantity'>
                    Qty: {item.quantity}
                </div>
            </div>
        </>
    );
}