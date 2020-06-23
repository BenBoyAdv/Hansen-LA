import React from 'react';
// import CloseBox from '../CloseBox';
import '../../App.css';

function PublicProject (props)
{
  const handleClick = () => {
    props.handleClick(props.index)
    console.log(props.settings)
  }

  const closeBox = () => {
    props.closeBox(props.index)
    console.log(props.settings)
  }

  return(
    <div
      id={props.name}
      className=
      {
        (props.isActive && props.isTransition) ? 'a-transition' : 
        props.isActive ? 'active' : 
        (!props.isActive && props.isTransition) ? 'b-transition' : 
        props.anyActive ? 'inactive' : 'project-box'
      }
    >
      <div 
        onClick={handleClick}
        className={props.isActive ? 'off-project' : props.anyActive ? 'off-project' : 'select-project'}
      >
      {props.name}
      </div>
      <div onClick={closeBox}
        className=
        {
          (props.isActive && props.isTransition) ? '' :
          props.isActive ? 'close-button' : ''
        }
      >
      </div>
    </div>
  )

}

export default PublicProject;
