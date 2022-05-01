//React Components
import React, {useState, useEffect} from 'react';

//CSS 
import '../css/style.css';

//Page Components
import BlogPost from '../components/BlogPost';
import Loader from '../components/Loader';
import SortBy from '../components/BlogFilter';



export default function BlogPostList() 
{
    const [user, setUser] = useState();
    const [blogs, setBlogs] = useState([]);
    const [sortBy, setSortBy] = useState('ascend');


    useEffect(() => {
        document.title = "Hardwaredeck | Blog posts";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.remove("stopScroll");

        //temp product
        const tempBlogs = [
            {
                id: 1,
                title: 'This is blog 1',
                date: '29/1/2019',
                user: 'strongest avenger'
            },
            {
                id: 2,
                title: 'This is blog 2',
                date: '10/2/2000',
                user: 'strongest avenger'
            },
            {
                id: 3,
                title: 'This is blog 3',
                date: '1/5/2022',
                user: 'strongest avenger'
            }
        ]
        setBlogs(tempBlogs);




        //check if user has logged in
        const getUser = localStorage.getItem('user');
        if(getUser)
        {
            const loggedInUser = JSON.parse(getUser);
            setUser(loggedInUser);
        }
    }, []);




    //Sort products alphabetically and by price and return the array
    function sortBlogs()
    {
        switch(sortBy)
        {
            case 'descend':
                blogs.sort((a, b) => {
                    let na = a.title.toLowerCase()
                    let nb = b.title.toLowerCase()

                    return na > nb ? -1 : na < nb ? 1 : 0
                });
                return blogs;

            case 'newest':
                blogs.sort((a, b) => {
                    a = a.date.split('/').reverse().join('');
                    b = b.date.split('/').reverse().join('');
                    return a < b ? 1 : a > b ? -1 : 0;
                });
                return blogs;

            case 'oldest':
                blogs.sort((a, b) => {
                    a = a.date.split('/').reverse().join('');
                    b = b.date.split('/').reverse().join('');
                    return a > b ? 1 : a < b ? -1 : 0;
                });
                return blogs;

            default:
                blogs.sort((a, b) => {
                    let na = a.title.toLowerCase()
                    let nb = b.title.toLowerCase()

                    return na < nb ? -1 : na > nb ? 1 : 0
                });
                return blogs;
        }
    }




    return (
        <>
            <main>
                <h1>Blogs</h1>
                <section className='blogsSection'>
                    <SortBy setSortBy={setSortBy} user={user}/>
                    {
                        blogs
                        ?
                        sortBlogs().map(blog => {
                            return <BlogPost blog={blog} user={user} key={blog.id}/>
                        })
                        :
                        <Loader/>
                    }
                </section>
            </main>
        </>
    );
}