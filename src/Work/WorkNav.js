import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function WorkNav () {
    return (
      <div className="flex-row a-center  work-nav">
          <Link to="/Work/Public" className="work-link flex-row a-center j-start">
            <div>Public</div>
          </Link>
          <Link to="/Work/Education" className="work-link flex-row a-center j-center">
            <div>Education</div>
          </Link>
          <Link to="/Work/Medical" className="work-link flex-row a-center j-center">
            <div>Medical</div>
          </Link>
          <Link to="/Work/Commercial" className="work-link flex-row a-center j-end">
            <div>Commercial</div>
          </Link>
        </div>
        )
    }

export default WorkNav;