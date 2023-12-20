import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://healthquest.ddns.net:5000'

  user: any = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(token: string) {
    const loginUser = {
      token: token,
    }

    return this.http.post(this.apiUrl+'/token/verify', loginUser);
  }

  logout() {
    this.user = null;
    this.router.navigate(['']);
  }
}
