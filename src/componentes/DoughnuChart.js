import { Doughnut } from 'react-chartjs-2';
import './DoughnuChart.css';

const labels = ['Bounds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'];

export default function DoughnutChart(props) {

  const chartData =  {

      labels: labels.filter((d, i) => {if(props.chartData[i]) return props.chartData[i]} ),
      datasets: [
        {
          label: '# of Votes',
          data: props.chartData.length ? [...props.chartData] : [100],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
 
  }

  return (
    <div className="mx-auto doughnut-container">
      <div className='header my-5'>
        <h1 className='title text-center'>Doughnut Chart</h1>
      </div>
      <Doughnut data={chartData} />
    </div>
  );
}