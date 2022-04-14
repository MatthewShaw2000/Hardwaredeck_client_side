//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Bootstrap
import Card from 'react-bootstrap/Card'


//Images




export default function Deals()
{
    return (
        <>
            <section className='dealsSection'>
                <h2 className='dealsHeader'>Tech Deals</h2>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title><h3>Card Title</h3></Card.Title>
                        <Card.Text>
                            Description:
                            Some quick example text to build on the card 
                            title and make up the bulk of
                            the card's content.
                            <br/>
                            Price: £10
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title><h3>Card Title</h3></Card.Title>
                        <Card.Text>
                            Description:
                            Some quick example text to build on the card 
                            title and make up the bulk of
                            the card's content.
                            <br/>
                            Price: £10
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </>
    );

}
