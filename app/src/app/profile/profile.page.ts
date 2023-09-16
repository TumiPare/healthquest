import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { ProfileService } from './profile.service';
import { IUser } from './user.interface';
import { Subscription } from 'rxjs';
import { ToastService } from '../toast/toast.service';
import { UserStorage } from '../user/user.storage';

register();

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  userInitialDataURL: string | null = "https://ionicframework.com/docs/img/demos/avatar.svg";
  userDataSubscription: Subscription = new Subscription();
  userMayKnowSubscription: Subscription = new Subscription();
  userData: IUser | null = null;
  userMayKnow: IUser[] = [];

  constructor(private profileService: ProfileService, private toastService: ToastService, private userStorage: UserStorage) { }

  ionViewWillEnter() {           
    this.userDataSubscription = this.profileService.getUser(this.userStorage.user.username).subscribe((user) => {
      this.userData = user;
      this.userStorage.user = user;

      if (user) {
        if (user.profilePicUrl === "") {
          this.userInitialDataURL = this.getInitialDataURL(user.username.charAt(0));
        } else {
          this.userInitialDataURL = user?.profilePicUrl;
        }
      }
    });

    this.userMayKnowSubscription = this.profileService.getUserMayKnow(this.userStorage.user.username).subscribe((userMayKnow) => {
      this.userMayKnow = userMayKnow;
    });
  }

  getInitialDataURL(initial: string): string | null {
    const canvas = document.createElement('canvas');
    canvas.width = 48;
    canvas.height = 48;
    const context = canvas.getContext('2d');

    if (!context) {
      console.error('Could not get 2D context.');
      return null;
    }

    context.fillStyle = '#ff9800'; // Customize the background color
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = '24px Arial'; // Customize the font size and family
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = '#ffffff'; // Customize the text color
    context.fillText(initial, canvas.width / 2, canvas.height / 2);
    return canvas.toDataURL();
  }

  toggleTheme(systemTheme: string) {
    document.body.setAttribute('HealthQuest-color-theme', systemTheme);
  }

  friendRequest(friendUsername: string) {
    this.profileService.friendRequest(this.userStorage.user.username, friendUsername).subscribe((message) => {
      this.toastService.presentToast(message.message);
    });
  }
}