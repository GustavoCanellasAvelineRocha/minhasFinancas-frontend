import React from "react";

function Formgroup(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.htmlFor} style={{paddingBlock: "0.5rem"}}>{props.label}</label>
      {props.children}
    </div>
  );
}

export default Formgroup;