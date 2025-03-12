import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'

const MenuBar = () => {
    return (
        <footer >
            <div className="footer">
            <div > 
            <p>
            San Joaquin County BHS Consumer Support Warm Line 24/7 | (209) 468-3585
                    </p>
                    <p>
                    San Joaquin County Mental Health Crisis Line | (209) 468-8686
                    </p>
                    </div>
                    <br>
                         
                         </br>
                         <br>
                         
                         </br>

                         <p>
                         The Wellness Center
                    </p>

                    <p>
                    1109 N. California Street, Stockton, CA 95202-1537
                    </p>
                    <p>
                    (209) 451-3977
                    </p>
                    <p>
                    Fax line (209) 888-4798
                    </p>
                    <Link to="https://www.gofundme.com/f/supporttwcsjpeerrecoveryservices">
                    <img  width={300} height={150} src={require('./../../images/gofundme.png')} />
</Link>
                
                    <br>
                         
                         </br>
                    <br>
                         
                    </br>
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link href="/AboutUs">About Us</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                </ul> */}

                {/* <ul className="social">
                    <li>
                        <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com"><i className="fa fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a>
                    </li>
                </ul> */}

                <p>Designed by Vincent Teas</p>
            </div>
        </footer>
    )
}

export default MenuBar;