import React from 'react'
import { HashLink } from 'react-router-hash-link';

import { Link } from "react-router-dom"
import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <input className="menu-btn" type="checkbox" id="menu-btn" />
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
                    <li>
                        <HashLink smooth to={'/#programs'}>
                           Programs
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to={'/#contact-us'}>
                            Contact Us
                        </HashLink>
                    </li>
                    <li>
                    <Link to="https://www.gofundme.com/f/supporttwcsjpeerrecoveryservices">
                   GoFundMe
                </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;