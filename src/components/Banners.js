//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Video
import exampleVid from '../videos/Example.MOV';


export default function Banners()
{
    return (
        <>
            <section className='bannerSection'>
                <div className='bannersSectionInnerContainer'>
                    <div className='banners'>
                        <div className='banner'>Banner</div>
                        <div className='banner'>Banner</div>
                        <div className='banner'>Banner</div>
                        <div className='banner'>Banner</div>
                    </div>

                    <video src={exampleVid} controls></video>
                </div>

            </section>
        </>
    );
}