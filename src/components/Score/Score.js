
import React from "react";
import "./Score.css";

class Score extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="header">
                <div className="score">
                    <p>Current Score: {this.state.count}</p>
                    <button onClick={this.handleIncrement}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}

export default Score;

