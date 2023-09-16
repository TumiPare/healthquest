import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileService } from 'src/app/profile/profile.service';
import { ToastService } from 'src/app/toast/toast.service';
import { IChallenge } from 'src/app/user/challenge.interface';
import { UserStorage } from 'src/app/user/user.storage';

@Component({
  selector: 'app-challenge-modal',
  templateUrl: './challenge-modal.component.html',
  styleUrls: ['./challenge-modal.component.scss'],
})
export class ChallengeModalComponent {
  
  name: string = '';
  category: string = 'hydration';
  goal: number = 1;
  type: string = 'daily';

  constructor(private modalCtrl: ModalController, private userStorage: UserStorage, private profileService: ProfileService, private toastService: ToastService) {}

  cancel() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    if (this.userStorage.user) {
      
      const newChallenge: IChallenge = {
        name: this.name,
        category: this.category,
        goal: this.goal,
        progress: 0,
        type: this.type,
        dateStarted: new Date().toJSON().slice(0, 10)
      }

      if (this.userStorage.user.challenges.find((challenge: IChallenge) => { challenge.name === newChallenge.name })) {
        this.toastService.presentError("Challenge with this name already exists");
        return;
      }

      this.userStorage.user.challenges.push(newChallenge);

      this.profileService.saveUser(this.userStorage.user).subscribe((user) => {
        this.toastService.presentToast("Successfully added challenge");
        this.userStorage.user = user;
      });

    }

    this.modalCtrl.dismiss();
  }

  numericOnly(event: any): boolean {
    let pattern;
    if (this.goal > 0) {
      pattern = /^([0-9])$/;
    } else {
      pattern = /^([1-9])$/;
    }

    let result = pattern.test(event.key);
    return result;
 }
}
