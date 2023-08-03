import React from "react";

function Card(props) {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
