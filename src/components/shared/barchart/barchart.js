import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as chartjs } from "chart.js/auto"
import ChartDataLabels from "chartjs-plugin-datalabels";

function BarChart({ }) {

  const userData = {

    labels: ['Contacts', 'Offices', 'Vendors'],
    datasets: [{

      data: [1000, 1200, 300],

      backgroundColor: [
        '#3267B1',
        '#242450',
        '#306BE8',
      ],
      borderColor: [
        '#EBEBEB',
      ],
    },

    ],
  }
  const axis = {
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
      datalabels: {
        anchor: "end",
        align: "end",
        offset: -30,
        color: "#FFFFFF",
        font: { size: 18 }
      }
    },

  };
  return <div><Bar plugins={[ChartDataLabels]} data={userData} options={axis} /></div>
}

export default BarChart
