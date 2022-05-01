//React Components
import React, {useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Page Components
import Product from '../components/Product';
import Loader from '../components/Loader';
import ProductFilter from '../components/ProductFilter';



export default function ProductList() 
{
    const [user, setUser] = useState();
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);
    const [sortBy, setSortBy] = useState('ascend');

    
    //retrieve the category from the url
    const {catName} = useParams();

    //Upon update of catName
    useEffect(() => {
        if(catName !== undefined)
        {
            const catSplit = catName.split('_');
            let newCategory = catSplit[0];
            
            if(catSplit.length > 1)
            {
                for(let i=1; i<catSplit.length; i++)
                {
                    newCategory += ' ';
                    newCategory += catSplit[i];
                }
            }

            setCategory(newCategory);
        }
        else
        {
            setCategory(catName);
        }
    }, [catName])



    //retrieve passed state data
    const location = useLocation();
    useEffect(() => {
        setCategories(location.state);
    }, [location])


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


    //When products get updated store it in localstorage
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
            const product = products.find(product => product.id === productID);
            product.quantity = 1;
            setCartItems(existingCartItems => {
                return [...existingCartItems, product];
            });
        }
    }



    //Filter products based on category passed over URL
    function filterProducts()
    {
        if(category === undefined || category === 'All')
        {
            sortProducts();
            return products;
        }
        else
        {
            sortProducts();
            return products.filter(product => product.cat === category);
        }
    }

    function sortProducts()
    {
        switch(sortBy)
        {
            case 'descend':
                products.sort((a, b) => {
                    let na = a.name.toLowerCase()
                    let nb = b.name.toLowerCase()

                    if(na > nb)
                    {
                        return -1;
                    }
                    if(na < nb)
                    {
                        return 1;
                    }
                    return 0;
                });
                break;

            case 'hPrice':
                products.sort((a, b) => {
                    return b.price - a.price;
                });
                break;

            case 'lPrice':
                products.sort((a, b) => {
                    return a.price - b.price;
                });
                break;

            default:
                products.sort((a, b) => {
                    let na = a.name.toLowerCase()
                    let nb = b.name.toLowerCase()

                    if(na < nb)
                    {
                        return -1;
                    }
                    if(na > nb)
                    {
                        return 1;
                    }
                    return 0;
                });
        }
    }




    return (
        <>
            <main>
                <h1 style={{display: "none"}}>Shop</h1>
                <section className='productsSection'>
                    {
                        category === undefined || category === 'All'
                        ?
                        <h2>All Products</h2>
                        :
                        <h2>{category}</h2>
                    }
                    <p><i>{filterProducts().length} Products found</i></p>
                    <ProductFilter setSortBy={setSortBy} categories={categories} setCategory={setCategory}/>
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