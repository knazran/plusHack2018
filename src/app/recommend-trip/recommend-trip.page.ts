import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-recommend-trip',
  templateUrl: './recommend-trip.page.html',
  styleUrls: ['./recommend-trip.page.scss'],
})
export class RecommendTripPage implements OnInit {
  public charts_data = [
    {data: [900, 2000, 3100, 4250, 5432, 6800, 8690, 11346]},
    {data: [1200, 2600, 4500, 5850, 7132, 9400, 11090, 13346]},
    {data: [2600, 4500, 5850, 7132, 9400, 11090, 13346, 17090 ]},
  ];
  chart_data;
  canvas: any;
  ctx: any;
  myChart: any;
  constructor() { }

  ngOnInit() {
    this.chart_data = this.charts_data[0];
    this.drawChart();
    this.myChart.datasets[0].bars[1].fillColor = 'rgb(66, 244, 86)';
    this.myChart.update();
  }

  drawChart() {
    this.canvas = document.getElementById('projectionChart');
    this.ctx = this.canvas.getContext('2d');
    Chart.defaults.global.defaultColor = '#FFFFFF';
    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'],
          datasets: [{
              data: [20, 30, 45, 70, 74, 85, 83, 81],
              backgroundColor: [
                'rgba(11, 232, 11,0.8)',
                'rgba(66, 244, 86, 0.8)',
                'rgba(199, 249, 47,0.8)',
                'rgba(249, 232, 47,0.8)',
                'rgba(249, 174, 4,0.8)',
                'rgba(249, 87, 47,0.8)',
                'rgba(249, 87, 47,0.8)',
                'rgba(249, 87, 47,0.8)'
            ]
              // pointRadius: 0,
              // borderWidth: 4,
              // borderColor: 'black',
              // fill: false,
          }]

      },
      options: {
        layout: {
            padding: {
                left: 8,
                right: 8,
                top: 15,
                bottom: 15
            }
        },
        legend: {
          display: false
        },
        scales: {
          gridLines: {
            lineWidth: 5,
            color: '#FFFFFF'
          },
          xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
                color: 'white',
            },
            display: true,
            ticks: {
              fontSize: 10,
              fontColor: 'black',
            }
          }],
          yAxes: [{
            display: true,
            gridLines: {
                color: 'grey',
            },
            ticks: {
              beginAtZero:  true
              // fontSize: 10,
              // fontColor: 'grey',
            }
          }],
        }
      }
    });
  }
}
