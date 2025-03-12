import React, { useState, useEffect } from 'react'
import Header from '../misc/Header'
import './Home.css'

const columns = [
  ['We offer over 20 groups and classes each week, including:'], ['Member Services Include:'],
  ['​'], , ['​'],
  ['☑ Goal Setting'], ['☑ Community Resources and Referrals'],
  ['☑ Learning Your Illness'], ['☑ Computer Lab'],
  ['☑ Personal Growth'], ['☑ Fax Service'],
  ['☑ Playing for Recovery'], ['☑ Transportation for Food Bank & Shopping'],
  ['☑ Sleep Hygiene'], ['☑ Mobile Farmers\' Market (monthly)'],
  [''], ['☑ Self-Help Library'],
  [''], ['☑ Telephone Use']
];

const columns2 = [
  ['We offer over 20 groups and classes each week, including:'], ['​'],
  ['☑ Goal Setting'], ['☑ Learning Your Illness'], ['☑ Personal Growth'], ['☑ Sleep Hygiene'], ['☑ Playing for Recovery'],
  ['​'],
  ['Member Services Include:'],
  ['​'],
  ['☑ Community Resources and Referrals'],
  ['☑ Computer Lab'],
  ['☑ Fax Service'],
  ['☑ Transportation for Food Bank & Shopping'],
  ['☑ Mobile Farmers\' Market (monthly)'],
  ['☑ Self-Help Library'],
  ['☑ Telephone Use']
];

const doublePoints = () => {
  return (<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
    {columns.map((col) => {
      return <div>{col}</div>
    })}
  </div>)
}

const singlePoints = () => {
  return (<div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
    {columns2.map((col) => {
      return <div>{col}</div>
    })}
  </div>)
}

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <section >
        <div className="bg-container title">
          <quote>
            A Place to DISCOVER, RECOVER & GROW. . .
          </quote>
        </div>
      </section>
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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="container">
          {windowWidth > breakpoint ? doublePoints() : singlePoints()}
          <br></br>
        </div>
      </section>
      <appointment>
        <div className="appointment1">  ONE-ON-ONE APPOINTMENTS</div>
        <div >​​</div>
        <div className="appointment2">       Peer Recovery Coaches are available for one-on-one appointments Monday through Friday from 8:30 am-9:00 am and 3:00 pm-4:00 pm. You may need peer-support, work on a computer project together and/or work on a particular aspect of your wellness and recovery. We are here to listen and offer peer-support! We do not offer counseling or give advice. This is not a clinical counseling session. See or call the Front Desk Receptionist or Peer Recovery Coach to schedule your appointment.</div>
      </appointment>
    </React.Fragment>
  )
}

export default Home;