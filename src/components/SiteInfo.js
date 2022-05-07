//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';

//Font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';



export default function InfoCarousel()
{
    return (
        <>
            <section className='carouselBorder infoCarousel'>
                <Carousel controls={false} indicators={false} fade={true}>
                    <Carousel.Item>
                        <div className='carouselIcons'>
                            <FontAwesomeIcon icon={faStar} style={{color: "green"}}/>
                            <h2>Trustpilot
                                <FontAwesomeIcon icon={faStar} style={{color: "green"}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "green"}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "green"}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "green"}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "green"}}/>
                            </h2>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='carouselIcons'>
                            <FontAwesomeIcon icon={faTrophy}/>
                            <strong>Award winning systems and customer service</strong>
                        </div>
                    </Carousel.Item>

                    
                </Carousel>
            </section>
        </>
    );

}