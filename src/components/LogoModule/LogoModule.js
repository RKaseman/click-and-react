
import React from "react";
import "./LogoModule.css";

const LogoModule = props => {
    console.log(props.name);
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={() => props.randomOrder(props.id)} className="remove"/>
            </div>
            <div className="content">
                <p>
                    <strong>Name:</strong> {props.name}
                </p>
            </div>
        </div>
        );
    };
export default LogoModule;

