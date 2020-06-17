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
      
        <nav className="NavBar FContainer">
          <div className="Icon FBox"></div>
          <div className="CompanyTitle FBox FContainer">
            <p>Hansen LA</p>
          </div>
          <div className="Divider FBox"></div>
          <div className="NavSelector FContainer FBox">
            <ul className="FBox FContainer">
              <li className="FBox FContainer">
                <Link to="/Work">WORK</Link>
              </li>
              <li className="FBox FContainer">
                <Link to="/About">ABOUT</Link>
              </li>
              <li className="FBox FContainer">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
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
