//React Components
import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import Card from 'react-bootstrap/Card'

//CSS 
import '../css/style.css';

//Images




export default function Product({product})
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
                    <div className='addToCart' onClick={() => alert(product.name + " has been added to the cart")}>Add to cart</div>
                </Card.Body>
            </Card>
        </>
    );
}