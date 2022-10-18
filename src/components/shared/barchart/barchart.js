

import React from 'react'
import {Bar} from 'react-chartjs-2'
import { useState } from 'react'
import {Chart as chartjs} from "chart.js/auto"




function BarChart({}){
 
  const [userData,] = useState({
  
    labels: ['Contacts', 'Offices', 'Vendors'],
    datasets: [{
     
      data:[1000,1200,300],
   
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
  })
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
  
  };
  return <div><Bar data={userData} options={axis}/></div>
  }

  export default BarChart
