//React Components
import React from 'react';

//CSS 
import '../css/style.css';

//Video



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

                    <div className='video'><strong>Video Placeholder</strong></div>
                </div>

            </section>
        </>
    );
}