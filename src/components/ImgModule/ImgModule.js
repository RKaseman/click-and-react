
import React from "react";
import "./ImgModule.css";

const ImgModule = (props) => {
    console.log(props.id);
    return (
        <div className="card">
            <img
            className="App-card"
            src={props.image}
            onClick={() => props.randomOrder(props.id)}
            alt="" />
        </div>
    );
};

export default ImgModule;

