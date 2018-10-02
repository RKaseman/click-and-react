
import React from "react";
import logo from './logo.svg';
import LogoModule from "./components/LogoModule";
import Score from "./components/Score";
import ScoreTotal from "./components/ScoreTotal";
import Wrapper from "./components/Wrapper";
import logos from "./logos.json";
import "./App.css";

class App extends React.Component {
    state = {
        logos
    };

    randomOrder = id => {
        const logos = this.state.logos.sort(logo => logo.id !== id);
        this.setState({ logos });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header flex-container">
                    <Score />
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Click-and-React</h1>
                    <h2 className="App-subTitle">Don't click the same image twice</h2>
                    <ScoreTotal />
                </header>
                <Wrapper>
                    {this.state.logos.map(logo => (
                        <LogoModule
                            randomOrder={this.randomOrder}
                            id={logo.id}
                            key={logo.id}
                            image={logo.image}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default App;

