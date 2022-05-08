//React Components
import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Page Components
import CheckoutItem from '../components/CheckoutItem';
import Loader from '../components/Loader';


export default function Checkout() 
{
    
    const [cartItems, setCartItems] = useState();
    const [user, setUser] = useState();


    const navigate = useNavigate();
    //upon page render
    useEffect(() => {
        document.title = "Hardwaredeck | Checkout";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;


        //check if user has logged in
        const getUser = localStorage.getItem('user');
        if(getUser)
        {
            const loggedInUser = JSON.parse(getUser);
            setUser(loggedInUser);
        }
        else
        {
            navigate('/');
        }
    }, [navigate])


    //retrive passed state data
    const location = useLocation();
    useEffect(() => {
        setCartItems(location.state);
    }, [location])


    let subtotal = 0.00;
    //fucntion to calculate VAT
    function calculateVAT()
    {
        let vat = (subtotal/5).toFixed(2);
        return vat;
    }


    return (
        <>
            <main>
                <h1>Checkout</h1>
                <section className='cartCheckoutSection'>
                    <h2>Your Items</h2>
                    {
                        cartItems
                        ?
                        cartItems.map(item => {
                            subtotal += item.price * item.quantity;
                            return <CheckoutItem item={item} key={item.id}/>
                        })
                        :
                        <Loader/>
                    }
                    <p>Subtotal: <i>£{subtotal}</i></p>
                </section>

                <section className='cartCheckoutSection'>
                    <h2>Delivery Address</h2>

                    {
                        user
                        ?
                        <>
                            <label>Address</label>
                            <input id='address' type='text' defaultValue={user.address}/>

                            <label>Postcode</label>
                            <input type='text' id='postcode' defaultValue={user.postCode}/>
                        </>
                        :
                        <Loader/>
                    }
                    <p>Delivery fee: <i>£5.00</i></p>
                </section>

                <section className='cartCheckoutSection'>
                    <h2>Price</h2>
                    <p>Subtotal: <i>£{subtotal}</i></p>
                    <p>VAT: <i>£{calculateVAT()}</i></p>
                    <p>Delivery fee: <i>£5.00</i></p>
                    <p className='checkoutTotal'><strong>Total: <i>£{(subtotal + parseFloat(calculateVAT()) + 5.00).toFixed(2)}</i></strong></p>
                    <button className='button' onClick={() => alert("Order has been placed")}>Order</button>
                </section>
            </main>
        </>
    );
}