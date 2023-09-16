import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/toast/toast.service';
import { ActionService } from '../action.service';
import { IAction } from '../action.interface';
import { UserStorage } from 'src/app/user/user.storage';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.scss'],
})
export class ActionModalComponent {

  title!: string;
  value: number = 1;
  category!: string;
  prompt!: string;

  constructor(
    private modalCtrl: ModalController, 
    private toastService: ToastService, 
    private actionService: ActionService, 
    private userStorage: UserStorage,
    private alertController: AlertController
  ) { }

  cancel() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    if (this.value > 0) {
      
      const newAction: IAction = {
        username: this.userStorage.user.username,
        category: this.category,
        value: this.value,
        timestamp: new Date()
      }

      this.actionService.sendAction(newAction).subscribe((updates) => {
        
        this.userStorage.user = updates.updatedUser;
        updates.changes.forEach(element => {
          this.presentAlert(element.title, element.points, element.body);
        });
        
        this.modalCtrl.dismiss();

      });
    } else {
      this.toastService.presentError("Value must be greater than zero");
    }

  }

  async presentAlert(title: string, points: number, body: string) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: "You earned " + points.toString() + " points",
      message: body,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
