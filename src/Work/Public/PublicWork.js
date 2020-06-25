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
    // class PublicWork extends React.Component {
    
    //     state = {activeIndex:null, anyActive:false, transition:false}
    
    //     closeBox = (index) => {
            
    //         this.setState({activeIndex:index, anyActive:true, transition:true})
    //         // const transition = () =>{
    //         //    this.setState({activeIndex:null, anyActive:false, transition:false})
    //         // }
    //         setTimeout(()=>{
    //             this.setState({activeIndex:null, anyActive:false, transition:false})
    //         },1000)
    //     }
    
    //     handleClick = index => {
    //         let currentState = this.state.anyActive
    //         !currentState ? (this.setState({activeIndex:index, anyActive:true, transition:false})) : 
    //         (console.log('click off'))
    //     }
    
        
    //     render () {
    //         const projects = 
    //         [
    //             {name: "project-1", projectPhotos:['photo1', 'photo2','photo3']},
    //             {name: "project-2", projectPhotos:['photo1', 'photo2','photo3']},
    //             {name: "project-3", projectPhotos:['photo1', 'photo2','photo3']}
    //         ]
    //         return (
                
    //             projects.map((proj, i)=>{
    //                 return (
    //                     <PublicProject
    //                         key={proj.name}
    //                         name={proj.name}
    //                         index={i}
    //                         isActive={this.state.activeIndex === i}
    //                         anyActive={this.state.anyActive}
    //                         isTransition={this.state.transition}
    //                         handleClick={this.handleClick}
    //                         closeBox={this.closeBox}
    //                         settings={this.state}
    //                         projectPhotos={proj.projectPhotos}
    //                     />
    //                 )
    //             })
                
    //         )
    //     }
    // }