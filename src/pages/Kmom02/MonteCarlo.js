import React, { Component } from "react";
import { plot, evalFunc, appendOutsideInside, randomizePoint } from "./plot";
import round from "lodash/round";
import defer from "lodash/defer";

const initialState = {
    calcMess: "Slumpar & räknar...",
    pointSums: { outside: "...", inside: "..." },
    PrU: "...",
    area: "..."
};

const calcPrU = (inside, total) => inside / total;
const calcArea = (PrU, minX, maxX, maxY) => PrU * (maxX - minX) * maxY;

export class MonteCarlo extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    calcGraph() {
        this.setState(() => initialState);

        const func = "x * sin(x)^2";

        const maxX = 4;
        const maxY = evalFunc(func, maxX);

        defer(() => {
            const points = { outside: [], inside: [] };

            for (let i = 0; i < this.props.n; i++) {
                appendOutsideInside(func, points, randomizePoint(maxX, maxY));
            }

            this.graphInstance = plot(
                func,
                points.outside,
                points.inside,
                maxX,
                maxY,
                this.element
            );

            const PrU = calcPrU(points.inside.length, this.props.n);

            this.setState(() => ({
                calcMess: "",
                pointSums: { outside: points.outside.length, inside: points.inside.length },
                PrU: PrU,
                area: calcArea(PrU, 0, maxX, maxY)
            }));
        });
    }

    componentDidMount() {
        this.calcGraph();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.n !== this.props.n) {
            this.setState({ calcMess: initialState.calcMess });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.n !== this.props.n) {
            this.calcGraph();
        }
    }

    render() {
        return (
            <div>
                <div className="plot-wrapper">
                    <svg ref={element => (this.element = element)} />
                    {this.state.calcMess && <span className="label">{this.state.calcMess}</span>}
                </div>
                <div>
                    <p>Över: {this.state.pointSums.outside}</p>
                    <p>Under: {this.state.pointSums.inside}</p>
                    <p>Pr(U): {round(this.state.PrU, 4) || "..."}</p>
                    <p>Area: {round(this.state.area, 3) || "..."}</p>
                    <p>n: {this.props.n}</p>
                </div>
            </div>
        );
    }
}
