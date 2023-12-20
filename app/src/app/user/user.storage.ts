import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStorage {
  user: any = {
    username: "andreas"
  };
}
