import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AuthService } from '../services/auth.service';
import { DashboardService } from './dashboard.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements AfterViewInit {
  @ViewChild('userViewsChart') userViewsChart!: ElementRef;
  @ViewChild('adsChart') adsChart!: ElementRef;
  @ViewChild('ageChart') ageChart!: ElementRef;
  @ViewChild('genderChart') genderChart!: ElementRef;
  @ViewChild('nationalityChart') nationalityChart!: ElementRef;
  selectedFilter = 'today';
  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}
  ngOnInit()
  {

  }
  viewData: any = null;
  adsData: any = null;
  ageData: any = null;
  genderData: any = null;
  nationalityData: any = null;

  ngAfterViewInit() {
    this.dashboardService.getData().subscribe((data: any) => {
      console.log(data);
      this.viewData = data.userViews;
      this.adsData = data.ads;
      this.ageData = data.demographicByAge;
      this.genderData = data.demographicByGender;
      this.nationalityData = data.demographicByNationality;

      this.populateUserViewsChart();
      this.populateAdsChart();
      this.populateAgeChart();
      this.populateGenderChart();
      this.populateNationalityChart();
    });
  }

  populateUserViewsChart() {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const labels = [];
    const views = [];

    for (let i = 0; i < this.viewData.length; i++) {
      labels[i] = monthNames[parseInt(this.viewData[i].type) - 1];
      views[i] = this.viewData[i].value;
    }

    const data = {
      labels: labels, // Replace with your actual labels
      datasets: [
        {
          label: 'User Views',
          fill: false,
          borderColor: '#457b9d', // Line color
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
    const labels =  ['Today'];

    const adsWatched =  this.adsData[0].value;
    const adsSkipped =  this.adsData[3].value;

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Ads Watched',
          data: adsWatched,
          borderColor: '#457b9d',
          backgroundColor: '#457b9d',
        },
        {
          label: 'Ads Skipped',
          data: adsSkipped,
          borderColor: '#e63946',
          backgroundColor: '#e63946',
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
          borderColor: '#457b9d',
          backgroundColor: '#457b9d',
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
    const labels =  this.genderData.map((item: any) => item.group);
    const genderTotal =  this.genderData.map((item: any) => item.value);
    
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Gender',
          data: genderTotal,
          backgroundColor: ['#457b9d', '#1d3557', '#e63946'],
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
    const nationalities =  this.nationalityData.map((item: any) => item.group);
    const nationalityTotal = this.nationalityData.map((item: any) => item.value);
    const colors = ['#1D3557', '#457B9D', '#A0B9C9', '#A4CAD3', '#A8D8DB'];

    const backgroundColors = nationalities.map((_: any, index: number) => {
      const colorIndex = index % colors.length;
      return colors[colorIndex];
    });
    
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

  logout()
  {
    this.authService.logout();
  }
}
