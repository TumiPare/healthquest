import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps-tracking',
  templateUrl: './steps-tracking.page.html',
  styleUrls: ['./steps-tracking.page.scss'],
})
export class StepsTrackingPage implements OnInit {
  steps!: number;
  stepsError = false;

  constructor() {}

  submitSteps() {
    if (!isNaN(this.steps) && this.steps >= 0) {
      console.log('Valid steps:', this.steps);
      this.stepsError = false;
    } else {
      console.log('Invalid amount.');
      this.stepsError = true;
    }
  }

  ngOnInit() {}

  onStepsChange() {
    this.stepsError = false;
  }
}
