//React Components
import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

//CSS 
import '../css/style.css';

//Page Components
import BlogPost from '../components/BlogPost';
import Loader from '../components/Loader';
import SortBy from '../components/BlogFilter';



export default function BlogPostList() 
{
    const [user, setUser] = useState();
    const [page, setPage] = useState(0);
    const [blogs, setBlogs] = useState([]);
    const [sortBy, setSortBy] = useState('ascend');


    //Upon page render
    useEffect(() => {
        document.title = "Hardwaredeck | Blog posts";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        //temp product
        const tempBlogs = [
            {
                id: 1,
                title: 'This is blog 1',
                date: '29/1/2019',
                content: 'Hello this is a blog 1',
                user: 'strongest avenger'
            },
            {
                id: 2,
                title: 'This is blog 2',
                date: '10/2/2000',
                content: 'Hello this is a blog 2',
                user: 'strongest avenger'
            },
            {
                id: 3,
                title: 'This is blog 3',
                date: '1/5/2022',
                content: 'Hello this is a blog 3',
                user: 'strongest avenger'
            },
            {
                id: 4,
                title: 'This is blog 4',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 5,
                title: 'This is blog 5',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 6,
                title: 'This is blog 6',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 7,
                title: 'This is blog 7',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 8,
                title: 'This is blog 8',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 9,
                title: 'This is blog 9',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 10,
                title: 'This is blog 10',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 11,
                title: 'This is blog 11',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 12,
                title: 'This is blog 12',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 13,
                title: 'This is blog 13',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 14,
                title: 'This is blog 14',
                date: '10/2/2000',
                content: 'Hello this is a blog',
                user: 'strongest avenger'
            },
            {
                id: 15,
                title: 'This is blog 15',
                date: '10/2/2000',
                content: 'Hello this is a blog',
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




    //page number changes go back to top of the screen
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [page]);




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


    //number of products per screen
    const blogsPerPage = 10;

    let totalPages;
    //Slice products array to display only a select few on screen
    function pagination()
    {
        const sortedBlogs = sortBlogs();
        const numberOfRecordsVisited = page * blogsPerPage;

        //will get the records to be display on screen
        const displayProducts = sortedBlogs.slice(numberOfRecordsVisited, numberOfRecordsVisited + blogsPerPage);

        //calculate the total number of pages
        totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

        return displayProducts;
    }



    //change the page number
    function changePage({selected})
    {
        setPage(selected);
    }





    return (
        <>
            <main>
                <h1>Blogs</h1>
                <section className='blogsSection'>
                    <SortBy setSortBy={setSortBy} user={user}/>
                    <div className='itemContainer'>
                        {
                            blogs
                            ?
                            pagination().map(blog => {
                                return <BlogPost blog={blog} key={blog.id}/>
                            })
                            :
                            <Loader/>
                        }
                    </div>
                </section>

                {
                    totalPages > 1
                    ?
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={totalPages}
                        onPageChange={changePage}

                        containerClassName={"navigationButtons"}
                        previousLinkClassName={"previousButton"}
                        nextLinkClassName={"nextButton"}
                        disabledClassName={"navigationDisabled"}
                        activeClassName={"navigationActive"}
                    />
                    :
                    null
                }
            </main>
        </>
    );
}