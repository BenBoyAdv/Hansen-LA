import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import  WorkNav  from './WorkNav'
import PublicWork from './Public/PublicWork';
import EducationWork from './Education/Education';
import MedicalWork from './Medical/Medical';
import CommercialWork from './Commercial/Commercial';

function WorkContent(props) {
    const workIndex = props.workIndex
    const workActivate = props.workActivate
    const inMobile = props.inMobile
    return (
      <Router>
        <WorkNav workActivate={workActivate} workActive={workIndex}/>
      <div className="flex-col j-center a-center work-content">

        <Switch className="a-ht">
          <div className="project-container">
          <Route 
            path="/Work/Public" 
            render={() => <PublicWork inMobile={inMobile} />}
          />
          <Route path="/Work/Education" component={EducationWork}/>
          <Route path="/Work/Medical" component={MedicalWork}/>
          <Route path="/Work/Commercial" component={CommercialWork}/>
          </div>
        </Switch>
      </div>
      </Router>
    )
  
}

export default WorkContent;