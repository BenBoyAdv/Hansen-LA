import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import '../App.css';
import  WorkNav  from './WorkNav'
import PublicWork from './Public/PublicWork';
import EducationWork from './Education/Education';
import MedicalWork from './Medical/Medical';
import CommercialWork from './Commercial/Commercial';
class WorkContent extends React.Component {
  render() {
    return (
      <Router>
        <WorkNav/>
      <div className="flex-col j-center a-center work-content">
          {/* Work Section Navigation */}
            
      {/* Work category displays */}

        <Switch className="a-ht">
          <div className="project-container flex-col j-center">
          <Route path="/Work/Public" component={PublicWork}/>
          <Route path="/Work/Education" component={EducationWork}/>
          <Route path="/Work/Medical" component={MedicalWork}/>
          <Route path="/Work/Commercial" component={CommercialWork}/>
          </div>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default WorkContent;