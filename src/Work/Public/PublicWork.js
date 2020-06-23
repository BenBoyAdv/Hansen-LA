import React from 'react';
import PublicProject from './PublicProject';
import '../../App.css';

class PublicWork extends React.Component {

    state = {activeIndex:null, anyActive:false}

    closeBox = () => this.setState({activeIndex:null, anyActive:false})
    handleClick = index => this.setState({activeIndex:index, anyActive:true})
    
    render () {
        const projects = 
        [
            {name: "project-1"},
            {name: "project-2"},
            {name: "project-3"}
        ]
        return (
            
            projects.map((proj, i)=>{
                return (
                    <PublicProject
                        key={proj.name}
                        name={proj.name}
                        index={i}
                        isActive={this.state.activeIndex === i}
                        anyActive={this.state.anyActive}
                        handleClick={this.handleClick}
                        closeBox={this.closeBox}
                        settings={this.state}
                    />
                )
            })
            
        )
    }
}

export default PublicWork;