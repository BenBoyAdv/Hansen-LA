import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function WorkNav () {
    return (
      <div className="flex-row a-center work-nav">
          <Link to="/Work/Public" className="work-link flex-row a-center j-center">
            <div className="a-ht">Public</div>
          </Link>
          <Link to="/Work/Education" className="work-link flex-row a-center j-center">
            <div className="a-ht">Education</div>
          </Link>
          <Link to="/Work/Medical" className="work-link flex-row a-center j-center">
            <div className="a-ht">Medical</div>
          </Link>
          <Link to="/Work/Commercial" className="work-link flex-row a-center j-center">
            <div className="a-ht">Commercial</div>
          </Link>
        </div>
        )
    }

export default WorkNav;