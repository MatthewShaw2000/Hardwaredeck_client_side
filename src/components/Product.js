//React Components
import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import Card from 'react-bootstrap/Card'

//CSS 
import '../css/style.css';

//Images




export default function Product({product, addProductsToCart, user})
{
    return (
        <>
            <Card>
                <Link to='/products/view'>
                    <Card.Img variant="top" src="holder.js/100px180" />
                </Link>
                <Card.Body>
                    <Card.Title><h3>{product.name}</h3></Card.Title>
                    <Card.Text>
                        Price: £{product.price}
                    </Card.Text>
                    {
                        user
                        ?
                        <div className='button' onClick={() => addProductsToCart(product.id)}>Add to cart</div>
                        :
                        <Link to='/signin' className='button'>Add to cart</Link>
                    }
                </Card.Body>
            </Card>
        </>
    );
}