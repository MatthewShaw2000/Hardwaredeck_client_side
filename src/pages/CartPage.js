//React Components
import React, { useState, useEffect } from 'react';

//CSS 
import '../css/style.css';

//Page Components
import CartItem from '../components/CartItem';



export default function ErrorPage()
{
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        document.title = "Hardwaredeck | Your cart";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        const storedItems = localStorage.getItem('cart');
        if(storedItems)
        {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);



    function removeItem(itemID)
    {
        const items = cartItems.filter(item => item.id !== itemID)
        setCartItems(items);
    }


    return (
        <>
            <main>
                <h1>Cart</h1>
                <section className='cartSection'>
                    <h2>Your items</h2>

                    {
                        cartItems.length < 1
                        ?
                        <p><strong>No products found in cart</strong></p>
                        :
                        cartItems.map(item => {
                            return <CartItem item={item} removeItem={removeItem} key={item.id}/>
                        })
                    }

                </section>
            </main>
        </>
    );

}