import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import WorkContent from './Work/WorkContent';
import AboutContent from './About/AboutContent';
import ContactContent from './Contact/ContactContent';
import HomeContent from './Home/HomeContent'
import './App.css';

function App() {


  return (
    <div className="App">
      
        <nav className="FContainer NavBar">
          <ul className="FContainer FBox">
            <li className="Icon FBox"></li>
            <li className="CompanyTitle FBox FContainer">
              <p>Hansen LA </p>
            </li>
            <li className="Divider FBox"></li>
            <div className="NavSelector FBox FContainer">
              <li className="FBox FContainer">
                <Link to="/">HOME</Link>
              </li>
              <li className="FBox FContainer">
                <Link to="/Work">WORK</Link>
              </li>
              <li className="FBox FContainer">
                <Link to="/About">ABOUT</Link>
              </li>
              <li className="FBox FContainer">
                <Link to="/Contact">CONTACT</Link>
              </li>
            </div>
          </ul>
        </nav>
    
      <div className="Content">
        <Switch>

          <Route path="/Work">
            <WorkContent/>
          </Route>

          <Route path="/About">
            <AboutContent/>
          </Route>

          <Route path="/Contact">
            <ContactContent/>
          </Route>

          <Route path="/">
            <HomeContent/>
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
