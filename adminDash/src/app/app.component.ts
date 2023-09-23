import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('userViewsChart') userViewsChart!: ElementRef;
  @ViewChild('adsChart') adsChart!: ElementRef;
  @ViewChild('ageChart') ageChart!: ElementRef;
  @ViewChild('genderChart') genderChart!: ElementRef;
  @ViewChild('nationalityChart') nationalityChart!: ElementRef;
  selectedFilter = 'today';
  constructor() {}

  ngAfterViewInit() {
    this.populateUserViewsChart();
    this.populateAdsChart();
    this.populateAgeChart();
    this.populateGenderChart();
    this.populateNationalityChart();
  }

  populateUserViewsChart() {
    const labels =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const views = [100, 150, 200, 180, 220, 130, 50];

    const data = {
      labels: labels, // Replace with your actual labels
      datasets: [
        {
          label: 'User Views',
          fill: false,
          borderColor: '#5260ff', // Line color
          data: views, // Replace with your actual data
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: true,
          title: {
            display: true,
            text: 'Views',
          },
        },
      },
    };

    new Chart(this.userViewsChart.nativeElement.getContext('2d'), {
      type: 'line',
      data: data,
      options: options,
    });
  }

  populateAdsChart()
  {
    const labels =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const adsWatched = [5, 15, 20, 18, 22, 13, 5];
    const adsSkipped = [5, 10, 15, 12, 18, 10, 3];

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Ads Watched',
          data: adsWatched,
          borderColor: '#3880ff',
          backgroundColor: '#3880ff',
        },
        {
          label: 'Ads Skipped',
          data: adsSkipped,
          borderColor: '#f04141',
          backgroundColor: '#f04141',
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: true,
          title: {
            display: true,
            text: 'Ads',
          },
        },
      },
    };

    new Chart(this.adsChart.nativeElement.getContext('2d'), {
      type: 'bar',
      data: data,
      options: options,
    });
  }

  populateAgeChart()
  {
    const ageGroups = ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61+'];
    const ageTotals = [5, 15, 20, 18, 22, 13, 5];

    const data = {
      labels: ageGroups,
      datasets: [
        {
          label: 'Age',
          data: ageTotals,
          borderColor: '#5260ff',
          backgroundColor: '#3880ff',
        },
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
           display: false
        }
     },
      scales: {
        y: {
          display: true,
          title: {
            display: true,
            text: 'Total',
          },
        },
        x: {
          display: true,
          title: {
            display: true,
            text: 'Age Groups',
          },
        }
      },
    };

    new Chart(this.ageChart.nativeElement.getContext('2d'), {
      type: 'bar',
      data: data,
      options: options,
    });
  }

  populateGenderChart()
  {
    const labels = ['Male', 'Female', 'Other'];
    const genderTotal = [50, 30, 20]
    
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Gender',
          data: genderTotal,
          backgroundColor: ['#0cd1e8', '#2dd36f', '#4854e0'],
        }
      ]
    };

    
    new Chart(this.genderChart.nativeElement.getContext('2d'), {
      type: 'doughnut',
      data: data,
    });
  }

  populateNationalityChart()
  {
    const nationalities =  ['USA', 'UK', 'Canada', 'Australia', 'India', 'China', 'Japan'];
    const nationalityTotal = [5, 15, 20, 18, 22, 13, 5];
    const backgroundColors = nationalities.map(() => {
      const hue = Math.floor(Math.random() * 360); 
      const saturation = 75; 
      const lightness = 50; // Lightness value
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
    
    console.log(backgroundColors);

    const data = {
      labels: nationalities,
      datasets: [
        {
          label: 'Ads Watched',
          data: nationalityTotal,
          borderColor: backgroundColors,
          backgroundColor: backgroundColors,
        },
      ]
    };

    new Chart(this.nationalityChart.nativeElement.getContext('2d'), {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Number of People',
            },
          },
        }

      }});
  }

  filterViewsChart(filter: any)
  {
    console.log(filter.detail.value);
  }

  filterAdsChart(filter: any)
  {
    console.log(filter.detail.value);
  }
}
