import { Injectable } from '@angular/core';
import { IUser } from '../profile/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserStorage {
  user: any = {
    username: "andreas"
  };
}
