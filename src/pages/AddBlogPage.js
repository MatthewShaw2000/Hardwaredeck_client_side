//React Components
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//CSS 
import '../css/style.css';



export default function AddBlogPage()
{
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [user, setUser] = useState();




    useEffect(() => {
        document.title = "Hardwaredeck | Your cart";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.remove("stopScroll");

        //check if user has logged in
        const getUser = localStorage.getItem('user');
        if(getUser)
        {
            const loggedInUser = JSON.parse(getUser);
            setUser(loggedInUser);
        }
    }, []);


    const navigate = useNavigate();
    //Add products to cart function
    const addNewBlog = async event =>
    {
        event.preventDefault();
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        const fullDate = day + '/' + month + '/' + year;

        navigate('/blogs');

        alert("Blog created\n" + 
              "Published by: " + user.fname + " " + user.lname + "\n" +
              "Published on: " + fullDate + "\n" +
              "Blog title: " + title);
    }


    return (
        <>
            <main>
                <h1>Add Blog</h1>
                <section className='addBlog'>
                    <h2>Create new Blog post</h2>

                    <form onSubmit={addNewBlog}>

                        <label>Title</label>
                        <input type='text' onChange={(event) => setTitle(event.target.value)} name='title' required/>
                    
                        <label>Content</label>
                        <input type='text' onChange={(event) => setContent(event.target.value)} name='content' required/>

                    
                        <input type='submit' value='Create blog'/>
                    </form>

                </section>
            </main>
        </>
    );
}