import React from 'react';
import './reset.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkContent from './Work/WorkContent';
import AboutContent from './About/AboutContent';
import ContactContent from './Contact/ContactContent';
import HomeContent from './Home/HomeContent';
import EmailIcon from './Assets/Icons/email-icon-w.png';
import LinkedInIcon from './Assets/Icons/LI-In-Bug-w.png';
import FBIcon from './Assets/Icons/fb-icon-w.png';
import NavLink from './Nav';
import _ from 'lodash';
import './App.css';

class App extends React.Component 
{
  state={pageTransition: 0, activePage: 0, content: false, mobileMenu: null, inMobile:null, workActive:0}

  
  mobileBreak = () => {
    if ((this.state.inMobile === false && window.innerWidth < 710) || (window.innerWidth < 813 && window.innerHeight <= 420 )) 
    { 
      this.setState({inMobile: true, content:false, pageTransition:0})
    }
    else if (this.state.inMobile === true && window.innerWidth > 710) 
    {
      this.setState({inMobile:false, mobileMenu: null})
    }
    
  }
  getSize = _.throttle(function(){
    window.addEventListener("resize", this.mobileBreak)

  }, 2000)
  
  initSize = () => {
    if (this.state.inMobile === null) {
      setTimeout(()=>(
        window.innerWidth < 710 || (window.innerWidth < 813 && window.innerHeight <= 420 ) ? this.setState({inMobile: true}) :
        this.setState({inMobile: false})
      ),500)
    }
  }
  

  pageClick = (index) => {
    if (this.state.inMobile){this.mobileMenuClick()}
    this.state.inMobile ? this.setState({activePage: index}) :
    this.setState({activePage: index, pageTransition: 1, content: true})
    // setTimeout(()=>this.setState({activePage: index, pageTransition: 0}),1000)
  }
  
  workClick = () => {
    const index = this.state.activePage
    if (!this.state.inMobile){
    this.setState({activePage: index, pageTransition: 1, content: true})
    // setTimeout(()=>this.setState({activePage: index, pageTransition: 0, content:true}),1000)
    }
  }

  menuClick = () => {
    let index = this.state.activePage;
    this.setState({activePage: index, pageTransition: 2, content:false})
    setTimeout(()=>this.setState({activePage: index, pageTransition: 0, content:false}),1000)
  }
  

  mobileMenuClick = () => {
    let isMenu = this.state.mobileMenu;
    (isMenu === null || isMenu === 0) ? (this.setState({mobileMenu: 1})) :
    (this.setState({mobileMenu: 0}))
  }

  isActive = (index) => {
    return (
    (this.state.inMobile && this.state.mobileMenu === 1 && index < 3)? 'h-full nav-link-2 flex-row':  
    (this.state.inMobile && this.state.mobileMenu === 1)? 'h-full nav-link-2 nav-link-m flex-row':  
    (this.state.activePage !== 0 && this.state.activePage === index && this.state.pageTransition === 1) ?
    'h-full link-transition-in-A flex-row a-end' :
    (this.state.activePage !== 0 && this.state.activePage === index && this.state.pageTransition === 2) ? 
    'flex-row a-end link-transition-in-B' :
    (this.state.activePage > 0 && this.state.activePage !== index && this.state.pageTransition === 1)?
    'h-full link-transition-out-A flex-row a-end' :
    (this.state.activePage > 0 && this.state.activePage !== index && this.state.pageTransition === 2)?
    'h-full link-transition-out-B flex-row a-end' : 
    'h-full nav-link flex-row a-end' 
    )
  }

  workActivate = (index) => {
    this.setState({workActive: index})
  }

  
  navLinks = [
    {name: 'HOME', divClass: 'link-text', class1: this.isActive,  onClick: this.pageClick, to: '/Home'},
    {name: 'WORK', divClass: 'link-text', class1: this.isActive,  onClick: this.pageClick, to: '/Work/Public'},
    {name: 'ABOUT', divClass: 'link-text', class1: this.isActive,  onClick: this.pageClick, to: '/About'},
    {name: 'CONTACT', divClass: 'link-text', class1: this.isActive,  onClick: this.pageClick, to: '/Contact'}
  ]
  render()
  {
    
    window.addEventListener("resize", this.mobileBreak)
    this.initSize();
    return (
      
      <div className="App">
        <Router>
        <div className="nav-bar">

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
              HANSEN LA
            </div>
          </div>

          <div className={
            (this.state.activePage > 0 && this.state.pageTransition === 1) ? "div-wrap-transition-A":
            (this.state.activePage > 0 && this.state.pageTransition === 2) ? "div-wrap-transition-B":
            "div-wrap"
            }
          >
            <div className={
              (this.state.activePage > 0 && this.state.pageTransition === 1) ? "line-divider-transition-A":
              (this.state.activePage > 0 && this.state.pageTransition === 2) ? "line-divider-transition-B":
              "line-divider"
              }
            ></div>
          </div>

          <div onClick={this.mobileMenuClick} className="mobile-menu"></div>

          <div className="nav-selector">  
            {this.navLinks.map((navItem,i)=>{
              return (<NavLink
                name={navItem.name}
                key={navItem.name}
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
            (this.state.mobileMenu) ? 'content mobile-content-down' :
            (this.state.activePage === 0) ? 'content' :
            (this.state.activePage > 0 && this.state.pageTransition === 1) ? "content content-transition-A":
            (this.state.activePage > 0 && this.state.pageTransition === 2) ? "content content-transition-B":
            (this.state.activePage > 0 && this.state.pageTransition === 0 && this.state.content) ? 'c-selected' :
            (this.state.activePage && !this.state.content) ? 'content' :
            'content' 
          }
        >
          <div onClick={this.workClick} className={
            (this.state.activePage === 0 || this.state.inMobile) ? 'backToWork noClass-content' :
            (this.state.activePage > 0 && !this.state.content) ? 'backToWork' :
            'backToWork noClass-content'
          }>click to view</div>

          <div  className={(this.state.activePage === 0 || this.state.inMobile) ? 'f-opac' :
          (this.state.activePage > 0 && this.state.content) ? 'f-opac' : 'h-opac'  
          }>
            
          

          <Switch>

            {/* 
              change route component to render:
              render={(props) => (
              <Dashboard {...props} isAuthed={true} />

              pass inMobile states value
            */}

            <Route 
              path="/Work/Public" 
              render={() => <WorkContent workIndex={this.state.workActive} workActivate={this.workActivate}  inMobile={this.state.inMobile}/>}
            />
            <Route path="/About" component={AboutContent}/>
            <Route path="/Contact" component={ContactContent}/>
            <Route path="/" component={HomeContent}/>
          </Switch>
          </div>
        </div>
        <div className="footer">
            <a href="mailto: greg@hansenla.com">
              <img src={EmailIcon} alt="email"></img>
            </a>
            <a href="https://www.linkedin.com/in/gregory-a-hansen-00b01744/">
              <img src={LinkedInIcon} alt="Linkedin"></img>
            </a>
            <a href="#">
              <img src={FBIcon} alt="Facebook"></img>
            </a>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
