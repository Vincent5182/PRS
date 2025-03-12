import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'

const MenuBar = () => {
    return (
        <footer >
               <section id="contact-us">
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
                    <img width={150} height={80} src={require('./../../images/gofundme.png')} />
                </Link>
                <p>Designed by Vincent Teas</p>
            </div>
            </section>
        </footer>
    )
}

export default MenuBar;