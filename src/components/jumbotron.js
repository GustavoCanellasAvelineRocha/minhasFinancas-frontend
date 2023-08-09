import React from "react";

function Jumbotron(props){
    return(
        <div className="mt-4 p-5 bg-light rounded">
        {props.children}
    </div>
    );
}

export default Jumbotron;