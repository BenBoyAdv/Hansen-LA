import React from 'react';
import ProjectContainer from '../ProjectContainer'
import '../../App.css';

class EducationWork extends React.Component 
{
    publicProjects = 
    [
        {name: "project-1", projectPhotos:['photo2', 'photo3','photo1']},
        {name: "project-2", projectPhotos:['photo2', 'photo3','photo1']},
        {name: "project-3", projectPhotos:['photo2', 'photo3','photo1']}
    ]
    render()
    {
        return <ProjectContainer projects={this.publicProjects}/>
    }
}

export default EducationWork;