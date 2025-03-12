import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li>
                        <HashLink onClick={() => {
                            const checkBox = document.getElementById("menu-btn");
                            checkBox.checked = false
                        }} smooth to={'/#home'}>
                            Home
                        </HashLink>
                    </li>
                    <li>
                        <HashLink onClick={() => {
                            const checkBox = document.getElementById("menu-btn");
                            checkBox.checked = false
                        }} smooth to={'/#about-us'}>
                            About Us
                        </HashLink>
                    </li>
                    <li>
                        <HashLink onClick={() => {
                            const checkBox = document.getElementById("menu-btn");
                            checkBox.checked = false
                        }} smooth to={'/#programs'}>
                            Programs
                        </HashLink>
                    </li>
                    <li>
                        <HashLink onClick={() => {
                            const checkBox = document.getElementById("menu-btn");
                            checkBox.checked = false
                        }} smooth to={'/#contact-us'}>
                            Contact Us
                        </HashLink>
                    </li>
                    <li>
                        <HashLink smooth to={'https://www.gofundme.com/f/supporttwcsjpeerrecoveryservices'}>
                            GoFundMe
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;