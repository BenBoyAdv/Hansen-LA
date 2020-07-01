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
  state={pageTransition: 0, activePage: 0, content: false}

  pageClick = (index) => {
    this.setState({activePage: index, pageTransition: 1, content: true})
    // setTimeout(()=>this.setState({activePage: index, pageTransition: 0}),1000)
  }
  
  workClick = () => {
    const index = this.state.activePage
    this.setState({activePage: index, pageTransition: 1, content: true})
    // setTimeout(()=>this.setState({activePage: index, pageTransition: 0, content:true}),1000)
  }

  menuClick = () => {
    let index = this.state.activePage;
    this.setState({activePage: index, pageTransition: 2, content:false})
    setTimeout(()=>this.setState({activePage: index, pageTransition: 0, content:false}),1000)
  }

  isActive = (index) => {
    return (
    (this.state.activePage !== 0 && this.state.activePage === index && this.state.pageTransition === 1) ?
    'h-full link-transition-in-A flex-row a-end' :
    (this.state.activePage !== 0 && this.state.activePage === index && this.state.pageTransition === 2) ? 
    'flex-row a-end link-transition-in-B' :
    // (this.state.activePage === index && this.state.pageTransition === 0) ?
    // 'h-full page-title flex-row a-end' :
    (this.state.activePage > 0 && this.state.activePage !== index && this.state.pageTransition === 1)?
    'h-full link-transition-out-A flex-row a-end' :
    (this.state.activePage > 0 && this.state.activePage !== index && this.state.pageTransition === 2)?
    'h-full link-transition-out-B flex-row a-end' : 
    // (this.state.activePage > 0 && this.state.activePage !== index && this.state.pageTransition === 0)?
    // 'h-full noClass flex-row a-end' : 
    'h-full nav-link flex-row a-end' 
    )
  }

  
  navLinks = [
    {name: 'HOME', divClass: 'link-text', class1: this.isActive,  onClick: this.pageClick, to: '/Home'},
    {name: 'WORK', divClass: 'link-text', class1: this.isActive,  onClick: this.pageClick, to: '/Work/Public'},
    {name: 'ABOUT', divClass: 'link-text', class1: this.isActive,  onClick: this.pageClick, to: '/About'},
    {name: 'CONTACT', divClass: 'link-text', class1: this.isActive,  onClick: this.pageClick, to: '/Contact'}
  ]
  render()
  {
    return (

      <div className="App">
        <Router>
        <div className="nav-bar flex-row a-end">

          <div className="h-full flex-row a-end icon-wrap">
            <div className={(this.state.activePage > 0 && this.state.content)? "icon icon2":"icon"}></div>
          </div>

          <div className={
            (this.state.activePage > 0 && this.state.pageTransition === 1) ? "company-wrap-transition-A" :
            (this.state.activePage > 0 && this.state.pageTransition === 2) ? "company-wrap-transition-B":
            "company-wrap"
            }
          >
            <div className={
              (this.state.activePage > 0 && this.state.pageTransition === 1) ? "company-title-transition-A" :
              (this.state.activePage > 0 && this.state.pageTransition === 2) ? "company-title-transition-B":
              "company-title"
              }
            >
              Hansen LA
            </div>
          </div>

          <div className={
            (this.state.activePage > 0 && this.state.pageTransition === 1) ? "div-wrap-transition-A flex-row a-center j-center":
            (this.state.activePage > 0 && this.state.pageTransition === 2) ? "div-wrap-transition-B flex-row a-center j-center":
            "div-wrap flex-row a-center j-center"
            }
          >
            <div className={
              (this.state.activePage > 0 && this.state.pageTransition === 1) ? "line-divider-transition-A":
              (this.state.activePage > 0 && this.state.pageTransition === 2) ? "line-divider-transition-B":
              "line-divider"
              }
            ></div>
          </div>

          <div className="flex-row h-full a-end">  
            {this.navLinks.map((navItem,i)=>{
              return (<NavLink
                name={navItem.name}
                index={i}
                isActive={this.isActive}
                pageClick={this.pageClick}
                divClass={navItem.divClass}
                class1={navItem.class1}
                destPath={navItem.to}
              />)
            })}
          </div>
        </div> 
        
        <div onClick={this.menuClick} className={(this.state.activePage !==0 && this.state.content) ? 'menu-button' : 'menu-button noClass'}></div>

        {/* content display settings */}

        <div className=
          {
            (this.state.activePage === 0) ? 'content' :
            (this.state.activePage > 0 && this.state.pageTransition === 1) ? "content content-transition-A":
            (this.state.activePage > 0 && this.state.pageTransition === 2) ? "c-selected content-transition-B":
            (this.state.activePage > 0 && this.state.pageTransition === 0 && this.state.content) ? 'c-selected' :
            (this.state.activePage && !this.state.content) ? 'content' :
            'content' 
          }
        >
          <div onClick={this.workClick} className={
            (this.state.activePage === 0) ? 'backToWork noClass' :
            (this.state.activePage > 0 && !this.state.content) ? 'backToWork' :
            'backToWork noClass'
          }></div>

          <div  className={(this.state.activePage === 0) ? 'f-opac' :
          (this.state.activePage > 0 && this.state.content) ? 'f-opac' : 'h-opac'  
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
