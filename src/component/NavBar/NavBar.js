import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Assest/image/logo.png";
import './NavBar.css';

const NavBar = () => {
    return (
       <nav>
            <div className='logo-container'>
            <img src={Logo} alt=''/>
           </div>
           <div className='link-container'>
              <Link className='link' to="/">Home</Link>
              <Link className='link'to="/videos">Videos</Link>
              <Link className='link' to="/login">Login</Link>
           </div>
       </nav>
    );
};

export default NavBar;