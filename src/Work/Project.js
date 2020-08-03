import React from 'react';
import RotateIcon from '../Assets/Icons/PhoneRotate_1.png';
import '../App.css';
import '../Work/ProjectPhotos.css';

class Project extends React.Component

{

  state={activeSlide:0}

  handleClick = () => {
    this.props.handleClick(this.props.index)
  }

  closeBox = () => {
    this.props.closeBox(this.props.index)
    this.setState({activeSlide:0})
  }

  nextSlide = () => {
    let slideIndex = this.state.activeSlide;
    (slideIndex < this.props.projectPhotos.length -1 ) ? slideIndex++ : (slideIndex = 0)
    this.setState({activeSlide: slideIndex})
  }

  prevSlide = () => {
    let slideIndex = this.state.activeSlide;
    (slideIndex > 0) ? slideIndex-- : (slideIndex = this.props.projectPhotos.length -1 )
    this.setState({activeSlide: slideIndex})
  }

  
 
  ifProjectBox = () => {
    if (!this.props.isHeading) {
      return (
        <div id=
            "project-activate-window"
          onClick={!this.props.anyActive ? this.handleClick : console.log('click-off')}
          className={this.props.isHeading ? '' : 'select-project'}
        >
          {!this.props.isActive || this.props.isTransition ? `${this.props.name}` : ''}
          <div id="close-box"
            onClick={this.closeBox}
            className=
            {
              (this.props.isActive && this.props.isTransition) ? 'noClass' :
              this.props.isActive ? 'close-button' : 'noClass'
            }
          ></div>
          <div className=
            {
              (this.props.isActive && this.props.isTransition) ? 'noClass' :
              this.props.isActive ? 'control-box' : 'noClass'
            }>
            <div
            className=
            {
              (this.props.isActive && this.props.isTransition) ? 'noClass' :
              this.props.isActive ? 'slideControls left-slide' : 'noClass'
            }
            onClick={this.prevSlide}></div>
            <div 
            className=
            {
              (this.props.isActive && this.props.isTransition) ? 'noClass' :
              this.props.isActive ? 'slideControls right-slide' : 'noClass'
            }
            onClick={this.nextSlide}></div>
          </div>
          
        </div>
      )
    }
  }



  projectDisplayType = () => {
    
      return (
        (this.props.isActive && this.props.isTransition) ? `a-transition ${this.props.projectPhotos[this.state.activeSlide]}` : 
        this.props.isActive ? `active ${this.props.projectPhotos[this.state.activeSlide]}` : 
        (!this.props.isActive && this.props.isTransition && this.props.isHeading) ? `section-head` : 
        (!this.props.isActive && this.props.isTransition) ? `b-transition ${this.props.projectPhotos[this.state.activeSlide]}` : 
        (this.props.anyActive && this.props.isHeading) ? `section-head header-shrink` : 
        this.props.anyActive ? `inactive ${this.props.projectPhotos[this.state.activeSlide]}` : 
        this.props.isHeading ? `section-head` :
        `project-box ${this.props.projectPhotos[this.state.activeSlide]}`
        )
        
      
  }
  
  render(){     
    return(
      <div
        id={this.props.name}
        loading="lazy"
        className=
        {
          this.projectDisplayType()
        }
      >
        
        {this.props.heading}
        {this.ifProjectBox()}
        <div className={this.props.inMobile && this.props.isActive && !this.props.isTransition ? 'rotate-icon' : 'noDisplay'}>
            <img src={RotateIcon} alt="rotate phone"></img>
          </div>
        
      </div>
    )
  }          
}

export default Project;
