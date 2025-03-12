import React from 'react'
import { HashLink } from 'react-router-hash-link';
import Testimonials from '../misc/Testimonials'
import Pricing from '../misc/Pricing'
import Header from '../misc/Header'

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            {/* <HashLink to="#top">Link to Top of Page</HashLink> */}
            {/* <Pricing />
            <Testimonials /> */}
              {/* <nav>
        <h3>Go to example page:</h3>
        <ul>
          <li>
            <HashLink to="/#section-one">Section One</HashLink>
          </li>
          <li>
            <HashLink to="/#section-two">Section Two</HashLink>
          </li>
          <li>
            <HashLink to="/#section-three">Section Three</HashLink>
          </li>
        </ul>
      </nav> */}
        <section className="content-container" id="about-us">
        <div > 
                    <h2>About Us</h2>
                    <p>
                    The Wellness Center (TWC) of San Joaquin County is a peer support program run by and for individuals with mental health challenges.
                    </p>

                    <p>
                    The Wellness Center provides an innovative approach to combining peer-support and recovery. Peers receive support from Peer Recovery Coaches who have ‘been there.’ Members learn coping skills as they develop greater independence and overcome the stigma of mental illness. Participants come to The Wellness Center to "Discover, Recover & Grow!"
                    </p>

                    <p>
                    The Wellness Center provides a safe and supportive community environment; participants find an atmosphere of acceptance, dignity and respect. Mutual knowledge is shared, and peers learn from one another.

                    </p>

                    <p>
                    Peer support services is an “evidence based practice.” Research shows that individuals receiving clinical services who also receive support from peer programs, have reduced need for expensive crisis services. The Wellness Center is for those with or without a diagnosis who wish to receive support for their mental health challenges.
                    </p>

                    <p>
                    TWC opened in 2008 as a collaborative effort between San Joaquin County Behavioral Health Services (SJCBHS), with the assistance of Central Valley Low Income Housing Corporation (CVLIHC). Today, Peer Recovery Services (the first peer-run organization in San Joaquin County and also a 501c3 nonprofit) has the contract to operate the Wellness Center.
                    </p>
                    <p>
                    The primary source of revenue for TWC is The Mental Health Services Act (MHSA). MHSA was passed by California voters in 2004 to provide a new approach to Mental Health Services. Insurance is not required.
                    </p>
                </div>
        </section>
        </React.Fragment>
    )
}

export default Home;