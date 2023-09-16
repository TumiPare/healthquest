import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  latitude: number = 0;
  longitude: number = 0;
  isLocationAvailable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private alertController: AlertController, 
    private http: HttpClient) { }

  getCoords() {
    return this.longitude+','+this.latitude;
  }

  getUserLocation = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();

      this.isLocationAvailable.next(true);
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    }
    catch (error) {
      console.error("Error getting user location:", error);
      this.showLocationErrorAlert();
    }
  };

  async showLocationErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Device Location',
      message: 'Please enable location access to use this app.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Do something when the user dismisses the alert
          }
        }
      ]
    });
  }
  
}

