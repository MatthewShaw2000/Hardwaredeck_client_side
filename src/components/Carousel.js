//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';

//Page Components

//Images
import motherboard from '../images/motherboard.jpg';




export default function CarouselImages()
{
    return (
        <>
            <section className='carouselBorder imageCarousel'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={motherboard}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </>
    );

}