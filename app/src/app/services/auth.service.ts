import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorage } from '../user/user.storage';
import { IUser } from '../profile/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:5000/auth/'
  user: IUser | null = null;

  constructor(private http: HttpClient, private userStorage: UserStorage) { }

  signup(username: string, password: string, weight: number, height: number, dob: string) {
    
    const newUser: IUser = {
      username: username,
      password: password,
      profilePicUrl: '',
      dob: dob,
      weight: weight,
      height: height,
      challenges: [],
      creatures: [],
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

    return this.http.post(this.apiUrl+'login', loginUser)
  }

}
