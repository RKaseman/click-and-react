
import React from "react";
import "./ModuleContent.css";

const ModuleContent = (props) => {
    console.log(props.id);
    return (
        <div className="card">
            <img
            className="App-card"
            src={props.image}
            onClick={() => props.gameStatus(props.id)}
            alt="" />
        </div>
    );
};

export default ModuleContent;

