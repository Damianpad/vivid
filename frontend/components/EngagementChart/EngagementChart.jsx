import { StyledEngagementChart } from './EngagementChart.style';
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const EngagementChart = () => {
// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`

    const data = {
        labels:['Label 1','Label 2', 'Label 3'],
        datasets: [{
            label: "Poll",
            data: [
                1,
                2,
                3
            ],
            backgroundColor: [`#3D4678`, `#1A1E33`, '#5E6BB8'],
            borderColor: `${secondary}`
        }]
    }

    const options = {
    }

    return (
        <StyledEngagementChart>
        <section className='DoughnutContainer'>
            <Doughnut options={options} data={data} />  
        </section>
        </StyledEngagementChart>

    )
}

export default EngagementChart; 