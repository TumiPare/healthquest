import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = 'http://healthquest.ddns.net:5000'

  constructor(
    private http: HttpClient
  ) { }

  getUserViewsData()
  {
    return this.http.post(this.apiUrl+'/token/verify', "");
  }

  getAdsData()
  {

  }

  getAgeData()
  {

  }

  getGenderData()
  {

  }

  getNationalityData()
  {

  }
}
