// components/LineChart.js
import React from "react";
import {Line} from "react-chartjs-2";
function ScalingChart({chartData}) {
  return (<div className="chart-container">
    <Line data={chartData} options={{
          maintainAspectRatio: false,

        scales: {
          x: {

            title: {
              color: 'White',
              display: true,
              text: 'Days Since Genesis',
              border: {
                color: 'white'
              }
            }
          },


          y: {

            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                    return value;
                },
                 display: true
            },
            title: {
              color: 'White',
              display: true,
              text: 'Max S:A Ratio',
              border: {
                color: 'white'
              }
            }
          },

          y1: {

               position: 'right',

            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                    return value;
                },
                 display: true
            },
            title: {
              color: 'White',
              display: true,
              text: 'Max S:A Ratio',
              border: {
                color: 'white'
              }
            }
          },


        },

        responsive: true,
        plugins: {
          tooltip: {
              enabled: true,

          },
          title: {
            display: true,
            text: "Ethereum vs Algorand (with sharding) Max S:A Ratio"
          },
          legend: {
            display: true
          },
          colors: {
            enabled: true
          }
        }

      }}/>
  </div>);
}
export default ScalingChart;
