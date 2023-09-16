import { Component } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { Subscription } from 'rxjs';
import { INotification } from './notification.interface';
import { IFriendRequest } from './friend-request.interface';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class NotificationsPage {
  notificationsSubscription: Subscription = new Subscription();
  friendRequestsSubscription: Subscription = new Subscription();
  username:string = 'testuser';
  notificiationItems: INotification[] = [];
  friendRequestItems: IFriendRequest[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ionViewWillEnter() {
    this.notificationsSubscription = this.notificationsService.getNotifications('testuser').subscribe((notification) => {
      this.notificiationItems = notification;
    });

    this.friendRequestsSubscription = this.notificationsService.getFriendRequests('testuser').subscribe((friendRequest) => {
      this.friendRequestItems = friendRequest;
    });
  }

  acceptFriendRequest(friendRequest: IFriendRequest) {
    this.notificationsService.acceptFriendRequest(friendRequest).subscribe((message) => {
      console.log(message);
    });
    this.friendRequestItems = this.friendRequestItems.filter((friendRequestItem) => {
      friendRequest != friendRequestItem
    });
  }

  declineFriendRequest(friendRequest: IFriendRequest) {
    this.notificationsService.declineFriendRequest(friendRequest).subscribe((message) => {
      console.log(message);
    });
    this.friendRequestItems = this.friendRequestItems.filter((friendRequestItem) => {
      friendRequest != friendRequestItem
    });
  }

  ngOnDestroy() {
    this.notificationsSubscription.unsubscribe();
    this.friendRequestsSubscription.unsubscribe();
  }

}
