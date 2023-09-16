import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-entry',
  templateUrl: './weight-entry.page.html',
  styleUrls: ['./weight-entry.page.scss'],
})
export class WeightEntryPage {
  weight!: number;
  weightError = false;

  constructor() {}

  submitWeight() {
    if (!isNaN(this.weight) && this.weight >= 2 && this.weight <= 500) {
      console.log('Valid weight:', this.weight);
      this.weightError = false;
    } else {
      console.log('Invalid weight. Please enter a number between 2 and 500.');
      this.weightError = true;
    }
  }

  onWeightChange() {
    this.weightError = false;
  }
}
