import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import '../App.css';
import PublicWork from './Public/Public';
import EducationWork from './Education/Education';
import MedicalWork from './Medical/Medical';
import CommercialWork from './Commercial/Commercial';
class WorkContent extends React.Component {
  render() {
    return (
      <div className="work-content flex-column">

          {/* Work Section Navigation */}

            <ul className="a-ht flex-row flex-betwen">
              <div>
              <Link to="/Work/Public">Public</Link>
              </div>

              
              <Link to="/Work/Education">Education</Link>
              <Link to="/Work/Medical">Medical</Link>
              <Link to="/Work/Commercial">Commercial</Link>
            </ul>

      {/* Work category displays */}

        <Switch className="a-ht">
          <Route path="/Work/Public" component={PublicWork}/>
          <Route path="/Work/Education" component={EducationWork}/>
          <Route path="/Work/Medical" component={MedicalWork}/>
          <Route path="/Work/Commercial" component={CommercialWork}/>
        </Switch>
      </div>
    )
  }
}

export default WorkContent;