import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class NavLink extends React.Component 
{
  pageClick = () => this.props.pageClick(this.props.index)
  isActive = () => this.props.isActive(this.props.index)
 
  render()
  {
    return (
          
      <Link
        className={this.isActive()} 
        onClick={this.pageClick} 
        to={this.props.destPath}
      >
        <div className={this.props.divClass}>{this.props.name}</div>
      </Link>
    )
  }
}

export default NavLink;
