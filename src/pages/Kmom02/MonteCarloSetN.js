import React, { Component } from "react";
import { MonteCarlo } from "./MonteCarlo";

export class MonteCarloSetN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: this.props.n || 10
        };

        this.handleChangeN = this.handleChangeN.bind(this);
    }

    handleChangeN({ target }) {
        this.setState(() => ({
            n: parseInt(target.value, 10)
        }));
    }

    render() {
        return (
            <div>
                <MonteCarlo n={this.state.n} />
                <label className="smack-in-the-middle" htmlFor="n">
                    n:{" "}
                </label>
                <input
                    name="n"
                    onChange={this.handleChangeN}
                    value={this.state.n}
                    type="range"
                    min="10"
                    max="3000"
                    value={this.state.n}
                    step="10"
                />
            </div>
        );
    }
}
