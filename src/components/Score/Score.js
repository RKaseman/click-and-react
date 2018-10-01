
import React from "react";
import "./Score.css";

class Score extends React.Component {
    state = {
        count: 0,
        totalCount: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState({ totalCount: this.state.totalCount + 1 });
    };

    render() {
        return (
            <div className="header">
                <div className="score">
                    <p>
                        Current Score: {this.state.count}
                    </p>
                    <p>
                        Total Clicks: {this.state.totalCount}
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

