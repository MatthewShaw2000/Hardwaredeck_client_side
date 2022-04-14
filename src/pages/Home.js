//React Components
import React, { useEffect } from 'react';

//CSS 
import '../css/style.css';

//Page Components
import InfoCarousel from '../components/SiteInfo';
import Carousel from '../components/Carousel';
import Deals from '../components/Deals';
import Banners from '../components/Banners';




export default function Home()
{

    useEffect(() => {
        document.title = "Hardwaredeck | CPU's, Motherboards, and more";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.remove("stopScroll");
    }, []);


    return (
        <>
            <main>
                
                <h1 style={{display: "none"}}>Home page</h1>
                <InfoCarousel/>
                <Carousel/>
                <Deals/>
                <Banners/>

            </main>
        </>
    );

}
