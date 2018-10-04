
import React from "react";
import "./ModuleHead.css";
import logo from '../../logo.svg';

const ModuleHead = (props) => {
    return (
        <header className="App-header flex-container">
            <div className="headerLeft">
                <p>
                    Don't click the
                    <br />
                    same image twice
                </p>
            </div>
            <div className="headerMiddle">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Click-and-React</h1>
            </div>
            <div className="headerRight">
                <p>
                    Current Score: {props.count}
                    <br />
                    High Score: {props.totalCount}
                </p>
            </div>
        </header>
    );
};

export default ModuleHead;

