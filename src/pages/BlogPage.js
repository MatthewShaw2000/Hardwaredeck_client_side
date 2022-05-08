//React Components
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Page Components
import Loader from '../components/Loader';

//Images
import motherboard from '../images/motherboard.jpg';




export default function Blog()
{
    const [blog, setBlog] = useState();

    useEffect(() => {
        document.title = "Hardwaredeck | Blogs";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, []);

    //retrieve passed state data
    const location = useLocation();
    useEffect(() => {
        setBlog(location.state);
    }, [location]);

    return (
        <>
            <main>
                <h1 style={{display: "none"}}>Blog post</h1>
                {
                    blog
                    ?
                    <>
                        <section className='blog'>
                            <h2>{blog.title}</h2>
                            <p><i>Published on {blog.date} by {blog.user}</i></p>

                            <div className='blogImage'>
                                <img src={motherboard} alt="motherboard"/>
                            </div>

                            <div className='blogText'>
                                <p>{blog.content}</p>
                            </div>
                        
                        </section>

                        <section className='blog'>
                            <input type="text" name="Comment" placeholder='Comment'/>
                            <input type="submit" name="post" value="Post" 
                                   onClick={() => alert("This is a placeholder for future development")}/>
                        </section>

                    </>
                    :
                    <Loader/>
                }
                
            </main>
        </>
    );
}