
import React from "react";
import "./ScoreTotal.css";

class ScoreTotal extends React.Component {
    state = {
        totalCount: 0
    };

    handleIncrement = () => {
        if (this.state.totalCount < 12) {
            this.setState({
                totalCount: this.state.totalCount + 1
            });
        }
    };

    render() {
        return (
            <div className="headerRight">
                <div className="scoreRight">
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

export default ScoreTotal;

