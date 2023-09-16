import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationService } from './location.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NearbyDoctorsService {
  apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Doctor.json?access_token='+environment.mapBoxToken;

  constructor(private http: HttpClient,
    private locatioService: LocationService) { }

   async getNearbyDoctors() {
    await this.locatioService.getUserLocation();
    let x = this.locatioService.getCoords();
    console.log(x)
    return this.http.get(this.apiUrl+'&category=doctortr&proximity='+x);
  }

}
