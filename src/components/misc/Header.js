import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
             <section  id="home">
            {/* <header className="bg-image"> */}
            <header>
                <div className="bg-container title">
                    <h1>The Wellness Center</h1>
                    <h2>of San Joaquin County</h2>
                    {/* <Link to="/">Book Now!</Link> */}
                </div>
            </header>
            </section>
        </React.Fragment>
    )
}

export default Header;