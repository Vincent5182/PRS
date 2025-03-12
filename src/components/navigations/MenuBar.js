import React from 'react'
import { HashLink, NavHashLink } from 'react-router-hash-link';

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                {/* <a className="logo" href='/'>Your Logo</a> */}
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                <li>
 <HashLink smooth to={'/#home'}>
           Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to={'/#about-us'}>
           About Us
            </HashLink>
          </li>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    <li><a href="/ContactUs">Contact Us</a></li>                 */}
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;