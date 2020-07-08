import React from 'react';
import '../../App.css';
import '../ProjectPhotos.css';
import ProjectContainer from '../ProjectContainer';
// import other work libraries

//change to function
class PublicWork extends React.Component 
{
    // declare inMobile variable from this.props.inMobile

    publicProjects = 
    [
        {name: "project-1", projectPhotos:[
            'childrens-park-photo-1', 'childrens-park-photo-2','childrens-park-photo-3',
            'childrens-park-photo-4', 'childrens-park-photo-5', 'childrens-park-photo-6', 'childrens-park-photo-7'
        ]},
        {name: "project-2", projectPhotos:[
            'childrens-park-photo-4', 'childrens-park-photo-2','childrens-park-photo-5',
            'childrens-park-photo-1', 'childrens-park-photo-3', 'childrens-park-photo-6', 'childrens-park-photo-7'
        ]},
        {name: "project-3", projectPhotos:[
            'childrens-park-photo-7', 'childrens-park-photo-2','childrens-park-photo-5',
            'childrens-park-photo-1', 'childrens-park-photo-3', 'childrens-park-photo-6', 'childrens-park-photo-4'
        ]}
        
    ]
    // function returning either publicProjects alone or all work project libraries
    render()
    {
        //pass results of function as projects prop
        return <ProjectContainer projects={this.publicProjects}/>
    }
}

export default PublicWork;
