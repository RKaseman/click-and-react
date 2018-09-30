
import React from "react";
import "./LogoModule.css";

const LogoModule = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>image:</strong> {props.image}
                </li>
                <li>
                    <strong>id:</strong> {props.id}
                </li>
            </ul>
        </div>
        <span onClick={() => props.removeLogo(props.id)} className="remove">
            𝘅
        </span>
    </div>
);

export default LogoModule;

