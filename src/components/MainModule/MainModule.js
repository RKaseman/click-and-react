
import React from "react";
import "./MainModule.css";
import logo from '../../logo.svg';
import ModuleContent from "../ModuleContent";
import ModuleHead from "../ModuleHead";
import Wrapper from "../Wrapper";
import logos from "../../logos.json";

class MainModule extends React.Component {
    state = {
        logos: logos,
        count: 0,
        totalCount: 0
    };

    gameStatus = (id) => {
        const logos = this.state.logos.sort(logo => logo.id !== id);
        this.setState({ 
            logos: logos,
            count: this.state.count + 1,
            totalCount: this.state.totalCount + 1
        });
    };

    render() {
        console.log(this);
        return (
            <div className="App">
                <header className="App-header flex-container">
                    <ModuleHead />
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Click-and-React</h1>
                    <div className="headerRight">
                        <div className="scoreRight">
                            <p>
                                Current Score: {this.state.count}
                                <br />
                                High Score: {this.state.totalCount}
                            </p>
                        </div>
                    </div>
                </header>
                <Wrapper>
                    {this.state.logos.map(logo => (
                        <ModuleContent
                            gameStatus={this.gameStatus}
                            id={logo.id}
                            key={logo.id}
                            image={logo.image}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    };
};

export default MainModule;

