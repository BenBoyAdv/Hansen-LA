import React from 'react';
import ProjectContainer from '../ProjectContainer'
import '../../App.css';
// import other work libraries

//change to function
class MedicalWork extends React.Component 
{
    // declare inMobile variable from this.props.inMobile

    medicalProjects = 
    [
        {name: "project-1", projectPhotos:['photo3', 'photo2','photo1']},
        {name: "project-2", projectPhotos:['photo3', 'photo2','photo1']},
        {name: "project-3", projectPhotos:['photo3', 'photo2','photo1']}
    ]

    //function returning either medicalProjects alone or all work libraries
    render()
    {
        //pass results of function as projects prop
        return <ProjectContainer projects={this.medicalProjects}/>
    }
}

export default MedicalWork;