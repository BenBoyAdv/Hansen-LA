import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import  WorkNav  from './WorkNav'
import PublicWork from './Public/PublicWork';
import EducationWork from './Education/Education';
import MedicalWork from './Medical/Medical';
import CommercialWork from './Commercial/Commercial';

// change to function
class WorkContent extends React.Component {

  // define inMobile

  render() {
    return (
      <Router>
        <WorkNav/>
      <div className="flex-col j-center a-center work-content">

        <Switch className="a-ht">
          <div className="project-container">

            {/* change to render 
            render={(props) => (
            <PublicWork {...props} isAuthed={true} />

            pass inMobile props
            */}

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