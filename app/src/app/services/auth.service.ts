import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorage } from '../user/user.storage';
import { IUser } from '../profile/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://healthquest.ddns.net:5000/auth/'
  user: IUser | null = null;

  constructor(private http: HttpClient, private userStorage: UserStorage, private router: Router) { }

  signup(username: string, password: string, weight: number, height: number, dob: string) {
    
    const newUser: IUser = {
      username: username,
      password: password,
      profilePicUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      dob: dob,
      weight: weight,
      height: height,
      challenges: [],
      creatures: [
        {
          name: "Tom",
          category: "hydration",
          health: 100
        },
        {
          name: "Sandy",
          category: "food",
          health: 100
        },
        {
          name: "Andi",
          category: "sleep",
          health: 100
        },
        {
          name: "Stevan",
          category: "steps",
          health: 100
        }
      ],
      friends: [],
      points: 0
    };
    
    return this.http.post(this.apiUrl+'signup', newUser);
  }

  login(username: string, password: string) {
    const loginUser = {
      username: username,
      password: password
    }

    return this.http.post(this.apiUrl+'signin', loginUser);
  }

  logout() {
    this.userStorage.user = null;
    this.router.navigate(['']);
  }

}
