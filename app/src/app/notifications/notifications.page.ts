import { Component } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { Subscription } from 'rxjs';
import { INotificationItem } from './notification-item.interface';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class NotificationsPage {
  notificationsSubscription: Subscription = new Subscription();
  username:string = 'testuser';
  notificiationItems: INotificationItem[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ionWillEnter() {
    this.notificationsSubscription = this.notificationsService.getNotifications('testuser').subscribe((notification) => {
      this.notificiationItems = notification;
      console.log(this.notificiationItems)
    });
  }

  ngOnDestroy() {
    this.notificationsSubscription.unsubscribe();
  }

}
