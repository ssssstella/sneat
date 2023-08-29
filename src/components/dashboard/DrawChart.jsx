import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler
);

export default function DrawChart({ type, data, labels, bgColor, lineGradient, lineInteract, donutText }) {

    const lineOptions = {
        responsive: true,
        devicePixelRatio: 4,
        scales: {
            x: {
                grid: {
                    display: false,
                    tickColor: 'transparent',
                },
                border: {
                    display: lineInteract ? true : false,
                },
                ticks: {
                    display: lineInteract ? true : false,
                }
            },
            y: {
                grid: {
                    display: lineInteract ? true : false,
                    tickColor: 'transparent'
                },
                border: {
                    display: false,
                    dash: lineInteract ? [4,4] : [],
                },
                ticks: {
                    display: false,
                    beginAtZero: true
                },

            },
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: lineInteract ? {
                mode: 'index',
                intersect: false
            } : { enabled: false },
        
        },
    };
    const lineData = {
        labels: labels,
        datasets: [
            {
                label: '',
                data: data,
                borderColor: bgColor,
                backgroundColor: lineGradient ? function (context) {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    // This case happens on initial chart load
                    if (!chartArea) return;
                    return getGradient(ctx, chartArea, bgColor);
                } : bgColor,
                fill: lineGradient ? true : false,
                lineTension: 0.4,
                pointRadius: 0,
            },
        ],
    };


    function getGradient(ctx, chartArea, bgColor) {
        let gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
        );
        gradient.addColorStop(0.9, bgColor);
        gradient.addColorStop(0, "white");
        return gradient;
    }

    // donut separation
    const donutOptions = {
        responsive: true,
        devicePixelRatio: 4,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
        },
    };
    const donutData = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: bgColor,
                borderColor: bgColor,
                borderWidth: 1,
                spacing: 10,
                cutout: '85%'
            },
        ],
    };
    //hoverLabel plugin block
    const hoverLabel = {
        id: 'hoverLabel',
        afterDraw(chart, args, options) {
            const { ctx, chartArea: { left, right, top, bottom, width, height } } = chart;
            ctx.save();
            ctx.font = '16px sans-serif';
            ctx.textAlign = 'center';
            let fillText = ''
            if (chart._active.length > 0) {
                const textLabel = chart.config.data.labels[chart._active[0].index];
                const numberLabel = chart.config.data.datasets[chart._active[0].datasetIndex].data[chart._active[0].index];
                ctx.fillStyle = chart.config.data.datasets[chart._active[0].datasetIndex].borderColor[chart._active[0].index];
                fillText = `${textLabel}: ${numberLabel}`;
            } else {
                fillText = donutText;
                ctx.fillStyle = 'rgba(50, 71, 92, 0.6)'
            }

            ctx.fillText(fillText, width / 2, height / 2 + top)
        }
    }


    const stackedBarOptions = {
        responsive: true,
        devicePixelRatio: 4,
        barPercentage: 0.15,
        borderRadius: 10,
        plugins: {
            legend: {
                align: 'start',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxHeight: 6
                }
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
                border: {
                    display: false
                },
            },
            y: {
                border: {
                    display: false
                },
                ticks: { stepSize: 10 }
            },
        },
    };
    const stackedBarData = {
        labels: labels,
        datasets: [
            {
                label: '2022',
                data: data[0],
                backgroundColor: bgColor[0],
            },
            {
                label: '2021',
                data: data[1],
                backgroundColor: bgColor[1],
            },
        ],
    };
    const stackedBarPlugin = {
        id: "increase-legend-spacing",
        beforeInit(chart) {
            // Get reference to the original fit function
            const originalFit = chart.legend.fit;
            // Override the fit function
            chart.legend.fit = function fit() {
                // Call original function and bind scope in order to use `this` correctly inside it
                originalFit.bind(chart.legend)();
                this.height += 20;
            };
        }
    };


    // bar chart
    const barOptions = {
        responsive: true,
        devicePixelRatio: 4,
        borderRadius: 2,
        // barPercentage: 2,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false
                },
            },
            y: {
                grid: {
                    display: false,
                },
                border: {
                    display: false
                },
                ticks: {
                    display: false,
                    beginAtZero: true
                }
            },
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
    };
    const barData = {
        // need to have label
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: bgColor
            },
        ],
    };


    if (type === 'line') {
        return <Line data={lineData} options={lineOptions} />
    } else if (type === 'donut') {
        return <Doughnut data={donutData} options={donutOptions} plugins={[hoverLabel]} />
    } else if (type === 'stacked') {
        return <Bar data={stackedBarData} options={stackedBarOptions} plugins={[stackedBarPlugin]} />
    } else {
        return <Bar data={barData} options={barOptions} />
    }
}
