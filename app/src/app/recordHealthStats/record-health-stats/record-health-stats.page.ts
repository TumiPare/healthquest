import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-record-health-stats',
  templateUrl: './record-health-stats.page.html',
  styleUrls: ['./record-health-stats.page.scss'],
})
export class RecordHealthStatsPage implements OnInit {
  healthForm: FormGroup = this.formBuilder.group({
    steps: ['', [Validators.required, Validators.min(0)]],
    weight: ['', [Validators.required, Validators.min(2), Validators.max(500)]],
    water: ['', [Validators.required, Validators.min(0)]],
    food: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  submitHealthStats() {
    if (this.healthForm.valid) {
      console.log("valid form");
      console.log("Steps: ",this.healthForm.value.steps);
      console.log("Weight: ",this.healthForm.value.weight);
      console.log("Water: ",this.healthForm.value.water);
      console.log("Food: ",this.healthForm.value.food);
      this.healthForm.reset();
    }
    else {
    this.failToast('Please ensure all details are correct');
    }
  }

  async failToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      color: 'danger',
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }
}
