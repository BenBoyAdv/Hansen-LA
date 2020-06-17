import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkContent from './Work/WorkContent';
import AboutContent from './About/AboutContent';
import ContactContent from './Contact/ContactContent';
import HomeContent from './Home/HomeContent';
import Nav from './Nav';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
      <Nav/>
      <div className="content">
        <Switch>
          <Route path="/Work" component={WorkContent}/>
          <Route path="/About" component={AboutContent}/>
          <Route path="/Contact" component={ContactContent}/>
          <Route path="/" component={HomeContent}/>

        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
