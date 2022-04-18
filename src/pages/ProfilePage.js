//React Components
import React, {useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';

//CSS 
import '../css/style.css';

//Page Components
import ProfileInfo from '../components/ProfileInfo';
import Orders from '../components/ProfileOrders';
import DeliveryAddress from '../components/DeliveryAddress';
import UpdateProfile from '../components/UpdateProfile'
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';


export default function Profile() 
{
    //retrieve the name from the url
    const {userName} = useParams();
    const name = nameSplit(userName);

    //split the name
    function nameSplit(name)
    {
        return name.split("_"); 
    }

    //retrive passed state data
    const location = useLocation();
    const userDetails = location.state;


    useEffect(() => {
        document.title = "Your Account | " + name[0] + " " + name[1];
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.body.classList.remove("stopScroll");
    }, []);


    return (
        <>
            <main className='accountPage'>
                <h1>My Account</h1>
                <ProfileInfo name={name} userDetails={userDetails}/>
                <DeliveryAddress/>
                <UpdateProfile/>
                <Orders/>
                <AddProduct/>
                <EditProduct/>
            </main>
        </>
    );
}