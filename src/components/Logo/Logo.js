
import React from "react";
import "./Logo.css";

const Logo = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <img src={logoCyan} className="App-logo-tester" alt="logo" />
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Occupation:</strong> {props.occupation}
                </li>
                <li>
                    <strong>Location:</strong> {props.location}
                </li>
            </ul>
        </div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">
            𝘅
        </span>
    </div>
);

export default Logo;

