import React from 'react';
import CloseBox from '../CloseBox';
import '../../App.css';

function PublicProject (props)
{
  const handleClick = () => props.handleClick(props.index)
  const closeBox = () => {
    props.closeBox()
    console.log(props.settings)
  }
  return(
    <div
      id={props.name}
      className={props.isActive ? 'active flex-row j-end' : props.anyActive ? 'inactive' : 'project-box'}
      onClick={handleClick}
    >
      {props.name}
      <button onClick={closeBox}>close</button>
    </div>
  )

}

export default PublicProject;
