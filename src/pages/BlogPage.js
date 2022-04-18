//React Components
import React, { useEffect } from 'react';

//CSS 
import '../css/style.css';

//Page Components





export default function Blog()
{

    useEffect(() => {
        document.title = "Hardwaredeck | Blogs";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

    return (
        <>
            <main>
                <h1>Blog page</h1>
            </main>
        </>
    );
}