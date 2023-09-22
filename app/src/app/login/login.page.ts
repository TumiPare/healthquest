import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { UserStorage } from '../user/user.storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  loginSubscription: Subscription = new Subscription();

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private userStorage: UserStorage,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    ) { }

  ngOnInit() {
  }

  login() {
    if(this.loginForm.valid) {
    this.loginSubscription = this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((resp) => {
      this.userStorage.user = resp;
      console.log("User", resp);
      this.router.navigateByUrl('/home/tabs/home');
    });
    }
    else{
      this.presentToast('Invalid details. Please check your inputs.');
    }
  }

  signup() {
    this.router.navigateByUrl('/signup');
  }

  ionViewDidLeave() {
    this.loginForm.reset({ updateOn: 'change' });
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
