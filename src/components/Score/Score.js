
import React from "react";
import "./Score.css";

class Score extends React.Component {
    state = {
        count: 0,
        totalCount: 0
    };

    handleIncrement = () => {
        if (this.state.totalCount < 12) {
            this.setState({
                count: this.state.count + 1,
                totalCount: this.state.totalCount + 1
            });
        }
    };

    render() {
    console.log(this);
    return (
            <div className="headerRight">
                <div className="scoreRight">
                    <p>
                        Current Score: {this.state.count}
                        <br />
                        High Score: {this.state.totalCount}
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

