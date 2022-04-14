//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';

//Page Components

//Images
import trustpilot from '../images/trustpilot.png';

//Font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';



export default function InfoCarousel()
{
    return (
        <>
            <section className='carouselBorder infoCarousel'>
                <Carousel controls={false} indicators={false} fade={true}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={trustpilot}
                        alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={trustpilot}
                        alt="First slide"
                        />
                    </Carousel.Item>

                    
                </Carousel>
            </section>
        </>
    );

}



/* <Carousel.Item>
                        <div className='carouselIcons'>
                            <FontAwesomeIcon icon={faTrophy}/>
                        </div>
                    </Carousel.Item> */