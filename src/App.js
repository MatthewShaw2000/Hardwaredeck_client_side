//import logo from './logo.svg';
import './App.css';

//React Components
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Products from './pages/ProductsListPage';
import Product from './pages/ProductPage';
import Profile from './pages/ProfilePage';
import Checkout from './pages/CheckoutPage';
import Blog from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage'
import Cart from './pages/CartPage';
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
  const [user, setUser] = useState();

  const [showNav, setShowNav] = useState(false);
  const [catDropdown, setCatDropdown] = useState(false);
  const [displayBackToTopBTN, setBackToTopBTN] = useState(false);

  
  //If user has logged in set user useState
  useEffect(() => {
    const getUser = sessionStorage.getItem('user');
    if(getUser)
    {
      const loggedInUser = JSON.parse(getUser);
      setUser(loggedInUser);
    }
  }, []);





  //Display Navigation sidebar function
  function displayNav()
  {
    setShowNav(!showNav);
  }
  useEffect(() => {
    const menu_btn = document.getElementById("menu_btn");
    const lines = menu_btn.querySelectorAll("div.line");
    
    lines.forEach(line => {
      if(showNav)
      {
          line.classList.add("cross");
          document.body.classList.add("stopScroll");
      }
      else
      {
          line.classList.remove("cross");
          document.body.classList.remove("stopScroll");
          setCatDropdown(false);
      }
    });
  }, [showNav]);



  
  function categoryDropdown()
  {
      setCatDropdown(!catDropdown);
  }
  //display shop dropdown
  useEffect(() => {
    const shopButton = document.getElementsByClassName('shopButton')[0];
    const categoryDropdown = document.getElementsByClassName('categoryDropdown')[0];
    const shopBtnArrow = document.getElementById('shopBtnArrow');

    if(catDropdown === true)
    {
        shopButton.classList.add('active');
        categoryDropdown.classList.add('activeDropdown');
        shopBtnArrow.classList.add('activeDropdownArrow');
    }
    else
    {
        shopButton.classList.remove('active');
        categoryDropdown.classList.remove('activeDropdown');
        shopBtnArrow.classList.remove('activeDropdownArrow');
    }
  }, [catDropdown]);





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



  return (
    <Router>

      <div className='grid_container'>

        <Header displayNavMethod={displayNav}
                user={user}
                setUser={setUser}/>
        
        <NavMenu displayNav={showNav} 
                 displayNavMethod={displayNav} 
                 user={user}
                 setUser={setUser}
                 categoryDropdown={categoryDropdown}/>

        <Routes>
          <Route path="/" element={<Home/>} index exact/>
          <Route path="/shop" element={<Products/>} exact/>
          <Route path="/shop/cat/:catName" element={<Products/>} exact/>
          <Route path="/products/view/:productName" element={<Product/>} exact/>
          <Route path="/my_account/:userName" element={<Profile/>} exact/>
          <Route path="/checkout" element={<Checkout/>} exact/>
          <Route path="/blog" element={<Blog/>} exact/>
          <Route path="/blog/:blogPost" element={<BlogPostPage/>} exact/>
          <Route path="/cart" element={<Cart/>} exact/>
          <Route path="*" element={<Error/>}/>

          <Route path="/signin" element={<Login setUser={setUser}/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        
        {displayBackToTopBTN && <BackToTop/>}

        <Footer user={user}/>

      </div>
    </Router>
  );
}