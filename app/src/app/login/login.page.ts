import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  loginSubscription: Subscription = new Subscription();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.loginSubscription = this.authService.login(this.username, this.password).subscribe((resp) => {
      this.router.navigateByUrl('/home/tabs/home');

    });
  }

  signup() {
    this.router.navigateByUrl('/signup');
  }

}
