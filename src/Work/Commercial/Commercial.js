import React from 'react';
import ProjectContainer from '../ProjectContainer'
import '../../App.css';
// import all work libraries

class CommercialWork extends React.Component 
{
    // declare inMobile variable from this.props.inMobile
    commercialProjects = 
    [
        {name: "project-1", projectPhotos:['photo1', 'photo2','photo3']},
        {name: "project-2", projectPhotos:['photo1', 'photo2','photo3']},
        {name: "project-3", projectPhotos:['photo1', 'photo2','photo3']}
    ]
    // function returning eitehr commercialProjects alone or all work libraries
    render()
    {
        //pass results of function as projects prop
        return <ProjectContainer projects={this.commercialProjects}/>
    }
}

export default CommercialWork;