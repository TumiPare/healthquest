import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit{
  userInitialDataURL: string | null = "https://ionicframework.com/docs/img/demos/avatar.svg";

  constructor() { }

  ngOnInit() {           
    let firstName = "John";
    this.userInitialDataURL = this.getInitialDataURL(firstName.charAt(0));
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
    document.body.setAttribute('witp-color-theme', systemTheme);
  }
}
