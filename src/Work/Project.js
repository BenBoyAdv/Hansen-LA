import React from 'react';
import '../App.css';


class Project extends React.Component
{
  state={activeSlide:0}

  handleClick = () => {
    this.props.handleClick(this.props.index)
    // console.log(props.settings)
  }

  closeBox = () => {
    this.props.closeBox(this.props.index)
    this.setState({activeSlide:0})
    console.log(this.props.settings)
  }

  nextSlide = () => {
    let slideIndex = this.state.activeSlide;
    (slideIndex < 2) ? slideIndex++ : (slideIndex = 0)
    this.setState({activeSlide: slideIndex})
  }

  prevSlide = () => {
    let slideIndex = this.state.activeSlide;
    (slideIndex > 0) ? slideIndex-- : (slideIndex = 2)
    this.setState({activeSlide: slideIndex})
  }
  
  render(){     
      
    return(
      <div
        id={this.props.name}
        className=
        {
          (this.props.isActive && this.props.isTransition) ? `a-transition ${this.props.projectPhotos[this.state.activeSlide]}` : 
          this.props.isActive ? `active ${this.props.projectPhotos[this.state.activeSlide]}` : 
          (!this.props.isActive && this.props.isTransition) ? `b-transition ${this.props.projectPhotos[this.state.activeSlide]}` : 
          this.props.anyActive ? `inactive ${this.props.projectPhotos[this.state.activeSlide]}` : `project-box ${this.props.projectPhotos[this.state.activeSlide]}`
        }
      >

        <div id="project-activate-window"
          onClick={this.handleClick}
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
              this.props.isActive ? 'flex-row j-center' : 'noClass'
            }>
            <div
            className=
            {
              (this.props.isActive && this.props.isTransition) ? 'noClass' :
              this.props.isActive ? 'slideControls' : 'noClass'
            }
            onClick={this.prevSlide}></div>
            <div 
            className=
            {
              (this.props.isActive && this.props.isTransition) ? 'noClass' :
              this.props.isActive ? 'slideControls' : 'noClass'
            }
            onClick={this.nextSlide}></div>
          </div>

        </div>



      </div>
    )
  }          
}

export default Project;
