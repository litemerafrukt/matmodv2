import React from "react";
import ReactMarkdown from "react-markdown";
import diagram from "../img/malmonow.png";

const table = `
           Backwards derive  Central derive  Forward derive  Hour  Moving average 2  Moving average 5  Temp
       0                NaN             NaN             0.6     0               NaN               NaN   4.7
       1                0.6            0.35             0.1     1              5.00               NaN   5.3
       2                0.1            0.35             0.6     2              5.35              5.48   5.4
       3                0.6            0.30             0.0     3              5.70              5.60   6.0
       4                0.0           -0.35            -0.7     4              6.00              5.64   6.0
       5               -0.7           -0.25             0.2     5              5.65              5.48   5.3
       6                0.2           -0.35            -0.9     6              5.40              5.10   5.5
       7               -0.9           -0.70            -0.5     7              5.05              4.70   4.6
       8               -0.5           -0.30            -0.1     8              4.35              4.38   4.1
       9               -0.1           -0.20            -0.3     9              4.05              3.98   4.0
       10              -0.3           -0.25            -0.2    10              3.85              3.68   3.7
       11              -0.2           -0.30            -0.4    11              3.60              3.44   3.5
       12              -0.4           -0.30            -0.2    12              3.30              3.24   3.1
       13              -0.2           -0.05             0.1    13              3.00              3.08   2.9
       14               0.1            0.00            -0.1    14              2.95              3.06   3.0
       15              -0.1            0.20             0.5    15              2.95              3.12   2.9
       16               0.5            0.25             0.0    16              3.15              3.20   3.4
       17               0.0           -0.05            -0.1    17              3.40              3.34   3.4
       18              -0.1            0.15             0.4    18              3.35              3.48   3.3
       19               0.4            0.15            -0.1    19              3.50              3.82   3.7
       20              -0.1            0.70             1.5    20              3.65              4.30   3.6
       21               1.5            1.10             0.7    21              4.35              4.86   5.1
       22               0.7            0.50             0.3    22              5.45              5.30   5.8
       23               0.3            0.05            -0.2    23              5.95               NaN   6.1
       24              -0.2             NaN             NaN    24              6.00               NaN   5.9
`;

export const Kmom01 = () => (
    <div>
        <h1>Uppgift 1</h1>
        <p className="text-small text-italic">Tidsserie uppdaterad: 2017-12-04 13:49:27</p>

        <p>
            Som tidsserie har jag valt det senaste dygnets temperaturer i Malmö hämtade från SMHI:s
            api.
        </p>
        <p>Diagrammets rubrik visar mätstationens namn och vilket tidsintervall som hämtats.</p>
        <p className="center">{}</p>
        <img src={diagram} alt="malmö temperatur" />

        <h2>Tabell genererad från python-skript</h2>
        <ReactMarkdown source={table} className="text-small center" />

        <br />
        <h2>Kort reflektion</h2>
        <h3>Derivatan</h3>
        <p>I denna tidserie beskriver derivatan temparaturförändringen vid en given timme.</p>
        <p>
            Den centrala derivatan ger den bästa approximationen. I just detta fallet kan det vara
            intressant att notera att derivatan framåt ger en historisk temperaturprognos med 100%
            träffsäkerhet.
        </p>
        <h3>Glidande medelvärde</h3>
        <p>
            Ett glidande medelvärde kan hjälpa till att jämna ut en kurva så det tex kan vara
            enklare att se trender. För en tidserie som representerar temperaturer över ett dygn har
            jag svårt att se att ett glidande medelvärde tillför något. Förmodligen är det
            annorlunda med längre tidsserier, tex årstemperaturer sedan 150 år tillbaka. Där kan ett
            glidande medelvärde göra att graferna blir lättare att tolka då kurvan jämnar ut stora
            avvikelser.
        </p>
    </div>
);
