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
            <section className='productsSection'>
                <h2 className='dealsHeader'>Tech Deals</h2>
                <div className='itemContainer'>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Description:
                                Some quick example text to build on the card 
                                title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Text>
                                Price: £10
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
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
                            <Card.Title>Card Title</Card.Title>
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
                            <Card.Title>Card Title</Card.Title>
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
                </div>
            </section>
        </>
    );

}
