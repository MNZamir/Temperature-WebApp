import React from "react";
import { 
    Chart as ChartJS, 
    LineElement, 
    PointElement, 
    CategoryScale, 
    LinearScale, 
    Title,
    Tooltip,
    Legend 
} from 'chart.js'
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
)

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Temperature',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#db86b2',
            borderColor: '#B57295',
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            borderJoinStyle: '#B57295',
            pointBorderColor: '#B57295',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#B57295',
            pointHoverBorderColor: '#B57295',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [32, 35, 29, 29, 30, 33, 31, 34, 35, 36, 34, 30],
        },
    ],
}

const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                borderDash: [3, 3],
            },
            // beginAtZero: true, // this works
        },
    },
    plugins: {
        legend: {
            display: false
        },
        title: {
          display: true,
          text: 'Temperature Throughout The Year',
        },
      },
}

function MyChart() {
    return (
        <Line
        data={data}
        options={options}
    />
    );
}


export default MyChart;
