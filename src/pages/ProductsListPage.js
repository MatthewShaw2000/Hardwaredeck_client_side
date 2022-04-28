//React Components
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Page Components
import Product from '../components/Product';
import Loader from '../components/Loader';



export default function ProductList() 
{
    const [user, setUser] = useState();
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [category, setCategory] = useState();

    
    //retrieve the category from the url
    const {catName} = useParams();

    useEffect(() => {
        setCategory(catName);
    }, [catName])


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
                price: 50.01,
                cat: 'Motherboards'
            },
            {
                id: 2,
                name: 'graphics card',
                price: 25.99,
                cat: 'graphics cards'
            },
            {
                id: 3,
                name: 'Intel 5 CPU',
                price: 100.00,
                cat: 'CPU'
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


    //When products get updated store it in localstorage
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




    function filterProducts()
    {
        if(category === undefined)
        {
            return products;
        }
        else
        {
            return products.filter(product => product.cat === category);
        }
    }







    return (
        <>
            <main>
                <h1 style={{display: "none"}}>Shop</h1>
                <section className='productsSection'>
                    {
                        category === undefined
                        ?
                        <h2>All</h2>
                        :
                        <h2>{category}</h2>
                    }
                    <p><i>{filterProducts().length} Products found</i></p>                    
                    {
                        products
                        ?
                        filterProducts().map(product => {
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