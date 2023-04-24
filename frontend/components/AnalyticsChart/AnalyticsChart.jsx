import { StyledAnalyticsChart } from "./AnalyticsChart.styles";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Revenue',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [2000,2200,3000,400,2350,2000,2200,3000,2000,2350,2200,2000],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [1000,2000,3000,1200,1500,1700,2200,2500,3000,4500,3000,2200],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
const AnalyticsChart = () => {


    return (
        <StyledAnalyticsChart>
            <div className="analyticsContainer">
                <h2>Analytics Chart</h2>
                <div className="chartContainer">
                <Line options={options} data={data} />
                </div>
            </div>
        </StyledAnalyticsChart>
    )
}

export default AnalyticsChart