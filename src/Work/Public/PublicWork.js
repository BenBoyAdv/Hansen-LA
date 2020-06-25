import React from 'react';
// import PublicProject from './PublicProject';
import '../../App.css';
import ProjectContainer from '../ProjectContainer';

class PublicWork extends React.Component 
{
    publicProjects = 
    [
        {name: "project-1", projectPhotos:['photo1', 'photo2','photo3']},
        {name: "project-2", projectPhotos:['photo1', 'photo2','photo3']},
        {name: "project-3", projectPhotos:['photo1', 'photo2','photo3']}
    ]
    render()
    {
        return <ProjectContainer projects={this.publicProjects}/>
    }
}

export default PublicWork;
