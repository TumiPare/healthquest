import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiUrl = 'http://localhost:5000'

  constructor(
    private http: HttpClient
  ) { }

  getData()
  {
    return this.http.get(this.apiUrl+'/analytics');
  }
}
