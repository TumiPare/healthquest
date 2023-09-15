import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-intake',
  templateUrl: './water-intake.page.html',
  styleUrls: ['./water-intake.page.scss'],
})
export class WaterIntakePage implements OnInit {
  water!: number;
  waterError = false;

  constructor() {}

  ngOnInit() {
  }

  submitWater() {
    if (!isNaN(this.water) && this.water >= 1 && this.water <= 50) {
      console.log('Valid weight:', this.water);
      this.waterError = false;
    } else {
      console.log('Invalid amount. Please enter a number between 1 and 50.');
      this.waterError = true;
    }
  }

  onWaterChange() {
    this.waterError = false;
  }
}
