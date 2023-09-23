import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INotification } from './notification.interface';
import { IFriendRequest } from './friend-request.interface';
import { IMessage } from '../message.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  apiUrl = environment.apiUrlLink + '/';

  constructor(private http: HttpClient) { }

  getNotifications(username: string) {
    return this.http.get<INotification[]>(this.apiUrl + "notification/" + username);
  }

  getFriendRequests(username: string) {
    return this.http.get<IFriendRequest[]>(this.apiUrl + "friend/" + username);
  }

  acceptFriendRequest(friendRequest: IFriendRequest) {
    return this.http.post<IMessage>(this.apiUrl + "friend/accept", friendRequest);
  }

  declineFriendRequest(friendRequest: IFriendRequest) {
    return this.http.post<IMessage>(this.apiUrl + "friend/decline", friendRequest);
  }
}
