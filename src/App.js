
import React, { Component } from 'react';
import LogoModule from "./components/LogoModule";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Title from "./components/Title";
import logos from "./logos.json";
// import logo from './logo.svg';
// import logoBlack from './components/svgs/logoBlack.svg';
import './App.css';

class App extends Component {
    
    state = {
        logos
    };
    removeLogo = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const logos = this.state.logos.filter(logo => logo.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ logos });
    };

    render() {
        return (
            <Wrapper>
                <Title>Friends List</Title>
                <Score />
                {this.state.logos.map(logo => (
                    <LogoModule
                        removeLogo={this.removeLogo}
                        id={logo.id}
                        key={logo.id}
                        name={logo.name}
                        image={logo.image}
                        // occupation={logo.occupation}
                        // location={logo.location}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;

