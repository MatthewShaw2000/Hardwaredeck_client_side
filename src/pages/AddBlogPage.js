//React Components
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//CSS 
import '../css/style.css';



export default function AddBlogPage()
{
    const [title, setTitle] = useState();
    const [content, setContent] = useState([]);
    const [user, setUser] = useState();

    const [showMessage, setShowMessage] = useState(false);
    const [toxicityCheck, setToxicityCheck] = useState("default");



    useEffect(() => {
        document.title = "Hardwaredeck | Add blog";
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

    //onchange to the toxicity check
    useEffect(() => {
        if(toxicityCheck === true)
        {
            setShowMessage(true);
            document.getElementById('submit').disabled = true;
        }
        else if(toxicityCheck === "default")
        {
            setShowMessage(false);
            document.getElementById('submit').disabled = true;
        }
        else
        {
            setShowMessage(false);
            document.getElementById('submit').disabled = false;
        }
    }, [toxicityCheck]);

    //on change to the blog content
    useEffect(() => {
        setToxicityCheck("default");
    }, [content]);


    //to navigate back to blog list page
    const navigate = useNavigate();

    //add new blog to the database
    const addNewBlog = async event =>
    {
        event.preventDefault();

        if(!toxicityCheck)
        {
            setShowMessage(false);
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
    };


    //import tensorflow toxicity
    const toxicity = require('@tensorflow-models/toxicity');
    //checks the toxicity of the blogs content
    function checkForToxicity()
    {
        //Tensorflow toxicity
        // The minimum prediction confidence.
        const threshold = 0.9;

        setToxicityCheck(false);

        // Load the model. Users optionally pass in a threshold and an array of
        // labels to include.
        toxicity.load(threshold).then(model => {
        //const sentences = ['you suck'];

            model.classify(content).then(predictions => {
                // `predictions` is an array of objects, one for each prediction head,
                // that contains the raw probabilities for each input along with the
                // final prediction in `match` (either `true` or `false`).
                // If neither prediction exceeds the threshold, `match` is `null`.

                console.log(predictions);

                for(let i=0; i<predictions.length; i++)
                {
                    const match = predictions[i].results[0].match;
                    
                    if(match === true)
                    {
                        setToxicityCheck(true);
                    }
                    else
                    {
                        setToxicityCheck(false);
                    }

                }
            });
        });
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
                        <textarea type='text' onChange={(event) => setContent(event.target.value)} name='content' required/>

                        {
                            showMessage
                            ?
                            <p style={{color: "red"}}>Innapropriate language</p>
                            :
                            null
                        }
                        <div className='button' onClick={checkForToxicity}>Check contents</div>
                        <input type='submit' id='submit' value='Create blog'/>
                    </form>

                </section>
            </main>
        </>
    );
}