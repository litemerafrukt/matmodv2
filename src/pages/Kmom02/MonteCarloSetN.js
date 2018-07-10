import React, { Component } from "react";
import debounce from "lodash/debounce";
import { MonteCarlo } from "./MonteCarlo";

export class MonteCarloSetN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: this.props.n || 10,
            debouncedN: this.props.n || 10
        };

        this.handleChangeN = this.handleChangeN.bind(this);
    }

    handleChangeN({ target }) {
        this.setState(() => ({
            n: parseInt(target.value, 10)
        }));
        debounce(() => this.setState({ debouncedN: this.state.n }), 500)();
    }

    render() {
        return (
            <div>
                <MonteCarlo n={this.state.debouncedN} />
                <label className="smack-in-the-middle" htmlFor="n">
                    n:{" "}
                </label>
                <input
                    name="n"
                    onChange={this.handleChangeN}
                    value={this.state.n}
                    type="range"
                    min="10"
                    max="5000"
                    value={this.state.n}
                    step="10"
                />
            </div>
        );
    }
}
