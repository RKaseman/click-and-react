
import React from "react";
import "./Score.css";

class Score extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        if (this.state.count < 12) {
            this.setState({
                count: this.state.count + 1
            });
        }
    };

    render() {
        return (
            <div className="headerLeft">
                <div className="scoreLeft">
                    <p>
                        Current Score: {this.state.count}
                    </p>
                    <button onClick={this.handleIncrement}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}

export default Score;

