import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { UserStorage } from '../user/user.storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    weight: ['', [Validators.required, Validators.min(1)]],
    height: ['', [Validators.required, Validators.min(1)]],
    dob: ['', [Validators.required, Validators.pattern( /^\d{2}\/\d{2}\/\d{4}$/)]],
  });

  signupSubscription: Subscription = new Subscription();

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
    this.router.navigate(['']);
  }

  signup() {
    if(this.signupForm.valid) {
    console.log(this.signupForm.value);
    this.signupSubscription = this.authService.signup(
        this.signupForm.value.email, 
        this.signupForm.value.password,
        this.signupForm.value.weight,
        this.signupForm.value.height,
        this.signupForm.value.dob,
      ).subscribe((resp) => {
      this.userStorage.user = resp;
      this.router.navigateByUrl('/home/tabs/home')
    });
    }
    else{
      this.presentToast('Invalid details. Please check your inputs.');
    }
  }

  ionViewDidLeave() {
    this.signupForm.reset({ updateOn: 'change' });
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
