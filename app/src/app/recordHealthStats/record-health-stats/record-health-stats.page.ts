import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { ActionModalComponent } from 'src/app/action/action-modal/action-modal.component';

@Component({
  selector: 'app-record-health-stats',
  templateUrl: './record-health-stats.page.html',
  styleUrls: ['./record-health-stats.page.scss'],
})
export class RecordHealthStatsPage {

  constructor(private modalCtrl: ModalController) { }

  async openActionModal(title: string, category: string, prompt: string) {
    const modal = await this.modalCtrl.create({
      component: ActionModalComponent,
      componentProps: { 
        title: title,
        category: category,
        prompt: prompt
      }
    });

    modal.present();
  }
}
