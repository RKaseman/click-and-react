
import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        count: 0
    };

    // handleIncrement increments this.state.count by 1
    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <p className="card-text">Current Score: {this.state.count}</p>
                    <button className="btn btn-primary" onClick={this.handleIncrement}>
                        Increment
                    </button>
                </div>
            </div>
        );
    }
}

export default Score;

