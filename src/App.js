import React from 'react'
import {
  BrowserRouter as Router, 
  Routes ,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import './App.css';
  
function App() {
  return (
    // class for header
    <div className="body-wrap">
      <Router>
        <Layout>
          <Routes >
          <Route path={'/'} element={<Home />}></Route>
          </Routes >
        </Layout>
      </Router>
    </div>
  );
}

export default App;
