import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart } from 'chart.js';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

 const Barchart = () => {
  const chartReference = React.createRef();
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  const data = {
    labels: ['Contacts', 'Offices', 'Vendors'],
    datasets: [
      {
        label: 'Stats Charts',
        backgroundColor: ['#3267B1', '#242450', '#306BE8'],
        borderColor: '#EBEBEB',
        borderWidth: 1,
        borderRadius: [0, 0, 0],
        data: [1000, 1200, 300],
      },
      {
        backgroundColor: '#F5F5F5',
        hoverBackgroundColor: '#F5F5F5',
        data: [1000, 1200, 300],
        datalabels: {
          display: false
        }
      },
    ]
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        barPercentage: 0.1,
        stacked: true,
        ticks: {
          color: '#000000',
          fontSize: 14
        },
        grid: {
          display: true,
          color: '#F5F5F5',
          borderWidth: 7,
          borderColor: ' #D9D9D9',
        }
      },
      y: {
        ticks: {
          display: false,
          color: '#F5F5F5',
        },
        grid: {
          drawTicks: false,
          drawBorder: false
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
      tooltip: {
        filter: tooltipItem => !tooltipItem.datasetIndex
      },
      datalabels: {
        display: true,
        anchor: 'top',
        color: '#FFFFFF',
        align: 'top',
      },
    }
  };

  return (
    <div>  <Bar
    ref={chartReference}
    height={200}
    options={options}
    data={data}
  /></div>
  )
}
 export default Barchart