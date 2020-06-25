import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Nav extends React.Component 
{
  pageClick = () => this.props.pageClick()
  homeClick = () => this.props.homeClick()
  render()
  {
    return (
      // <div className="nav-div">
          <nav className={this.props.inContent ? "nav-out flex-row" : "nav-bar flex-row"}>
            <div className={this.props.inContent ? "icon icon2": "icon"}></div>
            <div className="company-title self-bottom a-ht">Hansen LA</div>
            <div className="line-divider"></div>
            <div className="nav-selector flex-row self-bottom">
              <Link onClick={this.homeClick} to="/Home" className="flex-row nav-link a-end">
                <div className="a-ht">HOME</div>
              </Link>
              <Link onClick={this.pageClick} to="/Work/Public" className="flex-row nav-link a-end">
                <div className="a-ht">WORK</div>
              </Link>
              <Link onClick={this.pageClick} to="/About" className="flex-row nav-link a-end">
                <div className="a-ht">ABOUT</div>
              </Link>
              <Link onClick={this.pageCLick} to="/Contact" className="flex-row nav-link a-end">
                <div className="a-ht">CONTACT</div>
              </Link>
            </div>
          </nav>
      // </div>
    )
  }
}

export default Nav;
