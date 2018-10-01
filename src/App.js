
import React, { Component } from "react";
import logo from './logo.svg';
import LogoModule from "./components/LogoModule";
import Score from "./components/Score";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import logos from "./components/LogoModule/logos.json";
import "./App.css";

class App extends Component {
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
                <Wrapper>
                <header className="App-header flex-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Click-and-React<br />Don't click the same image twice</h1>
                        <Score />
                </header>
                <Title>[del]</Title>
                    {this.state.logos.map(logo => (
                        <LogoModule
                            randomOrder={this.randomOrder}
                            id={logo.id}
                            key={logo.id}
                            name={logo.name}
                            image={logo.image}
                        />
                    ))}
                </Wrapper>
            </div>
        );
    }
}

export default App;

