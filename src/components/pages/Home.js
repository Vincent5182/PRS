import React, { useState, useEffect } from 'react'
import Header from '../misc/Header'
import './Home.css'

const columns = [
  ['We offer over 20 groups and classes each week, including:'], ['Member Services Include:'],
  ['​'], ['​'],
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
  ['​'],
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

const columns3 = [
  { heading: "MEN’S GROUP", body: "Calling All Men!!! This group is a place where men can openly share with each other; Learn honesty, humility, tolerance, compassion and patience with EVERYONE!"},
  { heading: "WOMEN’S GROUP", body: "Come share your life challenges and journeys with other women who can relate to you; Learn to build and rebuild healthy relationships and establish healthy boundaries with your loved ones and acquaintances."},
  { heading: "DUAL DISCOVERY", body: "If you struggle with an addiction and a mental illness — This is the group for you! Learn to deal effectively with current and/or past addiction(s) and mental health issues."},
  { heading: "STOP THE MADNESS!!!", body: "Are you angry at everyone and everything all the time? Do you feel like there is a volcano inside you, waiting to erupt? Learn the healthy ways to deal with your anger."},
  { heading: "SPIRITUALITY", body: "Do you enjoy meditation, guided imagery and other relaxation exercises? Join us and experience these techniques."},
  { heading: "NUTRITION/COOKING", body: "Are more nutritious meals on your menu? Learn about good nutrition and then use those techniques to prepare healthy meals at the next class. You must attend the nutrition class the week before the cooking class."},
  { heading: "HYGIENE, HEALTH & WELLNESS", body: "Come and improve your everyday living with mind, body and soul awareness; Learn skills to maintain your physical, emotional and mental health, allowing you to stay well in all of these areas." },
  { heading: "PEER SUPPORT", body: "Ever said, “I’ve been there!?!” If so, come share your experiences and help someone else. An opportunity to learn and share group wisdom for recovery from mental illnesses; New coping skills are shared each and every week!"},
  { heading: "STAND AND ACHIEVE", body: "Want to learn how to get what you need by advocating for yourself? Then you’ll love this class! You’ll learn how to be assertive, without being aggressive; How to ask for what you want in a way that allows others to hear you; The importance of timing; When to ask and when to wait for a better time."},
  { heading: "WRAP SUPPORT GROUP", body: "Looking for HOPE & POSITIVITY in your life? Join us as we create new ways to have a fun, fulfilling and positive lifestyle. Gain new motivation and learn more about the Wellness Recovery Action Plan (WRAP). Let’s celebrate our successes and gain support and tools for life’s challenges. MEMBERS ARE WELCOME!"},
  { heading: "W.R.A.P.", body: "Wellness Recovery Action Plan (W.R.A.P.) is a living plan of wellness and recovery; You will learn the five key concepts of recovery, communication and boundary skills, and how to build a support system, while creating your own living plan; W.R.A.P. includes: Daily Maintenance Plan; Identifying Your Triggers and Early Warning Signs; When Things are Breaking Down; Personal Crisis Plan. The goal of W.R.A.P. is to have more days of wellness, while being able to identify your challenges and having the ability to work through them in order to avoid CRISES; You will enjoy your life fully!!!"}
];

const doublePoints = () => {
  return (<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
    {columns.map((col) => {
      return <div >{col}</div>
    })}
  </div>)
}

const singlePoints = () => {
  return (<div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
    {columns2.map((col ) => {
      return <div >{col}</div>
    })}
  </div>)
}
const doubleClasses = () => {
  return (<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" , columnGap: "20px"}}>
    {columns3.map((col ) => {
      return (<div ><h4>{col.heading}</h4><div>{col.body}</div></div>)
    })}
  </div>)
}


const singleClasses = () => {
  return (<div style={{ display: "grid", gridTemplateColumns: "1fr"}}>
    {columns3.map((col ) => {
      return (<div ><h4>{col.heading}</h4><div>{col.body}</div></div>)
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
      <section  >
        <div className="bg-container title quote">
          A Place to DISCOVER, RECOVER & GROW. . .
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
        <section id="programs">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          {windowWidth > breakpoint ? doublePoints() : singlePoints()}
          <br></br>
          <br></br>
          <h2>  More of Our Groups and Classes:</h2>
          <br></br>
          {windowWidth > breakpoint ? doubleClasses() : singleClasses()}
        </div>
        </section>
      </section>
      <div className="appointment">
        <div className="appointment1">ONE-ON-ONE APPOINTMENTS</div>
        <div >​​</div>
        <div > Peer Recovery Coaches are available for one-on-one appointments Monday through Friday from 8:30 am - 9:00 am and 3:00 pm - 4:00 pm. You may need peer-support, work on a computer project together and/or work on a particular aspect of your wellness and recovery. We are here to listen and offer peer-support! We do not offer counseling or give advice. This is not a clinical counseling session. See or call the Front Desk Receptionist or Peer Recovery Coach to schedule your appointment.</div>
      </div>
      <br></br>
    </React.Fragment>
  )
}

export default Home;