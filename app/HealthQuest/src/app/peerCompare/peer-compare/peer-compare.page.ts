import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto'

Chart.register(...registerables)

@Component({
  selector: 'app-peer-compare',
  templateUrl: './peer-compare.page.html',
  styleUrls: ['./peer-compare.page.scss'],
})
export class PeerComparePage implements OnInit {
  @ViewChild('doughnutChart') doughnutChartRef!: ElementRef;

  doughnutChart: any = null;
  mySteps: number = 2000;
  peerSteps: number = 1000;
  constructor() { }

  ngOnInit() {
    this.processDoughnutChart();
  }

  processDoughnutChart() {
    // Data for Doughnut Chart (Uptime/Downtime for Today)
    const doughnutData = {
      labels: ["My Steps", "John's Steps"],
      datasets: [{
        label: 'Loadshedding',
        data: [this.mySteps, this.peerSteps], // Uptime vs Downtime
        borderWidth: 0,
      }]
    };
    this.populateDoughnutChart(doughnutData);
  }

  populateDoughnutChart(doughnutData: any) {
    if (this.doughnutChart) {
      this.doughnutChart.clear();
      this.doughnutChart.destroy();
    }

    this.doughnutChart = new Chart("doughnutChart", {
      type: 'doughnut',
      data: doughnutData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        }
      }
    });
  }
}
