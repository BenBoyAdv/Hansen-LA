import React from 'react';
import Project from './Project';
import '../App.css';


class ProjectContainer extends React.Component {

    //declare inMobile variable from this.props.inMobile

    state = {activeIndex:null, anyActive:false, transition:false, lightbox:false}

    closeBox = (index) => {
        
        this.setState({activeIndex:index, anyActive:true, transition:true, lightbox:false})
        setTimeout(()=>{
            this.setState({activeIndex:null, anyActive:false, transition:false, lightbox: false})
        },1000)
    }

    handleClick = index => {
        let currentState = this.state.anyActive
        if(this.props.inMobile) {
            !currentState ? (this.setState({activeIndex:index, anyActive:true, transition:false , lightbox: true})) : 
            console.log('click deactivated')
        }
        else
        {
            !currentState ? (this.setState({activeIndex:index, anyActive:true, transition:false})) : 
            (console.log('click deactivated'))

        }
    }

    
    render () {
        const projects = this.props.projects
        return (
            
            projects.map((proj, i)=>{
                
                return (
                    <Project
                        key={proj.name}
                        name={proj.name}
                        index={i}
                        isActive={this.state.activeIndex === i}
                        anyActive={this.state.anyActive}
                        isTransition={this.state.transition}
                        handleClick={this.handleClick}
                        closeBox={this.closeBox}
                        settings={this.state}
                        projectPhotos={proj.projectPhotos}
                        inMobile={this.props.inMobile}
                        heading={proj.headingText}
                        isHeading={proj.isHeading}
                        isLightbox={this.state.lightbox}
                    />
                )
            })
            
        )
    }
}

export default ProjectContainer;