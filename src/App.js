
import React, { Component } from 'react';
import Score from "./components/Score";
import logo from './logo.svg';
import logoRed from './components/Logo/logoRed.svg';
import logoBlue from './components/Logo/logoBlue.svg';
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
                    <img src={logoRed} className="App-logo-tester" alt="logo" />
                    <img src={logoBlue} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" /><br />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" /><br />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" />
                    <img src={logo} className="App-logo-tester" alt="logo" /><br />
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

