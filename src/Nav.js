import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {

  return (
        <nav className="nav-bar flex-row">
          <div className="icon self-bottom"></div>
          <div className="company-title self-bottom a-ht">Hansen LA</div>
          <div className="line-divider"></div>
          <div className="nav-selector flex-row self-bottom">
            <Link to="/Home" className="flex-row nav-link">
              <div className="a-ht self-bottom">HOME</div>
            </Link>
            <Link to="/Work" className="flex-row nav-link">
              <div className="a-ht self-bottom">WORK</div>
            </Link>
            <Link to="/About" className="flex-row nav-link">
              <div className="a-ht self-bottom">ABOUT</div>
            </Link>
            <Link to="/Contact" className="flex-row nav-link">
              <div className="a-ht self-bottom">CONTACT</div>
            </Link>
          </div>
        </nav>
  )
}

export default Nav;
