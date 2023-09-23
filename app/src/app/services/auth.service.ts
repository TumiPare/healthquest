import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorage } from '../user/user.storage';
import { IUser } from '../profile/user.interface';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, tap } from 'rxjs';
import { IAdViewed } from '../ad/ad-viewed.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrlLink + '/auth/'
  user: IUser | null = null;
  typeUser = new BehaviorSubject<string>('standard');

  constructor(private http: HttpClient, private userStorage: UserStorage, private router: Router) { }

  signup(
    username: string, 
    email: string,
    password: string, 
    gender: string,
    weight: number, 
    height: number,
    nationality: string, 
    dob: string) {
    
    const newUser: IUser = {
      username: username,
      password: password,
      profilePicUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      dob: dob,
      weight: weight,
      height: height,
      email: email,
      gender: gender,
      nationality: nationality,
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
      points: 0,
      type: 'standard'
    };


    console.log(nationality);
    console.log(newUser);
    
    return this.http.post(this.apiUrl+'signup', newUser).pipe(tap
      ((resp: any) => {
        this.typeUser.next(resp.type);
      }));
  }

  login(username: string, password: string) {
    const loginUser = {
      username: username,
      password: password
    }

    return this.http.post(this.apiUrl+'signin', loginUser).pipe(tap
      ((resp: any) => {
        this.typeUser.next(resp.type);
      }));
  }

  logout() {
    this.userStorage.user = null;
    this.router.navigate(['']);
  }

  goPremium() {
    return this.http.post(environment.apiUrlLink + '/user/' + this.userStorage.user.username + '/upgrade', {});
  }

  postAdTime(adid: string, status: string) {

    const adViewed: IAdViewed = {
      username: this.userStorage.user.username,
      adId: adid,
      status: status,
      timestamp: new Date()
    }

    return this.http.post(environment.apiUrlLink + '/ad', {});
  }

}
