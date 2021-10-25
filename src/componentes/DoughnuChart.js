import { Doughnut } from 'react-chartjs-2';

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
    <div style={{ width: "30rem" }} className="mx-auto">
      <div className='header'>
        <h1 className='title'>Doughnut Chart</h1>
        <div className='links'>
          <a
            className='btn btn-gh'
            href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
          >
            Github Source
      </a>
        </div>
      </div>
      <Doughnut data={chartData} />
    </div>
  );
}