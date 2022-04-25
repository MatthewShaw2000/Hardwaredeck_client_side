//React Components
import React, {useState, useEffect} from 'react';

//CSS 
import '../css/style.css';

//Page Components
import Product from '../components/Product';
import Loader from '../components/Loader';



export default function ProductList() 
{
    const [user, setUser] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItems] = useState([]);



    useEffect(() => {
        document.title = "Hardwaredeck | Shop";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.remove("stopScroll");

        //temp product
        const tempProducts = [
            {
                id: 1,
                name: 'Motherboard',
                price: 50.00
            },
            {
                id: 2,
                name: 'graphics card',
                price: 25.00
            },
            {
                id: 3,
                name: 'Intel 5 CPU',
                price: 100.00
            }
        ]


        setProducts(tempProducts);


        //check if user has logged in
        const getUser = sessionStorage.getItem('user');
        if(getUser)
        {
            const loggedInUser = JSON.parse(getUser);
            setUser(loggedInUser);
        }

        const getCart = localStorage.getItem('cart');
        if(getCart)
        {
            const storedCart = JSON.parse(getCart);
            setCartItems(storedCart);
        }
    }, []);



    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);



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
            const product = products.find(product => product.id === productID);
            product.quantity = 1;
            setCartItems(existingCartItems => {            
                return [...existingCartItems, product];
            });
        }
    }



    return (
        <>
            <main>
                <h1 style={{display: "none"}}>Shop</h1>
                <section className='productsSection'>
                    <h2>(Product category)</h2>
                    {
                        products
                        ?
                        products.map(product => {
                            return <Product product={product} addProductsToCart={addProductsToCart} user={user} key={product.id}/>
                        })
                        :
                        <Loader/>
                    }
                </section>
            </main>
        </>
    );
}