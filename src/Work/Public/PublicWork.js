import React from 'react';
import '../../App.css';
import '../ProjectPhotos.css';
import ProjectContainer from '../ProjectContainer';
import projectLib from '../projects';

function PublicWork (props)
{
    const inMobile = props.inMobile;
    
    // function returning either publicProjects alone or all work project libraries

    const projectReturn = () => {
        let projectList = []
        if (inMobile === true)
            {
                // for each property in projectLib map it's array pushing each objects to projectList
                for(const property in projectLib)
                    {
                        property.map(proj => {
                            projectList.push(proj)
                        })
                    }
            }
        else 
            {projectList.push()}
            return projectList;    
    }



        //pass results of function as projects prop
        return <ProjectContainer projects={projectReturn()}/>
    
}

export default PublicWork;
