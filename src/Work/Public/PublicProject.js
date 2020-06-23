import React from 'react';
import '../../App.css';

function PublicProject (props)
{
  const handleClick = () => props.handleClick(props.index)
  return(
    <div
      id={props.name}
      className={props.isActive ? 'active' : props.anyActive ? 'inactive' : 'project-box'}
      onClick={handleClick}
    >
      {props.name}
    </div>
  )

}

export default PublicProject;
