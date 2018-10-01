
import React, { Component } from "react";
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

    removeLogo = id => {
        const logos = this.state.logos.sort(logo => logo.id !== id);
        this.setState({ logos });
    };

    render() {
        return (
            <Wrapper>
                <Score />
                <Title>Logos List</Title>
                {this.state.logos.map(logo => (
                    <LogoModule
                        removeLogo={this.removeLogo}
                        id={logo.id}
                        key={logo.id}
                        name={logo.name}
                        image={logo.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;

