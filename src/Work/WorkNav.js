import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


const workNavLinks = [
  {name: 'Public'},
  {name: 'Education'},
  {name: 'Medical'},
  {name: 'Commercial'}
]

function WorkNav (props) {
  const workActivate = (index) => props.workActivate(index)
  // const workIndex = props.workIndex
  const workNavMap = workNavLinks.map((proj,i)=>{
    return (
      <div onClick={workActivate(i)} className="work-link flex-row a-center j-center">
        <div className="a-ht">
            {proj.name}
        </div>
      </div>
    )
  })
    return (
      <div className="flex-row a-center work-nav">
          {workNavMap}
      </div>
        )
    }

export default WorkNav;