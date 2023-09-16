import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  constructor(private modalCtrl: ModalController, private toastService: ToastService, private actionService: ActionService, private userStorage: UserStorage) { }

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

      this.actionService.sendAction(newAction).subscribe({
        
      });
      
    }

    this.toastService.presentError("Value must be greater than zero");
  }

}
