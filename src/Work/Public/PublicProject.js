import React from 'react';
// import CloseBox from '../CloseBox';
import '../../App.css';


class PublicProject extends React.Component
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
    let projectImages = ['photo1', 'photo2', 'photo3']   
    return(
      <div
        id={this.props.name}
        className=
        {
          (this.props.isActive && this.props.isTransition) ? `a-transition ${projectImages[this.state.activeSlide]}` : 
          this.props.isActive ? `active ${projectImages[this.state.activeSlide]}` : 
          (!this.props.isActive && this.props.isTransition) ? `b-transition ${projectImages[this.state.activeSlide]}` : 
          this.props.anyActive ? `inactive ${projectImages[this.state.activeSlide]}` : `project-box ${projectImages[this.state.activeSlide]}`
        }
      >

        <div id="project-activate-window"
          onClick={this.handleClick}
          className={'select-project'}
        >

          {/* {projectImages[this.state.activeSlide]} */}

          <div id="close-box"
            onClick={this.closeBox}
            className=
            {
              (this.props.isActive && this.props.isTransition) ? '' :
              this.props.isActive ? 'close-button' : ''
            }
          ></div>
          <div className="flex-row j-center">
            <div
            className=
            {
              (this.props.isActive && this.props.isTransition) ? '' :
              this.props.isActive ? 'slideControls' : ''
            }
            onClick={this.prevSlide}></div>
            <div 
            className=
            {
              (this.props.isActive && this.props.isTransition) ? '' :
              this.props.isActive ? 'slideControls' : ''
            }
            onClick={this.nextSlide}></div>
          </div>

        </div>



      </div>
    )
  }          
}

export default PublicProject;
