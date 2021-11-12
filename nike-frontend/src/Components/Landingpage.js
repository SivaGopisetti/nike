/**
 * importig the react component from react
 * 
 */
import React, { Component } from 'react';
import './Landingpagee.css';
import { Link } from "react-router-dom";


class Dashboard extends Component {
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

export default Dashboard;
