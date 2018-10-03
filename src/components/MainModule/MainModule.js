
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
        totalCount: 0,
        clicked: ""
    };

    gameState = (id) => {
        const logos = this.state.logos.sort(logo => logo.id !== id);
        console.log(id);
        console.log(logo);
        console.log(this.state.clicked);
        if (this.state.clicked === id) {
            this.setState({
                count: 0
            });
            } else {
            this.setState({
                logos: logos,
                count: this.state.count + 1,
                totalCount: this.state.totalCount + 1,
                clicked: id
            });
        }
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
                        <p>
                            Current Score: {this.state.count}
                            <br />
                            High Score: {this.state.totalCount}
                        </p>
                    </div>
                </header>
                <Wrapper>
                    {this.state.logos.map(logo => (
                        <ModuleContent
                            key={logo.id}
                            id={logo.id}
                            image={logo.image}
                            gameStatus={this.gameState}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    };
};

export default MainModule;

