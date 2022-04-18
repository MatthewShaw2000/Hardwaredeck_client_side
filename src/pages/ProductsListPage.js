//React Components
import React, {useEffect} from 'react';

//CSS 
import '../css/style.css';

//Page Components
import Product from '../components/Product';



export default function ProductList() 
{
    useEffect(() => {
        document.title = "Hardwaredeck | Shop";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);



    const products = [
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

    



    return (
        <>
            <main>
                <h1 style={{display: "none"}}>Product List</h1>
                <section className='productsSection'>
                    <h2>(Product category)</h2>
                    {
                        products.map(product => {
                            return <Product product={product} key={product.id}/>
                        })
                    }
                </section>
            </main>
        </>
    );
}