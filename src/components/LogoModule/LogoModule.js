
import React from "react";
import "./LogoModule.css";
import logo from '../../logo.svg';
import Rule from "../Rule";
import Score from "../Score";
import Wrapper from "../Wrapper";
import logos from "../../logos.json";




class LogoModule extends React.Component {
    state = {
        logos: logos
    };

    randomOrder = (id) => {
        const logos = this.state.logos.sort(logo => logo.id !== id);
        this.setState({ 
            logos 
        });
    };

    render() {
        console.log(this);
        return (
            <div className="App">
                <header className="App-header flex-container">
                    <Rule />
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Click-and-React</h1>
                    <Score />
                </header>
                <Wrapper>
                    {this.state.logos.map(logo => (
                        <ImgModule
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




const ImgModule = (props) => {
    console.log(props.id);
    return (
        <div className="card">
            <img src={props.image} onClick={() => props.randomOrder(props.id)} alt="" />
        </div>
    );
};

export default LogoModule;

