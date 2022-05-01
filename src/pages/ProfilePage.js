//React Components
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Page Components
import ProfileInfo from '../components/ProfileInfo';
import Orders from '../components/ProfileOrders';
import DeliveryAddress from '../components/DeliveryAddress';
import UpdateProfile from '../components/UpdateProfile'
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';
import YourBlogs from '../components/UserBlogs';
import Loader from '../components/Loader';


export default function Profile() 
{
    const [user, setUser] = useState();


    //retrieve the name from the url
    const {userName} = useParams();
    const name = nameSplit(userName);

    //split the name
    function nameSplit(name)
    {
        return name.split("_"); 
    }



    useEffect(() => {
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



    useEffect(() => {
        document.title = "Your Account | " + name[0] + " " + name[1];
    }, [name]);



    return (
        <>
            <main className='accountPage'>
                <h1>My Account</h1>
                {
                    user
                    ?
                    <>
                        <ProfileInfo name={name} userDetails={user}/>
                        {
                            user.type === "admin"
                            ?
                            <>
                                <AddProduct/>
                                <EditProduct/>
                            </>
                            :
                            null
                        }
                        <Orders/>
                        <DeliveryAddress/>
                        <YourBlogs/>
                        <UpdateProfile/>
                    </>
                    :
                    <Loader/>
                }
            </main>
        </>
    );
}