import React from 'react';
import '../../App.css';
import '../ProjectPhotos.css';
import ProjectContainer from '../ProjectContainer';
import projectLib from '../projects';

function PublicWork (props)
{
    const inMobile = props.inMobile;
    const workIndex = props.workIndex;
    
    
    const allProjects = [];
    
    const projectDisplaySwitch = () => {
        
        if (inMobile === true || inMobile === false) {
            allProjects.length = 0;

            for (const key in projectLib) {
                projectLib[key].forEach(element => {
                    return allProjects.push(element)
                });
            }
            console.log('mobile')
        }
        // else if (inMobile === false) {
        //     allProjects.length = 0;
        //     for (const key in projectLib) {
        //         // delete projectLib[key][0]
                
        //     }
        //     const activeKey = Object.keys(projectLib)[workIndex]
        //     projectLib[activeKey].forEach(element => {
        //         return allProjects.push(element)
        //     });
        //     console.log('desktop')
        // }
        
    }
    projectDisplaySwitch();
    return <ProjectContainer inMobile={inMobile} projects={allProjects}/>
    
}
export default PublicWork;
