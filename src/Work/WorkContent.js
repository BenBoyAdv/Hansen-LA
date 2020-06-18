import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import '../App.css';
import  WorkNav  from './WorkNav'
import PublicWork from './Public/Public';
import EducationWork from './Education/Education';
import MedicalWork from './Medical/Medical';
import CommercialWork from './Commercial/Commercial';
class WorkContent extends React.Component {
  render() {
    return (
      <Router>
      <div className="flex-col a-center work-content">
          {/* Work Section Navigation */}
        <WorkNav/>
            
      {/* Work category displays */}

        <Switch className="a-ht">
          <Route path="/Work/Public" component={PublicWork}/>
          <Route path="/Work/Education" component={EducationWork}/>
          <Route path="/Work/Medical" component={MedicalWork}/>
          <Route path="/Work/Commercial" component={CommercialWork}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default WorkContent;