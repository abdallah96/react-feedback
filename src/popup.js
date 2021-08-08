import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span  onClick={props.handleClose}></span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;

