
import React from "react";
import "./LogoModule.css";

const LogoModule = props => {
    console.log(props.id);
    return (
        <div className="card">
            <img src={props.image} onClick={() => props.randomOrder(props.id)} alt="" />
        </div>
    );
};

export default LogoModule;

