import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { UserStorage } from '../user/user.storage';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: string = '';
  password: string = '';
  weight: number = 0;
  height: number = 0;
  dob: string = '';
  signupSubscription: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService, private userStorage: UserStorage) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['']);
  }

  signup() {
    this.signupSubscription = this.authService.signup(this.username, this.password, this.weight, this.height, this.dob).subscribe((resp) => {
      this.userStorage.user = resp;
      this.router.navigateByUrl('/home/tabs/home')
    });
  }

}
