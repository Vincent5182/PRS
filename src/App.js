import React from 'react'
// import { Routes, Route } from 'react-router-dom';
import {
  BrowserRouter as Router, 
  Routes ,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import { HashLinkPage } from './components/pages/HashLinkPage';
import './App.css';
  
function App() {
  return (
    // class for header
    <div className="body-wrap">

      <Router>
        <Layout>
          <Routes >

          <Route path={'/'} element={<Home />}></Route>
          {/* <Route path={'/page'} element={<HashLinkPage />}></Route> */}
          {/* <Route path={'/'} element={<Home />}></Route>
            <Route path={'/AboutUs'} element={<AboutUs />}></Route>
            <Route path={'/ContactUs'} element={<ContactUs />}></Route> */}
          </Routes >
        </Layout>
      </Router>
    </div>
  );
}

export default App;
