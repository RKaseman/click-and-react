
import React, { Component } from 'react';
import Score from "./components/Score";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Score /><h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <br/>
                    {/* <Score /> */}
                </p>
                <div>
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

