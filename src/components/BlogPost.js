//React Components
import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import Card from 'react-bootstrap/Card';

//CSS 
import '../css/style.css';

//Images




export default function BlogPost({blog, user})
{
    /*
        Function to split the products name then put back
        together with no breaks to be put in the URL
    */
    function nameSplit(name)
    {
        const splitName = name.split(' ');
        let urlName = splitName[0];
        
        if(splitName.length > 1)
        {
            for(let i=1; i<splitName.length; i++)
            {
                urlName += '_';
                urlName += splitName[i];
            }
        }
        return urlName;
    }



    return (
        <>
            <Card>
                <Card.Header>
                    Posted by: {blog.user}
                </Card.Header>

                <Link to={'/blog/' + nameSplit(blog.title)} state={blog}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                </Link>

                <Card.Body>
                    <Card.Title>
                        <Link to={'/blog/' + nameSplit(blog.title)}>
                            {blog.title}
                        </Link>
                    </Card.Title>
                </Card.Body>

                <Card.Footer>
                    Uploaded on: {blog.date}
                </Card.Footer>
            </Card>
        </>
    );
}