import React from 'react';
import '../App.css';
import { noConflict } from 'lodash';


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

  projectDisplayType = () => {
    if (this.props.inMobile === false) {
      return (
        (this.props.isActive && this.props.isTransition) ? `a-transition ${this.props.projectPhotos[this.state.activeSlide]}` : 
        this.props.isActive ? `active ${this.props.projectPhotos[this.state.activeSlide]}` : 
        (!this.props.isActive && this.props.isTransition) ? `b-transition ${this.props.projectPhotos[this.state.activeSlide]}` : 
        this.props.anyActive ? `inactive ${this.props.projectPhotos[this.state.activeSlide]}` : `project-box ${this.props.projectPhotos[this.state.activeSlide]}`
      )
      
    } else if (this.props.inMobile === true) {
      return (`project-box ${this.props.projectPhotos[this.state.activeSlide]}`)
    }
  }
  
  render(){     
      
    return(
      <div
        id={this.props.name}
        className=
        {
          this.projectDisplayType()
        }
      >

        <div id="project-activate-window"
          onClick={!this.props.inMobile ? this.handleClick : ()=>console.log('click deactivated for mobile')}
          className={'select-project'}
        >

          {/* {this.props.projectPhotos[this.state.activeSlide]} */}

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



      </div>
    )
  }          
}

export default Project;
