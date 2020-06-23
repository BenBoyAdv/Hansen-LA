import React from 'react';

function CloseBox (props) {
  const closeBox = () => {
    props.closeBox() 
    console.log(props.closeBox)
  }
  // const clickWorking = () => console.log(props.closeBox
  return (
    <div
      className={props.isActive ? 'close-button' : ''}
      onClick={closeBox}
    >
    </div>
  )
}

export default CloseBox;