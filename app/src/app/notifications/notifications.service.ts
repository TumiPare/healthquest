import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INotificationItem } from './notification-item.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  apiUrl = 'http://localhost:8080/notification/';

  constructor(private http: HttpClient) { }

  getNotifications(username: string) {
    return this.http.get<INotificationItem[]>(this.apiUrl+username);
  }
}
