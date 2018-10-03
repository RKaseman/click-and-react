
import React from "react";
import "./ModuleContent.css";

const ModuleContent = (props) => {
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

