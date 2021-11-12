/**
 * importing required necessary npm modules
 * importing link inbuilt modules for routing of pages
 * 
 */


import React, { Component } from 'react';
import './Landingpagee.css';
import { Link } from "react-router-dom";

/**
 * @description: Landing is responsible for the main interface of the website for sign in and registration
 * @returns JSX elements
 */



class Landingpage extends Component {
    render() {
        return (
            <>
            {/* // <!-- Start Header --> */}
<nav class="navbar" id="navbar">
  <div class="container">
    <a href="/" class="logo">Nike</a>
    <div class="nav-links">
      <a href="/a" class="fill">Home</a>
 
      <div class="toggle-menu scale-effect">
        <i class="fas fa-times"></i>
      </div>
    </div>
    <div class="toggle-menu scale-effect">
      <i class="fas fa-bars"></i>
    </div>
  </div>
</nav>
{/* // <!-- Landing Section --> */}
<section class="landing" id="welcome-section"  style={{textalign:"center"}}>
  <div class="container"  >
    <div class="text" >
      <h1 >Welcome to Nike store </h1>
     
      <p>Here You can visit store </p>
      <div class="btns-group">
        <a href="/Loginpage" class="btn btn-primary">Sign In</a>
        
       
        <Link to="/Signup">
                {" "}
                <input class="btn btn-primary" type="submit" value="SignUp" />
              </Link>

      </div>
    </div>
   
  </div>
</section>


                
            </>
        );
    }
}

export default Landingpage;  // exporting default landingpage to use in production
