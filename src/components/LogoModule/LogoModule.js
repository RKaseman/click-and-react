
import React from "react";
import "./LogoModule.css";

const LogoModule = props => {
    console.log(props.name);
    return (
        <div className="card">
            <img alt={props.name} src={props.image} onClick={() => props.randomOrder(props.id)} className="remove"/>
        </div>
        );
    };
    
export default LogoModule;

