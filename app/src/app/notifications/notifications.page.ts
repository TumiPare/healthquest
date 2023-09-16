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
  username:string = 'testuser';
  notificiationItems: INotification[] = [];
  friendRequestItems: IFriendRequest[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.notificationsSubscription = this.notificationsService.getNotifications('testuser').subscribe((notification) => {
      this.notificiationItems = notification;
      console.log(this.notificiationItems)
    });
  }

  ngOnDestroy() {
    this.notificationsSubscription.unsubscribe();
  }

}
