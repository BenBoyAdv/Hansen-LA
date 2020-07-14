import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import  WorkNav  from './WorkNav'
import PublicWork from './Public/PublicWork';

function WorkContent(props) {
    const workIndex = props.workIndex
    const workActivate = (index) => props.workActivate(index)
    const inMobile = props.inMobile
    return (
      <Router>
        <WorkNav workActivate={workActivate} workActive={workIndex}/>
      <div className="flex-col j-center a-center work-content">

        {/* <Switch className="a-ht"> */}
          <div className="project-container">
           
          <PublicWork workIndex={workIndex} inMobile={inMobile} />
          
          {/* <Route path="/Work/Education" component={EducationWork}/> */}
          {/* <Route path="/Work/Medical" component={MedicalWork}/> */}
          {/* <Route path="/Work/Commercial" component={CommercialWork}/> */}
          </div>
        {/* </Switch> */}
      </div>
      </Router>
    )
  
}

export default WorkContent;