import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: string = '';
  password: string = '';
  weight: number | undefined;
  height: number | undefined;
  dob: Date | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['']);
  }

  signup() {

  }

}
