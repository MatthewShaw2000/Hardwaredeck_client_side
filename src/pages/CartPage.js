//React Components
import React, { useEffect } from 'react';

//CSS 
import '../css/style.css';

//Page Components
import CartItem from '../components/CartItem';



export default function ErrorPage()
{

    useEffect(() => {
        document.title = "Hardwaredeck | Your cart";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);


    return (
        <>
            <main>
                <h1>Cart</h1>
                <section className='cartSection'>
                    <h2>Your items</h2>

                    <CartItem/>
                    <CartItem/>

                </section>
            </main>
        </>
    );

}