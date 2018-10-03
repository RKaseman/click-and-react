
import React from "react";
import "./MainModule.css";
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
        console.log(this.state.clicked);
        console.log(id);
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
        return (
            <div className="App">
                <ModuleHead
                    count={this.state.count}
                    totalCount={this.state.totalCount}
                />
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

