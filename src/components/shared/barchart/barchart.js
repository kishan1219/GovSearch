import React from 'react'
import {Bar} from 'react-chartjs-2'
import { UserData } from './data'
import { useState } from 'react'
import {Chart as chartjs} from "chart.js/auto"



function BarChart({chartData ,optionData,}){
 
  const [userData,] = useState({
    labels: UserData.map((data) => data.month),

    datasets: [{
      label: " Users Gained ",
      data: UserData.map((data) => data.userGain),


    //   borderColor:[
    //     "black",
        
    //   ],
    //   color:[
    //     "black",
    //   ],

    //   borderWidth : 1,
  
    //   radius: 2,
    //   backgroundColor: "#ffffff30",
    backgroundColor: [
        '#3267B1',
        '#242450',
        '#306BE8',
       
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
   

      fill: true
    },
  ],
  })
  return <div><Bar data={userData} options={optionData}/></div>
  }

  export default BarChart