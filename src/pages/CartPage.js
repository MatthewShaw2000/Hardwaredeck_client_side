//React Components
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Page Components
import CartItem from '../components/CartItem';



export default function CartPage()
{
    const [cartItems, setCartItems] = useState();

    useEffect(() => {
        document.title = "Hardwaredeck | Your cart";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.remove("stopScroll");

        const storedItems = localStorage.getItem('cart');
        if(storedItems)
        {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);



    //Upon change to the item quantity
    function changeQuantity(itemID, newQuantity)
    {
        const newItem = cartItems.find(item => item.id === itemID);
        if(newItem)
        {
            newItem.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }



    //Remove product from cart
    function removeItem(itemID)
    {
        const items = cartItems.filter(item => item.id !== itemID);
        localStorage.setItem('cart', JSON.stringify(items));
        setCartItems(items);
    }


    return (
        <>
            <main>
                <h1>Cart</h1>
                <section className='cartCheckoutSection'>
                    <h2>Your Items</h2>

                    {   
                        cartItems && cartItems.length > 0
                        ?
                        cartItems.map(item => {
                            return <CartItem item={item} changeQuantity={changeQuantity} removeItem={removeItem} key={item.id}/>
                        })
                        :
                        <p><strong>No products in cart</strong></p>
                    }
                    {
                        cartItems
                        &&
                        cartItems.length > 0
                        &&
                        <Link className='button' to='/checkout' state={cartItems}>Checkout</Link>
                    }

                </section>
            </main>
        </>
    );
}