import functionPlot from "function-plot";

export const plot = (func, outside, inside, maxX, maxY, element) =>
    functionPlot({
        title: func,
        target: element,
        width: 580,
        height: 400,
        disableZoom: true,
        xAxis: {
            label: "x - axis",
            domain: [0, maxX]
        },
        yAxis: {
            label: "y - axis",
            domain: [0, maxY]
        },
        data: [
            {
                title: "inside",
                points: inside,
                fnType: "points",
                graphType: "scatter"
            },
            {
                title: "outside",
                points: outside,
                fnType: "points",
                graphType: "scatter"
            },
            {
                title: "func",
                fn: func
            }
        ]
    });

// Slooooow
export const evalFunc = (func, x) => functionPlot.eval.builtIn({ fn: func }, "fn", { x });

export const appendOutsideInside = (func, points, [x, y]) => {
    evalFunc(func, x) < y ? points.outside.push([x, y]) : points.inside.push([x, y]);
    // x * Math.pow(Math.sin(x), 2) > y ? points.outside.push([x, y]) : points.inside.push([x, y]);

    return points;
};

export const randomizePoint = (maxX, maxY) => [Math.random() * maxX, Math.random() * maxY];
