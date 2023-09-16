import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INotification } from './notification.interface';
import { IFriendRequest } from './friend-request.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getNotifications(username: string) {
    return this.http.get<INotification[]>(this.apiUrl + "notification/" + username);
  }

  getFriendRequests(username: string) {
    return this.http.get<IFriendRequest[]>(this.apiUrl + "friend/" + username);
  }
}
