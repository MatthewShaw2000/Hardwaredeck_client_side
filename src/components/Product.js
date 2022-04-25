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
    let pName = nameSplit(product.name);

    /*
        Function to split the products name then put back
        together with no breaks to be put in the URL
        */
    function nameSplit(name)
    {
        const splitName = name.split(' ');
        let urlName = splitName[0];
        
        if(splitName.length > 1)
        {
            for(let i=1; i<splitName.length; i++)
            {
                urlName += '_';
                urlName += splitName[i];
            }
        }
        return urlName;
    }



    return (
        <>
            <Card>
                <Link to={'/products/view/' + pName}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                </Link>
                <Card.Body>
                    <Card.Title>
                        <Link to={'/products/view/' + pName}>
                            {product.name}
                        </Link>
                    </Card.Title>
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