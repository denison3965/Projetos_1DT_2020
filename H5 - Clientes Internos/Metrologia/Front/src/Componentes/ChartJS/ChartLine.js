import React from "react";
// Import da biblioteca externa para criação de gráficos.
import Chart from "chart.js";

const ChartLine = ({ dados, cor, min, max }) => {
    const chart = React.useRef();

    React.useEffect(() => {
        new Chart(chart.current, {
            type: "bar",
            data: {
                labels: dados.labels,
                datasets: [{
                    label: dados.titulo,
                    data: dados.valores,
                    backgroundColor: cor,
                }]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 20
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontSize: 16,
                            fontColor: "#222",
                            min,
                            max
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 16,
                            fontColor: "#222"
                        }
                    }]
                }
            }
        });

    }, [dados, cor, max, min]);

    return <canvas ref={chart} />;
};

export default ChartLine;
