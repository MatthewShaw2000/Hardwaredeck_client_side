//React Components
import React, {useState, useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

//CSS 
import '../css/style.css';

//Page Components
import Product from '../components/Product';
import Loader from '../components/Loader';
import ProductFilter from '../components/ProductFilter';





export default function ProductList() 
{
    const [user, setUser] = useState();
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [category, setCategory] = useState();
    const [categories, setCategories] = useState([]);
    const [sortBy, setSortBy] = useState('ascend');


    //Upon page render
    useEffect(() => {
        document.title = "Hardwaredeck | Shop";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.remove("stopScroll");


        //fetch products product
        const tempProducts = [
            {
                id: 1,
                name: 'Motherboard 1',
                price: 50.01,
                cat: 'Motherboards'
            },
            {
                id: 2,
                name: 'graphics card 1',
                price: 25.99,
                cat: 'graphics cards'
            },
            {
                id: 3,
                name: 'Intel 5 CPU 1',
                price: 100.00,
                cat: 'CPU'
            },
            {
                id: 4,
                name: 'Motherboard 2',
                price: 100.00,
                cat: 'Motherboards'
            },
            {
                id: 5,
                name: 'graphics card 2',
                price: 100.00,
                cat: 'graphics cards'
            },
            {
                id: 6,
                name: 'Intel 5 CPU 2',
                price: 100.00,
                cat: 'CPU'
            },
            {
                id: 7,
                name: 'Motherboard 3',
                price: 100.00,
                cat: 'Motherboards'
            },
            {
                id: 8,
                name: 'graphics card 3',
                price: 100.00,
                cat: 'graphics cards'
            },
            {
                id: 9,
                name: 'Intel 5 CPU 3',
                price: 100.00,
                cat: 'CPU'
            },
            {
                id: 10,
                name: 'Motherboard 4',
                price: 100.00,
                cat: 'Motherboards'
            },
            {
                id: 11,
                name: 'graphics card 4',
                price: 100.00,
                cat: 'graphics cards'
            },
            {
                id: 12,
                name: 'Intel 5 CPU 4',
                price: 100.00,
                cat: 'CPU'
            },
            {
                id: 13,
                name: 'Motherboard 5',
                price: 100.00,
                cat: 'Motherboards'
            },
            {
                id: 14,
                name: 'graphics card 5',
                price: 100.00,
                cat: 'graphics cards'
            },
            {
                id: 15,
                name: 'Intel 5 CPU 5',
                price: 100.00,
                cat: 'CPU'
            }
        ]
        //set products
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




    //check to see if the category has changed
    useEffect(() => {
        setPage(0);
    }, [category]);






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
    }, [catName]);



    //retrieve passed state data
    const location = useLocation();
    useEffect(() => {
        setCategories(location.state);
    }, [location]);



    //When products get updated store it in localstorage
    useEffect(() => {
        if(user)
        {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems, user]);


    //page number changes go back to top of the screen
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [page]);



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
        sortProducts();

        if(category === undefined || category === 'All')
        {
            return products;
        }
        else
        {
            return products.filter(product => product.cat === category);
        }
    }

    //order products
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


    //number of products per screen
    const productsPerPage = 10;

    let totalPages;
    //Slice products array to display only a select few on screen
    function pagimation()
    {
        const filteredProducts = filterProducts();
        const numberOfRecordsVisited = page * productsPerPage;

        //will get the records to be display on screen
        const displayProducts = filteredProducts.slice(numberOfRecordsVisited, numberOfRecordsVisited + productsPerPage);

        //calculate the total number of pages
        totalPages = Math.ceil(filteredProducts.length / productsPerPage);

        return displayProducts;
    }



    //change the page number
    function changePage({selected})
    {
        setPage(selected);
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
                        pagimation().map(product => {
                            return <Product product={product} addProductsToCart={addProductsToCart} user={user} key={product.id}/>
                        })
                        :
                        <Loader/>
                    }
                </section>

                {
                    totalPages > 1
                    ?
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={totalPages}
                        onPageChange={changePage}

                        containerClassName={"navigationButtons"}
                        previousLinkClassName={"previousButton"}
                        nextLinkClassName={"nextButton"}
                        disabledClassName={"navigationDisabled"}
                        activeClassName={"navigationActive"}
                    />
                    :
                    null
                }
            </main>
        </>
    );
}