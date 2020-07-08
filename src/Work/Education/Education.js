import React from 'react';
import ProjectContainer from '../ProjectContainer'
import '../../App.css';
// import other work libraries

//change to function
class EducationWork extends React.Component 
{
    // declare inMobile variable from this.props.inMobile
    educationProjects = 
    [
        {name: "project-1", projectPhotos:['photo2', 'photo3','photo1']},
        {name: "project-2", projectPhotos:['photo2', 'photo3','photo1']},
        {name: "project-3", projectPhotos:['photo2', 'photo3','photo1']}
    ]

    // funcation returning either educationProjects alone or all libraries
    render()
    {
        //pass results of function as projects prop
        // pass inMobile
        return <ProjectContainer projects={this.educationProjects}/>
    }
}

export default EducationWork;