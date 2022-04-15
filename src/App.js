//import logo from './logo.svg';
import './App.css';

//React Components
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Products from './pages/ProductsListPage';
import Product from './pages/ProductPage';
import Profile from './pages/ProfilePage';
import Checkout from './pages/CheckoutPage';
import Error from './pages/ErrorPage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';

//Page Components
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';




//Main hub for the website
export default function App() 
{
  const [loggedIn, setLoggedIn] = useState(false);

  const [showNav, setShowNav] = useState(false);
  const [displayBackToTopBTN, setBackToTopBTN] = useState(false);

  
  useEffect(() => {
    const test = localStorage.getItem('logged_in');
    if(test)
    {
      setLoggedIn(test);
    }
    else
    {
      setLoggedIn(false);
    }
  }, []);


  //Display Navigation sidebar function
  function displayNav()
  {
      const menu_btn = document.getElementById("menu_btn");
      const lines = menu_btn.querySelectorAll("div.line");

      setShowNav(!showNav);

      lines.forEach(line => {
          if(!showNav)
          {
              line.classList.add("cross");
              document.body.classList.add("stopScroll");
          }
          else
          {
              line.classList.remove("cross");
              document.body.classList.remove("stopScroll");
          }
      });
  }





  //Onscroll to display button to go back to top
  window.onscroll = function()
  {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
    {
      setBackToTopBTN(true);
    }
    else
    {
      setBackToTopBTN(false);
    }
  }



  const user = {
    fname: "Matthew",
    lname: "Shaw",
    email: "test@test.com",
    password: "password",
    type: "admin",
    phone: 354456453
  };


  return (
    <Router>

      <div className='grid_container'>

        <Header displayNavMethod={displayNav}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                userDetails={user}/>
        
        <NavMenu displayNav={showNav} 
                 displayNavMethod={displayNav} 
                 loggedIn={loggedIn} 
                 userDetails={user}/>

        <Routes>
          <Route path="/" element={<Home/>} index exact/>
          <Route path="/products" element={<Products/>} exact/>
          <Route path="/view" element={<Product/>} exact/>
          <Route path="/my_account/:userName" element={<Profile/>} exact/>
          <Route path="/checkout" element={<Checkout/>} exact/>
          <Route path="*" element={<Error/>}/>

          <Route path="/signin" element={<Login user={user} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        
        {displayBackToTopBTN && <BackToTop/>}

        <Footer loggedIn={loggedIn} userDetails={user}/>

      </div>
    </Router>
  );
}