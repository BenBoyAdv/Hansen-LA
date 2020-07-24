import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import PublicWork from './Public/PublicWork';

function WorkContent(props) {
    const workIndex = props.workIndex
    const workActivate = (index) => props.workActivate(index)
    const inMobile = props.inMobile
    const contentAdjust = () => {
      return inMobile ? 'work-content flex-col j-start' : 'flex-col j-center a-center work-content'
    }
    return (
      <Router>
        {/* <WorkNav workActivate={workActivate} workActive={workIndex}/> */}
      <div className={contentAdjust()}>

        {/* <Switch className="a-ht"> */}
          <div className="project-container">
           
          <PublicWork workIndex={workIndex} inMobile={inMobile} />
          {/* <Route path="/Work/Education" component={EducationWork}/> */}
          {/* <Route path="/Work/Medical" component={MedicalWork}/> */}
          {/* <Route path="/Work/Commercial" component={CommercialWork}/> */}
          </div>
        {/* </Switch> */}
      </div>
          <div className="work-fade"></div>
      </Router>
    )
  
}

export default WorkContent;