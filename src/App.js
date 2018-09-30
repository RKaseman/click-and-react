
import React, { Component } from 'react';
import Score from "./components/Score";
import logo from './logo.svg';
import logoBlack from './components/Logo/logoBlack.svg';
import logoBlue from './components/Logo/logoBlue.svg';
import logoCyan from './components/Logo/logoCyan.svg';
import logoGreen from './components/Logo/logoGreen.svg';
import logoGrey from './components/Logo/logoGrey.svg';
import logoLime from './components/Logo/logoLime.svg';
import logoOrange from './components/Logo/logoOrange.svg';
import logoPurple from './components/Logo/logoPurple.svg';
import logoRed from './components/Logo/logoRed.svg';
import logoYellow from './components/Logo/logoYellow.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="flex-container">
                        <Score />
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome<br/>to React</h1>
                    </div>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <br/>
                </p>
                <div>
                    <img src={logoBlack} className="App-logo-tester" alt="logo" />
                    <img src={logoBlue} className="App-logo-tester" alt="logo" />
                    <img src={logoCyan} className="App-logo-tester" alt="logo" />
                    <img src={logoGreen} className="App-logo-tester" alt="logo" />
                    <br />
                    <img src={logoGrey} className="App-logo-tester" alt="logo" />
                    <img src={logoLime} className="App-logo-tester" alt="logo" />
                    <img src={logoOrange} className="App-logo-tester" alt="logo" />
                    <img src={logoPurple} className="App-logo-tester" alt="logo" />
                    <br />
                    <img src={logoRed} className="App-logo-tester" alt="logo" />
                    <img src={logoYellow} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <br />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                </div>
            </div>
        );
    }
}

export default App;

