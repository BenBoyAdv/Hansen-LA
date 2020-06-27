import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkContent from './Work/WorkContent';
import AboutContent from './About/AboutContent';
import ContactContent from './Contact/ContactContent';
import HomeContent from './Home/HomeContent';
import NavLink from './Nav';
import './App.css';
// import Project from './Work/Project';

class App extends React.Component 
{
  state={inContent: false, inHome: true, inWork: false, isPageTransition: false, activePage: null}

  pageClick = (index) => {
    (index === 0) ?
    this.setState({inContent:false, inHome:true, activePage: index}): 
    this.setState({inContent: true, inHome: false, activePage:index})
}

  menuClick = () => {this.setState({inContent:false})}



  
  navLinks = [
    {name: 'HOME', divClass: 'link-text', class1: 'h-full nav-link flex-row a-end', pageIn: 'pageIn', pageOut: 'pageOut', onClick: this.pageClick, to: '/Home'},
    {name: 'WORK', divClass: 'link-text', class1: 'h-full nav-link flex-row a-end', pageIn: 'pageIn', pageOut: 'pageOut', onClick: this.pageClick, to: '/Work/Public'},
    {name: 'ABOUT', divClass: 'link-text', class1: 'h-full nav-link flex-row a-end', pageIn: 'pageIn', pageOut: 'pageOut', onClick: this.pageClick, to: '/About'},
    {name: 'CONTACT', divClass: 'link-text', class1: 'h-full nav-link flex-row a-end', pageIn: 'pageIn', pageOut: 'pageOut', onClick: this.pageClick, to: '/Contact'}
  ]
  render()
  {
    return (

      <div className="App">
        <Router>
        <div className="nav-bar flex-row a-end">
          <div className="h-full flex-row a-end icon-wrap"><div className={this.state.inContent? "icon icon2":"icon"}></div></div>
          <div className="company-wrap i-block"><div className='company-title'>Hansen LA</div></div>
          <div className="div-wrap flex-row a-center j-center"><div className="line-divider i-block"></div></div>
          <div className="flex-row h-full a-end">  
          {this.navLinks.map((navItem,i)=>{
            return (<NavLink
              name={navItem.name}
              index={i}
              pageClick={this.pageClick}
              divClass={navItem.divClass}
              class1={navItem.class1}
              destPath={navItem.to}
            />)
          })}
          </div>
        </div> 
        
        <div onClick={this.menuClick} className={this.state.inContent ? 'menu-button' : 'noClass'}></div>
        <div className={this.state.inHome ? 'content' :
          this.state.inContent && !this.state.inHome ? 'c-selected' : 'content'  
        }>
          <div className={this.state.inHome ? 'f-opac' :
          this.state.inContent && !this.state.inHome ? 'f-opac' : 'h-opac'  
        }>
          <Switch>
            <Route path="/Work/Public" component={WorkContent}/>
            <Route path="/About" component={AboutContent}/>
            <Route path="/Contact" component={ContactContent}/>
            <Route path="/" component={HomeContent}/>
          </Switch>
          </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
