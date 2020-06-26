import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Nav extends React.Component 
{
  pageClick = () => this.props.pageClick()
  homeClick = () => this.props.homeClick()
  workClick= () => this.props.workClick()
  navLinks = [
    {name: 'HOME', divClass: 'link-text', class1: 'i-block nav-link', onClick: this.homeClick, to: '/Home'},
    {name: 'WORK', divClass: 'link-text', class1: 'i-block nav-link', onClick: this.workClick, to: '/Work/Public'},
    {name: 'ABOUT', divClass: 'link-text', class1: 'i-block nav-link', onClick: this.pageClick, to: '/About'},
    {name: 'CONTACT', divClass: 'link-text', class1: 'i-block nav-link', onClick: this.pageClick, to: '/Contact'},
  ]
  render()
  {
    return (
      // <div className="nav-div">
          <nav className='nav-bar'>
            <div className="icon-wrap"><div className="icon i-block"></div></div>
            <div className="company-wrap i-block"><div className='company-title'>Hansen LA</div></div>
            <div className="div-wrap"><div className="line-divider i-block"></div></div>
            
            {this.navLinks.map((proj) => {
              return (<Link
                className={proj.class1} 
                onClick={proj.onClick} 
                to={proj.to}
              >
              <div className={proj.divClass}>{proj.name}</div>
              </Link>)
            })}

          </nav>
      // </div>
    )
  }
}

export default Nav;
