//React Components
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Page Components
import Loader from '../components/Loader';

//Images
import motherboard from '../images/motherboard.jpg';


export default function ProductPage() 
{
    const [user, setUser] = useState();
    const [product, setProduct] = useState();
    const [cartItems, setCartItems] = useState([]);


    //Upon page render
    useEffect(() => {
        document.title = "Hardwaredeck | product";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;


        //check if user has logged in
        const getUser = localStorage.getItem('user');
        if(getUser)
        {
            const loggedInUser = JSON.parse(getUser);
            setUser(loggedInUser);
        }

        //check if cart is not empty
        const getCart = localStorage.getItem('cart');
        if(getCart)
        {
            const storedCart = JSON.parse(getCart);
            setCartItems(storedCart);
        }
    }, []);


    //retrieve passed data
    const location = useLocation();
    useEffect(() => {
        setProduct(location.state);
    }, [location])


    //When the cart get updated store it in localstorage
    useEffect(() => {
        if(user)
        {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems, user]);


    //Add products to cart function
    function addProductsToCart(productID)
    {
        const item = cartItems.find(item => item.id === productID);
        if(item)
        {
            item.quantity = item.quantity + 1;
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
        else
        {
            product.quantity = 1;
            setCartItems(existingCartItems => {
                return [...existingCartItems, product];
            });
        }
    }



    return (
        <>
            <main>
            <h1 style={{display: "none"}}>Product post</h1>
                {
                    product
                    ?
                    <section className='product'>
                        <h2>{product.name}</h2>
                        <div className='productImage'>
                            <img src={motherboard} alt="motherboard"/>
                        </div>

                        <div className='productText'>
                            <p><strong>Price: £{product.price}</strong></p>
                            <h3>About this Item</h3>
                            <p>Description</p>
                        </div>

                        <div className='button' onClick={() => addProductsToCart(product.id)}>Add to Cart</div>
                    </section>
                    :
                    <Loader/>
                }
            </main>
        </>
    );
}
