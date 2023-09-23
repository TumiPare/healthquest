import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    token: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {}
    
  login() {
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value.token).subscribe((res: any) => {
        console.log("Response: ", res);
        if(res)
        {
          this.auth.user = res;
          console.log("User: ", this.auth.user);
          this.router.navigateByUrl('/dashboard');
        }
        else{
          this.presentToast('Invalid token. Please check your token.');
        }
        }, (err: any) => {
          this.presentToast('Invalid token. Please check your token.');
        }
      );
    }
    else{
      this.presentToast('Invalid details. Please check your token.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Duration in milliseconds
      position: 'bottom', // You can change the position as needed
      color: 'danger', // You can set the color to match your UI
    });
    toast.present();
  }
}
