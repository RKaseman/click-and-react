
import React from "react";
import "./Rule.css";

const Rule = (props) => {
    console.log(props);
    return (
        <div className="headerLeft">
            <div className="scoreLeft">
                <p>
                Don't click the<br />same image twice
                </p>
            </div>
        </div>
    );
};

export default Rule;

